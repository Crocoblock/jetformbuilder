<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Classes\Instance_Trait;
use JFB_Components\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Parse_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Request\Fields;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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
				new Fields\Default_Parser(),
				new Fields\Date_Field_Parser(),
				new Fields\Wysiwyg_Field_Parser(),
				new Fields\Text_Field_Parser(),
				new Fields\Repeater_Field_Parser(),
				new Fields\Media_Field_Parser(),
				new Fields\Datetime_Field_Parser(),
				new Fields\Hidden_Field_Parser(),
			)
		);
	}

	/**
	 * @param array $field
	 *
	 * @throws Parse_Exception
	 */
	public function validate_field( array $field ) {
		if ( empty( $field['blockName'] ) ) {
			throw new Parse_Exception( self::EMPTY_BLOCK_ERROR );
		}

		if ( empty( $field['innerBlocks'] ) ) {
			return;
		}

		if ( strpos( $field['blockName'], 'conditional-block' ) ) {
			throw new Parse_Exception( self::IS_CONDITIONAL, $field['innerBlocks'] );
		}
		if ( ! $this->isset_parser( $field['blockName'] ) ) {
			throw new Parse_Exception( self::NOT_FIELD_HAS_INNER, $field['innerBlocks'] );
		}
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

	public function get_parser( $slug ): Field_Data_Parser {
		try {
			return $this->rep_clone_item( $slug );
		} catch ( Repository_Exception $exception ) {
			return $this->rep_clone_item_or_die( 'default' );
		}
	}

}
