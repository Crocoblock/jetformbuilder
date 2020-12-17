<?php


namespace Jet_Form_Builder\Presets;


use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;
use Jet_Form_Builder\Presets\Types\Form_Base_Preset;

abstract class Preset_Manager {

	private $form_id;
	protected $data = null;
	protected $source = null;
	protected $defaults = array(
		'enabled'    => false,
		'from'       => 'post',
		'post_from'  => 'current_post',
		'user_from'  => 'current_user',
		'query_var'  => '_post_id',
		'fields_map' => array(),
	);

	protected function __construct() {
	}

	protected function set_data() {
		if ( empty( $data ) ) {
			$this->data = $this->preset_source();
		}
	}

	public function set_form_id( $form_id ) {
		$this->form_id = $form_id;
	}


	public function preset_source() {
		return Plugin::instance()->post_type->get_preset( $this->form_id );
	}


	/**
	 * Sanitize preset source
	 *
	 * @return [type] [description]
	 */
	public function sanitize_source() {
		$this->set_data();

		if ( empty( $this->data['enabled'] ) ) {
			return true;
		}

		$from   = ! empty( $this->data['from'] ) ? $this->data['from'] : $this->defaults['from'];
		$source = $this->get_source();

		if ( ! $source ) {
			return true;
		}

		if ( 'post' === $from ) {

			if ( ! is_user_logged_in() ) {
				return false;
			}

			if ( absint( $source->post_author ) !== get_current_user_id() && ! current_user_can( 'edit_others_posts' ) ) {
				return false;
			}


		} elseif ( 'user' === $from ) {

			if ( ! is_user_logged_in() ) {
				return false;
			}

			if ( get_current_user_id() !== $source->ID && ! current_user_can( 'edit_users' ) ) {
				return false;
			}

		}

		return true;

	}


	public function parse_dynamic_preset( $value ) {

		$dynamic_preset = json_decode( $value, true );

		if ( empty( $dynamic_preset ) || empty( $dynamic_preset['jet_preset'] ) ) {
			return false;
		} else {
			return $dynamic_preset;
		}
	}

	public function field_dynamic_preset( $args ) {

		if ( empty( $args['default'] ) ) {
			return false;
		}

		return $this->parse_dynamic_preset( $args['default'] );
	}

	/**
	 * Returns field value
	 *
	 * @return [type] [description]
	 */
	public function get_field_value( $field = null, $args = array() ) {
		$this->set_data();

		$result = array(
			'rewrite' => false,
			'value'   => null,
		);

		if ( ! $field ) {
			return $result;
		}

		$dynamic_preset = $this->field_dynamic_preset( $args );

		if ( $dynamic_preset ) {
			$manager = ( new Dynamic_Preset() )->set_init_data( $dynamic_preset );
		} else {
			$manager = ( new Form_Base_Preset() )->set_init_data( $this->data );
		}

		return $manager->set_additional_data( $field, $args )->get_preset_value();
	}

	/**
	 * Returns preset value
	 *
	 * @param string $field
	 * @param array $args
	 * @param bool|array $dynamic_preset
	 *
	 * @return array
	 */
	public function get_preset_value( $field = null, $args = array(), $dynamic_preset = false ) {


		$source = $this->get_source( $dynamic_preset );

		$map = ! empty( $data['fields_map'] ) ? $data['fields_map'] : $this->defaults['fields_map'];

		if ( ! empty( $dynamic_preset ) ) {
			$map = array(
				$field => array(
					'prop' => ! empty( $data['current_field_prop'] ) ? $data['current_field_prop'] : '',
					'key'  => ! empty( $data['current_field_key'] ) ? $data['current_field_key'] : '',
				),
			);
		}

		if ( ! $source ) {

			if ( ! empty( $dynamic_preset ) ) {
				$result['rewrite'] = true;
				$result['value']   = '';
			}

			return $result;
		}

		if ( empty( $map[ $field ] ) || ( empty( $map[ $field ]['prop'] ) && empty( $map[ $field ]['key'] ) ) ) {

			if ( ! empty( $dynamic_preset ) ) {
				$result['rewrite'] = true;
				$result['value']   = '';
			}

			return $result;
		}

		$field_data = $map[ $field ];
		$value      = null;

	}


	/**
	 * Returns field source
	 *
	 * @return [type] [description]
	 */
	public function get_source( $dynamic_preset = false ) {

		if ( null !== $this->source && ! $dynamic_preset ) {
			return $this->source;
		}

		if ( ! empty( $dynamic_preset ) ) {
			$data = $dynamic_preset;
		} else {
			$data = $this->data;
		}

		$from   = ! empty( $data['from'] ) ? $data['from'] : $this->defaults['from'];
		$source = $this->source;

		switch ( $from ) {
			case 'query_vars':
				$source = $_GET;
				break;

			case 'user':
				$user_from = ! empty( $data['user_from'] ) ? $data['user_from'] : $this->defaults['user_from'];

				if ( 'current_user' === $user_from ) {
					if ( is_user_logged_in() ) {
						$source = wp_get_current_user();
					}
				} else {

					$var     = ! empty( $data['query_var'] ) ? $data['query_var'] : $this->defaults['query_var'];
					$user_id = ( $var && isset( $_REQUEST[ $var ] ) ) ? $_REQUEST[ $var ] : false;

					$source = get_user_by( 'ID', $user_id );

				}

				break;

			default:

				$post_from = ! empty( $data['post_from'] ) ? $data['post_from'] : $this->defaults['post_from'];

				if ( 'current_post' === $post_from ) {
					$post_id = get_the_ID();
				} else {
					$var     = ! empty( $data['query_var'] ) ? $data['query_var'] : $this->defaults['query_var'];
					$post_id = ( $var && isset( $_REQUEST[ $var ] ) ) ? $_REQUEST[ $var ] : false;
				}

				if ( $post_id ) {
					$source = get_post( $post_id );
				}

				break;
		}

		if ( ! $dynamic_preset ) {
			$this->source = $source;

			return $this->source;
		} else {
			return $source;
		}

	}

	/**
	 * Try to get values from request if passed
	 *
	 * @param  [type] $args [description]
	 *
	 * @return [type]       [description]
	 */
	public function maybe_adjust_value( $args ) {

		$value       = isset( $args['default'] ) ? $args['default'] : false;
		$request_val = ! empty( $_REQUEST['values'] ) ? $_REQUEST['values'] : array();

		if ( ! empty( $request_val[ $args['name'] ] ) ) {
			$value = $request_val[ $args['name'] ];
		}

		return $value;

	}
}