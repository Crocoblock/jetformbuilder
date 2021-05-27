<?php


namespace Jet_Form_Builder\Blocks\Types;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Plugin;

trait Base_Select_Radio_Check {

	/**
	 * Return data for Select, Checkboxes and Radio fields
	 *
	 * @param array $merged
	 *
	 * @return array
	 */
	public function get_local_data_check_radio_select( $merged = array() ) {
		return array_merge( array(
			'post_types_list' => Tools::get_post_types_for_options(),
			'taxonomies_list' => Tools::get_taxonomies_for_js(),
			'generators_list' => Tools::get_generators_list_for_js(),
		), $merged );
	}


	/*
   * Returns field options list
   *
   * @return array
   */
	public function get_field_options() {
		$args = $this->block_attrs;

		$options_from = ! empty( $args['field_options_from'] ) ? $args['field_options_from'] : 'manual_input';
		$options      = array();
		$value_from   = ! empty( $args['value_from_key'] ) ? $args['value_from_key'] : false;
		$calc_from    = ! empty( $args['calculated_value_from_key'] ) ? $args['calculated_value_from_key'] : false;


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
				'posts_per_page' => - 1,
				'post_type'      => $post_type,
			) );

			if ( empty( $posts ) ) {
				return $options;
			}

			$result     = array();
			$post_props = array( 'post_title', 'post_content', 'post_name', 'post_excerpt' );

			foreach ( $posts as $post ) {

				$item = array(
					'value' => $post->ID,
					'label' => $post->post_title,
				);

				if ( ! empty( $value_from ) ) {
					if ( in_array( $value_from, $post_props ) ) {
						$item['value'] = $post->$value_from;
					} else {
						$item['value'] = get_post_meta( $post->ID, $value_from, true );
					}
				}

				if ( ! empty( $calc_from ) ) {
					if ( in_array( $calc_from, $post_props ) ) {
						$item['calculate'] = $post->$calc_from;
					} else {
						$item['calculate'] = get_post_meta( $post->ID, $calc_from, true );
					}
				}

				$result[] = $item;

			}

			return $result;

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

			$result = array();

			foreach ( $terms as $term ) {

				$item = array(
					'value' => $term->term_id,
					'label' => $term->name,
				);

				if ( ! empty( $value_from ) ) {
					$item['value'] = get_term_meta( $term->term_id, $value_from, true );
				}

				if ( ! empty( $calc_from ) ) {
					$item['calculate'] = get_term_meta( $term->term_id, $calc_from, true );
				}

				$result[] = $item;

			}

			return $result;

		} elseif ( 'generate' === $options_from ) {

			$generator = ! empty( $args['generator_function'] ) ? $args['generator_function'] : false;
			$field     = ! empty( $args['generator_field'] ) ? $args['generator_field'] : false;

			if ( ! $generator ) {
				return $options;
			}

			if ( ! Plugin::instance()->form ) {
				return $options;
			}

			$generators         = Plugin::instance()->form->get_options_generators();
			$generator_instance = isset( $generators[ $generator ] ) ? $generators[ $generator ] : false;

			if ( ! $generator_instance ) {
				return $options;
			}

			$generated = $generator_instance->generate( $field );
			$result    = array();

			if ( ! empty( $value_from || ! empty( $calc_from ) ) ) {
				foreach ( $generated as $key => $data ) {

					if ( is_array( $data ) ) {
						$item = $data;
					} else {
						$item = array(
							'value' => $key,
							'label' => $data,
						);
					}

					$post_id = $item['value'];

					if ( ! empty( $value_from ) ) {
						$item['value'] = get_post_meta( $post_id, $value_from, true );
					}

					if ( ! empty( $calc_from ) ) {
						$item['calculate'] = get_post_meta( $post_id, $calc_from, true );
					}

					$result[] = $item;

				}

				return $result;

			} else {
				return $generated;
			}

		} else {

			$key = ! empty( $args['field_options_key'] ) ? $args['field_options_key'] : '';

			if ( $key ) {
				$options = get_post_meta( Live_Form::instance()->post->ID, $key, true );
				$options = $this->maybe_parse_repeater_options( $options );
			}

		}

		return $options;

	}

	/**
	 * Prepare repeater options fields
	 *
	 * @param  [type] $options [description]
	 *
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
	 *
	 * @param $options
	 *
	 * @return array
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