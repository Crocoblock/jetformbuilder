<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;

use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Date_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'post_date';
	}

	public function get_label(): string {
		return __( 'Post Date', 'jet-form-builder' );
	}

}