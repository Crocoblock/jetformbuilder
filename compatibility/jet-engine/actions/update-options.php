<?php

namespace JFB_Compatibility\Jet_Engine\Actions;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Update_Options extends Base {

	public function get_name() {
		return __( 'Update Options', 'jet-form-builder' );
	}

	public function get_id() {
		return 'update_options';
	}

	public function action_attributes() {
		return array(
			'meta_fields_map' => array(
				'default' => array(),
			),
			'options_page'    => array(
				'default' => '',
			),
		);
	}

	public function self_script_name() {
		return 'jetFormUpdateOptionsData';
	}

	public function editor_labels() {
		return array(
			'options_page' => __( 'Options Page:', 'jet-form-builder' ),
			'options_map'  => __( 'Options Map:', 'jet-form-builder' ),
		);
	}

	public function do_action( array $request, Action_Handler $handler ) {
		$fields_map   = ! empty( $this->settings['meta_fields_map'] ) ? $this->settings['meta_fields_map'] : array();
		$options_data = array();

		if ( empty( $this->settings['options_page'] ) ) {
			return;
		}

		if ( ! empty( $fields_map ) ) {
			foreach ( $fields_map as $form_field => $option_field ) {
				if ( ! empty( $option_field ) && isset( $request[ $form_field ] ) ) {
					$options_data[ $option_field ] = $request[ $form_field ];
				}
			}
		}

		if ( empty( $options_data ) ) {
			throw new Action_Exception( 'failed' );
		}

		$option_name = $this->settings['options_page'];

		$page = isset( jet_engine()->options_pages->registered_pages[ $option_name ] ) ? jet_engine()->options_pages->registered_pages[ $option_name ] : false;

		if ( $page && method_exists( $page, 'update_options' ) ) {
			$page->update_options( $options_data, false, false );
			return;
		}

		$current_value = get_option( $option_name, array() );
		$new_value     = array_merge( $current_value, $options_data );

		update_option( $option_name, $new_value );
	}

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data() {
		return array(
			'optionsPages' => Tools::with_placeholder( Tools::get_options_pages_for_js() ),
		);
	}

}
