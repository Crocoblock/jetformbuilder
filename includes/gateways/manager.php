<?php
namespace Jet_Engine\Gateways;

class Manager {

	/**
	 * A reference to an instance of this class.
	 *
	 * @since  1.0.0
	 * @access private
	 * @var    object
	 */
	private static $instance = null;

	private $_gateways = false;

	public $message = null;
	public $data    = null;

	/**
	 * Register gateways components
	 */
	public function __construct() {

		add_action( 'jet-engine/forms/editor/meta-boxes', array( $this, 'register_gateways_metabox' ) );
		add_action( 'jet-engine/forms/editor/assets', array( $this, 'register_gateways_assets' ) );
		add_action( 'jet-engine/forms/editor/save-meta', array( $this, 'save_gateways_meta' ) );

		$this->get_gateways();

		if ( isset( $_GET['jet_gateway'] ) ) {
			add_action( 'wp_loaded', array( $this, 'catch_payment_result' ) );
		}

		add_action( 'add_meta_boxes', array( $this, 'maybe_register_gateway_meta' ) );

		add_action( 'jet-engine/elementor-views/dynamic-tags/register', array( $this, 'register_elementor_tags' ) );
		add_filter( 'jet-engine/forms/handler/has-gateways', array( $this, 'check_form_gateways' ), 10, 2 );

	}

	/**
	 * Register new payment-related dynamic tags
	 *
	 * @param  [type] $dynamic_tags [description]
	 * @return [type]               [description]
	 */
	public function register_elementor_tags( $dynamic_tags ) {
		require_once jet_engine()->modules->modules_path( 'forms/gateways/elementor-tag.php' );
		$dynamic_tags->register_tag( '\Jet_Engine\Gateways\Message_Tag' );
	}

	/**
	 * Apply macros in string
	 *
	 * @return [type] [description]
	 */
	public function apply_macros( $string = null ) {

		return preg_replace_callback( '/%(.*?)%/', function( $matches ) {
			switch ( $matches[1] ) {
				case 'gateway_amount':
					$amount = ! empty( $this->data['amount'] ) ? $this->data['amount'] : false;
					return ! empty( $amount ) ? $amount['value'] . ' ' . $amount['currency_code'] : '';

				case 'gateway_status':
					return ! empty( $this->data['status'] ) ? $this->data['status'] : '';

				default:
					$form_data = ! empty( $this->data['form_data'] ) ? $this->data['form_data'] : array();
					return ! empty( $form_data[ $matches[1] ] ) ? $form_data[ $matches[1] ] : '';
			}

		}, $string );

	}

	/**
	 * Maybe register gateway meta box for order posts
	 *
	 * @return [type] [description]
	 */
	public function maybe_register_gateway_meta() {

		$post_id = get_the_ID();
		$data    = get_post_meta( $post_id, '_jet_gateway_data', true );

		if ( empty( $data ) ) {
			return;
		}

		add_meta_box(
			'jet-engine-payment',
			__( 'Payment settings', 'jet-engine' ),
			array( $this, 'render_meta_box' ),
			get_post_type(),
			'side',
			'default',
			$data
		);

	}

	public function add_data( $data ) {
		$this->data = $data;
	}

	public function add_message( $message ) {

		$this->message = $message;

		if ( ! $this->data || ! isset( $this->data['form_id'] ) ) {
			return;
		}

		$form_id = $this->data['form_id'];

		add_filter( 'jet-engine/forms/pre-render/' . $form_id, function( $res ) use ( $form_id ) {
			echo $this->apply_macros( $this->message, $form_id );
			return true;
		} );
	}

	/**
	 * Catch processed payment results
	 *
	 * @return [type] [description]
	 */
	public function catch_payment_result() {
		do_action( 'jet-engine/forms/gateways/success/' . $_GET['jet_gateway'] );
		$token = $_GET['token'];
	}

	/**
	 * Render payment metabox
	 *
	 * @param  [type] $post_id [description]
	 * @param  [type] $metabox [description]
	 * @return [type]          [description]
	 */
	public function render_meta_box( $post_id, $metabox ) {
		$data = $metabox['args'];
		echo '<table>';
		$this->iterate_data( $data );
		echo '</table>';
	}

