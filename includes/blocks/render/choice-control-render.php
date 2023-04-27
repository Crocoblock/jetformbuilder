<?php


namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Types\Base_Choice_Item_It;
use Jet_Form_Builder\Blocks\Types\Choice;
use Jet_Form_Builder\Blocks\Types\Base as BaseType;
use Jet_Form_Builder\Blocks\Types\Choice_Control;
use Jet_Form_Builder\Classes\Builder_Helper;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property Choice_Control $block_type
 *
 * Class Choice_Render
 * @package Jet_Form_Builder\Blocks\Render
 */
class Choice_Control_Render extends Base {

	public function get_name() {
		return 'choice-control';
	}

	public function label_allowed() {
		return false;
	}

	public function render( $wp_block = null, $template = null ) {
		$attrs = get_block_wrapper_attributes(
			array(
				'class' => (
					'jet-form-builder-choice--item-control ' . ( $this->block_type->block_attrs['className'] ?? '' )
				),
			)
		);

		$is_image = $this->block_type->is_image_control();
		$image    = $this->get_image_control();

		$input = self::get_input_control(
			$this->block_type,
			array(
				array( 'class', $is_image ? '' : 'jet-form-builder-choice--item-control-input' ),
				array( 'style', $is_image ? 'display:none;' : '' ),
			)
		);

		return sprintf(
			'<span %1$s>%2$s</span>',
			$attrs,
			( $image . $input . $this->get_control_label() )
		);
	}

	public function get_control_label(): string {
		if ( empty( $this->block_type->block_attrs['label'] ) ) {
			return '';
		}

		$attributes = array(
			array(
				'for',
				$this->block_type->get_field_id(
					$this->block_type->get_raw_field_name(),
					'label'
				),
			),
			array( 'class', 'jet-form-builder__label' ),
		);

		return sprintf(
			'<label %1$s>%2$s</label>',
			Builder_Helper::attrs( $attributes ),
			$this->block_type->block_attrs['label']
		);
	}

	/**
	 * @param Base_Choice_Item_It|BaseType $block_type
	 */
	public static function get_input_control( Base_Choice_Item_It $block_type, array $other = array() ): string {
		$attributes = array_merge(
			array(
				array( 'type', $block_type->is_allowed_multiple() ? 'checkbox' : 'radio' ),
				array( 'name', $block_type->get_field_name() ),
				array( 'id', $block_type->get_field_id( $block_type->get_raw_field_name() ) ),
				array( 'value', esc_attr( $block_type->get_field_value() ) ),
				array( 'data-calculate', esc_attr( $block_type->get_calculated_value() ) ),
				array( 'required', $block_type->get_required_val() ),
				array( 'checked', $block_type->is_checked_current() ? 'checked' : '' ),
			),
			$other
		);

		return sprintf(
			'<input %s/>',
			Builder_Helper::attrs( $attributes )
		);
	}

	public function get_image_control(): string {
		if ( ! $this->block_type->is_image_control() ) {
			return '';
		}

		$is_checked    = $this->block_type->is_checked_current();
		$default_image = esc_url( $this->block_type->get_control_image_default() );
		$checked_image = esc_url( $this->block_type->get_control_image_checked() );

		if ( ! $default_image || ! $checked_image ) {
			return '';
		}

		$alt = $this->block_type->get_raw_field_name() . ' ' . __( 'control', 'jet-form-builder' );

		$attrs = array(
			array(
				'src',
				esc_url( $is_checked ? $checked_image : $default_image ),
			),
			array( 'class', 'jet-form-builder-choice--item-control-img' ),
			array( 'data-src-default', $default_image ),
			array( 'data-src-checked', $checked_image ),
			array( 'alt', $alt ),
		);

		return sprintf(
			'<img %s/>',
			Builder_Helper::attrs( $attrs )
		);
	}
}
