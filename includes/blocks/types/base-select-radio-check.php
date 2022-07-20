<?php


namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Plugin;

/**
 * @property array block_attrs
 *
 * Trait Base_Select_Radio_Check
 * @package Jet_Form_Builder\Blocks\Types
 */
trait Base_Select_Radio_Check {

	/**
	 * Return data for Select, Checkboxes and Radio fields
	 *
	 * @param array $merged
	 *
	 * @return array
	 */
	public function get_local_data_check_radio_select( $merged = array() ) {
		$options = array(
			'post_types_list' => Tools::get_post_types_for_options(),
			'taxonomies_list' => Tools::get_taxonomies_for_js(),
			'generators_list' => Tools::get_generators_list_for_js(),
		);

		$active_jet_engine = false !== Tools::get_jet_engine_version();

		$options['glossaries_list'] = $active_jet_engine
			? $this->get_glossaries_list()
			: array();

		$options['listings_list'] = $active_jet_engine
			? jet_engine()->listings->get_listings_for_options( 'blocks' )
			: array();

		return array_merge( $options, $merged );
	}

	private function get_glossaries_list() {
		return array_map(
			function ( $glossary ) {
				return array(
					'label' => $glossary['name'],
					'value' => $glossary['id'],
				);
			},
			jet_engine()->glossaries->settings->get()
		);
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

			$posts = get_posts(
				apply_filters(
					'jet-form-builder/render-choice/query-options/posts',
					array(
						'post_status'    => 'publish',
						'posts_per_page' => - 1,
						'post_type'      => $post_type,
					)
				)
			);

			if ( empty( $posts ) ) {
				return $options;
			}

			$result     = array();
			$post_props = array( 'post_title', 'post_content', 'post_name', 'post_excerpt' );

			foreach ( $posts as $post ) {

				$item = array(
					'object_id' => $post->ID,
					'value'     => $post->ID,
					'label'     => apply_filters( 'jet-form-builder/render-choice/label/posts', $post->post_title, $post ),
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

			$terms = get_terms(
				apply_filters(
					'jet-form-builder/render-choice/query-options/terms',
					array(
						'taxonomy'   => $tax,
						'hide_empty' => false,
					)
				)
			);

			if ( empty( $terms ) || is_wp_error( $terms ) ) {
				return $options;
			}

			$result = array();

			foreach ( $terms as $term ) {

				$item = array(
					'object_id' => $term->term_id,
					'value'     => $term->term_id,
					'label'     => apply_filters( 'jet-form-builder/render-choice/label/terms', $term->name, $term ),
				);

				if ( ! empty( $value_from ) ) {
					if ( isset( $term->$value_from ) ) {
						$item['value'] = $term->$value_from;
					} else {
						$item['value'] = get_term_meta( $term->term_id, $value_from, true );
					}
				}

				if ( ! empty( $calc_from ) ) {
					$item['calculate'] = get_term_meta( $term->term_id, $calc_from, true );
				}

				$result[] = $item;

			}

			return $result;

		} elseif ( 'generate' === $options_from ) {

			$generator = ! empty( $args['generator_function'] ) ? $args['generator_function'] : false;

			if ( ! $generator ) {
				return $options;
			}

			if ( ! Plugin::instance()->form ) {
				return $options;
			}

			$generators = Plugin::instance()->form->get_options_generators();

			/** @var \Jet_Form_Builder\Generators\Base $generator_instance */
			$generator_instance = isset( $generators[ $generator ] ) ? $generators[ $generator ] : false;

			if ( ! $generator_instance ) {
				return $options;
			}

			$generated = $generator_instance->get_values( $args );
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

					$item['object_id'] = $item['value'];

					if ( ! empty( $value_from ) ) {
						$item['value'] = get_post_meta( $item['object_id'], $value_from, true );
					}

					if ( ! empty( $calc_from ) ) {
						$item['calculate'] = get_post_meta( $item['object_id'], $calc_from, true );
					}

					$result[] = $item;

				}

				return $result;

			} else {
				return $generated;
			}
		} elseif ( 'glossary' === $options_from ) {
			if ( ! empty( $args['glossary_id'] )
			     && false !== Tools::get_jet_engine_version()
			     && isset( jet_engine()->glossaries )
			) {
				$glossary = jet_engine()->glossaries->data->get_item_for_edit( absint( $args['glossary_id'] ) );

				if ( ! empty( $glossary ) && ! empty( $glossary['fields'] ) ) {
					$options = $glossary['fields'];
				}
			}

			return $options;
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
