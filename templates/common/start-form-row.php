<?php
/**
 * Start from template
 *
 * @var \Jet_Form_Builder\Blocks\Render\Base $this
 */

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Native_Block_Wrapper_Attributes;

if ( ! defined( 'WPINC' ) ) {
	die;
}

$attrs = '';

if ( $this instanceof Native_Block_Wrapper_Attributes ) {
	$attrs = get_block_wrapper_attributes(
		array(
			'class' => sprintf( 'jet-form-builder-row field-type-%s', $this->get_name() ),
		)
	);
} else {
	$this->add_attribute( 'class', 'jet-form-builder-row' );
	$this->add_attribute( 'class', 'field-type-' . $this->get_name() );
}


$is_group_type = in_array( $this->get_name(), array( 'checkbox-field', 'radio-field' ), true );
$tag = ( $is_group_type && jet_fb_live_args()->markup_type === 'fieldset' ) ? 'fieldset' : 'div'; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
printf(
	'<%3$s %1$s %2$s>',
	$this->get_attributes_string(), // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	$attrs, // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	esc_attr( $tag )
);
