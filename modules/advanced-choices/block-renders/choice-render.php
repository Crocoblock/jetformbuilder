<?php


namespace JFB_Modules\Advanced_Choices\Block_Renders;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Blocks\Render\Base;
use JFB_Modules\Advanced_Choices\Block_Types\Choice;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property Choice $block_type
 *
 * Class Choice_Render
 * @package Jet_Form_Builder\Blocks\Render
 */
class Choice_Render extends Base {

	/**
	 * Contains the jet-forms/choice-control block or not.
	 *
	 * Affects whether or not to add a hidden field
	 *
	 * @var bool
	 */
	protected $choice_control_exist = false;

	/**
	 * Contains a jet-forms/choice-control block with a default type control.
	 * That is, a normal input instead of a picture
	 *
	 * Affects whether to make this block accessible
	 *
	 * @var bool
	 */
	protected $choice_input_exist = false;

	public function get_name() {
		return 'choice';
	}

	public function render( $wp_block = null, $template = null ) {
		$this->set_choice_check( $wp_block );
		$is_checked = $this->block_type->is_checked_current();

		$accessibility_attrs =  array(
			'aria-checked' => $is_checked ? 'true' : 'false',
			'role'         => $this->block_type->is_allowed_multiple() ? 'checkbox' : 'radio',
			'tabindex'     => '0',
		);

		$attrs = get_block_wrapper_attributes(
			array_merge(
				array(
					'class' => 'jet-form-builder-choice--item' . ( $is_checked ? ' is-checked' : '' ),
				),
				$accessibility_attrs
			)
		);

		return sprintf(
			'<li %1$s>%2$s</li>',
			$attrs,
			( $this->block_type->block_content .
				( $this->has_choice_control() ? '' : $this->get_hidden_input_control() )
			)
		);
	}

	public function get_hidden_input_control(): string {
		/**
		 * Cannot delete this row.
		 * Although this input will be hidden and has no LABEL, if it is not done,
		 * the availability of other LABEL elements will be broken
		 */
		$this->block_type->get_field_id( '', 'label' );

		return Choice_Control_Render::get_input_control(
			$this->block_type,
			array(
				array( 'style', 'display:none;' ),
			)
		);
	}

	public function has_choice_control(): bool {
		return $this->choice_control_exist;
	}

	public function has_choice_input(): bool {
		return $this->choice_input_exist;
	}

	protected function set_choice_check( array $wp_block ) {
		if ( empty( $wp_block['innerBlocks'] ) ) {
			return;
		}

		$control = Block_Helper::find_by_block_name(
			$wp_block['innerBlocks'],
			'jet-forms/choice-control'
		);

		if ( $control ) {
			$this->choice_control_exist = true;
			$this->choice_input_exist   = empty( $control['attrs']['control_type'] );
		}
	}
}
