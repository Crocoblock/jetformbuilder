<?php

namespace Jet_Form_Builder\Classes;

// If this file is called directly, abort.
use Jet_Form_Builder\Plugin;

if ( ! defined( 'WPINC' ) ) {
	die;
}


class Tools {

	public static function is_editor() {
		$action = ! empty( $_GET['context'] ) ? $_GET['context'] : '';

		return in_array( $action, array( 'add', 'edit' ) );
	}

	/**
	 * Returns all post types list to use in JS components
	 *
	 * @param bool $placeholder
	 *
	 * @param array $args
	 * @param string $operator
	 *
	 * @return array [type] [description]
	 */
	public static function get_post_types_for_js( $placeholder = false, $args = array(), $operator = 'and' ) {

		$post_types = get_post_types( $args, 'objects', $operator );

		$post_types_list = array();

		if ( $placeholder && is_array( $placeholder ) ) {
			$placeholder['value'] = isset( $placeholder['value'] ) ? $placeholder['value'] : '';
			$post_types_list[]    = $placeholder;
		}

		foreach ( $post_types as $post_type ) {
			if ( $post_type->name !== Plugin::instance()->post_type->slug() ) {
				$post_types_list[] = array(
					'value' => $post_type->name,
					'label' => $post_type->label,
				);
			}
		}


		return $post_types_list;
	}

	/**
	 * Get post types list for options.
	 *
	 * @return array
	 */
	public static function get_post_types_for_options() {

		return self::get_post_types_for_js(
			array( 'label' => '--' ),
			array( 'public' => true )
		);

	}

	/**
	 * Sanitize WYSIWYG field
	 *
	 * @param $input
	 *
	 * @return string
	 */
	public static function sanitize_wysiwyg( $input ) {
		$input = wpautop( $input );

		return wp_kses_post( $input );
	}

	/**
	 * Return all taxonomies list to use in JS components
	 *
	 * @return [type] [description]
	 */
	public static function get_taxonomies_for_js() {
		$taxonomies = get_taxonomies( array(), 'objects' );

		return self::with_placeholder( self::prepare_list_for_js( $taxonomies, 'name', 'label' ) );
	}

	public static function get_generators_list_for_js() {
		$generators = Plugin::instance()->form->get_generators_list();

		return self::prepare_list_for_js( $generators );
	}

	public static function get_allowed_mimes_list_for_js() {
		$mimes = get_allowed_mime_types();

		$mimes_list = array();
		foreach ( $mimes as $mime ) {
			$mimes_list[] = array(
				'label' => $mime,
				'value' => $mime
			);
		}

		return $mimes_list;
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

		return self::with_placeholder( $result );
	}

	public static function get_options_pages_for_js() {
		$pages = array();

		if ( function_exists( 'jet_engine' ) ) {
			$pages = jet_engine()->options_pages->get_options_pages_for_select();
		}

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

	public static function with_placeholder( $array, $label = '--' ) {
		return array_merge(
			array(
				array( 'label' => $label, 'value' => '' ),
			),
			$array
		);
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

	public static function array_merge_intersect_key( $source, $arrays ) {
		foreach ( $source as $index => $path ) {
			$name = isset( $path[ 'path' ] ) ? $path[ 'path' ] : $path[ 'name' ];
			$type = isset( $path['type'] ) ? $path['type'] : 'string';

			$source[ $path[ 'name' ] ] = self::getDeepValue( $name, $arrays, $type );
			unset( $source[ $index ] );
		}

		return $source;
	}

	public static function getDeepValue( $key, $source, $type ) {
		$keys = explode( '/', $key );

		return self::deep( $keys, current( $keys ), $source, $type );
	}

	private static function deep( $array, $key, $source, $type ) {
		if ( isset( $source[ $key ] ) ) {
			if ( is_array( $source[ $key ] ) && 'array' !== $type ) {
				return self::deep( $array,  next( $array ), $source[ $key ], $type );
			}
			return $source[ $key ];
		}
		return false;
	}

}