<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Object_Dynamic_Property;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Meta_Property extends Base_Object_Property implements Object_Dynamic_Property {

	protected $meta = array();

	public function get_id(): string {
		return 'user_meta';
	}

	public function get_label(): string {
		return __( 'User Meta', 'jet-form-builder' );
	}

	public function is_supported( string $key, $value ): bool {
		return true;
	}

	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		if ( ! Tools::is_repeater_val( $value ) ) {
			$this->meta[ $key ] = $value;

			return;
		}

		$this->meta[ $key ] = Tools::prepare_repeater_value( $value, $modifier->fields_map );
	}

	public function do_after( Abstract_Modifier $modifier ) {
		foreach ( $this->meta as $key => $value ) {
			update_user_meta( $modifier->source_arr['ID'], $key, $value );
		}
	}

}
