<?php

namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Block_Helper;

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
			return '';
		}

		$this->add_attribute( 'class', 'jet-form-builder-repeater jet-form-builder__field' );
		$this->add_attribute( 'class', $this->maybe_get_error_class( $this->block_type->block_attrs ) );
		$this->add_attribute( 'class', $this->block_type->block_attrs['class_name'] );
		$this->add_attribute( 'data-required', $this->block_type->get_required_val() );
		$this->add_attribute( 'data-jfb-sync' );

		$template = sprintf(
			'<template class="jet-form-builder-repeater__initial">%1$s</template>',
			$this->with_repeater_row_wrapper( $this->block_type->block_content )
		);

		$html = '<div class="jet-form-builder__field-wrap">';

		$html .= sprintf(
			'<div %5$s data-repeater="1" 
            data-field-name="%1$s" name="%1$s" data-settings="%2$s" %3$s>%4$s',
			esc_attr( $this->block_type->block_attrs['name'] ),
			$this->block_type->settings,
			$this->block_type->calc_dataset,
			$template,
			$this->get_attributes_string()
		);

		$html .= sprintf(
			'<div class="jet-form-builder-repeater__items">%s</div>',
			$this->maybe_render_rows( $wp_block )
		);

		if ( 'manually' === $this->block_type->manage_items ) {
			$html .= sprintf(
				'<div class="jet-form-builder-repeater__actions">
                <button type="button" class="jet-form-builder-repeater__new">%1$s</button>
                </div>',
				wp_kses_post( $this->block_type->new_item_label )
			);
		}

		$html .= '</div>';
		$html .= $this->maybe_render_error( $this->block_type->block_attrs );
		$html .= '</div>';

		return parent::render( null, $html );
	}

	public function maybe_render_rows( $wp_block ) {
		$values   = $this->block_type->get_current_repeater( 'values' );
		$response = '';

		if ( empty( $values ) || ! is_array( $values ) ) {
			return $response;
		}

		for ( $i = 0; $i < count( $values ); $i ++ ) {
			$response .= $this->render_repeater_row( $wp_block, $i );
		}

		$this->block_type->set_current_repeater(
			array(
				'index' => false,
			)
		);

		return $response;
	}

	/**
	 * Render current repeater row
	 *
	 * @param $wp_block
	 * @param int $index
	 *
	 * @return string
	 */
	public function render_repeater_row( $wp_block, $index = 0 ) {
		$html = '';

		$this->block_type->set_current_repeater(
			array(
				'index' => $index,
			)
		);

		foreach ( $wp_block['innerBlocks'] as $block ) {
			$html .= Block_Helper::render_with_context(
				$block,
				array(
					'jet-forms/repeater-field--name' => $this->block_type->parent_repeater_name(),
				)
			);
		}

		return $this->with_repeater_row_wrapper( $html, $index );
	}

	public function with_repeater_row_wrapper( $content, $index = 0 ) {
		$html = sprintf(
			'<div class="jet-form-builder-repeater__row" data-repeater-row="1" data-index="%1$s" %2$s>',
			$index,
			$this->block_type->calc_dataset
		);

		$html .= sprintf( '<div class="jet-form-builder-repeater__row-fields">%s</div>', $content );

		if ( 'manually' === $this->block_type->manage_items ) {
			$html .= '<div class="jet-form-builder-repeater__row-remove">';
			$html .= '<button type="button" class="jet-form-builder-repeater__remove">&times;</button>';
			$html .= '</div>';
		}

		return $html . '</div>';
	}


}
