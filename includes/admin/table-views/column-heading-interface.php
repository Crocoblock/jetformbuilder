<?php


namespace Jet_Form_Builder\Admin\Table_Views;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Column_Heading_Interface {

	public function get_label(): string;

	public function get_heading(): array;

}