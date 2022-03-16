<?php


namespace Jet_Form_Builder\Db_Queries;

use Jet_Form_Builder\Db_Queries\Traits\With_View;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

/**
 * @method Query_Conditions_Builder set_view( Views\View_Base $view )
 *
 * Class Query_Conditions_Builder
 * @package Jet_Form_Builder\Db_Queries
 */
class Query_Conditions_Builder {

	const TYPE_EQUAL_STATIC  = 'equal_static';
	const TYPE_EQUAL         = 'equal_column';
	const TYPE_EQUAL_COLUMNS = 'equal_two_columns';
	const TYPE_LIKE          = 'like';
	const TYPE_NOT_LIKE      = 'not_like';
	const TYPE_MORE_STATIC   = 'more_static';
	const TYPE_LESS_STATIC   = 'less_static';
	const TYPE_IN            = 'in';

	use With_View;

	private $conditions = array(
		array(
			'type'   => self::TYPE_EQUAL_STATIC,
			'values' => array( 1, 1 ),
		),
	);

	/**
	 * @var array
	 */
	private $current_condition;

	public function get_types(): array {
		return array(
			self::TYPE_EQUAL_STATIC  => array(
				'callback' => array( $this, 'build_equal_static' ),
			),
			self::TYPE_EQUAL         => array(
				'callback' => array( $this, 'build_equal_column' ),
			),
			self::TYPE_EQUAL_COLUMNS => array(
				'callback' => array( $this, 'build_equal_two_columns' ),
			),
			self::TYPE_LIKE          => array(
				'callback' => array( $this, 'build_like' ),
			),
			self::TYPE_NOT_LIKE      => array(
				'callback' => array( $this, 'build_not_like' ),
			),
			self::TYPE_MORE_STATIC   => array(
				'callback' => array( $this, 'build_more_static' ),
			),
			self::TYPE_LESS_STATIC   => array(
				'callback' => array( $this, 'build_less_static' ),
			),
			self::TYPE_IN            => array(
				'callback' => array( $this, 'build_in' ),
			),
		);
	}

	public function set_condition( array $condition ): Query_Conditions_Builder {
		$this->conditions[] = $condition;

		return $this;
	}

	public function set_conditions( array $conditions ): Query_Conditions_Builder {
		foreach ( $conditions as $condition ) {
			$this->set_condition( $condition );
		}

		return $this;
	}

	/**
	 * @throws Query_Builder_Exception
	 */
	public function after_set_view() {
		$this->set_conditions( $this->view()->conditions() );
	}

	/**
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	public function result(): string {
		if ( ! $this->conditions ) {
			return '';
		}

		return 'WHERE ' . $this->prepare_conditions();
	}

	/**
	 * @param $conditions
	 *
	 * @throws Query_Builder_Exception
	 */
	public function build_conditions_raw( array $conditions ): array {
		$prepared = array();

		foreach ( $conditions as $condition ) {
			$this->current_condition = $condition;

			$prepared[] = $this->prepare();
		}

		$this->current_condition = array();

		return $prepared;
	}

	/**
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	public function prepare_conditions(): string {
		$prepared = $this->build_conditions_raw( $this->conditions );

		return implode( "\r\n\tAND ", $prepared );
	}

	/**
	 * @return mixed
	 * @throws Query_Builder_Exception
	 */
	public function prepare() {
		$type = $this->get_condition_type();

		list ( $first, $second ) = $this->get_condition_values();

		$callback = $this->get_types()[ $type ]['callback'];

		return call_user_func( $callback, $first, $second );
	}


	/**
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public function current_condition(): array {
		if ( empty( $this->current_condition ) ) {
			throw new Query_Builder_Exception( 'Do it wrong' );
		}

		return $this->current_condition;
	}

	/**
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	private function get_condition_type(): string {
		$condition = $this->current_condition();
		$type      = $condition['type'] ?? false;

		if ( ! $type || ! in_array( $type, array_keys( $this->get_types() ), true ) ) {
			throw new Query_Builder_Exception( "Undefined condition type: $type" );
		}

		return $type;
	}

	public function build_equal_static( $first, $second ): string {
		return "{$first} = {$second}";
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	public function build_equal_column( $column_name, $second ): string {
		$second = esc_sql( $second );

		return "{$this->view()->column( $column_name )} = '{$second}'";
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	public function build_equal_two_columns( $column_name, $second ): string {
		return "{$this->view()->column( $column_name )} = {$this->view()->column( $second )}";
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	public function build_like( $column_name, $second ): string {
		$second = esc_sql( $second );

		return "{$this->view()->column( $column_name )} LIKE '%{$second}%'";
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	public function build_not_like( $column_name, $second ): string {
		$second = esc_sql( $second );

		return "{$this->view()->column( $column_name )} LIKE '%{$second}%'";
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	public function build_more_static( $column_name, $second ): string {
		return "{$this->view()->column( $column_name )} > {$second}";
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	public function build_less_static( $column_name, $second ): string {
		return "{$this->view()->column( $column_name )} < {$second}";
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	public function build_in( $column_name, $second ): string {
		$right_part = implode( ', ', $second );

		return "{$this->view()->column( $column_name )} IN ({$right_part})";
	}

	/**
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public function get_condition_values(): array {
		$condition = $this->current_condition();

		return $condition['values'] ?? array();
	}

}
