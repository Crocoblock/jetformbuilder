<?php


namespace JFB_Modules\Actions_V2\Insert_Post\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Thumbnail_Property extends Base_Object_Property {

	public function get_id(): string {
		return '_thumbnail_id';
	}

	public function get_label(): string {
		return __( 'Post Thumbnail', 'jet-form-builder' );
	}

	public function get_help(): string {
		return __( 'Accepts an attachment ID or array of IDs, a URL, an array of attachment IDs with their URLs.', 'jet-form-builder' );
	}

	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		parent::do_before( $key, $value, $modifier );

		$result = array();

		// Handle different input formats
		if ( is_string( $this->value ) ) {
			$values = array_filter( array_map( 'trim', explode( ',', $this->value ) ) );
			foreach ( $values as $value ) {
				if ( is_numeric( $value ) && $this->is_image_attachment( $value ) ) {
					$result[] = $value;
				}
				if ( is_string( $value ) && $this->is_image_by_url( $value ) ) {
					$result[] = attachment_url_to_postid( $value );
				}
			}
		} elseif ( is_array( $this->value ) ) {
			foreach ( $this->value as $item ) {
				if ( is_numeric( $item ) ) {
					// Array of IDs: [123, 456, 789]
					if ( $this->is_image_attachment( $item ) ) {
						$result[] = $item;
					}
				} elseif ( is_array( $item ) && isset( $item['id'] ) ) {
					$id = $item['id'];

					if ( is_numeric( $id ) ) {
						// Check if it's an image by ID
						if ( $this->is_image_attachment( $id ) ) {
							$result[] = $id;
						}
						// Also check by URL if available
						elseif ( isset( $item['url'] ) && $this->is_image_by_url( $item['url'] ) ) {
							$result[] = $id;
						}
					}
				}
			}
		}

		$value_ids = implode( ',', $result );

		$this->value = $value_ids;

		if ( empty( $this->value ) ) {
			$this->value = - 1;
		}
	}

	/**
	 * Check if attachment is an image by ID
	 *
	 * @param int $attachment_id
	 * @return bool
	 */
	private function is_image_attachment( $attachment_id ) {
		$attachment = get_post( $attachment_id );
		if ( ! $attachment || $attachment->post_type !== 'attachment' ) {
			return false;
		}

		$mime_type = get_post_mime_type( $attachment_id );
		return strpos( $mime_type, 'image/' ) === 0;
	}

	/**
	 * Check if file is an image by URL
	 *
	 * @param string $url
	 * @return bool
	 */
	private function is_image_by_url( $url ) {
		$filetype = wp_check_filetype( $url );
		return $filetype['type'] && strpos( $filetype['type'], 'image/' ) === 0;
	}
}
