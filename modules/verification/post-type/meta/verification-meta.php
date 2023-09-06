<?php


namespace JFB_Modules\Verification\Post_Type\Meta;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Modules\Post_Type\Meta\Base_Meta_Type;

class Verification_Meta extends Base_Meta_Type {

	public function get_id(): string {
		return '_jf_verification';
	}

	public function get_type(): string {
		return 'string';
	}

	public function get_default(): string {
		return '{}';
	}
}
