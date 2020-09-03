<?php
namespace Jet_Form_Builder;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Main file
 */
class Form_Factory {

	private $form_id = false;
	private $form    = false;

	/**
	 * Create form instance
	 *
	 * @param [type] $form_id [description]
	 */
	public function __construct( $form_id ) {
		$this->from_id = $form_id;
		$this->form    = get_post( $this->from_id );
	}

	/**
	 * Returns form content
	 *
	 * @return [type] [description]
	 */
	public function get_content() {

	}

	/**
	 * Returns form actions list
	 *
	 * @return [type] [description]
	 */
	public function get_actions() {

	}

	/**
	 * Returns from message
	 *
	 * @return [type] [description]
	 */
	public function get_messages() {

	}

	/**
	 * Returns from settings
	 *
	 * @return [type] [description]
	 */
	public function get_settings() {

	}

}
