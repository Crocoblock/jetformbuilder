<?php


namespace Jet_Form_Builder;


use Jet_Form_Builder\Exceptions\Request_Exception;

class Request_Handler
{
    public $request;
    public $errors;

    public function __construct( $request ) {
        $this->request = (object) $request;
    }


    /**
     * Get form values from request
     *
     * @return [type] [description]
     */
    public function get_values_from_request() {

        if ( $this->request->is_ajax ) {

            $prepared = array();
            $raw      = ! empty( $_REQUEST['values'] ) ? $_REQUEST['values'] : array();

            if ( empty( $raw ) ) {
                return $prepared;
            }

            foreach ( $raw as $data ) {

                $name  = $data['name'];
                $value = $data['value'];

                if ( false !== strpos( $name, '[]') ) {

                    $name = str_replace( '[]', '', $name );

                    if ( empty( $prepared[ $name ] ) ) {
                        $prepared[ $name ] = array();
                    }

                    $prepared[ $name ][] = $value;

                } else {
                    $prepared[ $name ] = $value;
                }

            }

            return $prepared;

        } else {
            return $_REQUEST;
        }

    }


    /**
     * Get submitted form data
     *
     * @return array [type] [description]
     * @throws Request_Exception
     */
    public function get_form_data() {

        $fields         = Plugin::instance()->form->get_fields( $this->request->form_id );
        $data           = array();
        $errors         = array();
        $invalid_email  = false;
        $request        = $this->get_values_from_request();


        $skip_fields = array( 'submit-field', 'page-break-field', 'heading-field', 'group-break-field' );

        foreach ( $fields as $field ) {
            $settings   = $field['attrs'];
            $type       = Plugin::instance()->form->field_name( $field['blockName'] );

            if ( in_array( $type, $skip_fields ) ) {
                continue;
            }

            if ( ! $this->is_field_visible( $settings ) ) {
                continue;
            }

            $required = ! empty( $settings['required'] ) ? $settings['required'] : '';
            $name     = $settings['name'];
            $value    = isset( $request[ $name ] ) ? $request[ $name ] : '';

            if ( 'media-field' === $type ) {

                $value = json_decode( wp_unslash( $value ), true );

                if ( ! empty( $settings['insert_attachment'] ) && ! empty( $settings['value_format'] ) && 'id' === $settings['value_format'] ) {
                    if ( ! is_array( $value ) ) {
                        $value = absint( $value );
                    } else {
                        $value = implode( ',', $value );
                    }
                }

            }

            if ( 'wysiwyg-field' === $type ) {
                $required = false;
                $value = jet_engine_sanitize_wysiwyg( $value );
            }

            $data[ $name ] = $value;

            if ( 'text-field' === $type && 'email' === $settings['field_type'] ) {
                $invalid_email = is_email( $value );
            }

            if ( is_array( $value ) ) {
                $value = implode( ', ', $value );
            }

            if ( $required && '' === $value ) {
                $this->errors[] = $name;
            }

        }

        $data = apply_filters( 'jet-form-builder/form-handler/form-data', $data, $this->request->form_id, $fields );

        if ( ! empty( $errors ) ) {
            throw new Request_Exception( 'success' );
        }

        if ( $invalid_email ) {
            throw new Request_Exception( 'invalid_email' );
        }

        return $data;
    }


    /**
     * Returns true if field is visible
     *
     * @param  array   $field [description]
     * @return boolean        [description]
     */
    public function is_field_visible( $field = array() ) {

        // For backward compatibility and hidden fields
        if ( empty( $field['visibility'] ) ) {
            return true;
        }

        // If is visible for all - show field
        if ( 'all' === $field['visibility'] ) {
            return true;
        }

        // If is visible for logged in users and user is logged in - show field
        if ( 'logged_id' === $field['visibility'] && is_user_logged_in() ) {
            return true;
        }

        // If is visible for not logged in users and user is not logged in - show field
        if ( 'not_logged_in' === $field['visibility'] && ! is_user_logged_in() ) {
            return true;
        }

        return false;

    }
}