<?php


namespace JFB_Modules\Bulk_Options\Interfaces;

// If this file is called directly, abort.
use JFB_Components\Repository\Repository_Item_Instance_Trait;

if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Source_Resolve_Interface extends Repository_Item_Instance_Trait {

	/**
	 * Used in select-control in editor
	 *
	 * @return string
	 */
	public function get_label(): string;

	public function resolve(): array;

}
