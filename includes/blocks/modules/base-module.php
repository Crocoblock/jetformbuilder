<?php


namespace Jet_Form_Builder\Blocks\Modules;

use Jet_Form_Builder\Classes\Get_Icon_Trait;
use Jet_Form_Builder\Classes\Html_Attributes_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Base_Module {

	use Get_Icon_Trait;
	use General_Style;
	use Html_Attributes_Trait;
}
