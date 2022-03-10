<?php


namespace Jet_Form_Builder\Gateways\Table_Views\Columns;


use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Payer_Column extends Column_Advanced_Base {

	protected $type = 'rawArray';

	public function get_label(): string {
		return __( 'Payer', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$name = $record['ship']['full_name'] ?? '';

		if ( empty( $name ) ) {
			$name = implode(
				' ',
				array_filter(
					array(
						$record['payer']['first_name'] ?? '',
						$record['payer']['last_name'] ?? '',
					)
				)
			);
		}

		return array(
			'email_address' => $record['payer']['email'] ?? '',
			'full_name'     => $name ?: __( 'Not attached', 'jet-form-builder' ),
		);
	}
}