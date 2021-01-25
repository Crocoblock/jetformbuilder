<?php

namespace Jet_Form_Builder\Migrations;

use Jet_Form_Builder\Plugin;

abstract class Base_Migrant {

	protected $form_id;
	protected $form_data;
	protected $form_meta_data;

	protected $fields = array();
	protected $settings = array();
	protected $transformed_fields = array();
	protected $transformed_settings = array();

	public function __construct( $form_id ) {
		$this->form_id = $form_id;
		$this->_set_form_data();
		$this->_set_source_fields();
		$this->_set_source_settings();
	}

	public function _set_form_data() {
		$this->form_data      = $this->source_form_data();
		$this->form_meta_data = $this->source_form_meta_data();
	}

	public function _set_source_fields() {
		$this->fields = $this->source_fields();
	}


	public function _set_source_settings() {
		$this->settings = $this->source_settings();
	}

	public function source_form_data() {
		return get_post( $this->form_id );
	}

	public function source_form_meta_data() {
		return get_post_meta( $this->form_id );
	}

	abstract public function source_fields();

	abstract public function source_settings();

	abstract public function migrate_form();
}