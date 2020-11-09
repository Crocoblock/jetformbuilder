<?php
namespace Jet_Form_Builder\Actions\Types;

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

	public function do_action( $request, $index_action, $size_all, $actions_response )
    {
        $fields_map   = ! empty( $this->settings['meta_fields_map'] ) ? $this->settings['meta_fields_map'] : array();
        $options_data = array();

        if ( empty( $this->settings['options_page'] ) ) {
            return;
        }

        if ( ! empty( $fields_map ) ) {
            foreach ( $fields_map as $form_field => $option_field ) {
                if ( ! empty( $option_field ) && ! empty( $request[ $form_field ] ) ) {
                    $options_data[ $option_field ] = $request[ $form_field ];
                }
            }
        }

        if ( empty( $options_data ) ) {
            throw new Action_Exception( 'failed' );
        }

        $option_name = $this->settings['options_page'];

        $current_value = get_option( $option_name, array() );
        $new_value     = array_merge( $current_value, $options_data );

        update_option( $option_name, $new_value );
    }

    /**
     * @return bool
     */
    public static function can_run() {
        return function_exists( 'jet_engine' );
    }

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data( $editor, $handle ) {

		wp_localize_script( $handle, 'jetFormUpdateOptionsData', array(
			'optionsPages'      => $this->get_pages(),
			'labels'            => array(
                'options_page'     => __(
                    'Options Page:',
                    'jet-form-builder'
                ),
                'options_map'    => __(
                    'Options Map:',
                    'jet-form-builder'
                ),
            ),
		) );
	}

	private function get_pages() {
	    return array_merge(
	        array(
	            array(
	            'value' => '',
                'label' => __( 'Select page...', 'jet-form-builder' )
                ),
            ),
            Tools::get_options_pages_for_js()
        );
    }


}


