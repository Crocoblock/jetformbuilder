<?php


namespace JFB_Components\Repository;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Repository_Item_Dynamic_Id {

	/**
	 * @return string|false
	 */
	public function create_dynamic_id( string $name );

	public function get_dynamic_id(): string;

	public function set_dynamic_id( string $id );

}
