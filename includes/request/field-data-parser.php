<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Blocks\Modules\Fields_Errors\Error_Handler;
use Jet_Form_Builder\Classes\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Request\Exceptions\Exclude_Field_Exception;

abstract class Field_Data_Parser implements Repository_Item_Instance_Trait {

	protected $value;
	protected $is_required = false;
	protected $name = 'field_name';
	protected $block;
	protected $settings;
	protected $inner;
	protected $request_handler;
	protected $inside_conditional;

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
	 * @param $value
	 * @param $block
	 * @param $inside_conditional
	 *
	 * @return mixed
	 * @throws Exclude_Field_Exception
	 */
	final public function get_parsed_value( $value, $block, $inside_conditional ) {
		$this->init( $value, $block, $inside_conditional )->is_field_visible();

		return $this->response();
	}

	final public function response() {
		if ( $this->has_error() ) {
			$this->save_error();
		}

		return $this->get_response();
	}

	public function parse_value( $value ) {
		return $value;
	}

	public function init( $value, $block, $inside_conditional ): Field_Data_Parser {
		$this->block              = $block;
		$this->inside_conditional = $inside_conditional;
		$this->settings           = $this->block['attrs'];
		$this->inner              = $this->block['innerBlocks'];

		if ( isset( $this->settings['required'] ) ) {
			$this->is_required = $this->settings['required'];
		}
		if ( isset( $this->settings['name'] ) ) {
			$this->name = $this->settings['name'];
		}
		$this->value = $this->parse_value( $value );

		return $this;
	}

	protected function has_error(): bool {
		return ( ! $this->inside_conditional && $this->is_required && empty( $this->value ) );
	}

	protected function save_error() {
		Error_Handler::instance()->add(
			$this->type(),
			array(
				'name'   => $this->name,
				'params' => $this->settings,
			)
		);
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
		if ( 'not_logged_in' === $this->settings['visibility'] && is_user_logged_in() ) {
			throw new Exclude_Field_Exception();
		}
	}


}
