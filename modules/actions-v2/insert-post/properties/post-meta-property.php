<?php


namespace JFB_Modules\Actions_V2\Insert_Post\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Object_Dynamic_Property;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Classes\Value_Normalizers\Single_Value_As_Array;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;
use JFB_Modules\Actions_V2\Insert_Post\Traits\Process_Meta_Boxes_Trait;
use JFB_Modules\Media_Cleanup\Module as Media_Cleanup;

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

		// A locked Media field keeps its stored value, so a Default Field for the same key must not overwrite it.
		foreach ( $modifier->locked_targets as $locked_key ) {
			unset( $this->value[ $locked_key ] );
		}

		/**
		 * @see https://github.com/Crocoblock/issues-tracker/issues/16657
		 */

		$single_value_as_array = Single_Value_As_Array::prepare_flags(
			$modifier->single_value_as_array ?? array()
		);

		$single_as_array_fields = array_keys(
			array_filter(
				$single_value_as_array,
				static function ( $val ) {
					return (bool) $val;
				}
			)
		);

		$meta_keys_to_array = array();

		if ( ! empty( $single_as_array_fields ) && ! empty( $modifier->fields_map ) ) {
			$meta_keys_to_array = array_values(
				array_intersect_key(
					$modifier->fields_map,
					array_flip( $single_as_array_fields )
				)
			);
		}

		$meta_box_fields = $this->get_meta_box_fields( $id, $modifier );

		foreach ( $this->value as $meta_key => $value ) {
			if ( ! in_array( $meta_key, $meta_keys_to_array, true ) ) {
				continue;
			}

			$this->value[ $meta_key ] = Single_Value_As_Array::maybe_wrap(
				$value,
				$meta_key,
				array_fill_keys( $meta_keys_to_array, true )
			);
		}

		$prepared_value = $this->normalize_checkboxes( $meta_box_fields, $this->value );

		foreach ( $single_as_array_fields as $field_name ) {

			// By form field name.
			if ( array_key_exists( $field_name, $prepared_value ) ) {
				$prepared_value[ $field_name ] = Single_Value_As_Array::maybe_wrap(
					$prepared_value[ $field_name ],
					$field_name,
					$single_value_as_array
				);
			}

			// By meta key fallback.
			if ( isset( $modifier->fields_map[ $field_name ] ) ) {
				$meta_key = $modifier->fields_map[ $field_name ];

				if ( array_key_exists( $meta_key, $prepared_value ) ) {
					$prepared_value[ $meta_key ] = Single_Value_As_Array::maybe_wrap(
						$prepared_value[ $meta_key ],
						$field_name,
						$single_value_as_array
					);
				}
			}
		}

		// Push processed values into $_POST. JetEngine reads from here.
		$_POST = array_merge( $_POST, $prepared_value ); // phpcs:ignore WordPress.Security.NonceVerification.Missing

		$meta_keys_for_cleanup = Media_Cleanup::get_post_meta_keys_for_cleanup( $modifier );
		$old_attachment_ids = Media_Cleanup::collect_post_meta_attachment_ids(
			$id,
			$meta_keys_for_cleanup
		);

		foreach ( $this->value as $key => $value ) {
			if ( in_array( $key, $meta_keys_to_array, true ) ) {
				update_post_meta( $id, $key, array_values( (array) $value ) );
				continue;
			}

			update_post_meta( $id, $key, $value );
		}

		/**
		 * Snapshot what the form itself just wrote, before process_meta_boxes() below can
		 * touch the same meta key. A JetEngine meta box can be configured to write the same
		 * post meta key a media-cleanup-enabled field uses (fields_map allows any meta key
		 * to be shared); Cherry_X_Post_Meta::save_meta_option() may overwrite, transform, or
		 * (per filter_meta_box_fields_by_values()) leave that key untouched depending on
		 * what it finds in $this->value - there is no guarantee it reproduces exactly what
		 * the form submitted.
		 *
		 * @see https://github.com/Crocoblock/issues-tracker/issues/20547
		 */
		$form_written_attachment_ids = Media_Cleanup::collect_post_meta_attachment_ids(
			$id,
			$meta_keys_for_cleanup
		);

		// JetEngine meta boxes processing.
		$this->process_meta_boxes( $id, $modifier );

		/**
		 * The final "new" snapshot is taken AFTER process_meta_boxes(), since that is what
		 * the post's meta actually ends up persisted as - but it is unioned with what the
		 * form itself wrote rather than used alone. Using only the post-meta-box value would
		 * let a meta box silently drop an attachment ID the submitter's own field still
		 * legitimately included (e.g. by overwriting the shared key with a stale or
		 * differently-shaped value), causing maybe_delete_attachments() below to delete an
		 * attachment the saved post still actually needs. Since the diff below only deletes
		 * IDs that are absent from BOTH snapshots would ever fail to catch, this union can
		 * only ever cause an attachment to be kept when in doubt, never wrongly deleted -
		 * the same fail-closed-on-deletion posture the rest of this fix uses throughout
		 * (see Media_Cleanup::delete_attachments()' own docblock).
		 */
		$new_attachment_ids = array_unique(
			array_merge(
				$form_written_attachment_ids,
				Media_Cleanup::collect_post_meta_attachment_ids( $id, $meta_keys_for_cleanup )
			)
		);

		Media_Cleanup::maybe_delete_attachments( $old_attachment_ids, $new_attachment_ids, $id );
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
