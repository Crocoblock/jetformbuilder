<?php


namespace Jet_Form_Builder\Actions\Methods;


use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Arrayable\Collection;
use Jet_Form_Builder\Classes\Arrayable\Collection_Item_Interface;
use Jet_Form_Builder\Exceptions\Silence_Exception;

abstract class Base_Object_Property implements
	Collection_Item_Interface,
	Arrayable {

	protected $value       = null;
	protected $is_excluded = false;

	abstract public function get_label(): string;

	public function set_value( string $key, $value, Abstract_Modifier $modifier ) {
		if ( ! $this->can_attach( $key, $value ) ) {
			return;
		}
		/**
		 * This is necessary for those cases when we need to set
		 * (or not) some property and then build on it.
		 */
		$this->set_related( $modifier );
		$this->do_before( $key, $value, $modifier );
	}

	/**
	 * For dynamic properties, it cannot be constant,
	 * so we pass it through parameters
	 *
	 * @param string $key
	 *
	 * @param $value
	 * @param Abstract_Modifier $modifier
	 */
	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$this->value = $value;
	}

	public function do_after( Abstract_Modifier $modifier ) {
	}

	public function can_attach( string $key, $value ): bool {
		if ( is_a( $this, Object_Dynamic_Property::class ) ) {
			return $this->is_supported( $key, $value );
		}

		return ! $this->is_excluded && is_null( $this->value );
	}

	/**
	 * @return null
	 * @throws Silence_Exception
	 */
	public function get_value( Abstract_Modifier $modifier ) {
		if ( ! is_null( $this->value ) ) {
			return $this->value;
		}
		throw new Silence_Exception( 'Empty value' );
	}

	public function exclude() {
		$this->is_excluded = true;
	}

	protected function set_related( Abstract_Modifier $modifier ) {
		$related = $modifier->properties->get_by_ids( $this->get_related() );

		/** @var Base_Object_Property $property */
		foreach ( $related as $property ) {
			$field_name = $modifier->get_field_name_by_prop( $property->get_id() );

			if ( false === $field_name ) {
				continue;
			}

			if ( $property->get_id() === $this->get_id() ) {
				wp_die(
					"Logic error. 
					Property [{$property->get_id()}] can not be related by itself."
				);
			}
			$value = $modifier->get_value( $field_name );

			$property->set_value( $property->get_id(), $value, $modifier );
		}
	}

	/**
	 * @return string
	 */
	public function get_attach_id(): string {
		return $this->get_id();
	}

	public function get_help(): string {
		return '';
	}

	/**
	 * @return string[]
	 */
	public function get_related(): array {
		return array();
	}

	public function to_array(): array {
		return array(
			'value' => $this->get_id(),
			'label' => $this->get_label(),
			'help'  => $this->get_help(),
		);
	}

}