<?php


namespace Jet_Form_Builder\Admin\Single_Pages;

use Jet_Form_Builder\Admin\Admin_Page_Interface;
use Jet_Form_Builder\Admin\Admin_Page_Trait;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Pages\Base_Page;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Base_Meta_Container;
use Jet_Form_Builder\Classes\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

abstract class Base_Single_Page implements Admin_Page_Interface, Repository_Item_Instance_Trait {

	use Admin_Page_Trait;

	protected $id;

	abstract public function parent_slug(): string;

	public function rep_item_id() {
		return $this->parent_slug();
	}

	/**
	 * @param int $id
	 *
	 * @return Base_Single_Page
	 * @throws Not_Found_Page_Exception
	 */
	public function make( int $id ): Base_Single_Page {
		$self = $this->set_id( $id );
		$self->query_config();

		return $self;
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
	 * @return Base_Meta_Container[]
	 */
	public function meta_containers(): array {
		return array();
	}

	/**
	 * @return array
	 */
	public function page_config(): array {
		return array(
			'containers' => $this->get_prepared_containers(),
			'title'      => $this->title(),
		);
	}

	final public function get_prepared_containers(): array {
		$prepared = array();

		/** @var Base_Meta_Container[] $containers */
		$containers = apply_filters( "jet-form-builder/page-containers/{$this->slug()}", $this->meta_containers() );

		foreach ( $containers as $index => $container ) {
			$prepared[] = $container->set_index( $index )->to_array();
		}

		return $prepared;
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

}
