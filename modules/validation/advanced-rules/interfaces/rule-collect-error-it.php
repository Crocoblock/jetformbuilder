<?php


namespace JFB_Modules\Validation\Advanced_Rules\Interfaces;

use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Rule_Collect_Error_It {

	public function collect_error( Field_Data_Parser $parser );

}
