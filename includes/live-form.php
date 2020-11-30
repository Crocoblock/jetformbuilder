<?php

namespace Jet_Form_Builder;

use Jet_Form_Builder\Blocks\Types\Base as Block_Type_Base;
use Jet_Form_Builder\Classes\Attributes_Trait;
use Jet_Form_Builder\Classes\Get_Template_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Main file
 */
class Live_Form {

	use Attributes_Trait;
	use Get_Template_Trait;

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

	/**
	 * Instance.
	 *
	 * Holds the plugin instance.
	 *
	 * @since 1.0.0
	 * @access public
	 * @static
	 *
	 * @var Plugin
	 */
	public static $instance = null;

	/**
	 * Instance.
	 *
	 * Ensures only one instance of the plugin class is loaded or can be loaded.
	 *
	 * @return Plugin An instance of the class.
	 * @since 1.0.0
	 * @access public
	 * @static
	 */
	public static function instance() {

		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

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
		$this->set_specific_data_for_render();

		return $this;
	}


	public function set_repeater( $item, $count = false ) {
		$this->current_repeater   = $item;
		$this->current_repeater_i = $count;

		return $this;
	}

	private function set_specific_data_for_render() {
		$spec_data = Plugin::instance()->post_type->get_args( $this->form_id );

		$spec_data['has_prev'] = $this->has_prev;
		$spec_data['page']     = $this->page;

		$this->spec_data = ( object ) $spec_data;
	}

	public function is_not_field( $block ) {
		return Plugin::instance()->form->is_not_field( $block['blockName'] );
	}

	public function is_field( $block, $needle ) {
		return Plugin::instance()->form->is_field( $block['blockName'], $needle );
	}

	/**
	 * Setup fields prop
	 *
	 * @param $blocks
	 */
	public function setup_fields( $blocks ) {
		foreach ( $blocks as $field ) {
			if ( $this->is_field( $field, 'form-break' ) ) {
				$this->pages++;
			}
		}
	}


	public static function force_render_field( $name, $arguments = array() ) {

		if ( empty( $name ) ) {
			return;
		}
		$field = jet_form_builder()->blocks->get_field_by_name( $name );

		if ( ! $field instanceof Block_Type_Base ) {
			return;
		}
		$field->set_block_data( $arguments );

		return $field->get_block_renderer();
	}

	/**
	 * Open form wrapper
	 *
	 * @param $field
	 *
	 * @return false|string [type] [description]
	 */
	public function start_form_row( $field ) {

		if ( ! $this->is_hidden_row ) {
			$this->rendered_rows ++;
		}

		ob_start();

		do_action( 'jet-form-builder/before-start-form-row', $this );

		$this->add_attribute( 'class', 'jet-form-row' );

		if ( $this->is_hidden_row ) {
			$this->add_attribute( 'class', 'jet-form-row--hidden' );
		}

		if ( $this->is_field( $field, 'submit' ) ) {
			$this->add_attribute( 'class', 'jet-form-row--submit' );
		}

		if ( $this->is_field( $field, 'form-break' ) ) {
			$this->add_attribute( 'class', 'jet-form-row--page-break' );
		}

		if ( 1 === $this->rendered_rows ) {
			$this->add_attribute( 'class', 'jet-form-row--first-visible' );
		}

		include $this->get_global_template( 'common/start-form-row.php' );

		do_action( 'jet-form-builder/after-start-form-row', $this );

		return ob_get_clean();
	}

	/**
	 * Close form wrapper
	 *
	 * @return [type] [description]
	 */
	public function end_form_row() {

		ob_start();
		do_action( 'jet-form-builder/before-end-form-row', $this );

		include $this->get_global_template( 'common/end-form-row.php' );

		do_action( 'jet-form-builder/after-end-form-row', $this );

		return ob_get_clean();
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
		$this->page++;

		ob_start();
		do_action( 'jet-form-builder/before-page-start', $this );

		$hidden_class = '';

		if ( 1 < $this->page ) {
			$hidden_class = 'jet-form-page--hidden';
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
	 * Returns true if field is visible
	 *
	 * @param $field
	 *
	 * @return boolean        [description]
	 */
	public function is_field_visible( $field ) {

		// For backward compatibility and hidden fields
		if ( empty( $field['visibility'] ) ) {
			return true;
		}

		// If is visible for all - show field
		if ( 'all' === $field['visibility'] ) {
			return true;
		}

		// If is visible for logged in users and user is logged in - show field
		if ( 'logged_id' === $field['visibility'] && is_user_logged_in() ) {
			return true;
		}

		// If is visible for not logged in users and user is not logged in - show field
		if ( 'not_logged_in' === $field['visibility'] && ! is_user_logged_in() ) {
			return true;
		}

		return false;

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

			$repeater_name = ! empty( $this->current_repeater['name'] ) ? $this->current_repeater['name'] : 'repeater';
			$index         = ( false !== $this->current_repeater_i ) ? $this->current_repeater_i : '__i__';

			//var_dump( $repeater_name, $index, $name ); die;
			$name = sprintf( '%1$s[%2$s][%3$s]', $repeater_name, $index, $name );
		}

		return $name;

	}


}
