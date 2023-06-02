<?php


namespace JFB_Compatibility\Jet_Engine\Generators\Je_Query_Object_Handlers;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Object_Handler extends Base_Object_Handler {

	public function is_supported( $current ): bool {
		return ( $current instanceof \WP_User );
	}

	protected function get_converted( $current ) {
		return parent::get_converted( $current->data );
	}

	protected function get_label( $converted, $current ) {
		$label = $current->{$this->label_field} ?? '';

		return $label ? $label : $this->get_value( $converted, $current );
	}

	protected function get_calc( $converted, $current ) {
		return $current->{$this->calc_field};
	}

}
