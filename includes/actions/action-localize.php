<?php


namespace Jet_Form_Builder\Actions;

trait Action_Localize {

	abstract public function get_id();

	abstract public function get_name();

	public function visible_attributes_for_gateway_editor() {
		return array();
	}

	public function self_script_name() {
		$id = str_replace( '-', '_', $this->get_id() );

		return "JetFormAction_{$id}";
	}

	public function editor_labels() {
		return array();
	}

	public function editor_labels_help() {
		return array();
	}

	/**
	 * Register custom action data
	 *
	 * @return array [description]
	 */
	public function action_data() {
		return array();
	}

}
