<?php


namespace Jet_Form_Builder\Classes;

use Jet_Form_Builder\Classes\Filters\Filters_Manager;

class Macros_Parser {

	private $content;
	private $replacements;

	public function set_content( $content ) {
		if ( ! $content ) {
			return $this;
		}
		$this->content = $content;

		return $this;
	}

	public function set_replacements( $replacements ) {
		if ( ! $replacements ) {
			return $this;
		}
		$this->replacements = $replacements;

		return $this;
	}

	public function parse_macros( $content = false, $replacements = false ) {
		$this->set_content( $content )->set_replacements( $replacements );

		if ( ! $this->content || ! $this->replacements ) {
			return $this->content ?: '';
		}

		return $this->macros_replace();
	}

	/**
	 * Parse macros in content
	 *
	 * @param  [type] $content [description]
	 *
	 * @return [type]          [description]
	 */
	public function macros_replace() {

		return preg_replace_callback(
			'/%(.*?)(\|([a-zA-Z0-9\(\)\.\,\:\/\s_-]+))?%/',
			function ( $match ) {

				if ( isset( $this->replacements[ $match[1] ] ) ) {

					if ( ! empty( $match[3] ) ) {
						return Filters_Manager::instance()->apply(
							$this->replacements[ $match[1] ],
							$match[3]
						);
					} else {
						if ( is_array( $this->replacements[ $match[1] ] ) ) {
							if ( jet_fb_request_handler()->is_type( $match[1], 'repeater-field' ) ) {
								return $this->verbose_repeater( $this->replacements[ $match[1] ] );
							} else {
								return implode( ', ', $this->replacements[ $match[1] ] );
							}
						} else {
							return $this->replacements[ $match[1] ];
						}
					}
				} else {
					return $match[0];
				}
			},
			$this->content
		);

	}

	/**
	 * Verbose repeater items array
	 *
	 * @param array $items
	 *
	 * @return string
	 */
	public function verbose_repeater( $items = array() ) {

		$result = '';
		$index  = 1;

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
