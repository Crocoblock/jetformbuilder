<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Form_Break_Field_Render;
use Jet_Form_Builder\Form_Break;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Form_Break_Field extends Base {

	public $use_style_manager = false;

	/**
	 * @param array $attrs
	 * @param null $content
	 * @param \WP_Block $wp_block
	 *
	 * @return string
	 */
	public function render_callback_field( array $attrs, $content = null, $wp_block = null ) {
		if ( ! Live_Form::instance()->form_id ) {
			return '';
		}
		$result = array();
		$this->set_block_data( $attrs, $content, $wp_block );

		$break = $this->get_current_form_break();

		$result[] = $this->get_block_renderer();
		$result[] = $break->maybe_end_page( false, $this->block_attrs );
		$result[] = $break->maybe_start_page();

		return implode( "\n", $result );
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'form-break-field';
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new class( $this ) extends \Jet_Form_Builder\Blocks\Render\Base {
			public function get_name() {
				return 'form-break-field';
			}

			public function label_allowed() {
				return false;
			}
		} )->render();
	}

}
