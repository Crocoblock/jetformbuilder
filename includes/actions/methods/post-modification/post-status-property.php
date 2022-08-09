<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Exceptions\Modifier_Exclude_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Post_Status_Property extends Base_Post_Property {

	public function get_prop_name(): string {
		return 'post_status';
	}

	public function get_label(): string {
		return __( 'Post Status', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier $modifier
	 *
	 * To skip setting this property
	 *
	 * @throws Silence_Exception
	 *
	 * To exclude this property from $this->source_arr
	 * @throws Modifier_Exclude_Property
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		switch ( $modifier->current_value ) {
			case 'keep-current':
				throw new Modifier_Exclude_Property( 'Keep current status, exclude this prop' );
			case 'trash':
				$modifier->set_action( 'trash' );

				break;
			case 'from-field':
				throw new Silence_Exception( 'Status must be replaced by another field' );
			default:
				if ( empty( $this->current_value ) ) {
					throw new Silence_Exception( 'Empty status' );
				}
		}
	}
}