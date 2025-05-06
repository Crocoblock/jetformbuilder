<?php
/**
 * Field label template
 *
 * @var \Jet_Form_Builder\Blocks\Render\Base $this
 * @var array $args
 * @var $label_wrapper Attributes_Trait
 * @var $label_text Attributes_Trait
 * @var $label_text_tag string
 */

use Jet_Form_Builder\Classes\Attributes_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
$is_group_type = in_array( $this->get_name(), array( 'checkbox-field', 'radio-field' ), true );
$tag = ( $is_group_type && jet_fb_live_args()->markup_type === 'fieldset' ) ? 'legend' : $label_text_tag;

printf( "<div %s>\r\n", $label_wrapper->get_attributes_string() );
printf( '<%s %s>', $tag, $label_text->get_attributes_string() );

echo wp_kses_post( $args['label'] );

$mark = jet_fb_live_args()->required_mark;

if ( $this->block_type->get_required_val() && ! empty( $mark ) ) {
	printf(
		' <span class="jet-form-builder__required">%s</span>',
		wp_kses_post( $mark )
	);
}

echo "</{$tag}>";
require $this->get_global_template( 'common/prev-page-button.php' );
echo '</div>';
