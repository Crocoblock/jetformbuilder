<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Media_Field_Render;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\File_Upload;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Media_Field extends Base {


	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'media-field';
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		$scripts = File_Upload::instance()->ensure_media_js();

		return $scripts . ( new Media_Field_Render( $this ) )->render();
	}

	public function block_data( $editor, $handle ) {
		wp_localize_script( $handle, 'jetFormMediaFieldData', array(
			'mime_types' => Tools::get_allowed_mimes_list_for_js(),
		) );
	}


}
