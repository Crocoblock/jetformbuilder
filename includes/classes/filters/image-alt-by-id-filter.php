<?php


namespace Jet_Form_Builder\Classes\Filters;


class Image_Alt_By_Id_Filter extends Base_Filter {

	public function get_id(): string {
		return 'img_alt_by_id';
	}

	/**
	 * @param string $value
	 * @param mixed ...$args
	 *
	 * @return string
	 */
	public function apply_macros( $value, ...$args ): string {
		if ( ! $value ) {
			return '';
		}
		$alt = get_post_meta( $value, '_wp_attachment_image_alt', true );

		if ( $alt ) {
			return $alt;
		}
		$attachment = get_post( $value );

		return $attachment->post_excerpt ?: $attachment->post_title;
	}

}