<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Actions;


use Jet_Form_Builder\Admin\Table_Views\Actions\Link_Single_Action;

class View_Related_Form extends Link_Single_Action {

	public function get_slug(): string {
		return 'view_form';
	}

	public function get_label(): string {
		return __( 'View Form', 'jet-form-builder' );
	}

	public function get_href( array $record ): string {
		$form = get_post( $record['form_id'] ?? 0 );

		return get_edit_post_link( $form, false );
	}

	public function show_in_header(): bool {
		return false;
	}

	public function show_in_row( array $record ): bool {
		return true;
	}
}