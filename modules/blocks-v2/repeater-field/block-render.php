<?php

namespace JFB_Modules\Blocks_V2\Repeater_Field;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Blocks\Render\Base;
use Jet_Form_Builder\Classes\Builder_Helper;
use JFB_Modules\Jet_Style\Style_Manager;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property Block_Type block_type
 *
 * Class Repeater_Field_Render
 * @package Jet_Form_Builder\Blocks\Render
 */
class Block_Render extends Base {

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

			$context = $this->block_type->block_context + array(
				Block_Type::CONTEXT_NAME         => $this->block_type->block_attrs['name'] ?? '',
				Block_Type::CONTEXT_MANAGE_ITEMS => $this->block_type->manage_items,
			);

			if ( empty( $row['attrs']['isTemplate'] ) ) {
				yield Block_Helper::render_with_context( $row, $context );

				continue;
			}

			yield $this->render_template_row( $row, $context );
		}
	}

	/**
	 * Render the row <template>, keeping its block styles outside of it.
	 *
	 * Styles inside <template> are inert: they don't apply on page load
	 * and get duplicated into every row added with "Add New".
	 *
	 * @param array $row
	 * @param array $context
	 *
	 * @return string
	 */
	protected function render_template_row( array $row, array $context ): string {
		list( $content, $styles ) = Style_Manager::capture_styles(
			function () use ( $row, $context ) {
				return Block_Helper::render_with_context( $row, $context );
			}
		);

		return $styles . $content;
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

	/**
	 * @see \Jet_Form_Builder\Blocks\Render\Calculated_Field_Render::get_fields_label_tag
	 *
	 * @return string
	 */
	protected function get_fields_label_tag(): string {
		return 'div';
	}

}
