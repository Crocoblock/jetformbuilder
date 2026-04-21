<?php
namespace Crocoblock\Blocks_Style\Migrator;

class Data_Normalizer {

	private const EDGES = [ 'top', 'right', 'bottom', 'left' ];
	private $input_data;
	private $current_key;

	/**
	 * Convert old data to new format.
	 *
	 * @param array $data The data to convert.
	 * @return array The normalized JSON string.
	 */
	public function normalize( array $data ): array {

		$normalized = [];
		$this->input_data = $data;

		$normalized_tablet = [];
		$normalized_mobile = [];

		foreach ( $data as $key => $item ) {
			if ( ! isset( $item['value'] ) ) {
				continue;
			}

			$this->current_key = $key;

			$value = $item['value'];

			$normalized[ $key ] = $this->get_normalized_value( $value, $key );

			if ( ! empty( $item['tablet'] ) ) {
				$normalized_tablet[ $key ] = $this->get_normalized_value( $item['tablet'], $key );
			}

			if ( ! empty( $item['mobile'] ) ) {
				$normalized_mobile[ $key ] = $this->get_normalized_value( $item['mobile'], $key );
			}
		}

		$this->current_key = null;
		$this->input_data  = [];

		if ( ! empty( $normalized_tablet ) ) {
			$normalized['__tablet'] = $normalized_tablet;
		}

		if ( ! empty( $normalized_mobile ) ) {
			$normalized['__mobile'] = $normalized_mobile;
		}

		return $normalized;
	}

	/**
	 * Get normalized value based on its type.
	 *
	 * @param mixed $value The value to normalize.
	 * @param string $key The key associated with the value.
	 * @return mixed The normalized value.
	 */
	private function get_normalized_value( $value, $key ) {

		if ( is_scalar( $value ) ) {
			return $value;
		}

		if ( $this->is_typography( $value ) ) {
			return $this->normalize_typography( $value );
		} elseif ( $this->is_edges( $value ) ) {
			return $this->normalize_edges( $value );
		} elseif ( $this->is_border( $value ) ) {
			return $this->normalize_border( $value );
		} elseif ( is_array( $value ) && isset( $value['value'] ) && isset( $value['unit'] ) ) {
			return $value['value'] . $value['unit'];
		} elseif ( in_array( $key, [ 'icon_size', 'icon_gap' ], true ) ) {
			return isset( $value['value'] ) ? (int) $value['value'] : 0;
		} else {
			return $value;
		}
	}

	/**
	 * Check if the value is a border array.
	 *
	 * @param array $value The value to check.
	 * @return bool True if it is a border array, false otherwise.
	 */
	private function is_border( array $value ): bool {
		return isset( $value['width'], $value['color'], $value['style'] );
	}

	/**
	 * Check if the value is a typography array.
	 *
	 * @param array $value The value to check.
	 * @return bool True if it is a typography array, false otherwise.
	 */
	private function is_typography( array $value ): bool {
		return isset( $value['family'], $value['size'], $value['weight'] );
	}

	/**
	 * Check if the value contains at least two edges.
	 *
	 * @param array $value The value to check.
	 * @return bool True if it contains at least two edges, false otherwise.
	 */
	private function is_edges( array $value ): bool {
		return count( array_intersect( array_keys( $value ), self::EDGES ) ) >= 2;
	}

	/**
	 * Normalize typography values.
	 *
	 * @param array $value The typography value to normalize.
	 * @return array The normalized typography value.
	 */
	private function normalize_typography( array $value ): array {

		$typography = [];

		if ( isset( $value['size'] ) ) {
			$typography['size'] = $value['size'] . ( $value['s_unit'] ?? 'px' );
		}

		if ( isset( $value['lineHeight'] ) ) {
			$typography['lineHeight'] = $value['lineHeight'] . ( $value['lh_unit'] ?? '' );
		}

		if ( isset( $value['letterSpacing'] ) ) {
			$typography['letterSpacing'] = $value['letterSpacing'] . ( $value['ls_unit'] ?? 'px' );
		}

		foreach ( [ 'family', 'weight', 'style', 'transform', 'decoration' ] as $attr ) {
			if ( isset( $value[ $attr ] ) && 'inherit' !== $value[ $attr ] ) {
				$typography[ $attr ] = $value[ $attr ];
			}
		}

		return $typography;
	}

