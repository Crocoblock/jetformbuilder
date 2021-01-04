<?php

namespace Jet_Form_Builder\Transformers;

abstract class Base_Transformer {

	protected $form_id;
	protected $form_data;

	protected $fields = array();
	protected $settings = array();
	protected $transformed_fields = array();
	protected $transformed_settings = array();

	public function __construct( $form_id ) {
		$this->form_id = $form_id;
	}

	public function _set_form_data() {
		$this->form_data = $this->source_form_data();
	}

	public function _set_source_fields() {
		$this->fields = $this->source_fields();
	}

	public function _set_source_settings() {
		$this->settings = $this->source_settings();
	}

	abstract public function source_form_data();

	abstract public function source_fields();

	abstract public function source_settings();

	abstract public function transform_fields();

	abstract public function transform_settings();

	abstract public function save_transformer();
}