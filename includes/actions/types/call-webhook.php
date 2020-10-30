<?php
namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Call_Webhook extends Base {

	public function get_name() {
		return __( 'Call Webhook', 'jet-form-builder' );
	}

	public function get_id() {
		return 'call_webhook';
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

		wp_localize_script( $handle, 'jetFormCallWebHookData', array(
		    'labels' => array(
		        'webhook_url' => __( 'Webhook URL:', 'jet-form-builder' )
            ),
        ) );
	}


}


