<?php
namespace Jet_Form_Builder\Blocks\Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
abstract class Base {

	public $attrs = array();
	public $args = array();

	public function __construct( $args = array() ) {
		$this->args = $args;
	}

	abstract public function get_name();

	/**
	 * Returns field label
	 *
	 * @return [type] [description]
	 */
	public function get_field_label() {

		ob_start();
		if ( ! empty( $this->args['label'] ) && $this->label_allowed() ) {
			$args = $this->args;
			include $this->get_template( 'common/field-label.php' );
		}
		return ob_get_clean();

	}

	/**
	 * Returns field description
	 *
	 * @return [type] [description]
	 */
	public function get_field_desc() {

		ob_start();
		if ( ! empty( $this->args['desc'] ) && $this->label_allowed() ) {
			$args = $this->args;
			include $this->get_template( 'common/field-description.php' );
		}
		return ob_get_clean();

	}

	/**
	 * Returns template path
	 *
	 * @param  [type] $path [description]
	 * @return [type]       [description]
	 */
	public function get_template( $path ) {
		return JET_FORM_BUILDER_PATH . 'templates/' . $path;
	}

	/**
	 * Defines if this form control supports label
	 *
	 * @return [type] [description]
	 */
	public function label_allowed() {
		return true;
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
	 * Returns field options list
	 *
	 * @return array
	 */
	public function get_field_options() {

		$args         = $this->args;
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
	 * Get required attribute value
	 *
	 * @param  [type] $args [description]
	 * @return [type]       [description]
	 */
	public function get_required_val() {

		if (
			! empty( $this->args['required'] )
			&& ( 'required' === $this->args['required'] || true === $this->args['required'] )
		) {
			return 'required';
		}

		return '';

	}

	/**
	 * Returns field name with repeater prefix if needed
	 */
	public function get_field_name( $name ) {

		/*
		Find some solution for the repeater field

		if ( $this->current_repeater ) {
			$repeater_name = ! empty( $this->current_repeater['name'] ) ? $this->current_repeater['name'] : 'repeater';
			$index = ( false !== $this->current_repeater_i ) ? $this->current_repeater_i : '__i__';
			$name = sprintf( '%1$s[%2$s][%3$s]', $repeater_name, $index, $name );
		}*/

		return $name;

	}

	/**
	 * Returns field ID with repeater prefix if needed
	 */
	public function get_field_id( $name ) {

		if ( is_array( $name ) ) {
			$name = $name['name'];
		}

		/*
		Find some solution for the repeater field
		if ( $this->current_repeater ) {
			$repeater_name = ! empty( $this->current_repeater['name'] ) ? $this->current_repeater['name'] : 'repeater';
			$index = ( false !== $this->current_repeater_i ) ? $this->current_repeater_i : '__i__';
			$name = sprintf( '%1$s_%2$s_%3$s', $repeater_name, $index, $name );
		}*/

		return $name;

	}

	public function render() {

		$args = $this->args;
		$defaults = array(
			'default'     => '',
			'name'        => '',
			'placeholder' => '',
			'required'    => false,
		);

		$sanitized_args = array();

		foreach ( $args as $key => $value ) {
			$sanitized_args[ $key ] = $value;
		}

		//var_dump( $sanitized_args ); die;

		$args          = wp_parse_args( $sanitized_args, $defaults );
		$template_name = $this->get_name();
		$template      = $this->get_template( 'fields/' . $template_name . '.php' );
		$label         = $this->get_field_label();
		$desc          = $this->get_field_desc();
		$layout        = 'column';
		
		if ( 'column' === $layout ) {
			include $this->get_template( 'common/field-column.php' );
		} else {
			include $this->get_template( 'common/field-row.php' );
		}

	}

}
