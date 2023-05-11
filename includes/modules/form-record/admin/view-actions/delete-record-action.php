<?php


namespace Jet_Form_Builder\Modules\Form_Record\Admin\View_Actions;

use Jet_Form_Builder\Modules\Form_Record\Rest_Endpoints\Delete_Form_Record_Endpoint;
use Jet_Form_Builder\Admin\Table_Views\Actions\Api_Single_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Delete_Record_Action extends Api_Single_Action {

	public function get_slug(): string {
		return 'delete';
	}

	public function get_label(): string {
		return __( 'Delete', 'jet-form-builder' );
	}

	public function get_type(): string {
		return 'danger';
	}

	public function show_in_header(): bool {
		return true;
	}

	public function show_in_row( array $record ): bool {
		return true;
	}

	public function get_method(): string {
		return Delete_Form_Record_Endpoint::get_methods();
	}

	public function get_rest_url( array $record ): string {
		return Delete_Form_Record_Endpoint::rest_url();
	}
}
