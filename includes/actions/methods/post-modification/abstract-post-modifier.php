<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Types\Insert_Post;

abstract class Abstract_Post_Modifier extends Abstract_Modifier {

	abstract public function is_supported( Insert_Post $action ): bool;

	abstract public function get_id(): string;

	public function before_run( Insert_Post $action ) {
		$fields_map = $this->settings['fields_map'] ?? array();
		$request    = jet_fb_action_handler()->request_data;

		$this->set_fields_map( $fields_map );
		$this->set_request( $request );
	}

}