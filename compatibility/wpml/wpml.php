<?php


namespace JFB_Compatibility\Wpml;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

use JFB_Modules\Option_Field\Interfaces\Support_Option_Query_It;
use Jet_Form_Builder\Blocks\Types\Base;
use JFB_Components\Module\Base_Module_It;

class Wpml implements Base_Module_It {

	public function rep_item_id() {
		return 'wpml';
	}

	public function condition(): bool {
		return defined( 'ICL_SITEPRESS_VERSION' );
	}

	public function init_hooks() {
		if ( ! jet_form_builder()->has_module( 'option-query' ) ) {
			add_filter(
				'jet-form-builder/render-choice/query-options/posts',
				array( $this, 'remove_suppress_filters' )
			);

			return;
		}

		add_action(
			'jet-form-builder/option-query/set-in-block',
			array( $this, 'on_set_in_block' )
		);
	}

	public function remove_hooks() {
		if ( ! jet_form_builder()->has_module( 'option-query' ) ) {
			remove_filter(
				'jet-form-builder/render-choice/query-options/posts',
				array( $this, 'remove_suppress_filters' )
			);

			return;
		}

		remove_action(
			'jet-form-builder/option-query/set-in-block',
			array( $this, 'on_set_in_block' )
		);
	}

	public function remove_suppress_filters( array $args ): array {
		$args['suppress_filters'] = false;

		return $args;
	}

	/**
	 * @param Base|Support_Option_Query_It $block
	 */
	public function on_set_in_block( Base $block ) {
		switch ( $block->get_query()->rep_item_id() ) {
			case 'posts':
				$block->get_query()->set_query( 'suppress_filters', false );
				break;
		}
	}
}
