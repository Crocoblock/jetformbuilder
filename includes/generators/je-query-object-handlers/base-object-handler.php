<?php


namespace Jet_Form_Builder\Generators\Je_Query_Object_Handlers;


class Base_Object_Handler {

	protected $value_field;
	protected $label_field;
	protected $calc_field;
	protected $additional;

	public function is_supported( $object ): bool {
		return true;
	}

	public function set_fields( array $args ) {
		$this->value_field = $args[1] ?? 'ID';
		$this->label_field = $args[2] ?? 'post_title';
		$this->calc_field  = $args[3] ?? false;
		$this->additional  = $args[4] ?? false;
	}

	final public function to_array( $object ): array {
		// convert to array because in 8.2 dynamic properties will be deprecated
		$converted = $this->get_converted( $object );

		$value      = $this->get_value( $converted, $object );
		$label      = $this->get_label( $converted, $object );
		$calculated = $this->get_calc( $converted, $object );

		$value      = apply_filters( 'jet-forms-generate-from-query/value', $value, $object, $this->additional );
		$label      = apply_filters( 'jet-forms-generate-from-query/label', $label, $object, $this->additional );
		$calculated = apply_filters( 'jet-forms-generate-from-query/calculated', $calculated, $object, $this->additional );

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

	protected function get_converted( $object ) {
		// convert to array because in 8.2 dynamic properties will be deprecated
		return get_object_vars( $object );
	}

	protected function get_value( $converted, $object ) {
		return $converted[ $this->value_field ] ?? false;
	}

	protected function get_label( $converted, $object ) {
		return $converted[ $this->label_field ] ?? $this->get_value( $converted, $object );
	}

	protected function get_calc( $converted, $object ) {
		return $converted[ $this->calc_field ] ?? false;
	}

}