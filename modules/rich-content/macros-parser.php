<?php


namespace JFB_Modules\Rich_Content;

use Jet_Form_Builder\Classes\Filters\Filters_Manager;
use Jet_Form_Builder\Classes\Macro_Constants\Constants_Manager;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Macros_Parser {

	/**
	 * The one, canonical definition of `%field_name%`/custom-macro/
	 * filter-chain macro syntax. Module::tokenize_submit_macros() (which
	 * must tokenize every segment this class would resolve, before
	 * do_shortcode() runs - see issues-tracker #20703) references this
	 * constant instead of its own copy of the pattern, so the two can never
	 * drift out of sync - a drift that could otherwise let a macro
	 * Macros_Parser still resolves slip past tokenization and reopen that
	 * same injection.
	 */
	const MACRO_PATTERN = '/%([\w\-].*?\S?)%/';

	private $content       = '';
	private $replacements  = array();
	private $current_macro = '';

	/**
	 * Whether the most recent parse_macros() call actually substituted at
	 * least one `%...%` occurrence for a field/custom-macro value, as opposed
	 * to returning the content unchanged because nothing matched it.
	 *
	 * Callers that need to tell "resolved to a value identical to its own
	 * `%name%` syntax" apart from "left untouched, no matching field/macro"
	 * must use this flag instead of comparing the input/output strings -
	 * see Module::tokenize_submit_macros(), which tokenizes a submitted
	 * value before do_shortcode() and would otherwise skip tokenizing (and
	 * so skip neutralizing) a submitted value that happens to equal its own
	 * macro syntax, e.g. a field named `jfbname` submitted with the literal
	 * value `%jfbname%`.
	 *
	 * @var bool
	 */
	private $resolved_last = false;

	public function set_content( $content ): Macros_Parser {
		if ( is_array( $content ) ) {
			$content = $content[0] ?? '';
		}

		$this->content = Tools::to_string( $content );

		return $this;
	}

	public function set_replacements( $replacements ): Macros_Parser {
		if ( ! $replacements ) {
			return $this;
		}
		$this->replacements = $replacements;

		return $this;
	}

	public function parse_macros( $content = false, $replacements = false ): string {
		$this->set_content( $content )->set_replacements( $replacements );
		$this->resolved_last = false;

		if ( ! $this->content || ( ! $this->replacements && ! jet_fb_context()->has_request() ) ) {
			return $this->content ?: '';
		}

		return $this->macros_replace();
	}

	/**
	 * @see $resolved_last
	 *
	 * @return bool
	 */
	public function has_resolved_last(): bool {
		return $this->resolved_last;
	}

	/**
	 * Parse macros in content
	 *
	 * @return string
	 */
	public function macros_replace(): string {
		Constants_Manager::instance();

		$content = preg_replace_callback(
			self::MACRO_PATTERN,
			function ( $replace_match ) {
				$filters = explode( '|', $replace_match[1] );
				$name    = $filters[0];
				array_shift( $filters );

				if ( false !== strpos( $name, '::' ) ) {
					$value = apply_filters(
						'jet-form-builder/custom-macro',
						null,
						$name,
						$this
					);

					if ( is_null( $value ) ) {
						return $replace_match[0];
					}

					// Set after apply() (which runs formatting filters, not another
					// parse_macros() pass, but may still run arbitrary third-party
					// code via Filters_Manager) has already produced the final
					// return value, so nothing this branch calls can run a nested
					// parse_macros() on this same shared instance and clobber the
					// flag before it is read for THIS match.
					$final                = Filters_Manager::instance()->apply( $value, $filters );
					$this->resolved_last = true;

					return $final;
				}

				if ( ! $this->has_replace( $name ) ) {
					return $replace_match[0];
				}

				$this->current_macro = $name;
				$value               = $this->get_replace( $name );

				// $final is computed in full - running whichever of these branches
				// applies, including any third-party code a formatting filter or
				// Filters_Manager::apply() runs - before resolved_last is set, same
				// reasoning as the custom-macro branch above: nothing between here
				// and the return below gets a chance to run a nested parse_macros()
				// on this same shared instance and clobber the flag first.
				if ( ! empty( $filters ) ) {
					$final = Filters_Manager::instance()->apply( $value, $filters );
				} elseif ( ! is_array( $value ) ) {
					$final = $value;
				} elseif ( 'repeater-field' === jet_fb_context()->get_field_type( $name ) ) {
					$final = $this->verbose_repeater( $value, $name );
				} else {
					$final = implode( ', ', $value );
				}

				$this->resolved_last = true;

				return $final;
			},
			$this->content
		);

		return is_string( $content ) ? $content : '';
	}

	/**
	 * Verbose repeater items array
	 *
	 * @param array $items
	 * @param $name
	 *
	 * @return string
	 */
	protected function verbose_repeater( array $items, $name ) {

		$result  = apply_filters( 'jet-form-builder/send-email/template-repeater', '', $items, $this );
		$counter = 1;

		if ( $result ) {
			return $result;
		}

		foreach ( $items as $index => $item ) {
			$item_data = array();

			foreach ( $item as $key => $value ) {
				$label = jet_fb_context()->get_setting( 'label', array( $name, $index, $key ) );

				$item_data[] = sprintf(
					'%1$s: %2$s',
					$label ?: $key,
					$this->maybe_parse_if_array( $value )
				);
			}
			$result .= ( $counter++ ) . ') ' . implode( ', ', $item_data ) . ';<br>';
		}

		return $result;
	}

	private function maybe_parse_if_array( $value ) {
		if ( is_array( $value ) ) {
			return implode( ', ', $value );
		}

		return $value;
	}

	protected function has_replace( string $name ): bool {
		if ( ! empty( $this->replacements ) ) {
			return isset( $this->replacements[ $name ] );
		}

		return jet_fb_context()->has_field( $name );
	}

	protected function get_replace( string $name ) {
		if ( ! empty( $this->replacements ) ) {
			return $this->replacements[ $name ] ?? '';
		}

		return jet_fb_context()->get_value( $name );
	}

	/**
	 * @return string
	 */
	public function get_current_macro(): string {
		return $this->current_macro;
	}

}
