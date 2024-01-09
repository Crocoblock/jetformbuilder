<?php


namespace JFB_Modules\Switcher\Blocks\Switcher;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Blocks\Native_Block_Wrapper_Attributes;
use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Wysiwyg\Module;

class Block_Type extends Base implements Native_Block_Wrapper_Attributes {

	public function get_name() {
		return 'switcher';
	}

	public function get_block_renderer( $wp_block = null ) {
		return ( new Block_Render( $this ) )->render();
	}

	/**
	 * @return string
	 * @throws Repository_Exception
	 */
	public function get_path_metadata_block() {
		/** @var Module $module */
		$module = jet_form_builder()->module( 'switcher' );

		return $module->get_dir( 'blocks/switcher' );
	}

	public function get_field_template( $path ) {
		/** @var Module $module */
		$module = jet_form_builder()->module( 'switcher' );

		return $module->get_dir( 'blocks/switcher/block-template.php' );
	}
}
