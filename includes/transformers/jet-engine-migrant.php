<?php

namespace Jet_Form_Builder\Transformers;

use Jet_Form_Builder\Blocks\Block_Generator;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Plugin;

class Jet_Engine_Migrant extends Base_Transformer {

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
		'number'         => 'number-field',
		'select'         => 'select-field',
		'checkboxes'     => 'checkbox-field',
		'calculated'     => 'calculated-field',
		'radio'          => 'radio-field',
		'page_break'     => 'form-break-field',
		'textarea'       => 'textarea-field'
	);

	public $transform_compatibility = array(
		'email'          => 'send_email',
		'activecampaign' => 'active_campaign'
	);

	public function source_fields() {
		$data = json_decode( wp_unslash( $this->form_meta_data['_form_data'][0] ), true );
		unset( $this->form_meta_data['_form_data'] );

		return $this->prepare_fields( $data );
	}


	public function source_settings() {
		$preset   = json_encode( maybe_unserialize( $this->form_meta_data['_preset'][0] ) );
		$messages = json_encode( maybe_unserialize( $this->form_meta_data['_messages'][0] ) );
		$captcha  = json_encode( maybe_unserialize( $this->form_meta_data['_captcha'][0] ) );
		$actions  = json_decode( wp_unslash( $this->form_meta_data['_notifications_data'][0] ), true );

		unset(
			$this->form_meta_data['_preset'],
			$this->form_meta_data['_messages'],
			$this->form_meta_data['_captcha'],
			$this->form_meta_data['_notifications_data']
		);

		return array(
			'_jf_preset'    => $preset,
			'_jf_messages'  => $messages,
			'_jf_recaptcha' => $captcha,
			'_jf_actions'   => $this->prepare_actions( $actions ),
		);
	}

	public function transform_fields() {
		// TODO: Implement transform_fields() method.
	}

	public function transform_settings() {
		// TODO: Implement transform_settings() method.
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

	public function prepare_actions( $actions ) {
		$prepared_actions = array();

		foreach ( $actions as $index => $action ) {
			$type = $this->get_action_type( $action );

			if ( ! $type ) {
				continue;
			}

			$prepared_actions[] = array(
				'id'       => rand( 1000, 9999 ),
				'type'     => $type,
				'settings' => Tools::array_merge_intersect_key(
					$this->get_action_attributes( $type ),
					$action
				)
			);
		}

		return wp_unslash( json_encode( $prepared_actions ) );
	}

	public function prepare_fields( $fields ) {
		usort( $fields, function ( $first, $second ) {
			return $first['y'] - $second['y'];
		} );

		$inner = false;
		foreach ( $fields as $index => $field ) {

			if ( ! $inner && isset( $fields[ $index - 1 ] ) ) {
				$prev = $fields[ $index - 1 ];

				$inner = 'repeater_start' === $prev['settings']['type'] ? $prev['settings']['name'] : false;

			} elseif ( 'repeater_end' === $field['settings']['type'] ) {
				$inner = false;
				continue;
			}

			$this->prepare_field( $field, $inner );
		}

		return ( new Block_Generator( $this->prepared_fields ) )->generate();
	}

	public function prepare_field( $current, $inner = false ) {
		$attrs = $current['settings'];

		if ( ! $this->isset_field_type( $attrs ) ) {
			return;
		}
		$field_type   = $this->get_field_type( $attrs );
		$field_object = Plugin::instance()->blocks->get_field_by_name( $field_type );

		$field_data = array(
			'attrs'     => Tools::array_merge_intersect_key( $field_object->block_attributes( false ), $attrs ),
			'blockName' => self::BLOCKS_NAMESPACE . $field_type,
		);

		$field_data = $this->maybe_add_conditional( $current, $field_data );

		if ( $inner ) {
			$this->prepared_fields[ $inner ]['innerBlocks'][ $attrs['name'] ] = $field_data;
		} else {
			$this->prepared_fields[ $attrs['name'] ] = $field_data;
		}
	}

	public function get_action_type( $action ) {
		$manager = Plugin::instance()->actions;

		if ( $manager->has_action_type( $action['type'] ) ) {
			return $action['type'];
		} elseif ( isset( $this->transform_compatibility[ $action['type'] ] ) ) {
			return $this->transform_compatibility[ $action['type'] ];
		}

		return false;
	}

	private function maybe_add_conditional( $current, $field_data ) {
		if ( ! isset( $current['conditionals'] ) || empty( $current['conditionals'] ) ) {
			return $field_data;
		}

		return array(
			'attrs'     => array( 'conditions' => $current['conditionals'] ),
			'blockName' => self::BLOCKS_NAMESPACE . 'conditional-block',
			'innerBlocks' => array(
				$current['settings']['name'] => $field_data
			)
		);
	}

	private function isset_field_type( $field ) {
		return isset( $this->migrate_fields[ $field['type'] ] );
	}

	private function get_field_type( $field ) {
		return $this->migrate_fields[ $field['type'] ];
	}

}