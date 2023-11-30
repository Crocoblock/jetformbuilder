<?php


namespace JFB_Modules\Validation\Advanced_Rules\Traits;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Modules\Block_Parsers\Field_Data_Parser;

trait Rule_Collect_Error_Trait {

	public function collect_error( Field_Data_Parser $parser ) {
		$parser->collect_error( 'rule:' . $this->get_id(), $this->get_setting( 'message' ) );
	}

}
