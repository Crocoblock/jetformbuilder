<?php


namespace Jet_Form_Builder\Blocks\Advanced_Rules;

use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use JFB_Components\Repository\Repository_Item_Instance_Trait;
use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Advanced_Rule implements Arrayable, Repository_Item_Instance_Trait {

	protected $settings = array();

	abstract public function get_id(): string;

	abstract public function get_label(): string;

	public function validate_field( Field_Data_Parser $parser ) {
	}

	public function get_control_label(): string {
		return __( 'Symbols', 'jet-form-builder' );
	}

	public function to_array(): array {
		return array(
			'value'         => $this->get_id(),
			'label'         => $this->get_label(),
			'control_label' => $this->get_control_label(),
		);
	}

	/**
	 * @param array $settings
	 */
	public function set_settings( array $settings ) {
		$this->settings = $settings;
	}

	/**
	 * @return array
	 */
	public function get_settings(): array {
		return $this->settings;
	}

	public function get_setting( string $name ) {
		return $this->settings[ $name ] ?? false;
	}

	public function set_setting( string $name, $value ) {
		$this->settings[ $name ] = $value;
	}

	public function rep_item_id() {
		return $this->get_id();
	}



}
