<?php


namespace JFB_Modules\Form_Record\Export;

use JFB_Components\Export\Interfaces\Base_Export_Controller_It;
use JFB_Components\Export\Traits\Base_Export_Controller_Trait;
use JFB_Components\Wp_Nonce\Wp_Nonce_It;
use JFB_Components\Wp_Nonce\Wp_Nonce_Trait;
use JFB_Modules\Block_Parsers\Field_Data_Parser;
use JFB_Modules\Form_Record\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Export_Controller implements Base_Export_Controller_It {

	use Base_Export_Controller_Trait;

	protected $extra_columns  = array();
	protected $fields_columns = array();


	public function __construct() {
		$this->set_extra_columns(
			array(
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
			)
		);
	}

	protected function prepare_row( array $fields_values, array $extra_values ): array {
		foreach ( $extra_values as $property => $record_value ) {
			$extra_values[ sprintf( 'extra|%s', $property ) ] = is_null( $record_value ) ? '' : $record_value;
			unset( $extra_values[ $property ] );
		}

		// make ID column first
		if ( isset( $extra_values['extra|id'] ) ) {
			$fields_values = array(
				'extra|id' => $extra_values['extra|id'],
			) + $fields_values;
			unset( $extra_values['extra|id'] );
		}

		return apply_filters(
			'jet-form-builder/export/form-record/row',
			array_merge( $fields_values, $extra_values )
		);
	}

	/**
	 * @param array $extra_columns
	 */
	public function set_extra_columns( array $extra_columns ) {
		$this->extra_columns = $extra_columns;
	}

	protected function get_field_columns(): array {
		$columns = array();
		/**
		 * @var string $name
		 * @var Field_Data_Parser $parser
		 */
		foreach ( jet_fb_context()->iterate_parsers_list() as $name => $parser ) {
			if ( 'password' === $parser->get_setting( 'field-type' ) ) {
				$parser->get_context()->remove( $parser->get_name() );
				continue;
			}
			if ( $parser->get_inner_template() ) {
				continue;
			}
			$columns[ $name ] = $parser->get_scoped_label();

			if ( $parser->get_context()->get_parent_name() ) {
				$parser->get_context()->set_hide_index( true );
			}
		}

		return $columns;
	}

}
