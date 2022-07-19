<?php

namespace Jet_Form_Builder;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Blocks\Types\Base as Block_Type_Base;
use Jet_Form_Builder\Classes\Arguments\Form_Arguments;
use Jet_Form_Builder\Classes\Attributes_Trait;
use Jet_Form_Builder\Classes\Get_Template_Trait;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Post\Post_Tools;

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
	/** @var Form_Arguments */
	public $spec_data;
	public $post;
	public $_conditional_blocks = array();
	public $_repeaters          = array();
	public $blocks              = array();

	// for progress
	public $form_break;

	/**
	 * Create form instance
	 *
	 * @param [type] $form_id [description]
	 */
	private function __construct() {
		$this->post      = $this->current_post();
		$this->spec_data = new Form_Arguments();
	}

	public function set_form_id( $form_id ) {
		$this->form_id = $form_id;

		return $this;
	}

	/**
	 * @param array $incoming_attributes
	 *
	 * @return $this
	 */
	public function set_specific_data_for_render( $incoming_attributes = array() ) {
		$this->spec_data
			->set_form_id( $this->form_id )
			->load( $incoming_attributes );

		return $this;
	}

	/**
	 * Setup fields prop
	 *
	 * @return array[]
	 */
	public function setup_fields(): array {
		$this->blocks = $this->get_form_break()->set_pages(
			Block_Helper::get_blocks_by_post( $this->form_id )
		);

		return $this->blocks;
	}

	public function maybe_progress_pages() {
		if ( ! $this->spec_data->enable_progress || 0 === $this->get_form_break()->get_pages() ) {
			return '';
		}

		return $this->get_form_break()->render_progress(
			'default',
			array(
				'jet-form-builder-progress-pages--global',
			)
		);
	}


	public static function force_render_field( $name, $arguments = array() ) {
		if ( empty( $name ) ) {
			return '';
		}
		$field = jet_form_builder()->blocks->get_field_by_name( $name );

		if ( ! $field instanceof Block_Type_Base ) {
			return '';
		}
		$arguments['_static_value'] = true;

		$field->set_block_data( $arguments );

		return $field->get_block_renderer();
	}


	/**
	 * Maybe start new page
	 *
	 * @param bool $force_first
	 *
	 * @return false|string|void
	 */
	public function maybe_start_page( $force_first = false ) {
		return $this->get_form_break()->maybe_start_page( $force_first );
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
		return $this->get_form_break()->maybe_end_page( $is_last, $field );
	}

	/**
	 * @param string $name
	 *
	 * @return Form_Break
	 */
	public function get_form_break( $name = '' ) {
		if ( ! $name && ! $this->form_break ) {
			$this->form_break = new Form_Break();
		}
		if ( $name && ! $this->isset_form_break( $name ) ) {
			$this->_conditional_blocks[ $name ] = array( 'break' => new Form_Break() );
		}

		return $name ? $this->_conditional_blocks[ $name ]['break'] : $this->form_break;
	}

	public function isset_form_break( $name ) {
		return isset( $this->_conditional_blocks[ $name ] );
	}

	public function get_repeater( $name ) {
		return $this->_repeaters[ $name ] ?? array();
	}

	public function set_repeater( $name, $attrs ) {
		$this->_repeaters[ $name ] = array_merge( $this->get_repeater( $name ), $attrs );
	}

	private function current_post() {
		global $post;

		if ( wp_doing_ajax() && empty( $post->ID ) ) {
			$url     = wp_get_referer();
			$post_id = url_to_postid( $url );

			return get_post( $post_id );
		} else {
			return $post;
		}
	}


}
