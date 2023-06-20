<?php


namespace Jet_Form_Builder\Classes;

use Jet_Form_Builder\Classes\Filters\Filters_Manager;
use Jet_Form_Builder\Classes\Macro_Constants\Constants_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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

		if ( ! $this->content || ( ! $this->replacements && ! jet_fb_context()->has_request() ) ) {
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

					return Filters_Manager::instance()->apply( $value, $filters );
				}

				if ( ! $this->has_replace( $name ) ) {
					return $replace_match[0];
				}

				$value = $this->get_replace( $name );

				if ( ! empty( $filters ) ) {
					return Filters_Manager::instance()->apply( $value, $filters );
				}

				if ( ! is_array( $value ) ) {
					return $value;
				}

				if ( 'repeater-field' === jet_fb_context()->get_field_type( $name ) ) {
					return $this->verbose_repeater( $value, $name );
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
	 * @param $name
	 *
	 * @return string
	 */
	protected function verbose_repeater( array $items, $name ) {

		$result  = apply_filters( 'jet-form-builder/send-email/template-repeater', '', $items, $this, $name );
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

}
