<?php


namespace Jet_Form_Builder\Integrations\Abstract_Captcha;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Exceptions\Request_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Captcha implements
	Repository_Item_Instance_Trait,
	Arrayable {

	protected $options;

	abstract public function get_id(): string;

	abstract public function get_title(): string;

	/**
	 * @param array $request
	 *
	 * @throws Request_Exception
	 */
	abstract public function verify( array $request );

	abstract public function render(): string;

	public function sanitize_options( array $options ): Base_Captcha {
		$this->options = $options[ $this->get_id() ] ?? array();

		return $this;
	}

	public function rep_item_id() {
		return $this->get_id();
	}

	public function to_array(): array {
		return array(
			'label' => $this->get_title(),
			'value' => $this->get_id(),
		);
	}
}