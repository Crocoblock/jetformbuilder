<?php


namespace Jet_Form_Builder\Blocks;

use Jet_Form_Builder\Blocks\Advanced_Rules\Rules_Controller;
use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Blocks\Validation_Messages\Base_Message;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Char_Max;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Char_Min;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Date_Max;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Date_Min;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Empty_Value;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_File_Ext;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_File_Size;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Files_Max;
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
use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
	private $rules;
	private $settings        = array();
	private $inline_messages = array();

	public function __construct() {
		$this->messages = apply_filters(
			'jet-form-builder/validation-messages',
			$this->get_messages()
		);

		$this->rules = new Rules_Controller();

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

		/**
		 * @link https://github.com/Crocoblock/issues-tracker/issues/1542
		 */
		add_action(
			'jet_plugins/frontend/register_scripts',
			array( $this, 'register_scripts' )
		);
		add_action( 'jet-form-builder/validate-field', array( $this, 'validate_block' ) );
	}

	/**
	 * @return Base_Message[]
	 */
	private function get_messages(): array {
		return array(
			new Is_Empty_Value(),
			new Is_Number_Min(),
			new Is_Number_Max(),
			new Is_Char_Min(),
			new Is_Char_Max(),
			new Is_Not_Valid_Email(),
			new Is_Not_Valid_Url(),
			new Is_Not_Complete_Mask(),
			new Is_Files_Max(),
			new Is_File_Size(),
			new Is_File_Ext(),
			new Is_Date_Min(),
			new Is_Date_Max(),
		);
	}

	public function register_scripts() {
		wp_register_script(
			self::HANDLE,
			Plugin::instance()->plugin_url( 'assets/js/frontend/advanced.reporting.js' ),
			array(
				Manager::MAIN_SCRIPT_HANDLE,
			),
			Plugin::instance()->get_version(),
			true
		);
	}

	public function add_validation_messages_global( string $markup, bool $force = false ): string {
		$this->settings = $this->get_settings();
		$form_id        = jet_fb_live()->form_id;

		if (
			( ! $this->is_advanced_form() && ! $force ) ||
			in_array( $form_id, $this->inline_messages, true )
		) {
			return $markup;
		}

		$data = Tools::encode_json( $this->settings );

		wp_add_inline_script(
			Manager::MAIN_SCRIPT_HANDLE,
			"
			window.JetFormsValidation = window.JetFormsValidation ?? {};
			window.JetFormsValidation[ {$form_id} ] = $data;
			"
		);

		add_action(
			'wp_enqueue_scripts',
			function () use ( $form_id, $data ) {
				wp_add_inline_script(
					Manager::MAIN_SCRIPT_HANDLE,
					"
			window.JetFormsValidation = window.JetFormsValidation ?? {};
			window.JetFormsValidation[ {$form_id} ] = $data;
			"
				);
			},
			20
		);

		$this->inline_messages[] = $form_id;

		return $markup;
	}

	public function add_validation_block( Base $block ) {
		/**
		 * If in post meta enable Advanced validation
		 * or right in block settings
		 */
		if ( ! $this->is_advanced( $block->block_attrs ) ) {
			return;
		}
		wp_enqueue_script( self::HANDLE );

		$this->add_validation_messages_global( '', true );

		$type  = $block->block_attrs['validation']['type'] ?? '';
		$rules = $block->block_attrs['validation']['rules'] ?? array();

		$block->add_attribute( 'data-validation-type', $type ?: 'inherit' );

		if ( ! empty( $rules ) ) {
			$this->prepare_rules( $rules );

			$block->add_attribute(
				'data-validation-rules',
				Tools::encode_json( $rules )
			);
		}

		/**
		 * If advanced validation not enabled right in block settings
		 */
		if ( self::FORMAT_ADVANCED !== $type ) {
			return;
		}

		$messages = $block->block_attrs['validation']['messages'] ?? array();

		if ( ! empty( $messages ) ) {
			$block->add_attribute( 'data-validation-messages', Tools::encode_json( $messages ) );
		}
	}

	public function get_settings(): array {
		$validation = jet_form_builder()->post_type->get_validation( jet_fb_live()->form_id );

		$response = array(
			'type'     => $validation['type'] ?? self::FORMAT_BROWSER,
			'messages' => array(),
		);

		foreach ( $this->messages as $message ) {
			$response['messages'][ $message->get_id() ] = (
				$validation['messages'][ $message->get_id() ] ?? $message->get_initial()
			);
		}

		return $response;
	}

	public function is_advanced( array $block_attrs ): bool {
		$type = $block_attrs['validation']['type'] ?? '';

		return $type
			? self::FORMAT_ADVANCED === $type
			: $this->is_advanced_form();
	}

	public function is_advanced_form(): bool {
		return self::FORMAT_ADVANCED === ( $this->settings['type'] ?? '' );
	}

	public function formats(): array {
		return array(
			array(
				'value' => self::FORMAT_BROWSER,
				'label' => __( 'Default', 'jet-form-builder' ),
				'title' => __( 'Browser native validation', 'jet-form-builder' ),
			),
			array(
				'value' => self::FORMAT_ADVANCED,
				'label' => __( 'Advanced', 'jet-form-builder' ),
				'title' => __( 'More flexible JetFormBuilder\'s validation', 'jet-form-builder' ),
			),
		);
	}

	public function to_array(): array {
		return array(
			'messages'      => Array_Tools::to_array( $this->messages ),
			'ssr_callbacks' => Array_Tools::to_array( $this->rules->get_ssr()->get_callbacks() ),
			'formats'       => $this->formats(),
			'rule_types'    => Array_Tools::to_array( $this->rules->rep_get_values() ),
		);
	}

	public function validate_block( Field_Data_Parser $parser ) {
		if ( ! $this->is_advanced( $parser->get_settings() ) ) {
			return;
		}

		$this->get_rules()->validate_block( $parser );
	}

	public function prepare_rules( array &$rules ) {
		foreach ( $rules as &$rule ) {
			$rule['value'] = jet_fb_parse_dynamic( $rule['value'] ?? '' );
		}
	}

	/**
	 * @return Rules_Controller
	 */
	public function get_rules(): Rules_Controller {
		return $this->rules;
	}

}
