<?php


namespace JFB_Modules\Advanced_Choices\Block_Renders;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Blocks\Render\Base;
use Jet_Form_Builder\Classes\Builder_Helper;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Advanced_Choices\Block_Types\Choices_Field;
use JFB_Modules\Wp_Experiments\Module;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property Choices_Field $block_type
 *
 * Class Choices_Field_Render
 * @package Jet_Form_Builder\Blocks\Render
 */
class Choices_Field_Render extends Base {

	public function get_name() {
		return 'choices-field';
	}

	/**
	 * @param null $wp_block
	 * @param null $template
	 *
	 * @return false|string
	 * @throws Repository_Exception
	 */
	public function render( $wp_block = null, $template = null ) {
		/**
		 * For radio options, you must specify these attributes on the wrapper
		 *
		 * @link https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role
		 */
		$accessibility = Builder_Helper::attrs(
			$this->block_type->is_allowed_multiple()
				? array()
				: array(
					array( 'role', 'radiogroup' ),
					array( 'aria-required', $this->block_type->get_required_val() ),
				)
		);

		$attrs = get_block_wrapper_attributes(
			array(
				'class'         => 'jet-form-builder-choice',
				'data-jfb-sync' => true,
			)
		);

		$content   = '';
		$full_name = $this->block_type->get_field_name() . ( $this->block_type->is_allowed_multiple() ? '[]' : '' );

		foreach ( $wp_block['innerBlocks'] as $inner_block ) {
			$content .= Block_Helper::render_with_context(
				$inner_block,
				$this->block_type->block_context + array(
					Choices_Field::CONTEXT_RAW_NAME => $this->block_type->block_attrs['name'] ?? '',
					Choices_Field::CONTEXT_NAME     => $full_name,
					Choices_Field::CONTEXT_DEFAULT  => $this->block_type->block_attrs['default'],
					Choices_Field::CONTEXT_MULTIPLE => $this->block_type->is_allowed_multiple(),
					Choices_Field::CONTEXT_REQUIRED => $this->block_type->block_attrs['required'] ?? false,
				)
			);
		}

		$html = sprintf(
			'<ul %1$s %3$s>%2$s</ul>',
			$attrs,
			$content,
			$accessibility
		);

		/** @var Module $module */
		$module = jet_form_builder()->module( 'wp-experiments' );
		$module->enable_native_layout();

		$html = wp_render_layout_support_flag( $html, Block_Helper::current_block() );

		$module->remove_native_layout();

		return parent::render( null, $html );
	}

}
