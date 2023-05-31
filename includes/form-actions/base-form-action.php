<?php


namespace Jet_Form_Builder\Form_Actions;

use Jet_Form_Builder\Classes\Get_Template_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Form_Action {

	use Get_Template_Trait;

	const NONCE_ACTION = 'jfb_admin_inline';

	public function __construct() {
		add_action( 'admin_action_' . $this->action_id(), array( $this, 'do_action' ) );
	}

	abstract public function get_id();

	abstract public function get_title();

	abstract public function do_admin_action();

	public function do_action() {
		if ( ! wp_verify_nonce( sanitize_key( $_REQUEST['_wpnonce'] ?? '' ), $this->get_id() ) ) {
			wp_die( 'Your link is expired, please return to the previous page and try again', 'Error' );
		}

		$this->do_admin_action();
	}

	public function action_id() {
		return $this->get_id();
	}

	public function display_action_link() {
		return true;
	}

	public function action_url( $post = null ) {
		$admin_url = esc_url_raw( admin_url( 'admin.php' ) );

		$args = array(
			'action'   => $this->action_id(),
			'_wpnonce' => wp_create_nonce( $this->get_id() ),
		);

		if ( $post instanceof \WP_Post ) {
			$args['post'] = $post->ID;
		}

		return add_query_arg( $args, $admin_url );
	}

	public function action_template() {
		return '<a href="%1$s" title="%3$s" rel="permalink">%2$s</a>';
	}

	public function hover_title() {
		return $this->get_title();
	}

	public function post_type() {
		return jet_form_builder()->post_type->slug();
	}

	final public function register_action( $actions, $post ) {
		if ( $this->post_type() !== $post->post_type ) {
			return $actions;
		}

		if ( ! $this->check_user_access( $post->ID ) ) {
			return $actions;
		}

		$actions[ $this->get_id() ] = sprintf(
			$this->action_template(),
			$this->action_url( $post ),
			$this->get_title(),
			$this->hover_title()
		);

		return $actions;
	}

	protected function check_user_access( $post_id = null ) {
		return (
			current_user_can( 'edit_posts' ) && current_user_can( 'edit_post', $post_id )
		);
	}


}
