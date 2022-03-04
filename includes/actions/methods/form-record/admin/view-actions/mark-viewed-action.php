<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Actions;


use Jet_Form_Builder\Actions\Methods\Form_Record\Rest_Endpoints\Mark_As_Viewed_Record_Endpoint;
use Jet_Form_Builder\Admin\Table_Views\Actions\Api_Single_Action;

class Mark_Viewed_Action extends Api_Single_Action {

	public function get_slug(): string {
		return 'mark_viewed';
	}

	public function get_label(): string {
		return __( 'Mark as Viewed', 'jet-form-builder' );
	}

	public function show_in_header(): bool {
		return true;
	}

	public function show_in_row( array $record ): bool {
		return empty( $record['is_viewed'] ?? false );
	}

	public function get_method(): string {
		return Mark_As_Viewed_Record_Endpoint::get_methods();
	}

	public function get_rest_url(): string {
		return Mark_As_Viewed_Record_Endpoint::rest_url();
	}
}