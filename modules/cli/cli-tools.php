<?php


namespace JFB_Modules\Cli;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Cli_Tools {

	public static function resolve_form( $assoc_args ): \WP_Post {
		$form_id = absint( $assoc_args['form'] ?? 0 );
		$form    = get_post( $form_id );

		if ( $form instanceof \WP_Post ) {
			return $form;
		}

		list( $form ) = get_posts(
			array(
				'numberposts' => 1,
				'post_type'   => jet_form_builder()->post_type->slug(),
			)
		);

		return $form;
	}

}
