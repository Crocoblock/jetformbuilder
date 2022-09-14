<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Object_Dynamic_Property;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;


class Post_Meta_Property extends Base_Object_Property implements
	Object_Dynamic_Property {

	public function get_id(): string {
		return 'meta_input';
	}

	public function get_label(): string {
		return __( 'Post Meta', 'jet-form-builder' );
	}

	public function is_supported( string $key, $value ): bool {
		return true;
	}

	/**
	 * @param Abstract_Modifier|Post_Modifier $modifier
	 */
	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		if ( ! Tools::is_repeater_val( $value ) ) {
			$this->set_meta(
				array(
					$key => $value,
				)
			);

			return;
		}

		$this->set_meta(
			array(
				$key => Tools::prepare_repeater_value( $value, $modifier->fields_map )
			)
		);
	}

	public function do_after( Abstract_Modifier $modifier ) {
		/** @var Base_Post_Action $action */
		$action = $modifier->get_action();
		$id     = $action->get_inserted();

		if ( ! $id ) {
			return;
		}

		foreach ( $this->value as $key => $value ) {
			update_post_meta( $id, $key, $value );
		}
	}

	public function set_meta( array $meta ) {
		if ( ! is_array( $this->value ) ) {
			$this->value = array();
		}

		$this->value = array_merge( $this->value, $meta );
	}

	public static function prepare_meta( array $meta ): array {
		foreach ( $meta as $meta_key => $meta_row ) {
			if ( ! empty( $meta_row['key'] ) ) {
				$meta[ $meta_row['key'] ] = $meta_row['value'];
				unset( $meta[ $meta_key ] );
			}
		}

		return $meta;
	}

	public function get_value( Abstract_Modifier $modifier ) {
		throw new Silence_Exception();
	}
}