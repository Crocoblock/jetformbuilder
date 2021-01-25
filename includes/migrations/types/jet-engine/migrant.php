<?php

namespace Jet_Form_Builder\Migrations\Types\Jet_Engine;

use Jet_Form_Builder\Blocks\Block_Generator;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Migrations\Base_Migrant;
use Jet_Form_Builder\Plugin;

class Migrant extends Base_Migrant {

	const BLOCKS_NAMESPACE = 'jet-forms/';

	private $prepared_fields = array();
	private $migrate_fields = array(
		'media'          => 'media-field',
		'hidden'         => 'hidden-field',
		'repeater_start' => 'repeater-field',
		'range'          => 'range-field',
		'submit'         => 'submit-field',
		'text'           => 'text-field',
		'wysiwyg'        => 'wysiwyg-field',
		'time'           => 'time-field',
		'date'           => 'date-field',
		'datetime-local' => 'datetime-field',
		'number'         => 'number-field',
		'select'         => 'select-field',
		'checkboxes'     => 'checkbox-field',
		'calculated'     => 'calculated-field',
		'radio'          => 'radio-field',
		'page_break'     => 'form-break-field',
		'textarea'       => 'textarea-field',
		'heading'        => 'heading-field',
		'group_break'    => 'group-break-field',
	);

	private $raw_fields;

	public function source_fields() {
		$data = json_decode( wp_unslash( $this->form_meta_data['_form_data'][0] ), true );
		unset( $this->form_meta_data['_form_data'] );

		return $this->prepare_fields( $data );
	}

	public function prepare_fields( $data ) {
		$this->raw_fields = $data;

		return $this->sort_raw_fields();
	}


	public function source_settings() {
		$settings = new Settings_Manager( $this->form_meta_data );

		return $settings->parse_settings()->get_all();
	}

	public function migrate_form() {
		$title = sprintf( '%1$s [%2$s]', $this->form_data->post_title, current_time( 'd/m/Y H:i' ) );

		return wp_insert_post( wp_slash( array(
			'post_status'  => $this->form_data->post_status,
			'post_type'    => Plugin::instance()->post_type->slug(),
			'post_title'   => $title,
			'post_author'  => $this->form_data->post_author,
			'post_content' => $this->fields,
			'meta_input'   => $this->settings,
		) ) );
	}

	public function sort_raw_fields() {

		usort( $this->raw_fields, function ( $first, $second ) {
			return $first['y'] - $second['y'];
		} );

		$column = false;

		foreach ( $this->raw_fields as $index => $current ) {
			if ( ! isset( $this->raw_fields[ $index + 1 ] ) ) {
				continue;
			}
			$next             = $this->raw_fields[ $index + 1 ];
			$not_child_column = $current['y'] !== $next['y'];

			if ( $not_child_column ) {
				$this->raw_fields[ $index ]['single_column_width'] = $this->calc_field_width_degrees( $current );
				$column                                            = false;
				continue;
			} elseif ( ! $column ) {
				$column = isset( $current['column_order'] ) ? $current['column_order'] : $index;
			}

			$current['column_width'] = $this->calc_field_width_degrees( $current );
			$next['column_width']    = $this->calc_field_width_degrees( $next );

			$this->add_field_in_column( $column, $current );
			$this->add_field_in_column( $column, $next );

			unset(
				$this->raw_fields[ $index + 1 ]
			);
		}

		foreach ( $this->raw_fields as $index => $field ) {
			if ( ! isset( $field['innerBlocks'] ) || empty( $field['innerBlocks'] ) ) {
				continue;
			}
			krsort( $field['innerBlocks'], SORT_NUMERIC );

			foreach ( $field['innerBlocks'] as $position => $inner_column ) {
				$next = next( $field['innerBlocks'] );

				$column_width = $this->get_beetween_column_width( $position, $next );

				if ( 0 !== $column_width ) {
					$column_position = $this->get_field_right_border_position( $next ) + $column_width / 2.00;
					$column_width    = $this->calc_width_degrees( $column_width );

					$field['innerBlocks'][ $column_position ] = $this->_get_child_column( $column_width );
				}
			}

			ksort( $field['innerBlocks'], SORT_NUMERIC );
			$this->raw_fields[ $index ] = $field;
		}

		$this->get_prepare_fields( $this->raw_fields );

		return ( new Block_Generator( $this->prepared_fields ) )->generate();
	}

	private function get_beetween_column_width( $position, $next ) {
		return $next ? ( $position - $this->get_field_right_border_position( $next ) ) : 0;
	}

	private function get_field_right_border_position( $field ) {
		return $field['columns'] + $field['position'];
	}


	private function calc_field_width_degrees( $field ) {
		return isset( $field['column_width'] )
			? $field['column_width']
			: $this->calc_width_degrees( $field['w'] );
	}

	private function calc_width_degrees( $count_columns ) {
		return number_format( ( $count_columns * 100 ) / 12, 2 );
	}

