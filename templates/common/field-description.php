<?php
/**
 * Field description template
 */
if ( isset( $args['type'] ) && 'heading' === $args['type'] ) {
	$class = 'jet-form-builder__heading-desc';
	$tag   = 'div';
} else {
	$class = 'jet-form-builder__desc';
	$tag   = 'small';
}

printf(
	'<%1$s class="%2$s">%3$s</%1$s>',
	$tag,
	$class,
	$args['desc']
);
