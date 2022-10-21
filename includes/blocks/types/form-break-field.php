<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Button_Types\Button_Next;
use Jet_Form_Builder\Blocks\Manager;
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

	const HANDLE = 'jet-fb-multi-step';

	public $use_style_manager = false;

	public function register_block_type() {
		parent::register_block_type();

		add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );

		/**
		 * @link https://github.com/Crocoblock/issues-tracker/issues/1542
		 */
		add_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_scripts' ) );
	}

	public function register_scripts() {
		wp_register_script(
			self::HANDLE,
			Plugin::instance()->plugin_url( 'assets/js/frontend/multi.step{min}.js' ),
			array(
				Conditional_Block::HANDLE,
				Manager::MAIN_SCRIPT_HANDLE
			),
			Plugin::instance()->get_version(),
			true
		);
	}

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
		wp_enqueue_script( self::HANDLE );
		do_action( 'jet_plugins/frontend/register_script', self::HANDLE );

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
