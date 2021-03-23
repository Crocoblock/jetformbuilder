<?php


namespace Jet_Form_Builder\Form_Actions\Types;


abstract class Base_Form_Action {

	public function __construct() {
		add_filter( 'post_row_actions', array( $this, 'base_add_action_links' ), 10, 2 );
	}

	abstract public function get_id();

	abstract public function get_title();

	public function action_id() {
		return $this->get_id();
	}

	public function post_type() {
		return jet_form_builder()->post_type->slug();
	}

	final public function base_add_action_links( $actions, $post ) {
		if ( $this->post_type() !== $post->post_type ) {
			return $actions;
		}

		if ( ! $this->check_user_access( $post->ID ) ) {
			return $actions;
		}
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