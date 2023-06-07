<?php


namespace JFB_Modules\Form_Record\Export;

use JFB_Components\Export\Export_Tools;
use JFB_Components\Export\Table_Entries_Export_It;
use JFB_Components\Wp_Nonce\Wp_Nonce_It;
use JFB_Components\Wp_Nonce\Wp_Nonce_Trait;
use JFB_Modules\Form_Record\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Export_Controller implements Wp_Nonce_It {

	use Wp_Nonce_Trait;

	protected $extra_columns  = array();
	protected $fields_columns = array();

	abstract protected function do_export();

	public function run() {
		$this->extra_columns = array(
			'id'                => __( 'ID (primary)', 'jet-form-builder' ),
			'form_id'           => __( 'Form ID', 'jet-form-builder' ),
			'user_id'           => __( 'User ID', 'jet-form-builder' ),
			'from_content_id'   => __( 'From content ID', 'jet-form-builder' ),
			'from_content_type' => __( 'From content type', 'jet-form-builder' ),
			'status'            => __( 'Status', 'jet-form-builder' ),
			'ip_address'        => __( 'IP address', 'jet-form-builder' ),
			'user_agent'        => __( 'User agent', 'jet-form-builder' ),
			'referrer'          => __( 'Referrer', 'jet-form-builder' ),
			'submit_type'       => __( 'Submit type', 'jet-form-builder' ),
			'is_viewed'         => __( 'Is viewed', 'jet-form-builder' ),
			'created_at'        => __( 'Created', 'jet-form-builder' ),
			'updated_at'        => __( 'Updated', 'jet-form-builder' ),
		);

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

	protected function prepare_row( array $fields_values, array $extra_values ): array {
		foreach ( $extra_values as $property => $record_value ) {
			$extra_values[ sprintf( 'extra|%s', $property ) ] = is_null( $record_value ) ? '' : $record_value;
			unset( $extra_values[ $property ] );
		}

		return array_merge(
			$fields_values,
			$extra_values
		);
	}

	public function get_url(): string {
		return add_query_arg(
			array(
				'action'                          => Module::EXPORT_ACTION,
				$this->get_wp_nonce()->get_name() => $this->get_wp_nonce()->create(),
			),
			admin_url( 'admin.php' )
		);
	}

}
