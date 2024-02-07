<?php


namespace JFB_Modules\Option_Query;

use JFB_Modules\Option_Query\Interfaces\Option_Query_It;
use JFB_Modules\Option_Query\Traits\Option_Query_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Posts_Query implements Option_Query_It {

	use Option_Query_Trait;

	const POST_PROPS = array(
		'post_title',
		'post_content',
		'post_name',
		'post_excerpt',
	);

	public function rep_item_id() {
		return 'posts';
	}

	public function fetch(): \Generator {
		$post_type = $this->get_query( 'post_type' );

		if ( ! $post_type ) {
			return;
		}

		if ( ! $this->has_query( 'post_status' ) ) {
			$this->set_query( 'post_status', 'publish' );
		}

		if ( ! $this->has_query( 'posts_per_page' ) ) {
			$this->set_query( 'posts_per_page', - 1 );
		}

		// replace 'search' to the 's'
		if ( $this->has_query( 'search' ) && ! $this->has_query( 's' ) ) {
			$this->set_query( 's', $this->get_query( 'search' ) );
		}
		$this->delete_query( 'search' );

		$posts = get_posts(
			apply_filters_deprecated(
				'jet-form-builder/render-choice/query-options/posts',
				array( $this->get_query_params(), $this->get_settings() ),
				'3.3.1',
				'jet-form-builder/option-query/set-in-block'
			)
		);

		if ( empty( $posts ) ) {
			return;
		}

		foreach ( $posts as $post ) {

			$item = array(
				'object_id' => $post->ID,
				'value'     => $post->ID,
				'label'     => apply_filters( 'jet-form-builder/render-choice/label/posts', $post->post_title, $post ),
			);

			$value_from = $this->get_setting( 'value_from' );

			if ( $value_from ) {
				if ( in_array( $value_from, self::POST_PROPS, true ) ) {
					$item['value'] = $post->$value_from;
				} else {
					$item['value'] = get_post_meta( $post->ID, $value_from, true );
				}
			}

			$calc_from = $this->get_setting( 'calc_from' );

			if ( ! empty( $calc_from ) ) {
				if ( in_array( $calc_from, self::POST_PROPS, true ) ) {
					$item['calculate'] = $post->$calc_from;
				} else {
					$item['calculate'] = get_post_meta( $post->ID, $calc_from, true );
				}
			}

			yield $item;

		}
	}

}
