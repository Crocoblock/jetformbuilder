<?php
namespace Jet_Engine\Gateways;

class PayPal {

	private $client_id;
	private $secret;

	public $data     = false;
	public $message  = false;
	public $redirect = false;

	public function __construct() {
		add_action( 'jet-engine/forms/gateways/fields', array( $this, 'editor_fields' ) );
		add_action( 'jet-engine/forms/handler/before-send', array( $this, 'prevent_notifications' ) );
		add_action( 'jet-engine/forms/handler/after-send', array( $this, 'process_payment' ), 10, 2 );
		add_action( 'jet-engine/forms/gateways/success/paypal', array( $this, 'process_payment_result' ) );

	}

	/**
	 * Store payment status into order and show success/failed message
	 * @return [type] [description]
	 */
	public function process_payment_result() {

		$token     = $_GET['token'];
		$data      = $this->get_form_by_payment( $token );
		$gateways  = Manager::instance()->get_form_gateways( $data['form_id'] );
		$client_id = ! empty( $gateways['paypal_client_id'] ) ? esc_attr( $gateways['paypal_client_id'] ) : false;
		$secret    = ! empty( $gateways['paypal_secret'] ) ? esc_attr( $gateways['paypal_secret'] ) : false;

		if ( ! $client_id || ! $secret ) {
			return;
		}

		$this->client_id = $client_id;
		$this->secret    = $secret;

		$token = $this->get_token( $this->client_id, $this->secret );

		$payment = $this->request(
			'v2/checkout/orders/' . $data['payment_id'] . '/capture',
			array(),
			null,
			$token
		);

		if ( ! $payment ) {
			return;
		}

		$payment = json_decode( $payment, true );

		if ( empty( $payment['status'] ) ) {
			return;
		}

		$data['status'] = $payment['status'];

		if ( ! empty( $payment['payer'] ) ) {
			$data['payer'] = array(
				'first_name' => $payment['payer']['name']['given_name'],
				'last_name'  => $payment['payer']['name']['surname'],
				'email'      => $payment['payer']['email_address'],
			);
		}

		$data['date'] = date_i18n( 'F j, Y, H:i' );

		if ( ! empty( $payment['purchase_units'][0]['payments']['captures'] ) ) {
			$payment_unit   = $payment['purchase_units'][0]['payments']['captures'][0];
			$data['amount'] = $payment_unit['amount'];
		}

		$data['gateway'] = $this->get_name();

		update_post_meta( $data['order_id'], '_jet_gateway_data', $data );

		$failed_statuses = array( 'VOIDED' );

		Manager::instance()->add_data( $data );

		if ( in_array( $data['status'], $failed_statuses )  ) {
			$this->process_status( 'failed', $data['form_id'], $gateways, $data['form_data'] );
		} else {
			$this->process_status( 'success', $data['form_id'], $gateways, $data['form_data'] );
		}

	}

	/**
	 * Process status notification and enqueue message
	 *
	 * @param  string $type     [description]
	 * @param  [type] $form_id  [description]
	 * @param  array  $settings [description]
	 * @return [type]           [description]
	 */
	public function process_status( $type = 'success', $form_id, $settings = array(), $form_data ) {

		$message = ! empty( $settings[ $type . '_message' ] ) ? wp_kses_post( $settings[ $type . '_message' ] ) : null;
		$notifications = isset( $settings[ 'notifications_' . $type ] ) ? $settings[ 'notifications_' . $type ] : array();

		if ( $message ) {
			Manager::instance()->add_message( $message );
		}

		do_action( 'jet-engine/forms/gateways/on-payment-' . $type, $form_id, $settings, $form_data );

		if ( ! empty( $notifications ) ) {

			if ( ! class_exists( '\Jet_Engine_Booking_Forms_Notifications' ) ) {
				require_once jet_engine()->modules->modules_path( 'forms/notifications.php' );
			}

			$notifcations = new \Jet_Engine_Booking_Forms_Notifications(
				$form_id,
				$form_data,
				jet_engine()->forms,
				jet_engine()->forms->handler
			);

			$notifcations->unregister_notification_type( 'redirect' );

			$all        = $notifcations->get_all();
			$keep_these = isset( $settings[ 'notifications_' . $type ] ) ? $settings[ 'notifications_' . $type ] : array();

			if ( empty( $all ) ) {
				return;
			}

			foreach ( $all as $index => $notification ) {

				if ( ! in_array( $index, $keep_these ) ) {
					$notifcations->unregister_notification( $index );
				}

			}

			$notifcations->send();

		}

	}

	/**
	 * Returns form data by payment ID
	 *
	 * @param  [type] $payment [description]
	 * @return [type]          [description]
	 */
	public function get_form_by_payment( $payment = null ) {

		if ( ! $payment ) {
			return;
		}

		global $wpdb;
		$row = $wpdb->get_row( "SELECT * FROM $wpdb->postmeta WHERE meta_key = '_jet_gateway_data' AND meta_value LIKE '%$payment%'", ARRAY_A );

		if ( empty( $row ) ) {
			return;
		}

		$data = $row['meta_value'];

		return maybe_unserialize( $data );

	}

