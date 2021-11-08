<?php


namespace Jet_Form_Builder\Form_Actions;

use Jet_Form_Builder\Classes\Get_Template_Trait;

abstract class Base_Form_Action {

	use Get_Template_Trait;

	public function __construct() {
		add_action( 'admin_action_' . $this->action_id(), array( $this, 'do_admin_action' ) );
	}

	abstract public function get_id();

	abstract public function get_title();

	abstract public function do_admin_action();

	public function action_id() {
		return $this->get_id();
	}

	public function display_action_link() {
		return true;
	}

	public function action_url( $post = null ) {
		$admin_url = esc_url_raw( admin_url( 'admin.php' ) );

		$args = array(
			'action' => $this->action_id(),
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
		$res = true;

		if ( ! current_user_can( 'edit_posts' ) ) {
			$res = false;
		}

		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			$res = false;
		}

		return $res;
	}


}
