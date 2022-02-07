<?php


namespace Jet_Form_Builder\Db_Queries\Views;


use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

trait View_Base_Count_Trait {

	/**
	 * @return array[]
	 * @throws Query_Builder_Exception
	 */
	public function select_columns(): array {
		return array(
			array(
				'as' => sprintf( 'COUNT( %s ) as total', $this->column( 'id' ) ),
			),
		);
	}

	public function limit(): array {
		return array( 1 );
	}

	public function prepare_row( $value ) {
		return (int) $value;
	}

	public function get_count() {
		try {
			return (int) $this->query()
			                  ->query_var();

		} catch ( Query_Builder_Exception $exception ) {
			return 0;
		}
	}

	public static function count( $args = array() ) {
		$filters = $args['filters'] ?? array();

		return ( new static )->set_filters( $filters )->get_count();
	}
}