	/**
	 * Gateway-specific editor fields
	 *
	 * @return [type] [description]
	 */
	public function editor_fields() {
		?>
		<div class="jet-engine-gateways-section" v-if="'paypal' === gateways.gateway">
			<div class="jet-engine-gateways-section__title"><?php
				_e( 'PayPal settings:', 'jet-engine' );
			?></div>
			<div class="jet-engine-gateways-row">
				<label for="gateways_paypal_client_id" class="jet-engine-gateways-row__label"><?php
					_e( 'Client ID', 'jet-engine' );
				?></label>
				<input type="text" v-model="gateways.paypal_client_id" id="gateways_paypal_client_id" name="_gateways[paypal_client_id]" placeholder="<?php _e( 'Client ID', 'jet-engine' ); ?>">
			</div>
			<div class="jet-engine-gateways-row">
				<label for="gateways_paypal_secret" class="jet-engine-gateways-row__label"><?php
					_e( 'Secret Key', 'jet-engine' );
				?></label>
				<input type="text" id="gateways_paypal_secret" v-model="gateways.paypal_secret" name="_gateways[paypal_secret]" placeholder="<?php _e( 'Secret', 'jet-engine' ); ?>">
			</div>
			<div class="jet-engine-gateways-row">
				<label for="gateways_paypal_currency" class="jet-engine-gateways-row__label"><?php
					_e( 'Currency Code', 'jet-engine' );
				?></label>
				<input type="text" v-model="gateways.paypal_currency" id="gateways_paypal_currency" name="_gateways[paypal_currency]" placeholder="<?php _e( 'Currency code', 'jet-engine' ); ?>">
			</div>
		</div>
		<?php
	}

	/**
	 * Returns current gateway ID
	 *
	 * @return [type] [description]
	 */
	public function get_id() {
		return 'paypal';
	}

	/**
	 * Returns current gateway name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return __( 'PayPal Checkout', 'jet-engine' );
	}

	/**
	 * Prevent unnecessary notifications processings before form is send.
	 *
	 * @param  [type] $handler [description]
	 * @return [type]          [description]
	 */
	public function prevent_notifications( $handler ) {

		$gateways = Manager::instance()->get_form_gateways( $handler->form );

		if ( empty( $gateways ) || empty( $gateways['gateway'] ) ) {
			return;
		}

		$handler->notifcations->unregister_notification_type( 'redirect' );

		$keep_these = ! empty( $gateways['notifications_before'] ) ? $gateways['notifications_before'] : array();
		$all        = $handler->notifcations->get_all();
		$keep_these = apply_filters( 'jet-engine/forms/gateways/notifications-before', $keep_these, $all );

		if ( empty( $all ) ) {
			return;
		}

		foreach ( $all as $index => $notification ) {

			if ( 'insert_post' === $notification['type'] ) {
				continue;
			}

			if ( 'redirect' === $notification['type'] ) {
				$this->redirect = $notification;
			}

			if ( ! in_array( $index, $keep_these ) ) {
				$handler->notifcations->unregister_notification( $index );
			}

		}

	}

