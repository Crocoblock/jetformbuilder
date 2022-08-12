<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;

class Update_Action extends Base_Post_Action {

	public function get_id(): string {
		return 'update';
	}

	public static function  is_supported( Abstract_Modifier $modifier ): bool {
		return ! empty( $modifier->source_arr['ID'] ?? 0 );
	}

	public function do_action() {
		if ( ! $this->pre_check() ) {
			return;
		}

		$this->inserted_id = wp_update_post( $this->modifier->source_arr, true );
	}
}