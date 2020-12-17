<?php


namespace Jet_Form_Builder\Presets\Sources;


class Preset_Source_Post extends Base_Source {

	protected function can_get_preset() {
		return ( absint( $this->preset_type->source->post_author ) === get_current_user_id() || current_user_can( 'edit_others_posts' ) );
	}

	protected function set_prop() {
		$this->prop = ! empty( $this->preset_type->field_data['prop'] ) ? $this->preset_type->field_data['prop'] : 'post_title';
	}

	public function post_meta() {
		if ( ! empty( $field_data['key'] ) ) {

			$value = get_post_meta( $source->ID, $field_data['key'], true );

			if ( $this->is_repeater_val( $value ) ) {

				$prepared_value = array();

				foreach ( $value as $index => $row ) {

					$prepared_row = array();

					foreach ( $row as $item_key => $item_value ) {

						$item_key = $this->get_key_from_map( $map, $item_key );

						$prepared_row[ $item_key ] = $item_value;
					}

					$prepared_value[] = $prepared_row;

				}
				$value = $prepared_value;
			} else if ( function_exists( 'jet_engine' )
			            && jet_engine()->relations
			            && jet_engine()->relations->is_relation_key( $field_data['key'] ) ) {

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
			return $this->preset_type->result;
		}
	}



}