<?php

namespace Jet_Form_Builder\Transformers;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Plugin;

class Jet_Engine_Transformer extends Base_Transformer {

	public $transform_compatibility = array(
		'email' => 'send_email'
	);

	public function source_form_data() {
		return get_post_meta( $this->form_id );
	}

	public function source_fields() {
		$data = json_decode( wp_unslash( $this->form_data['_form_data'][0] ), true );
		unset( $this->form_data['_form_data'] );

		return $this->prepare_fields( $data );
	}

	public function source_actions() {
		$data = json_decode( wp_unslash( $this->form_data['_notifications_data'][0] ), true );
		unset( $this->form_data['_notifications_data'] );

		return $this->prepare_actions( $data );

	}

	public function source_settings() {
		$preset   = maybe_unserialize( $this->form_data['_preset'][0] );
		$messages = maybe_unserialize( $this->form_data['_messages'][0] );
		$captcha  = maybe_unserialize( $this->form_data['_captcha'][0] );

		unset( $this->form_data['_preset'], $this->form_data['_messages'], $this->form_data['_captcha'] );

		return array(
			'_jf_preset'    => $preset,
			'_jf_messages'  => $messages,
			'_jf_recaptcha' => $captcha
		);
	}

	public function transform_fields() {
		// TODO: Implement transform_fields() method.
	}

	public function transform_settings() {
		// TODO: Implement transform_settings() method.
	}

	public function save_transformer() {
		echo '<pre>';
		var_dump( $this->fields );
		die;
	}

	public function prepare_actions( $actions ) {
		$prepared_actions = array();

		foreach ( $actions as $index => $action ) {
			$type = $this->get_action_type( $action );

			if ( ! $type  ) {
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
		return $prepared_actions;
	}

	public function prepare_fields( $fields ) {
		$prepared_fields = array();

		usort( $fields, function ( $first, $second ) {
			return $first['y'] - $second['y'];
		} );

		$inner = false;
		foreach ( $fields as $field ) {
			if ( ! $inner ) {
				$prev = prev( $fields );
				$inner = 'repeater_start' === $prev['settings']['type'] ? $prev['settings']['name'] : false;
				$field = next( $fields );

			} elseif ( 'repeater_end' === $field['settings']['type'] ) {
				$inner = false;
				continue;
			}

			$this->prepare_field( $prepared_fields, $field['settings'], $inner );
		}

		return $prepared_fields;
	}

	public function prepare_field( &$prepared_fields, $current, $inner = false ) {
		if ( ! $inner ) {
			$prepared_fields[ $current['name'] ] = $current;
		} else {
			$prepared_fields[ $inner ]['innerBlocks'][] = $current;
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

}