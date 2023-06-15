<?php


namespace Jet_Form_Builder\Admin\Single_Pages;

use JFB_Components\Admin\Page\Interfaces\Admin_Dashboard_Page_It;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Pages\Base_Page;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Base_Meta_Container;
use Jet_Form_Builder\Classes\Arrayable\Array_Convert_Once;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Theme\With_Theme_Info;
use JFB_Components\Admin\Page\Traits\Admin_Dashboard_Page_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Single_Page implements Admin_Dashboard_Page_It {

	use Admin_Dashboard_Page_Trait;
	use With_Theme_Info;

	protected $id;
	protected $storage;

	/** @var Base_Meta_Container[] */
	protected $containers = array();

	abstract public function parent_slug(): string;

	public function __construct() {
		$this->storage = new Array_Convert_Once();
	}

	public function rep_item_id() {
		return $this->parent_slug();
	}

	/**
	 * @return Base_Meta_Container[]
	 */
	public function meta_containers(): array {
		return array();
	}


	/**
	 * @return Base_Single_Page
	 * @throws Not_Found_Page_Exception
	 */
	public function make(): Base_Single_Page {
		$id = $this->query_id();

		$this->set_id( $id )->query_config();

		return $this;
	}

	public function query_id(): int {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return absint( $_GET['item_id'] ?? 0 );
	}


	/**
	 * @param int $id
	 *
	 * @return Base_Single_Page
	 * @throws Not_Found_Page_Exception
	 */
	public function set_id( int $id ): Base_Single_Page {
		if ( ! $id ) {
			throw new Not_Found_Page_Exception( 'Item id is empty: ' . $id . ' in ' . static::class );
		}
		$this->id = $id;

		return $this;
	}

	/**
	 * @return array
	 */
	public function page_config(): array {
		return array(
			'title'      => $this->title(),
			'containers' => Array_Tools::to_array( $this->get_prepared_containers() ),
			'actions'    => Array_Tools::to_array( $this->get_actions() ),
		);
	}

	/**
	 * @return Base_Meta_Container[]
	 */
	public function get_prepared_containers(): array {
		if ( count( $this->containers ) ) {
			return $this->containers;
		}

		/** @var Base_Meta_Container[] $containers */
		$containers = apply_filters( "jet-form-builder/page-containers/{$this->slug()}", $this->meta_containers() );

		foreach ( $containers as $index => $container ) {
			$this->containers[] = $container->set_index( $index );
		}

		return $this->containers;
	}

	/**
	 * @return null|\Generator
	 */
	public function get_migrations(): \Generator {
		foreach ( $this->get_prepared_containers() as $container ) {
			yield from $container->get_migrations();
		}
	}

	public function slug(): string {
		return $this->parent_slug() . '-single';
	}

	/**
	 * Returns current page url
	 *
	 * @param array $query_args
	 *
	 * @return string
	 */
	public function get_url( $query_args = array() ): string {
		return $this->get_parent()->get_url(
			array_merge(
				array( 'item_id' => $this->id ),
				$query_args
			)
		);
	}

	public function get_parent(): Base_Page {
		return Pages_Manager::instance()->stable()->rep_get_item_or_die( $this->parent_slug() );
	}

	public function get_id(): int {
		return $this->id;
	}

	public function get_storage(): Array_Convert_Once {
		return $this->storage;
	}

}
