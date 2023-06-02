<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Functions;

use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Response_Object;
use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Types\Base_Condition_Type;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use JFB_Components\Repository\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Function implements
	Repository_Item_Instance_Trait,
	Arrayable,
	Condition_Response_Object {

	abstract public function get_id(): string;

	abstract public function get_title(): string;

	public function get_display(): string {
		return '';
	}

	public function rep_item_id() {
		return $this->get_id();
	}

	public function to_response( array $base, Base_Condition_Type $item ): array {
		return array();
	}

	public function to_string( array $settings ): string {
		$slug    = $this->get_id();
		$current = $settings[ $slug ] ?? array();

		if ( empty( $current ) ) {
			return $slug;
		}

		return Tools::esc_attr(
			array(
				$slug => $current,
			)
		);
	}

	public function to_array(): array {
		return array(
			'value'   => $this->get_id(),
			'label'   => $this->get_title(),
			'display' => $this->get_display(),
		);
	}

}
