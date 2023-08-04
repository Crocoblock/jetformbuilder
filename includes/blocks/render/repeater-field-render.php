<?php

namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Blocks\Types\Repeater_Field;
use Jet_Form_Builder\Classes\Builder_Helper;
use Jet_Form_Builder\Classes\Tools;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property Repeater_Field block_type
 *
 * Class Repeater_Field_Render
 * @package Jet_Form_Builder\Blocks\Render
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
		$this->add_attribute( 'class', $this->block_type->block_attrs['class_name'] );
		$this->add_attribute( 'data-required', $this->block_type->get_required_val() );
		$this->add_attribute( 'data-jfb-sync' );

		$attrs = Builder_Helper::attrs(
			array(
				array( 'data-field-name', esc_attr( $this->block_type->block_attrs['name'] ) ),
				array( 'name', esc_attr( $this->block_type->block_attrs['name'] ) ),
				array( 'data-calc-type', esc_attr( $this->block_type->calc_type ) ),
				array( 'data-formula', esc_attr( $this->block_type->get_calculated_formula() ) ),
				array( 'data-manage-items', esc_attr( $this->block_type->manage_items ) ),
				array( 'data-items-field', esc_attr( $this->block_type->items_field ) ),
			)
		);

		$html    = '<div class="jet-form-builder__field-wrap">';
		$content = '';

		foreach ( $this->iterate_rows_html( $wp_block ) as $part ) {
			$content .= $part;
		}

		$html .= sprintf(
			'<div data-repeater="1" %1$s %2$s>%3$s',
			$attrs,
			$this->get_attributes_string(),
			$content
		);

		if ( ! $this->block_type->manage_items ) {
			$html .= sprintf(
				'<div class="jet-form-builder-repeater__actions">
                <button type="button" class="jet-form-builder-repeater__new">%1$s</button>
                </div>',
				wp_kses_post( $this->block_type->new_item_label )
			);
		}

		$html .= '</div>';
		$html .= '</div>';

		return parent::render( null, $html );
	}

	protected function iterate_rows_html( $wp_block ): \Generator {
		foreach ( $this->populate_blocks_or_html( $wp_block ) as $row ) {
			// just html
			if ( is_string( $row ) ) {
				yield $row;

				continue;
			}

			yield Block_Helper::render_with_context(
				$row,
				$this->block_type->block_context + array(
					Repeater_Field::CONTEXT_NAME         => $this->block_type->block_attrs['name'] ?? '',
					Repeater_Field::CONTEXT_MANAGE_ITEMS => $this->block_type->manage_items,
				)
			);
		}
	}

	protected function populate_blocks_or_html( $wp_block ): \Generator {
		// repeater template should always render
		yield array(
			'blockName'    => 'jet-forms/repeater-row',
			'attrs'        => array(
				'isTemplate' => true,
			),
			'innerBlocks'  => $wp_block['innerBlocks'],
			'innerContent' => $wp_block['innerContent'],
		);

		$repeater_rows = $this->block_type->block_attrs['default'];

		if ( ! $repeater_rows || ! is_array( $repeater_rows ) ) {
			yield '<div class="jet-form-builder-repeater__items"></div>';

			return;
		}

		yield '<div class="jet-form-builder-repeater__items">';

		$repeater_rows = array_values( $repeater_rows );
		$counter       = 0;

		foreach ( $repeater_rows as $row ) {
			yield array(
				'blockName'    => 'jet-forms/repeater-row',
				'attrs'        => array(
					'rowDefault'   => $row,
					'currentIndex' => $counter,
				),
				'innerBlocks'  => $wp_block['innerBlocks'],
				'innerContent' => $wp_block['innerContent'],
			);
			++$counter;
		}

		yield '</div>';
	}

}
