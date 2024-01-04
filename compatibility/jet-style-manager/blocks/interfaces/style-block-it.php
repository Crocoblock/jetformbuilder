<?php


namespace JFB_Compatibility\Jet_Style_Manager\Blocks\Interfaces;

use JFB_Components\Repository\Repository_Item_Instance_Trait;
use JET_SM\Gutenberg\Controls_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Style_Block_It extends Repository_Item_Instance_Trait {

	public function get_manager(): Controls_Manager;

	public function set_manager( Controls_Manager $manager );

	public function process_controls();

	public function selector( $selector = '' ): string;

	public function has_css_selector( string $name ): bool;

	public function get_css_selector( string $name ): string;

	public function set_css_selector( string $name, string $selector );

	/**
	 * @param string[] $css_scheme
	 */
	public function set_css_scheme( array $css_scheme );

	/**
	 * @return string[]
	 */
	public function get_css_scheme(): array;

	/**
	 * @return string
	 */
	public function get_namespace(): string;

	public function set_namespace( string $namespace_selector );

}
