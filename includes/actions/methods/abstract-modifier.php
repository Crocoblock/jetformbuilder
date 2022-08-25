<?php

namespace Jet_Form_Builder\Actions\Methods;

use Jet_Form_Builder\Actions\Methods\Exceptions\Modifier_Exclude_Property;
use Jet_Form_Builder\Actions\Types\Insert_Post;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Collection;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;
use Jet_Theme_Core\Template_Conditions\Page_404;

abstract class Abstract_Modifier {

	public    $source_arr = array();
	public    $fields_map = array();
	protected $request    = array();

	/** @var Object_Properties_Collection */
	public $properties;

	/** @var Collection */
	public $actions;

	/** @var Base_Modifier_Action */
	protected $action;

	abstract protected function get_actions(): Collection;

	abstract protected function get_properties(): Object_Properties_Collection;

	public function __construct() {
		$this->properties = $this->get_properties();
		// install actions
		$this->actions = $this->get_actions();
	}

	public function run() {
		foreach ( $this->request as $key => $value ) {
			$this->attach_item( $key, $value );
		}

		$this->attach_properties();
		$this->do_action();

		/** @var Base_Object_Property $property */
		foreach ( $this->properties as $property ) {
			$property->do_after( $this );
		}
	}

	protected function attach_item( $field_name, $value ) {
		$key = $this->get_field_key( $field_name );

		if ( ! $key ) {
			return;
		}

		/** @var Base_Object_Property $property */
		foreach ( $this->properties->get_by_id( $key ) as $property ) {
			$property->set_value( $key, $value, $this );
		}

		if ( $this->properties->has_by_id( $key ) ) {
			return;
		}

		/** @var Base_Object_Property $item */
		foreach ( $this->properties->get_dynamic() as $item ) {
			$item->set_value( $key, $value, $this );
		}
	}

	protected function attach_properties() {
		/** @var Base_Object_Property $property */
		foreach ( $this->properties as $property ) {
			try {
				$value = $property->get_value( $this );
			} catch ( Silence_Exception $exception ) {
				continue;
			}

			if ( ! is_array( $value ) || ! $property->is_merge_value() ) {
				$this->source_arr[ $property->get_attach_id() ] = $value;

				continue;
			}

			$this->source_arr = array_merge(
				$this->source_arr,
				$value
			);
		}
	}

	protected function do_action() {
		$this->action = $this->get_action();

		$this->action->set_modifier( $this );
		$this->action->do_action();
		$this->action->do_after();
	}

	protected function get_supported_action(): Base_Modifier_Action {
		/** @var Base_Modifier_Action $current */
		foreach ( Array_Tools::reverse( $this->actions ) as $current ) {
			if ( ! $current::is_supported( $this ) ) {
				continue;
			}

			return $current;
		}

		wp_die( 'Something went wrong' );
	}

	public function set( string $property, $value, $key = null ): Abstract_Modifier {
		/** @var Base_Object_Property $prop_item */
		$prop_item = $this->properties->get_by_id( $property )->current();
		$key       = $key ?? $prop_item->get_id();

		$prop_item->set_value( $key, $value, $this );

		return $this;
	}

	public function get( string $property ): Base_Object_Property {
		return $this->properties->get_by_id( $property )->current();
	}

	/**
	 * @param string $field_name
	 *
	 * @return string
	 */
	public function get_field_key( string $field_name ): string {
		return Tools::sanitize_text_field( $this->fields_map[ $field_name ] ?? '' );
	}

	public function get_value( string $field_name ) {
		return $this->request[ $field_name ] ?? false;
	}

	public function get_field_name_by_prop( string $search_prop ) {
		foreach ( $this->fields_map as $field_name => $prop ) {
			if ( $search_prop === $prop ) {
				return $field_name;
			}
		}

		return false;
	}

	/**
	 * [field_name] => [property]
	 *
	 * @param array $fields_map
	 *
	 * Pass TRUE, if your fields_map in such format:
	 * [property] => [field_name]
	 * @param false $revert
	 *
	 * @return $this
	 */
	public function set_fields_map( array $fields_map, bool $revert = false ): self {
		$fields_map = array_filter( $fields_map );

		if ( ! $revert ) {
			$this->fields_map = $fields_map;

			return $this;
		}

		$this->fields_map = array_combine(
			array_values( $fields_map ),
			array_keys( $fields_map )
		);

		return $this;
	}

	public function set_request( $request ): Abstract_Modifier {
		$this->request = array_merge( $this->request, $request );

		return $this;
	}

	/**
	 * Can be used after run action.
	 * Ex. in Base_Object_Property::do_after()
	 *
	 * @return Base_Modifier_Action
	 */
	public function get_action(): Base_Modifier_Action {
		if ( is_null( $this->action ) ) {
			$this->action = $this->get_supported_action();
		}

		return $this->action;
	}
}
