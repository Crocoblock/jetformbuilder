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
			)
		);
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
			if ( ! $this->isset_parser( $field['blockName'] ) ) {
				throw new Parse_Exception( self::NOT_FIELD_HAS_INNER, $field['innerBlocks'] );
			}
		}

		$settings   = $field['attrs'];
		$name       = $settings['name'] ?? 'field_name';
		$field_type = Block_Helper::delete_namespace( $field['blockName'] );
		$value      = $request[ $name ] ?? '';

		try {
			$parser = $this->get_parser( $field_type );
		} catch ( Repository_Exception $exception ) {
			$this->save_to_request( $name, $field_type, $settings );

			$output[ $name ] = $value;

			return;
		}

		try {
			$output[ $name ] = $parser->get_parsed_value( $value, $field, $inside_conditional );
		} catch ( Parse_Exception $exception ) {
			$output = array_merge( $output, $exception->get_inner() );
			return;

		} catch ( Exclude_Field_Exception $exception ) {
			return;
		}

		$this->save_to_request( $name, $field_type, $settings );
	}

	private function save_to_request( $name, $type, $settings ) {
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
	private function isset_parser( $block_name ): bool {
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
