<?php


namespace Jet_Form_Builder\Classes\Filters;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Embed_Url_Filter extends Base_Multiple_Filter {

	public function get_id(): string {
		return 'embed_url';
	}

	protected function apply_item( $item, ...$args ): string {
		return wp_oembed_get( $item );
	}

}