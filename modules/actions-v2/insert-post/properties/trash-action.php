<?php


namespace JFB_Modules\Actions_V2\Insert_Post\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use JFB_Modules\Actions_V2\Insert_Post\Traits\Process_Meta_Boxes_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Trash_Action extends Base_Post_Action {

	use Process_Meta_Boxes_Trait;

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

		$post = wp_trash_post(
			$this->modifier->source_arr['ID'] ?? 0
		);

		$this->process_meta_boxes( $this->modifier->source_arr['ID'] ?? 0, $this->modifier );

		if ( ! is_a( $post, \WP_Post::class ) ) {
			throw new Action_Exception( 'failed' );
		}

		$this->inserted_id = $post->ID;
	}
}
