<?php


namespace Jet_Form_Builder\Db_Queries;

use Jet_Form_Builder\Db_Queries\Traits\With_View;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;


/**
 * @method Query_Builder set_view( View_Base $view )
 *
 * Class Query_Builder
 * @package Jet_Form_Builder\Db_Queries
 */
class Query_Builder {

	use With_View;

	protected $sql;
	protected $select = '';
	protected $where = '';
	protected $limit = '';
	protected $order_by = '';

	protected $debug = false;

	public function prepare_parts_callbacks(): array {
		return array(
			'select'   => array( $this, 'prepare_select' ),
			'where'    => array( $this, 'prepare_where' ),
			'order_by' => array( $this, 'prepare_order_by' ),
			'limit'    => array( $this, 'prepare_limit' ),
		);
	}

	/**
	 * @return $this
	 * @throws Query_Builder_Exception
	 */
	public function prepare_select(): Query_Builder {
		$this->select = 'SELECT';
		$columns      = array();

		foreach ( $this->view()->select_columns() as $column ) {
			$columns[] = $this->view()->column( $column );
		}

		$this->select .= " \r\n\t" . implode( ", \r\n\t", $columns );
		$this->select .= "\r\nFROM `{$this->view()->table()}`";

		return $this;
	}


	/**
	 * @return $this
	 * @throws Query_Builder_Exception
	 */
	public function prepare_where(): Query_Builder {
		$custom = $this->view()->custom_where();

		if ( $custom ) {
			$this->where = $custom;

			return $this;
		}

		$this->where = ( new Query_Conditions_Builder() )
			->set_view( $this->view() )
			->result();

		return $this;
	}

	/**
	 * @throws Query_Builder_Exception
	 */
	public function prepare_limit(): Query_Builder {
		if ( ! $this->view()->limit() ) {
			return $this;
		}
		$this->limit = 'LIMIT ' . implode( ', ', $this->view()->limit() );

		return $this;
	}

	/**
	 * @return Query_Builder
	 * @throws Query_Builder_Exception
	 */
	public function prepare_order_by(): Query_Builder {
		if ( ! $this->view()->order_by() ) {
			return $this;
		}
		$columns = array();

		foreach ( $this->view()->order_by() as $column ) {
			$name = $this->view()->column( $column );
			$sort = $column['sort'] ?? '';

			$columns[] = trim( "$name $sort" );
		}

		$this->order_by = 'ORDER BY ' . " \r\n\t" . implode( ", \r\n\t", $columns );

		return $this;
	}

	public function maybe_prepare_parts() {
		foreach ( $this->prepare_parts_callbacks() as $part_name => $callback ) {
			if ( ! empty( $this->$part_name ) ) {
				continue;
			}

			call_user_func( $callback );
		}
	}

	public function get_parts(): array {
		$parts = array();

		foreach ( $this->prepare_parts_callbacks() as $part_name => $callback ) {
			if ( empty( $this->$part_name ) ) {
				continue;
			}
			$parts[] = $this->$part_name;
		}

		return $parts;
	}

	public function debug(): Query_Builder {
		$this->debug = ! $this->debug;

		return $this;
	}

	private function log( ...$something ) {
		if ( ! $this->debug ) {
			return;
		}
		if ( 1 === count( $something ) ) {
			do_action( 'qm/debug', $something[0] );

			return;
		}

		do_action( 'qm/debug', $something );
	}

	public function prepare_sql(): Query_Builder {
		$this->maybe_prepare_parts();

		$this->sql = implode( "\r\n", $this->get_parts() ) . ';';

		return $this;
	}

	/**
	 * @return string
	 */
	public function sql(): string {
		$this->prepare_sql();

		$this->log( $this->sql );

		return $this->sql;
	}

	/**
	 * @throws Query_Builder_Exception
	 */
	public function query_all(): array {
		global $wpdb;


		// phpcs:ignore WordPress.DB
		$rows = $wpdb->get_results( $this->sql(), ARRAY_A );

		$response = array();

		foreach ( $rows as $row ) {
			$response[] = $this->view()->get_prepared_row( $row );
		}

		return $response;
	}

	/**
	 * @throws Query_Builder_Exception
	 */
	public function query_one(): array {
		global $wpdb;

		// phpcs:ignore WordPress.DB
		$row = $wpdb->get_row( $this->sql(), ARRAY_A );

		return $this->view()->get_prepared_row( $row );
	}

	/**
	 * @param $column_offset
	 * @param $row_offset
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public function query_var( $column_offset = 0, $row_offset = 0 ) {
		global $wpdb;

		// phpcs:ignore WordPress.DB
		$row = $wpdb->get_var( $this->sql(), $column_offset, $row_offset );

		return $this->view()->get_prepared_row( $row );
	}

}
