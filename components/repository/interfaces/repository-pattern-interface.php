<?php


namespace JFB_Components\Repository\Interfaces;

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Repository\Repository_Item_Dynamic_Id;
use JFB_Components\Repository\Repository_Item_Instance_Trait;
use JFB_Components\Repository\Repository_Static_Item_It;

interface Repository_Pattern_Interface {

	public function rep_instances(): array;

	public function rep_save_fails(): bool;

	public function rep_install( $instances = array() );

	public function rep_allow_rewrite();

	public function rep_install_item_soft( $item_trait );

	/**
	 * @param $item_trait
	 * @param $item_key
	 */
	public function rep_run_install_flow( string $item_key, $item_trait );

	/**
	 * @param $item_trait
	 *
	 * @return $this
	 * @throws Repository_Exception
	 */
	public function rep_install_item( $item_trait );

	public function rep_before_install_item( $item );

	public function rep_after_install( $item );

	public function rep_after_install_item( $item );

	public function rep_get_items(): array;

	/**
	 * @return \Generator
	 * @since 3.1.0
	 */
	public function rep_generate_items(): \Generator;

	public function rep_get_values(): array;

	public function rep_get_keys(): array;


	/**
	 * @param $class_or_slug
	 *
	 * @return mixed
	 * @throws Repository_Exception
	 */
	public function rep_get_item( $class_or_slug );

	public function rep_get_item_or_die( $slug );

	/**
	 * @param $slug
	 *
	 * @return mixed
	 * @throws Repository_Exception
	 */
	public function rep_clone_item( $slug );

	public function rep_clone_item_or_die( $slug );

	/**
	 * @param $item
	 *
	 * @param string $slug
	 *
	 * @throws Repository_Exception
	 */
	// phpcs:ignore Generic.CodeAnalysis.UnusedFunctionParameter.FoundAfterLastUsed
	public function rep_item_check( $item, $slug = '' );

	public function rep_isset_item( $slug );

	/**
	 * @param $slug
	 *
	 * @return void
	 * @throws Repository_Exception
	 */
	public function rep_throw_if_undefined( $slug );

	public function rep_die_if_undefined( $slug );

	/**
	 * @param $item_trait
	 *
	 * @throws Repository_Exception
	 */
	public function rep_throw_if_cant_rewrite( $item_trait );

	// phpcs:ignore PSR2.Methods.MethodDeclaration.Underscore
	public function _rep_save_fail( Repository_Exception $exception );

	/**
	 * @return array
	 */
	// phpcs:ignore PSR2.Methods.MethodDeclaration.Underscore
	public function _rep_get_fails(): array;

	/**
	 * @since 3.1.0
	 *
	 * @param string|Repository_Item_Instance_Trait|Repository_Item_Dynamic_Id|Repository_Static_Item_It $item_trait
	 */
	public function rep_remove( $item_trait );

	public function rep_clear();
}
