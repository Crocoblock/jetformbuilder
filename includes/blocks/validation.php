<?php


namespace Jet_Form_Builder\Blocks;


use Jet_Form_Builder\Blocks\Advanced_Rules\Match_Not_Regexp_Rule;
use Jet_Form_Builder\Blocks\Advanced_Rules\Match_Regexp_Rule;
use Jet_Form_Builder\Blocks\Advanced_Rules\Must_Contain_Characters_Rule;
use Jet_Form_Builder\Blocks\Advanced_Rules\Must_Equal_Rule;
use Jet_Form_Builder\Blocks\Advanced_Rules\Must_Not_Contain_Characters_Rule;
use Jet_Form_Builder\Blocks\Advanced_Rules\Server_Side_Rule;
use Jet_Form_Builder\Blocks\Ssr_Validation\Validation_Callbacks;
use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Blocks\Validation_Messages\Base_Message;
use Jet_Form_Builder\Blocks\Validation_Messages\Has_Remaining_Chars;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Char_Max;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Char_Min;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Empty_Value;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Not_Complete_Mask;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Not_Valid_Email;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Not_Valid_Url;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Number_Max;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Number_Min;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Plugin;

/**
 * @method static Validation instance()
 *
 * Class Validation_Messages
 * @package Jet_Form_Builder\Blocks
 */
class Validation implements Arrayable {

	use Instance_Trait;

	const FORMAT_ADVANCED = 'advanced';
	const FORMAT_BROWSER  = 'browser';
	const HANDLE          = 'jet-fb-advanced-reporting';

	/**
	 * @var Base_Message[]
	 */
	private $messages;
	public  $callbacks;
	private $settings = array();

	public function __construct() {
		$this->messages = apply_filters(
			'jet-form-builder/validation-messages',
			$this->get_messages()
		);

		$this->callbacks = new Validation_Callbacks();

		add_filter(
			'jet-form-builder/before-start-form',
			array( $this, 'add_validation_messages_global' )
		);
		add_action(
			'jet-form-builder/before-start-form-row',
			array( $this, 'add_validation_block' )
		);
		add_action(
			'wp_enqueue_scripts',
			array( $this, 'register_scripts' )
		);
	}

	/**
	 * @return Base_Message[]
	 */
	private function get_messages(): array {
		return array(
			new Has_Remaining_Chars(),
			new Is_Number_Max(),
			new Is_Number_Min(),
			new Is_Char_Max(),
			new Is_Char_Min(),
			new Is_Empty_Value(),
			new Is_Not_Valid_Email(),
			new Is_Not_Valid_Url(),
			new Is_Not_Complete_Mask(),
		);
	}

	public function register_scripts() {
		wp_register_script(
			self::HANDLE,
			Plugin::instance()->plugin_url( 'assets/js/frontend/advanced.reporting{min}.js' ),
			array(
				Manager::CALCULATED_HANDLE,
			),
			Plugin::instance()->get_version(),
			true
		);
	}

	public function add_validation_messages_global( string $markup ): string {
		$this->settings = $this->get_settings();

		if ( ! $this->is_advanced_form() ) {
			return $markup;
		}

		$data    = Tools::encode_json( $this->settings );
		$form_id = jet_fb_live()->form_id;

		wp_add_inline_script(
			'jet-form-builder-frontend-forms',
			"
			window.JetFormsValidation = window.JetFormsValidation ?? {};
			window.JetFormsValidation[ {$form_id} ] = $data;
			"
		);

		return $markup;
	}

	public function add_validation_block( Base $block ) {
		/**
		 * If in post meta enable Advanced validation
		 * or right in block settings
		 */
		if ( ! $this->is_advanced( $block ) ) {
			return;
		}
		wp_enqueue_script( self::HANDLE );

		$type  = $this->get_block_type( $block );
		$rules = $block->block_attrs['validation']['rules'] ?? array();

		$block->add_attribute( 'data-validation-type', $type ?: 'inherit' );
		$block->add_attribute( 'data-validation-rules', Tools::encode_json( $rules ) );

		/**
		 * If advanced validation not enabled right in block settings
		 */
		if ( self::FORMAT_ADVANCED !== $type ) {
			return;
		}

		$messages = $block->block_attrs['validation']['messages'] ?? array();

		$block->add_attribute( 'data-validation-messages', Tools::encode_json( $messages ) );
	}

	public function get_settings(): array {
		$validation = jet_form_builder()->post_type->get_validation( jet_fb_live()->form_id );

		$response = array(
			'type'     => $validation['type'] ?? self::FORMAT_BROWSER,
			'messages' => array(),
		);

		if ( self::FORMAT_BROWSER === $response['type'] ) {
			return $response;
		}

		foreach ( $this->messages as $message ) {
			$response['messages'][ $message->get_id() ] = (
				$validation['messages'][ $message->get_id() ] ?? $message->get_initial()
			);
		}

		return $response;
	}

	protected function is_advanced( Base $block ): bool {
		$type = $this->get_block_type( $block );

		return $type
			? self::FORMAT_ADVANCED === $type
			: $this->is_advanced_form();
	}

	protected function is_advanced_form(): bool {
		return self::FORMAT_ADVANCED === ( $this->settings['type'] ?? '' );
	}

	protected function get_block_type( Base $block ): string {
		return $block->block_attrs['validation']['type'] ?? '';
	}

	public function formats(): array {
		return array(
			array(
				'value' => self::FORMAT_BROWSER,
				'label' => __( 'Browser', 'jet-form-builder' ),
				'title' => __( 'Browser native validation' ),
			),
			array(
				'value' => self::FORMAT_ADVANCED,
				'label' => __( 'Advanced', 'jet-form-builder' ),
				'title' => __( 'More flexible JetFormBuilder\'s validation', 'jet-form-builder' )
			),
		);
	}

	public function rule_types(): array {
		return Array_Tools::to_array(
			array(
				new Must_Equal_Rule(),
				new Must_Contain_Characters_Rule(),
				new Must_Not_Contain_Characters_Rule(),
				new Match_Regexp_Rule(),
				new Match_Not_Regexp_Rule(),
				new Server_Side_Rule(),
			)
		);
	}

	public function to_array(): array {
		return array(
			'messages'      => Array_Tools::to_array( $this->messages ),
			'ssr_callbacks' => Array_Tools::to_array( $this->callbacks->get_items() ),
			'formats'       => $this->formats(),
			'rule_types'    => $this->rule_types(),
		);
	}

}