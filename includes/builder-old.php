<?php
/**
 * Form builder class
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! class_exists( 'Jet_Engine_Booking_Forms_Builder' ) ) {

	/**
	 * Define Jet_Engine_Booking_Forms_Builder class
	 */
	class Jet_Engine_Booking_Forms_Builder {

		public $form_id           = null;
		public $post              = null;
		public $fields            = array();
		public $args              = array();
		public $settings          = array();
		public $attrs             = array();
		public $rows              = array();
		public $captcha           = false;
		public $preset            = false;
		public $is_hidden_row     = true;
		public $is_submit_row     = false;
		public $is_page_break_row = false;
		public $rendered_rows     = 0;
		public $pages             = 0;
		public $page              = 0;
		public $has_prev          = false;
		public $start_new_page    = true;
		public $manager           = null;

		/**
		 * Constructor for the class
		 */
		function __construct( $form_id = null, $fields = false, $args = array(), $captcha = false ) {

			if ( ! $form_id ) {
				return;
			}

			$this->form_id = $form_id;

			$this->setup_fields( $fields );

			$this->args = wp_parse_args( $args, array(
				'fields_layout' => 'column',
				'rows_divider'  => false,
				'required_mark' => '*',
				'submit_type'   => 'reload',
			) );

			if ( empty( $post ) ) {
				global $post;
			}

			$this->post    = $post;
			$this->captcha = $captcha;
			$this->preset  = new Jet_Engine_Booking_Forms_Preset( $this->form_id );

		}

		/**
		 * Set manager instance
		 *
		 * @param [type] $manager [description]
		 */
		public function set_manager( $manager ) {
			$this->manager = $manager;
		}

		/**
		 * Setup fields prop
		 */
		public function setup_fields( $fields = false ) {

			$raw_fields = '';

			if ( $fields ) {
				$raw_fields = $fields;
			} else {
				$raw_fields = get_post_meta( $this->form_id, '_form_data', true );
				$raw_fields = json_decode( wp_unslash( $raw_fields ), true );
			}

			if ( empty( $raw_fields ) ) {
				return;
			}

			// Ensure fields sorted by rows
			usort( $raw_fields, function( $a, $b ) {

				if ( $a['y'] == $b['y'] ) {
					return 0;
				}
				return ( $a['y'] < $b['y'] ) ? -1 : 1;

			} );

			$this->fields = $raw_fields;

			$sorted = array();
			$y      = false;

			foreach ( $raw_fields as $field ) {

				$is_page_break = ! empty( $field['settings']['is_page_break'] ) ? true : false;

				if ( $is_page_break ) {
					$this->pages++;
				}

				if ( false === $y ) {
					$y = $field['y'];
				}

				if ( $field['y'] === $y ) {

					if ( empty( $sorted[ $y ] ) ) {
						$sorted[ $y ] = array();
					}

					$sorted[ $y ][] = $field;

				} else {

					usort( $sorted[ $y ], function( $a, $b ) {

						if ( $a['x'] == $b['x'] ) {
							return 0;
						}
						return ( $a['x'] < $b['x'] ) ? -1 : 1;

					} );

					$y = $field['y'];

					$sorted[ $y ][] = $field;

				}


			}

			// Ensure last row is sorted
			usort( $sorted[ $y ], function( $a, $b ) {

				if ( $a['x'] == $b['x'] ) {
					return 0;
				}
				return ( $a['x'] < $b['x'] ) ? -1 : 1;

			} );

			$this->rows = $sorted;

		}

		/**
		 * Get hidden value
		 *
		 * @return string
		 */
		public function get_hidden_val( $args = array() ) {

			if ( empty( $this->post ) ) {
				return null;
			}

			$from = isset( $args['hidden_value'] ) ? $args['hidden_value'] : 'post_id';

			switch ( $from ) {

				case 'post_title':
					return get_the_title( $this->post->ID );

				case 'post_url':
					return get_permalink( $this->post->ID );

				case 'post_meta':

					$key = ! empty( $args['hidden_value_field'] ) ? $args['hidden_value_field'] : '';

					if ( ! $key ) {
						return null;
					} else {
						return get_post_meta( $this->post->ID, $key, true );
					}

				case 'query_var':

					$key = ! empty( $args['query_var_key'] ) ? $args['query_var_key'] : '';

					if ( ! $key ) {
						return null;
					} else {
						return isset( $_GET[ $key ] ) ? esc_attr( $_GET[ $key ] ) : null;
					}

				case 'user_id':
					if ( ! is_user_logged_in() ) {
						return null;
					} else {
						return get_current_user_id();
					}

				case 'user_email':
					if ( ! is_user_logged_in() ) {
						return null;
					} else {
						$user = wp_get_current_user();
						return $user->user_email;
					}

				case 'user_name':
					if ( ! is_user_logged_in() ) {
						return null;
					} else {
						$user = wp_get_current_user();
						return $user->display_name;
					}

				case 'author_id':

					$post_id = get_the_ID();

					if ( ! $post_id ) {
						return null;
					} else {
						return get_the_author_meta( 'ID' );
					}

				case 'author_email':

					$post_id = get_the_ID();

					if ( ! $post_id ) {
						return null;
					} else {
						return get_the_author_meta( 'user_email' );
					}

				case 'author_name':

					$post_id = get_the_ID();

					if ( ! $post_id ) {
						return null;
					} else {
						return get_the_author_meta( 'display_name' );
					}

				case 'current_date':
					return date_i18n( get_option( 'date_format' ) );

				default:

					if ( ! empty( $args['default'] ) ) {
						return $args['default'];
					} else {
						return $this->post->ID;
					}

			}

		}

		/**
		 * Render custom form item template
		 *
		 * @param  [type] $object_id [description]
		 * @param  [type] $args      [description]
		 * @return [type]            [description]
		 */
		public function get_custom_template( $object_id, $args ) {

			$listing_id = ! empty( $args['custom_item_template_id'] ) ? $args['custom_item_template_id'] : false;
			$listing_id = absint( $listing_id );

			if ( ! $listing_id ) {
				return __( 'Please select template', 'jet-engine' ) . '<br>';
			}

			global $wp_query;
			$default_object = $wp_query->queried_object;

			$options_from = ! empty( $args['field_options_from'] ) ? $args['field_options_from'] : 'posts';

			if ( 'terms' === $options_from ) {
				$object = get_term( $object_id );
			} else {
				$object = get_post( $object_id );
			}

			$wp_query->queried_object = $object;
			jet_engine()->listings->data->set_current_object( $object );

			jet_engine()->frontend->set_listing( $listing_id );

			$content = jet_engine()->frontend->get_listing_item( $object );

			$result = sprintf(
				'<div class="jet-form__field-template jet-listing-dynamic-post-%1$d" data-value="%1$d">%2$s</div>',
				$object_id,
				apply_filters( 'jet-engine/forms/custom-template-content', $content, $object_id, $listing_id )
			);

			$wp_query->queried_object = $default_object;
			jet_engine()->listings->data->set_current_object( $wp_query->queried_object );

			return $result;

		}

		/**
		 * Get required attribute value
		 *
		 * @param  [type] $args [description]
		 * @return [type]       [description]
		 */
		public function get_required_val( $args ) {

			if ( ! empty( $args['required'] ) && ( 'required' === $args['required'] || true === $args['required'] ) ) {
				return 'required';
			}

			return '';

		}

		/**
		 * Get calulation formula for calculated field
		 *
		 * @return [type] [description]
		 */
		public function get_calculated_data( $args ) {

			if ( empty( $args['calc_formula'] ) ) {
				return '';
			}

			$listen_fields = array();

			$formula = preg_replace_callback(
				'/%([a-zA-Z]+)::([a-zA-Z0-9-_]+)%/',
				function( $matches ) use ( &$listen_fields ) {

					if ( 'field' === strtolower( $matches[1] ) ) {
						$listen_fields[] = $matches[2];
						return '%' . $matches[2] . '%';
					}

					if ( 'meta' === strtolower( $matches[1] ) ) {
						return get_post_meta( $this->post->ID, $matches[2], true );
					}

				},
				$args['calc_formula']
			);

			return array(
				'formula'       => $formula,
				'listen_fields' => $listen_fields,
			);

		}

		/**
		 * Add attribute
		 */
		public function add_attribute( $attr, $value = null ) {

			if ( '' === $value ) {
				return;
			}

			if ( ! isset( $this->attrs[ $attr ] ) ) {
				$this->attrs[ $attr ] = $value;
			} else {
				$this->attrs[ $attr ] .= ' ' . $value;
			}

		}

		/**
		 * Reset attributes array
		 */
		public function reset_attributes() {
			$this->attrs = array();
		}

		/**
		 * Render current attributes string
		 *
		 * @return [type] [description]
		 */
		public function render_attributes_string() {

			foreach ( $this->attrs as $attr => $value ) {
				printf( ' %1$s="%2$s"', $attr, $value );
			}

			$this->attrs = array();

		}

		/**
		 * Render form field by passed arguments.
		 *
		 * @param  array  $args [description]
		 * @return [type]       [description]
		 */
		public function render_field( $args = array() ) {

			if ( empty( $args['type'] ) ) {
				return;
			}

			$defaults = array(
				'default'     => '',
				'name'        => '',
				'placeholder' => '',
				'required'    => false,
			);

			$template = null;

			// Prepare defaults
			switch ( $args['type'] ) {

				case 'hidden':

					if ( empty( $args['default'] ) ) {
						$defaults['default'] = $this->get_hidden_val( $args );
					}

					if ( isset( $args['default'] ) && empty( $args['default'] ) ) {
						unset( $args['default'] );
					}

					break;

				case 'number':
				case 'range':

					$defaults['min'] = '';
					$defaults['max'] = '';
					$defaults['step'] = 1;

					break;

				case 'text':

					$defaults['field_type'] = 'text';

					break;

				case 'calculated':

					$defaults['formula']  = '';
					$args['required']     = false;

					break;

				case 'submit':

					$defaults['label']      = __( 'Submit', 'jet-engine' );
					$defaults['class_name'] = '';

					$this->is_submit_row = true;

					break;

				case 'page_break':

					$defaults['label']      = __( 'Submit', 'jet-engine' );
					$defaults['class_name'] = '';

					$this->is_page_break_row = true;

					break;

				case 'media':
					Jet_Engine_Forms_File_Upload::instance()->set_custom_messages( $this->form_id );
					Jet_Engine_Forms_File_Upload::instance()->enqueue_upload_script();

					add_filter(
						'jet-engine/compatibility/popup-package/the_content',
						array( Jet_Engine_Forms_File_Upload::instance(), 'ensure_media_js' ), 10, 2
					);

					break;

				case 'textarea':
				case 'select':
				case 'checkboxes':
				case 'radio':
				case 'date':
				case 'time':
				case 'wysiwyg':
				case 'heading':
				case 'group_break':

					// Ensure template not rewritten
					$template = false;

					if ( 'wysiwyg' === $args['type'] ) {

						wp_localize_script( 
							'jet-engine-frontend-forms', 
							'JetEngineFormsEditor',
							array(
								'hasEditor' => true,
							)
						);

						add_filter(
							'jet-engine/compatibility/popup-package/the_content',
							array( $this, 'ensure_wysiwyg_js' ), 10, 2
						);
					}

					break;

				default:

					if ( 'hidden' !== $args['type'] ) {
						$this->is_hidden_row = false;
					}

					/**
					 * Render custom field
					 */
					do_action( 'jet-engine/forms/booking/render-field/' . $args['type'], $args, $this );

					/**
					 * Or just get custom template for field
					 */
					$template = apply_filters(
						'jet-engine/forms/booking/field-template/' . $args['type'],
						$template,
						$args,
						$this
					);

					if ( ! $template ) {
						return;
					} else {
						break;
					}

			}

			$sanitized_args = array();

			foreach ( $args as $key => $value ) {
				$sanitized_args[ $key ] = $value;
			}

			$args = wp_parse_args( $sanitized_args, $defaults );

			if ( ! $template ) {
				$template_name = str_replace( '_', '-', $args['type'] );
				$template      = jet_engine()->get_template( 'forms/fields/' . $template_name . '.php' );
			}

			// Ensure args
			switch ( $args['type'] ) {

				case 'select':
				case 'checkboxes':
				case 'radio':

					$args['field_options'] = $this->get_field_options( $args );

					break;
			}

			$label        = $this->get_field_label( $args );
			$desc         = $this->get_field_desc( $args );
			$layout       = $this->args['fields_layout'];
			$preset_value = $this->preset->get_field_value( $args['name'], $args );

			if ( $preset_value['rewrite'] ) {
				$args['default'] = $preset_value['value'];
			} else {
				$args['default'] = $this->maybe_adjust_value( $args );
			}

			if ( 'column' === $layout ) {
				include jet_engine()->get_template( 'forms/common/field-column.php' );
			} else {
				include jet_engine()->get_template( 'forms/common/field-row.php' );
			}

			if ( 'hidden' !== $args['type'] ) {
				$this->is_hidden_row = false;
			}

		}

		/**
		 * Ensure wysiwyg JS is enqueued
		 *
		 * @param  [type] $content [description]
		 * @return [type]          [description]
		 */
		public function ensure_wysiwyg_js( $content, $popup_data = array() ) {

			if ( ! empty( $popup_data['hasEditor'] ) ) {
				return $content;
			}

			ob_start();

			_WP_Editors::editor_js();
			_WP_Editors::force_uncompressed_tinymce();
			_WP_Editors::enqueue_scripts();

			wp_enqueue_editor();
			
			wp_scripts()->done[] = 'jquery-core';
			wp_scripts()->done[] = 'jquery-migrate';
			wp_scripts()->done[] = 'jquery';

			print_footer_scripts();

			return $content . ob_get_clean();
			
		}

		/**
		 * Try to get values from request if passed
		 * @param  [type] $args [description]
		 * @return [type]       [description]
		 */
		public function maybe_adjust_value( $args ) {

			if ( 'hidden' === $args['type'] ) {
				return $args['default'];
			}

			$value       = $args['default'];
			$request_val = ! empty( $_REQUEST['values'] ) ? $_REQUEST['values'] : array();

			if ( ! empty( $request_val[ $args['name'] ] ) ) {
				$value = $request_val[ $args['name'] ];
			}

			return $value;

		}

		/**
		 * Returns field label
		 *
		 * @return [type] [description]
		 */
		public function get_field_label( $args ) {

			$no_labels = $this->get_no_labels_types();

			ob_start();

			if ( ! empty( $args['label'] ) && ! in_array( $args['type'], $no_labels ) ) {
				include jet_engine()->get_template( 'forms/common/field-label.php' );
			}

			return ob_get_clean();

		}

		/**
		 * Returns field description
		 *
		 * @return [type] [description]
		 */
		public function get_field_desc( $args ) {

			$no_labels = $this->get_no_labels_types();

			ob_start();
			if ( ! empty( $args['desc'] ) && ! in_array( $args['type'], $no_labels ) ) {
				include jet_engine()->get_template( 'forms/common/field-description.php' );
			}
			return ob_get_clean();

		}

		/**
		 * Return field types without labels
		 *
		 * @return [type] [description]
		 */
		public function get_no_labels_types() {
			return array( 'submit', 'hidden', 'page_break', 'group_break' );
		}

		/**
		 * Returns field options list
		 *
		 * @return array
		 */
		public function get_field_options( $args ) {

			$options_from = ! empty( $args['field_options_from'] ) ? $args['field_options_from'] : 'manual_input';
			$options      = array();

			if ( 'manual_input' === $options_from ) {

				if ( ! empty( $args['field_options'] ) ) {

					foreach ( $args['field_options'] as $option ) {

						$item = array(
							'value' => $option['value'],
							'label' => $option['label'],
						);

						if ( isset( $option['calculate'] ) && '' !== $option['calculate'] ) {
							$item['calculate'] = $option['calculate'];
						}

						$options[] = $item;
					}

				}

			} elseif ( 'posts' === $options_from ) {

				$post_type = ! empty( $args['field_options_post_type'] ) ? $args['field_options_post_type'] : false;

				if ( ! $post_type ) {
					return $options;
				}

				$posts = get_posts( array(
					'post_status'    => 'publish',
					'posts_per_page' => -1,
					'post_type'      => $post_type,
				) );

				if ( empty( $posts ) ) {
					return $options;
				}

				return wp_list_pluck( $posts, 'post_title', 'ID' );

			} elseif ( 'terms' === $options_from ) {

				$tax = ! empty( $args['field_options_tax'] ) ? $args['field_options_tax'] : false;

				if ( ! $tax ) {
					return $options;
				}

				$terms = get_terms( array(
					'taxonomy'   => $tax,
					'hide_empty' => false,
				) );

				if ( empty( $terms ) || is_wp_error( $terms ) ) {
					return $options;
				}

				return wp_list_pluck( $terms, 'name', 'term_id' );

			} elseif ( 'generate' === $options_from ) {

				$generator = ! empty( $args['generator_function'] ) ? $args['generator_function'] : false;
				$field     = ! empty( $args['generator_field'] ) ? $args['generator_field'] : false;

				if ( ! $generator || ! $field ) {
					return $options;
				}

				if ( ! $this->manager ) {
					return $options;
				}

				$generators         = $this->manager->get_options_generators();
				$generator_instance = isset( $generators[ $generator ] ) ? $generators[ $generator ] : false;

				if ( ! $generator_instance ) {
					return $options;
				} else {
					return $generator_instance->generate( $field );
				}

			} else {

				$key = ! empty( $args['field_options_key'] ) ? $args['field_options_key'] : '';

				if ( $key ) {
					$options = get_post_meta( $this->post->ID, $key, true );
					$options = $this->maybe_parse_repeater_options( $options );
				}

			}

			return $options;

		}

		/**
		 * Returns form action url
		 *
		 * @return [type] [description]
		 */
		public function get_form_action_url() {

			$action = add_query_arg(
				array(
					'jet_engine_action' => 'book',
				),
				home_url( '/' )
			);

			return apply_filters( 'jet-engine/forms/booking/form-action-url', $action, $this );

		}

		/**
		 * Returns form refer url
		 *
		 * @return [type] [description]
		 */
		public function get_form_refer_url() {

			global $wp;
			$refer = home_url( $wp->request );

			if ( ! empty( $_SERVER['QUERY_STRING'] ) ) {
				$refer = trailingslashit( $refer ) . '?' . $_SERVER['QUERY_STRING'];
			}

			return apply_filters( 'jet-engine/forms/booking/form-refer-url', $refer, $this );

		}

		/**
		 * Open form wrapper
		 *
		 * @return [type] [description]
		 */
		public function start_form() {

			do_action( 'jet-engine/forms/booking/before-start-form', $this );

			$this->add_attribute( 'class', 'jet-form' );
			$this->add_attribute( 'class', 'layout-' . $this->args['fields_layout'] );
			$this->add_attribute( 'class', 'submit-type-' . $this->args['submit_type'] );
			$this->add_attribute( 'action', $this->get_form_action_url() );
			$this->add_attribute( 'method', 'POST' );
			$this->add_attribute( 'data-form-id', $this->form_id );

			$this->rendered_rows = 0;

			include jet_engine()->get_template( 'forms/common/start-form.php' );

			do_action( 'jet-engine/forms/booking/after-start-form', $this );

		}

		/**
		 * Open form wrapper
		 *
		 * @return [type] [description]
		 */
		public function start_form_row() {

			if ( ! $this->is_hidden_row ) {
				$this->rendered_rows++;
			}

			if ( true === $this->args['rows_divider'] && 1 < $this->rendered_rows && ! $this->is_hidden_row ) {
				echo '<div class="jet-form__divider"></div>';
			}

			do_action( 'jet-engine/forms/booking/before-start-form-row', $this );

			$this->add_attribute( 'class', 'jet-form-row' );

			if ( $this->is_hidden_row ) {
				$this->add_attribute( 'class', 'jet-form-row--hidden' );
			}

			if ( $this->is_submit_row ) {
				$this->add_attribute( 'class', 'jet-form-row--submit' );
			}

			if ( $this->is_page_break_row ) {
				$this->add_attribute( 'class', 'jet-form-row--page-break' );
			}

			if ( 1 === $this->rendered_rows ) {
				$this->add_attribute( 'class', 'jet-form-row--first-visible' );
			}

			include jet_engine()->get_template( 'forms/common/start-form-row.php' );

			do_action( 'jet-engine/forms/booking/after-start-form-row', $this );

		}

		/**
		 * Close form wrapper
		 *
		 * @return [type] [description]
		 */
		public function end_form() {

			do_action( 'jet-engine/forms/booking/before-end-form', $this );

			include jet_engine()->get_template( 'forms/common/end-form.php' );

			do_action( 'jet-engine/forms/booking/after-end-form', $this );

		}

		/**
		 * Close form wrapper
		 *
		 * @return [type] [description]
		 */
		public function end_form_row() {

			do_action( 'jet-engine/forms/booking/before-end-form-row', $this );

			include jet_engine()->get_template( 'forms/common/end-form-row.php' );

			do_action( 'jet-engine/forms/booking/after-end-form-row', $this );

		}

		/**
		 * Render passed form row
		 *
		 * @param  [type] $row [description]
		 * @return [type]      [description]
		 */
		public function render_row( $row ) {

			$filled = 0;

			foreach ( $row as $field ) {

				$push  = '';
				$col   = 'jet-form-col jet-form-col-' . $field['w'];

				if ( 0 < $filled ) {
					if ( $filled < $field['x'] ) {
						$push   = $field['x'] - $filled;
						$filled = $filled + $push;
						$push   = 'jet-form-push-' . $push;
					}
				} else {
					if ( 0 < $field['x'] ) {
						$push   = 'jet-form-push-' . $field['x'];
						$filled = $filled + $field['x'];
					}
				}

				if ( $this->is_field_visible( $field['settings'] ) ) {

					$type       = ! empty( $field['settings']['type'] ) ? $field['settings']['type'] : 'text';
					$class_name = ! empty( $field['settings']['class_name'] ) ? $field['settings']['class_name'] : '';

					$classes = array(
						$col,
						$push,
						'field-type-' . $type,
						$class_name,
					);

					echo '<div class="' . implode( ' ', $classes ) . '">';

					$this->render_field( $field['settings'] );

					echo '</div>';

				}


				$filled = $filled + $field['w'];

			}

		}

		/**
		 * Returns true if field is visible
		 *
		 * @param  array   $field [description]
		 * @return boolean        [description]
		 */
		public function is_field_visible( $field = array() ) {

			// For backward compatibility and hidden fields
			if ( empty( $field['visibility'] ) ) {
				return true;
			}

			// If is visible for all - show field
			if ( 'all' === $field['visibility'] ) {
				return true;
			}

			// If is visible for logged in users and user is logged in - show field
			if ( 'logged_id' === $field['visibility'] && is_user_logged_in() ) {
				return true;
			}

			// If is visible for not logged in users and user is not logged in - show field
			if ( 'not_logged_in' === $field['visibility'] && ! is_user_logged_in() ) {
				return true;
			}

			return false;

		}

		/**
		 * Render from HTML
		 * @return [type] [description]
		 */
		public function render_form( $force_update = false ) {

			$pre_render = apply_filters( 'jet-engine/forms/pre-render/' . $this->form_id, false );

			if ( $pre_render ) {
				return;
			}

			if ( ! $this->preset->sanitize_source() ) {
				echo 'You are not permitted to submit this form!';
				return;
			}

			if ( ! $force_update ) {

				$cached = $this->get_form_cache();

				if ( $cached ) {
					echo $cached;
					return;
				}

			}

			ob_start();

			$this->start_form();

			$this->render_field( array(
				'type'    => 'hidden',
				'default' => $this->form_id,
				'name'    => '_jet_engine_booking_form_id',
			) );

			$this->render_field( array(
				'type'    => 'hidden',
				'default' => $this->get_form_refer_url(),
				'name'    => '_jet_engine_refer',
			) );

			foreach ( $this->rows as $row ) {

				$this->is_hidden_row     = true;
				$this->is_submit_row     = false;
				$this->is_page_break_row = false;

				ob_start();
				$this->render_row( $row );
				$rendered_row = ob_get_clean();

				$this->maybe_start_page();

				$this->start_form_row( $row );

				echo $rendered_row;

				$this->end_form_row( $row );

				$this->maybe_end_page();

			}

			if ( $this->captcha ) {
				$this->captcha->render( $this->form_id );
			}

			$this->maybe_end_page( true );

			$this->end_form();

			$form = ob_get_clean();

			$this->set_form_cache( $form );

			echo $form;

		}

		/**
		 * Maybe start new page
		 *
		 * @return [type] [description]
		 */
		public function maybe_start_page() {

			if ( 0 >= $this->pages ) {
				return;
			}

			if ( false === $this->start_new_page ) {
				return;
			}

			$this->start_new_page = false;
			$this->has_prev       = true;

			$this->page++;

			do_action( 'jet-engine/forms/before-page-start', $this );

			$hidden_class = '';

			if ( 1< $this->page ) {
				$hidden_class = 'jet-form-page--hidden';
			}

			include jet_engine()->get_template( 'forms/common/start-page.php' );

			do_action( 'jet-engine/forms/after-page-start', $this );

		}

		/**
		 * Maybe start new page
		 *
		 * @return [type] [description]
		 */
		public function maybe_end_page( $is_last = false ) {

			if ( 0 >= $this->pages ) {
				return;
			}

			if ( ! $is_last && ! $this->is_page_break_row ) {
				return;
			}

			$this->start_new_page = true;

			do_action( 'jet-engine/forms/before-page-end', $this );

			include jet_engine()->get_template( 'forms/common/end-page.php' );

			do_action( 'jet-engine/forms/after-page-end', $this );

		}

		/**
		 * Get rendered form
		 * @return [type] [description]
		 */
		public function get_form_cache() {
			return apply_filters(
				'jet-engine/forms/booking/form-cache',
				get_post_meta( $this->form_id, '_rendered_form', true ),
				$this->form_id
			);
		}

		/**
		 * Store rendered form
		 * @param [type] $content [description]
		 */
		public function set_form_cache( $content = null ) {
			update_post_meta( $this->form_id, '_rendered_form', $content );
		}

		/**
		 * Prepare repeater options fields
		 *
		 * @param  [type] $options [description]
		 * @return [type]          [description]
		 */
		public function maybe_parse_repeater_options( $options ) {

			$result = array();

			if ( empty( $options ) ) {
				return $result;
			}

			if ( ! is_array( $options ) ) {
				$options = array( $options );
			}

			if ( in_array( 'true', $options ) || in_array( 'false', $options ) ) {
				return $this->get_checked_options( $options );
			}

			$option_values = array_values( $options );

			if ( ! is_array( $option_values[0] ) ) {

				foreach ( $options as $key => $value ) {
					$result[] = array(
						'value' => is_string( $key ) ? $key : $value,
						'label' => $value,
					);
				}

				return $result;
			}

			foreach ( $options as $option ) {

				$values = array_values( $option );

				if ( ! isset( $values[0] ) ) {
					continue;
				}

				$result[] = array(
					'value' => $values[0],
					'label' => isset( $values[1] ) ? $values[1] : $values[0],
				);

			}

			return $result;

		}

		/**
		 * Returns checked options
		 */
		public function get_checked_options( $options ) {

			$result = array();

			foreach ( $options as $label => $checked ) {
				$checked = filter_var( $checked, FILTER_VALIDATE_BOOLEAN );

				if ( $checked ) {
					$result[] = array(
						'value' => $label,
						'label' => $label,
					);
				}

			}

			return $result;

		}

	}

}
