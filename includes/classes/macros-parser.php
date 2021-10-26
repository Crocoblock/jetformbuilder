<?php


namespace Jet_Form_Builder\Classes;

use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Request\Request_Handler;

class Macros_Parser {

	/** @var Listing_Filter */
	private $filter;

	private $content;
	private $replacements;

	public function __construct() {
		$this->set_default_filter();
	}

	public function set_default_filter() {
		$this->set_custom_filter( ( new Listing_Filter_Manager() )->get_filter() );
	}

	public function set_custom_filter( $filter ) {
		$this->filter = $filter;

		return $this;
	}

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

		if ( ! $this->filter || ! $this->content || ! $this->replacements ) {
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
						return $this->filter->apply_filters(
							$this->replacements[ $match[1] ],
							$match[3]
						);
					} else {
						if ( is_array( $this->replacements[ $match[1] ] ) ) {
							if ( ! empty( $this->replacements[ Request_Handler::REPEATERS_SETTINGS ][ $match[1] ] ) ) {
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
