<?php


namespace Jet_Form_Builder\Classes\Theme;


trait With_Theme_Info {

	private $_theme;

	public function theme(): Theme_Info {
		if ( ! $this->_theme ) {
			$this->_theme = new Theme_Info();
		}

		return $this->_theme;
	}

}