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

		/**
		 * @see https://github.com/Crocoblock/issues-tracker/issues/16657
		 */

		// 1. Fields with "single_value_as_array" flag enabled
		$single_as_array_fields = array_keys(
			array_filter(
				$modifier->single_value_as_array ?? array(),
				static function ( $val ) {
					return (bool) $val;
				}
			)
		);

		// 2. Resolve meta keys for these fields
		$checkboxes_to_array = array();
		if ( ! empty( $single_as_array_fields ) && ! empty( $modifier->fields_map ) ) {
			$checkboxes_to_array = array_values(
				array_intersect_key(
					$modifier->fields_map,
					array_flip( $single_as_array_fields )
				)
			);
		}

		$meta_box_fields = $this->get_meta_box_fields( $id, $modifier );

		// 3. Convert $this->value entries to arrays for required meta keys
		foreach ( $this->value as $meta_key => $value ) {
			if ( in_array( $meta_key, $checkboxes_to_array, true )
				&& ! is_array( $value ) ) {
				$this->value[ $meta_key ] = array( $value );
			}
		}

		$prepared_value = $this->normalize_checkboxes( $meta_box_fields, $this->value );

		// 4. Ensure $_POST also contains arrays (JetEngine / Cherry_X_Post_Meta)
		foreach ( $single_as_array_fields as $field_name ) {

			// by form field name
			if ( isset( $prepared_value[ $field_name ] )
				&& ! is_array( $prepared_value[ $field_name ] ) ) {
				$prepared_value[ $field_name ] = array( $prepared_value[ $field_name ] );
			}

			// by meta key (fallback)
			if ( isset( $modifier->fields_map[ $field_name ] ) ) {
				$meta_key = $modifier->fields_map[ $field_name ];

				if ( isset( $prepared_value[ $meta_key ] )
					&& ! is_array( $prepared_value[ $meta_key ] ) ) {
					$prepared_value[ $meta_key ] = array( $prepared_value[ $meta_key ] );
				}
			}
		}

		// Push processed values into $_POST (JetEngine reads from here)
		$_POST = array_merge( $_POST, $prepared_value ); // phpcs:ignore WordPress.Security.NonceVerification.Missing

		// 5. Save meta normally (now $this->value already normalized)
		foreach ( $this->value as $key => $value ) {
			if ( in_array( $key, $checkboxes_to_array, true ) ) {
				update_post_meta( $id, $key, array_values( (array) $value ) );
				continue;
			}
			update_post_meta( $id, $key, $value );
		}

		// JetEngine meta boxes processing
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
