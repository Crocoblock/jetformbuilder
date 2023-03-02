<?php


namespace Jet_Form_Builder\Gateways\Table_Views\Actions;

use Jet_Form_Builder\Admin\Table_Views\Actions\Api_Single_Action;
use Jet_Form_Builder\Gateways\Rest_Api\Delete_Payments_Endpoint;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Delete_Action extends Api_Single_Action {

	public function get_method(): string {
		return Delete_Payments_Endpoint::get_methods();
	}

	public function get_rest_url( array $record ): string {
		return Delete_Payments_Endpoint::rest_url();
	}

	public function get_slug(): string {
		return 'delete';
	}

	public function get_type(): string {
		return 'danger';
	}

	public function get_label(): string {
		return __( 'Delete', 'jet-form-builder' );
	}

	public function show_in_header(): bool {
		return true;
	}

	public function show_in_row( array $record ): bool {
		return true;
	}
}