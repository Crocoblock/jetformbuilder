<?php


namespace Jet_Form_Builder\Actions\Methods\Update_User;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Object_Dynamic_Property;
use Jet_Form_Builder\Classes\Tools;

class User_Meta_Property extends Base_Object_Property implements Object_Dynamic_Property {

	protected $meta = array();

	public function get_prop_name(): string {
		return 'user_meta';
	}

	public function get_label(): string {
		return __( 'User Meta', 'jet-form-builder' );
	}

	public function is_supported( Abstract_Modifier $modifier ): bool {
		return true;
	}

	public function do_before( Abstract_Modifier $modifier ) {
		if ( ! Tools::is_repeater_val( $modifier->current_value ) ) {
			$this->set_meta(
				array(
					$modifier->current_prop => $modifier->current_value,
				)
			);

			return;
		}

		$this->set_meta(
			array(
				$modifier->current_prop => Tools::prepare_repeater_value(
					$modifier->current_value,
					$modifier->fields_map
				),
			)
		);
	}

	/**
	 * @param Abstract_Modifier|User_Modifier $modifier
	 */
	public function do_after( Abstract_Modifier $modifier ) {
		foreach ( $this->meta as $key => $value ) {
			update_user_meta( $modifier->updated_user->ID, $key, $value );
		}
	}

	protected function set_meta( $data ): User_Meta_Property {
		$this->meta = array_merge( $this->meta, $data );

		return $this;
	}
}