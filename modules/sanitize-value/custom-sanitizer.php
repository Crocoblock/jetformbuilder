<?php


namespace JFB_Modules\Sanitize_Value;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Modules\Block_Parsers\Field_Data_Parser;
use JFB_Modules\Sanitize_Value\Interfaces\Value_Sanitizer_It;
use JFB_Modules\Sanitize_Value\Interfaces\Value_Sanitizer_Settings_It;
use JFB_Modules\Sanitize_Value\Traits\Value_Sanitizer_Settings_Trait;

class Custom_Sanitizer implements Value_Sanitizer_It, Value_Sanitizer_Settings_It {

	use Value_Sanitizer_Settings_Trait;

	const CALLBACK_PREF = 'jet_fb_sv_';

	public function rep_item_id() {
		return 'custom';
	}

	public function do_sanitize( Field_Data_Parser $parser ) {
		$func_name = $this->get_setting( 'callback' );

		if ( ! $func_name ||
			! function_exists( self::CALLBACK_PREF . $func_name )
		) {
			return;
		}

		call_user_func( self::CALLBACK_PREF . $func_name, $parser );
	}
}
