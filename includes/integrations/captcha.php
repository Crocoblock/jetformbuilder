<?php
/**
 * Captcha manager class
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! class_exists( 'Jet_Engine_Booking_Forms_Captcha' ) ) {

	/**
	 * Define Jet_Engine_Booking_Forms_Captcha class
	 */
	class Jet_Engine_Booking_Forms_Captcha {

		public static $script_rendered = false;

		private $meta_key  = '_captcha';
		private $field_key = '_captcha_token';
		private $api       = 'https://www.google.com/recaptcha/api/siteverify';
		private $defaults  = array(
			'enabled' => false,
			'key'     => '',
			'secret'  => '',
		);

		/**
		 * Update captcha related meta with data from $_POST array
		 * @return [type] [description]
		 */
		public function update_meta( $post_id ) {

			$captcha = isset( $_POST[ $this->meta_key ] ) ? $_POST[ $this->meta_key ] : $this->defaults;
			update_post_meta( $post_id, $this->meta_key, $captcha );

		}

		public function verify( $form_id = null, $is_ajax = false ) {

			$captcha = $this->get_data( $form_id );

			if ( empty( $captcha['enabled'] ) ) {
				return true;
			}

			if ( ! $is_ajax ) {
				$request = $_REQUEST;
			} else {

				$raw     = $_REQUEST['values'];
				$request = array();

				foreach( $raw as $field ) {
					$request[ $field['name'] ] = $field['value'];
				}
			}

			if ( empty( $request[ $this->field_key ] ) ) {
				return false;
			}

			$token    = esc_attr( $request[ $this->field_key ] );
			$response = wp_remote_post( $this->api, array(
				'body' => array(
					'secret'   => $captcha['secret'],
					'response' => $token,
				),
			) );

			$body = wp_remote_retrieve_body( $response );
			$body = json_decode( $body, true );

			if ( ! $body || empty( $body['success'] ) ) {
				return false;
			} else {
				return $body['success'];
			}

		}

		/**
		 * Returns captcha settings for passed form ID
		 *
		 * @param  [type] $post_id [description]
		 * @return [type]          [description]
		 */
		public function get_data( $form_id = null ) {

			if ( ! $form_id ) {
				$form_id = get_the_ID();
			}

			$captcha = get_post_meta( $form_id, $this->meta_key, true );

			if ( ! $captcha || ! is_array( $captcha ) ) {
				return $this->defaults;
			} else {
				return wp_parse_args( $captcha, $this->defaults );
			}

		}

		public function render( $form_id ) {

			$captcha = $this->get_data( $form_id );

			if ( empty( $captcha['enabled'] ) ) {
				return;
			}

			$key = esc_attr( $captcha['key'] );

			if ( ! $key ) {
				return;
			}

			if ( ! self::$script_rendered ) {
				self::$script_rendered = true;
				printf( '<script src="https://www.google.com/recaptcha/api.js?render=%s"></script>', $key );
			}

			?>
			<input type="hidden" class="captcha-token" name="<?php echo $this->field_key; ?>" value="">
			<script>

				if ( ! window.JetEngineFormCaptcha ) {
					window.JetEngineFormCaptcha = function( formID ) {

						var $cpField = jQuery( 'form[data-form-id="' + formID + '"]' ).find( '.captcha-token' );

						if ( window.JetEngineFormToken ) {
							$cpField.val( window.JetEngineFormToken );
						} else if ( window.grecaptcha ) {
							window.grecaptcha.ready( function() {
								grecaptcha.execute(
									'<?php echo $key; ?>',
									{
										action: 'submit_form'
									}
								).then( function( token ) {
									$cpField.val( token );
									window.JetEngineFormToken = token;
								});
							});
						}

					}
				}

				window.JetEngineFormCaptcha( <?php echo $form_id; ?> );

				jQuery( window ).on( 'jet-popup/show-event/after-show', function() {

					window.JetEngineFormCaptcha( <?php echo $form_id; ?> );

				});
			</script>
			<?php

		}

	}

}