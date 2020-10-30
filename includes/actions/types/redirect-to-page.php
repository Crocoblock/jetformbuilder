<?php
namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Classes\Tools;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Redirect_To_Page extends Base {

	public function get_name() {
		return __( 'Redirect to Page', 'jet-form-builder' );
	}

	public function get_id() {
		return 'redirect_to_page';
	}

	public function do_action()
    {
        // TODO: Implement do_action() method.
    }

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data( $editor, $handle ) {

		wp_localize_script( $handle, 'jetFormRedirectToPageData', array(
		    'pages' => Tools::get_pages_list_for_js(),
		    'redirect_types' => $this->get_redirect_types(),
		    'labels' => array(
		        'redirect_type' => __( 'Redirect to:', 'jet-form-builder' ),
                'redirect_page' => __( 'Select page:', 'jet-form-builder' ),
                'redirect_url'  => __( 'Redirect URL:', 'jet-form-builder' ),
                'redirect_args' => __( 'Add query arguments to the redirect URL:', 'jet-form-builder' ),
                'redirect_hash' => __( 'Add hash to the redirect URL:', 'jet-form-builder' )
            ),
        ) );
	}

	public function get_redirect_types() {
	    return array(
            array(
                'value' => '',
                'label' => 'Select redirect to...',
            ),
	        array(
                'value' => 'static_page',
                'label' => 'Static Page',
            ),
            array(
                'value' => 'custom_url',
                'label' => 'Custom URL',
            ),
            array(
                'value' => 'current_page',
                'label' => 'Current Page',
            ),
        );
    }


}


