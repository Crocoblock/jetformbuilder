<?php


namespace Jet_Form_Builder\Classes\Filters;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Multiple_Filter extends Base_Filter {

	abstract protected function apply_item( $item, ...$args ): string;

	public function callback_args(): array {
		return array( ', ' );
	}

	public function apply_macros( $value, ...$args ): string {
		if ( empty( $value ) ) {
			return '';
		}

		if ( ! is_array( $value ) ) {
			$value = explode( ',', (string) $value );
		}

		list( $delimiter ) = $args;

		return wp_kses_post(
			implode(
				$delimiter,
				array_map(
					function ( $item ) use ( $args ) {
						return $this->apply_item( $item, ...$args );
					},
					$value
				)
			)
		);
	}

}
