<?php


namespace Jet_Form_Builder\Request;


use Jet_Form_Builder\Blocks\Modules\Fields_Errors\Error_Handler;
use Jet_Form_Builder\Exceptions\Request_Exception;

abstract class Field_Data_Parser {

	public $value;
	public $is_required = false;
	public $name = 'field_name';
	public $block;
	public $settings;
	public $inner;
	public $current_repeater_item = 0;
	public $parent_name;
	public $parent_index;

	private $_is_valid = null;

	abstract public function type();

	public function get_response() {
		return $this->value;
	}

	public function _is_custom_check() {
		return true;
	}

	public function is_valid() {
		if ( is_null( $this->_is_valid ) ) {
			$this->_is_valid = ( $this->_is_required() && $this->_is_custom_check() );
		}

		return $this->_is_valid;
	}

	public function in_repeater() {
		return ( $this->parent_name && false !== $this->parent_index );
	}

	public function save_response() {
		return true;
	}

	final public function response() {
		if ( ! $this->is_valid() ) {
			$this->save_error();
		}
		$value = $this->get_response();

		if ( ! $this->save_response() ) {
			return;
		}

		if ( $this->in_repeater() ) {
			Parser_Manager::instance()->response( array(
				$this->parent_name => array(
					$this->parent_index => array(
						$this->name => $value
					)
				)
			), true );
		} else {
			Parser_Manager::instance()->response( array(
				$this->name => $value
			) );
		}
	}

	public function init( $value, $block, $parent_name, $index ) {
		$this->value        = $value;
		$this->parent_name  = $parent_name;
		$this->parent_index = $index;

		$this->settings    = $block['attrs'];
		$this->inner       = $block['innerBlocks'];
		$this->is_required = isset( $this->settings['required'] ) ? $this->settings['required'] : false;
		$this->name        = isset( $this->settings['name'] ) ? $this->settings['name'] : 'field_name';

		$this->after_init();
	}

	public function after_init() {
	}


	public function _is_required() {
		$valid_repeater = null;
		$result         = $this->is_required ? ( ! empty( $this->value ) ) : true;

		if ( $this->in_repeater() ) {
			$valid_repeater = Parser_Manager::instance()->current()->is_valid( $this->parent_name );
		}

		if ( is_null( $valid_repeater ) ) {
			return $result;
		}

		return ( $result && $valid_repeater );
	}

	public function save_error() {
		Error_Handler::instance()->add(
			$this->type(),
			array(
				'name'           => $this->name,
				'params'         => $this->settings,
				'repeater_name'  => $this->parent_name,
				'repeater_index' => $this->parent_index
			) );
	}


}