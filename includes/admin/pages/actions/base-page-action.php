<?php


namespace Jet_Form_Builder\Admin\Pages\Actions;

use Jet_Form_Builder\Admin\Buttons\Base_Vui_Button;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Db_Queries\Exceptions\Skip_Exception;

abstract class Base_Page_Action implements Arrayable {

	abstract public function get_slug(): string;

	public function get_button(): Base_Vui_Button {
		return ( new Base_Vui_Button() )->set_label( $this->get_slug() );
	}

	public function to_array(): array {
		$config = array(
			'slug' => $this->get_slug(),
		);

		try {
			$config['button'] = $this->get_button()->to_array();
		} catch ( Skip_Exception $exception ) {
			return $config;
		}

		return $config;
	}
}
