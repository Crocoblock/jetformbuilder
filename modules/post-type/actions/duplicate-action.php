<?php


namespace JFB_Modules\Post_Type\Actions;

use JFB_Modules\Post_Type\Actions\Traits\Get_Form_Data_Trait;
use JFB_Modules\Post_Type\Actions\Traits\Import_Form_Trait;
use JFB_Modules\Post_Type\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Duplicate_Action extends Base_Form_Action {

	use Get_Form_Data_Trait;
	use Import_Form_Trait;

	public function get_id() {
		return 'jet_fb_duplicate';
	}

	public function get_title() {
		return __( 'Duplicate', 'jet-form-builder' );
	}

	public function parse_form_data( $data ) {
		$data['post_title'] = "{$data['post_title']} (copy)";

		return $data;
	}

	public function do_admin_action() {
		$post_id   = $this->get_post_id_from_request();
		$form_data = $this->get_from_data( $post_id );

		$this->import_form( $form_data[1] );

		// phpcs:ignore WordPress.Security.SafeRedirect
		wp_redirect( add_query_arg( array( 'post_type' => Module::SLUG ), admin_url( 'edit.php' ) ) );
		die();
	}
}
