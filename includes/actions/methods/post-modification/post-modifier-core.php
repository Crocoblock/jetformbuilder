<?php


namespace Jet_Form_Builder\Actions\Methods;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Post_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

abstract class Post_Modifier_Core {

	public $post_arr = array();
	public $fields_map = array();
	public $request = array();

	public $current_prop = '';
	public $current_value;

	public $action = 'insert';
	public $excluded_props = array();

	public $current_external;
	public $external_data = array();

	public $inserted_post_id;
	public $suppress_filters = true;

	/**
	 * Return object fields
	 *
	 * @return string[] [type] [description]
	 */
	abstract public function get_object_fields();

	abstract public function get_actions();

	abstract public function get_external_properties();

	/**
	 * @param bool $suppress
	 *
	 * @return $this
	 */
	public function suppress_filters( bool $suppress ) {
		$this->suppress_filters = $suppress;

		return $this;
	}

	/**
	 * @throws Silence_Exception
	 */
	public function custom_before_attach() {
		/**
		 * We make the array in reverse order,
		 * in order to check external: meta last,
		 * since it does not have a check ( 'condition_cb' )
		 */
		$externals = array_reverse( $this->get_external_properties() );

		foreach ( $externals as $external_key => $external_value ) {
			$this->current_external = $external_key;
			$condition_cb           = $external_value['condition_cb'] ?? false;

			if ( empty( $condition_cb ) || (
					is_callable( $condition_cb ) && ! call_user_func( $condition_cb, $this )
				) ) {
				continue;
			}

			$match_cb = $external_value['match_cb'] ?? false;
			if ( ! is_callable( $match_cb ) ) {
				throw new Silence_Exception( "'match_cb' is not callable in {$external_key}" );
			}

			call_user_func( $match_cb, $this );
			break;
		}
	}


	public function is_reserved_property( $prop ) {
		$fields = $this->get_object_fields();

		return isset( $fields[ $prop ] ) || in_array( $prop, $fields, true );
	}

	/**
	 * @param $post_type
	 *
	 * @return Post_Controller_Core
	 * @throws Action_Exception
	 */
	public function set_post_type( $post_type ) {
		if ( $post_type && post_type_exists( $post_type ) ) {
			$this->post_arr['post_type'] = $post_type;

			return $this;
		}

		throw new Action_Exception(
			'failed',
			array(
				'post_type' => $post_type,
			)
		);
	}

	/**
	 * @param string $action
	 *
	 * @return Post_Controller_Core
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
				array_keys( $this->get_actions() )
			)
		);
	}

	/**
	 * @param string $action
	 *
	 * @return Post_Controller_Core
	 * @throws Silence_Exception
	 */
	public function set_action_once( string $action ) {
		if ( 'insert' !== $this->action ) {
			return $this;
		}

		return $this->set_action( $action );
	}

	public function set_fields_map( $fields_map ) {
		$this->fields_map = $fields_map;

		return $this;
	}

	public function set_meta( $meta ) {
		if ( empty( $this->post_arr['meta_input'] ) || ! is_array( $this->post_arr['meta_input'] ) ) {
			$this->post_arr['meta_input'] = array();
		}

		foreach ( $meta as $meta_key => $meta_row ) {
			if ( ! empty( $meta_row['key'] ) ) {
				$meta[ $meta_row['key'] ] = $meta_row['value'];
				unset( $meta[ $meta_key ] );
			}
		}

		$this->post_arr['meta_input'] = array_merge( $this->post_arr['meta_input'], $meta );

		return $this;
	}

	public function set_external( string $key, array $data ) {
		if ( ! is_array( $this->external_data[ $key ] ) ) {
			$this->external_data[ $key ] = array();
		}
		$this->external_data[ $key ] = array_merge( $this->external_data[ $key ], $data );

		return $this;
	}

	public function get_external( string $key ) {
		return $this->external_data[ $key ] ?? array();
	}

	public function set_current_external( array $data ) {
		return $this->set_external( $this->current_external, $data );
	}

	public function get_current_external() {
		return $this->get_external( (string) $this->current_external );
	}

	public function set_general_post_status( $status ) {
		$field_name = $this->unique_slug( 'status' );

		$this->fields_map[ $field_name ] = 'post_status';

		$this->set_request( array(
			$field_name => $status
		) );

		return $this;
	}

