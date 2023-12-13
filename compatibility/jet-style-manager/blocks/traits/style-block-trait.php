<?php


namespace JFB_Compatibility\Jet_Style_Manager\Blocks\Traits;

use JET_SM\Gutenberg\Controls_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Style_Block_Trait {

	/**
	 * @var Controls_Manager
	 */
	private $manager;

	/**
	 * @var string
	 */
	private $namespace = '';

	/**
	 * @var string[]
	 */
	private $css_scheme = array();

	public function get_manager(): Controls_Manager {
		return $this->manager;
	}

	public function set_manager( Controls_Manager $manager ) {
		$this->manager = $manager;
	}

	public function selector( $selector = '' ): string {
		if ( $selector && $this->has_css_selector( $selector ) ) {
			$selector = $this->get_css_selector( $selector );
		}

		return "{{WRAPPER}} {$this->get_namespace()}" . sprintf( $selector, $this->namespace );
	}

	public function has_css_selector( string $name ): bool {
		return ! empty( $this->css_scheme[ $name ] );
	}

	public function get_css_selector( string $name ): string {
		return $this->css_scheme[ $name ] ?? '';
	}

	public function set_css_selector( string $name, string $selector ) {
		$this->css_scheme[ $name ] = $selector;
	}


	/**
	 * @param string[] $css_scheme
	 */
	public function set_css_scheme( array $css_scheme ) {
		$this->css_scheme = $css_scheme;
	}

	/**
	 * @return string[]
	 */
	public function get_css_scheme(): array {
		return $this->css_scheme;
	}

	/**
	 * @return string
	 */
	public function get_namespace(): string {
		return $this->namespace;
	}

	/**
	 * @param string $namespace_selector
	 */
	public function set_namespace( string $namespace_selector ) {
		$this->namespace = $namespace_selector;
	}

}
