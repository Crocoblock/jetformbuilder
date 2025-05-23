<?php


namespace JFB_Modules\Actions_V2\Insert_Post\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Exceptions\Action_Exception;
use JFB_Modules\Actions_V2\Insert_Post\Traits\Process_Meta_Boxes_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Update_Action extends Base_Post_Action {

	use Process_Meta_Boxes_Trait;

	public function get_id(): string {
		return 'update';
	}

	public static function is_supported( Abstract_Modifier $modifier ): bool {
		return ! empty( $modifier->source_arr['ID'] ?? 0 );
	}

	/**
	 * @throws Action_Exception
	 */
	public function do_action() {
		if ( ! $this->pre_check() ) {
			return;
		}

		$this->inserted_id = wp_update_post( $this->modifier->source_arr, true );

		$this->process_meta_boxes( $this->inserted_id, $this->modifier );

		if ( ! is_wp_error( $this->inserted_id ) ) {
			return;
		}

		throw new Action_Exception(
			'failed',
			esc_html( $this->inserted_id->get_error_message() )
		);
	}
}
