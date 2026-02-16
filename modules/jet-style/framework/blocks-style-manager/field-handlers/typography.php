<?php
namespace Crocoblock\Blocks_Style\Field_Handlers;

class Typography extends Base {

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
		$skip_keys = array( 'lh_unit', 'ls_unit', 's_unit' );

		foreach ( $parsed_values as $key => $value ) {

			if ( in_array( $key, $skip_keys, true ) ) {
				continue; // Skip legacy units.
			}

			if ( 'inherit' === $value ) {
				continue; // Skip inherit values.
			}

			$result[] = $full_name . '__' . $key . ':'.  $value;
		}

		return $result;
	}

	/**
	 * Get the parsed value.
	 *
	 * @return array
	 */
	public function get_parsed_value() {

		if ( isset( $this->raw_value['lineHeight'] ) ) {
			$this->raw_value['lineheight'] = $this->raw_value['lineHeight'];
		}

		return [
			'family'      => isset($this->raw_value['family']) ? $this->raw_value['family'] : 'inherit',
			'weight'      => isset($this->raw_value['weight']) ? $this->raw_value['weight'] : 'inherit',
			'transform'   => isset($this->raw_value['transform']) ? $this->raw_value['transform'] : 'inherit',
			'style'       => isset($this->raw_value['style']) ? $this->raw_value['style'] : 'inherit',
			'decoration'  => isset($this->raw_value['decoration']) ? $this->raw_value['decoration'] : 'inherit',
			'lineheight'  => isset($this->raw_value['lineheight']) ? $this->raw_value['lineheight'] : 'inherit',
			'lh_unit'     => '', // legacy from old SM for style decorations consistency
			'letterspacing' => isset($this->raw_value['letterSpacing']) ? $this->raw_value['letterSpacing'] : 'inherit',
			'ls_unit'     => '', // legacy from old SM for style decorations consistency
			'size'        => isset($this->raw_value['size']) ? $this->raw_value['size'] : 'inherit',
			's_unit'      => '', // legacy from old SM for style decorations consistency
		];
	}
}
