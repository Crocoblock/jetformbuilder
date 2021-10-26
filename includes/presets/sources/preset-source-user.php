<?php


namespace Jet_Form_Builder\Presets\Sources;

class Preset_Source_User extends Base_Source {

	public function get_id() {
		return 'user';
	}

	public function on_sanitize() {
		if ( ! is_user_logged_in() ) {
			return false;
		}

		if ( get_current_user_id() !== $this->src()->ID && ! current_user_can( 'edit_users' ) ) {
			return false;
		}

		return true;
	}

	public function query_source() {
		$user_from = ! empty( $this->preset_data['user_from'] ) ? $this->preset_data['user_from'] : 'current_user';

		if ( 'current_user' === $user_from && is_user_logged_in() ) {
			return wp_get_current_user();
		}

		$var     = ! empty( $this->preset_data['query_var'] ) ? $this->preset_data['query_var'] : 'user_id';
		$user_id = ( $var && isset( $_REQUEST[ $var ] ) ) ? $_REQUEST[ $var ] : false;

		return get_user_by( 'ID', $user_id );
	}

	/**
	 * @return mixed
	 */
	protected function can_get_preset() {
		return ( parent::can_get_preset()
			&& is_user_logged_in()
			&& ( get_current_user_id() === $this->src()->ID || current_user_can( 'edit_users' ) )
		);
	}

	public function _source__user_meta() {
		if ( empty( $this->field_data['key'] ) ) {
			return self::EMPTY;
		}

		return get_user_meta(
			$this->src()->ID,
			$this->field_data['key'],
			true
		);
	}
}
