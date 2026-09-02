<?php


namespace Jet_Form_Builder\Form_Messages;

use Jet_Form_Builder\Classes\Tools;
use JFB_Modules\Rich_Content\Macros_Parser;
use JFB_Modules\Rich_Content\Module as Rich_Content_Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Message_Content_Processor {

	/**
	 * @var Rich_Content_Module
	 */
	private $rich_content;

	/**
	 * @param Rich_Content_Module|null $rich_content
	 */
	public function __construct( $rich_content = null ) {
		$this->rich_content = $rich_content instanceof Rich_Content_Module
			? $rich_content
			: new Rich_Content_Module();
	}

	/**
	 * Process a message template loaded from saved form/action settings.
	 *
	 * Runtime values are always treated as data. Only active syntax present in the
	 * original template is interpreted, and preset/shortcode modes are mutually
	 * exclusive to prevent cross-parser injection.
	 */
	public function prepare_trusted( string $message, array $replacements = array() ): string {
		if ( $this->is_dynamic_preset_template( $message ) ) {
			$content = $this->rich_content->apply_dynamic_preset( $message );
		} else {
			$runtime_values = array();
			$content        = $this->tokenize_macros( $message, $replacements, $runtime_values );
			$content        = $this->apply_shortcodes( $content, $runtime_values );
			$content        = $this->restore_runtime_values( $content, $runtime_values );
		}

		return $this->finalize( $content );
	}

	/**
	 * Process a dynamic or unknown status body.
	 *
	 * The body may originate in the request or an external action, so it must not
	 * enter any active parser.
	 */
	public function prepare_untrusted( string $message ): string {
		return $this->finalize( $message );
	}

	public function prepare_macros( string $message, array $replacements = array() ): string {
		$runtime_values = array();
		$content        = $this->tokenize_macros( $message, $replacements, $runtime_values );

		return $this->restore_runtime_values( $content, $runtime_values );
	}

	/**
	 * Replace every runtime macro with a unique token before shortcode parsing.
	 *
	 * A token is bound to its value only after WordPress has fixed the shortcode
	 * tag and attribute structure. This prevents values from completing a tag name
	 * or escaping a quoted attribute while preserving macros used as attribute data.
	 */
	private function tokenize_macros(
		string $message,
		array $replacements,
		array &$runtime_values
	): string {
		$parser  = new Macros_Parser();
		$content = preg_replace_callback(
			'/%([\w\-].*?\S?)%/',
			function ( array $match ) use ( $parser, $replacements, $message, &$runtime_values ) {
				$token = $this->generate_runtime_token( $message, $runtime_values );
				$value = $parser->parse_macros( $match[0], $replacements );

				$runtime_values[ $token ] = $this->neutralize_shortcodes( $value );

				return $token;
			},
			$message
		);

		return is_string( $content ) ? $content : '';
	}

	private function generate_runtime_token( string $message, array $runtime_values ): string {
		do {
			$token = 'jfbmacro' . str_replace( '-', '', wp_generate_uuid4() );
		} while ( false !== strpos( $message, $token ) || isset( $runtime_values[ $token ] ) );

		return $token;
	}

	/**
	 * Execute shortcodes while runtime values remain outside shortcode grammar.
	 *
	 * WordPress has already parsed the tag and its attributes when this late
	 * pre_do_shortcode_tag callback runs. The callback therefore receives restored
	 * values as data, not as source text that can add tags or attributes.
	 */
	private function apply_shortcodes( string $content, array $runtime_values ): string {
		if ( ! $runtime_values ) {
			return $this->rich_content->apply_shortcodes( $content );
		}

		$interceptor = function ( $return, $tag, $attributes, $match ) use ( $runtime_values ) {
			if ( false !== $return || ! $this->contains_runtime_token( $match, $runtime_values ) ) {
				return $return;
			}

			global $shortcode_tags;

			if ( empty( $shortcode_tags[ $tag ] ) || ! is_callable( $shortcode_tags[ $tag ] ) ) {
				return $return;
			}

			$resolved_attributes = $this->restore_callback_values( $attributes, $runtime_values );
			$content             = $match[5] ?? null;
			$resolved_content    = is_null( $content )
				? null
				: $this->restore_callback_values( $content, $runtime_values );
			$output              = $match[1] . call_user_func(
				$shortcode_tags[ $tag ],
				$resolved_attributes,
				$resolved_content,
				$tag
			) . $match[6];

			// Core skips do_shortcode_tag after a pre_do_shortcode_tag short circuit.
			return apply_filters(
				'do_shortcode_tag',
				$output,
				$tag,
				$resolved_attributes,
				$match
			);
		};

		add_filter( 'pre_do_shortcode_tag', $interceptor, PHP_INT_MAX, 4 );

		try {
			return $this->rich_content->apply_shortcodes( $content );
		} finally {
			remove_filter( 'pre_do_shortcode_tag', $interceptor, PHP_INT_MAX );
		}
	}

	private function contains_runtime_token( $value, array $runtime_values ): bool {
		if ( is_array( $value ) ) {
			foreach ( $value as $item ) {
				if ( $this->contains_runtime_token( $item, $runtime_values ) ) {
					return true;
				}
			}

			return false;
		}

		if ( ! is_string( $value ) ) {
			return false;
		}

		foreach ( $runtime_values as $token => $runtime_value ) {
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
	 * keep that value tokenized until the outer shortcode has finished. It is then
	 * restored as text and neutralized by finalize().
	 */
	private function restore_callback_values( $value, array $runtime_values ) {
		if ( is_array( $value ) ) {
			foreach ( $value as $key => $item ) {
				$value[ $key ] = $this->restore_callback_values( $item, $runtime_values );
			}

			return $value;
		}

		if ( ! is_string( $value ) ) {
			return $value;
		}

		$resolved = $this->restore_runtime_values( $value, $runtime_values );

		return $this->introduces_registered_shortcode( $value, $resolved ) ? $value : $resolved;
	}

	private function restore_runtime_values( string $content, array $runtime_values ): string {
		return $runtime_values ? strtr( $content, $runtime_values ) : $content;
	}

	private function introduces_registered_shortcode( string $before, string $after ): bool {
		$before_tags = $this->get_registered_shortcode_counts( $before );
		$after_tags  = $this->get_registered_shortcode_counts( $after );

		foreach ( $after_tags as $tag => $count ) {
			if ( $count > ( $before_tags[ $tag ] ?? 0 ) ) {
				return true;
			}
		}

		return false;
	}

	private function get_registered_shortcode_counts( string $content ): array {
		global $shortcode_tags;

		if ( false === strpos( $content, '[' ) || empty( $shortcode_tags ) ) {
			return array();
		}

		preg_match_all(
			'@\[([^<>&/\[\]\x00-\x20=]++)@',
			$content,
			$matches
		);

		$tags = array_intersect( array_keys( $shortcode_tags ), $matches[1] ?? array() );

		return array_count_values( $tags );
	}

	private function is_dynamic_preset_template( string $message ): bool {
		$decoded = json_decode( $message, true );

		return is_array( $decoded ) && ! empty( $decoded['jet_preset'] );
	}

	/**
	 * Keep literal brackets visible while preventing this value from introducing
	 * shortcode syntax into a trusted template.
	 */
	private function neutralize_shortcodes( string $content ): string {
		return str_replace(
			array( '[', ']' ),
			array( '&#91;', '&#93;' ),
			$content
		);
	}

	private function finalize( $content ): string {
		$content = Tools::to_string( $content );
		$content = wp_kses_post( $content );

		return $this->neutralize_shortcodes( $content );
	}
}
