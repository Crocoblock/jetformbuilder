<?php


namespace Jet_Form_Builder\Presets\Sources;


class Preset_Source_User extends Base_Source {

	/**
	 * @return mixed
	 */
	protected function can_get_preset() {
		$source = $this->preset_type->source;

		return (
			( ! $source || is_wp_error( $source ) )
			|| ! is_user_logged_in()
			|| ( get_current_user_id() !== $source->ID && ! current_user_can( 'edit_users' ) )
		);
	}

	public function user_meta() {
		if ( ! empty( $this->preset_type->field_data['key'] ) ) {
			return get_user_meta(
				$this->preset_type->source->ID,
				$this->preset_type->field_data['key'],
				true
			);
		} else {
			return $this->preset_type->result;
		}
	}
}