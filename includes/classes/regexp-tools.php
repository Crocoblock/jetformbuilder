<?php


namespace Jet_Form_Builder\Classes;

class Regexp_Tools {

	private $field_names_regexp = array();
	private $macro_exist        = false;

	public function has_macro( $value ): bool {
		if ( ! is_scalar( $value ) || ! is_string( $value ) ) {
			return false;
		}

		if ( preg_match( '/%[\w\-]+::.*?%/', $value ) ) {
			return true;
		}

		$this->macro_exist = false;

		preg_replace_callback_array(
			$this->field_names_regexp,
			$value
		);

		return $this->macro_exist;
	}

	public function set_field_names( array $names ) {
		foreach ( $names as $name => $counter ) {
			$this->field_names_regexp[ "/%({$name}).*?%/" ] = array( $this, 'regexp_replace_callback' );
		}
	}

	/**
	 * @param array $matches
	 *
	 * @return mixed
	 */
	private function regexp_replace_callback( array $matches ) {
		$this->macro_exist = true;

		return $matches[0];
	}

	/**
	 * @param string $content
	 *
	 * @return array
	 */
	public function get_form_ids_from_shortcode( string $content ): array {
		$matches = array();

		preg_match_all( '/\[jet_fb_form.*?form_id="(\d+)"/', $content, $matches );

		return $matches[1] ?? array();
	}

	public function get_form_ids_from_block( string $content ): array {
		$matches = array();

		preg_match_all(
			'/<!-- wp:jet\-forms\/form\-block.*?"form_id":(\d+)/',
			$content,
			$matches
		);

		return $matches[1] ?? array();
	}

}
