<?php


namespace Jet_Form_Builder\Presets\Types;

use Jet_Form_Builder\Exceptions\Preset_Exception;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Presets\Sources\Base_Source;

class General_Preset extends Base_Preset {

	const SLUG = 'general';

	/** @var Base_Source */
	public $current_source;

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
			if ( ! $this->get_source() instanceof Base_Source || ! $this->get_source()->src() ) {
				return true;
			}

			return $this->get_source()->on_sanitize();

		} catch ( Preset_Exception $exception ) {
			return true;
		}
	}

	public function get_source( $args = array() ): Base_Source {
		if ( ! $this->current_source ) {
			$this->current_source = parent::get_source( $args );
		} else {
			$this->current_source->init_source(
				$this->get_fields_map(),
				$this->data,
				$args
			);
		}

		return $this->current_source;
	}


}