	/**
	 * Iterate array data to show in meta box
	 *
	 * @param  [type] $data [description]
	 * @param  string $tag  [description]
	 * @return [type]       [description]
	 */
	public function iterate_data( $data, $tag = 'tr' ) {

		$row   = ( 'tr' === $tag ) ? 'tr' : 'div';
		$title = ( 'tr' === $tag ) ? 'td' : 'b';
		$val   = ( 'tr' === $tag ) ? 'td' : 'span';
		$sep   = ( 'tr' === $tag ) ? '' : ': ';

		foreach ( $data as $key => $value ) {

			if ( 'form_id' === $key ) {
				$key   = 'form';
				$url   = get_edit_post_link( $value );
				$value = sprintf(
					'<a href="%1$s" target="_blank">%2$s</a>',
					$url,
					get_the_title( $value )
				);
			}

			echo '<' . $row . '>';
			echo '<' . $title . ' valign="top">';
			echo $key . $sep;
			echo '</' . $title . '>';
			echo '<' . $val . '>';
			if ( ! is_array( $value ) ) {
				if ( 'form_id' )
				echo $value;
			} else {
				$this->iterate_data( $value, 'div' );
			}
			echo '</' . $val . '>';
			echo '<' . $row . '>';

		}
	}

	/**
	 * Save gateways related meta
	 *
	 * @return [type] [description]
	 */
	public function save_gateways_meta( $post_id ) {
		$data = isset( $_POST['_gateways'] ) ? $_POST['_gateways'] : json_encode( array() );
		update_post_meta( $post_id, '_gateways', wp_slash( $data ) );
	}

	/**
	 * Returns all registered gateways
	 *
	 * @return [type] [description]
	 */
	public function get_gateways() {

		if ( false === $this->_gateways ) {

			require_once jet_engine()->modules->modules_path( 'forms/gateways/paypal.php' );

			$paypal = new PayPal();

			$this->_gateways = array(
				$paypal->get_id = $paypal,
			);

		}

		return $this->_gateways;

	}

	/**
	 * Register gateways metabox
	 *
	 * @return [type] [description]
	 */
	public function register_gateways_metabox( $editor ) {

		$gateways = $this->get_gateways();

		ob_start();
		include jet_engine()->get_template( 'forms/admin/gateways.php' );
		$content = ob_get_clean();

		$gateways_settings = apply_filters( 'jet-engine/forms/booking/messages-settings', array(
			'_gateways' => array(
				'type'  => 'html',
				'html'  => $content,
			)
		) );

		new \Cherry_X_Post_Meta( array(
			'id'            => 'gatewys-settings',
			'title'         => __( 'Gateways Settings', 'jet-engine' ),
			'page'          => array( $editor->manager->slug() ),
			'context'       => 'normal',
			'priority'      => 'high',
			'callback_args' => false,
			'builder_cb'    => array( $editor, 'get_builder' ),
			'fields'        => $gateways_settings,
		) );

	}

	public function register_gateways_assets( $editor ) {

		wp_enqueue_script(
			'jet-engine-forms-gateways',
			jet_engine()->plugin_url( 'assets/js/admin/forms-gateways.js' ),
			array( 'jquery' ),
			jet_engine()->get_version(),
			true
		);

		wp_localize_script( 'jet-engine-forms-gateways', 'JetEngineGatewaysSettings', array(
			'gateways' => $this->get_form_gateways(),
		) );

	}

	/**
	 * Returns gatewyas config for current form
	 *
	 * @param  [type] $post_id [description]
	 * @return [type]          [description]
	 */
	public function get_form_gateways( $post_id = null ) {

		if ( ! $post_id ) {
			$post_id = get_the_ID();
		}

		$default = array(
			'gateway'   => 'none',
			'post_type' => '',
		);

		$meta = get_post_meta( $post_id, '_gateways', true );

		if ( ! $meta || ! is_array( $meta ) ) {
			return $default;
		} else {
			return array_merge( $default, $meta );
		}

	}

	/**
	 * Check form gateways
	 *
	 * @return [type] [description]
	 */
	public function check_form_gateways( $res, $form_id ) {

		$gateways = $this->get_form_gateways( $form_id );

		if ( ! empty( $gateways ) && 'none' !== $gateways['gateway'] ) {
			return true;
		} else {
			return false;
		}

	}

	/**
	 * Returns the instance.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return object
	 */
	public static function instance() {
		// If the single instance hasn't been set, set it now.
		if ( null == self::$instance ) {
			self::$instance = new self;
		}
		return self::$instance;
	}

}
