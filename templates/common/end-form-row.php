<?php
/**
 * End form row template
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
$is_group_type = in_array( $this->get_name(), array( 'checkbox-field', 'radio-field' ), true );
$tag = ( $is_group_type && jet_fb_live_args()->markup_type === 'fieldset' ) ? 'fieldset' : 'div'; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
printf( '</%s>', esc_attr( $tag ) );
