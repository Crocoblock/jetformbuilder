<?php


namespace Jet_Form_Builder\Modules\Advanced_Choices\Block_Renders;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Blocks\Render\Base;
use Jet_Form_Builder\Classes\Builder_Helper;
use Jet_Form_Builder\Modules\Advanced_Choices\Block_Types\Choices_Field;

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

		$html = sprintf(
			'<ul %1$s %3$s>%2$s</ul>',
			$attrs,
			$this->block_type->block_content,
			$accessibility
		);

		jet_form_builder()->wp_experiments->enable_native_layout();

		$html = wp_render_layout_support_flag( $html, Block_Helper::current_block() );

		jet_form_builder()->wp_experiments->remove_native_layout();

		return parent::render( null, $html );
	}

}
