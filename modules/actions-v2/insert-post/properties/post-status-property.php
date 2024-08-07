<?php


namespace JFB_Modules\Actions_V2\Insert_Post\Properties;

use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Status_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'post_status';
	}

	public function get_label(): string {
		return __( 'Post Status', 'jet-form-builder' );
	}

	public function can_attach( string $key, $value ): bool {
		if ( empty( $value ) || 'from-field' === $value ) {
			return false;
		}
		if ( 'keep-current' === $value ) {
			$this->exclude();

			return false;
		}

		return parent::can_attach( $key, $value );
	}
}
