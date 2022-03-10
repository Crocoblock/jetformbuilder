<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes;


use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_List_Box;

class Payer_Box extends Base_List_Box {

	public function get_title(): string {
		return __( 'Payer Info', 'jet-form-builder' );
	}

	public function get_columns(): array {
		return array();
	}

	public function get_list(): array {
		return array();
	}
}