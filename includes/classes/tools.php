<?php

namespace Jet_Form_Builder\Classes;

use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Generators\Registry as GeneratorRegistry;

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
		$input = wp_specialchars_decode( stripslashes( $input ), ENT_COMPAT );

		return wp_kses_post( $input );
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

	/**
	 * Get generator schemas for JS localization.
	 *
	 * @return array
	 */
	public static function get_generator_schemas_for_js(): array {
		if ( ! class_exists( GeneratorRegistry::class ) ) {
			return array();
		}

		try {
			$registry = GeneratorRegistry::instance();
			return $registry->get_schemas_for_js();
		} catch ( \Exception $e ) {
			return array();
		}
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
	 * Returns editable roles and ensures the core helper is loaded.
	 *
	 * @return array
	 */
	public static function get_editable_roles_safe(): array {
		if ( ! function_exists( 'get_editable_roles' ) ) {
			require_once ABSPATH . 'wp-admin/includes/user.php';
		}

		if ( ! function_exists( 'get_editable_roles' ) ) {
			return array();
		}

		return get_editable_roles();
	}

	/**
	 * Returns all registered roles without filtering by the current user's capabilities.
	 *
	 * @return array
	 */
	public static function get_registered_roles_safe(): array {
		$wp_roles = wp_roles();

		if ( ! is_a( $wp_roles, \WP_Roles::class ) ) {
			return array();
		}

		return $wp_roles->roles ?? array();
	}

	/**
	 * Returns auto-detected low-privilege roles that can be used as
	 * a starting point for self-service role transitions.
	 *
	 * @return string[]
	 */
	public static function get_default_self_promotable_roles(): array {
		$editable_roles = self::get_registered_roles_safe();

		if ( empty( $editable_roles ) ) {
			return array();
		}

		$roles = array();

		foreach ( array_keys( $editable_roles ) as $role ) {
			if ( self::is_safe_self_promotable_role( $role ) ) {
				$roles[] = $role;
			}
		}

		return array_values( array_unique( $roles ) );
	}

	public static function is_safe_self_promotable_role( string $role ): bool {
		if ( 'administrator' === $role ) {
			return false;
		}

		$wp_roles = wp_roles();

		if ( ! isset( $wp_roles->roles[ $role ] ) ) {
			return false;
		}

		$caps = array_filter( $wp_roles->roles[ $role ]['capabilities'] ?? array() );

		$dangerous_caps = array(
			'activate_plugins',
			'create_users',
			'delete_users',
			'edit_users',
			'list_users',
			'promote_users',
			'remove_users',
			'manage_options',
			'edit_theme_options',
			'switch_themes',
			'install_plugins',
			'update_plugins',
			'delete_plugins',
			'install_themes',
			'update_themes',
			'delete_themes',
			'unfiltered_html',
			'edit_others_posts',
			'delete_others_posts',
			'publish_posts',
			'manage_categories',
		);

		foreach ( $dangerous_caps as $cap ) {
			if ( ! empty( $caps[ $cap ] ) ) {
				return false;
			}
		}

		return true;
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
			$key = is_string( $key ) ? self::sanitize_array_key( $key ) : $key;

			// When sanitized keys collide, keep the first value.
			if ( array_key_exists( $key, $result ) ) {
				continue;
			}

			$result[ $key ] = self::sanitize_recursive( $value );
		}

		return $result;
	}

	/**
	 * Strips tags from an array key. Keys without tags stay unchanged,
	 * preserving whitespace and percent-encoded sequences in field names.
	 *
	 * @param string $key
	 *
	 * @return string
	 */
	public static function sanitize_array_key( string $key ): string {
		return false === strpos( $key, '<' ) ? $key : wp_strip_all_tags( $key, false );
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

	/**
	 * Makes CSS safe to print inside a <style> element: only the sequence
	 * that would close the element ("</style", any case) is changed, to
	 * "<\/style". Inside a CSS string "\/" is just "/", and outside strings
	 * the sequence is not valid CSS anyway, so stylesheets are unaffected.
	 *
	 * @param string $css
	 *
	 * @return string
	 */
	public static function safe_inline_css( string $css ): string {
		return (string) preg_replace( '#</(style)#i', '<\\\\/$1', $css );
	}

	/**
	 * Pattern of server-side macros in a Calculated Field formula
	 * (%FIELD::name%, %META::key%, macros added by integrations).
	 */
	const FORMULA_MACRO_PATTERN = '/%([a-zA-Z-_]+)::([a-zA-Z0-9-_]+)%/';

	/**
	 * Turns a stored value into a token for a Calculated Field formula.
	 *
	 * The formula (data-formula) is executed as JavaScript in the browser,
	 * and a value read from a record (post meta) may have been written by a
	 * visitor, e.g. through a public Insert Post form. So the value is data,
	 * never code:
	 *
	 * - in code position a plain number or the word true/false is inserted
	 *   bare, anything else becomes a JavaScript string literal;
	 * - inside a string the author wrote ('%META::name%') only the escaped
	 *   characters are inserted, so the string keeps its own quotes.
	 *
	 * Every character except A-Z, a-z, 0-9 and "_" is written as a \uXXXX
	 * escape. In a string it means the same character. Outside a string it
	 * cannot form an operator, a call or a quote, so even a wrongly detected
	 * position cannot turn the value into code. It also removes "%", which the
	 * browser would read as the start of a %macro%.
	 *
	 * @param mixed $value
	 * @param bool  $in_string Whether the macro stands inside a string literal.
	 *
	 * @return string
	 */
	public static function to_formula_literal( $value, bool $in_string = false ): string {
		if ( is_int( $value ) || is_float( $value ) ) {
			$value = is_finite( (float) $value ) ? (string) $value : '';
		}

		if ( ! is_string( $value ) ) {
			return '';
		}

		if ( $in_string ) {
			return self::escape_formula_chars( $value );
		}

		$trimmed = trim( $value );

		if (
			'' === $trimmed
			|| 'true' === $trimmed
			|| 'false' === $trimmed
			|| preg_match( '/^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/', $trimmed )
		) {
			return $trimmed;
		}

		return '"' . self::escape_formula_chars( $value ) . '"';
	}

	/**
	 * Writes every character except A-Z, a-z, 0-9 and "_" as a JavaScript
	 * \uXXXX escape (UTF-16 code units, as JSON does).
	 *
	 * @param string $value
	 *
	 * @return string
	 */
	private static function escape_formula_chars( string $value ): string {
		$json = wp_json_encode( $value );

		if ( ! is_string( $json ) || strlen( $json ) < 2 ) {
			return '';
		}

		$simple = array(
			'"'  => '"',
			'\\' => '\\',
			'/'  => '/',
			'b'  => "\x08",
			'f'  => "\f",
			'n'  => "\n",
			'r'  => "\r",
			't'  => "\t",
		);

		return (string) preg_replace_callback(
			'/\\\\u[0-9a-fA-F]{4}|\\\\(.)|[^A-Za-z0-9_]/',
			static function ( $match ) use ( $simple ) {
				if ( 6 === strlen( $match[0] ) && 'u' === $match[0][1] ) {
					return strtolower( $match[0] );
				}

				$char = isset( $match[1] ) ? ( $simple[ $match[1] ] ?? $match[1] ) : $match[0];

				return sprintf( '\\u%04x', ord( $char ) );
			},
			substr( $json, 1, -1 )
		);
	}

	/**
	 * For every match of FORMULA_MACRO_PATTERN in the formula, in order:
	 * whether it stands inside a string literal ('…', "…" or `…` outside
	 * ${…}) or a regular expression literal (/…/). Comments are skipped.
	 *
	 * "/" is a division after an operand: a number, a name, ")", "]", a
	 * string, a regular expression, any %macro% (%price%, %META::key%) or a
	 * postfix ++/--. Elsewhere (at the start, after an operator, "(", ",", or
	 * a keyword such as return) it starts a regular expression. Inside a
	 * regular expression a "/" in [...] or after "\" does not end it. In a
	 * regular expression the value is inserted as escaped characters, which
	 * match the value literally.
	 *
	 * to_formula_literal() stays inert even when this guess is wrong.
	 *
	 * @param string $formula
	 *
	 * @return bool[]
	 */
	public static function formula_macro_string_contexts( string $formula ): array {
		if ( ! preg_match_all( self::FORMULA_MACRO_PATTERN, $formula, $matches, PREG_OFFSET_CAPTURE ) ) {
			return array();
		}

		$offsets  = array_column( $matches[0], 1 );
		$lengths  = array_map( 'strlen', array_column( $matches[0], 0 ) );
		$total    = count( $offsets );
		$contexts = array();
		$state    = 'code';
		$escaped  = false;
		$depth    = array();
		$length   = strlen( $formula );
		$next     = 0;
		// Last token of code: "operand", "word" (a name, number or keyword
		// in $word), "" (start), or the punctuation character itself.
		$prev       = '';
		$word       = '';
		$word_end   = -2;
		$keywords   = array( 'return', 'typeof', 'instanceof', 'in', 'new', 'delete', 'void', 'throw', 'case', 'do', 'else' );
		$is_operand = static function () use ( &$prev, &$word, $keywords ) {
			return in_array( $prev, array( 'operand', ')', ']' ), true )
				|| ( 'word' === $prev && ! in_array( $word, $keywords, true ) );
		};

		for ( $i = 0; $i <= $length && $next < $total; $i++ ) {
			$macro = 0;

			while ( $next < $total && $offsets[ $next ] === $i ) {
				$contexts[] = in_array( $state, array( "'", '"', '`', 'regex', 'class' ), true );
				$macro      = $lengths[ $next ];
				++$next;
			}

			if ( $i === $length ) {
				break;
			}

			// A macro in code is a value: skip it, so its "%" is not an operator.
			if ( 'code' === $state && ( $macro || ( '%' === $formula[ $i ] && preg_match( '/\G%[A-Za-z_][\w:.\-]*%/', $formula, $plain, 0, $i ) ) ) ) {
				$i   += ( $macro ? $macro : strlen( $plain[0] ) ) - 1;
				$prev = 'operand';
				continue;
			}

			$char = $formula[ $i ];
			$peek = $formula[ $i + 1 ] ?? '';

			switch ( $state ) {
				case 'line':
					if ( "\n" === $char ) {
						$state = 'code';
					}
					break;
				case 'block':
					if ( '*' === $char && '/' === $peek ) {
						$state = 'code';
						++$i;
					}
					break;
				case "'":
				case '"':
				case '`':
					if ( $escaped ) {
						$escaped = false;
					} elseif ( '\\' === $char ) {
						$escaped = true;
					} elseif ( $char === $state ) {
						$state = 'code';
						$prev  = 'operand';
					} elseif ( '`' === $state && '$' === $char && '{' === $peek ) {
						$depth[] = 0;
						$state   = 'code';
						$prev    = '{';
						++$i;
					}
					break;
				case 'regex':
				case 'class':
					if ( $escaped ) {
						$escaped = false;
					} elseif ( '\\' === $char ) {
						$escaped = true;
					} elseif ( "\n" === $char ) {
						// Not a valid regular expression: read on as code.
						$state = 'code';
						$prev  = '';
					} elseif ( 'regex' === $state && '[' === $char ) {
						$state = 'class';
					} elseif ( 'class' === $state && ']' === $char ) {
						$state = 'regex';
					} elseif ( 'regex' === $state && '/' === $char ) {
						$state = 'code';
						$prev  = 'operand';
					}
					break;
				default:
					if ( in_array( $char, array( "'", '"', '`' ), true ) ) {
						$state = $char;
					} elseif ( '/' === $char && '/' === $peek ) {
						$state = 'line';
						++$i;
					} elseif ( '/' === $char && '*' === $peek ) {
						$state = 'block';
						++$i;
					} elseif ( '/' === $char ) {
						$state = $is_operand() ? 'code' : 'regex';
						$prev  = '/';
					} elseif ( preg_match( '/[\w$]/', $char ) ) {
						// A name or a number; "1." keeps its dot below.
						$word     = ( 'word' === $prev && $word_end === $i - 1 ) ? $word . $char : $char;
						$word_end = $i;
						$prev     = 'word';
					} elseif ( '.' === $char && 'word' === $prev && $word_end === $i - 1 && ctype_digit( $word[0] ) ) {
						$word    .= '.';
						$word_end = $i;
					} elseif ( ( '+' === $char || '-' === $char ) && $peek === $char ) {
						// Postfix x++ keeps the operand; prefix ++x is an operator.
						$prev = $is_operand() ? 'operand' : $char;
						++$i;
					} elseif ( $depth && '{' === $char ) {
						++$depth[ count( $depth ) - 1 ];
						$prev = '{';
					} elseif ( $depth && '}' === $char ) {
						if ( 0 === end( $depth ) ) {
							array_pop( $depth );
							$state = '`';
						} else {
							--$depth[ count( $depth ) - 1 ];
							$prev = '}';
						}
					} elseif ( ! ctype_space( $char ) ) {
						$prev = $char;
					}
			}
		}

		return $contexts;
	}

	/**
	 * Value of the %META::key% macro of a Calculated Field formula (the
	 * Calculated Field block and the Repeater formula).
	 *
	 * @param int|string $post_id
	 * @param string     $key
	 * @param bool       $in_string Whether the macro stands inside a string literal.
	 *
	 * @return string
	 */
	public static function calculated_meta_value( $post_id, string $key, bool $in_string = false ): string {
		$raw = get_post_meta( $post_id, $key, true );

		/**
		 * Filters the formula token of %META::key%. By default the value is
		 * inserted as data: a number, or text in a string literal. Return $raw
		 * to insert the stored text as formula code, only for a key that
		 * visitors cannot write (for example, a formula fragment kept in meta
		 * by the site owner).
		 *
		 * @param string     $value     Safe token.
		 * @param mixed      $raw       Stored meta value.
		 * @param string     $key       Meta key.
		 * @param int|string $post_id   Post ID.
		 * @param bool       $in_string Whether the macro stands inside a string literal.
		 */
		return (string) apply_filters( 'jet-form-builder/calculated-field/meta-value', self::to_formula_literal( $raw, $in_string ), $raw, $key, $post_id, $in_string );
	}

	/**
	 * Min/max of Number, Range, Date and Time fields are run as calculated
	 * formulas in the browser (dynamic.value BaseReactiveProperty), so a
	 * value with "%field%" macros there is code. When min/max comes from a
	 * dynamic preset (post or user meta, query var...), it is data that
	 * visitors can write: a value with "%" is dropped. A real number, date
	 * or time never contains "%"; other values are returned unchanged.
	 *
	 * @param mixed $value Preset result for a min/max attribute.
	 *
	 * @return mixed
	 */
	public static function preset_limit_value( $value ) {
		if ( is_string( $value ) && false !== strpos( $value, '%' ) ) {
			return '';
		}

		return $value;
	}

	/**
	 * Removes data-jfb-* attributes (data-jfb-macro, data-jfb-sync...) from
	 * HTML that came from site data rather than from the form author. The
	 * frontend script treats such attributes as its own instructions: a
	 * data-jfb-macro element inside the form is rendered as an HTML macro.
	 * wp_kses_post() keeps data-* attributes, so it does not stop this.
	 *
	 * Expects kses output. Attributes are read with wp_kses_hair(), the same
	 * parser kses used to build them, so text inside a quoted value (e.g.
	 * title='a data-jfb-x="') is never taken for an attribute and the quotes
	 * stay balanced. A tag is rebuilt only when it really has a data-jfb-*
	 * attribute; all other tags and text are left byte for byte.
	 *
	 * @param string $html Output of wp_kses_post() or similar.
	 *
	 * @return string
	 */
	public static function strip_macro_attributes( string $html ): string {
		if ( false === stripos( $html, 'data-jfb-' ) ) {
			return $html;
		}

		// kses output: a tag never contains ">" (wp_kses_split() ends it there).
		return (string) preg_replace_callback(
			'/<([a-z][a-z0-9-]*)(\s[^>]*?)?(\/?)>/i',
			static function ( $tag ) {
				$attributes = $tag[2] ?? '';

				if ( '' === $attributes || false === stripos( $attributes, 'data-jfb-' ) ) {
					return $tag[0];
				}

				$parsed  = wp_kses_hair( $attributes, wp_allowed_protocols() );
				$kept    = array();
				$removed = false;

				foreach ( $parsed as $name => $attribute ) {
					if ( 0 === stripos( (string) $name, 'data-jfb-' ) ) {
						$removed = true;
						continue;
					}

					$kept[] = $attribute['whole'];
				}

				if ( ! $removed ) {
					return $tag[0];
				}

				return '<' . $tag[1] . ( $kept ? ' ' . implode( ' ', $kept ) : '' ) . ( '' !== $tag[3] ? ' /' : '' ) . '>';
			},
			$html
		);
	}

	/**
	 * Cleans HTML that came from site data (a preset source, option labels
	 * generated from posts, terms or meta...) before it is printed inside a
	 * form. Visitors can write such data, e.g. through an Insert Post action.
	 *
	 * The frontend script finds its own instructions in the form markup:
	 * data-* attributes (data-jfb-macro, data-jfb-conditional, data-formula,
	 * data-value, data-validation-rules...), wrappers found by class
	 * (closest('.jet-form-builder__calculated-field')), "JFB_FIELD::" macros
	 * in attributes and in HTML comments. wp_kses_post() keeps all of them
	 * and does not close tags, so an unclosed <div> from the data would wrap
	 * the next fields of the form. Square brackets inside attribute values
	 * are decoded back by kses on WordPress 7+ and expanded by core
	 * do_shortcode() over the page.
	 *
	 * The value is parsed with wp_kses_post() - the same parser that prints
	 * it - then: tags are balanced, comments are removed, and from every tag
	 * service data-* attributes (see is_service_data_attribute(); other
	 * data-* attributes are kept), id, name and form attributes, attributes
	 * holding "JFB_FIELD::",
	 * class names of the plugin (jet-form-builder*, jet-fb-*, jfb-*) and
	 * square brackets in attribute values are removed (in URLs they are
	 * percent-encoded). Text, formatting tags, links and images are kept.
	 * Square brackets in text are left to neutralize_shortcodes().
	 *
	 * A value without markup is returned unchanged.
	 *
	 * @param string $html HTML from site data.
	 *
	 * @return string
	 */
	public static function sanitize_data_html( string $html ): string {
		// Only "<" followed by something a parser can take for a tag or a
		// comment ("<b", "< b", "</", "<!--", "<?"...): "5 < 6" stays as is.
		if ( ! preg_match( '/<[\x00-\x20]*[\/!?]?[\x00-\x20]*[a-z!?\/]/i', $html ) ) {
			return $html;
		}

		$html = force_balance_tags( wp_kses_post( $html ) );
		$html = (string) preg_replace( '/<!--.*?(?:-->|$)/s', '', $html );

		return (string) preg_replace_callback(
			'/<([a-z][a-z0-9-]*)(\s[^>]*?)?(\/?)>/i',
			static function ( $tag ) {
				$attributes = $tag[2] ?? '';

				if ( '' === trim( $attributes ) ) {
					return $tag[0];
				}

				$parsed  = wp_kses_hair( $attributes, wp_allowed_protocols() );
				$kept    = array();
				$changed = false;

				foreach ( $parsed as $name => $attribute ) {
					$value = self::clean_data_html_attribute( strtolower( (string) $name ), $attribute );

					if ( null === $value ) {
						$changed = true;
						continue;
					}

					if ( $value !== $attribute['value'] ) {
						$changed = true;
						$kept[]  = $name . '="' . esc_attr( $value ) . '"';
						continue;
					}

					$kept[] = $attribute['whole'];
				}

				if ( ! $changed ) {
					return $tag[0];
				}

				return '<' . $tag[1] . ( $kept ? ' ' . implode( ' ', $kept ) : '' ) . ( '' !== $tag[3] ? ' /' : '' ) . '>';
			},
			$html
		);
	}

	/**
	 * Whether a data-* attribute is one the scripts of JetFormBuilder, its
	 * add-ons or integrations read from the form markup (data-jfb-*,
	 * data-jet-*, data-formula, data-value, data-field-name, data-args...).
	 * Other data-* attributes (data-tooltip, data-src of a lazy image,
	 * data-bs-toggle...) belong to the site and are kept.
	 *
	 * A name is a service one when it starts with "data-jfb" or "data-jet",
	 * or is "data-{stem}" or "data-{stem}-..." / "data-{stem}_..." for a stem
	 * from the list below. The list can be changed with the
	 * jet-form-builder/data-html/service-data-attributes filter.
	 *
	 * @param string $name Lowercase attribute name.
	 *
	 * @return bool
	 */
	public static function is_service_data_attribute( string $name ): bool {
		if ( 0 !== strpos( $name, 'data-' ) ) {
			return false;
		}

		if ( preg_match( '/^data-(jfb|jet)/', $name ) ) {
			return true;
		}

		static $stems_cache = array();

		$stems = array(
			// Core: fields, conditions, calculations, validation, repeater, pages.
			'args', 'attrs', 'block', 'cache', 'calc', 'calculate', 'clear', 'custom',
			'default', 'dynamic', 'editor', 'empty', 'field', 'file', 'form', 'formula',
			'generator', 'index', 'inputmask', 'is', 'items', 'layout', 'listen',
			'manage', 'max', 'min', 'name', 'normalizer', 'page', 'precision',
			'repeater', 'require', 'required', 'save', 'sep', 'settings', 'switch',
			'type', 'update', 'validation', 'value',
			// Core: date, phone and map fields.
			'country', 'date', 'dial', 'exclude', 'intl', 'ipinfo', 'keep', 'lat',
			'lng', 'map', 'only', 'preferred', 'separate',
			// Integrations and add-ons (popups, booking, appointments, uploads,
			// hierarchical select, autocomplete, tokens...).
			'ajax', 'allowed', 'attachment', 'calendar', 'choice', 'config', 'display',
			'editable', 'fb', 'format', 'i', 'id', 'if', 'image', 'insert', 'level',
			'minimum', 'original-text', 'placeholder', 'popup', 'post', 'select',
			'slot', 'sortable', 'step', 'suggestions', 'taxonomy', 'term', 'token',
			'unit', 'units', 'upload',
		);

		/**
		 * Stems of data-* attribute names that scripts on the form page read
		 * as their own settings. Such attributes are removed from HTML that
		 * came from site data (preset results, generated option labels).
		 *
		 * @param string[] $stems
		 */
		$stems = (array) apply_filters( 'jet-form-builder/data-html/service-data-attributes', $stems );
		$key   = implode( '|', $stems );

		if ( ! isset( $stems_cache[ $key ] ) ) {
			$quoted = array_map(
				static function ( $stem ) {
					return preg_quote( strtolower( (string) $stem ), '/' );
				},
				array_filter( $stems, 'strlen' )
			);

			$stems_cache = array(
				$key => $quoted ? '/^data-(' . implode( '|', $quoted ) . ')([-_]|$)/' : '',
			);
		}

		return '' !== $stems_cache[ $key ] && (bool) preg_match( $stems_cache[ $key ], $name );
	}

	/**
	 * One attribute of sanitize_data_html().
	 *
	 * @param string $name      Lowercase attribute name.
	 * @param array  $attribute Item of wp_kses_hair().
	 *
	 * @return string|null New value, or null to remove the attribute.
	 */
	private static function clean_data_html_attribute( string $name, array $attribute ) {
		if (
			in_array( $name, array( 'id', 'name', 'form' ), true ) ||
			self::is_service_data_attribute( $name )
		) {
			return null;
		}

		$value   = (string) $attribute['value'];
		$decoded = html_entity_decode( $value, ENT_QUOTES | ENT_HTML5, 'UTF-8' );

		if ( false !== stripos( $decoded, 'JFB_FIELD::' ) ) {
			return null;
		}

		if ( 'class' === $name ) {
			$classes = preg_split( '/\s+/', trim( $value ) );
			$classes = array_filter(
				$classes,
				static function ( $class_name ) {
					return '' !== $class_name && ! preg_match( '/^(jet-form-builder|jet-fb-|jfb-|jfb_)/i', $class_name );
				}
			);

			return $classes ? implode( ' ', $classes ) : null;
		}

		if ( false === strpbrk( $decoded, '[]' ) ) {
			return $value;
		}

		// A URL keeps working with percent-encoded brackets.
		if ( in_array( $name, array( 'href', 'src', 'cite', 'srcset' ), true ) ) {
			return str_replace( array( '[', ']' ), array( '%5B', '%5D' ), $decoded );
		}

		return null;
	}

	/**
	 * Marks square brackets in a value that will be put into JSON printed in
	 * an HTML attribute (Dynamic Value groups, Conditional Block conditions,
	 * validation rules). Core do_shortcode() over the page runs a shortcode
	 * found in an attribute value, so a value from a preset (data visitors
	 * can write) must not carry raw brackets there, while values the form
	 * author wrote in the same JSON may hold a shortcode on purpose.
	 *
	 * Brackets of the value become the tokens, and encode_json_marked()
	 * writes them as the JSON escapes \u005B / \u005D: the attribute has no
	 * raw bracket, and JSON.parse() in the browser returns the same value.
	 *
	 * @param mixed $value  String, or a list of strings (other values as is).
	 * @param array $tokens See json_bracket_tokens().
	 *
	 * @return mixed
	 */
	public static function mark_json_brackets( $value, array $tokens ) {
		if ( is_array( $value ) ) {
			foreach ( $value as $key => $item ) {
				$value[ $key ] = self::mark_json_brackets( $item, $tokens );
			}

			return $value;
		}

		return is_string( $value ) ? strtr( $value, $tokens ) : $value;
	}

	/**
	 * Tokens for mark_json_brackets(): random per call, so text in the data
	 * cannot be taken for a token.
	 *
	 * @return array{"[": string, "]": string}
	 */
	public static function json_bracket_tokens(): array {
		$id = wp_generate_password( 16, false );

		return array(
			'[' => 'jfbLsqb' . $id,
			']' => 'jfbRsqb' . $id,
		);
	}

	/**
	 * JSON of $data where the tokens of mark_json_brackets() are written as
	 * the JSON escapes \u005B / \u005D.
	 *
	 * @param mixed $data
	 * @param array $tokens See json_bracket_tokens().
	 * @param int   $flags  wp_json_encode() flags, as encode_json() by default.
	 *
	 * @return string
	 */
	public static function encode_json_marked( $data, array $tokens, int $flags = JSON_UNESCAPED_UNICODE ): string {
		return str_replace(
			array( $tokens['['], $tokens[']'] ),
			array( '\u005B', '\u005D' ),
			(string) wp_json_encode( $data, $flags )
		);
	}

	/**
	 * Attributes that hold settings the form author may write with a
	 * shortcode on purpose (a formula, Dynamic Value, validation rules).
	 * Values a preset put into them are marked where the JSON is built, see
	 * mark_json_brackets().
	 */
	const AUTHOR_SHORTCODE_ATTRIBUTES = array( 'data-formula', 'data-value', 'data-dynamic-value', 'data-validation-rules' );

	/**
	 * Square brackets of an escaped attribute value, for an attribute printed
	 * in a form. Core do_shortcode() over the page runs a shortcode found in
	 * an attribute value of any tag (the output is kept only for some tags,
	 * but the callback runs), and field values, option values, the referrer
	 * URL can hold visitor data. The browser decodes the entities, so the
	 * value does not change. AUTHOR_SHORTCODE_ATTRIBUTES are left as they are.
	 *
	 * @param string $name  Attribute name.
	 * @param string $value Value escaped with esc_attr().
	 *
	 * @return string
	 */
	public static function neutralize_attribute_shortcodes( string $name, string $value ): string {
		if ( in_array( $name, self::AUTHOR_SHORTCODE_ATTRIBUTES, true ) ) {
			return $value;
		}

		return self::neutralize_shortcodes( $value );
	}

	/**
	 * Encodes square brackets as HTML entities so a value printed as element
	 * text cannot be expanded as a shortcode later. WordPress runs
	 * do_shortcode() over the whole rendered page (the_content, the
	 * [jet_fb_form] shortcode, page builders), after the form block has
	 * already been rendered.
	 *
	 * Hexadecimal entities are used on purpose: do_shortcode() ends with
	 * unescape_invalid_shortcodes(), which turns the decimal "&#91;"/"&#93;"
	 * back into brackets, so a second do_shortcode() pass (theme, page
	 * builder) would expand them. For the same reason decimal entities that
	 * are already in the value are converted too. The browser decodes all
	 * these forms the same way, so the visible text and the submitted value
	 * stay exactly the same.
	 *
	 * @param string $value Already escaped HTML text.
	 *
	 * @return string
	 */
	public static function neutralize_shortcodes( string $value ): string {
		return str_replace(
			array( '[', ']', '&#91;', '&#93;' ),
			array( '&#x5B;', '&#x5D;', '&#x5B;', '&#x5D;' ),
			$value
		);
	}

	public static function is_url( $url ) {
		return wp_http_validate_url( $url );
	}

	/**
	 * Input-side cleanup of a submitted string.
	 *
	 * NOT an output escaping function and not an XSS defence on its own:
	 * markup is filtered with wp_kses_post() only when the string contains
	 * "<", so quotes, "&", line breaks and URL schemes pass unchanged (they
	 * are legitimate text in form values). Every place that prints a value
	 * must escape it for its context (esc_attr, esc_html, esc_url,
	 * wp_kses_post...). See tests/wpunit/ToolsSanitizeInvariantsTest.php.
	 *
	 * @param mixed $source
	 * @param bool  $replace_enqueue Run wp_kses_post() when markup is present.
	 *
	 * @return string
	 */
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
			$key = is_string( $key ) ? self::sanitize_array_key( $key ) : $key;

			if ( array_key_exists( $key, $result ) ) {
				continue;
			}

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

	/**
	 * Check if string is a WordPress password hash
	 * Supports all WordPress hash formats:
	 * - Old Portable Hash: $P$...
	 * - Bcrypt: $2a$, $2y$...
	 *
	 * @param string $hash Password hash to check
	 * @return bool
	 */
	public static function is_wp_password_hash( $hash ) {
		if ( ! is_string( $hash ) || empty( $hash ) ) {
			return false;
		}

		// Old Portable Hash format: $P$[A-Za-z0-9./]{31}
		if ( preg_match( '/^\$P\$[A-Za-z0-9\.\/]{31}$/', $hash ) ) {
			return true;
		}

		// Bcrypt format: $2a$, $2x$, $2y$ followed by cost and hash
		if ( preg_match( '/^\$2[axy]\$\d{2}\$[A-Za-z0-9\.\/]{53}$/', $hash ) ) {
			return true;
		}

		return false;
	}

	public static function get_array_of_user_roles( $settings ) {
		if ( is_string( $settings ) ) {
			return '' === $settings ? array() : array( $settings );
		}

		if ( ! is_array( $settings ) ) {
			return array();
		}

		return $settings;
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
