<?php


namespace Jet_Form_Builder\Admin\Vui_Boxes;

use Jet_Form_Builder\Classes\Arrayable\Array_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Vui_Banner_Box extends Base_Vui_Box {

	abstract public function get_label(): string;

	abstract public function get_title(): string;

	public function get_content(): string {
		return '';
	}

	public function get_buttons(): array {
		return array();
	}

	public function get_type(): string {
		return self::TYPE_BANNER;
	}

	public function to_array(): array {
		return array_merge(
			parent::to_array(),
			array(
				'title'   => $this->get_title(),
				'label'   => $this->get_label(),
				'content' => $this->get_content(),
				'buttons' => Array_Tools::to_array( $this->get_buttons() ),
			)
		);
	}

}
