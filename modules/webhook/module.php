<?php


namespace JFB_Modules\Webhook;

use Jet_Form_Builder\Db_Queries\Query_Conditions_Builder;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_It;
use JFB_Modules\Logger\Empty_Logger;
use JFB_Modules\Logger\Logger_It;
use JFB_Modules\Webhook\Db\Models\Tokens_Model;
use JFB_Modules\Webhook\Db\Views\Tokens_View;
use JFB_Modules\Security;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements Base_Module_It, Base_Module_After_Install_It {

	const GET_TOKEN_ID = 'jfb_token_id';
	const GET_TOKEN    = 'jfb_token';

	/**
	 * @var Logger_It
	 */
	private $logger;

	public function rep_item_id() {
		return 'webhook';
	}

	public function condition(): bool {
		return (
			// phpcs:disable WordPress.Security.NonceVerification.Recommended
			array_key_exists( self::GET_TOKEN_ID, $_GET ) &&
			array_key_exists( self::GET_TOKEN, $_GET ) &&
			is_numeric( $_GET[ self::GET_TOKEN_ID ] )
			// phpcs:enable WordPress.Security.NonceVerification.Recommended
		);
	}

	public function init_hooks() {
		add_action( 'parse_request', array( $this, 'try_to_catch' ) );
	}

	public function remove_hooks() {
		remove_action( 'parse_request', array( $this, 'try_to_catch' ) );
	}

	public function on_install() {
		$this->set_logger( new Empty_Logger() );
	}

	public function on_uninstall() {
	}

	public function try_to_catch() {
		global $wpdb;

		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$id = absint( $_GET[ self::GET_TOKEN_ID ] ?? '' );
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$token = sanitize_key( $_GET[ self::GET_TOKEN ] ?? '' );

		$conditions = array(
			array(
				'type'   => Query_Conditions_Builder::TYPE_EQUAL,
				'values' => array( 'id', $id ),
			),
			array(
				'type'   => Query_Conditions_Builder::TYPE_MORE_STATIC,
				'values' => array( 'expire_at', current_time( 'mysql', true ) ),
			),
		);

		try {
			$row = Tokens_View::findOne( $conditions )->query()->query_one();
		} catch ( Query_Builder_Exception $exception ) {
			$this->logger->log(
				$exception->getMessage(),
				$conditions
			);

			return;
		}

		$table = Tokens_Model::table();

		// custom query to prevent race-condition
		// phpcs:disabled WordPress.DB
		$wpdb->query(
			$wpdb->prepare(
				"UPDATE {$table} 
SET {$table}.exec_count = {$table}.exec_count + 1
WHERE 1=1
AND {$table}.exec_count < {$table}.limit
AND {$table}.id = %d
;
",
				$id
			)
		);
		// phpcs:enabled WordPress.DB

		if ( ! $wpdb->rows_affected ) {
			$this->logger->log(
				sprintf(
				/* translators: %d - primary id of token row */
					__( 'Failed to increment `exec_count` column in %d (primary ID) row', 'jet-form-builder' ),
					$id
				)
			);

			return;
		}

		if ( ! Security\Module::get_hasher()->CheckPassword( $token, $row['hash'] ) ) {
			$this->logger->log(
				sprintf(
				/* translators: %d - primary id of token row */
					__( 'Invalid token for %d (primary ID) row', 'jet-form-builder' ),
					$id
				)
			);

			return;
		}

		$action = sanitize_key( $row['action'] );

		$this->logger->log(
		/* translators: %d - primary id of token row */
			__( 'Successfully verified webhook (primary ID -> %d)', 'jet-form-builder' ),
			sprintf( 'hook: jet-form-builder/webhook/%s', $action )
		);

		do_action( "jet-form-builder/webhook/{$action}", $row );
	}

	public function set_logger( Logger_It $logger ) {
		$this->logger = $logger;
	}
}
