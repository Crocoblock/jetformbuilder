<?php


namespace Jet_Form_Builder\Classes\Arrayable;

use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Static_Item_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Array_Convert_Once {

	/**
	 * @var array[]|Arrayable[]
	 */
	private $stack = array();

	/**
	 * @param Arrayable $item
	 *
	 * @return mixed
	 */
	public function add( Arrayable $item ): Arrayable {
		if ( ! ( $item instanceof Arrayable_Once ) ) {
			return $item;
		}
		$slug = $this->get_slug( $item );

		if ( isset( $this->stack[ $slug ] ) ) {
			return $this->stack[ $slug ];
		}

		$this->stack[ $slug ] = $item;

		return $this->stack[ $slug ];
	}

	public function to_array( Arrayable $item ): array {
		if ( ! ( $item instanceof Arrayable_Once ) ) {
			return $item->to_array();
		}
		$slug = $this->get_slug( $item );

		if ( isset( $this->stack[ $slug ] ) && is_array( $this->stack[ $slug ] ) ) {
			return $this->stack[ $slug ];
		}

		if ( isset( $this->stack[ $slug ] ) ) {
			$this->stack[ $slug ] = $this->stack[ $slug ]->to_array();

			return $this->stack[ $slug ];
		}

		$this->add( $item );

		return $this->to_array( $item );
	}

	/**
	 * @param string $slug
	 *
	 * @return array|Arrayable
	 * @throws Array_Continue_Exception
	 */
	public function get_item( string $slug ) {
		$this->exist( $slug );

		return $this->stack[ $slug ];
	}

	/**
	 * @param string $slug
	 *
	 * @return array|Arrayable
	 * @throws Array_Continue_Exception
	 */
	public function get_array_item( string $slug ) {
		$item = $this->get_item( $slug );

		if ( is_array( $item ) ) {
			return $item;
		}

		return $this->to_array( $item );
	}

	/**
	 * @param string $slug
	 *
	 * @return $this
	 * @throws Array_Continue_Exception
	 */
	public function exist( string $slug ): Array_Convert_Once {
		if ( isset( $this->stack[ $slug ] ) ) {
			return $this;
		}

		throw new Array_Continue_Exception( 'Undefined item: ' . $slug );
	}


	/**
	 * @param Arrayable $item
	 *
	 * @return mixed
	 */
	private function get_slug( Arrayable $item ) {
		if ( $item instanceof Repository_Item_Instance_Trait ) {
			return $item->rep_item_id();
		}
		if ( $item instanceof Repository_Static_Item_It ) {
			return $item::rep_item_id();
		}

		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
		wp_die( 'Invalid element. Item must an instance of ' . Repository_Item_Instance_Trait::class );
	}

}
