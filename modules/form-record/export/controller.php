<?php


namespace JFB_Modules\Form_Record\Export;

use JFB_Components\Wp_Nonce\Wp_Nonce;
use JFB_Modules\Form_Record\Models\Record_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Controller {

	const ACTION = 'jfb_records_export_admin';

	protected $nonce;

	public function __construct() {
		$this->nonce = new Wp_Nonce( self::ACTION );
	}

	public function run() {
		try {
			$this->do_export();
		} catch ( \Exception $exception ) {
			// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
			wp_die(
				$exception->getMessage(),
				__( 'Error', 'jet-form-builder' )
			);
			// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
		}
	}

	/**
	 * @throws \Exception
	 */
	protected function do_export() {
		if ( ! $this->nonce->verify() || ! current_user_can( 'manage_options' ) ) {
			throw new \Exception(
				__( 'You don`t have access to this URL', 'jet-form-builder' )
			);
		}

		// phpcs:disable WordPress.Security.NonceVerification.Recommended
		$fields = array_filter(
			array_map( 'sanitize_key', $_GET['fields'] ?? array() )
		);
		$extra  = array_filter(
			array_map( 'sanitize_key', $_GET['extra'] ?? array() )
		);
		// phpcs:enable WordPress.Security.NonceVerification.Recommended

		if ( ! $fields && ! $extra ) {
			throw new \Exception(
				__( 'Fields or additional columns must be specified', 'jet-form-builder' )
			);
		}

		$model_schema = Record_Model::schema();

	}

	public function get_nonce(): Wp_Nonce {
		return $this->nonce;
	}

	public function get_url(): string {
		return add_query_arg(
			array(
				'action'                 => self::ACTION,
				$this->nonce->get_name() => $this->nonce->create(),
			),
			admin_url( 'admin.php' )
		);
	}


}