	public function set_request( $request ) {
		$this->request = array_merge( $this->request, $request );

		return $this;
	}

	public function exclude_current_prop() {
		$this->exclude_prop( $this->current_prop );
	}

	public function exclude_prop( string $prop ) {
		if ( ! in_array( $prop, $this->excluded_props, true ) ) {
			$this->excluded_props[] = $prop;
		}

		unset( $this->post_arr[ $prop ] );
	}

	/**
	 * @throws Silence_Exception
	 */
	public function attach_item() {
		$this->current_prop = $this->get_prop_from_fields_map();

		if ( in_array( $this->current_prop, $this->excluded_props, true ) ) {
			throw new Silence_Exception( "Prop '{$this->current_prop}' is excluded" );
		}

		$this->before_attach();

		$this->post_arr[ $this->current_prop ] = $this->current_value;
	}

	/**
	 * @return string
	 * @throws Silence_Exception
	 */
	public function get_prop_from_fields_map() {
		/**
		 * At this moment $this->current_prop
		 * store the `field_name`
		 */
		if ( empty( $this->fields_map[ $this->current_prop ] ) ) {
			throw new Silence_Exception( 'Field is not used.' );
		}

		/**
		 * And here we returning the post property
		 * Ex: 'post_content' | 'post_status' | 'jet_tax__slug' | 'custom_meta_key'
		 */
		return Tools::sanitize_text_field( $this->fields_map[ $this->current_prop ] );
	}

	/**
	 * @throws Silence_Exception
	 */
	public function before_attach() {
		$property_callback = $this->get_object_fields()[ $this->current_prop ]['before_cb'] ?? false;

		if ( is_callable( $property_callback ) ) {
			call_user_func( $property_callback, $this );

			return;
		}

		call_user_func( array( $this, 'custom_before_attach' ), $this );

		if ( ! $this->is_reserved_property( $this->current_prop ) ) {
			throw new Silence_Exception( 'Property not need to attach' );
		}
	}

	public function unique_slug( $suffix ) {
		$form_id = jet_form_builder()->form_handler->form_id ?? 0;

		return "post_prop_{$form_id}__{$suffix}";
	}

	public function attach_items() {
		foreach ( $this->request as $key => $value ) {
			try {
				$this->current_prop  = $key;
				$this->current_value = $value;

				$this->attach_item();
			} catch ( Post_Exception $exception ) {
				$this->exclude_current_prop();

			} catch ( Silence_Exception $exception ) {
				continue;
			}
		}
	}

	/**
	 * @throws Action_Exception
	 */
	public function do_action() {
		$action          = $this->get_actions()[ $this->action ] ?? array();
		$action_callback = $action['action'] ?? false;
		$after_callback  = $action['after'] ?? false;

		try {
			$this->pre_check();
		} catch ( Silence_Exception $exception ) {
			return;
		}

		if ( ! is_callable( $action_callback ) ) {
			throw new Action_Exception( 'internal_error' );
		}

		call_user_func( $action_callback, $this );

		if ( ! is_callable( $after_callback ) ) {
			return;
		}

		call_user_func( $after_callback, $this );
	}

	/**
	 * @throws Silence_Exception
	 */
	public function pre_check() {
		if ( $this->suppress_filters ) {
			return;
		}

		$pre_post_check = apply_filters(
			'jet-form-builder/action/insert-post/pre-check',
			true,
			$this->post_arr,
			jet_form_builder()->form_handler->action_handler->get_current_action()
		);

		if ( ! $pre_post_check ) {
			throw new Silence_Exception( 'Pre check filter has returned FALSE.' );
		}
	}

	public function after_action_externals() {
		$externals = $this->get_external_properties();

		foreach ( $externals as $external_key => $external_value ) {
			$this->current_external = $external_key;
			$condition_cb           = $external_value['after_action'] ?? false;

			if ( is_callable( $condition_cb ) ) {
				call_user_func( $condition_cb, $this );
			}
		}
	}

	/**
	 * @throws Action_Exception
	 */
	public function run() {
		$this->attach_items();
		$this->do_action();
		$this->after_action_externals();
	}


}