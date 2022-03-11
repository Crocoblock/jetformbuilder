<?php


namespace Jet_Form_Builder\Gateways\Meta_Boxes\Columns;


use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Country_Column extends Column_Advanced_Base {

	protected $column = 'country_code';

	public function get_label(): string {
		return __( 'Country','jet-form-builder' );
	}
}