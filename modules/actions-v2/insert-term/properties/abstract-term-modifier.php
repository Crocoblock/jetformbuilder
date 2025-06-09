<?php

namespace JFB_Modules\Actions_V2\Insert_Term\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use JFB_Modules\Actions_V2\Insert_Term\Insert_Term_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Abstract_Term_Modifier extends Abstract_Modifier {

	abstract public function is_supported( Insert_Term_Action $action ): bool;

	abstract public function get_id(): string;

	public function before_run( Insert_Term_Action $action ) {
		$request      = jet_fb_context()->resolve_request();
		$fields_map   = $action->settings['fields_map'] ?? array();

		$this->set_fields_map( $fields_map );
		$this->set_request( $request );
	}

}
