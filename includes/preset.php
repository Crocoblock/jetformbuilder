<?php
/**
 * Captcha manager class
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! class_exists( 'Jet_Engine_Booking_Forms_Preset' ) ) {

	/**
	 * Define Jet_Engine_Booking_Forms_Preset class
	 */
	class Jet_Engine_Booking_Forms_Preset {

		private $meta_key  = '_preset';
		private $form_id   = null;
		private $data      = null;
		private $source    = null;
		private $defaults  = array(
			'enabled'    => false,
			'from'       => 'post',
			'post_from'  => 'current_post',
			'user_from'  => 'current_user',
			'query_var'  => '_post_id',
			'fields_map' => array(),
		);

		public function __construct( $form_id = null ) {
			$this->form_id = $form_id;
		}

		/**
		 * Update captcha related meta with data from $_POST array
		 * @return [type] [description]
		 */
		public function update_meta() {

			if ( ! $this->form_id ) {
				return;
			}

			$preset = isset( $_POST[ $this->meta_key ] ) ? $_POST[ $this->meta_key ] : $this->defaults;
			update_post_meta( $this->form_id, $this->meta_key, $preset );

		}

		/**
		 * Sanitize preset source
		 *
		 * @return [type] [description]
		 */
		public function sanitize_source() {

			$data = $this->get_data();

			if ( empty( $data['enabled'] ) ) {
				return true;
			}

			$from   = ! empty( $data['from'] ) ? $data['from'] : $this->defaults['from'];
			$source = $this->get_source( $data );

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

		/**
		 * Returns field value
		 *
		 * @return [type] [description]
		 */
		public function get_field_value( $field = null, $args = array() ) {

			$result = array(
				'rewrite' => false,
				'value'   => null,
			);

			if ( ! $field ) {
				return $result;
			}

			$data = $this->get_data();

			if ( empty( $data['enabled'] ) ) {
				return $result;
			}

			$from   = ! empty( $data['from'] ) ? $data['from'] : $this->defaults['from'];
			$map    = ! empty( $data['fields_map'] ) ? $data['fields_map'] : $this->defaults['fields_map'];
			$source = $this->get_source( $data );

			if ( ! $source ) {
				return $result;
			}

			if ( empty( $map[ $field ] ) ) {
				return $result;
			}

			$field_data    = $map[ $field ];
			$value         = null;
			$array_allowed = in_array( $args['type'], array( 'checkboxes' ) );

			if ( 'post' === $from ) {

				if ( absint( $source->post_author ) !== get_current_user_id() && ! current_user_can( 'edit_others_posts' ) ) {
					return $result;
				}

				$prop = ! empty( $field_data['prop'] ) ? $field_data['prop'] : 'post_title';

				if ( 'post_meta' === $prop ) {
					if ( ! empty( $field_data['key'] ) ) {
						if ( jet_engine()->relations && jet_engine()->relations->is_relation_key( $field_data['key'] ) ) {

							$info = jet_engine()->relations->get_relation_info( $field_data['key'] );

							if ( ! $info ) {
								return $result;
							}

							$args = array(
								'post_id'     => $source->ID,
								'post_type_1' => $info['post_type_1'],
								'post_type_2' => $info['post_type_2'],
							);

							if ( $source->post_type === $info['post_type_1'] ) {
								$args['from'] = $info['post_type_2'];
							} else {
								$args['from'] = $info['post_type_1'];
							}

							$value = jet_engine()->relations->get_related_posts( $args );

						} else {
							$value = get_post_meta( $source->ID, $field_data['key'], true );
						}
					} else {
						return $result;
					}
				} elseif ( 'post_terms' === $prop ) {
					if ( ! empty( $field_data['key'] ) ) {

						$value = wp_get_post_terms( $source->ID, $field_data['key'] );

						if ( empty( $value ) || is_wp_error( $value ) ) {
							return $result;
						} else {
							if ( $array_allowed ) {
								$value = array_map( function( $term ) {
									return $term->term_id;
								}, $value );
							} else {
								$value = $value[0];
								$value = $value->term_id;
							}
						}

					} else {
						return $result;
					}
				} elseif ( 'post_thumb' === $prop ) {
					$value = get_post_thumbnail_id( $source->ID );
				} else {
					$value = isset( $source->$prop ) ? $source->$prop : null;
				}

			} elseif ( 'user' === $from ) {

				if ( ! $source || is_wp_error( $source ) ) {
					return $result;
				}

				if ( ! is_user_logged_in() ) {
					return $result;
				}

				if ( get_current_user_id() !== $source->ID && ! current_user_can( 'edit_users' ) ) {
					return $result;
				}

				$prop = ! empty( $field_data['prop'] ) ? $field_data['prop'] : 'post_title';

				if ( 'user_meta' === $prop ) {
					if ( ! empty( $field_data['key'] ) ) {
						$value = get_user_meta( $source->ID, $field_data['key'], true );
					} else {
						return $result;
					}
				} else {

					// adjust props
					switch ( $prop ) {
						case 'email':
							$prop = 'user_email';
							break;
					}

					if ( isset( $source->data->$prop ) ) {
						$value = $source->data->$prop;
					} elseif ( isset( $source->$prop ) ) {
						$value = $source->$prop;
					} else {
						$value = null;
					}

				}

			} else {
				$key = ! empty( $field_data['key'] ) ? $field_data['key'] : false;

				if ( $key ) {
					$value = isset( $source[ $key ] ) ? $source[ $key ] : null;
				}

			}

			if ( null !== $value ) {
				$result['rewrite'] = true;
				$result['value']   = $value;
			}

			return $result;

		}

		/**
		 * Returns field source
		 *
		 * @return [type] [description]
		 */
		public function get_source( $data = array() ) {

			if ( null !== $this->source ) {
				return $this->source;
			}

			$from = ! empty( $data['from'] ) ? $data['from'] : $this->defaults['from'];

			switch ( $from ) {
				case 'query_vars':
					$this->source = $_GET;
					break;

				case 'user':
					$user_from = ! empty( $data['user_from'] ) ? $data['user_from'] : $this->defaults['user_from'];

					if ( 'current_user' === $user_from ) {
						if ( is_user_logged_in() ) {
							$this->source = wp_get_current_user();
						}
					} else {

						$var     = ! empty( $data['query_var'] ) ? $data['query_var'] : $this->defaults['query_var'];
						$user_id = ( $var && isset( $_REQUEST[ $var ] ) ) ? $_REQUEST[ $var ] : false;

						$this->source = get_user_by( 'ID', $user_id );

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
						$this->source = get_post( $post_id );
					}

					break;
			}

			return $this->source;

		}

		/**
		 * Returns captcha settings for passed form ID
		 *
		 * @param  [type] $post_id [description]
		 * @return [type]          [description]
		 */
		public function get_data() {

			if ( null !== $this->data ) {
				return $this->data;
			}

			if ( ! $this->form_id ) {
				$this->form_id = get_the_ID();
			}

			$preset = get_post_meta( $this->form_id, $this->meta_key, true );

			if ( ! $preset || ! is_array( $preset ) ) {
				$this->data = $this->defaults;
			} else {
				$this->data = wp_parse_args( $preset, $this->defaults );
			}

			return $this->data;

		}

	}

}
