<?php


namespace Jet_Form_Builder\Classes\Resources;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Media_Block_Value {

	public function get_attachment_id(): string;

	public function get_attachment_url(): string;

	public function get_attachment_both(): array;

}