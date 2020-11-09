<?php
namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Exceptions\Action_Exception;

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

	public function do_action( $request, $index_action, $size_all, $actions_response )
    {
        $webhook_url = ! empty( $this->settings['webhook_url'] ) ? esc_url( $this->settings['webhook_url'] ) : false;

        if ( ! $webhook_url ) {
            throw new Action_Exception( 'failed' );
        }

        $args = array(
            'body' => $request,
        );

        /**
         * Filter webhook arguments
         */
        $args = apply_filters(
            'jet-engine/forms/booking/notification/webhook/request-args', $args, $this->settings, $this
        );

        $response = wp_remote_post( $webhook_url, $args );

        if ( $response instanceof \WP_Error) {
            throw new Action_Exception( 'failed' );
        }
        /**
         * Firtes whe webhook response recieved
         */
        do_action( 'jet-engine/forms/booking/notification/webhook/response', $response, $this->settings, $this );
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


