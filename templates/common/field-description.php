<?php
/**
 * Field description template
 */

if ( isset( $args['type'] ) && 'heading-field' === $args['type'] ) {
	$class  = 'jet-form-builder__heading-desc';
	$format = '<div class="%1$s">%2$s</div>';
} else {
	$class  = 'jet-form-builder__desc';
	$format = '<div class="%1$s"><small>%2$s</small></div>';
}

printf( $format, esc_attr( $class ), wp_kses_post( $args['desc'] ) );
