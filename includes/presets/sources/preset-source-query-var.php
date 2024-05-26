<?php


namespace Jet_Form_Builder\Presets\Sources;

// If this file is called directly, abort.
use Jet_Form_Builder\Exceptions\Preset_Exception;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Preset_Source_Query_Var extends Base_Source {

	public function get_id() {
		return 'query_var';
	}

	public function query_source() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return $_GET;
	}

	public function get_prop() {
		if ( ! empty( $this->field_data['other']['query_var'] ) ) {
			return $this->field_data['other']['query_var'];
		}

		return ! empty( $this->field_data['key'] ) ? $this->field_data['key'] : '';
	}

	public function get_result_on_prop() {
		if ( isset( $this->src()[ $this->prop ] ) ) {
			return $this->src()[ $this->prop ];
		}

		throw new Preset_Exception(
			'$_GET does not have ' . esc_attr( $this->prop ) . '  field'
		);
	}
}
