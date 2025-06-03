<?php

namespace Jet_Form_Builder\Classes;

use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Tools {

	const EMPTY_DEEP_VALUE = self::class;

	public static function is_editor() {
		return self::is_block_editor() || self::is_elementor_editor() || self::is_bricks_editor();
	}

	public static function is_block_editor() {
		$allowed_actions = array( 'add', 'edit' );

		return (
			in_array( self::sanitize_get_param( 'context' ), $allowed_actions, true )
			|| in_array( self::sanitize_get_param( 'action' ), $allowed_actions, true )
		);
	}

	public static function sanitize_get_param( $param_name ) {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return ! empty( $_GET[ $param_name ] ) ? sanitize_key( $_GET[ $param_name ] ) : '';
	}

	public static function is_elementor_editor() {
		if ( ! defined( 'ELEMENTOR_VERSION' ) ) {
			return false;
		}

		return ( \Elementor\Plugin::instance()->editor->is_edit_mode() );
	}

	public static function is_bricks_editor() {
		if ( ! defined( 'BRICKS_VERSION' ) ) {
			return false;
		}

		return ( bricks_is_builder() );
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
			if ( Plugin::instance()->post_type->slug() !== $post_type->name ) {
				$post_types_list[] = array(
					'value' => $post_type->name,
					'label' => $post_type->label,
				);
			}
		}

		return self::with_placeholder( $post_types_list );
	}

	/**
	 * Get post types list for options.
	 *
	 * @return array
	 */
	public static function get_post_types_for_options(): array {
		return self::get_post_types_for_js( false, array( 'public' => true ) );
	}

	private static function get_escape_func( $type ) {
		switch ( $type ) {
			case 'template':
			default:
				return array( self::class, 'esc_template' );
		}
	}

	/**
	 * Sanitize WYSIWYG field
	 *
	 * @param $input
	 *
	 * @return string
	 */
	public static function sanitize_wysiwyg( $input ): string {
		$input = wp_kses_post( $input );

		return wp_specialchars_decode( stripslashes( $input ), ENT_COMPAT );
	}

	/**
	 * Return all taxonomies list to use in JS components
	 *
	 * @param array $args
	 *
	 * @return array
	 */
	public static function get_taxonomies_for_js( $args = array() ): array {
		$taxonomies = get_taxonomies( $args, 'objects' );

		return self::with_placeholder( self::prepare_list_for_js( $taxonomies, 'name', 'label' ) );
	}

	public static function get_taxonomies_for_modify( array $args = array() ): array {
		$taxonomies = get_taxonomies( $args, 'objects' );
		$response   = array();

		/** @var \WP_Taxonomy $taxonomy */
		foreach ( $taxonomies as $taxonomy ) {
			$response[] = array(
				'label' => $taxonomy->label,
				'value' => "jet_tax__{$taxonomy->name}",
			);
		}

		return self::with_placeholder( $response );
	}

	public static function get_generators_list_for_js(): array {
		$generators = Plugin::instance()->form->get_generators_list();

		return self::prepare_list_for_js( $generators );
	}

	public static function get_allowed_mimes_list_for_js(): array {
		return array_values( get_allowed_mime_types() );
	}

	/**
	 * Returns all registeredroles for JS
	 */
	public static function get_user_roles_for_js( $exclude = array( 'administrator' ) ) {

		$roles  = self::get_user_roles( $exclude );
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
	 *
	 * @return [type] [description]
	 */
	public static function get_pages_list_for_js() {
		$pages = get_pages();

		return self::prepare_list_for_js( $pages, 'ID', 'post_title' );
	}

	/**
	 * Returns pages list
	 *
	 * @param bool $for_elementor
	 *
	 * @param array $args
	 *
	 * @return array [description]
	 */
	public static function get_forms_list_for_js( $for_elementor = false, $args = array() ) {
		$posts = get_posts(
			array_merge(
				array(
					'post_status'    => 'publish',
					'posts_per_page' => - 1,
					'post_type'      => jet_form_builder()->post_type->slug(),
				),
				$args
			)
		);

		$prepared_list_for_js = self::prepare_list_for_js( $posts, 'ID', 'post_title', $for_elementor );

		if ( true === $for_elementor ) {
			$manual_form_option = array(
				'manual_form_id' => __( 'Enter Form ID Manually / Dynamically', 'jet-form-builder' ),
			);

			$prepared_list_for_js = array_replace( $manual_form_option, $prepared_list_for_js );
		} else {
			$manual_form_option[] = array(
				'value' => -1,
				'label' => __( 'Enter Form ID Manually / Dynamically', 'jet-form-builder' ),
			);

			$prepared_list_for_js = array_merge( $manual_form_option, $prepared_list_for_js );
		}

		return $prepared_list_for_js;
	}

	/**
	 * Returns all registered user roles
	 *
	 * @param string[] $exclude
	 *
	 * @return array [type] [description]
	 */
	public static function get_user_roles( $exclude = array( 'administrator' ) ) {

		if ( ! function_exists( 'get_editable_roles' ) ) {
			return array();
		} else {
			$roles  = get_editable_roles();
			$result = array();

			foreach ( $roles as $role => $data ) {
				if ( ! in_array( $role, $exclude, true ) ) {
					$result[ $role ] = $data['name'];
				}
			}

			return $result;
		}
	}

	/**
	 * Prepare passed array for using in JS options
	 *
	 * @param array $array
	 * @param null $value_key
	 * @param null $label_key
	 * @param bool $for_elementor
	 *
	 * Only if $for_elementor === false
	 * @param array $additional_attrs
	 *
	 * @return array [type] [description]
	 */
	public static function prepare_list_for_js(
		$collection = array(),
		$value_key = null,
		$label_key = null,
		$for_elementor = false,
		$additional_attrs = array()
	) {

		$result = array();

		if ( ! is_array( $collection ) || empty( $collection ) ) {
			return $result;
		}

		foreach ( $collection as $key => $item ) {

			$value = null;
			$label = null;

			if ( is_scalar( $item ) ) {
				$value = $key;
				$label = $item;
			} else {
				$value = self::get_property( $item, $value_key );
				$label = self::get_property( $item, $label_key );
			}

			if ( $for_elementor ) {
				$result[ $value ] = $label;
			} else {
				$prepared = array(
					'value' => $value,
					'label' => $label,
				);
				foreach ( $additional_attrs as $attr ) {
					$prepared[ $attr ] = self::get_property( $item, $attr );
				}

				$result[] = $prepared;
			}
		}

		return $result;
	}

	/**
	 * @param array $collection
	 * @param string $label
	 *
	 * @return array
	 */
	public static function with_placeholder( array $collection, string $label = '--' ): array {
		return array_merge(
			array(
				array( 'label' => $label, 'value' => '' ),
			),
			$collection
		);
	}

	/**
	 * Check if is valid timestamp
	 *
	 * @param mixed $timestamp
	 *
	 * @return boolean
	 */
	public static function is_valid_timestamp( $timestamp ): bool {
		return ( (string) (int) $timestamp === $timestamp || (int) $timestamp === $timestamp )
				&& ( $timestamp <= PHP_INT_MAX )
				&& ( $timestamp >= ~PHP_INT_MAX );
	}

	public static function array_merge_intersect_key( $source, $arrays ) {
		foreach ( $source as $index => $path ) {
			$name = $path['path'] ?? $index;

			$deep_value = self::getDeepValue( $name, $arrays );

			if ( self::EMPTY_DEEP_VALUE === $deep_value ) {
				unset( $source[ $index ] );
			} else {
				$source[ $index ] = $deep_value;
			}
		}

		return $source;
	}

	// phpcs:ignore WordPress.NamingConventions.ValidFunctionName.MethodNameInvalid
	public static function getDeepValue( $key, $source ) {
		$keys = explode( '/', $key );
		$last = end( $keys );
		reset( $keys );

		return self::deep( $keys, current( $keys ), $last, $source );
	}

	private static function deep( $collection, $key, $last, $source ) {

		if ( isset( $source[ $key ] ) ) {
			if ( $last !== $key ) {
				return self::deep( $collection, next( $collection ), $last, $source[ $key ] );
			}

			return $source[ $key ];
		}

		return self::EMPTY_DEEP_VALUE;
	}

	public static function call( $callback, ...$params ) {
		if ( ! is_callable( $callback ) ) {
			return;
		}

		call_user_func( $callback, ...$params );
	}

	public static function decode_unserializable( $value ) {
		$data = self::decode_json( $value );

		// phpcs:ignore Universal.Operators.DisallowShortTernary.Found
		return $data ?: maybe_unserialize( $value );
	}

	public static function decode_json( $json ) {
		if ( is_array( $json ) ) {
			foreach ( $json as $key => $row ) {
				$json[ $key ] = static::decode_json( $row );
			}

			return $json;
		}
		if ( defined( 'JSON_INVALID_UTF8_IGNORE' ) ) {
			// phpcs:ignore PHPCompatibility.Constants.NewConstants
			return json_decode( $json, true, 512, JSON_INVALID_UTF8_IGNORE );
		}

		return json_decode( $json, true );
	}

	public static function encode_json( $json ) {
		return wp_json_encode( $json, JSON_UNESCAPED_UNICODE );
	}

	public static function sanitize_recursive( $source = null ) {
		if ( ! is_array( $source ) ) {
			return self::sanitize( $source );
		}

		$result = array();

		foreach ( $source as $key => $value ) {
			$result[ $key ] = self::sanitize_recursive( $value );
		}

		return $result;
	}

	public static function maybe_recursive_sanitize( $source = null ) {
		return self::sanitize_recursive( $source );
	}

	public static function sanitize( $source ) {
		if ( self::is_url( $source ) ) {
			return esc_url_raw( $source );
		}

		return self::sanitize_text_field( $source );
	}

	public static function is_url( $url ) {
		return wp_http_validate_url( $url );
	}

	public static function sanitize_text_field( $source, $replace_enqueue = true ) {
		$str = (string) $source;

		$filtered          = wp_check_invalid_utf8( $str );
		$sanitize_callback = apply_filters( 'jet-form-builder/sanitize-string/callback', false );

		if ( $sanitize_callback && is_callable( $sanitize_callback ) ) {
			$filtered = call_user_func( $sanitize_callback, $filtered );
		} elseif ( $replace_enqueue && false !== strpos( $filtered, '<' ) ) {
			$filtered = wp_kses_post( $filtered );
		}

		return trim( $filtered );
	}

	/**
	 * @param $type
	 * @param mixed ...$values
	 *
	 * @return mixed
	 */
	private static function call_escape_func( $type, ...$values ) {
		return call_user_func( self::get_escape_func( $type ), ...$values );
	}

	public static function recursive_wp_kses( $source, $allowed_html = 'strip' ) {
		if ( ! is_array( $source ) ) {
			return wp_kses( $source, $allowed_html );
		}

		$result = array();
		foreach ( $source as $key => $value ) {
			$result[ $key ] = self::sanitize_recursive( $value );
		}

		return $result;
	}

	public static function sanitize_files( $source ) {
		if ( ! is_array( $source ) ) {
			return false;
		}

		$response = array();

		foreach ( $source as $index => $item ) {
			foreach ( $item as $key => $value ) {
				switch ( $key ) {
					case 'error':
					case 'size':
						$response[ $index ][ $key ] = absint( $value );
						break;
					case 'name':
						$response[ $index ][ $key ] = sanitize_file_name( $value );
						break;
					case 'type':
						$response[ $index ][ $key ] = sanitize_mime_type( $value );
						break;
					case 'tmp_name':
						$response[ $index ][ $key ] = sanitize_text_field( $value );
						break;
				}
			}
		}

		return $response;
	}

	/**
	 * @param $source
	 * @param bool $replace_enqueue
	 *
	 * @return string
	 */
	private static function esc_template( $source, $replace_enqueue = true ): string {
		return self::sanitize_text_field( $source, $replace_enqueue );
	}

	public static function get_jet_engine_version() {
		return function_exists( 'jet_engine' )
			? jet_engine()->get_version()
			: false;
	}

	public static function is_readable( string $filename ) {
		// phpcs:ignore WordPress.PHP.NoSilencedErrors.Discouraged
		return strlen( $filename ) <= PHP_MAXPATHLEN && @is_readable( $filename );
	}

	/**
	 * Returns template path
	 *
	 * @param  [type] $path [description]
	 *
	 * @return [type]       [description]
	 */
	public static function get_global_template( $path = '' ) {
		return JET_FORM_BUILDER_PATH . 'templates/' . $path;
	}

	public static function get_property( $source, $name, $if_not_exist = '' ) {
		if ( is_object( $source ) ) {
			return $source->{$name} ?? $if_not_exist;
		}

		return $source[ $name ] ?? $if_not_exist;
	}

	public static function esc_template_string( $source, $replace_enqueue = true ) {
		return self::call_escape_func( 'template', $source, $replace_enqueue );
	}

	public static function is_repeater_val( $value ): bool {
		if ( is_array( $value ) && ! empty( $value ) ) {
			foreach ( $value as $item ) {
				return is_array( $item );
			}
		}

		return false;
	}

	public static function set_current_post( $post_id ) {
		global $post;

		// phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		$post = get_post( absint( $post_id ) );
	}

	public static function prepare_repeater_value( $value, $fields_map ): array {
		$prepared_value = array();

		foreach ( $value as $index => $row ) {
			$prepared_row = array();

			foreach ( $row as $item_key => $item_value ) {
				$item_key                  = ! empty( $fields_map[ $item_key ] ) ? self::sanitize_text_field( $fields_map[ $item_key ] ) : $item_key;
				$prepared_row[ $item_key ] = $item_value;
			}

			$prepared_value[ 'item-' . $index ] = $prepared_row;
		}

		return $prepared_value;
	}

	public static function is_webhook(): bool {
		return (
			defined( 'JET_FB_REST_WEBHOOK' ) &&
			JET_FB_REST_WEBHOOK
		);
	}

	public static function esc_attr( $value ) {
		if ( ! is_scalar( $value ) ) {
			return esc_attr( self::encode_json( $value ) );
		}

		return esc_attr( $value );
	}

	public static function get_suffix(): string {
		return defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
	}

	/**
	 * Get from function below
	 *
	 * @return string
	 * @see \retrieve_password
	 */
	public static function get_site_name(): string {
		if ( is_multisite() ) {
			return get_network()->site_name;
		}

		/*
		 * The blogname option is escaped with esc_html on the way into the database
		 * in sanitize_option. We want to reverse this for the plain text arena of emails.
		 */

		return wp_specialchars_decode( get_option( 'blogname' ), ENT_QUOTES );
	}

	/**
	 * @param mixed $value
	 */
	public static function to_string( $value ): string {
		if ( is_array( $value ) ) {
			return implode(
				',',
				array_map( array( self::class, 'to_string' ), $value )
			);
		}

		if ( is_object( $value ) && ! method_exists( $value, '__toString' ) ) {
			return '';
		}

		return (string) $value;
	}

	public static function is_empty( $value ): bool {
		return '0' !== $value && 0 !== $value && empty( $value );
	}

	public static function contains_registered_shortcode( $string ) {
		global $shortcode_tags;

		foreach ( array_keys( $shortcode_tags ) as $shortcode ) {
			if ( strpos( $string, "[$shortcode" ) !== false ) {
				return true;
			}
		}

		return false;
	}

	public static function is_wp_password_hash( $hash ) {
		return preg_match( '/^\$P\$[A-Za-z0-9\.\/]{31}$/', $hash );
	}

	public static function get_array_of_user_roles( $settings ) {
		$user_roles = $settings ?? array();
		if ( ! empty( $user_roles ) ) {
			if ( is_string( $user_roles ) ) {
				$user_roles = array( $user_roles );
			}
		}
		return $user_roles;
	}

	public static function get_main_user_role_by_priority( $roles ): string {
		if ( is_string( $roles ) ) {
			$roles = array( $roles );
		}
		$wp_roles_priority = array(
			'editor'        => 4,
			'author'        => 3,
			'contributor'   => 2,
			'subscriber'    => 1,
		);

		$wp_roles     = array_intersect( $roles, array_keys( $wp_roles_priority ) );
		$custom_roles = array_diff( $roles, array_keys( $wp_roles_priority ) );

		usort(
			$wp_roles,
			function ( $a, $b ) use ( $wp_roles_priority ) {
				return ( $wp_roles_priority[ $b ] ?? 0 ) <=> ( $wp_roles_priority[ $a ] ?? 0 );
			}
		);

		return $wp_roles[0] ?? $custom_roles[0] ?? '';
	}



}
