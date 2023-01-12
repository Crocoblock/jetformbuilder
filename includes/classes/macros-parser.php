<?php


namespace Jet_Form_Builder\Classes;

use Jet_Form_Builder\Classes\Filters\Filters_Manager;
use Jet_Form_Builder\Classes\Macro_Constants\Constants_Manager;

class Macros_Parser {

	private $content      = '';
	private $replacements = array();

	public function set_content( $content ): Macros_Parser {
		if ( is_array( $content ) ) {
			$content = $content[0] ?? '';
		}

		if ( ! $content || ! is_string( $content ) ) {
			return $this;
		}
		$this->content = $content;

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

		if ( ! $this->content || ! $this->replacements ) {
			return $this->content ?: '';
		}

		return $this->macros_replace();
	}

	/**
	 * Parse macros in content
	 *
	 * @return string
	 */
	public function macros_replace(): string {
		Constants_Manager::instance();

		$content = preg_replace_callback(
			'/%(.+?)%/',
			function ( $match ) {
				$filters = explode( '|', $match[1] );
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
						return $match[0];
					}

					return Filters_Manager::instance()->apply( $value, $filters );
				}

				if ( ! isset( $this->replacements[ $name ] ) ) {
					return $match[0];
				}

				$value = $this->replacements[ $name ];

				if ( ! empty( $filters ) ) {
					return Filters_Manager::instance()->apply( $value, $filters );
				}

				if ( ! is_array( $value ) ) {
					return $value;
				}

				if ( jet_fb_request_handler()->is_type( $name, 'repeater-field' ) ) {
					return $this->verbose_repeater( $value );
				} else {
					return implode( ', ', $value );
				}
			},
			$this->content
		);

		return is_string( $content ) ? $content : '';
	}

	/**
	 * Verbose repeater items array
	 *
	 * @param array $items
	 *
	 * @return string
	 */
	public function verbose_repeater( $items = array() ) {

		$result = apply_filters( 'jet-form-builder/send-email/template-repeater', '', $items, $this );
		$index  = 1;

		if ( $result ) {
			return $result;
		}

		foreach ( $items as $item ) {
			$item_data = array();

			foreach ( $item as $key => $value ) {
				$item_data[] = sprintf( '%1$s: %2$s', $key, $this->maybe_parse_if_array( $value ) );
			}
			$result .= $index ++ . ') ' . implode( ', ', $item_data ) . ';<br>';
		}

		return $result;

	}

	private function maybe_parse_if_array( $value ) {
		if ( is_array( $value ) ) {
			return implode( ', ', $value );
		}

		return $value;
	}

}
