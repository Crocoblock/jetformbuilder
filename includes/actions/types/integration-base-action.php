<?php


namespace Jet_Form_Builder\Actions\Types;


abstract class Integration_Base_Action extends Base
{
    protected $action;

    public function __construct() {
        parent::__construct();

        if ( wp_doing_ajax() && ! empty( $this->action ) ) {
            add_action( 'wp_ajax_' . $this->action, array( $this, 'get_api_data' ) );
        }
    }

    /**
     * Should return object of
     *
     * @param $api_key
     * @return mixed
     */
    abstract public function api_handler( $api_key );

    public function get_api_data() {
        if ( empty( $_REQUEST['api_key'] ) ) {
            wp_send_json_error();
        }

        $handler = $this->api_handler( $_REQUEST['api_key'] );

        if ( is_wp_error( $handler ) ) {
            wp_send_json_error();
        }

        $data = $handler->get_all_data();

        $this->filter_result( $data );
    }

    public function filter_result( $data ) {
        if ( empty( $data['lists'] ) ) {
            wp_send_json_error();
        }

        wp_send_json_success( $data );
    }

}