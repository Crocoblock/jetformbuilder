<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;

use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Classes\Repository_Item_With_Class;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Db_Queries\Traits\Model_Dependencies;
use Jet_Form_Builder\Db_Queries\Traits\Model_Dependencies_Interface;

abstract class Base_Meta_Box implements Model_Dependencies_Interface {

	const TYPE_LIST  = 'list';
	const TYPE_TABLE = 'table';

	use Repository_Item_With_Class;
	use Model_Dependencies;

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
	 * @throws Empty_Box_Exception
	 */
	public function to_array(): array {
		try {
			$this->prepare_dependencies();
		} catch ( Sql_Exception $exception ) {
			throw new Empty_Box_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}
		return array(
			'slug'  => $this->get_slug(),
			'title' => $this->get_title(),
			'list'  => $this->get_values(),
		);
	}
}
