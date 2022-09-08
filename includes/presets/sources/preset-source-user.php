<?php


namespace Jet_Form_Builder\Presets\Sources;

use Jet_Form_Builder\Exceptions\Preset_Exception;

class Preset_Source_User extends Base_Source {

	public function get_id() {
		return 'user';
	}

	public function on_sanitize(): bool {
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

		if ( 'queried_user' === $user_from ) {
			$user = get_queried_object();

			return is_a( $user, \WP_User::class ) ? $user : false;
		}

		$var     = ! empty( $this->preset_data['query_var'] ) ? $this->preset_data['query_var'] : 'user_id';
		$user_id = ( $var && isset( $_REQUEST[ $var ] ) ) ? absint( $_REQUEST[ $var ] ) : false;

		return get_user_by( 'ID', $user_id );
	}

	/**
	 * @return bool
	 * @throws Preset_Exception
	 */
	protected function can_get_preset() {
		return ( parent::can_get_preset()
		         && is_user_logged_in()
		         && ( get_current_user_id() === $this->src()->ID || current_user_can( 'edit_users' ) )
		);
	}

	public function source__user_meta() {
		if ( empty( $this->field_data['key'] ) ) {
			return '';
		}

		return get_user_meta(
			$this->src()->ID,
			$this->field_data['key'],
			true
		);
	}
}
