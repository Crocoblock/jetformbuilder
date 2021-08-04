<?php


namespace Jet_Form_Builder;

use Jet_Form_Builder\Gateways\Gateway_Manager;
use Jet_Form_Builder\Generators\Get_From_DB;
use Jet_Form_Builder\Generators\Get_From_Field;
use Jet_Form_Builder\Generators\Num_Range;
use Jet_Form_Builder\Generators\Num_Range_Manual;
use Jet_Form_Builder\Shortcodes\Manager;


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

class Form_Manager {
	public $generators = false;
	public $builder;
	private $result_fields = array();

	const   NAMESPACE_FIELDS = 'jet-forms/';

	public function __construct() {
		if ( Plugin::instance()->allow_gateways ) {
			Gateway_Manager::instance();
		}

		Manager::instance();
	}

	/**
	 * Returns all instances of options generators classes
	 *
	 * @return [type] [description]
	 */
	public function get_options_generators() {

		if ( false === $this->generators ) {

			$instances = array(
				new Num_Range(),
				//new Num_Range_Manual(),
				new Get_From_DB(),
				new Get_From_Field(),
			);

			$instances = apply_filters( 'jet-form-builder/forms/options-generators', $instances, $this );

			foreach ( $instances as $instance ) {
				if ( $instance->can_generate() ) {
					$this->generators[ $instance->get_id() ] = $instance;
				}
			}

		}

		return $this->generators;
	}

	/**
	 * Returns form fields,
	 * parsed from post_content
	 *
	 * @param $content
	 *
	 * @return array[]
	 */
	public function get_fields( $content ) {
		return parse_blocks( $content );
	}

	public function is_not_field( $block_name ) {
		return (
			stripos(
				$block_name,
				self::NAMESPACE_FIELDS
			) === false
		);
	}

	public function is_field( $block_name, $needle ) {
		return stristr( $block_name, $needle );
	}

	public function get_form_blocks( $form_id ) {
		return $this->get_fields( get_post( $form_id )->post_content );
	}

	public function prepare_fields_names( $block_name ) {
		return "jet-forms/$block_name";
	}

	public function get_only_form_fields( $form_id, $exclude = array(), $recursive = true ) {
		$content = $this->get_form_blocks( $form_id );

		return $this->only_form_fields( $content, $exclude, $recursive );
	}

	public function only_form_fields( $content, $exclude = array(), $recursive = true ) {
		$exclude = array_map( array( $this, 'prepare_fields_names' ), $exclude );

		$this->result_fields = array();
		$this->get_inner_fields( $content, $exclude, $recursive );

		$response            = $this->result_fields;
		$this->result_fields = array();

		return $response;
	}


	private function get_inner_fields( $source, $exclude, $recursive = true ) {
		foreach ( $source as $block ) {

			if ( ! $this->is_not_field( $block['blockName'] ) && ! in_array( $block['blockName'], $exclude ) ) {
				$this->result_fields[] = $block;
			}

			if ( $recursive && ! empty( $block['innerBlocks'] ) ) {
				$this->get_inner_fields( $block['innerBlocks'], $exclude, true );
			}
		}
	}


	/**
	 * Returns generators list
	 *
	 * @return [type] [description]
	 */
	public function get_generators_list() {

		$generators = $this->get_options_generators();
		$result     = array(
			0 => __( 'Select function...', 'jet-form-builder' ),
		);

		foreach ( $generators as $id => $generator ) {
			$result[ $id ] = $generator->get_name();
		}

		return $result;

	}

	public function field_name( $blockName ) {
		$parts = explode( self::NAMESPACE_FIELDS, $blockName );

		return isset( $parts[1] ) ? $parts[1] : '';
	}

	public function get_form_content( $form_id ) {
		return get_post( $form_id )->post_content;
	}

	public function get_field_by_name( $form_id, $field_name, $blocks = array() ) {
		if ( ! $blocks ) {
			$blocks = $this->get_only_form_fields( $form_id );
		}

		return $this->_get_field_by_name( $field_name, $blocks );
	}

	private function _get_field_by_name( $field_name, $blocks ) {
		foreach ( $blocks as $block ) {
			$name = isset( $block['attrs']['name'] ) && $block['attrs']['name']
				? $block['attrs']['name']
				: '';

			if ( ! $name ) {
				continue;
			}

			if ( $name === $field_name ) {
				return $block;
			}

			if ( 0 < count( $block['innerBlocks'] ) ) {
				return $this->_get_field_by_name( $field_name, $block['innerBlocks'] );
			}
		}

		return array();
	}


}