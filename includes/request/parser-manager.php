<?php


namespace Jet_Form_Builder\Request;


use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Request\Fields;

/**
 * @method static Parser_Manager instance()
 *
 * Class Parser_Manager
 * @package Jet_Form_Builder\Request
 */
class Parser_Manager {

	private $_parsers;
	private $_current;
	private $response = array();
	private $request_handler;

	use Instance_Trait;

	private function __construct() {
		$this->register_request_parsers();
	}

	private function register_request_parsers() {
		$parsers = apply_filters( 'jet-form-builder/parsers-request/register', array(
			new Fields\Date_Field_Parser(),
			new Fields\Repeater_Field_Parser(),
			new Fields\Wysiwyg_Field_Parser(),
			new Fields\Text_Field_Parser(),
			new Fields\Repeater_Field_Parser(),
			new Fields\Media_Field_Parser(),
		) );

		foreach ( $parsers as $parser ) {
			$this->_parsers[ $parser->type() ] = $parser;
		}

		$this->_current = new Current_Parsers();
	}

	public function save_parsers_or_get_response( $source_fields, $request, $parent_name = '', $index = false ) {
		foreach ( $source_fields as $field ) {
			if ( ! $this->is_field_visible( $field['attrs'] ) ) {
				continue;
			}
			$name         = $this->get_field_name( $field );
			$parser_value = $this->get_value_or_parser( $field, $request, $name, $parent_name, $index );

			if ( $parser_value instanceof Field_Data_Parser ) {
				$this->current()->add_parser( $parser_value );

			} elseif ( $parent_name && false !== $index ) {
				$this->response( array(
					$parent_name => array(
						$index => array(
							$name => $parser_value
						)
					)
				), true );
			} else {
				$this->response( array( $name => $parser_value ) );
			}
		}
	}

	/**
	 * Main method, which called outside this class
	 *
	 * @param $request_handler
	 *
	 * @return array
	 */
	public function get_values_fields( $request_handler ) {
		$fields  = $request_handler->_fields;
		$request = $request_handler->_request_values;

		$this->set_request_handler( $request_handler );
		$this->save_parsers_or_get_response( $fields, $request );

		foreach ( $this->current()->get_all() as $parser ) {
			$parser->response();
		}
		$this->current()->clear();

		return $this->clear_response();
	}

	public function get_value_or_parser( $field, $source_request, $name, $parent_name = '', $index = false ) {
		$value  = isset( $source_request[ $name ] ) ? $source_request[ $name ] : '';
		$type   = Plugin::instance()->form->field_name( $field['blockName'] );
		$parser = $this->get_parser( $type );

		if ( $parser instanceof Field_Data_Parser ) {
			$parser->init( $value, $field, $parent_name, $index );

			return $parser;
		}

		return $value;
	}

	private function get_parser( $type ) {
		return isset( $this->_parsers[ $type ] ) ? clone $this->_parsers[ $type ] : false;
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

	private function get_field_name( $field ) {
		$settings = $field['attrs'];

		return isset( $settings['name'] ) ? $settings['name'] : 'field_name';
	}

	public function set_request_handler( $request_handler ) {
		$this->request_handler = $request_handler;
	}

	/**
	 * @return Request_Handler
	 */
	public function request() {
		return $this->request_handler;
	}

	/**
	 * @return Current_Parsers
	 */
	public function current() {
		return $this->_current;
	}

	public function response( $value = null, $recursively = false ) {
		if ( empty( $value ) ) {
			return $this->response;
		}
		if ( $recursively ) {
			$this->response = Tools::array_merge_recursive_distinct( $this->response, $value );
		} else {
			$this->response = array_merge( $this->response, $value );
		}
	}

	public function clear_response() {
		$response       = $this->response();
		$this->response = array();

		return $response;
	}

}