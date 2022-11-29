<?php


namespace Jet_Form_Builder\Classes\Repository;


interface Repository_Item_Dynamic_Id {

	/**
	 * @return string|false
	 */
	public function create_dynamic_id( string $name );

	public function get_dynamic_id(): string;

	public function set_dynamic_id( string $id );

}