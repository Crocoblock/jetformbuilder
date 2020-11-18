<?php

namespace Jet_Form_Builder\Integrations;

/**
 * GetResponse Handler
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Getresponse_Handler class
 */
class Getresponse_Handler extends Integration_Base {

    protected $api_base_url = 'https://api.getresponse.com/v3/';

    /**
     * Constructor for the class
     *
     * @param $api_key
     */
    public function __construct( $api_key ) {

        if ( empty( $api_key ) ) {
            return new \WP_Error( 'invalid_api_key' );
        }

        $this->api_key = $api_key;
        $this->api_request_args = array(
            'headers' => array(
                'X-Auth-Token' => 'api-key ' . $api_key,
                'Content-Type' => 'application/json',
            ),
        );

    }


    public function get_all_data() {
        return array(
            'lists'  => $this->get_lists(),
            'fields' => $this->get_fields(),
        );
    }

    public function get_lists() {
        $result = array();
        $lists  = $this->request( 'campaigns' );

        if ( ! empty( $lists ) ) {
            foreach ( $lists as $list ) {
                if ( ! is_array( $list ) ) {
                    continue;
                }

                $result[ $list['campaignId'] ] = $list['name'];
            }
        }

        return $result;
    }

    public function get_fields() {
        $result = array(
            'email' => array(
                'label'    => esc_html__( 'Email', 'jet-engine' ),
                'required' => true,
            ),
            'name' => array(
                'label'    => esc_html__( 'Name', 'jet-engine' ),
                'required' => false,
            ),
        );

        $custom_fields = $this->request( 'custom-fields' );

        if ( ! empty( $custom_fields ) ) {
            foreach ( $custom_fields as $field ) {
                $result[ $field['customFieldId'] ] = array(
                    'label'    => $field['name'],
                    'required' => false,
                );
            }
        }

        return $result;
    }
}
