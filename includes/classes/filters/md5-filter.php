<?php


namespace Jet_Form_Builder\Classes\Filters;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Md5_Filter extends Base_Filter {

	/**
	 * @return string
	 */
	public function get_id(): string {
		return 'md5';
	}

	/**
	 * @param $value
	 * @param mixed ...$args
	 *
	 * @return string
	 */
	public function apply_macros( $value, ...$args ): string {
		return md5( $value );
	}
}
