<?php


namespace JFB_Modules\Webhook\Db\Models;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Exceptions\Action_Exception;
use JFB_Modules\Security;

class Tokens_Model extends Base_Db_Model {

	protected $gmt = 1;

	public static function table_name(): string {
		return 'tokens';
	}

	public static function schema(): array {
		return array(
			'id'             => 'bigint(20) NOT NULL AUTO_INCREMENT',
			// slug of action (it has nothing to do with the actions used in the form.)
			'action'         => 'varchar(100)',
			'hash'           => 'text',
			// How many times was performed
			'exec_count'     => 'int(11) NOT NULL DEFAULT 0',
			// How many times can be done
			'limit_exec'     => 'int(11) NOT NULL DEFAULT 1',
			'expire_at'      => 'TIMESTAMP NULL',
			self::CREATED_AT => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			self::UPDATED_AT => 'TIMESTAMP',
		);
	}

	public static function schema_keys(): array {
		return array(
			'id'        => 'primary key',
			'expire_at' => 'index',
		);
	}

	/**
	 * Prevent check capability to delete rows
	 */
	public function before_delete() {
		// silence is golden
	}

	/**
	 * @param string $action
	 * @param int|string $lifespan
	 *
	 * @return array<int, string>
	 * @throws Sql_Exception
	 */
	public static function create_token( string $action, $lifespan = 0 ): array {
		$timezone = new \DateTimeZone( 'UTC' );

		try {
			$current = new \DateTimeImmutable( 'now', $timezone );
		} catch ( \Exception $exception ) {
			return array( 0, '' );
		}

		$lifespan_min = $lifespan && is_numeric( $lifespan )
			? absint( $lifespan * 60 ) // return number of minutes
			: 0; // always be available

		$token = Security\Csrf\Csrf_Tools::generate();

		$row = array(
			'action' => $action,
			'hash'   => Security\Module::get_hasher()->HashPassword( $token ),
		);

		if ( $lifespan_min ) {
			$row['expire_at'] = $current->modify(
				sprintf( '+%d min', $lifespan_min )
			)->format(
				Base_Db_Model::DATETIME_FORMAT
			);
		}

		$id = ( new static() )->insert( $row );

		return array( $id, $token );
	}
}
