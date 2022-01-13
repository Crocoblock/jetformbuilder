<?php


namespace Jet_Form_Builder\Actions\Methods;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Post_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Post_Controller {

	public $post_arr = array();
	public $fields_map = array();
	public $request = array();

	public $current_prop = '';
	public $current_value;
	public $current_external;

	private $action = 'insert';
	private $excluded_props = array();

	private $external_data = array();

	/**
	 * Return object fields
	 *
	 * @return string[] [type] [description]
	 */
	public function get_object_fields() {
		return apply_filters(
			'jet-form-builder/post-controller/object-properties',
			array(
				'ID'          => array(
					'before_cb' => array( $this, 'before_attach_id' )
				),
				'post_status' => array(
					'before_cb' => array( $this, 'before_attach_status' )
				),
				'post_title',
				'post_content',
				'post_excerpt',
				'post_date',
				'post_date_gmt',
				'post_author',
			)
		);
	}

	public function get_actions() {
		return apply_filters(
			'jet-form-builder/post-controller/object-actions',
			array(
				'update' => array( $this, 'update_post' ),
				'insert' => array( $this, 'insert_post' ),
				'trash'  => array( $this, 'trash_post' ),
			)
		);
	}

	public function get_external_properties() {
		return apply_filters(
			'jet-form-builder/post-controller/external-actions',
			array(
				'terms'        => array(
					'condition_cb' => function () {
						return false !== strpos( $this->current_prop, 'jet_tax__' );
					},
					'match_cb' => array( $this, 'attach_post_terms' )
				),
				'je_relations' => array(
					'condition_cb' => function () {
						return function_exists( 'jet_engine' )
						       && jet_engine()->relations
						       && jet_engine()->relations->is_relation_key( $this->current_prop );
					},
					'match_cb' => array( $this, 'attach_je_relations' )
				),
				'meta'         => array(
					'match_cb' => array( $this, 'attach_post_meta' )
				)
			)
		);
	}

	/**
	 * @throws Silence_Exception|Action_Exception
	 */
	public function before_attach_id() {
		if ( empty( $this->current_value ) ) {
			throw new Action_Exception( 'empty_field', $this->current_prop, $this->current_value );
		}

		$post = get_post( (int) $this->current_value );

		if (
			! is_a( $post, \WP_Post::class )
			|| (
				absint( $post->post_author ) !== get_current_user_id()
				&& ! current_user_can( 'edit_post', $post->ID )
			)
		) {
			throw new Action_Exception(
				'failed',
				array(
					'post' => $post,
				)
			);
		}

		$this->set_action_once( 'update' );
	}

	public function attach_post_terms() {
		$tax = str_replace( 'jet_tax__', '', $this->current_prop );

		$taxonomies = $this->get_current_external();

		if ( ! is_array( $this->current_value ) ) {
			$taxonomies[ $tax ][] = absint( $this->current_value );
		} else {
			$taxonomies[ $tax ] = array_merge( $taxonomies[ $tax ], array_map( 'absint', $this->current_value ) );
		}

		$this->set_current_external( $taxonomies );
	}

	public function attach_post_meta() {
		if ( ! Tools::is_repeater_val( $this->current_value ) ) {
			$this->set_meta( array(
				$this->current_prop => $this->current_value
			) );
		}

		$prepared_value = array();

		foreach ( $this->current_value as $index => $row ) {
			$prepared_row = array();

			foreach ( $row as $item_key => $item_value ) {

				$item_key                  = ! empty( $this->fields_map[ $item_key ] ) ? Tools::sanitize_text_field( $this->fields_map[ $item_key ] ) : $item_key;
				$prepared_row[ $item_key ] = $item_value;
			}

			$prepared_value[ 'item-' . $index ] = $prepared_row;
		}

		$this->set_meta( array(
			$this->current_prop => $prepared_value
		) );

	}

	public function attach_je_relations() {
		$this->set_current_external( array(
			$this->current_prop => $this->current_value
		) );
	}

	public function custom_before_attach() {
		
	}

	/**
	 * @throws Silence_Exception|Post_Exception
	 */
	public function before_attach_status() {
		switch ( $this->current_value ) {
			case 'keep-current':
				throw new Post_Exception( 'Keep current status, exclude this prop' );
			case 'trash':
				$this->set_action( 'trash' );

				return;
			case 'from-field':
			default:
				throw new Silence_Exception( 'Status must be replaced by another field' );
		}
	}

	public function is_reserved_property( $prop ) {
		return array_key_exists( $prop, $this->get_object_fields() )
		       || in_array( $prop, $this->get_object_fields(), true );
	}

	/**
	 * @param $post_type
	 *
	 * @return Post_Controller
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
	 * @return Post_Controller
	 * @throws Silence_Exception
	 */
	public function set_action( string $action ) {
		$actions = $this->get_actions();

		if ( isset( $actions[ $action ] ) && is_callable( $actions[ $action ] ) ) {
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
	 * @return $this
	 * @throws Silence_Exception
	 */
	public function set_action_once( string $action ) {
		if ( $this->action !== 'insert' ) {
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
				$prepared_meta[ $meta_row['key'] ] = $meta_row['value'];
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

		$this->save_request( array(
			$field_name => $status
		) );

		return $this;
	}

	public function save_request( $request ) {
		$this->request = array_merge( $this->request, $request );

		return $this;
	}

	public function run() {
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

	public function is_reserved_current_property() {
		return $this->is_reserved_property( $this->current_prop );
	}

	public function before_attach() {
		$property_callback = $this->get_object_fields()[ $this->current_prop ]['before_cb'] ?? false;

		if ( is_callable( $property_callback ) ) {
			call_user_func( $property_callback, $this );
		} else {
			call_user_func( array( $this, 'custom_before_attach' ), $this );
		}
	}

	public function unique_slug( $suffix ) {
		$form_id = jet_form_builder()->form_handler->form_id ?? 0;

		return "post_prop_{$form_id}__{$suffix}";
	}

}