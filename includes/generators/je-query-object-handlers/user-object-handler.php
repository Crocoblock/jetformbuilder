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
		return $object->{$this->label_field};
	}

	protected function get_calc( $converted, $object ) {
		return $object->{$this->label_field};
	}

}