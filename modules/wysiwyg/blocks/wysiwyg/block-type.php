<?php

namespace JFB_Modules\Wysiwyg\Blocks\Wysiwyg;

use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Wysiwyg\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Block_Type extends Base {

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'wysiwyg-field';
	}

	public function general_style_unregister() {
		return array( 'input' );
	}

	/**
	 * @return string
	 * @throws Repository_Exception
	 */
	public function get_path_metadata_block() {
		/** @var Module $module */
		$module = jet_form_builder()->module( 'wysiwyg' );

		return $module->get_dir( 'blocks/wysiwyg' );
	}

	public function get_field_template( $path ) {
		/** @var Module $module */
		$module = jet_form_builder()->module( 'wysiwyg' );

		return $module->get_dir( 'blocks/wysiwyg/block-template.php' );
	}

	/**
	 * Returns current block render
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		wp_enqueue_editor();

		return ( new Block_Render( $this ) )->render();
	}


}
