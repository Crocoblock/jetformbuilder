<?php


namespace Jet_Form_Builder\Classes;

class Compatibility {

	public static function has_jet_sm(): bool {
		return (
			class_exists( 'JET_SM\Gutenberg\Controls_Manager' )
			&& class_exists( 'JET_SM\Gutenberg\Block_Manager' )
		);
	}

	public static function has_jet_engine(): bool {
		return (
			function_exists( 'jet_engine' )
		);
	}

}
