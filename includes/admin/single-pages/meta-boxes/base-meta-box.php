<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;

use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Classes\Repository_Item_With_Class;

abstract class Base_Meta_Box {

	const TYPE_LIST  = 'list';
	const TYPE_TABLE = 'table';

	use Repository_Item_With_Class;

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
		$single = Pages_Manager::instance()->get_current();

		return $single->get_id();
	}

	/**
	 * @return int[]
	 */
	public function to_array(): array {
		return array(
			'slug'  => $this->get_slug(),
			'title' => $this->get_title(),
			'list'  => $this->get_values(),
		);
	}
}
