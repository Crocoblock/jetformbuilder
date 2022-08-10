<?php

namespace Jet_Form_Builder\Actions\Methods;

use Jet_Form_Builder\Actions\Methods\Exceptions\Modifier_Exclude_Property;
use Jet_Form_Builder\Actions\Types\Insert_Post;
use Jet_Form_Builder\Classes\Arrayable\Collection;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

abstract class Abstract_Modifier {

	public    $source_arr     = array();
	public    $current_prop   = '';
	public    $current_value;
	public    $fields_map     = array();
	protected $request        = array();
	protected $excluded_props = array();
	protected $action;

	/** @var Collection */
	public $properties;

	abstract public function get_actions();

	abstract protected function get_properties(): Collection;

	public function __construct() {
		$this->properties = $this->get_properties();
	}

	/**
	 * @throws Action_Exception
	 */
	public function run() {
		$this->attach_items();
		$this->attach_required_properties();
		$this->do_action();
		$this->after_action();
	}

	public function get_action() {
		return $this->action;
	}

	/**
	 * @param string $action
	 *
	 * @return Abstract_Modifier
	 * @throws Silence_Exception
	 */
	public function set_action( string $action ) {
		$actions = $this->get_actions();

		if ( isset( $actions[ $action ]['action'] ) && is_callable( $actions[ $action ]['action'] ) ) {
			$this->action = $action;

			return $this;
		}

		throw new Silence_Exception(
			'Undefined action',
			array(
				$action,
				array_keys( $this->get_actions() ),
			)
		);
	}

	/**
	 * @throws Action_Exception
	 */
	public function do_action() {
		$action          = $this->get_actions()[ $this->get_action() ] ?? array();
		$action_callback = $action['action'] ?? false;
		$after_callback  = $action['after'] ?? false;

		if ( ! is_callable( $action_callback ) ) {
			throw new Action_Exception( 'internal_error' );
		}

		call_user_func( $action_callback, $this );

		if ( ! is_callable( $after_callback ) ) {
			return;
		}

		call_user_func( $after_callback, $this );
	}

	public function attach_items() {
		$this->fields_map = array_filter( $this->fields_map );

		foreach ( $this->request as $key => $value ) {
			try {
				$this->current_prop  = $key;
				$this->current_value = $value;

				$this->attach_item();
			} catch ( Modifier_Exclude_Property $exception ) {
				$this->exclude_current_prop();

			} catch ( Silence_Exception $exception ) {
				continue;
			}
		}

		$this->current_prop  = null;
		$this->current_value = null;
	}

	public function attach_required_properties() {
		foreach ( $this->properties as $property ) {
			if ( ! is_a( $property, Object_Required_Property::class ) ) {
				continue;
			}
			$this->current_prop = $property->get_prop_name();

			if ( empty( $this->source_arr[ $this->current_prop ] ) ) {
				$property->do_if_empty( $this );
			}
		}
	}

	/**
	 * @throws Silence_Exception
	 */
	public function attach_item() {
		$this->current_prop = $this->get_current_prop_from_fields_map();

		if ( in_array( $this->current_prop, $this->excluded_props, true ) ) {
			throw new Silence_Exception( "Prop '{$this->current_prop}' is excluded" );
		}
		$this->before_attach();

		$this->source_arr[ $this->current_prop ] = $this->current_value;
	}

	public function before_attach() {
		/** @var Base_Object_Property[] $properties */
		$properties = $this->properties->get_by_id( $this->current_prop );

		foreach ( $properties as $property ) {
			$property->attach( $this );
		}

		if ( ! empty( $properties ) ) {
			return;
		}

		$dynamic = array_filter(
			$this->properties->all(),
			function ( $item ) {
				return is_a( $item, Object_Dynamic_Property::class );
			}
		);

		$dynamic = array_reverse( $dynamic );

		/** @var Base_Object_Property $item */
		foreach ( $dynamic as $item ) {
			$item->attach( $this );
		}
	}

	/**
	 * @param string $field_name
	 *
	 * @return string
	 * @throws Silence_Exception
	 */
	public function get_prop_by_field_name( string $field_name ) {
		/**
		 * At this moment $this->current_prop
		 * store the `field_name`
		 */
		if ( empty( $this->fields_map[ $field_name ] ) ) {
			throw new Silence_Exception( 'Field is not used.' );
		}

		/**
		 * And here we returning the post property
		 * Ex: 'post_content' | 'post_status' | 'jet_tax__slug' | 'custom_meta_key'
		 */
		return Tools::sanitize_text_field( $this->fields_map[ $field_name ] );
	}

	public function replace_field_by_prop( string $prop_name, $value ) {
		$field_name = $this->get_field_name_by_prop( $prop_name );

		if ( false === $field_name ) {
			$field_name = $this->unique_slug( $prop_name );

			$this->fields_map[ $field_name ] = $prop_name;
		}

		$this->set_request(
			array(
				$field_name => $value,
			)
		);

		return $this;
	}

	/**
	 * @return string
	 * @throws Silence_Exception
	 */
	public function get_current_prop_from_fields_map() {
		return $this->get_prop_by_field_name( $this->current_prop );
	}

	public function get_value_by_prop( string $prop ) {
		$field_name = $this->get_field_name_by_prop( $prop );

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

	public function after_action() {
		foreach ( $this->properties as $property ) {
			$property->do_after( $this );
		}
	}

	public function unique_slug( $suffix ) {
		$form_id = jet_form_builder()->form_handler->form_id ?? 0;
		$prefix  = static::class;

		return "{$prefix}_{$form_id}__{$suffix}";
	}

	public function set_fields_map( $fields_map ) {
		$this->fields_map = $fields_map;

		return $this;
	}

	public function set_request( $request ) {
		$this->request = array_merge( $this->request, $request );

		return $this;
	}

	public function exclude_current_prop() {
		$this->exclude_prop( $this->current_prop );
	}

	/**
	 * @throws Modifier_Exclude_Property
	 */
	public function exclude_current() {
		throw new Modifier_Exclude_Property( "Excluding: {$this->current_prop}" );
	}

	public function exclude_prop( string $prop ) {
		if ( ! in_array( $prop, $this->excluded_props, true ) ) {
			$this->excluded_props[] = $prop;
		}

		unset( $this->source_arr[ $prop ] );
	}

	/**
	 * @throws Silence_Exception
	 */
	public function throw_if_empty() {
		if ( empty( $this->current_value ) ) {
			throw new Silence_Exception( 'Current field is empty' );
		}
	}

	public function get_value() {
		return $this->source_arr[ $this->current_prop ] ?? $this->current_value;
	}

}
