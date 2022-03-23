<?php


namespace Jet_Form_Builder\Classes\Theme;

class Theme_Info {

	/** @var \WP_Theme */
	private $theme;
	private $slug        = '';
	private $author_slug = '';

	public function __construct( $stylesheet = '', $theme_root = '' ) {
		if ( ! $stylesheet ) {
			$stylesheet = get_template();
		}

		$this->theme = wp_get_theme( $stylesheet, $theme_root );
	}

	public function slug(): string {
		if ( ! $this->slug ) {
			$this->slug = strtolower( preg_replace( '/\s+/', '', $this->name() ) );
		}

		return $this->slug;
	}

	public function author_slug(): string {
		if ( ! $this->author_slug ) {
			$this->author_slug = strtolower( preg_replace( '/\s+/', '', $this->author() ) );
		}

		return $this->author_slug;
	}

	public function name(): string {
		return $this->theme->get( 'Name' );
	}

	public function author(): string {
		return $this->theme->get( 'Author' );
	}

	public function version(): string {
		return $this->theme->get( 'Version' );
	}

	public function core(): \WP_Theme {
		return $this->theme;
	}

}
