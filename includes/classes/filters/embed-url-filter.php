<?php


namespace Jet_Form_Builder\Classes\Filters;


class Embed_Url_Filter extends Base_Multiple_Filter {

	public function get_id(): string {
		return 'embed_url';
	}

	protected function apply_item( $item, ...$args ): string {
		return wp_oembed_get( $item );
	}

}