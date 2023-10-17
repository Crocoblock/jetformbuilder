<?php


namespace Jet_Form_Builder\Blocks;

use Jet_Form_Builder\Blocks\Button_Types\Button_Type_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * CRUD
 *
 * Trait Action_Buttons_Manager
 *
 * @package Jet_Form_Builder\Blocks
 */
trait Action_Buttons_Manager {

	/**
	 * @var Button_Type_Base[]
	 */
	private $button_types = array();

	public function get_button_types() {
		return $this->button_types;
	}

	public function get_button_types_for_js() {
		$prepared = array();

		foreach ( $this->get_button_types() as $type ) {
			$prepared[] = array(
				'value'         => $type->slug(),
				'button_class'  => $type->get_class( 'button' ),
				'wrapper_class' => $type->get_class( 'wrapper' ),
			);
		}

		return $prepared;
	}

	/**
	 * @param Button_Type_Base $button
	 * @param bool             $update
	 */
	public function set_button_type( Button_Type_Base $button, $update = false ) {
		if ( ! $update && $this->isset_button_type( $button->slug() ) ) {
			return;
		}
		$this->button_types[ $button->slug() ] = $button;
	}

	public function update_button_type( Button_Type_Base $button ) {
		$this->set_button_type( $button, true );
	}

	public function isset_button_type( string $slug ) {
		return isset( $this->button_types[ $slug ] );
	}

	/**
	 * @param $slug
	 *
	 * @return Button_Type_Base
	 */
	public function get_button_type( $slug ) {
		return $this->button_types[ $slug ];
	}

	public function delete_button_type( $slug ) {
		if ( ! $this->isset_button_type( $slug ) ) {
			return false;
		}
		unset( $this->button_types[ $slug ] );

		return true;
	}

}
