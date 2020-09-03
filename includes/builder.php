<?php
/**
 * Form builder class
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Jet_Engine_Booking_Forms_Builder class
 */
class Form_Builder {

	public $form_id = null;
	public $post    = null;

	/**
	 * Constructor for the class
	 */
	function __construct( $form_id = null, $post = false, $args = array() ) {

		if ( ! $form_id ) {
			return;
		}

		$this->form_id = $form_id;

		$this->args = wp_parse_args( $args, array(
			'fields_layout' => 'column',
			'rows_divider'  => false,
			'required_mark' => '*',
			'submit_type'   => 'reload',
		) );

		if ( empty( $post ) ) {
			global $post;
		}

		$this->post = $post;

		//$this->captcha = $captcha;
		//$this->preset  = new Jet_Engine_Booking_Forms_Preset( $this->form_id );

	}

	/**
	 * Returns form action url
	 *
	 * @return [type] [description]
	 */
	public function get_form_action_url() {

		$action = add_query_arg(
			array(
				'jet_form_action' => 'submit',
			),
			home_url( '/' )
		);

		return apply_filters( 'jet-form-builder/form-action-url', $action, $this );

	}

	/**
	 * Returns form refer url
	 *
	 * @return [type] [description]
	 */
	public function get_form_refer_url() {

		global $wp;

		$refer = home_url( $wp->request );

		if ( ! empty( $_SERVER['QUERY_STRING'] ) ) {
			$refer = trailingslashit( $refer ) . '?' . $_SERVER['QUERY_STRING'];
		}

		return apply_filters( 'jet-engine/forms/booking/form-refer-url', $refer, $this );

	}

	/**
	 * Render from HTML
	 * @return [type] [description]
	 */
	public function render_form( $echo = true ) {

		ob_start();

		$this->render_field( array(
			'type'    => 'hidden',
			'default' => $this->form_id,
			'name'    => '_jet_engine_booking_form_id',
		) );

		$this->render_field( array(
			'type'    => 'hidden',
			'default' => $this->get_form_refer_url(),
			'name'    => '_jet_engine_refer',
		) );

		$form = ob_get_clean();

		if ( $echo ) {
			echo $form;
		} else {
			return $form;
		}

	}

}
