<?php


namespace JFB_Modules\Validation\Post_Type;

use JFB_Modules\Post_Type\Meta\Base_Meta_Type;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Validation_Meta extends Base_Meta_Type {

	public function get_id(): string {
		return '_jf_validation';
	}

	public function get_type(): string {
		return 'string';
	}

	public function get_default(): string {
		return '{}';
	}
}
