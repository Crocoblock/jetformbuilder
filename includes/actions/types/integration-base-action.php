<?php


namespace Jet_Form_Builder\Actions\Types;



use Jet_Form_Builder\Dev_Mode\Logger;
use Jet_Form_Builder\Dev_Mode\Manager;
use Jet_Form_Builder\Exceptions\Integration_Exception;

abstract class Integration_Base_Action extends Base {
	protected $action;

	public function __construct() {
		parent::__construct();

		if ( wp_doing_ajax() && ! empty( $this->action ) ) {
			add_action( 'wp_ajax_' . $this->action, array( $this, 'get_api_data' ) );
		}
	}

	/**
	 * Should return object of
	 *
	 * @param $api_key
	 *
	 * @return mixed
	 */
	abstract public function api_handler( $api_key );

	public function get_api_data() {
		if ( empty( $_REQUEST['api_key'] ) ) {
			wp_send_json_error();
		}

		$handler = $this->api_handler( sanitize_text_field( $_REQUEST['api_key'] ) );

		if ( is_wp_error( $handler ) ) {
			wp_send_json_error();
		}

		$this->filter_result( $handler );
	}

	public function filter_result( $handler ) {
		try {
			$data = $handler->get_all_data();

			if ( empty( $data ) ) {
				throw new Integration_Exception( 'Empty data' );
			}

			wp_send_json_success( $data );

		} catch ( Integration_Exception $exception ) {
			$data = array();

			if ( Manager::instance()->active() ) {
				$data['__logger'] = Logger::instance()->get_logs();
			}

			wp_send_json_error( $data );
			die;
		}
	}

}