<?php


namespace Jet_Form_Builder\Gateways\Table_Views\Columns;


use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Payment_Type_Column extends Column_Advanced_Base {

	protected $type = 'rawArray';

	public function get_label(): string {
		return __( 'Payment Type', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		return array(
			'slug'  => $record['type'] ?? '',
			'label' => __( 'Initial payment', 'jet-form-builder' ),
		);
	}

}