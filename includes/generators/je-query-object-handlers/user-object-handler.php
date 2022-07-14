<?php


namespace Jet_Form_Builder\Generators\Je_Query_Object_Handlers;


class User_Object_Handler extends Base_Object_Handler {

	public function is_supported( $object ): bool {
		return ( $object instanceof \WP_User );
	}

	protected function get_converted( $object ) {
		return parent::get_converted( $object->data );
	}

	protected function get_label( $converted, $object ) {
		$label = $object->{$this->label_field} ?? '';

		return $label ? $label : $this->get_value( $converted, $object );
	}

	protected function get_calc( $converted, $object ) {
		return $object->{$this->calc_field};
	}

}