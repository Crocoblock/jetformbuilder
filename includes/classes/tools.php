<?php

namespace Jet_Form_Builder\Classes;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}


class Tools {

	/**
	 * Returns all post types list to use in JS components
	 *
	 * @return [type] [description]
	 */
	public static function get_post_types_for_js( $placeholder = false ) {

		$post_types = get_post_types( array(), 'objects' );
		$types_list = self::prepare_list_for_js( $post_types, 'name', 'label' );

		if ( $placeholder && is_array( $placeholder ) ) {
			$types_list = array_merge( array( $placeholder ), $types_list );
		}

		return $types_list;
	}

	/**
	 * Return all taxonomies list to use in JS components
	 *
	 * @return [type] [description]
	 */
	public static function get_taxonomies_for_js() {
		$taxonomies = get_taxonomies( array(), 'objects' );

		return self::prepare_list_for_js( $taxonomies, 'name', 'label' );
	}

	public static function get_generators_list_for_js() {
		$generators = jet_form_builder()->form->get_generators_list();

		return self::prepare_list_for_js( $generators );
	}

	public static function get_allowed_mimes_list_for_js() {
		$mimes = get_allowed_mime_types();

		return self::prepare_list_for_js( $mimes );
	}

	/**
	 * Returns all registeredroles for JS
	 */
	public static function get_user_roles_for_js() {

		$roles  = self::get_user_roles();
		$result = array();

		foreach ( $roles as $role => $label ) {
			$result[] = array(
				'value' => $role,
				'label' => $label,
			);
		}

		return $result;
	}

	public static function get_options_pages_for_js() {
		$pages = jet_engine()->options_pages->get_options_pages_for_select();

		return self::prepare_list_for_js( $pages );
	}

	/**
	 * Returns pages list
	 * @return [type] [description]
	 */
	public static function get_pages_list_for_js() {
		$pages = get_pages();

		return self::prepare_list_for_js( $pages, 'ID', 'post_title' );
	}

	/**
	 * Returns pages list
	 * @return [type] [description]
	 */
	public static function get_forms_list_for_js() {
		$posts = get_posts( array(
			'post_status'    => 'publish',
			'posts_per_page' => - 1,
			'post_type'      => jet_form_builder()->post_type->slug(),
		) );

		return self::prepare_list_for_js( $posts, 'ID', 'post_title' );
	}

	/**
	 * Returns all registered user roles
	 *
	 * @return [type] [description]
	 */
	public static function get_user_roles() {

		if ( ! function_exists( 'get_editable_roles' ) ) {
			return array();
		} else {
			$roles  = get_editable_roles();
			$result = array();

			foreach ( $roles as $role => $data ) {
				$result[ $role ] = $data['name'];
			}

			return $result;
		}
	}

	/**
	 * Prepare passed array for using in JS options
	 *
	 * @return [type] [description]
	 */
	public static function prepare_list_for_js( $array = array(), $value_key = null, $label_key = null ) {

		$result = array();

		if ( ! is_array( $array ) || empty( $array ) ) {
			return $result;
		}

		foreach ( $array as $key => $item ) {

			$value = null;
			$label = null;

			if ( is_object( $item ) ) {
				$value = $item->$value_key;
				$label = $item->$label_key;
			} elseif ( is_array( $item ) ) {
				$value = $item[ $value_key ];
				$label = $item[ $label_key ];
			} else {
				$value = $key;
				$label = $item;
			}

			$result[] = array(
				'value' => $value,
				'label' => $label,
			);
		}

		return $result;

	}

	/**
	 * Check if is valid timestamp
	 *
	 * @param mixed $timestamp
	 *
	 * @return boolean
	 */
	public static function is_valid_timestamp( $timestamp ) {
		return ( ( string ) ( int ) $timestamp === $timestamp || ( int ) $timestamp === $timestamp )
		       && ( $timestamp <= PHP_INT_MAX )
		       && ( $timestamp >= ~PHP_INT_MAX );
	}

}