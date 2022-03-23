<?php

namespace Jet_Form_Builder\Actions;

// If this file is called directly, abort.

use Jet_Form_Builder\Actions\Types;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Manager class
 */
class Manager {

	use Repository_Pattern_Trait;

	private $localized_actions = array();

	const ENGINE_HANDLE = 'jet-fb-action-localize-helper';

	public function __construct() {
		add_action( 'init', array( $this, 'register_action_types' ), 99 );
		add_action( 'jet-form-builder/editor-package/before', array( $this, 'register_assets' ), 10, 2 );
	}

	public function rep_instances(): array {
		return array(
			new Types\Send_Email(),
			new Types\Insert_Post(),
			new Types\Register_User(),
			new Types\Fake_User_Login(),
			new Types\Update_User(),
			new Types\Update_Options(),
			new Types\Call_Hook(),
			new Types\Call_Webhook(),
			new Types\Redirect_To_Page(),
			new Types\Fake_Wc_Add_To_Cart(),
			new Types\Mailchimp(),
			new Types\Getresponse(),
			new Types\Active_Campaign(),
			new Types\Save_Record(),
		);
	}

	/**
	 * Register allowed action types
	 *
	 * @return void
	 */
	public function register_action_types() {
		$this->rep_install();

		do_action( 'jet-form-builder/actions/register', $this );
	}

	/**
	 * @param $type
	 *
	 * @return $this
	 */
	public function register_action_type( $type ) {
		$this->rep_install_item_soft( $type );

		return $this;
	}

	/**
	 * @param $type
	 *
	 * @throws Repository_Exception
	 */
	public function rep_before_install_item( $type ) {
		if ( ! $type->dependence() ) {
			$this->_rep_abort_this();
		}
	}


	/**
	 * @param string $type
	 *
	 * @return array
	 */
	public function get_actions( $type = '' ) {
		if ( ! $type ) {
			return $this->rep_get_items();
		}

		try {
			return $this->get_action( $type );

		} catch ( Repository_Exception $exception ) {
			return array();
		}
	}

	/**
	 * @param $type
	 *
	 * @return Types\Base
	 * @throws Repository_Exception
	 */
	public function get_action( $type ) {
		return $this->rep_get_item( $type );
	}

	/**
	 * @param $type
	 *
	 * @return mixed
	 * @throws Repository_Exception
	 */
	public function get_action_clone( $type ) {
		return $this->rep_clone_item( $type );
	}

	public function has_action_type( $type ) {
		return $this->rep_isset_item( $type );
	}

	/**
	 * @param Types\Base[] $source
	 *
	 * @return array
	 */
	public function prepare_actions_data( $source ) {
		$prepared_types = array();

		foreach ( $source as $type ) {

			$type_script_name = $type->self_script_name();

			$prepared_types[] = array(
				'id'       => $type->get_id(),
				'name'     => $type->get_name(),
				'disabled' => $type->is_disabled(),
				'self'     => $type_script_name,
				'callback' => false, // should be rewritten from JS
			);
			$action_localize  = $type->action_data();

			$action_localize['__messages']      = $type->get_messages_default();
			$action_localize['__labels']        = $type->editor_labels();
			$action_localize['__help_messages'] = $type->editor_labels_help();
			$action_localize['__gateway_attrs'] = $type->visible_attributes_for_gateway_editor();
			$action_localize['__flow']          = $type->get_flow_handler();

			if ( ! empty( $action_localize ) && $type_script_name ) {
				$this->localized_actions[ $type->self_script_name() ] = $action_localize;
			}
		}

		return $prepared_types;
	}

	public function register_action_types_assets( $handle ) {
		foreach ( $this->localized_actions as $name => $localized_action ) {
			wp_localize_script(
				$handle,
				$name,
				$localized_action
			);
		}
	}

	public function register_assets( $editor, $handle ) {
		wp_enqueue_script(
			self::ENGINE_HANDLE,
			JET_FORM_BUILDER_URL . 'assets/js/action-localize-helper.js',
			array(),
			JET_FORM_BUILDER_VERSION
		);
		$data = self::prepare_actions_data( $this->rep_get_items() );

		wp_localize_script(
			self::ENGINE_HANDLE,
			'jetFormActionTypes',
			$data
		);

		$this->register_action_types_assets( self::ENGINE_HANDLE );
	}


}