	/**
	 * Process gateway payment
	 *
	 * @return [type] [description]
	 */
	public function process_payment( $handler, $success ) {

		if ( ! $success ) {
			return;
		}

		$gateways = Manager::instance()->get_form_gateways( $handler->form );

		if ( empty( $gateways ) || empty( $gateways['gateway'] ) ) {
			return;
		}

		$price_field = ! empty( $gateways['price_field'] ) ? esc_attr( $gateways['price_field'] ) : false;
		$price_field = apply_filters( 'jet-engine/forms/gateways/price-field', $price_field, $handler );

		if ( ! $price_field ) {
			return;
		}

		if ( empty( $handler->form_data['inserted_post_id'] ) ) {
			return;
		}

		$order_id = $handler->form_data['inserted_post_id'];
		$price    = ! empty( $handler->form_data[ $price_field ] ) ? $handler->form_data[ $price_field ] : false;

		if ( ! $order_id || ! $price ) {
			return;
		}

		if ( $this->get_id() !== $gateways['gateway'] ) {
			return;
		}

		$client_id = ! empty( $gateways['paypal_client_id'] ) ? esc_attr( $gateways['paypal_client_id'] ) : false;
		$secret    = ! empty( $gateways['paypal_secret'] ) ? esc_attr( $gateways['paypal_secret'] ) : false;
		$currency  = ! empty( $gateways['paypal_currency'] ) ? esc_attr( $gateways['paypal_currency'] ) : false;

		if ( ! $currency || ! $client_id || ! $secret ) {
			return;
		}

		$this->client_id = $client_id;
		$this->secret    = $secret;

		$token = $this->get_token( $client_id, $secret );

		if ( ! $token ) {
			return;
		}

		$remove_refer_args = array(
			'jet_gateway',
			'payment',
			'token',
			'PayerID',
		);

		$success_refer    = $handler->refer;
		$cancel_refer     = $handler->refer;
		$success_redirect = ! empty( $gateways['use_success_redirect'] ) ? $gateways['use_success_redirect'] : false;
		$success_redirect = filter_var( $success_redirect, FILTER_VALIDATE_BOOLEAN );

		if ( $success_redirect && $this->redirect ) {
			$type = ! empty( $this->redirect['redirect_type'] ) ? $this->redirect['redirect_type'] : 'static_page';

			if ( 'static_page' === $type ) {
				$to_page = ! empty( $this->redirect['redirect_page'] ) ? $this->redirect['redirect_page'] : false;
				$success_refer = ! empty( $to_page ) ? get_permalink( $to_page ) : false;
			} else {
				$success_refer = ! empty( $this->redirect['redirect_url'] ) ? $this->redirect['redirect_url'] : false;
			}
		}

		$order = $this->request(
			'v2/checkout/orders',
			array(),
			array(
				'intent' => 'CAPTURE',
				'application_context' => array(
					'landing_page' => 'BILLING',
					'user_action'  => 'PAY_NOW',
					'brand_name'   => get_option( 'blogname' ),
					'return_url'   => add_query_arg(
						array( 'jet_gateway' => $this->get_id(), 'payment' => 'success' ),
						trailingslashit( remove_query_arg( $remove_refer_args, $success_refer ) )
					),
					'cancel_url'   => add_query_arg(
						array( 'jet_gateway' => $this->get_id(), 'payment' => 'canceled' ),
						trailingslashit( remove_query_arg( $remove_refer_args, $cancel_refer ) )
					),
				),
				'purchase_units' => array(
					array(
						'custom_id' => $handler->form . '-' . $order_id,
						'amount' => array(
							'currency_code' => $currency,
							'value'         => $price,
						),
					),
				),
			)
		);

		if ( empty( $order ) || is_wp_error( $order ) ) {
			return;
		}

		$order = json_decode( $order, true );

		if ( ! $order ) {
			return;
		}

		$pp_order_id = ! empty( $order['id'] ) ? $order['id'] : false;

		if ( ! $pp_order_id ) {
			return;
		}

		update_post_meta(
			$order_id,
			'_jet_gateway_data',
			array(
				'payment_id' => $pp_order_id,
				'order_id'   => $order_id,
				'form_id'    => $handler->form,
				'form_data'  => $handler->form_data,
			)
		);

		foreach ( $order['links'] as $link ) {
			if ( ! empty( $link['rel'] ) && 'approve' === $link['rel'] ) {
				wp_redirect( $link['href'] );
				die();
			}
		}

		return;

	}

	/**
	 * Return API url
	 *
	 * @return string
	 */
	public function api_url( $endpoint ) {

		$sandbox = apply_filters( 'jet-engine/forms/gateways/paypal/sandbox-mode', false );

		if ( $sandbox ) {
			$url = 'https://api.sandbox.paypal.com/';
		} else {
			$url = 'https://api.paypal.com/';
		}

		return esc_url( $url . $endpoint );
	}

	/**
	 * Returns auth token for current client_id and secret combination
	 *
	 * @param  [type] $client_id [description]
	 * @param  [type] $secret    [description]
	 * @return [type]            [description]
	 */
	public function get_token( $client_id = false, $secret = false ) {

		$hash  = md5( $client_id . $secret );
		$token = get_transient( $hash );

		if ( ! $client_id ) {
			$client_id = $this->client_id;
		}

		if ( ! $secret ) {
			$secret = $this->secret;
		}

		if ( ! $client_id || ! $secret ) {
			return;
		}

		if ( $token ) {
			return $token;
		}

		$key = base64_encode( $client_id . ':' . $secret );

		$response = $this->request(
			'v1/oauth2/token',
			array(
				'Accept'          => 'application/json',
				'Accept-Language' => get_locale(),
				'Authorization'   => 'Basic ' . $key,
			),
			'grant_type=client_credentials'
		);

		if ( ! $response ) {
			return false;
		}

		$response = json_decode( $response, true );

		if ( ! $response || empty( $response['access_token'] ) ) {
			return false;
		}

		$token = $response['access_token'];

		set_transient( $hash, $token, 3 * HOUR_IN_SECONDS );

		return $token;

	}

	/**
	 * Make a request
	 *
	 * @param  [type] $endpoint [description]
	 * @param  array  $headers  [description]
	 * @param  array  $body     [description]
	 * @return [type]           [description]
	 */
	public function request( $endpoint = null, $headers = array(), $body = array(), $token = false, $method = 'post' ) {

		$url = $this->api_url( $endpoint );

		if ( empty( $headers ) ) {

			if ( ! $token ) {
				$token = $this->get_token();
			}

			$headers = array(
				'Content-Type'    => 'application/json',
				'Accept-Language' => get_locale(),
				'Authorization'   => 'Bearer ' . $token,
			);
		}

		if ( is_array( $body ) ) {
			$body = json_encode( $body );
		}

		$args = array(
			'timeout' => 45,
			'headers' => $headers,
		);

		if ( 'post' === $method ) {
			$args['method'] = 'POST';
			$args['body']   = $body;
			$response       = wp_remote_post( $url, $args );
		} else {
			$response = wp_remote_get( $url, $args );
		}

		return wp_remote_retrieve_body( $response );
	}

}
