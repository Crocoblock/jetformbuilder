<?php


namespace Jet_Form_Builder\Actions;


class Action_Compatibility {
	public $actions = [];
	public $valid_actions = [];

	const NAMESPACE_ACTIONS = 'Jet_Form_Builder\\Actions\\Types\\';

	public function __construct( ...$actions ) {
		$this->actions = $actions;
		$this->dependencies_check();
	}

	public function dependencies_check() {

		foreach ( $this->actions as $action_name ) {
			$this->dependency_check( $action_name );
		}
	}

	public function dependency_check( $action_name ) {
		if ( ! is_string( $action_name ) ) {
			return;
		}
		$action_class = self::NAMESPACE_ACTIONS . $action_name;

		if ( ! class_exists( $action_class ) ) {
			return;
		}

		if ( $action_class::can_run() ) {
			$this->valid_actions[] = new $action_class();
		}

	}

	public function get_actions() {
		return $this->valid_actions;
	}

}