<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Exceptions\Parse_Exception;
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

	const EMPTY_BLOCK_ERROR   = '0';
	const NOT_FIELD_HAS_INNER = '1';
	const FIELD_HAS_INNER     = '2';
	const IS_CONDITIONAL      = '3';

	private $_parsers;
	private $response;
	public $inside_conditional = false;

	use Instance_Trait;

	private function __construct() {
		$this->register_request_parsers();
	}

	private function register_request_parsers() {
		$parsers = apply_filters(
			'jet-form-builder/parsers-request/register',
			array(
				new Fields\Date_Field_Parser(),
				new Fields\Repeater_Field_Parser(),
				new Fields\Wysiwyg_Field_Parser(),
				new Fields\Text_Field_Parser(),
				new Fields\Repeater_Field_Parser(),
				new Fields\Media_Field_Parser(),
				new Fields\Datetime_Field_Parser(),
			)
		);

		foreach ( $parsers as $parser ) {
			$this->_parsers[ $parser->type() ] = $parser;
		}
	}

	public function get_values_fields( $fields, $request, $inside_conditional = false ) {
		$response = array();
		$this->get_values_fields_recursive( $response, $fields, $request, $inside_conditional );

		return $response;
	}

	public function get_values_fields_recursive( &$output, $fields, $request, $inside_conditional ) {
		foreach ( $fields as $field ) {
			try {
				$this->get_value_from_field( $output, $field, $request, $inside_conditional );

			} catch ( Parse_Exception $exception ) {
				switch ( $exception->getMessage() ) {

					case self::IS_CONDITIONAL:
						$this->get_values_fields_recursive(
							$output,
							$exception->get_inner(),
							$request,
							true
						);
						break;

					case self::NOT_FIELD_HAS_INNER:
						$this->get_values_fields_recursive(
							$output,
							$exception->get_inner(),
							$request,
							$inside_conditional
						);
						break;
				}
			}
		}
	}


	/**
	 * @param $output
	 * @param $field
	 *
	 * @param $request
	 * @param $inside_conditional
	 *
	 * @throws Parse_Exception
	 */
	public function get_value_from_field( &$output, $field, $request, $inside_conditional ) {
		if ( empty( $field['blockName'] ) ) {
			throw new Parse_Exception( self::EMPTY_BLOCK_ERROR );
		}

		if ( ! empty( $field['innerBlocks'] ) ) {
			if ( strpos( $field['blockName'], 'conditional-block' ) ) {
				throw new Parse_Exception( self::IS_CONDITIONAL, $field['innerBlocks'] );
			}
			if ( ! $this->isset_parser_by_block_name( $field['blockName'] ) ) {
				throw new Parse_Exception( self::NOT_FIELD_HAS_INNER, $field['innerBlocks'] );
			}
		}

		$settings = $field['attrs'];
		$name     = $settings['name'] ?? 'field_name';

		try {
			$output[ $name ] = $this->get_parsed_value( $field, $request, $name, $inside_conditional );
		} catch ( Parse_Exception $exception ) {
			$output = array_merge( $output, $exception->get_inner() );
		}
	}

	public function get_parsed_value( $field, $request, $name, $inside_conditional ) {

		if ( ! $this->is_field_visible( $field['attrs'] ) ) {
			return null;
		}
		$value  = $request[ $name ] ?? '';
		$parser = $this->get_parser_by_block_name( $field['blockName'] );

		if ( $parser instanceof Field_Data_Parser ) {
			$parser->init( $value, $field, $inside_conditional );

			return $parser->response();
		}

		return $value;
	}

	private function isset_parser_by_block_name( $block_name ) {
		$type = Plugin::instance()->form->field_name( $block_name );

		return isset( $this->_parsers[ $type ] );
	}

	private function get_parser_by_block_name( $block_name ) {
		$type = Plugin::instance()->form->field_name( $block_name );

		return $this->get_parser( $type );
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

		// For backward compatibility and hidden fields.
		if ( empty( $field['visibility'] ) ) {
			return true;
		}

		// If is visible for all - show field.
		if ( 'all' === $field['visibility'] ) {
			return true;
		}

		// If is visible for logged in users and user is logged in - show field.
		if ( 'logged_id' === $field['visibility'] && is_user_logged_in() ) {
			return true;
		}

		// If is visible for not logged in users and user is not logged in - show field.
		if ( 'not_logged_in' === $field['visibility'] && ! is_user_logged_in() ) {
			return true;
		}

		return false;

	}

}
