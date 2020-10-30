<?php
namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Classes\Tools;

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

	public function do_action()
    {
        // TODO: Implement do_action() method.
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


