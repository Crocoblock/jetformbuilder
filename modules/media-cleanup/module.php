<?php

namespace JFB_Modules\Media_Cleanup;

use JFB_Components\Module\Base_Module_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements Base_Module_It {

	public function rep_item_id() {
		return 'media-cleanup';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {}

	public static function collect_post_meta_attachment_ids( int $post_id, array $meta_keys ): array {
		$attachment_ids = array();

		foreach ( $meta_keys as $meta_key ) {
			$attachment_ids = array_merge(
				$attachment_ids,
				self::normalize_attachment_ids(
					get_post_meta( $post_id, $meta_key, true )
				)
			);
		}

		return self::normalize_attachment_ids( $attachment_ids );
	}

	public static function maybe_delete_attachments(
		array $old_attachment_ids,
		array $new_attachment_ids = array()
	): void {
		$attachment_ids_to_delete = self::diff_attachment_ids(
			$old_attachment_ids,
			$new_attachment_ids
		);
		if ( empty( $attachment_ids_to_delete ) ) {
			return;
		}
		self::delete_attachments( $attachment_ids_to_delete );
	}

	public static function diff_attachment_ids( array $old_attachment_ids, array $new_attachment_ids ): array {
		$old_attachment_ids = self::normalize_attachment_ids( $old_attachment_ids );
		$new_attachment_ids = self::normalize_attachment_ids( $new_attachment_ids );
		return array_values(
			array_diff( $old_attachment_ids, $new_attachment_ids )
		);
	}

	public static function normalize_attachment_ids( $value ): array {
		if ( empty( $value ) ) {
			return array();
		}

		if ( is_numeric( $value ) ) {
			return array( absint( $value ) );
		}

		if ( is_string( $value ) ) {
			$value = array_map( 'trim', explode( ',', $value ) );
		}

		if ( ! is_array( $value ) ) {
			return array();
		}

		$ids = array();

		foreach ( $value as $item ) {
			if ( is_numeric( $item ) ) {
				$ids[] = absint( $item );
				continue;
			}

			if ( is_array( $item ) && isset( $item['id'] ) && is_numeric( $item['id'] ) ) {
				$ids[] = absint( $item['id'] );
			}
		}

		return array_values(
			array_unique(
				array_filter(
					array_map( 'absint', $ids )
				)
			)
		);
	}

	public static function delete_attachments( array $attachment_ids ): void {

		$attachment_ids = self::normalize_attachment_ids( $attachment_ids );

		foreach ( $attachment_ids as $attachment_id ) {
			if ( 'attachment' !== get_post_type( $attachment_id ) ) {
				continue;
			}

			wp_delete_attachment( $attachment_id, true );
		}
	}

	public function remove_hooks() {
	}

	public static function get_post_meta_keys_for_cleanup( $modifier ): array {
		$form_id = jet_fb_action_handler()->get_form_id();
		if ( ! $form_id || empty( $modifier->fields_map ) ) {
			return array();
		}
		$meta_keys = array();
		foreach ( $modifier->fields_map as $field_name => $meta_key ) {
			if ( empty( $field_name ) || empty( $meta_key ) ) {
				continue;
			}
			$field = jet_form_builder()->form->get_field_by_name(
				$form_id,
				$field_name
			);
			if ( ! self::is_cleanup_enabled_media_field( $field ) ) {
				continue;
			}
			$meta_keys[] = $meta_key;
		}
		return array_values(
			array_unique(
				array_filter( $meta_keys )
			)
		);
	}

	private static function is_cleanup_enabled_media_field( $field ): bool {
		if ( ! is_array( $field ) || empty( $field ) ) {
			return false;
		}
		if ( 'jet-forms/media-field' !== ( $field['blockName'] ?? '' ) ) {
			return false;
		}
		$attrs = $field['attrs'] ?? array();
		if ( empty( $attrs['delete_uploaded_attachment'] ) ) {
			return false;
		}
		if ( empty( $attrs['insert_attachment'] ) ) {
			return false;
		}
		return in_array(
			$attrs['value_format'] ?? 'url',
			array( 'id', 'ids', 'both' ),
			true
		);
	}
}
