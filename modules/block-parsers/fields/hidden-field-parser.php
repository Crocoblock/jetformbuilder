<?php


namespace JFB_Modules\Block_Parsers\Fields;

use Jet_Form_Builder\Blocks\Types\Hidden_Field;
use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Hidden_Field_Parser extends Field_Data_Parser {

	/**
	 * Whether the value can come from data that visitors write: the request,
	 * a preset source, post/user meta, the referer... False only for a value
	 * the form author set (Manual Input, static value or the field's own
	 * Default Value), computed on the server.
	 *
	 * @var bool
	 */
	protected $value_from_source = true;

	public function type() {
		return 'hidden-field';
	}

	/**
	 * @return mixed
	 * @throws \Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field
	 */
	public function get_response() {
		$this->value_from_source = true;

		if ( $this->settings['render'] ?? true ) {
			return $this->value;
		}

		/** @var Hidden_Field $hidden_type */
		$hidden_type = clone jet_form_builder()->blocks->get_field_by_name( $this->type() );

		$hidden_type->set_rendering( false );
		// the exception will never be thrown
		$hidden_type->set_block_data( $this->settings );
		$hidden_type->set_preset();

		if ( ! isset( $hidden_type->block_attrs['field_value'] ) ) {
			// Falls back to the value sent by the browser.
			return $this->value;
		}

		// Provenance of the value actually returned, including the fallback
		// to a preset default when the chosen source is empty.
		$this->value_from_source = $hidden_type->is_default_from_source();

		return $hidden_type->block_attrs['field_value'];
	}

	public function is_value_from_source(): bool {
		return $this->value_from_source;
	}


}
