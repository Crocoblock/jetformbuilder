<?php


namespace Jet_Form_Builder\Classes\Arguments;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Default_Form_Arguments extends Form_Arguments {

	public function __construct( $form_id = 0 ) {
		parent::__construct( $form_id );

		$this->set_submit_type( 'reload' );
		$this->set_required_mark( '*' );
		$this->set_fields_layout( 'column' );
		$this->set_enable_progress( false );
		$this->set_fields_label_tag( 'div' );
		$this->set_load_nonce( 'render' );
	}

	public function to_array(): array {
		$args = parent::to_array();
		unset( $args['form_id'] );

		return $args;
	}

}