	private function get_prepare_fields( $fields ) {
		$inner = false;
		foreach ( $fields as $index => $field ) {
			if ( ! $inner && isset( $fields[ $index - 1 ] ) ) {
				$prev = $this->raw_fields[ $index - 1 ];

				$inner = 'repeater_start' === $prev['settings']['type'] ? $prev['settings']['name'] : false;

			} elseif ( 'repeater_end' === $field['settings']['type'] ) {
				$inner = false;
				continue;
			}

			$this->prepare_field( $field, $inner );
		}
	}

	private function add_field_in_column( $column_id, $field ) {
		if ( ! isset( $this->raw_fields[ $column_id ]['innerBlocks'] ) ) {
			$this->raw_fields[ $column_id ] = $this->_get_columns();
		}

		if ( ! isset( $this->raw_fields[ $column_id ]['innerBlocks'][ $current['x'] ] ) ) {

			$this->raw_fields[ $column_id ]['innerBlocks'][ $field['x'] ] = $this->_get_child_column( $field['column_width'],
				array(
					$this->get_prepare_field( $field )
				),
				array(
					'columns'  => $field['w'],
					'position' => $field['x']
				)
			);
		}
	}

	private function _get_columns( $innerColumns = array() ) {
		$response = array(
			'blockName'    => 'columns',
			'innerContent' => array(
				'<div class="wp-block-columns">',
				'</div>'
			)
		);

		return $innerColumns ? array_merge( $response, array( 'innerBlocks' => $innerColumns ) ) : $response;
	}

	private function _get_child_column( $width, $innerBlocks = array(), $additional_data = array() ) {
		return array_merge( array(
			'attrs'        => array(
				'width' => $width . '%'
			),
			'blockName'    => 'column',
			'innerBlocks'  => $innerBlocks,
			'innerContent' => array(
				'<div class="wp-block-column" style="flex-basis:' . $width . '%">',
				'</div>'
			)
		), $additional_data );
	}

	private function maybe_add_in_column( $field, $field_data ) {
		if ( ! isset( $field['single_column_width'] ) || 100 === (int) $field['single_column_width'] ) {
			return $field_data;
		}

		$columns = array();
		if ( 0 !== $field['x'] ) {
			$columns[] = $this->_get_child_column( $this->calc_width_degrees( $field['x'] ) );
		}

		$columns[] = $this->_get_child_column( $field['single_column_width'], array( $field_data ) );

		return $this->_get_columns( $columns );
	}

	public function prepare_field( $current, $inner = false ) {
		if ( isset( $current['innerBlocks'] ) && isset( $current['blockName'] ) ) {
			$this->save_prepare_field( $current, $inner );

			return;
		}

		$attrs      = $current['settings'];
		$field_type = $this->get_field_type( $attrs );
		$field_data = $this->get_prepare_field( $current, $field_type );

		if ( is_null( $field_data ) ) {
			return;
		}

		$this->save_prepare_field( $field_data, $inner, $attrs, $field_type );
	}

	private function save_prepare_field( $field_data, $inner, $attrs = array(), $field_type = null ) {
		if ( $inner ) {
			$this->prepared_fields[ $inner ]['innerBlocks'][] = $field_data;
		} elseif ( 'repeater-field' === $field_type ) {
			$this->prepared_fields[ $attrs['name'] ] = $field_data;
		} else {
			$this->prepared_fields[] = $field_data;
		}
	}

	public function get_prepare_field( $current, $field_type = false ) {
		$attrs = $current['settings'];

		if ( isset( $current['innerBlocks'] ) && ! empty( $current['innerBlocks'] ) ) {
			$this->prepared_fields[] = $current;

			return;
		} elseif ( ! $this->isset_field_type( $attrs ) ) {
			return;
		}
		if ( ! $field_type ) {
			$field_type = $this->get_field_type( $attrs );
		}

		$field_object = Plugin::instance()->blocks->get_field_by_name( $field_type );

		$field_data = array(
			'attrs'     => Tools::array_merge_intersect_key( $field_object->block_attributes( false ), $attrs ),
			'blockName' => self::BLOCKS_NAMESPACE . $field_type,
		);
		$field_data = $field_object->parse_exported_data( $field_data );
		$field_data = $this->maybe_add_conditional( $current, $field_data );

		return $this->maybe_add_in_column( $current, $field_data );
	}

	private function maybe_add_conditional( $current, $field_data ) {
		if ( ! isset( $current['conditionals'] ) || empty( $current['conditionals'] ) ) {
			return $field_data;
		}

		$response                  = array(
			'attrs'     => array( 'conditions' => $current['conditionals'] ),
			'blockName' => self::BLOCKS_NAMESPACE . 'conditional-block',
		);
		$response['innerBlocks'][] = $field_data;

		return $response;
	}

	private function isset_field_type( $field ) {
		return isset( $this->migrate_fields[ $field['type'] ] );
	}

	private function get_field_type( $field ) {
		return $this->migrate_fields[ $field['type'] ];
	}

}