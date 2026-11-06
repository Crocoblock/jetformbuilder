<?php


namespace Jet_Form_Builder\Admin\Table_Views;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// phpcs:disable Generic.CodeAnalysis.UnusedFunctionParameter.Found

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
	const STATUS_PENDING = 'pending';

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
		$options         = $this->get_options( $record );
		$classes         = $this->get_css_classes( $record );
		$control         = 'input';
		$control_options = array();

		if ( $editable ) {
			$control         = $this->get_control( $record );
			$control_options = $this->get_control_options( $record );
		}

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
				if ( is_array( $value ) && array_key_exists( 'text', $value ) ) {
					return self::to_safe_cell_html( (string) $value['text'] );
				}

				return self::to_safe_cell_html( (string) $value );
			case 'rawArray':
			default:
				return $value;
		}
	}

	/**
	 * A `string` column has no dedicated Vue component, so the admin tables
	 * (EntryColumnsTable.vue / EntryColumnList.vue) insert it with `v-html`.
	 * Many of these values come from visitors or external APIs (payer data,
	 * error messages, page titles), so markup in them is limited to what
	 * WordPress allows in post content.
	 *
	 * Only a "<" can open markup inside innerHTML, so strings without it are
	 * returned untouched: entities such as "&#8211;" from get_the_title() or
	 * values already passed through esc_html() keep rendering exactly as before.
	 *
	 * @param string $value
	 *
	 * @return string
	 */
	public static function to_safe_cell_html( string $value ): string {
		if ( false === strpos( $value, '<' ) ) {
			return $value;
		}

		return wp_kses_post( $value );
	}

	public function set_type( string $type ): Column_Base {
		$this->type = $type;

		return $this;
	}

}
