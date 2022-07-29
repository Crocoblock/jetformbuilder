<?php


namespace Jet_Form_Builder\Post_Meta;


use Jet_Form_Builder\Classes\Tools;

class Messages_Meta extends Base_Meta_Type {

	private $messages;

	public function __construct() {
		$this->messages = apply_filters(
		// phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores
			'jet-form-builder/message-types',
			$this->get_messages()
		);
	}

	public function get_id(): string {
		return '_jf_messages';
	}

	public function get_type(): string {
		return 'string';
	}

	public function get_default(): string {
		return Tools::encode_json( $this->get_values() );
	}

	private function get_messages(): array {
		return array(
			'success'           => array(
				'label' => __( 'Form successfully submitted.', 'jet-form-builder' ),
				'value' => 'Form successfully submitted.',
			),
			'failed'            => array(
				'label' => __( 'Submit failed.', 'jet-form-builder' ),
				'value' => 'There was an error trying to submit form. Please try again later.',
			),
			'validation_failed' => array(
				'label' => __( 'Validation error', 'jet-form-builder' ),
				'value' => 'One or more fields have an error. Please check and try again.',
			),
			'captcha_failed'    => array(
				'label' => __( 'Captcha validation failed', 'jet-form-builder' ),
				'value' => __( 'Captcha validation failed', 'jet-form-builder' ),
			),
			'invalid_email'     => array(
				'label' => __( 'Entered an invalid email', 'jet-form-builder' ),
				'value' => 'The e-mail address entered is invalid.',
			),
			'empty_field'       => array(
				'label' => __( 'Required field is empty', 'jet-form-builder' ),
				'value' => 'The field is required.',
			),
			'internal_error'    => array(
				'label' => __( 'Internal server error', 'jet-form-builder' ),
				'value' => 'Internal server error. Please try again later.',
			),
			'upload_max_files'  => array(
				'label' => __( 'Media Specific: Max files limit', 'jet-form-builder' ),
				'value' => 'Maximum upload files limit is reached.',
			),
			'upload_max_size'   => array(
				'label' => __( 'Media Specific: Max size reached', 'jet-form-builder' ),
				'value' => 'Upload max size exceeded.',
			),
			'upload_mime_types' => array(
				'label' => __( 'Media Specific: File type error', 'jet-form-builder' ),
				'value' => 'File type is not allowed.',
			),
		);
	}

	public function messages(): array {
		return $this->messages;
	}

	public function query( $form_id ) {
		$messages = parent::query( $form_id );

		if ( empty( $messages ) ) {
			return $this->messages;
		}

		return $messages;
	}


	public function get_values() {
		return $this->get_by_key( 'label' );
	}

	public function get_labels(): array {
		return $this->get_by_key( 'label' );
	}

	public function get_by_key( $key ): array {
		$messages = array();

		foreach ( $this->messages as $type => $message ) {
			if ( ! isset( $message[ $key ] ) ) {
				break;
			}
			$messages[ $type ] = $message[ $key ];
		}

		return $messages;
	}
}