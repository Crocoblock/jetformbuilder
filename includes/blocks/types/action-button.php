<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Action_Button_Render;
use Jet_Form_Builder\Blocks\Render\Base as BaseRender;
use Jet_Form_Builder\Classes\Tools;


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Action_Button extends Base {

	private $button_types = array();

	public function register_block_type() {
		parent::register_block_type();

		$this->add_button_type( 'prev', array(
			'label'        => __( 'Go to Prev Page', 'jet-form-builder' ),
			'button_class' => 'jet-form-builder__prev-page',
			'preset_label' => 'Prev Page'
		) );
		$this->add_button_type( 'next', array(
			'label'        => __( 'Go to Next Page', 'jet-form-builder' ),
			'button_class' => 'jet-form-builder__next-page',
			'preset_label' => 'Next Page'
		) );

		do_action( "jet-form-builder/{$this->get_name()}/on-register", $this );
	}

	public function general_style_unregister() {
		return array( 'input', 'label', 'description', 'required' );
	}

	/**
	 * @return array
	 */
	public function get_button_types() {
		return $this->button_types;
	}

	/**
	 * @param $slug
	 * @param $button_data
	 */
	public function add_button_type( $slug, $button_data ) {
		if ( $this->get_button_type( $slug ) ) {
			return;
		}

		$attrs = array( 'value', 'label', 'preset_label' );

		foreach ( $attrs as $attr ) {
			if ( ! isset( $button_data[ $attr ] ) ) {
				$button_data[ $attr ] = $slug;
			}
		}

		$this->button_types[] = $button_data;
	}

	/**
	 * @param $slug
	 *
	 * @param string $property
	 *
	 * @return array
	 */
	public function get_button_type( $slug ) {
		foreach ( $this->get_button_types() as $button ) {
			if ( $button['value'] === $slug ) {
				return $button;
			}
		}

		return array();
	}

	public function get_button_prop( $slug, $prop, $if_not = false ) {
		$button = $this->get_button_type( $slug );

		if ( ! $button ) {
			return $if_not;
		}

		return $button[ $prop ] ?? $if_not;
	}

	/**
	 * @param $slug
	 *
	 * @param string $property
	 *
	 * @return array
	 */
	public function get_button_type_with_index( $slug, $property = '' ) {
		foreach ( $this->get_button_types() as $index => $button ) {
			if ( $button['value'] === $slug ) {
				return array( $index, $button );
			}
		}

		return array( false, false );
	}

	public function update_button_type( $slug, $new_data ) {
		list( $index, $button ) = $this->get_button_type_with_index( $slug );

		if ( false === $index ) {
			return false;
		}

		unset( $new_data['value'] );
		$this->button_types[ $index ] = array_merge( $button, $new_data );

		return true;
	}

	public function delete_button_type( $slug ) {
		list( $index ) = $this->get_button_type_with_index( $slug );

		if ( false === $index ) {
			return false;
		}

		unset( $this->button_types[ $index ] );

		return true;
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'action-button';
	}

	public function use_preset() {
		return false;
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Action_Button_Render( $this ) )->render();
	}

	public function block_data( $editor, $handle ) {
		wp_localize_script(
			$handle,
			'JetFormActionButton',
			apply_filters(
				"jet-form-builder/field-data/{$this->get_name()}",
				array(
					'actions' => Tools::with_placeholder( $this->get_button_types() )
				)
			)
		);
	}

}
