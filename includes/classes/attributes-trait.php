<?php


namespace Jet_Form_Builder\Classes;

trait Attributes_Trait {

	use Base_Attributes_Trait;

	public $attrs = array();

	public function add_attribute( $attr, $value = null ) {
		if ( '' === $value ) {
			return;
		}

		if ( is_array( $value ) ) {
			foreach ( $value as $item ) {
				$this->add_attribute( $attr, $item );
			}

			return;
		}

		$value = Tools::esc_attr( $value );

		if ( ! isset( $this->attrs[ $attr ] ) ) {
			$this->attrs[ $attr ] = $value;
		} else {
			$this->attrs[ $attr ] .= ' ' . $value;
		}
	}

	public function reset_attributes() {
		$this->attrs = array();
	}

	public function get_all_attrs() {
		return $this->attrs;
	}

	public function has_attribute( string $name ): bool {
		return array_key_exists( $name, $this->attrs );
	}

}
