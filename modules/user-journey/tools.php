<?php


namespace JFB_Modules\User_Journey;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Tools for User Journey Module
 *
 * This file provides utility functions for the User Journey module.
 */

class Tools {
	/**
	 * Retrieves WordPress page data by URL.
	 *
	 * @param string $url The URL to retrieve data for.
	 *
	 * @return array|false An array of page data or false if not found.
	 */
	public static function get_wp_page_data_by_url( string $url ) {
		if ( '/' === $url ) {
			$post_id = get_option( 'page_on_front' );
		} else {
			$post_id = url_to_postid( $url );
		}

		if ( ! $post_id ) {
			return false;
		}

		$title     = get_the_title( $post_id );
		$permalink = get_permalink( $post_id );

		return array(
			'ID'        => $post_id,
			'title'     => $title,
			'permalink' => $permalink,
		);
	}
}
