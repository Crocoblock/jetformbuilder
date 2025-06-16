<?php
namespace JFB_Modules\Jet_Style;

use Jet_Form_Builder\Classes\Instance_Trait;


class Style_Manager {

	use Instance_Trait;

	protected $manager;

	public function __construct() {

		$framework = new Framework\Loader( array(
			JET_FORM_BUILDER_PATH . 'modules/jet-style/framework/blocks-style-manager/style-manager.php',
		) );

		$module_data = $framework->get_included_module_data( 'style-manager.php' );

		$this->manager = new \Crocoblock\Blocks_Style\Manager( array(
			'path' => $module_data['path'],
			'url'  => $module_data['url'],
		) );

		add_action( 'init', array( $this, 'register_blocks' ), 99 );
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
	public function register_blocks() {
		do_action( 'jet-form-builder/styles/register-block', $this );
	}
}