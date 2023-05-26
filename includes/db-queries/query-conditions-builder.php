<?php


namespace Jet_Form_Builder\Db_Queries;

use Jet_Form_Builder\Db_Queries\Traits\With_View;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use JFB_Components\Db\Db_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
	/**
	 * @since 3.1.0
	 */
	const TYPE_NOT_EQUAL    = 'not_equal_column';
	const TYPE_LIKE_END     = 'like_end';
	const TYPE_NOT_LIKE_END = 'not_like_end';


	/**
	 * @since 3.1.0
	 */
	const RELATIONS_TYPES = array( 'AND', 'OR' );

	use With_View;

	private $conditions = array();

	private $relation_type = 'AND';

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
			/**
			 * @since 3.1.0
			 */
			self::TYPE_NOT_EQUAL     => array(
				'callback' => array( $this, 'build_not_equal_column' ),
			),
			self::TYPE_LIKE_END      => array(
				'callback' => array( $this, 'build_like_end' ),
			),
			self::TYPE_NOT_LIKE_END  => array(
				'callback' => array( $this, 'build_not_like_end' ),
			),
		);
	}

	/**
	 * @param array|Query_Conditions_Builder $condition
	 *
	 * @return $this
	 */
	public function set_condition( $condition ): Query_Conditions_Builder {
		if ( ! is_array( $condition ) && ! ( $condition instanceof Query_Conditions_Builder ) ) {
			return $this;
		}
		$this->conditions[] = $condition;

		return $this;
	}

	public function set_conditions( array $conditions ): Query_Conditions_Builder {
		foreach ( $conditions as $condition ) {
			$this->set_condition( $condition );
		}

		return $this;
	}

	public function after_set_view() {
		try {
			$view = $this->view();
		} catch ( Query_Builder_Exception $exception ) {
			return;
		}

		$this->set_conditions( $view->conditions() );
	}

	/**
	 * @return string
	 */
	public function result(): string {
		if ( ! $this->conditions ) {
			return '';
		}

		return 'WHERE ' . $this->prepare_conditions();
	}

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
	 */
	public function prepare_conditions(): string {
		$prepared = $this->build_conditions_raw( $this->conditions );

		return implode(
			sprintf( "\r\n\t%s ", $this->relation_type ),
			$prepared
		);
	}

	/**
	 * @return mixed
	 */
	public function prepare() {
		if ( $this->current_condition instanceof Query_Conditions_Builder ) {
			return sprintf( "(\r\n%s\r\n)", $this->current_condition->prepare_conditions() );
		}

		$type = $this->get_condition_type();

		list ( $first, $second ) = $this->get_condition_values();

		$callback = $this->get_types()[ $type ]['callback'];

		return call_user_func( $callback, $first, $second );
	}


	/**
	 * @return array
	 */
	public function current_condition(): array {
		if ( empty( $this->current_condition ) ) {
			_doing_it_wrong( __METHOD__, 'Current condition is empty', '2.0.0' );
			wp_die();
		}

		return $this->current_condition;
	}

	/**
	 * @return string
	 */
	private function get_condition_type(): string {
		$condition = $this->current_condition();
		$type      = $condition['type'] ?? false;

		if ( ! $type || ! in_array( $type, array_keys( $this->get_types() ), true ) ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			_doing_it_wrong( __METHOD__, "Undefined condition type: $type", '2.0.0' );
			wp_die();
		}

		return $type;
	}

	public function build_equal_static( $first, $second ): string {
		global $wpdb;

		return $wpdb->prepare(
			'%s = %s',
			$first,
			$second
		);
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 */
	public function build_equal_column( $column_name, $second ): string {
		global $wpdb;
		$format      = is_numeric( $second ) ? '%d' : '%s';
		$column_name = Db_Tools::sanitize_column( $column_name );

		try {
			$column_name = $this->view()->column( $column_name );
		} catch ( Query_Builder_Exception $exception ) {
			// silence
		}

		return $wpdb->prepare(
		// phpcs:ignore WordPress.DB
			"{$column_name} = {$format}",
			$second
		);
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 * @since 3.1.0
	 */
	public function build_not_equal_column( $column_name, $second ): string {
		global $wpdb;
		$format      = is_numeric( $second ) ? '%d' : '%s';
		$column_name = Db_Tools::sanitize_column( $column_name );

		try {
			$column_name = $this->view()->column( $column_name );
		} catch ( Query_Builder_Exception $exception ) {
			// silence
		}

		return $wpdb->prepare(
		// phpcs:ignore WordPress.DB
			"{$column_name} != {$format}",
			$second
		);
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 */
	public function build_equal_two_columns( $column_name, $second ): string {
		$column_name = Db_Tools::sanitize_column( $column_name );
		$second      = Db_Tools::sanitize_column( $second );

		try {
			$column_name = $this->view()->column( $column_name );
			$second      = $this->view()->column( $second );
		} catch ( Query_Builder_Exception $exception ) {
			// silence
		}

		return "{$column_name} = {$second}";
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 */
	public function build_like( $column_name, $second ): string {
		$second      = esc_sql( $second );
		$column_name = Db_Tools::sanitize_column( $column_name );

		try {
			$column_name = $this->view()->column( $column_name );
		} catch ( Query_Builder_Exception $exception ) {
			// silence
		}

		return "{$column_name} LIKE '%{$second}%'";
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 */
	public function build_not_like( $column_name, $second ): string {
		$second      = esc_sql( $second );
		$column_name = Db_Tools::sanitize_column( $column_name );

		try {
			$column_name = $this->view()->column( $column_name );
		} catch ( Query_Builder_Exception $exception ) {
			// silence
		}

		return "{$column_name} NOT LIKE '%{$second}%'";
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 */
	public function build_like_end( $column_name, $second ): string {
		$second      = esc_sql( $second );
		$column_name = Db_Tools::sanitize_column( $column_name );

		try {
			$column_name = $this->view()->column( $column_name );
		} catch ( Query_Builder_Exception $exception ) {
			// silence
		}

		return "{$column_name} LIKE '{$second}%'";
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	public function build_not_like_end( $column_name, $second ): string {
		$second      = esc_sql( $second );
		$column_name = Db_Tools::sanitize_column( $column_name );

		try {
			$column_name = $this->view()->column( $column_name );
		} catch ( Query_Builder_Exception $exception ) {
			// silence
		}

		return "{$column_name} NOT LIKE '{$second}%'";
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	public function build_more_static( $column_name, $second ): string {
		global $wpdb;

		$format      = is_numeric( $second ) ? '%d' : '%s';
		$column_name = Db_Tools::sanitize_column( $column_name );

		try {
			$column_name = $this->view()->column( $column_name );
		} catch ( Query_Builder_Exception $exception ) {
			// silence
		}

		// phpcs:disable WordPress.DB
		return $wpdb->prepare(
			$column_name . ' > ' . $format,
			$second
		);
		// phpcs:enable WordPress.DB
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 * @throws Query_Builder_Exception
	 */
	public function build_less_static( $column_name, $second ): string {
		global $wpdb;

		$format      = is_numeric( $second ) ? '%d' : '%s';
		$column_name = Db_Tools::sanitize_column( $column_name );

		try {
			$column_name = $this->view()->column( $column_name );
		} catch ( Query_Builder_Exception $exception ) {
			// silence
		}

		// phpcs:disable WordPress.DB
		return $wpdb->prepare(
			$column_name . ' < ' . $format,
			$second
		);
		// phpcs:enable WordPress.DB
	}

	/**
	 * @param $column_name
	 * @param $second
	 *
	 * @return string
	 */
	public function build_in( $column_name, $second ): string {
		$right_part  = implode( ', ', $second );
		$column_name = Db_Tools::sanitize_column( $column_name );

		try {
			$column_name = $this->view()->column( $column_name );
		} catch ( Query_Builder_Exception $exception ) {
			// silence
		}

		return "{$column_name} IN ({$right_part})";
	}

	/**
	 * @return array
	 */
	public function get_condition_values(): array {
		$condition = $this->current_condition();

		return $condition['values'] ?? array();
	}

	/**
	 * @return $this
	 * @since 3.1.0
	 */
	public function set_relation_and(): Query_Conditions_Builder {
		return $this->set_relation_type( 'AND' );
	}

	/**
	 * @return $this
	 * @since 3.1.0
	 */
	public function set_relation_or(): Query_Conditions_Builder {
		return $this->set_relation_type( 'OR' );
	}

	protected function set_relation_type( string $type ): Query_Conditions_Builder {
		if ( ! in_array( $type, self::RELATIONS_TYPES, true ) ) {
			return $this;
		}
		$this->relation_type = $type;

		return $this;
	}

}
