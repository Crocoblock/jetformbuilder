<?php

namespace Jet_Form_Builder\Actions;

// If this file is called directly, abort.

use Jet_Form_Builder\Actions\Types;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Manager class
 */
class Manager {

	private $_types = array();

	const ENGINE_HANDLE = 'jet-fb-action-localize-helper';

	public function __construct() {
		add_action( 'init', array( $this, 'register_action_types' ), 99 );
		add_action( 'jet-form-builder/editor-assets/after', array( $this, 'register_types_for_editor' ), 10, 2 );
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'register_action_localize_helper' ) );
	}

	/**
	 * Register allowed action types
	 *
	 * @return [type] [description]
	 */
	public function register_action_types() {

		$actions = array(
			new Types\Send_Email(),
			new Types\Insert_Post(),
			new Types\Register_User(),
			new Types\Update_User(),
			new Types\Update_Options(),
			new Types\Call_Hook(),
			new Types\Call_Webhook(),
			new Types\Redirect_To_Page(),
			new Types\Mailchimp(),
			new Types\Getresponse(),
			new Types\Active_Campaign()
		);

		foreach ( $actions as $action ) {
			$this->register_action_type( $action );
		}

		do_action( 'jet-form-builder/actions/register', $this );
	}

	/**
	 * Register new action type
	 *
	 * @param Types\Base $type
	 *
	 * @return void [description]
	 */
	public function register_action_type( Types\Base $type ) {
		if ( $type->dependence() ) {
			$this->_types[ $type->get_id() ] = $type;
		}
	}

	/**
	 * @param string $type
	 *
	 * @return array
	 */
	public function get_actions( $type = '' ) {
		if ( $type ) {
			return $this->_types[ $type ];
		}

		return $this->_types;
	}

	public function has_action_type( $type ) {
		return isset( $this->_types[ $type ] );
	}

	/**
	 * Register action types data for the editor
	 *
	 * @param $editor
	 * @param $handle
	 *
	 * @return void [description]
	 */
	public function register_types_for_editor( $editor, $handle ) {
		self::localize_action_types( $this->_types, $handle );
	}

	public static function prepare_actions_data( $source, $handle ) {
		$prepared_types = array();

		foreach ( $source as $type ) {

			$type_script_name = $type->self_script_name();

			$prepared_types[] = array(
				'id'       => $type->get_id(),
				'name'     => $type->get_name(),
				'self'     => $type_script_name,
				'callback' => false, // should be rewritten from JS
			);
			$action_localize  = $type->action_data();

			$action_localize['__messages']      = $type->get_messages_default();
			$action_localize['__labels']        = $type->editor_labels();
			$action_localize['__help_messages'] = $type->editor_labels_help();
			$action_localize['__gateway_attrs'] = $type->visible_attributes_for_gateway_editor();

			if ( ! empty( $action_localize ) && $type_script_name ) {
				wp_localize_script(
					$handle,
					$type->self_script_name(),
					$action_localize
				);
			}
		}

		return $prepared_types;
	}

	public static function register_action_localize_helper() {
		wp_enqueue_script(
			self::ENGINE_HANDLE,
			JET_FORM_BUILDER_URL . 'assets/js/action-localize-helper.js',
			array(),
			JET_FORM_BUILDER_VERSION
		);
	}

	public static function localize_action_types( $types, $handle = '' ) {
		$handle = $handle ? $handle : self::ENGINE_HANDLE;
		wp_localize_script(
			$handle,
			'jetFormActionTypes',
			self::prepare_actions_data( $types, $handle )
		);
	}

}