	/**
	 * Normalize edges values.
	 *
	 * @param array $value The edges value to normalize.
	 * @return array The normalized edges value.
	 */
	private function normalize_edges( array $value ): array {
		return $value;
	}

	/**
	 * Normalize border values.
	 *
	 * @param array $value The border value to normalize.
	 * @return array The normalized border value.
	 */
	private function normalize_border( array $value ): array {

		$result = [ 'border' => [] ];
		$border = [];

		if ( isset( $value['width'] ) && is_array( $value['width'] ) ) {

			$width = $this->get_uniform_edge_value( $value['width'] );

			if ( null !== $width ) {
				$border['width'] = $width;
			} else {
				foreach ( self::EDGES as $edge ) {
					if ( isset( $value['width'][ $edge ] ) && ! empty( $value['width'][ $edge ] ) ) {
						$border[ $edge ]['width'] = $value['width'][ $edge ];
					} else {
						$border[ $edge ]['width'] = '0';
					}
				}
			}
		}

		if ( ! empty( $value['color'] ) && ! empty( $border ) ) {
			if ( $this->has_any_edges( $border ) ) {
				foreach ( self::EDGES as $edge ) {
					$border[ $edge ]['color'] = $value['color'];
				}
			} else {
				$border['color'] = $value['color'];
			}
		}

		if ( ! empty( $value['style'] ) && 'none' !== $value['style'] && ! empty( $border ) ) {
			if ( $this->has_any_edges( $border ) ) {
				foreach ( self::EDGES as $edge ) {
					$border[ $edge ]['style'] = $value['style'];
				}
			} else {
				$border['style'] = 'solid'; // Default style if not set.
			}
		}

		if ( ! empty( $border ) ) {
			$result['border'] = $border;
		}

		if ( isset( $value['radius'] ) && is_array( $value['radius'] ) ) {
			$radius = $this->get_uniform_edge_value( $value['radius'] );
			if ( null !== $radius ) {
				$result['radius'] = $radius;
			}
		}

		$keys = array_keys( $this->input_data );
		$curernt_index = array_search( $this->current_key, $keys, true );

		if ( false !== $curernt_index ) {
			$next_index = $curernt_index + 1;
			$next_key = isset( $keys[ $next_index ] ) ? $keys[ $next_index ] : null;

			if ( $next_key && false !== strpos( $next_key, 'radius' ) ) {
				$next_data = $this->input_data[ $next_key ]['value'] ?? [];

				if ( ! empty( $next_data ) && is_array( $next_data ) ) {
					$radius = $this->get_uniform_edge_value( $next_data );
					if ( null !== $radius ) {
						$result['radius'] = $radius;
					} else {
						$radius_map = [
							'top'    => 'topLeft',
							'right'  => 'topRight',
							'bottom' => 'bottomRight',
							'left'   => 'bottomLeft',
						];

						$result['radius'] = [];

						foreach ( self::EDGES as $edge ) {

							$current_edge = $radius_map[ $edge ];
							if ( isset( $next_data[ $edge ] ) && ! empty( $next_data[ $edge ] ) ) {
								$result['radius'][ $current_edge ] = $next_data[ $edge ];
							} else {
								$result['radius'][ $current_edge ] = '0';
							}
						}
					}
				}
			}
		}

		return $result;
	}

	/**
	 * Check if the value has any edges.
	 *
	 * @param array $value The value to check.
	 * @return bool True if it has any edges, false otherwise.
	 */
	private function has_any_edges( array $value ): bool {
		return count( array_intersect( array_keys( $value ), self::EDGES ) ) > 0;
	}

	/**
	 * Get a uniform edge value from an array of edges.
	 *
	 * If all edges have the same value, return that value; otherwise, return null.
	 *
	 * @param array $edges An associative array of edges (e.g., ['top' => '10px', 'right' => '10px']).
	 * @return string|null The uniform edge value or null if not uniform.
	 */
	private function get_uniform_edge_value( array $edges ): ?string {
		$values = array_values( $edges );
		$unique = array_unique( $values );

		return count( $unique ) === 1 ? $unique[0] : null;
	}

}
