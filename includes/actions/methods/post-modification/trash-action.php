<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Handler_Exception;

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

	/**
	 * @throws Action_Exception
	 */
	public function do_action() {
		if ( ! $this->pre_check() ) {
			return;
		}

		$this->inserted_id = wp_trash_post(
			$this->modifier->source_arr['ID'] ?? 0
		);

		if ( ! is_a( $this->inserted_id, \WP_Post::class ) ) {
			throw new Action_Exception( 'failed' );
		}
	}
}