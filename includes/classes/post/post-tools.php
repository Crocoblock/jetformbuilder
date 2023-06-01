<?php


namespace Jet_Form_Builder\Classes\Post;


class Post_Tools {

	/**
	 * @param $post_id
	 *
	 * @return \WP_Post
	 * @throws Not_Found_Post_Exception
	 */
	public static function get_post( $post_id ): \WP_Post {
		$post_id = (int) $post_id;

		if ( ! $post_id ) {
			throw new Not_Found_Post_Exception( 'Empty post_id' );
		}

		$post = \get_post( $post_id );

		if ( is_null( $post ) ) {
			throw new Not_Found_Post_Exception( 'Not found post row' );
		}

		if ( 'publish' !== $post->post_status ) {
			throw new Not_Found_Post_Exception( "Post isn't published" );
		}

		return $post;
	}

	public static function get_title( $post ): string {
		$title = get_the_title( $post );

		return empty( $title ) ? __( '(no title)', 'jet-form-builder' ) : $title;
	}

}