<?php


namespace Jet_Form_Builder;

use Jet_Form_Builder\Gateways\Gateway_Manager;
use Jet_Form_Builder\Generators\Get_From_DB;
use Jet_Form_Builder\Generators\Get_From_Field;
use Jet_Form_Builder\Generators\Num_Range;


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
		if ( Plugin::instance()->post_type->allow_gateways ) {
			Gateway_Manager::instance();
		}
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

	public function get_only_form_fields( $form_id ) {
		$content = $this->get_form_blocks( $form_id );

		$this->result_fields = array();
		$this->get_inner_fields( $content );

		return $this->result_fields;
	}

	function get_inner_fields( $source ) {
		foreach ( $source as $block ) {

			if ( ! $this->is_not_field( $block['blockName'] ) ) {
				$this->result_fields[] = $block;
			}

			if ( ! empty( $block['innerBlocks'] ) ) {
				$this->get_inner_fields( $block['innerBlocks'] );
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
		return explode( self::NAMESPACE_FIELDS, $blockName )[1];
	}

	public function get_form_content( $form_id ) {
		return get_post( $form_id )->post_content;
	}


}