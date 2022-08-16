<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Parse_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Request\Exceptions\Exclude_Field_Exception;
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

	use Instance_Trait;
	use Repository_Pattern_Trait;

	private function __construct() {
		$this->rep_install();
	}

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/parsers-request/register',
			array(
				new Fields\Date_Field_Parser(),
				new Fields\Repeater_Field_Parser(),
				new Fields\Wysiwyg_Field_Parser(),
				new Fields\Text_Field_Parser(),
				new Fields\Repeater_Field_Parser(),
				new Fields\Media_Field_Parser(),
				new Fields\Datetime_Field_Parser(),
				new Fields\Hidden_Field_Parser(),
				new Fields\Map_Field_Parser(),
			)
		);
	}

	public function get_values_fields( $fields, Parser_Context $context ) {
		$response = array();
		$this->get_values_fields_recursive( $response, $fields, $context );

		return $response;
	}

	public function get_values_fields_recursive( &$output, $fields, Parser_Context $context ) {
		foreach ( $fields as $field ) {
			try {
				$context->set_field( $field );

				$this->get_value_from_field( $output, $context );

				$context->save_to_request();

			} catch ( Parse_Exception $exception ) {
				switch ( $exception->getMessage() ) {

					case self::IS_CONDITIONAL:
						$this->get_values_fields_recursive(
							$output,
							$exception->get_inner(),
							$context->set_inside_conditional( true )
						);
						break;

					case self::NOT_FIELD_HAS_INNER:
						$this->get_values_fields_recursive(
							$output,
							$exception->get_inner(),
							$context
						);
						break;
				}
			}
		}
	}


	/**
	 * @param $output
	 * @param Parser_Context $context
	 */
	public function get_value_from_field( &$output, Parser_Context $context ) {
		try {
			$parser = $context->get_parser();
		} catch ( Repository_Exception $exception ) {
			$output[ $context->get_name() ] = $context->get_value();

			return;
		}

		try {
			$output[ $context->get_name() ] = $parser->get_parsed_value( $context );
		} catch ( Parse_Exception $exception ) {
			$output = array_merge( $output, $exception->get_inner() );
			return;

		} catch ( Exclude_Field_Exception $exception ) {
			return;
		}
	}

	public function save_to_request( $name, $type, $settings ) {
		jet_fb_request_handler()->set_request_type(
			array(
				$name => $type,
			)
		);
		jet_fb_request_handler()->set_request_attrs(
			array(
				$name => $settings,
			)
		);
	}

	/**
	 * @param $block_name
	 *
	 * @return bool
	 */
	public function isset_parser( $block_name ): bool {
		$type = Block_Helper::delete_namespace( $block_name );

		return $this->rep_isset_item( $type );
	}

	/**
	 * @param $slug
	 *
	 * @return mixed
	 * @throws Repository_Exception
	 */
	public function get_parser( $slug ): Field_Data_Parser {
		return $this->rep_clone_item( $slug );
	}

}
