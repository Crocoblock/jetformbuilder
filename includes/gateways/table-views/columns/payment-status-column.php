<?php


namespace Jet_Form_Builder\Gateways\Table_Views\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

class Payment_Status_Column extends Column_Advanced_Base {

	protected $type   = self::STATUS;
	protected $column = 'status';

	public function get_label(): string {
		return __( 'Status', 'jet-form-builder' );
	}

	public function get_replace_map(): array {
		return array(
			'COMPLETED' => array(
				'type' => 'success',
				'text' => __( 'Completed', 'jet-form-builder' ),
			),
			'CREATED'   => array(
				'type' => 'info',
				'text' => __( 'Created', 'jet-form-builder' ),
			),
		);
	}

	public function get_value( array $record = array() ) {
		$status = parent::get_value( $record );
		$map    = $this->get_replace_map();

		return $map[ $status ] ?? array();
	}
}
