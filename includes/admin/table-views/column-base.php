<?php


namespace Jet_Form_Builder\Admin\Table_Views;

abstract class Column_Base {

	protected $column = '';
	protected $type = 'string';

	public function __construct( $column = '' ) {
		$this->set_column( $column );
	}

	final public function set_column( $column ): Column_Base {
		if ( empty( $this->column ) && $column ) {
			$this->column = $column;
		}

		return $this;
	}

	protected function get_value( array $record ) {
		return $record[ $this->column ] ?? false;
	}

	public function get_type(): string {
		return $this->type;
	}

	final public function get_column( array $record ): array {
		$value = $this->prepare_value( $this->get_value( $record ) );

		return array(
			'type'  => $this->type,
			'value' => $value,
		);
	}

	protected function prepare_value( $value ) {
		switch ( $this->type ) {
			case 'integer':
				return (int) $value;
			case 'float':
				return (float) $value;
			case 'array':
				return (array) $value;
			case 'string':
				return (string) $value;
			case 'rawArray':
			default:
				return $value;
		}
	}

}
