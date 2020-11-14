<?php
namespace Jet_Form_Builder\Blocks\Render;

use Jet_Form_Builder\File_Upload;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define text field renderer class
 */
class Media_Field_Render extends Base {

    public function get_name() {
		return 'media-field';
	}

}
