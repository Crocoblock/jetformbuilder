<?php


namespace JFB_Modules\Validation\Ssr;

use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use JFB_Components\Repository\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Request\Parser_Context;
use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Validation_Callback implements Arrayable, Repository_Item_Instance_Trait {

	abstract public function get_id(): string;

	abstract public function get_label(): string;

	/**
	 * @param mixed $value
	 * @param Parser_Context $context
	 *
	 * @return bool
	 */
	abstract public function is_valid( $value, Parser_Context $context ): bool;

	/**
	 * Validate a field with access to its parser metadata.
	 *
	 * Existing callbacks only need to implement is_valid(). Callbacks that need
	 * trusted parser metadata can override this method without changing the
	 * public callback contract.
	 *
	 * @param Field_Data_Parser $parser
	 *
	 * @return bool
	 */
	public function is_valid_with_parser( Field_Data_Parser $parser ): bool {
		return $this->is_valid( $parser->get_value(), $parser->get_context() );
	}

	public function to_array(): array {
		return array(
			'value' => $this->get_id(),
			'label' => $this->get_label(),
		);
	}

	public function rep_item_id() {
		return $this->get_id();
	}

}
