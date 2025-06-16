<?php
namespace Crocoblock\Blocks_Style\Field_Handlers;

class Base {

	protected $raw_value = '';

	/**
	 * Constructor
	 *
	 * @param string $raw_value Raw value to be parsed.
	 */
	public function __construct( $raw_value = '' ) {
		$this->raw_value = $raw_value;
	}

	/**
	 * Get the parsed value.
	 *
	 * @return array
	 */
	public function get_parsed_value() {
		return array(
			'value' => $this->raw_value,
		);
	}

	/**
	 * String with CSS variable macros.
	 * Should be rewritten in the classes with multiple parameters
	 * returned by get_parsed_value() method.
	 */
	public function css_var_value_format() {
		return '{{VALUE}}';
	}

	/**
	 * Replace data in the string with CSS variable macros.
	 *
	 * @param string $string String with macros.
	 * @param array  $data   Data to replace in the string.
	 *
	 * @return array
	 */
	public function parse_variable( $variable = array() ) {

		$prefix = isset($variable['prefix']) ? $variable['prefix'] : '';
		$name   = isset($variable['name']) ? $variable['name'] : false;
		$full_name = isset($variable['full_name']) ? $variable['full_name'] : $prefix . '-' . $name;

		if ( ! $full_name ) {
			return array();
		}

		if ( isset( $variable['suffix'] ) ) {
			$full_name .= $variable['suffix'];
		}

		$parsed_values = $this->get_parsed_value();
		$result = array();

		if ( ! empty( $parsed_values['value'] ) ) {
			$result[] = $full_name . ':' . $parsed_values['value'];
		} else {
			$result[] = $full_name . ':' . self::replace_data( $this->css_var_value_format(), $parsed_values );
		}

		return $result;
	}

	/**
	 * Parses data with macros.
	 *
	 * @param string $data Data to parse.
	 * @param array  $macros Macros to replace.
	 * @return string Parsed data.
	 */
	public static function replace_data( $data = '', $macros = array() ) {

		if ( empty( $data ) || ! is_string( $data ) ) {
			return '';
		}

		if ( ! empty( $macros ) && is_array( $macros ) ) {
			$data = preg_replace_callback(
				'/\{\{\s*([\w-]+)\s*\}\}/',
				function ( $matches ) use ( $macros ) {
					$key = strtolower( $matches[1] );
					return isset( $macros[ $key ] ) ? $macros[ $key ] : '';
				},
				$data
			);
		}

		return trim( $data );
	}

	/**
	 * Get CSS rule string with replaced macros.
	 *
	 * @param string $rule_string String with CSS rule and macros.
	 * @return string Parsed CSS rule.
	 */
	public function get_css_rule( $rule_string = '' ) {
		$parsed_values = $this->get_parsed_value();

		if ( empty( $parsed_values ) || ! is_array( $parsed_values ) ) {
			return '';
		}

		return self::replace_data( $rule_string, $parsed_values );
	}
}