<?php


namespace Jet_Form_Builder\Admin\Table_Views;

abstract class Column_Base {

	protected $column = '';
	protected $type   = 'string';

	public function __construct( $column = '' ) {
		$this->set_column( $column );
	}

	final public function set_column( $column ): Column_Base {
		if ( empty( $this->column ) && $column ) {
			$this->column = $column;
		}

		return $this;
	}

	public function get_value( array $record = array() ) {
		return $record[ $this->column ] ?? false;
	}

	public function get_type( array $record = array() ): string {
		return $this->type;
	}

	public function is_editable( array $record = array() ): bool {
		return false;
	}

	public function get_options( array $record = array() ): array {
		return array();
	}

	public function get_editable_control( array $record = array() ): string {
		return 'text';
	}

	final public function get_column( array $record ): array {
		$type             = $this->get_type( $record );
		$value            = $this->prepare_value( $this->get_value( $record ), $type );
		$editable         = $this->is_editable( $record );
		$editable_control = $this->get_editable_control( $record );
		$options          = $this->get_options( $record );

		return array(
			'type'             => $type,
			'value'            => $value,
			'editable'         => $editable,
			'editable_control' => $editable_control,
		) + $options;
	}

	protected function prepare_value( $value, $type ) {
		switch ( $type ) {
			case 'integer':
				return (int) $value;
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
