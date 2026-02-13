<?php
namespace Crocoblock\Blocks_Style\Field_Handlers;

class Border extends Base {

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

		$values = $this->get_parsed_value();
		$result = array();

		if ( ! empty( $values['radius'] ) ) {

			$radius = '';

			if ( is_string( $values['radius'] ) ) {
				$radius = $values['radius'];
			} else {
				$props_order = [
					'topLeft',
					'topRight',
					'bottomRight',
					'bottomLeft',
				];

				foreach ( $props_order as $prop ) {
					$radius .= isset( $values['radius'][ $prop ] ) ? $values['radius'][ $prop ] . ' ' : '0 ';
				}

				$radius = trim( $radius );
			}

			$result[] = $full_name . '__radius: ' . $radius;
		}

		if ( ! empty( $values['border'] ) && is_array( $values['border'] ) ) {

			$global = isset( $values['border']['global'] ) ? $values['border']['global'] : [];
			$sides  = [ 'top', 'right', 'bottom', 'left' ];

			foreach ( $sides as $side ) {
				$side_props = isset( $values['border'][ $side ] ) && is_array( $values['border'][ $side ] )
					? $values['border'][ $side ]
					: [];

				$color = isset( $side_props['color'] ) ? $side_props['color'] : ( isset( $global['color'] ) ? $global['color'] : 'transparent' );
				$width = isset( $side_props['width'] ) ? $side_props['width'] : ( isset( $global['width'] ) ? $global['width'] : '0' );
				$style = isset( $side_props['style'] ) ? $side_props['style'] : ( isset( $global['style'] ) ? $global['style'] : 'solid' );

				$result[] = $full_name . '__' . $side . ': ' . $width . ' ' . $style . ' ' . $color;
			}
		}

		return $result;
	}

	/**
	 * Get the parsed value.
	 *
	 * @return array
	 */
	public function get_parsed_value() {
		if ( ! $this->raw_value ) {
			return [
				'border' => [],
				'radius' => [],
			];
		} else {
			return [
				'border' => $this->parse_border_value(isset($this->raw_value['border']) ? $this->raw_value['border'] : null),
				'radius' => isset($this->raw_value['radius']) ? $this->raw_value['radius'] : null,
			];
		}
	}

	/**
	 * Parse the border value.
	 *
	 * @param mixed $value The raw border value.
	 * @return array Parsed border value.
	 */
	public function parse_border_value($value) {

		if ( ! $value ) {
			return [];
		}

		if ( isset($value['color']) || isset($value['width']) || isset($value['style']) ) {
			return [
				'global' => [
					'color' => isset($value['color']) ? $value['color'] : 'inherit',
					'width' => isset($value['width']) ? $value['width'] : 'inherit',
					'style' => isset($value['style']) ? $value['style'] : 'inherit',
				]
			];
		} else {
			return $value;
		}
	}

	/**
	 * Get parsed properties for CSS.
	 * We ignore the $rule_string parameter as it is not used for this type of field.
	 *
	 * @param string $rule_string Properties to parse.
	 * @return string Parsed CSS properties.
	 */
	public function get_css_rule( $rule_string = '' ) {

		$values = $this->get_parsed_value();

		$result = '';

		if ( isset($values['border']) && is_array($values['border']) ) {
			foreach ( $values['border'] as $key => $value ) {
				if ( $key === 'global' ) {
					$result .= $this->get_border_css($value);
				} else {
					$result .= $this->get_border_css($value, $key);
				}
			}
		}

		if ( isset($values['radius']) ) {
			if ( is_array($values['radius']) ) {
				$props_map = [
					'border-top-left-radius'     => 'topLeft',
					'border-top-right-radius'    => 'topRight',
					'border-bottom-right-radius' => 'bottomRight',
					'border-bottom-left-radius'  => 'bottomLeft',
				];

				foreach ( $props_map as $css_prop => $radius_key ) {
					if ( isset($values['radius'][$radius_key]) ) {
						$result .= $css_prop . ': ' . $values['radius'][$radius_key] . ';';
					}
				}
			} else {
				$result .= 'border-radius: ' . $values['radius'] . ';';
			}
		}

		return $result;
	}

	/**
	 * Get CSS for border properties by key.
	 *
	 * @param array $props Properties to generate CSS for.
	 * @param string $key Optional key for specific border side.
	 * @return string Generated CSS string.
	 */
	public function get_border_css($props, $key = '') {
		$css = '';

		if ( $key ) {
			$key = '-' . $key;
		} else {
			$key = '';
		}

		if ( isset($props['color']) ) {
			$css .= "border{$key}-color: " . $props['color'] . ";";
		}

		if ( isset($props['width']) ) {
			$css .= "border{$key}-width: " . $props['width'] . ";";
		}

		if ( isset($props['style']) ) {
			$css .= "border{$key}-style: " . $props['style'] . ";";
		}

		return $css;
	}
}
