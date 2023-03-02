<?php


namespace Jet_Form_Builder\Classes\Filters;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Image_Alt_By_Id_Filter extends Base_Multiple_Filter {

	public function get_id(): string {
		return 'img_alt_by_id';
	}

	protected function apply_item( $item, ...$args ): string {
		if ( ! $item ) {
			return '';
		}
		$alt = get_post_meta( $item, '_wp_attachment_image_alt', true );

		if ( $alt ) {
			return $alt;
		}
		$attachment = get_post( $item );

		if ( ! $attachment ) {
			return $item;
		}

		return $attachment->post_excerpt ?: $attachment->post_title;
	}

}