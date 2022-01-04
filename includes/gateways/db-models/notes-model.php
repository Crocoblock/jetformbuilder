<?php


namespace Jet_Form_Builder\Gateways\Db_Models;


use Automattic\WooCommerce\Admin\Notes\Note;
use Jet_FB_Paypal\Views\SubscribeNow;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Query_Views\Payer_View;

class Notes_Model extends Base_Db_Model {

	/**
	 * @inheritDoc
	 */
	public static function table_name(): string {
		return 'notes';
	}

	/**
	 * @inheritDoc
	 */
	public static function schema(): array {
		return array(
			'id'            => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'relation_id'   => 'bigint(20)',
			'relation_type' => 'varchar(100)',
			// user login or 'webhook'
			'created_by'    => 'varchar(100)',
			'message'       => 'text',
			'created_at'    => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			'updated_at'    => 'TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL',
		);
	}

	/**
	 * @inheritDoc
	 */
	public static function schema_keys(): array {
		return array(
			'id' => 'primary key',
		);
	}

	/**
	 * @param $columns
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public static function add( $columns ) {
		if ( ! is_array( $columns ) ) {
			$columns = array( 'message' => $columns );
		}

		$login = wp_get_current_user()->user_login ?? 'WEBHOOK';

		$columns = array_merge( array(
			'by'         => $login,
			'created_dt' => current_time( 'timestamp' ),
			'message'    => ''
		), $columns );

		if ( ! $columns['message'] ) {
			throw new Sql_Exception( 'Your note is empty.' );
		}

		return ( new static )->insert( $columns );
	}


}