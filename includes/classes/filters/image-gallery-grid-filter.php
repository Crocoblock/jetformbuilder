<?php


namespace Jet_Form_Builder\Classes\Filters;

use Jet_Form_Builder\Classes\Gallery;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Image_Gallery_Grid_Filter extends Base_Filter {

	public function get_id(): string {
		return 'img_gallery_grid';
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

		$img_ids = explode( ',', $value );

		if ( empty( $img_ids ) ) {
			return '';
		}

		return Gallery::grid( $img_ids );
	}

}