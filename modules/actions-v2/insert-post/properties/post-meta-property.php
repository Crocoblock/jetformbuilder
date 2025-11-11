<?php


namespace JFB_Modules\Actions_V2\Insert_Post\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Object_Dynamic_Property;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;
use JFB_Modules\Actions_V2\Insert_Post\Traits\Process_Meta_Boxes_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Meta_Property extends Base_Object_Property implements
	Object_Dynamic_Property {

	use Process_Meta_Boxes_Trait;

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
				$key => Tools::prepare_repeater_value( $value, $modifier->fields_map ),
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

		$checked_keys = array_keys( array_filter(
			$modifier->single_checkbox_as_array,
			fn( $val ) => (bool) $val
		) );

		$checkboxes_to_array = array_values(
			array_intersect_key(
				$modifier->fields_map,
				array_flip( $checked_keys )
			)
		);
		
		$meta_box_fields = $this->get_meta_box_fields( $id, $modifier );
		$prepared_value  = $this->normalize_checkboxes( $meta_box_fields, $this->value );

		// phpcs:disable WordPress.Security.NonceVerification.Missing
		$_POST = array_merge( $_POST, $prepared_value );

		foreach ( $this->value as $key => $value ) {
			if ( in_array( $key, $checkboxes_to_array, true ) ) {
				$to_save = is_array( $value ) ? array_values( $value ) : [ $value ];
				update_post_meta( $id, $key, $to_save );
				continue;
			}
			update_post_meta( $id, $key, $value );
		}

		$this->process_meta_boxes( $id, $modifier );
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
