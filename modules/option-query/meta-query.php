<?php


namespace JFB_Modules\Option_Query;

use JFB_Modules\Option_Query\Interfaces\Option_Query_It;
use JFB_Modules\Option_Query\Traits\Option_Query_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Meta_Query implements Option_Query_It {

	use Option_Query_Trait;

	public function rep_item_id() {
		return 'meta_field';
	}

	public function fetch(): \Generator {

		$key = $this->get_query( 'meta_key' );

		if ( ! $key ) {
			return;
		}

		$options = get_post_meta( jet_fb_live()->post->ID, $key, true );

		if ( empty( $options ) ) {
			return;
		}

		if ( ! is_array( $options ) ) {
			$options = array( $options );
		}

		if ( in_array( 'true', $options, true ) || in_array( 'false', $options, true ) ) {
			yield from $this->get_checked_options( $options );

			return;
		}

		$option_values = array_values( $options );

		if ( ! is_array( $option_values[0] ) ) {

			foreach ( $options as $key => $value ) {
				if ( $this->has_query( 'search' ) &&
					 false === strpos( (string) $value, $this->get_query( 'search' ) )
				) {
					continue;
				}

				yield array(
					'value' => is_string( $key ) ? $key : $value,
					'label' => $value,
				);
			}

			return;
		}

		foreach ( $options as $option ) {

			$values = array_values( $option );

			if (
				! isset( $values[0] ) ||
				(
					$this->has_query( 'search' ) &&
					false === strpos( (string) ( $values[1] ?? $values[0] ), $this->get_query( 'search' ) )
				)
			) {
				continue;
			}

			yield array(
				'value' => $values[0],
				'label' => $values[1] ?? $values[0],
			);

		}
	}

	/**
	 * @param $options
	 *
	 * @return \Generator
	 */
	protected function get_checked_options( $options ): \Generator {
		foreach ( $options as $label => $checked ) {
			$checked = filter_var( $checked, FILTER_VALIDATE_BOOLEAN );

			if ( $this->has_query( 'search' ) &&
				 false === strpos( (string) $label, $this->get_query( 'search' ) )
			) {
				continue;
			}

			if ( $checked ) {
				yield array(
					'value' => $label,
					'label' => $label,
				);
			}
		}
	}

}
