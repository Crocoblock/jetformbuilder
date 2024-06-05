<?php


namespace JFB_Modules\Validation;

use Jet_Form_Builder\Admin\Editor;
use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Plugin;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

final class Module implements
	Base_Module_It,
	Base_Module_Handle_It,
	Base_Module_Url_It,
	Base_Module_Dir_It,
	Base_Module_After_Install_It {

	use Base_Module_Url_Trait;
	use Base_Module_Handle_Trait;
	use Base_Module_Dir_Trait;

	const FORMAT_ADVANCED = 'advanced';
	const FORMAT_BROWSER  = 'browser';
	const HANDLE          = 'jet-fb-advanced-reporting';

	private $messages = array();
	/**
	 * @var Rules_Controller
	 */
	private $rules;
	private $settings;
	private $inline_messages = array();

	public function rep_item_id() {
		return 'validation';
	}

	public function condition(): bool {
		return true;
	}

	/**
	 * @throws Repository_Exception
	 */
	public function on_install() {
		/** @var \JFB_Modules\Post_Type\Module $post_type */
		$post_type = jet_form_builder()->module( 'post-type' );
		$post_type->get_meta()->install( new Post_Type\Validation_Meta() );

		/** @var \JFB_Modules\Rest_Api\Module $rest_api */
		$rest_api = jet_form_builder()->module( 'rest-api' );
		$rest_api->get_controller()->install( new Rest_Api\Rest_Validation_Endpoint() );
	}

	/**
	 * @throws Repository_Exception
	 */
	public function on_uninstall() {
		$this->rules    = null;
		$this->messages = array();

		/** @var \JFB_Modules\Post_Type\Module $post_type */
		$post_type = jet_form_builder()->module( 'post-type' );
		$post_type->get_meta()->uninstall( Post_Type\Validation_Meta::class );

		/** @var \JFB_Modules\Rest_Api\Module $rest_api */
		$rest_api = jet_form_builder()->module( 'rest-api' );
		$rest_api->get_controller()->uninstall( new Rest_Api\Rest_Validation_Endpoint() );
	}

	public function init_hooks() {
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
		add_action(
			'jet-form-builder/validate-field',
			array( $this, 'validate_block' ),
			0
		);
		add_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'localize_editor_config' )
		);
	}

	public function remove_hooks() {
		remove_filter(
			'jet-form-builder/before-start-form',
			array( $this, 'add_validation_messages_global' )
		);
		remove_action(
			'jet-form-builder/before-start-form-row',
			array( $this, 'add_validation_block' )
		);
		remove_action(
			'wp_enqueue_scripts',
			array( $this, 'register_scripts' )
		);

		/**
		 * @link https://github.com/Crocoblock/issues-tracker/issues/1542
		 */
		remove_action(
			'jet_plugins/frontend/register_scripts',
			array( $this, 'register_scripts' )
		);
		remove_action(
			'jet-form-builder/validate-field',
			array( $this, 'validate_block' ),
			0
		);
		remove_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'localize_editor_config' )
		);
	}

	public function register_scripts() {
		$script_asset = require_once jet_form_builder()->plugin_dir(
			'assets/build/frontend/advanced.reporting.asset.php'
		);

		if ( true === $script_asset ) {
			return;
		}

		array_push(
			$script_asset['dependencies'],
			\Jet_Form_Builder\Blocks\Module::MAIN_SCRIPT_HANDLE
		);

		wp_register_script(
			self::HANDLE,
			jet_form_builder()->plugin_url( 'assets/build/frontend/advanced.reporting.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
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
			\Jet_Form_Builder\Blocks\Module::MAIN_SCRIPT_HANDLE,
			"
			window.JetFormsValidation = window.JetFormsValidation ?? {};
			window.JetFormsValidation[ {$form_id} ] = $data;
			"
		);

		add_action(
			'wp_enqueue_scripts',
			function () use ( $form_id, $data ) {
				wp_add_inline_script(
					\Jet_Form_Builder\Blocks\Module::MAIN_SCRIPT_HANDLE,
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
			$this->get_rules()->prepare_rules( $rules );

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
		/** @var \JFB_Modules\Post_Type\Module $module */
		/** @noinspection PhpUnhandledExceptionInspection */
		$module     = jet_form_builder()->module( 'post-type' );
		$validation = $module->query_meta( Post_Type\Validation_Meta::class );

		$response = array(
			'type'     => $validation['type'] ?? self::FORMAT_BROWSER,
			'messages' => array(),
		);

		$messages = $this->get_messages();

		foreach ( $messages as $message ) {
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
		if ( is_null( $this->settings ) ) {
			$this->settings = $this->get_settings();
		}

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

	public function validate_block( Field_Data_Parser $parser ) {
		if (
			! $this->is_advanced( $parser->get_settings() ) ||
			! $parser->get_value() ||
			$parser->is_inside_conditional()
		) {
			return;
		}

		$this->get_rules()->validate_block( $parser );
	}

	public function localize_editor_config() {
		wp_localize_script(
			Editor::EDITOR_PACKAGE_HANDLE,
			'jetFormValidation',
			array(
				'messages'      => Array_Tools::to_array( $this->get_messages() ),
				'ssr_callbacks' => Array_Tools::to_array( $this->get_rules()->get_ssr()->get_callbacks() ),
				'formats'       => $this->formats(),
				'rule_types'    => Array_Tools::to_array( $this->get_rules()->rep_get_values() ),
			)
		);
	}

	/**
	 * @return Rules_Controller
	 */
	public function get_rules(): Rules_Controller {
		if ( ! is_null( $this->rules ) ) {
			return $this->rules;
		}

		$this->rules = new Rules_Controller();

		return $this->rules;
	}

	public function get_messages(): array {
		if ( ! empty( $this->messages ) ) {
			return $this->messages;
		}

		$this->messages = apply_filters(
			'jet-form-builder/validation-messages',
			array(
				new Messages\Is_Empty_Value(),
				new Messages\Is_Number_Min(),
				new Messages\Is_Number_Max(),
				new Messages\Is_Char_Min(),
				new Messages\Is_Char_Max(),
				new Messages\Is_Not_Valid_Email(),
				new Messages\Is_Not_Valid_Url(),
				new Messages\Is_Not_Complete_Mask(),
				new Messages\Is_Files_Max(),
				new Messages\Is_File_Size(),
				new Messages\Is_File_Ext(),
				new Messages\Is_Date_Min(),
				new Messages\Is_Date_Max(),
			)
		);

		return $this->messages;
	}

}
