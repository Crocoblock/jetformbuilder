<?php


namespace Jet_Form_Builder\Admin\Notices;

use Jet_Form_Builder\Admin\Buttons\Base_Vui_Button;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Notice implements Arrayable, Repository_Item_Instance_Trait {

	const PRESET_ALERT  = 'alert';
	const PRESET_NOTICE = 'notice';

	const TYPE_INFO    = 'info';
	const TYPE_SUCCESS = 'success';
	const TYPE_DANGER  = 'danger';
	const TYPE_ERROR   = 'error';

	abstract public function get_id(): string;

	abstract public function get_message(): string;

	public function rep_item_id() {
		return $this->get_id();
	}

	public function get_type(): string {
		return self::TYPE_INFO;
	}

	public function get_title(): string {
		return '';
	}

	public function get_icon(): string {
		return '';
	}

	/**
	 * @return Base_Vui_Button[]
	 */
	public function get_buttons(): array {
		return array();
	}

	public function is_hide_after_close(): bool {
		return true;
	}

	public function to_array(): array {
		return array(
			'id'      => $this->get_id(),
			'type'    => $this->get_type(),
			'icon'    => $this->get_icon(),
			'title'   => $this->get_title(),
			'message' => $this->get_message(),
			'buttons' => Array_Tools::to_array( $this->get_buttons() ),
			'options' => array(
				'is_hide_after_close' => $this->is_hide_after_close(),
			),
		);
	}

}
