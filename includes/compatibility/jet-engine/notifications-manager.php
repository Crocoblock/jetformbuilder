<?php


namespace Jet_Form_Builder\Compatibility\Jet_Engine;

use Jet_Form_Builder\Actions\Manager as Action_Manager;

class Notifications_Manager {

	public static $instance = null;
	public $notifications = array();

	public static function instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	private function __construct() {
		if ( Manager::is_activated() ) {
			add_action( 'init', array( $this, 'setup_notifications' ) );
			$this->init();
		}
	}

	public function init() {
		add_filter(
			'jet-engine/forms/booking/notification-types',
			array( $this, 'register_notifications' )
		);

		add_action(
			'jet-engine/forms/editor/before-assets',
			array( $this, 'localize_notifications_for_editor' ), 0
		);
	}

	public function setup_notifications() {
		$types = apply_filters( 'jet-form-builder/notifications-jet-engine/register', array() );

		foreach ( $types as $type ) {
			$this->notifications[ $type->get_id() ] = $type;

			add_action(
				'jet-engine/forms/booking/notifications/fields-after',
				array( $type, 'notification_fields' )
			);

			add_action(
				'jet-engine/forms/booking/notification/' . $type->get_id(),
				array( $type, 'do_action' ), 10, 2
			);
		}
	}


	/**
	 * Register new notification type
	 *
	 * @param $notifications
	 *
	 * @return mixed [type] [description]
	 */
	public function register_notifications( $notifications ) {
		foreach ( $this->notifications as $type ) {
			$notifications[ $type->get_id() ] = $type->get_name();
		}

		return $notifications;
	}

	public function localize_notifications_for_editor() {
		Action_Manager::localize_action_types( $this->notifications );
		Action_Manager::register_action_localize_helper();
	}

}