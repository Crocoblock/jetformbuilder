<?php
namespace Jet_Form_Builder\Blocks;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Manager class
 */
class Manager {

	private $_types = array();

	public function __construct() {
		add_action( 'init', array( $this, 'register_block_types' ), 99 );
		add_action( 'jet-form-builder/editor-assets/after', array( $this, 'register_block_types_for_editor' ), 10, 2 );
	}

	/**
	 * Register block types
	 *
	 * @return [type] [description]
	 */
	public function register_block_types() {

		$types = array(
			new Types\Text_Field(),
		);

		foreach ( $types as $type ) {
			$this->register_block_type( $type );
		}

		do_action( 'jet-form-builder/blocks/init', $this );

	}

	/**
	 * Register block types for editor
	 *
	 * @return [type] [description]
	 */
	public function register_block_types_for_editor( $editor, $handle ) {

		$prepared_types = array();

		foreach ( $this->_types as $type ) {

			$attributes = $type->block_attributes();

			$prepared_types[] = array(
				'blockName'  => $type->block_name(),
				'title'      => $type->get_title(),
				'icon'       => $type->get_icon(),
				'attributes' => $attributes,
				'controls'   => array(
					'toolbar'  => $this->get_controls_list( $attributes, 'toolbar' ),
					'general'  => $this->get_controls_list( $attributes, 'general' ),
					'advanced' => $this->get_controls_list( $attributes, 'advanced' ),
				),
				'className'  => $type->block_class_name(),
				'slug'       => $type->get_name(),
			);
		}

		wp_localize_script( $handle, 'jetFormBuilderBlocks', $prepared_types );

	}

	/**
	 * Returns toolbar controls list from attributes
	 *
	 * @return [type] [description]
	 */
	public function get_controls_list( $attributes = array(), $context = 'toolbar' ) {

		$result = array();

		foreach ( $attributes as $key => $data ) {
			if ( ! empty( $data[ $context ] ) ) {
				$result[] = array(
					'key'       => $key,
					'type'      => $data[ $context ]['type'],
					'label'     => $data[ $context ]['label'],
					'options'   => isset( $data[ $context ]['options'] ) ? $data[ $context ]['options'] : array(),
					'condition' => isset( $data[ $context ]['condition'] ) ? $data[ $context ]['condition'] : false,
				);
			}
		}

		return $result;

	}

	/**
	 * Register new block type
	 *
	 * @param  [type] $block_type [description]
	 * @return [type]             [description]
	 */
	public function register_block_type( $block_type ) {
		$this->_types[ $block_type->get_name() ] = $block_type;
	}

	/**
	 * Returns block attributes list
	 */
	public function get_block_atts( $block = null ) {

		if ( ! $block ) {
			return array();
		}

		$type = isset( $this->_types[ $block ] ) ? $this->_types[ $block ] : false;

		if ( ! $type ) {
			return array();
		}

		return $type->get_attributes();

	}

}
