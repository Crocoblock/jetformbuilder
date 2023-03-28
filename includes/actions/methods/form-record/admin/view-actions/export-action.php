<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Actions;


use Jet_Form_Builder\Admin\Table_Views\Actions\Link_Single_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Export_Action extends Link_Single_Action {

	public function get_slug(): string {
		return 'export';
	}

	public function get_label(): string {
		return __( 'Export', 'jet-form-builder' );
	}

	public function show_in_header(): bool {
		return false;
	}

	/**
	 * @param array $record
	 *
	 * @return bool
	 */
	public function show_in_row( array $record ): bool {
		return true;
	}

	/**
	 * @param array $record
	 *
	 * @return string
	 */
	public function get_href( array $record ): string {
		return 'javascript:void(0)';
	}
}