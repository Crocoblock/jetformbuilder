<?php


namespace JFB_Components\Admin\Print_Page\Traits;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Page_Assets_Trait {

	protected $scripts = array();
	protected $styles  = array();

	public function add_script( string $handle ) {
		$this->scripts[] = sanitize_key( $handle );
	}

	public function add_style( string $handle ) {
		$this->styles[] = sanitize_key( $handle );
	}

	public function add_scripts( array $handles ) {
		foreach ( $handles as $handle ) {
			$this->add_script( $handle );
		}
	}

	public function add_styles( array $handles ) {
		foreach ( $handles as $handle ) {
			$this->add_style( $handle );
		}
	}

	public function do_scripts() {
		wp_scripts()->do_items( $this->scripts );
	}

	public function do_styles() {
		wp_styles()->do_items( $this->styles );
	}

}