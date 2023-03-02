<?php


namespace Jet_Form_Builder\Classes\Filters;

use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Filter implements Repository_Item_Instance_Trait {

	abstract public function get_id(): string;

	abstract public function apply_macros( $value, ...$args ): string;

	final public function apply( $value, ...$args ): string {
		$callback_args = $this->get_prepared_args( $args );

		return $this->apply_macros( $value, ...$callback_args );
	}

	private function get_prepared_args( array $input_args ): array {
		$preset = $this->callback_args();

		foreach ( $input_args as $index => $current ) {
			if ( false === $current ) {
				continue;
			}
			$preset[ $index ] = $input_args[ $index ];
		}

		return apply_filters(
			'jet-form-builder/content-filters/args',
			$preset,
			$this
		);
	}

	public function callback_args(): array {
		return array();
	}

	public function rep_item_id() {
		return $this->get_id();
	}

}