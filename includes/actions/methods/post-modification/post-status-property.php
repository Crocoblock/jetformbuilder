<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Base_Object_Property;


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