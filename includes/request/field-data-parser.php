<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Blocks\Modules\Fields_Errors\Error_Handler;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Classes\Resources\File;
use Jet_Form_Builder\Classes\Resources\File_Collection;
use Jet_Form_Builder\Request\Exceptions\Exclude_Field_Exception;
use Jet_Form_Builder\Request\Exceptions\Sanitize_Value_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Field_Data_Parser implements Repository_Item_Instance_Trait {

	protected $value;
	protected $is_required = false;
	protected $name        = 'field_name';
	protected $block;
	protected $settings;
	protected $inner;
	protected $request_handler;
	protected $inside_conditional;

	/** @var File|File_Collection|bool */
	protected $file;

	/** @var Parser_Context */
	protected $context;

	abstract public function type();

	/**
	 * @return string
	 */
	public function rep_item_id() {
		return $this->type();
	}

	public function get_response() {
		return $this->value;
	}

	/**
	 * @param Parser_Context $context
	 *
	 * @return mixed
	 * @throws Exclude_Field_Exception
	 */
	final public function get_parsed_value( Parser_Context $context ) {
		$this->set_context( $context );
		$this->set_block();
		$this->set_value( $context->get_value() );
		$this->set_file( $context->get_file() );

		return $this->response();
	}

	final public function response() {
		try {
			$this->value = $this->get_response();

			$this->check_response();
		} catch ( Sanitize_Value_Exception $exception ) {
			// silence catch
		}

		return $this->value;
	}

	public function parse_value( $value ) {
		return $value;
	}

	/**
	 * @throws Sanitize_Value_Exception
	 */
	protected function check_response() {
		if (
			$this->context->is_inside_conditional() ||
			( empty( $this->value ) && ! $this->is_required ) ||
			! empty( $this->value )
		) {
			return;
		}

		throw new Sanitize_Value_Exception( 'empty_field', $this->name, $this->settings );
	}

	/**
	 * @return bool
	 *
	 * @deprecated since 3.1.0
	 * Use `check_response` instead
	 * @see \Jet_Form_Builder\Request\Field_Data_Parser::check_response
	 */
	protected function has_error(): bool {
		return false;
	}

	/**
	 * @throws Exclude_Field_Exception
	 */
	protected function is_field_visible() {
		$visibility = $this->settings['visibility'] ?? true;

		// If is visible for logged in users and user is logged in - show field.
		if ( 'logged_id' === $visibility && ! is_user_logged_in() ) {
			throw new Exclude_Field_Exception();
		}

		// If is visible for not logged in users and user is not logged in - show field.
		if ( 'not_logged_in' === $visibility && is_user_logged_in() ) {
			throw new Exclude_Field_Exception();
		}
	}

	protected function set_context( Parser_Context $context ): Field_Data_Parser {
		$this->context = $context;

		return $this;
	}

	/**
	 * @return $this
	 * @throws Exclude_Field_Exception
	 */
	protected function set_block(): Field_Data_Parser {
		$block = $this->context->get_block();
		// todo: remove property settings
		$this->settings = $block['attrs'];
		$this->inner    = $block['innerBlocks'];

		$this->set_name();
		$this->set_required();
		$this->is_field_visible();

		return $this;
	}

	public function set_value( $value ): Field_Data_Parser {
		$this->value = $this->parse_value( $value );

		return $this;
	}

	protected function set_required(): Field_Data_Parser {
		$this->is_required = $this->settings['required'] ?? false;

		return $this;
	}

	protected function set_name(): Field_Data_Parser {
		$this->name = $this->settings['name'] ?? '';

		return $this;
	}

	/**
	 * @param bool|File|File_Collection $file
	 *
	 * @return Field_Data_Parser
	 */
	public function set_file( $file ): Field_Data_Parser {
		$this->file = $file;

		return $this;
	}

	/**
	 * @return Parser_Context|false
	 * @since 3.0.4
	 */
	public function get_context() {
		return $this->context instanceof Parser_Context ? $this->context : false;
	}


}
