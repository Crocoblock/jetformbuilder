<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Object_Dynamic_Property;
use Jet_Form_Builder\Classes\Tools;

class Post_Meta_Property extends Base_Post_Property implements
	Object_Dynamic_Property {

	public function get_prop_name(): string {
		return 'post_meta';
	}

	public function get_label(): string {
		return __( 'Post Meta', 'jet-form-builder' );
	}

	public function is_supported( Abstract_Modifier $modifier ): bool {
		return true;
	}

	/**
	 * @param Abstract_Modifier|Post_Modifier $modifier
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		if ( ! Tools::is_repeater_val( $modifier->current_value ) ) {
			$modifier->set_meta(
				array(
					$modifier->current_prop => $modifier->current_value,
				)
			);

			return;
		}

		$modifier->set_meta(
			array(
				$modifier->current_prop => Tools::prepare_repeater_value(
					$modifier->current_value,
					$modifier->fields_map
				),
			)
		);
	}
}