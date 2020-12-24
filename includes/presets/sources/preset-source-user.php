<?php


namespace Jet_Form_Builder\Presets\Sources;


class Preset_Source_User extends Base_Source {

	public function on_sanitize() {
		if ( ! is_user_logged_in() ) {
			return false;
		}

		if ( get_current_user_id() !== $this->src->ID && ! current_user_can( 'edit_users' ) ) {
			return false;
		}
		return true;
	}

	public function get_source() {
		$user_from = ! empty( $this->preset_type->data['user_from'] ) ? $this->preset_type->data['user_from'] : $this->preset_type->defaults['user_from'];

		if ( 'current_user' === $user_from ) {
			if ( is_user_logged_in() ) {
				$this->src = wp_get_current_user();
				echo '<pre>';
				var_dump( $this->src );
			}
		} else {

			$var     = ! empty( $this->preset_type->data['query_var'] ) ? $this->preset_type->data['query_var'] : $this->preset_type->defaults['query_var'];
			$user_id = ( $var && isset( $_REQUEST[ $var ] ) ) ? $_REQUEST[ $var ] : false;

			$this->src = get_user_by( 'ID', $user_id );
		}

		return $this;
	}

	/**
	 * @return mixed
	 */
	protected function can_get_preset() {
		return (
			( ! $this->src && ! is_wp_error( $this->src ) )
			&& is_user_logged_in()
			|| ( get_current_user_id() === $this->src->ID || current_user_can( 'edit_users' ) )
		);
	}

	public function user_meta() {
		if ( ! empty( $this->preset_type->field_data['key'] ) ) {
			return get_user_meta(
				$this->src->ID,
				$this->preset_type->field_data['key'],
				true
			);
		} else {
			return $this->preset_type->result;
		}
	}
}