<?php

namespace Jet_Form_Builder;

use Jet_Form_Builder\Blocks\Types\Base as Block_Type_Base;
use Jet_Form_Builder\Classes\Attributes_Trait;
use Jet_Form_Builder\Classes\Get_Template_Trait;
use Jet_Form_Builder\Classes\Instance_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


/**
 * @method static Live_Form instance()
 *
 * Class Live_Form
 * @package Jet_Form_Builder
 */
class Live_Form {

	use Attributes_Trait;
	use Get_Template_Trait;
	use Instance_Trait;

	public $form_id = false;
	private $form = false;


	private $field_name;
	private $current_field_data;
	private $start_new_page = true;
	public $pages = 0;
	public $rendered_rows = 0;

	public $is_hidden_row;
	public $is_submit_row;
	public $is_page_break_row;

	public $current_repeater;
	public $current_repeater_i;
	public $preset;
	public $spec_data;

	public $page = 0;
	public $has_prev = false;
	public $post;

	// for progress
	public $form_breaks;

	/**
	 * Create form instance
	 *
	 * @param [type] $form_id [description]
	 */
	private function __construct() {
		$this->post = get_post();
	}

	public function set_form_id( $form_id ) {
		$this->form_id = $form_id;

		return $this;
	}


	public function set_repeater( $item, $count = false ) {
		$this->current_repeater   = $item;
		$this->current_repeater_i = $count;

		return $this;
	}

	/**
	 * It turns out the inheritance of such an image
	 * Incoming Form Attributes (from block/widget/shortcode)
	 * (if not) -> Individual Form Arguments
	 * (if not) -> Default PHP Values
	 *
	 * @param array $incoming_attributes
	 *
	 * @return $this
	 */
	public function set_specific_data_for_render( $incoming_attributes = array() ) {
		$jf_default_args = Plugin::instance()->post_type->get_default_args();
		$jf_args         = Plugin::instance()->post_type->get_args( $this->form_id );

		$attributes_from_post_type = array_diff( $jf_args, $jf_default_args );
		$form_block_or_widget      = array_diff( $incoming_attributes, $jf_default_args );

		$render_attributes = array_merge( ...apply_filters(
			'jet-form-builder/form-render/attributes',
			array(
				Plugin::instance()->post_type->get_default_args_on_render(),
				$attributes_from_post_type,
				$form_block_or_widget
			)
		) );

		$this->spec_data = ( object ) $render_attributes;

		return $this;
	}

	public function is_not_field( $block ) {
		return Plugin::instance()->form->is_not_field( $block['blockName'] );
	}

	public function is_field( $block, $needle ) {
		return Plugin::instance()->form->is_field( $block['blockName'], $needle );
	}

	public function get_fields( $content ) {
		return Plugin::instance()->form->get_fields( $content );
	}

	/**
	 * Setup fields prop
	 *
	 * @param $content
	 */
	public function setup_fields( $content ) {
		$blocks             = parse_blocks( $content );
		$count_blocks       = count( $blocks );
		$break_after_submit = false;

		foreach ( $blocks as $index => $field ) {
			if ( $this->is_field( $field, 'form-break' ) ) {
				$form_break = Plugin::instance()->blocks->get_field_attrs( $field['blockName'], $field['attrs'] );

				if ( $index + 1 === $count_blocks ) {
					$break_after_submit = $form_break;
					unset( $blocks[ $index ] );
					continue;
				}

				$this->pages ++;
				$this->form_breaks[] = $form_break;
			}
		}
		if ( ! empty( $this->form_breaks ) ) {
			$this->form_breaks[] = $break_after_submit ? $break_after_submit : array( 'label' => __( 'Last Page' ) );
		}

		return $blocks;
	}

	public function maybe_progress_pages() {
		if ( ! $this->spec_data->enable_progress || 0 === $this->pages ) {
			return '';
		}

		ob_start();
		include $this->get_global_template( 'common/progress-pages.php' );

		return ob_get_clean();
	}

	public function get_progress_item_class( $index ) {
		$classes = array( 'jet-form-builder-progress-pages__item--wrapper' );

		if ( $index === $this->page ) {
			$classes[] = 'active-page';
		} elseif ( - 1 === $index ) {
			$classes[] = 'passed-page';
		}

		return implode( ' ', $classes );
	}


	public static function force_render_field( $name, $arguments = array() ) {
		if ( empty( $name ) ) {
			return '';
		}
		$field = jet_form_builder()->blocks->get_field_by_name( $name );

		if ( ! $field instanceof Block_Type_Base ) {
			return '';
		}

		$field->set_block_data( $arguments, null );

		return $field->get_block_renderer();
	}


	/**
	 * Maybe start new page
	 *
	 * @return false|string|void
	 */
	public function maybe_start_page() {

		if ( 0 >= $this->pages ) {
			return '';
		}

		if ( false === $this->start_new_page ) {
			return '';
		}

		$this->start_new_page = false;
		$this->page ++;

		ob_start();
		do_action( 'jet-form-builder/before-page-start', $this );

		$hidden_class = '';

		if ( 1 < $this->page ) {
			$hidden_class = 'jet-form-builder-page--hidden';
		}

		include $this->get_global_template( 'common/start-page.php' );

		do_action( 'jet-form-builder/after-page-start', $this );

		return ob_get_clean();
	}

	/**
	 * Maybe start new page
	 *
	 * @param $is_last
	 * @param $field
	 *
	 * @return false|string|void [type] [description]
	 */
	public function maybe_end_page( $is_last = false, $field = false ) {

		if ( 0 >= $this->pages ) {
			return;
		}

		if ( ! $is_last && ! $this->is_field( $field, 'form-break' ) ) {
			return;
		}

		$this->start_new_page = true;
		$this->has_prev       = true;

		ob_start();
		do_action( 'jet-form-builder/before-page-end', $this );

		include $this->get_global_template( 'common/end-page.php' );

		do_action( 'jet-form-builder/after-page-end', $this );

		return ob_get_clean();
	}

	/**
	 * Returns field ID with repeater prefix if needed
	 */
	public function get_field_id( $name ) {

		if ( is_array( $name ) ) {
			$name = $name['name'];
		}
		//Find some solution for the repeater field

		if ( $this->current_repeater ) {
			$repeater_name = ! empty( $this->current_repeater['name'] ) ? $this->current_repeater['name'] : 'repeater';
			$index         = ( false !== $this->current_repeater_i ) ? $this->current_repeater_i : '__i__';
			$name          = sprintf( '%1$s_%2$s_%3$s', $repeater_name, $index, $name );
		}

		return $name;
	}

	/**
	 * Returns field name with repeater prefix if needed
	 */
	public function get_field_name( $name ) {

		//Find some solution for the repeater field
		if ( $this->current_repeater ) {
			$repeater_name = ! empty( $this->current_repeater['name'] ) ? $this->current_repeater['name'] : '_undefined_repeater_name';
			$index         = ( false !== $this->current_repeater_i ) ? $this->current_repeater_i : '__i__';

			$name = sprintf( '%1$s[%2$s][%3$s]', $repeater_name, $index, $name );
		}

		return $name;

	}

	public function get_nonce_id() {
		return "jet-form-builder-wp-nonce-{$this->form_id}";
	}


}
