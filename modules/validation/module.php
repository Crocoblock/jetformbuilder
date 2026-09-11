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
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Tabs_Handlers\Ssr_Callbacks_Handler;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use JFB_Modules\Block_Parsers\Field_Data_Parser;
use JFB_Modules\Validation\Advanced_Rules\Server_Side_Rule;
use JFB_Modules\Validation\Advanced_Rules\Ssr_Callback_Registry;
use JFB_Modules\Validation\Class_Validation_Handlers;
use JFB_Modules\Validation\Handlers\Validation_Handler;
use JFB_Modules\Validation\Rest_Api\Rest_Validation_Endpoint;
use JFB_Modules\Validation\Ssr\Ssr_Blocked_Callback_Usages;
use JFB_Modules\Validation\Ssr\Ssr_Registry_Migration_Notice;

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
	/**
	 * @var Ssr_Registry_Migration_Notice
	 */
	private $ssr_registry_migration_notice;

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
		$handlers = new Class_Validation_Handlers();

		foreach ( $handlers->get_handlers() as $handler ) {
			if ( method_exists( $handler, 'init' ) ) {
				$handler->init();
			}
		}

		/** @var \JFB_Modules\Post_Type\Module $post_type */
		$post_type = jet_form_builder()->module( 'post-type' );
		$post_type->get_meta()->install( new Post_Type\Validation_Meta() );

		/** @var \JFB_Modules\Rest_Api\Module $rest_api */
		$rest_api = jet_form_builder()->module( 'rest-api' );
		$rest_api->get_controller()->install( new Rest_Api\Rest_Validation_Endpoint() );

		Tab_Handler_Manager::instance()->install( new Ssr_Callbacks_Handler() );
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

		Tab_Handler_Manager::instance()->uninstall( 'ssr-callbacks-tab' );
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
		add_action(
			'save_post_jet-form-builder',
			array( $this, 'refresh_blocked_callback_usages' )
		);
		add_action(
			'delete_post',
			array( $this, 'remove_blocked_callback_usages_for_deleted_form' )
		);

		$this->ssr_registry_migration_notice = new Ssr_Registry_Migration_Notice();
		$this->ssr_registry_migration_notice->init_hooks();
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
		remove_action(
			'save_post_jet-form-builder',
			array( $this, 'refresh_blocked_callback_usages' )
		);
		remove_action(
			'delete_post',
			array( $this, 'remove_blocked_callback_usages_for_deleted_form' )
		);

		if ( $this->ssr_registry_migration_notice ) {
			$this->ssr_registry_migration_notice->remove_hooks();
		}
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

		wp_enqueue_script( self::HANDLE );

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

	/**
	 * Keeps `Ssr_Blocked_Callback_Usages` in sync with a form's current content: an admin
	 * who edits a form to fix a denylisted "Server-Side callback" rule (issues-tracker
	 * #20361 follow-up) should see it drop off the "Forms Using Blocked Functions" list
	 * immediately, not have it linger as if nothing changed. Only ever removes/replaces
	 * entries for the saved form's own ID — it never grants trust to anything (a denylisted
	 * name can never be approved regardless of what this records), so it carries none of the
	 * self-service allowlist risk the retired `Ssr_Callback_Allowlist` save-post hooks had.
	 *
	 * @since 3.6.5.3
	 *
	 * @param int $post_id
	 */
	public function refresh_blocked_callback_usages( int $post_id ) {
		if ( wp_is_post_autosave( $post_id ) || wp_is_post_revision( $post_id ) ) {
			return;
		}

		$post = get_post( $post_id );

		if ( ! $post instanceof \WP_Post ) {
			return;
		}

		Ssr_Blocked_Callback_Usages::replace_for_form(
			$post_id,
			Ssr_Blocked_Callback_Usages::collect_from_content( $post->post_content )
		);
	}

	/**
	 * `refresh_blocked_callback_usages()` only ever runs on `save_post_jet-form-builder`, so
	 * a form that is permanently deleted (not just trashed — `Ssr_Blocked_Callback_Usages`
	 * should still list a trashed form, since it can still be restored) never gets its entry
	 * removed: the settings tab would otherwise keep showing a phantom "Forms Using Blocked
	 * Functions" row with a dead edit link forever (review finding, issues-tracker #20361
	 * follow-up). `delete_post` fires for every post type, so this checks `post_type` itself
	 * rather than relying on a `delete_post_{post_type}`-style hook, which WordPress does not
	 * provide.
	 *
	 * @since 3.6.5.3
	 *
	 * @param int $post_id
	 */
	public function remove_blocked_callback_usages_for_deleted_form( int $post_id ) {
		if ( 'jet-form-builder' !== get_post_type( $post_id ) ) {
			return;
		}

		Ssr_Blocked_Callback_Usages::replace_for_form( $post_id, array() );
	}

	public function add_validation_block( Base $block ) {
		/**
		 * If in post meta enable Advanced validation
		 * or right in block settings
		 */
		if ( ! $this->is_advanced( $block->block_attrs ) ) {
			return;
		}

		$this->add_validation_messages_global( '', true );

		$type  = $block->block_attrs['validation']['type'] ?? '';
		$rules = $block->block_attrs['validation']['rules'] ?? array();

		$block->add_attribute( 'data-validation-type', $type ?: 'inherit' );

		if ( ! empty( $rules ) ) {
			$this->get_rules()->prepare_rules( $rules );

			// Security: Add signatures for SSR validation rules
			// For repeater fields, we include the repeater name in the signature
			// but NOT the row index (which is dynamic). The signature binds the
			// field to its structural path: [repeater_name, field_name] or just field_name
			$form_id       = jet_fb_live()->form_id;
			$field_name    = $block->block_attrs['name'] ?? '';
			$repeater_name = $block->get_repeater_name();

			// Build canonical path for signature (without row index)
			$signature_path = $repeater_name
				? array( $repeater_name, $field_name )
				: $field_name;

			foreach ( $rules as $index => &$rule ) {
				if ( 'ssr' === ( $rule['type'] ?? '' ) ) {
					$signature     = Rest_Validation_Endpoint::generate_signature(
						(int) $form_id,
						$signature_path,
						(int) $index
					);
					$signature_key = Validation_Handler::get_signature_key( $signature_path, (int) $index );

					printf(
						'<input type="hidden" name="%1$s[%2$s]" value="%3$s" />',
						esc_attr( Validation_Handler::MAIN_SIGNATURES_KEY ),
						esc_attr( $signature_key ),
						esc_attr( $signature )
					);

					// Security: only the lookup key is exposed here, never the signature
					// itself — the signature already lives in the hidden input above,
					// and JS reads it from there instead of duplicating it in this
					// public JSON blob (https://github.com/Crocoblock/issues-tracker/issues/20361).
					$rule['_sig_key'] = $signature_key;

					// Security: replace a custom callback's clean name with a stable
					// opaque ID in this public JSON blob only. The form itself (and
					// $block->block_attrs) still stores the clean name — the server
					// always resolves the callback from there, never from this ID or
					// from the request. Built-ins and the fixed-safe WP Core list are
					// safe by construction and are left in the clear.
					$callback_name = (string) ( $rule['value'] ?? '' );

					// PHP function names are case-insensitive, and is_builtin_callback()
					// compares against lowercase IDs — lowercase here too (matching the
					// FIXED_SAFE check just below) so a builtin saved with non-canonical
					// casing is still recognized as built-in and left in the clear, rather
					// than being needlessly masked behind an opaque registry ID.
					if (
						'' !== $callback_name
						&& ! Server_Side_Rule::is_builtin_callback( strtolower( $callback_name ) )
						&& ! in_array( strtolower( $callback_name ), Server_Side_Rule::FIXED_SAFE, true )
					) {
						$rule['value'] = Ssr_Callback_Registry::id_for_callback( $callback_name );
					}
				}
			}
			unset( $rule );

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

		if ( self::FORMAT_ADVANCED === $type ) {
			return true;
		}

		if ( '' === $type || 'inherit' === $type ) {
			return $this->is_advanced_form();
		}

		return false;
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
			Tools::is_empty( $parser->get_value() ) ||
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
				'messages'                   => Array_Tools::to_array( $this->get_messages() ),
				'ssr_callbacks'              => Array_Tools::to_array( $this->get_rules()->get_ssr()->get_callbacks() ),
				'formats'                    => $this->formats(),
				'rule_types'                 => Array_Tools::to_array( $this->get_rules()->rep_get_values() ),
				'ssr_callbacks_settings_url' => Pages_Manager::instance()->get_stable_url( 'jfb-settings' ) . '#ssr-callbacks-tab',
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
