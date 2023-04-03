<?php


namespace Jet_Form_Builder\Classes\Theme;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait With_Theme_Info {

	// phpcs:ignore PSR2.Classes.PropertyDeclaration.Underscore
	private $_theme;

	public function theme(): Theme_Info {
		if ( ! $this->_theme ) {
			$this->_theme = new Theme_Info();
		}

		return $this->_theme;
	}

}
