<?php


namespace Jet_Form_Builder\Classes\Arrayable;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Collection_Item_Interface {

	public function get_id(): string;

}