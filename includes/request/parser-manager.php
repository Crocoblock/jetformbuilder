<?php


namespace Jet_Form_Builder\Request;


use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Request\Fields;

class Parser_Manager {

	private $_parsers;
	private $response;

	use Instance_Trait;

	private function __construct() {
		$this->register_request_parsers();
	}

	private function register_request_parsers() {
		$parsers = array(
			new Fields\Date_Field_Parser(),
			new Fields\Repeater_Field_Parser(),
			new Fields\Wysiwyg_Field_Parser(),
			new Fields\Text_Field_Parser(),
			new Fields\Repeater_Field_Parser(),
			new Fields\Media_Field_Parser(),
		);

		foreach ( $parsers as $parser ) {
			$this->_parsers[ $parser->type() ] = $parser;
		}

		$this->_parsers = apply_filters( 'jet-form-builder/parsers-request/register', $this->_parsers );
	}

	public function get_values_fields( $request_handler ) {
		$response = array();

		$fields = $request_handler->_fields;
		$request = $request_handler->_request_values;

		foreach ( $fields as $field ) {
			$settings = $field['attrs'];
			$name     = isset( $settings['name'] ) ? $settings['name'] : 'field_name';

			$response[ $name ] = $this->get_parsed_value( $field, $request, $name, $request_handler );
		}

		return $response;
	}

	public function get_parsed_value( $field, $request, $name, $request_handler = null ) {

		if ( ! $this->is_field_visible( $field['attrs'] ) ) {
			return null;
		}
		$value = isset( $request[ $name ] ) ? $request[ $name ] : '';
		$type  = Plugin::instance()->form->field_name( $field['blockName'] );

		$parser = $this->get_parser( $type );

		if ( $parser instanceof Field_Data_Parser ) {
			$parser->init( $value, $field );
			$parser->set_request_handler( $request_handler );

			return $this->get_parser_response( $parser );
		}

		return $value;
	}

	private function get_parser( $type ) {
		return isset( $this->_parsers[ $type ] ) ? clone $this->_parsers[ $type ] : false;
	}

	private function get_parser_response( $parser ) {
		return $parser->response();
	}

	/**
	 * Returns true if field is visible
	 *
	 * @param array $field [description]
	 *
	 * @return boolean        [description]
	 */
	public function is_field_visible( $field = array() ) {

		// For backward compatibility and hidden fields
		if ( empty( $field['visibility'] ) ) {
			return true;
		}

		// If is visible for all - show field
		if ( 'all' === $field['visibility'] ) {
			return true;
		}

		// If is visible for logged in users and user is logged in - show field
		if ( 'logged_id' === $field['visibility'] && is_user_logged_in() ) {
			return true;
		}

		// If is visible for not logged in users and user is not logged in - show field
		if ( 'not_logged_in' === $field['visibility'] && ! is_user_logged_in() ) {
			return true;
		}

		return false;

	}

}