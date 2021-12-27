<?php


namespace Jet_Form_Builder\Gateways;

use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Db_Models\Payer_Model;
use Jet_Form_Builder\Gateways\Query_Views\Payer_View;
use Jet_Form_Builder\Gateways\Query_Views\Payment_View;

class Prepared_Queries {

	/**
	 * @param $payer
	 *
	 * @return int
	 * @throws Sql_Exception|Query_Builder_Exception
	 */
	public static function insert_payer_with_id( $payer ): int {
		$payer_id = $payer['payer_id'] ?? '';

		self::insert_payer( $payer );

		$find_payer = self::get_payer(
			array(
				'payer_id' => $payer_id,
			)
		);

		return (int) ( $find_payer['id'] ?? 0 );
	}

	/**
	 * @param $payer
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public static function insert_payer( $payer ) {
		$model = new Payer_Model();

		return $model->safe_create()->insert( $payer );
	}

	/**
	 * @param $payer
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public static function update_payer( $payer ) {
		$model = new Payer_Model();

		$where = array();

		if ( isset( $payer['id'] ) ) {
			$where['id'] = $payer['id'];
		} elseif ( isset( $payer['payer_id'] ) ) {
			$where['payer_id'] = $payer['payer_id'];
		}
		unset( $payer['id'] );

		return $model->update( $payer, $where );
	}

	/**
	 * @param $payer_where
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function get_payer( $payer_where ) {
		$conditions = array();

		foreach ( $payer_where as $column => $value ) {
			$conditions[] = array(
				'type'   => 'equal_column',
				'values' => array( $column, $value ),
			);
		}

		$payer_view = ( new Payer_View() )
			->set_conditions( $conditions )
			->set_limit( array( 1 ) );

		return ( new Query_Builder() )
			->set_view( $payer_view )
			->query_one();
	}

	/**
	 * @param $payment_where
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function get_payment( $payment_where ) {
		$conditions = array();

		foreach ( $payment_where as $column => $value ) {
			$conditions[] = array(
				'type'   => 'equal_column',
				'values' => array( $column, $value ),
			);
		}

		$payer_view = ( new Payment_View() )
			->set_conditions( $conditions )
			->set_limit( array( 1 ) );

		return ( new Query_Builder() )
			->set_view( $payer_view )
			->query_one();
	}

}
