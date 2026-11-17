<?php


namespace JFB_Modules\Block_Parsers\Fields;

use Jet_Form_Builder\Blocks\Types\Hidden_Field;
use Jet_Form_Builder\Classes\Security\Submitter_Identity;
use Jet_Form_Builder\Classes\Tools;
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

		if ( Submitter_Identity::is_replaying() ) {
			return $this->get_replayed_value();
		}

		return $this->compute_value();
	}

	/**
	 * A replay (confirmation link, payment return) runs in the request of
	 * whoever opens the link. The record already holds the value computed on
	 * the server at submit time; a value computed now from a source would
	 * come from that person's query string, Referer, cookies or preset.
	 *
	 * Only the form author's own value (Manual Input, or its fallback to a
	 * plain Default Value) is taken from the form again: it does not depend
	 * on the request and keeps its provenance, so an HTML e-mail keeps the
	 * author's markup as on a regular submission.
	 *
	 * @return mixed
	 * @throws \Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field
	 */
	private function get_replayed_value() {
		if ( 'manual_input' === ( $this->settings['field_value'] ?? '' ) ) {
			$value = $this->compute_value();

			if ( ! $this->value_from_source && ! Tools::is_empty( $value ) ) {
				return $value;
			}
		}

		$this->value_from_source = true;

		return $this->value;
	}

	/**
	 * @return mixed
	 * @throws \Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field
	 */
	private function compute_value() {
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
