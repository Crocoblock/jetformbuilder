<?php


namespace Jet_Form_Builder\Db_Queries\Views;

use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait View_Base_Count_Trait {

	/**
	 * @return array[]
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

	public function get_count(): int {
		try {
			return (int) $this->query()
							  ->query_var();

		} catch ( Query_Builder_Exception $exception ) {
			return 0;
		}
	}

	public static function count( $args = array() ) {
		$filters = $args['filters'] ?? $args;

		return ( new static() )->set_filters( $filters )->get_count();
	}
}
