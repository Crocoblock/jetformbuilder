<?php


namespace Jet_Form_Builder\Admin\Table_Views;

abstract class Column_Base {

	const CHOOSE         = 'choose';
	const ACTIONS        = 'actions';
	const CLASSES        = 'classes';
	const STATUS         = 'icon_status';
	const PRE            = 'pre';
	const LINK           = 'link';
	const STATUS_SUCCESS = 'success';
	const STATUS_INFO    = 'info';
	const STATUS_WARNING = 'warning';
	const STATUS_FAILED  = 'failed';

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

	public function get_control( array $record = array() ): string {
		return 'input';
	}

	public function get_control_options( array $record = array() ): array {
		return array(
			'type' => 'text',
		);
	}

	public function get_options( array $record = array() ): array {
		return array();
	}

	public function get_css_classes( array $record = array() ): array {
		return array();
	}

	final public function get_column( array $record ): array {
		$type            = $this->get_type( $record );
		$value           = $this->prepare_value( $this->get_value( $record ), $type );
		$editable        = $this->is_editable( $record );
		$control         = $this->get_control( $record );
		$control_options = $this->get_control_options( $record );
		$options         = $this->get_options( $record );
		$classes         = $this->get_css_classes( $record );

		return array(
			'type'            => $type,
			'value'           => $value,
			'editable'        => $editable,
			'control'         => $control,
			'control_options' => $control_options,
			'classes'         => $classes,
		) + $options;
	}

	protected function prepare_value( $value, $type ) {
		switch ( $type ) {
			case 'integer':
				return (int) $value;
			case 'price':
				return number_format( $value, 2 );
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
