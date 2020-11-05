<?php
namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Send_Email extends Base {

	public function get_name() {
		return __( 'Send Email', 'jet-form-builder' );
	}

	public function get_id() {
		return 'send_email';
	}

	public function do_action($request)
    {
        // TODO: Implement do_action() method.
    }

    /**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data( $editor, $handle ) {

		wp_localize_script( $handle, 'jetFormEmailData', array(
			'mailTo' => array(
				array(
					'value' => 'admin',
					'label' => __( 'Admin email', 'jet-form-builder' ),
				),
				array(
					'value' => 'form',
					'label' => __( 'Email from submitted form field', 'jet-form-builder' ),
				),
				array(
					'value' => 'custom',
					'label' => __( 'Custom email', 'jet-form-builder' ),
				),
			),
			'replyTo' => array(
				array(
					'value' => '',
					'label' => __( 'Not selected', 'jet-form-builder' ),
				),
				array(
					'value' => 'form',
					'label' => __( 'Email from submitted form field', 'jet-form-builder' ),
				),
				array(
					'value' => 'custom',
					'label' => __( 'Custom email', 'jet-form-builder' ),
				),
			),
			'labels' => array(
				'mail_to'               => __( 'Mail To:', 'jet-form-builder' ),
				'mail_to_help'          => false,
				'custom_email'          => __( 'Email Address:', 'jet-form-builder' ),
				'custom_email_help'     => false,
				'from_field'            => __( 'From Field:', 'jet-form-builder' ),
				'from_field_help'       => false,
				'reply_to'              => __( 'Reply To:', 'jet-form-builder' ),
				'reply_to_help'         => false,
				'reply_to_email'        => __( 'Reply to Email Address:', 'jet-form-builder' ),
				'reply_to_email_help'   => false,
				'reply_from_field'      => __( 'Reply To Email From Field:', 'jet-form-builder' ),
				'reply_from_field_help' => false,
				'subject'               => __( 'Subject:', 'jet-form-builder' ),
				'subject_help'          => false,
				'from_name'             => __( 'From Name:', 'jet-form-builder' ),
				'from_name_help'        => false,
				'from_address'          => __( 'From Email Address:', 'jet-form-builder' ),
				'from_address_help'     => false,
				'content'               => __( 'Content:', 'jet-form-builder' ),
				'content_help'          => false,
			),
			'customMacros' => apply_filters( 'jet-form-builder/actions/send-email/custom-macros', false )
		) );
	}

}
