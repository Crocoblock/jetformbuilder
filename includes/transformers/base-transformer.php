<?php

namespace Jet_Form_Builder\Transformers;

use Jet_Form_Builder\Plugin;

abstract class Base_Transformer {

	protected $form_id;
	protected $form_data;

	protected $fields = array();
	protected $settings = array();
	protected $actions = array();
	protected $transformed_fields = array();
	protected $transformed_settings = array();

	public function __construct( $form_id ) {
		$this->form_id = $form_id;
		$this->_set_form_data();
		$this->_set_source_fields();
		$this->_set_source_settings();
		$this->_set_source_actions();
	}

	public function _set_form_data() {
		$this->form_data = $this->source_form_data();
	}

	public function _set_source_fields() {
		$this->fields = $this->source_fields();
	}

	public function _set_source_actions() {
		$this->actions = $this->source_actions();
	}

	public function _set_source_settings() {
		$this->settings = $this->source_settings();
	}


	public function get_action_attributes( $type ) {
		$manager = Plugin::instance()->actions;

		return $manager->get_actions( $type )->action_attributes();

	}

	abstract public function source_form_data();

	abstract public function source_fields();

	abstract public function source_actions();

	abstract public function source_settings();

	abstract public function transform_fields();

	abstract public function transform_settings();

	abstract public function save_transformer();
}