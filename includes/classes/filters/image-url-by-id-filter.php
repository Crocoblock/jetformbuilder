<?php


namespace Jet_Form_Builder\Classes\Filters;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Image_Url_By_Id_Filter extends Base_Filter {

	public function get_id(): string {
		return 'img_url_by_id';
	}

	public function apply_macros( $value, ...$args ): string {
		list( $size ) = $args;

		return wp_get_attachment_image_url( $value, $size );
	}

}