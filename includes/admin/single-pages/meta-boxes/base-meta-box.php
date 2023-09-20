<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;

use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use JFB_Components\Repository\Repository_Item_With_Class;
use JFB_Components\Repository\Repository_Static_Item_It;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Db_Queries\Traits\Model_Dependencies;
use Jet_Form_Builder\Db_Queries\Traits\Model_Dependencies_Interface;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Meta_Box implements
	Model_Dependencies_Interface,
	Arrayable,
	Repository_Static_Item_It {

	const TYPE_LIST  = 'list';
	const TYPE_TABLE = 'table';

	use Repository_Item_With_Class;
	use Model_Dependencies;

	private $id = 0;

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
	 */
	public function get_id(): int {
		return $this->id;
	}

	/**
	 * @param int $id
	 *
	 * @return Base_Meta_Box
	 */
	public function set_id( int $id ): Base_Meta_Box {
		$this->id = $id;

		return $this;
	}

	public function set_single_id(): Base_Meta_Box {
		/** @var Base_Single_Page $single */
		try {
			$single = Pages_Manager::instance()->get_current();
		} catch ( Not_Found_Page_Exception $e ) {
			return $this;
		}

		return $this->set_id( $single->get_id() );
	}

	public function get_migrations(): \Generator {
		foreach ( $this->get_dependencies() as $model ) {
			yield from $model->get_migrations();
		}
	}

	/**
	 * @return int[]
	 * @throws Empty_Box_Exception
	 */
	public function to_array(): array {
		try {
			$this->prepare_dependencies();
		} catch ( Sql_Exception $exception ) {
			throw new Empty_Box_Exception(
				esc_html( $exception->getMessage() ),
				// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
				...$exception->get_additional()
			);
		}

		return array(
			'slug'  => $this->get_slug(),
			'title' => $this->get_title(),
			'list'  => $this->get_values(),
		);
	}
}
