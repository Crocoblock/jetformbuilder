<?php


namespace JFB_Modules\Actions_V2\Insert_Post\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use JFB_Modules\Actions_V2\Insert_Post\Insert_Post_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Abstract_Post_Modifier extends Abstract_Modifier {

	abstract public function is_supported( Insert_Post_Action $action ): bool;

	abstract public function get_id(): string;

	public function before_run( Insert_Post_Action $action ) {

		$request      = jet_fb_context()->resolve_request();
		$fields_map   = $action->settings['fields_map'] ?? array();
		$post_status  = $action->settings['post_status'] ?? '';
		$default_meta = $action->settings['default_meta'] ?? array();

		$this->set( 'post_status', $post_status );

		/** @var Post_Meta_Property $meta */
		$meta = $this->get( 'meta_input' );

		$single_value_as_array        = $action->settings['single_value_as_array'] ?? array();
		$this->single_value_as_array  = is_array( $single_value_as_array ) ? $single_value_as_array : array();

		$meta->set_meta( Post_Meta_Property::prepare_meta( $default_meta ) );

		$this->set_fields_map( $fields_map );
		$this->set_request( $request );
	}

}
