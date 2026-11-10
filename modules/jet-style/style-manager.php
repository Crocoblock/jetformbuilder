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

	/**
	 * Whether the loaded Style_Inserter supports style collections.
	 *
	 * Style_Inserter is shared between Crocoblock plugins and the first loaded
	 * copy wins, so older copies (e.g. in JFB addons) may not have collections.
	 *
	 * @return bool
	 */
	public static function supports_collections(): bool {
		$inserter = '\Crocoblock\Blocks_Style\Style_Inserter';

		return class_exists( $inserter, false )
			&& method_exists( $inserter, 'set_collection' )
			&& method_exists( $inserter, 'get_styles_collection' )
			&& property_exists( $inserter, 'current_collection' )
			&& property_exists( $inserter, 'collections' );
	}

	/**
	 * Run $render and collect block styles generated during it
	 * instead of inlining them into the rendered markup.
	 *
	 * If collections are unsupported or another collection is already active
	 * (e.g. nested repeater), styles are left to the default/outer handling
	 * and an empty styles string is returned.
	 *
	 * @param callable $render Callback returning rendered markup.
	 *
	 * @return array{0: string, 1: string} [ markup, styles wrapped in <style> ]
	 */
	public static function capture_styles( callable $render ): array {
		if ( ! self::supports_collections()
			|| ! empty( \Crocoblock\Blocks_Style\Style_Inserter::$current_collection )
		) {
			return array( (string) call_user_func( $render ), '' );
		}

		$collection = wp_unique_id( 'jfb-styles-' );

		\Crocoblock\Blocks_Style\Style_Inserter::set_collection( $collection );

		try {
			$content = (string) call_user_func( $render );
			$styles  = (string) \Crocoblock\Blocks_Style\Style_Inserter::get_styles_collection( $collection );
		} finally {
			\Crocoblock\Blocks_Style\Style_Inserter::set_collection( null );
			unset( \Crocoblock\Blocks_Style\Style_Inserter::$collections[ $collection ] );
		}

		return array( $content, $styles );
	}
}
