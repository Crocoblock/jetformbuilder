<?php

namespace JFB_Compatibility\Jet_Engine\Compatibility\Bricks;

use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Compatibility\Jet_Engine\Jet_Engine;
use Bricks\Elements;

class Bricks {

	public function init_hooks() {
		add_action( 'init', array( $this, 'register_elements' ) );
		add_action(
			'jet-form-builder/before-start-form-row',
			array( $this, 'set_query_on_render_choice_listing' )
		);
		add_filter(
			'jet-form-builder/custom-template-content',
			array( $this, 'add_css_class_for_wrapper' ),
			10,
			3
		);
	}

	/**
	 * @throws Repository_Exception
	 */
	public function register_elements() {
		/** @var Jet_Engine $module */
		$module = jet_form_builder()->compat( 'jet-engine' );

		$file_path = $module->get_dir( 'compatibility/bricks/check-mark/element.php' );
		Elements::register_element(
			$file_path,
			'',
			Check_Mark\Element::class
		);
	}

	public function set_query_on_render_choice_listing( Base $block ) {
		if ( ! ( $block->block_attrs['custom_item_template'] ?? '' ) ||
			! ( $block->block_attrs['custom_item_template_id'] ?? '' )
		) {
			return;
		}

		jet_engine()->bricks_views->listing->render->set_bricks_query(
			$block->block_attrs['custom_item_template_id']
		);
	}

	public function add_css_class_for_wrapper( string $content, $object_id, $listing_id ): string {
		// quick check is this listing built with bricks
		if ( ! jet_engine()->bricks_views->listing->render->get_current_query( $listing_id ) ) {
			return $content;
		}

		$html = new \WP_HTML_Tag_Processor( $content );
		$html->next_tag();
		$html->add_class( 'jet-listing-base' );

		return $html->get_updated_html();
	}

}
