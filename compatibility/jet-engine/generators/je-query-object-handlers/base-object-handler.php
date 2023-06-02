<?php


namespace JFB_Compatibility\Jet_Engine\Generators\Je_Query_Object_Handlers;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Base_Object_Handler {

	protected $value_field;
	protected $label_field;
	protected $calc_field;
	protected $additional;

	// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.Found
	public function is_supported( $current ): bool {
		return true;
	}

	public function set_fields( array $args ) {
		$this->value_field = $args[1] ?? 'ID';
		$this->label_field = $args[2] ?? 'post_title';
		$this->calc_field  = $args[3] ?? false;
		$this->additional  = $args[4] ?? false;
	}

	final public function to_array( $current ): array {
		// convert to array because in 8.2 dynamic properties will be deprecated
		$converted = $this->get_converted( $current );

		$value      = $this->get_value( $converted, $current );
		$label      = $this->get_label( $converted, $current );
		$calculated = $this->get_calc( $converted, $current );

		$value      = apply_filters( 'jet-forms-generate-from-query/value', $value, $current, $this->additional );
		$label      = apply_filters( 'jet-forms-generate-from-query/label', $label, $current, $this->additional );
		$calculated = apply_filters( 'jet-forms-generate-from-query/calculated', $calculated, $current, $this->additional );

		$item = array();

		if ( $value ) {
			$item['value'] = $value;
			$item['label'] = $label;
		}

		if ( $this->calc_field ) {
			$item['calculate'] = $calculated;
		}

		return $item;
	}

	protected function get_converted( $current ) {
		// convert to array because in 8.2 dynamic properties will be deprecated
		return get_object_vars( $current );
	}

	// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed
	protected function get_value( $converted, $current ) {
		return $converted[ $this->value_field ] ?? false;
	}

	protected function get_label( $converted, $current ) {
		return $converted[ $this->label_field ] ?? $this->get_value( $converted, $current );
	}

	// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed
	protected function get_calc( $converted, $current ) {
		return $converted[ $this->calc_field ] ?? false;
	}

}
