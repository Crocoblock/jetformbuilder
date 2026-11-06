<?php


namespace JFB_Modules\Actions_V2\Insert_Post\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Status_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'post_status';
	}

	public function get_label(): string {
		return __( 'Post Status', 'jet-form-builder' );
	}

	public function can_attach( string $key, $value ): bool {
		if ( empty( $value ) || 'from-field' === $value ) {
			return false;
		}
		if ( 'keep-current' === $value ) {
			$this->exclude();

			return false;
		}

		return parent::can_attach( $key, $value );
	}

	/**
	 * A status sent by a form field ("Post Status: Get from the form field",
	 * or a field mapped to Post Status) is visitor data. It is used only when
	 * it is a registered, non-internal status or "trash" (the action offers
	 * "Move to Trash" too) and, for a select, radio or checkbox field with
	 * options the author typed in, one of those options.
	 * Otherwise it is ignored: a new post gets the default status, an updated
	 * post keeps its status. A status from the action settings is not checked.
	 *
	 * @param string            $key
	 * @param mixed             $value
	 * @param Abstract_Modifier $modifier
	 */
	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$field = method_exists( $modifier, 'get_current_field_name' ) ? $modifier->get_current_field_name() : '';

		if ( '' !== $field && ! $this->is_allowed_field_status( $value, $field ) ) {
			return;
		}

		parent::do_before( $key, $value, $modifier );
	}

	/**
	 * @param mixed  $value Submitted status.
	 * @param string $field Form field name.
	 *
	 * @return bool
	 */
	protected function is_allowed_field_status( $value, string $field ): bool {
		$statuses = array_merge( get_post_stati( array( 'internal' => false ) ), array( 'trash' ) );
		$allowed  = is_string( $value )
			&& in_array( $value, $statuses, true )
			&& $this->is_offered_option( $value, $field );

		/**
		 * Whether a post status sent by a form field may be used.
		 *
		 * @since 3.6.8.1
		 *
		 * @param bool   $allowed Registered, non-internal status (or "trash") offered by the field.
		 * @param mixed  $value   Submitted status.
		 * @param string $field   Form field name.
		 */
		return (bool) apply_filters( 'jet-form-builder/insert-post/allow-field-status', $allowed, $value, $field );
	}

	/**
	 * For a select, radio or checkbox field with options the author typed in
	 * ("Manual Input") and without a custom value, the status must be one of
	 * the options. Other fields (hidden, text, options from posts or
	 * generators...) are not limited here.
	 *
	 * @param string $value
	 * @param string $field
	 *
	 * @return bool
	 */
	protected function is_offered_option( string $value, string $field ): bool {
		try {
			$type     = jet_fb_context()->get_field_type( $field );
			$settings = '' === $type ? array() : jet_fb_context()->get_settings( $field );
		} catch ( \Exception $exception ) {
			return true;
		}

		if ( ! in_array( $type, array( 'checkbox-field', 'radio-field', 'select-field' ), true ) ) {
			return true;
		}

		$custom = $settings['custom_option'] ?? false;

		if ( is_array( $custom ) ? ! empty( $custom['allow'] ) : (bool) $custom ) {
			return true;
		}

		if ( 'manual_input' !== ( $settings['field_options_from'] ?? 'manual_input' ) ) {
			return true;
		}

		foreach ( (array) ( $settings['field_options'] ?? array() ) as $index => $option ) {
			// Same value the option is rendered with: an option without a
			// value key is sent as its index.
			$option_value = is_array( $option ) ? ( $option['value'] ?? $index ) : null;

			if ( null !== $option_value && (string) $option_value === $value ) {
				return true;
			}
		}

		return false;
	}
}
