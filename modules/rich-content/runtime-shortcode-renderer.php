<?php


namespace JFB_Modules\Rich_Content;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Runs shortcodes over a template whose runtime (request-derived) values were
 * replaced by unique tokens beforehand.
 *
 * WordPress has already parsed the tag and its attributes when the late
 * pre_do_shortcode_tag interceptor runs, so the shortcode callback receives
 * restored values as data, never as source text that can add tags, close a
 * tag or escape a quoted attribute.
 *
 * Shared by Module::apply_shortcodes() (Send Email, Call Webhook, Redirect To
 * Page, Media limits, PDF add-on) and Message_Content_Processor (form status
 * messages), so both sinks keep exactly the same guarantees.
 *
 * @see Module::apply_shortcodes()
 * @see \Jet_Form_Builder\Form_Messages\Message_Content_Processor
 */
class Runtime_Shortcode_Renderer {

	const TOKEN_PREFIX = 'jfbmacro';

	public static function generate_token( string $content, array $existing ): string {
		do {
			$token = self::TOKEN_PREFIX . str_replace( '-', '', wp_generate_uuid4() );
		} while ( false !== strpos( $content, $token ) || array_key_exists( $token, $existing ) );

		return $token;
	}

	/**
	 * @param string $content Tokenized template.
	 * @param array $values Token => runtime value.
	 * @param callable $do_shortcode Receives the tokenized content, returns parsed content.
	 *
	 * @return string Parsed content. Tokens outside shortcode callbacks are left in place,
	 *                the caller restores them with restore().
	 */
	public static function do_shortcode( string $content, array $values, callable $do_shortcode ): string {
		if ( ! $values ) {
			return $do_shortcode( $content );
		}

		$interceptor = function ( $pre, $tag, $attributes, $shortcode_match ) use ( $values ) {
			if ( false !== $pre || ! self::contains_token( $shortcode_match, $values ) ) {
				return $pre;
			}

			global $shortcode_tags;

			if ( empty( $shortcode_tags[ $tag ] ) || ! is_callable( $shortcode_tags[ $tag ] ) ) {
				return $pre;
			}

			$resolved_attributes = self::restore_callback_values( $attributes, $values );
			$enclosed            = $shortcode_match[5] ?? null;
			$resolved_enclosed   = is_null( $enclosed )
				? null
				: self::restore_callback_values( $enclosed, $values );
			$output              = $shortcode_match[1] . call_user_func(
				$shortcode_tags[ $tag ],
				$resolved_attributes,
				$resolved_enclosed,
				$tag
			) . $shortcode_match[6];

			// Core skips do_shortcode_tag after a pre_do_shortcode_tag short circuit.
			return apply_filters(
				'do_shortcode_tag',
				$output,
				$tag,
				$resolved_attributes,
				$shortcode_match
			);
		};

		add_filter( 'pre_do_shortcode_tag', $interceptor, PHP_INT_MAX, 4 );

		try {
			return $do_shortcode( $content );
		} finally {
			remove_filter( 'pre_do_shortcode_tag', $interceptor, PHP_INT_MAX );
		}
	}

	public static function restore( string $content, array $values ): string {
		return $values ? strtr( $content, $values ) : $content;
	}

	/**
	 * Registered shortcode tags that occur more often in $after than in $before.
	 *
	 * @param string $before
	 * @param string $after
	 *
	 * @return string[]
	 */
	public static function get_introduced_shortcodes( string $before, string $after ): array {
		$before_tags = self::get_registered_shortcode_counts( $before );
		$introduced  = array();

		foreach ( self::get_registered_shortcode_counts( $after ) as $tag => $count ) {
			if ( $count > ( $before_tags[ $tag ] ?? 0 ) ) {
				$introduced[] = (string) $tag;
			}
		}

		return $introduced;
	}

