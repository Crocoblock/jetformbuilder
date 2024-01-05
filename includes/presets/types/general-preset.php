<?php


namespace Jet_Form_Builder\Presets\Types;

use Jet_Form_Builder\Exceptions\Preset_Exception;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Presets\Sources\Base_Source;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class General_Preset extends Base_Preset {

	const SLUG = 'general';

	public function get_slug(): string {
		return self::SLUG;
	}

	public function is_unique(): bool {
		return false;
	}

	public function is_active_preset( $args ) {
		return ( isset( $this->data['enabled'] ) && $this->data['enabled'] );
	}

	public function get_fields_map() {
		return ! empty( $this->data['fields_map'] ) ? $this->data['fields_map'] : $this->defaults['fields_map'];
	}

	public function preset_source( $form_id ) {
		return Plugin::instance()->post_type->get_preset( $form_id );
	}

	/**
	 * Sanitize preset source
	 */
	public function sanitize_source(): bool {
		if ( empty( $this->data['enabled'] ) ) {
			return true;
		}

		try {
			if (
				! $this->get_source() instanceof Base_Source ||
				! $this->get_source()->src() ||
				(
					array_key_exists( 'restricted', $this->data ) &&
					! $this->data['restricted']
				)
			) {
				return true;
			}
			$sanitize = $this->get_source()->on_sanitize();

			return apply_filters( 'jet-form-builder/preset-sanitize', $sanitize, $this->get_source() );

		} catch ( Preset_Exception $exception ) {
			return true;
		}
	}


}
