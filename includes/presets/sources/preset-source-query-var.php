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

	/**
	 * This source only ever reads $_GET of the current request - data the
	 * requester already controls and can see - so there is nothing to
	 * protect and no ownership to verify. The #20359 report lists this
	 * source as a third bypass route, but reading back the caller's own
	 * query string discloses nothing they don't already have.
	 *
	 * Returned explicitly rather than deferring to Base_Source, whose
	 * default is `! empty( $this->src() )`: that would make an empty $_GET
	 * fail the *permission* check and throw, when the correct outcome is
	 * simply "no such query var" - which get_result_on_prop() already
	 * reports on its own.
	 *
	 * The array check is not about permission: get_result_on_prop() indexes
	 * src() directly, so a non-array source (only reachable if a subclass
	 * overrides query_source()) must fail here as a catchable
	 * Preset_Exception rather than a fatal further down.
	 *
	 * @return bool
	 */
	protected function can_get_preset() {
		return is_array( $this->src() );
	}
}
