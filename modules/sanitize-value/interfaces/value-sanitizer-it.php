<?php


namespace JFB_Modules\Sanitize_Value\Interfaces;

use JFB_Components\Repository\Repository_Item_Instance_Trait;
use JFB_Modules\Block_Parsers\Field_Data_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Value_Sanitizer_It extends Repository_Item_Instance_Trait {

	/**
	 * @param Field_Data_Parser $parser
	 */
	public function do_sanitize( Field_Data_Parser $parser );

}