	private static function contains_token( $value, array $values ): bool {
		if ( is_array( $value ) ) {
			foreach ( $value as $item ) {
				if ( self::contains_token( $item, $values ) ) {
					return true;
				}
			}

			return false;
		}

		if ( ! is_string( $value ) || false === strpos( $value, self::TOKEN_PREFIX ) ) {
			return false;
		}

		foreach ( $values as $token => $runtime_value ) {
			if ( false !== strpos( $value, $token ) ) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Restore tokens only in parsed values, never in shortcode tag/attribute names.
	 *
	 * If restoration would assemble another registered shortcode inside a value,
	 * the callback gets the value with its square brackets entity-encoded, so a
	 * callback that runs do_shortcode() on its content cannot execute it. The
	 * value is never withheld as a token and restored raw after the callback
	 * returns: that would skip the callback's own esc_attr()/esc_html() (or any
	 * other transformation) and insert unescaped submitted data into its output.
	 *
	 * @param mixed $value
	 * @param array $values
	 *
	 * @return mixed
	 */
	private static function restore_callback_values( $value, array $values ) {
		if ( is_array( $value ) ) {
			foreach ( $value as $key => $item ) {
				$value[ $key ] = self::restore_callback_values( $item, $values );
			}

			return $value;
		}

		if ( ! is_string( $value ) ) {
			return $value;
		}

		$resolved = self::restore( $value, $values );

		if ( ! self::get_introduced_shortcodes( $value, $resolved ) ) {
			return $resolved;
		}

		// Encode only the runtime values first, so admin-authored nested
		// shortcodes around the macro keep working.
		$neutralized = self::restore( $value, array_map( array( self::class, 'encode_brackets' ), $values ) );

		if ( ! self::get_introduced_shortcodes( $value, $neutralized ) ) {
			return $neutralized;
		}

		// A value without brackets of its own still completed a tag together
		// with the template's brackets (e.g. `[%field%]`): encode the whole value.
		return self::encode_brackets( $resolved );
	}

	/**
	 * @param mixed $value
	 *
	 * @return mixed
	 */
	private static function encode_brackets( $value ) {
		return is_string( $value )
			? str_replace( array( '[', ']' ), array( '&#91;', '&#93;' ), $value )
			: $value;
	}

	/**
	 * Counts only occurrences do_shortcode() would actually parse as a
	 * registered shortcode - a complete `[tag]`/`[tag ...]`/`[tag /]`, not
	 * merely an opening bracket followed by a registered tag's name. An
	 * earlier, hand-rolled pattern (just "[" + tag name) also matched an
	 * incomplete fragment like a submitted value containing literal text
	 * "[gallery" with no closing "]": get_introduced_shortcodes() would then
	 * treat that fragment as a newly "introduced" shortcode and withhold the
	 * value from the callback (replacing it with its still-tokenized form),
	 * even though WordPress itself would never have parsed it as one. Using
	 * core's own get_shortcode_regex() keeps this in sync with what
	 * do_shortcode() actually recognizes.
	 *
	 * Enclosed content is counted recursively: a single match consumes the
	 * whole `[outer]...[/outer]`, and a callback that runs do_shortcode() on
	 * its content would still execute a shortcode nested inside it.
	 *
	 * @param string $content
	 *
	 * @return array<string, int>
	 */
	private static function get_registered_shortcode_counts( string $content ): array {
		global $shortcode_tags;

		if ( false === strpos( $content, '[' ) || empty( $shortcode_tags ) ) {
			return array();
		}

		preg_match_all(
			'/' . get_shortcode_regex( array_keys( $shortcode_tags ) ) . '/',
			$content,
			$matches,
			PREG_SET_ORDER
		);

		$counts = array();

		foreach ( $matches as $match ) {
			// `[[tag]]` is printed literally by do_shortcode_tag(), together
			// with anything it encloses. Both brackets are required, exactly
			// as in core: `[[tag]` and `[tag]]` still execute.
			if ( '[' === $match[1] && ']' === $match[6] ) {
				continue;
			}

			$counts[ $match[2] ] = ( $counts[ $match[2] ] ?? 0 ) + 1;

			if ( empty( $match[5] ) ) {
				continue;
			}

			foreach ( self::get_registered_shortcode_counts( $match[5] ) as $tag => $count ) {
				$counts[ $tag ] = ( $counts[ $tag ] ?? 0 ) + $count;
			}
		}

		return $counts;
	}
}
