<?php

namespace JFB_Modules\Post_Type\Actions;

add_action( 'save_post_jet-form', function( $post_id, $post, $update ) {

	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	if ( $update ) {
		return;
	}

	$args = get_post_meta( $post_id, '_jf_args', true );
	$args = json_decode( $args, true );

	if ( ! is_array( $args ) ) {
		$args = [];
	}

	$defaults = [
		'fields_label_tag' => 'label',
		'markup_type'      => 'div',
	];

	foreach ( $defaults as $key => $value ) {
		if ( empty( $args[ $key ] ) ) {
			$args[ $key ] = $value;
		}
	}

	update_post_meta( $post_id, '_jf_args', wp_json_encode( $args ) );

}, 10, 3 );
