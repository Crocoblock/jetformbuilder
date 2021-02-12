<?php


namespace Jet_Form_Builder\Compatibility\Jet_Engine;


use Jet_Form_Builder\Compatibility\Base_Compatibility;

class Manager extends Base_Compatibility {

	public static function check() {
		return function_exists( 'jet_engine' );
	}

}