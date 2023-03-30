<?php


namespace Jet_Form_Builder\Admin\Table_Views;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Column_Heading_Trait {

	public function get_heading(): array {
		return array(
			'label' => $this->get_label(),
		);
	}

}
