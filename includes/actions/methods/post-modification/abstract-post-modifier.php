<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Types\Insert_Post;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Abstract_Post_Modifier extends Abstract_Modifier {

	abstract public function is_supported( Insert_Post $action ): bool;

	abstract public function get_id(): string;

	public function before_run( Insert_Post $action ) {
		$request      = jet_fb_action_handler()->request_data;
		$fields_map   = $action->settings['fields_map'] ?? array();
		$post_status  = $action->settings['post_status'] ?? '';
		$default_meta = $action->settings['default_meta'] ?? array();

		$this->set( 'post_status', $post_status );

		/** @var Post_Meta_Property $meta */
		$meta = $this->get( 'meta_input' );
		$meta->set_meta( Post_Meta_Property::prepare_meta( $default_meta ) );

		$this->set_fields_map( $fields_map );
		$this->set_request( $request );
	}

}
