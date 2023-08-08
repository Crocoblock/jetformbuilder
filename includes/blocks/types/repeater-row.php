<?php


namespace Jet_Form_Builder\Blocks\Types;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Repeater_Row extends Base {

	public $use_style_manager = false;

	const CONTEXT_INDEX   = 'jet-forms/repeater-row--current-index';
	const CONTEXT_DEFAULT = 'jet-forms/repeater-row--default';

	public function get_name() {
		return 'repeater-row';
	}

	protected function register_block() {
		register_block_type(
			'jet-forms/repeater-row',
			array(
				'api_version'      => 2,
				'attributes'       => array(
					'isTemplate'   => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'rowDefault'   => array(
						'type'    => array( 'array', 'object' ),
						'default' => array(),
					),
					'currentIndex' => array(
						'type'    => 'number',
						'default' => - 1,
					),
				),
				'provides_context' => array(
					self::CONTEXT_INDEX   => 'currentIndex',
					self::CONTEXT_DEFAULT => 'rowDefault',
				),
				'uses_context'     => array(
					Repeater_Field::CONTEXT_MANAGE_ITEMS,
				),
				'render_callback'  => array( $this, 'render_callback_field' ),
			)
		);
	}

	public function set_block_data( $attributes, $content = null, $wp_block = null ) {
		parent::set_block_data( $attributes, $content, $wp_block );

		if ( is_array( $this->block_attrs['rowDefault'] ) ) {
			return;
		}
		$this->block_attrs['rowDefault'] = array();
	}

	public function get_block_renderer( $wp_block = null ) {
		$is_template = $this->block_attrs['isTemplate'] ?? false;

		return $is_template
			? sprintf(
				'<template class="jet-form-builder-repeater__initial">%s</template>',
				$this->get_row_html( $wp_block )
			)
			: $this->get_row_html( $wp_block );
	}

	public function get_row_html( $wp_block ): string {
		$index = - 1 === ( $this->block_attrs['currentIndex'] ?? - 1 )
			? 0
			: $this->block_attrs['currentIndex'];

		$html = sprintf(
			'<div class="jet-form-builder-repeater__row" data-repeater-row="1" data-index="%1$s">',
			$index
		);

		$html .= sprintf(
			'<div class="jet-form-builder-repeater__row-fields">%s</div>',
			$this->block_content
		);

		$manage_items = $this->block_context[ Repeater_Field::CONTEXT_MANAGE_ITEMS ] ?? '';

		if ( 'manually' === $manage_items || ! $manage_items ) {
			$html .= '<div class="jet-form-builder-repeater__row-remove">';
			$html .= '<button type="button" class="jet-form-builder-repeater__remove">&times;</button>';
			$html .= '</div>';
		}

		return $html . '</div>';
	}

	public function use_preset() {
		return false;
	}

	public function render_row_layout() {
		return false;
	}
}
