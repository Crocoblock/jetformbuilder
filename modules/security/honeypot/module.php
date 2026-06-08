<?php


namespace JFB_Modules\Security\Honeypot;

use Jet_Form_Builder\Live_Form;
use JFB_Components\Module\Base_Module_It;
use JFB_Modules\Security\Exceptions\Spam_Exception;

// If this file is called directly, abort.
if (! defined('WPINC')) {
	die;
}

class Module implements Base_Module_It
{

	const FIELD_NAME    = 'name';
	const FIELD_EMAIL   = 'email';
	const FIELD_PHONE   = 'phone';
	const FIELD_COMPANY = 'company';

	const SPAM_EXCEPTION = 'honeypot';

	const HONEYPOT_STYLE_HANDLE = 'jet-form-builder-honeypot';

	public function __construct()
	{
		add_filter('jet-form-builder/security/spam-statuses', array($this, 'add_spam_statuses'));
	}

	public function rep_item_id()
	{
		return 'honeypot';
	}

	public function condition(): bool
	{
		return true;
	}

	public function add_spam_statuses($statuses)
	{
		$statuses[] = self::SPAM_EXCEPTION;

		return $statuses;
	}

	public function init_hooks()
	{
		add_filter(
			'jet-form-builder/before-render-field',
			array($this, 'on_render_field'),
			10,
			3
		);

		add_filter(
			'jet-form-builder/request-handler/request',
			array($this, 'handle_request')
		);

		add_filter(
			'jet-form-builder/message-types',
			array($this, 'handle_global_messages')
		);

		add_action(
			'wp_enqueue_scripts',
			array($this, 'enqueue_styles'),
			20
		);
	}

	public function remove_hooks()
	{
		remove_filter(
			'jet-form-builder/before-render-field',
			array($this, 'on_render_field')
		);

		remove_filter(
			'jet-form-builder/request-handler/request',
			array($this, 'handle_request')
		);

		remove_filter(
			'jet-form-builder/message-types',
			array($this, 'handle_global_messages')
		);

		remove_action(
			'wp_enqueue_scripts',
			array($this, 'enqueue_styles'),
			20
		);
	}

	public function enqueue_styles()
	{
		wp_add_inline_style(
			self::HONEYPOT_STYLE_HANDLE,
			'
			.jfb-user-info {
				position: absolute;
				top: 0;
				left: 0;
				width: 1px;
				height: 1px;
				overflow: hidden;
				clip-path: inset(50%);
				white-space: nowrap;
				user-select: none;
				-webkit-user-select: none;
			}
			'
		);
	}

	private function get_honeypot_base_names(): array
	{
		return array(
			self::FIELD_NAME,
			self::FIELD_EMAIL,
			self::FIELD_PHONE,
			self::FIELD_COMPANY,
		);
	}

	private function get_honeypot_field_names(array $blocks): array
	{
		$existing_names = array_fill_keys(
			$this->get_existing_field_names($blocks),
			true
		);

		$honeypot_names = array();

		foreach ($this->get_honeypot_base_names() as $base_name) {
			$honeypot_names[] = $this->resolve_honeypot_field_name(
				$base_name,
				$existing_names
			);

			$existing_names[end($honeypot_names)] = true;
		}

		return $honeypot_names;
	}

	private function resolve_honeypot_field_name(string $base_name, array $existing_names): string
	{
		$candidates = array(
			$base_name,
			'_' . $base_name,
			sprintf('_jfb_%s_hp_', $base_name),
		);

		foreach ($candidates as $candidate) {
			if (empty($existing_names[$candidate])) {
				return $candidate;
			}
		}

		$index = 2;

		do {
			$candidate = sprintf('_jfb_%s_hp_%d', $base_name, $index);
			++$index;
		} while (! empty($existing_names[$candidate]));

		return $candidate;
	}

	private function get_existing_field_names(array $blocks): array
	{
		$result = array();

		$this->walk_blocks_for_field_names($blocks, $result);

		return array_values(array_unique($result));
	}

	private function walk_blocks_for_field_names(array $blocks, array &$result)
	{
		foreach ($blocks as $block) {
			if (! is_array($block)) {
				continue;
			}

			if (isset($block['attrs']['name']) && is_string($block['attrs']['name'])) {
				$result[] = $block['attrs']['name'];
			}

			if (isset($block['name']) && is_string($block['name'])) {
				$result[] = $block['name'];
			}

			if (! empty($block['innerBlocks']) && is_array($block['innerBlocks'])) {
				$this->walk_blocks_for_field_names($block['innerBlocks'], $result);
			}
		}
	}

	public function on_render_field(string $content, string $field_name, array $attrs): string
	{
		$type = $attrs['action_type'] ?? '';

		if ('submit-field' !== $field_name || 'submit' !== $type) {
			return $content;
		}

		$args = jet_form_builder()->post_type->get_args();

		if (empty($args['use_honeypot'])) {
			return $content;
		}

		$fields = '';

		foreach ($this->get_honeypot_field_names(Live_Form::instance()->blocks) as $name) {
			$fields .= sprintf(
				'<input type="text" name="%s" autocomplete="one-time-code">',
				esc_attr($name)
			);
		}

		$content .= sprintf(
			'<div class="jfb-user-info" inert>%s</div>',
			$fields
		);

		return $content;
	}

	/**
	 * @param array $request
	 *
	 * @return array
	 * @throws Spam_Exception
	 */
	public function handle_request(array $request): array
	{
		$args = jet_form_builder()->post_type->get_args();

		if (empty($args['use_honeypot'])) {
			return $request;
		}

		$honeypot_names = $this->get_honeypot_field_names(
			jet_form_builder()->form_handler->request_handler->_fields
		);

		foreach ($honeypot_names as $honeypot_name) {
			if (! empty($request[$honeypot_name])) {
				// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
				throw new Spam_Exception(self::SPAM_EXCEPTION);
			}

			unset($request[$honeypot_name]);
		}

		return $request;
	}

	public function handle_global_messages(array $types): array
	{
		$types[self::SPAM_EXCEPTION] = array(
			'label' => __('Honeypot validation failed', 'jet-form-builder'),
			'value' => __('You are not allowed to fill in the honeypot field', 'jet-form-builder'),
		);

		return $types;
	}
}
