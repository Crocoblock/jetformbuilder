<?php
namespace JFB_Modules\Jet_Style;

use Jet_Form_Builder\Classes\Instance_Trait;


class Style_Manager {

	use Instance_Trait;

	protected $manager;

	public function __construct() {

		$framework   = jet_form_builder()->module( 'framework' );
		$loader      = $framework->get_loader();
		$module_data = $loader->get_included_module_data( 'style-manager.php' );

		if ( ! class_exists( '\Crocoblock\Blocks_Style\Manager' ) ) {
			return;
		}

		$this->manager = new \Crocoblock\Blocks_Style\Manager(
			array(
				'path' => $module_data['path'],
				'url'  => $module_data['url'],
			)
		);

		add_action( 'jet-form-builder/block-type/before-install', array( $this, 'register_block' ) );
	}

	/**
	 * Get style manager instance
	 *
	 * @return \Crocoblock\Blocks_Style\Manager
	 */
	public function get_manager() {
		return $this->manager;
	}

	/**
	 * Register support for the blocks
	 *
	 * @return void
	 */
	public function register_block( $block_type ) {
		$block_type->maybe_init_style_manager( $this->manager );
	}
}
