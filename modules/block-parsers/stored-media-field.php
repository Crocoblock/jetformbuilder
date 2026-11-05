<?php

namespace JFB_Modules\Block_Parsers;

use Jet_Form_Builder\Classes\Resources\File_Tools;
use JFB_Modules\Media_Cleanup\Module as Media_Cleanup;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Reads the existing value of a post media field before actions write request data.
 * Unknown or ambiguous destinations cannot authorize reuse; upload a new file instead.
 */
class Stored_Media_Field {

	public static function attachment_ids( Field_Data_Parser $parser ): array {
		$form_id = jet_fb_action_handler()->get_form_id();
		if ( ! $form_id ) {
			return array();
		}

		$context = $parser->get_context();
		// A nested field needs its exact row, not a same-named top-level meta key.
		if ( $context->get_parent_field() ) {
			return array();
		}

		$destinations = array();
		foreach ( jet_form_builder()->post_type->get_actions( $form_id ) as $action ) {
			if ( 'insert_post' !== ( $action['type'] ?? '' ) || ! ( $action['is_execute'] ?? true ) ) {
				continue;
			}

			$settings = $action['settings']['insert_post'] ?? $action['settings'] ?? array();
			$map      = $settings['fields_map'] ?? array();
			$key      = $map[ $parser->get_name() ] ?? '';
			if ( ! is_string( $key ) || '' === $key ) {
				continue;
			}

			$id_fields = array_keys( $map, 'ID', true );
			if ( 1 !== count( $id_fields ) ) {
				return array();
			}
			$id = $context->get_value( $id_fields[0] );
			if ( ! is_scalar( $id ) || ! ctype_digit( (string) $id ) || ! absint( $id ) ) {
				return array();
			}
			$destinations[] = array( absint( $id ), $key );
		}

		if ( 1 !== count( $destinations ) ) {
			return array();
		}

		list( $post_id, $meta_key ) = $destinations[0];
		$post                       = get_post( $post_id );
		$user_id                    = get_current_user_id();
		if ( ! $post || ! $user_id || ( absint( $post->post_author ) !== $user_id && ! current_user_can( 'edit_post', $post_id ) ) ) {
			return array();
		}

		// Read from storage, never from the submitted media value or a query-string preset.
		$value = get_post_meta( $post_id, $meta_key, true );
		$ids   = Media_Cleanup::normalize_attachment_ids( $value );
		// URL-format fields also store real attachments; resolve their saved URLs only.
		foreach ( is_array( $value ) ? $value : array( $value ) as $item ) {
			if ( is_string( $item ) && ! is_numeric( $item ) ) {
				$uploaded = File_Tools::create_uploaded_file( $item );
				if ( $uploaded ) {
					$ids[] = absint( $uploaded->get_attachment_id() );
				}
			}
		}
		// normalize_attachment_ids expects a list for the single `both` shape too.
		if ( is_array( $value ) && isset( $value['id'] ) && is_numeric( $value['id'] ) ) {
			$ids[] = absint( $value['id'] );
		}

		return array_values( array_unique( $ids ) );
	}
}
