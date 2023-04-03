<?php


namespace Jet_Form_Builder\Form_Messages;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Msg_Router {

	/** @var Builder */
	private $builder;

	/** @var Manager */
	private $manager;

	private $form_id;
	private $actions;


	public function __construct() {
		$this->builder = new Builder();
		$this->manager = new Manager();
	}

	public function get_form_id() {
		return (int) $this->form_id;
	}

	public function set_form_id( $form_id ) {
		if ( ! $form_id || $form_id === $this->get_form_id() ) {
			return false;
		}
		$this->form_id = (int) $form_id;

		return true;
	}

	public function set_actions( $actions ) {
		if ( ! $actions || ! is_array( $actions ) ) {
			return false;
		}
		$this->actions = $actions;

		return true;
	}

	public function get_actions() {
		return (array) $this->actions;
	}


	public function set_up( $data = false ) {
		$this->maybe_set_form_id_from_handler( $data['form_id'] ?? false );
		$this->maybe_set_actions_from_handler( $data['actions'] ?? false );

		return $this;
	}

	public function maybe_set_form_id_from_handler( $form_id ) {
		if ( $this->set_form_id( $form_id ) ) {
			return true;
		}

		// phpcs:ignore Universal.Operators.DisallowShortTernary.Found
		return $this->set_form_id( jet_form_builder()->form_handler->form_id ?: false );
	}

	public function maybe_set_actions_from_handler( $actions ) {
		if ( $this->set_actions( $actions ) ) {
			return true;
		}

		return $this->query_actions_if_empty();
	}

	public function query_actions() {
		if ( ! $this->form_id ) {
			return false;
		}

		$this->set_actions(
			jet_fb_action_handler()
				->set_form_id( $this->form_id )
				->get_all()
		);

		return true;
	}

	public function query_actions_if_empty() {
		if ( $this->actions && is_array( $this->actions ) ) {
			return true;
		}

		return $this->query_actions();
	}

	/**
	 * @param $data
	 *
	 * @return Builder
	 */
	public function get_builder( $data = array() ) {
		$this->set_up( $data );

		return $this->builder;
	}

	public function get_manager( $data = array() ) {
		$this->set_up( $data );

		return $this->manager->set_up();
	}

}
