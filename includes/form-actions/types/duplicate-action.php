<?php


namespace Jet_Form_Builder\Form_Actions\Types;


use Jet_Form_Builder\Form_Actions\Base_Form_Action;
use Jet_Form_Builder\Form_Actions\Get_Form_Data;
use Jet_Form_Builder\Form_Actions\Import_Form_Trait;

class Duplicate_Action extends Base_Form_Action {

	use Get_Form_Data;
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
		[ $post, $form_data ] = $this->get_from_data( $post_id );

		$this->import_form( $form_data );

		wp_redirect( add_query_arg( array( 'post_type' => $this->post_type() ), admin_url( 'edit.php' ) ) );
		die();
	}
}