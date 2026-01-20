<?php

namespace JFB_Modules\Blocks_V2\Phone_Field;

use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Blocks_V2\Interfaces\Block_Type_With_Assets_Interface;
use JFB_Modules\Blocks_V2\Module;
use JFB_Modules\Blocks_V2\Traits\Block_Type_With_Assets_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Phone Field Block Type
 */
class Block_Type extends Base implements Block_Type_With_Assets_Interface {

	use Block_Type_With_Assets_Trait;

	/**
	 * Returns block name
	 *
	 * @return string
	 */
	public function get_name() {
		return 'phone-field';
	}

	/**
	 * Get CSS scheme for styling
	 *
	 * @return array
	 */
	public function get_css_scheme() {
		return array(
			'field'   => '__field-wrap input[type="tel"]',
			'wrapper' => '__field-wrap',
		);
	}

	/**
	 * Register block with assets
	 */
	protected function register_block() {
		$this->set_assets( new Block_Asset() );
		$this->get_assets()->init_hooks();

		parent::register_block();
	}

	/**
	 * Returns current block render instance
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Block_Render( $this ) )->render();
	}

	/**
	 * Get path to block template
	 *
	 * @param string $path
	 *
	 * @return string
	 * @throws Repository_Exception
	 */
	public function get_field_template( $path ) {
		/** @var Module $blocks_v2 */
		$blocks_v2 = jet_form_builder()->module( 'blocks-v2' );

		return $blocks_v2->get_dir( 'phone-field/block-template.php' );
	}

	/**
	 * Get path to block metadata
	 *
	 * @return string
	 * @throws Repository_Exception
	 */
	public function get_path_metadata_block() {
		/** @var Module $blocks_v2 */
		$blocks_v2 = jet_form_builder()->module( 'blocks-v2' );

		return $blocks_v2->get_dir( 'phone-field' );
	}
}
