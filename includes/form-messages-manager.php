<?php


namespace Jet_Form_Builder;


class Form_Messages_Manager
{

    protected $_types = array();

    public function __construct() {
        $this->_types = apply_filters( 'jet-form-builder/message-types', array(
            'success' => array(
                'label' => __( 'Form successfully submitted.', 'jet-form-builder' ),
                'default' => __( 'Form successfully submitted.', 'jet-form-builder' ),
            ),
            'failed' => array(
                'label' => __( 'Submit failed.', 'jet-form-builder' ),
                'default' => __( 'There was an error trying to submit form. Please try again later.', 'jet-form-builder' ),
            ),
            'validation_failed' => array(
                'label' => __( 'Validation error', 'jet-form-builder' ),
                'default' => __( 'One or more fields have an error. Please check and try again.', 'jet-form-builder' ),
            ),
            'invalid_email' => array(
                'label' => __( 'Entered an invalid email', 'jet-form-builder' ),
                'default' => __( 'The e-mail address entered is invalid.', 'jet-form-builder' ),
            ),
            'empty_field' => array(
                'label' => __( 'Required field is empty', 'jet-form-builder' ),
                'default' => __( 'The field is required.', 'jet-form-builder' ),
            ),
            'password_mismatch' => array(
                'label' => __( 'Register User specific: Passwords mismatch', 'jet-form-builder' ),
                'default' => __( 'Passwords don\'t match.', 'jet-form-builder' ),
            ),
            'username_exists' => array(
                'label' => __( 'Register User specific: Username Exists', 'jet-form-builder' ),
                'default' => __( 'This username already taken.', 'jet-form-builder' ),
            ),
            'email_exists' => array(
                'label' => __( 'Register User specific: Email exists', 'jet-form-builder' ),
                'default' => __( 'This email address is already used.', 'jet-form-builder' ),
            ),
            'sanitize_user' => array(
                'label' => __( 'Register User specific: Incorrect username', 'jet-form-builder' ),
                'default' => __( 'Username contains not allowed characters.', 'jet-form-builder' ),
            ),
            'empty_username' => array(
                'label' => __( 'Register User specific: Empty username', 'jet-form-builder' ),
                'default' => __( 'Please set username.', 'jet-form-builder' ),
            ),
            'empty_email' => array(
                'label' => __( 'Register User specific: Empty email', 'jet-form-builder' ),
                'default' => __( 'Please set user email.', 'jet-form-builder' ),
            ),
            'empty_password' => array(
                'label' => __( 'Register User specific: Empty password', 'jet-form-builder' ),
                'default' => __( 'Please set user password.', 'jet-form-builder' ),
            ),
            'already_logged_in' => array(
                'label' => __( 'Register User specific: Logged in (appears only if register user is only notification)', 'jet-form-builder' ),
                'default' => __( 'You already logged in.', 'jet-form-builder' ),
            ),
            'captcha_failed' => array(
                'label' => __( 'Captcha validation failed', 'jet-form-builder' ),
                'default' => __( 'Captcha validation failed', 'jet-form-builder' ),
            ),
            'internal_error' => array(
                'label' => __( 'Internal server error', 'jet-form-builder' ),
                'default' => __( 'Internal server error. Please try again later.', 'jet-form-builder' ),
            ),
            'upload_max_files' => array(
                'label' => __( 'Media Specific: Max files limit', 'jet-form-builder' ),
                'default' => __( 'Maximum upload files limit is reached.', 'jet-form-builder' ),
            ),
            'upload_max_size' => array(
                'label' => __( 'Media Specific: Max size reached', 'jet-form-builder' ),
                'default' => __( 'Upload max size exceeded.', 'jet-form-builder' ),
            ),
            'upload_mime_types' => array(
                'label' => __( 'Media Specific: File type error', 'jet-form-builder' ),
                'default' => __( 'File type is not allowed.', 'jet-form-builder' ),
            ),
        ) );
    }

    public function isset_message_type( $type ) {
        return ( isset( $this->_types[ $type ] ) && isset( $this->_types[ $type ]['default'] ) );
    }

    public function get_message_text( $type, $form_id = 0 ) {
        if ( $this->isset_message_type( $type ) ) {

            return $this->_types[ $type ]['default'];
        }
        return '';
    }

    public function get_messages( $form_id = 0 ) {
        return $this->_types;
    }

}