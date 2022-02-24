<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;

use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;

abstract class Base_Meta_Box {

	abstract public function get_title(): string;

	abstract public function get_values(): array;

	public function get_slug(): string {
		return str_replace( ' ', '-', strtolower( $this->get_title() ) );
	}

	public function is_active(): bool {
		return true;
	}

	/**
	 * @return int
	 * @throws Not_Found_Page_Exception
	 */
	public function get_id(): int {
		/** @var Base_Single_Page $single */
		$single = jet_fb_admin_pages()->get_current();

		return $single->get_id();
	}
}
