<?php


namespace Jet_Form_Builder\Blocks;


use Jet_Form_Builder\Blocks\Render\Form_Builder;
use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Blocks\Validation_Messages\Base_Message;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Char_Max;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Char_Min;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Empty_Value;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Not_Complete_Mask;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Not_Valid_Email;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Not_Valid_Url;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Post_Meta\Validation_Meta;

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

	private $messages;
	private $settings = array();

	public function __construct() {
		$this->messages = apply_filters(
			'jet-form-builder/validation-messages',
			$this->get_messages()
		);

		add_filter(
			'jet-form-builder/before-start-form',
			array( $this, 'add_validation_messages_global' )
		);
		add_action(
			'jet-form-builder/before-start-form-row',
			array( $this, 'add_validation_messages_block' )
		);
	}

	/**
	 * @return Base_Message[]
	 */
	private function get_messages(): array {
		return array(
			new Is_Char_Max(),
			new Is_Char_Min(),
			new Is_Empty_Value(),
			new Is_Not_Valid_Email(),
			new Is_Not_Valid_Url(),
			new Is_Not_Complete_Mask(),
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

	public function add_validation_messages_block( Base $block ) {
		/**
		 * If in post meta enable Advanced validation
		 * or right in block settings
		 */
		if ( ! $this->is_advanced( $block ) ) {
			return;
		}
		$type = $this->get_block_type( $block );

		$block->add_attribute( 'data-validation-type', $type );

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

		foreach ( $this->messages() as $message ) {
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

	/**
	 * @return Base_Message[]
	 */
	public function messages(): array {
		return $this->messages;
	}

	public function to_array(): array {
		return array(
			'messages' => Array_Tools::to_array( $this->messages() ),
			'formats'  => $this->formats(),
		);
	}

}