<?php


namespace Jet_Form_Builder\Classes\Filters;


class Embed_Url_Filter extends Base_Filter {

	public function get_id(): string {
		return 'embed_url';
	}

	public function apply_macros( $value, ...$args ): string {
		return wp_oembed_get( $value );
	}

}