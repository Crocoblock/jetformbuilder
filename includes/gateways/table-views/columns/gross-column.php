<?php


namespace Jet_Form_Builder\Gateways\Table_Views\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Gross_Column extends Column_Advanced_Base {

	public function get_label(): string {
		return __( 'Gross', 'jet-form-builder' );
	}

	public function get_gross_sign( $record ): string {
		return '+';
	}

	public function get_value( array $record = array() ) {
		$value = number_format( $record['amount_value'] ?? 0, 2 );

		return sprintf(
			'%s %s %s',
			$this->get_gross_sign( $record ),
			$value,
			$record['amount_code'] ?? ''
		);
	}
}
