<?php


namespace Jet_Form_Builder\Classes\Resources;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Uploaded_File_Path {

	public function get_attachment_file(): string;

}
