<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Exceptions\Parse_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;

class Parser_Context {

	protected $block;
	protected $settings;
	protected $name = '';
	protected $field_type;

	protected $request;
	protected $files;

	protected $inside_conditional = false;

	protected $context = array();

	/**
	 * @return mixed
	 */
	public function get_file() {
		return $this->files[ $this->name ] ?? false;
	}

	public function get_value() {
		return $this->request[ $this->name ] ?? '';
	}

	public function isset_parser(): bool {
		return Parser_Manager::instance()->isset_parser( $this->field_type );
	}

	/**
	 * @return Field_Data_Parser
	 * @throws Repository_Exception
	 */
	public function get_parser(): Field_Data_Parser {
		return Parser_Manager::instance()->get_parser( $this->field_type );
	}

	public function save_to_request() {
		Parser_Manager::instance()->save_to_request( $this->name, $this->field_type, $this->settings );
	}

	/**
	 * @param array $field
	 *
	 * @return $this
	 * @throws Parse_Exception
	 */
	public function set_field( array $field ): Parser_Context {
		$this->validate_field( $field );

		return $this->set_raw_field( $field );
	}

	public function set_raw_field( array $field ): Parser_Context {
		$this->block      = $field;
		$this->settings   = $field['attrs'];
		$this->name       = $field['attrs']['name'] ?? 'field_name';
		$this->field_type = Block_Helper::delete_namespace( $field['blockName'] );

		return $this;
	}

	/**
	 * @param array $field
	 *
	 * @throws Parse_Exception
	 */
	protected function validate_field( array $field ) {
		if ( empty( $field['blockName'] ) ) {
			throw new Parse_Exception( Parser_Manager::EMPTY_BLOCK_ERROR );
		}

		if ( empty( $field['innerBlocks'] ) ) {
			return;
		}

		if ( strpos( $field['blockName'], 'conditional-block' ) ) {
			throw new Parse_Exception( Parser_Manager::IS_CONDITIONAL, $field['innerBlocks'] );
		}
		if ( ! Parser_Manager::instance()->isset_parser( $field['blockName'] ) ) {
			throw new Parse_Exception( Parser_Manager::NOT_FIELD_HAS_INNER, $field['innerBlocks'] );
		}
	}

	public function get_default_value() {
		/** @var Base $block */
		$block = jet_form_builder()->blocks->get_field_by_name( $this->field_type );

		// the exception will never be thrown
		$block->set_block_data( $this->settings );
		$block->set_context( $this->context );
		$block->set_preset();

		return $block->block_attrs['default'];
	}

	public function set_request_context( array $request ): Parser_Context {
		$this->request = $request;

		return $this;
	}


	public function set_files_context( $files ): Parser_Context {
		$this->files = $files;

		return $this;
	}

	public function get_request(): array {
		return $this->request;
	}

	/**
	 * @return mixed
	 */
	public function get_files() {
		return $this->files;
	}

	/**
	 * @return mixed
	 */
	public function get_block() {
		return $this->block;
	}

	/**
	 * @return mixed
	 */
	public function get_settings() {
		return $this->settings;
	}

	/**
	 * @return string
	 */
	public function get_name(): string {
		return $this->name;
	}

	public function is_inside_conditional(): bool {
		return $this->inside_conditional;
	}

	public function set_inside_conditional( bool $inside_conditional ): Parser_Context {
		$this->inside_conditional = $inside_conditional;

		return $this;
	}


}
