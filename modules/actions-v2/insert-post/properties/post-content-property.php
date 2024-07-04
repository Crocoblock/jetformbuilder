<?php


namespace JFB_Modules\Actions_V2\Insert_Post\Properties;

use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Content_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'post_content';
	}

	public function get_label(): string {
		return __( 'Post Content', 'jet-form-builder' );
	}

}
