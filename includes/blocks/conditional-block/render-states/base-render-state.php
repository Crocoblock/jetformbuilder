<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Render_States;

use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Arrayable\Collection_Item_Interface;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Render_State implements
	Repository_Item_Instance_Trait,
	Collection_Item_Interface,
	Arrayable {

	abstract public function get_title(): string;

	abstract public function is_supported(): bool;

	public function is_supported_on_current(): bool {
		return $this->is_supported();
	}

	public function rep_item_id() {
		return $this->get_id();
	}

	public function render(): string {
		return sprintf(
			'<input type="hidden" name="%1$s[]" value="%2$s" data-jfb-sync />',
			Render_State::FIELD_NAME,
			$this->get_id()
		);
	}

	/**
	 * Determines the availability of this state for switching
	 * to it using the Action Button
	 *
	 * @return bool
	 */
	public function can_be_switched(): bool {
		return false;
	}

	public function exclude_states(): array {
		return array(
			Default_State::class
		);
	}

	public function to_array(): array {
		return array(
			'value'           => $this->get_id(),
			'label'           => $this->get_title(),
			'can_be_switched' => $this->can_be_switched(),
		);
	}

}