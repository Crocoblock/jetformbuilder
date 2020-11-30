<?php

namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
use Jet_Form_Builder\Fields_Factory;
use Jet_Form_Builder\Form_Preset;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Plugin;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define text field renderer class
 */
class Repeater_Field_Render extends Base {

	public $current_repeater_i = false;
	public $current_repeater;

	public function get_name() {
		return 'repeater-field';
	}

	public function render( $wp_block = null, $template = null ) {
		if ( empty( $wp_block['innerBlocks'] ) ) {
			return;
		}

		$this->current_repeater = $this->block_type->default_value;

		$template = sprintf(
			'<template class="jet-form-repeater__initial">%1$s</template>',
			$this->render_repeater_row( $wp_block, false )
		);

		$html = sprintf(
			'<div class="jet-form-repeater" data-repeater="1" 
            data-field-name="%1$s" name="%1$s" data-settings="%2$s" %3$s>%4$s',
			$this->block_type->block_attrs['name'],
			$this->block_type->settings,
			$this->block_type->calc_dataset,
			$template
		);

		$html .= '<div class="jet-form-repeater__items">';

		if ( ! empty( $this->current_repeater['default'] ) && is_array( $this->current_repeater['default'] ) ) {
			$i = 0;
			foreach ( $this->current_repeater['default'] as $item ) {
				$this->current_repeater['values'] = $item;
				$html                             .= $this->render_repeater_row( $wp_block, $i );
				$i ++;
			}
			$this->current_repeater['values'] = false;
		}

		$html .= '</div>';

		if ( 'manually' === $this->block_type->manage_items ) {
			$html .= sprintf(
				'<div class="jet-form-repeater__actions">
                <button type="button" class="jet-form-builder-repeater__new">%1$s</button>
                </div>',
				$this->block_type->new_item_label
			);
		}

		$html .= '</div>';

		$this->current_repeater = false;

		return parent::render( null, $html );
	}

	/**
	 * Render current repeater row
	 *
	 * @param $wp_block
	 * @param bool $index
	 *
	 * @return string
	 */
	public function render_repeater_row( $wp_block, $index = false ) {

		if ( false !== $index ) {
			$this->current_repeater_i = $index;
		} else {
			$index = 0;
		}

		$html = '<div class="jet-form-repeater__row" data-repeater-row="1" data-index="' . $index . '"' . $this->block_type->calc_dataset . '>';
		$html .= '<div class="jet-form-repeater__row-fields">';

		Live_Form::instance()->set_repeater( $this->current_repeater, $this->current_repeater_i );

		foreach ( $wp_block['innerBlocks'] as $block ) {
			$html .= render_block( $block );
		}

		$html .= '</div>';

		Live_Form::instance()->set_repeater( false );

		if ( 'manually' === $this->block_type->manage_items ) {
			$html .= '<div class="jet-form-repeater__row-remove">';
			$html .= '<button type="button" class="jet-form-repeater__remove">&times;</button>';
			$html .= '</div>';
		}

		return $html . '</div>';
	}


}
