<?php


namespace Jet_Form_Builder\Gateways\Db_Models;

use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Query_Views\Payer_View;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Payer_Model extends Base_Db_Model {

	/**
	 * @inheritDoc
	 */
	public static function table_name(): string {
		return 'payers';
	}

	/**
	 * @inheritDoc
	 */
	public static function schema(): array {
		return array(
			'id'         => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'user_id'    => 'bigint(20)',
			'payer_id'   => 'varchar(100)',
			'first_name' => 'varchar(100)',
			'last_name'  => 'varchar(100)',
			'email'      => 'varchar(255)',
			'created_at' => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			'updated_at' => 'TIMESTAMP NOT NULL',
		);
	}

	/**
	 * @inheritDoc
	 */
	public static function schema_keys(): array {
		return array(
			'id'       => 'primary key',
			'payer_id' => 'index',
			'email'    => 'index',
		);
	}

	/**
	 * @param $payer
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public static function insert_or_update( $payer ): int {
		$payer_id = $payer['payer_id'] ?? '';

		try {
			$find_payer = Payer_View::find(
				array(
					'payer_id' => $payer_id,
				)
			)->query()->query_one();

		} catch ( Query_Builder_Exception $exception ) {
			return ( new self() )->insert( $payer );
		}

		self::update_payer( $payer );

		return (int) ( $find_payer['id'] ?? 0 );
	}

	/**
	 * @param $payer
	 *
	 * @return int
	 */
	public static function update_payer( $payer ): int {
		$where = array();

		if ( isset( $payer['id'] ) ) {
			$where['id'] = $payer['id'];
		} elseif ( isset( $payer['payer_id'] ) ) {
			$where['payer_id'] = $payer['payer_id'];
		}
		unset( $payer['id'], $payer['payer_id'] );

		return ( new static() )->update_soft( $payer, $where );
	}


}
