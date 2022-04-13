<?php


namespace Jet_Form_Builder\Admin\Pages\Actions;

use Jet_Form_Builder\Admin\Admin_Page_Interface;
use Jet_Form_Builder\Admin\Buttons\Base_Vui_Button;
use Jet_Form_Builder\Admin\Pages\Base_Page;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Db_Queries\Exceptions\Skip_Exception;

abstract class Base_Page_Action implements Arrayable {

	const SECONDARY = 'secondary';
	const PRIMARY = 'primary';
	const ON_UPDATE = 'update';

	protected $page;

	abstract public function get_slug(): string;

	public function get_position(): string {
		return self::SECONDARY;
	}

	public function get_subscriptions(): array {
		return array();
	}

	/**
	 * @param Base_Page|Base_Single_Page $page
	 *
	 * @return $this
	 */
	public function set_page( $page ): Base_Page_Action {
		$this->page = $page;

		return $this;
	}

	public function get_button(): Base_Vui_Button {
		return ( new Base_Vui_Button() )->set_label( $this->get_slug() );
	}

	public function to_array(): array {
		$config = array(
			'slug'          => $this->get_slug(),
			'position'      => $this->get_position(),
			'subscriptions' => $this->get_subscriptions(),
		);

		try {
			$config['button'] = $this->get_button()->to_array();
		} catch ( Skip_Exception $exception ) {
			return $config;
		}

		return $config;
	}
}
