<?php


namespace Jet_Form_Builder\Db_Queries;

use Jet_Form_Builder\Db_Queries\Traits\With_View;
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
	protected $where  = '';
	protected $limit  = '';

	protected $debug = false;

	public function debug(): Query_Builder {
		$this->debug = ! $this->debug;

		return $this;
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
	public function maybe_prepare_select(): Query_Builder {
		if ( $this->select ) {
			return $this;
		}

		return $this->prepare_select();
	}

	/**
	 * @return $this
	 * @throws Query_Builder_Exception
	 */
	public function prepare_where(): Query_Builder {
		$this->where = ( new Query_Conditions_Builder() )
			->set_view( $this->view() )
			->result();

		return $this;
	}

	/**
	 * @return $this
	 * @throws Query_Builder_Exception
	 */
	public function maybe_prepare_where(): Query_Builder {
		if ( $this->where ) {
			return $this;
		}

		return $this->prepare_where();
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
	 * @return $this
	 * @throws Query_Builder_Exception
	 */
	public function maybe_prepare_limit(): Query_Builder {
		if ( $this->limit ) {
			return $this;
		}

		return $this->prepare_limit();
	}


	/**
	 * @throws Query_Builder_Exception
	 */
	public function prepare_sql(): Query_Builder {
		$this->maybe_prepare_select();
		$this->maybe_prepare_where();
		$this->maybe_prepare_limit();

		$this->sql = "{$this->select}\r\n{$this->where}\r\n{$this->limit};";

		return $this;
	}

	/**
	 * @return mixed
	 * @throws Query_Builder_Exception
	 */
	public function sql() {
		$this->prepare_sql();

		if ( $this->debug ) {
			do_action( 'qm/debug', $this->sql );
		}

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
			$prepared = $this->view()->get_prepared_row( $row );

			$response[ $prepared['key'] ] = $prepared['value'];
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

}
