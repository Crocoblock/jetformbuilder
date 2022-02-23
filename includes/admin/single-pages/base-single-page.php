<?php


namespace Jet_Form_Builder\Admin\Single_Pages;


use Jet_Form_Builder\Admin\Admin_Page_Interface;
use Jet_Form_Builder\Admin\Admin_Page_Trait;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Pages\Base_Page;

abstract class Base_Single_Page implements Admin_Page_Interface {

	use Admin_Page_Trait;

	protected $id;
	protected $parent_slug;

	/**
	 * Base_Single_Page constructor.
	 *
	 * @param string $parent_slug
	 * @param int $id
	 *
	 * @throws Not_Found_Page_Exception
	 */
	public function __construct( string $parent_slug, int $id ) {
		if ( ! $id ) {
			throw new Not_Found_Page_Exception( 'Item id is empty: ' . $id . ' in ' . static::class );
		}
		$this->id          = $id;
		$this->parent_slug = $parent_slug;
	}

	public function slug(): string {
		return $this->get_parent()->slug() . '-single';
	}

	public function title(): string {
		return '';
	}

	/**
	 * Returns current page url
	 *
	 * @param array $query_args
	 *
	 * @return string
	 */
	public function get_url( $query_args = array() ): string {
		return $this->get_parent()->get_url( array_merge(
			array( 'item_id' => $this->id ),
			$query_args
		) );
	}

	/**
	 * @return Base_Page
	 */
	public function get_parent(): Base_Page {
		return jet_form_builder()->pages->rep_get_item_or_die( $this->parent_slug );
	}

}