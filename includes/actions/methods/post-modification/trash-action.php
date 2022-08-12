<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;

class Trash_Action extends Base_Post_Action {

	public function get_id(): string {
		return 'trash';
	}

	public static function is_supported( Abstract_Modifier $modifier ): bool {
		return (
			Update_Action::is_supported( $modifier ) &&
			'trash' === ( $modifier->source_arr['post_status'] ?? '' )
		);
	}

	public function do_action() {
		if ( ! $this->pre_check() ) {
			return;
		}

		$this->inserted_id = wp_trash_post(
			$this->modifier->source_arr['ID'] ?? 0
		);
	}
}