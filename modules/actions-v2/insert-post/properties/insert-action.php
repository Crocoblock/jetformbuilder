<?php


namespace JFB_Modules\Actions_V2\Insert_Post\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Insert_Action extends Base_Post_Action {

	public function get_id(): string {
		return 'insert';
	}

	public static function is_supported( Abstract_Modifier $modifier ): bool {
		return true;
	}

	/**
	 * @throws Action_Exception
	 */
	public function do_action() {
		if ( ! $this->pre_check() ) {
			return;
		}

		$this->inserted_id = wp_insert_post( $this->modifier->source_arr, true );

		if ( ! is_wp_error( $this->inserted_id ) ) {
			return;
		}

		throw new Action_Exception(
			'failed',
			esc_html( $this->inserted_id->get_error_message() )
		);
	}
}
