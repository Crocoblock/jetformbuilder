<?php


namespace JFB_Modules\Block_Parsers\Fields;

use Jet_Form_Builder\Classes\Resources\Has_Error_File;
use Jet_Form_Builder\Classes\Resources\Media_Block_Value;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Request\Exceptions\Sanitize_Value_Exception;
use Jet_Form_Builder\Classes\Resources\Upload_Exception;
use JFB_Modules\Block_Parsers\Field_Data_Parser;
use JFB_Modules\Block_Parsers\File_Uploader;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Media_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'media-field';
	}

	protected function allows_array_value(): bool {
		return true;
	}

	/**
	 * @since 3.0.4 Added `jet-form-builder/media-field/before-upload` hook
	 *
	 * @return array|false|int|string|null
	 * @throws Sanitize_Value_Exception
	 */
	public function get_response() {
		if (
			empty( $this->get_file() ) ||
			(
				is_object( $this->get_file() ) &&
				is_a( $this->get_file(), Has_Error_File::class ) &&
				$this->get_file()->has_error()
			)
		) {
			/**
			 * We should leave here $this->value for case, while this field exporting
			 * with values from Form Record
			 *
			 * @see https://github.com/Crocoblock/issues-tracker/issues/4422
			 */
			return $this->sanitize_submitted_attachment_ids( $this->value );
		}
		do_action( 'jet-form-builder/media-field/before-upload', $this );

		$uploader = ( new File_Uploader() )->set_context( $this );

		try {
			/** @var Media_Block_Value $uploads */
			$uploads = $uploader->upload();
		} catch ( Upload_Exception $exception ) {
			$this->collect_error( $exception->getMessage() );
			return false;
		}

		$this->set_file( $uploads );

		switch ( $this->get_value_format() ) {
			case 'id':
				return $uploads->get_attachment_id();
			case 'both':
				return $uploads->get_attachment_both();
			case 'ids':
				return $uploads->get_attachment_ids();
			default:
				return $uploads->get_attachment_url();
		}
	}

	protected function get_value_format(): string {
		return empty( $this->settings['insert_attachment'] )
			? 'url'
			: ( $this->settings['value_format'] ?? 'url' );
	}

	/**
	 * When no file is uploaded with this submission, `$this->value` is whatever
	 * the request supplied verbatim. If this field is configured to store
	 * attachment IDs, only accept IDs of attachments the plugin itself created
	 * via a form upload (marked in Uploaded_File::add_attachment()); anything
	 * else is dropped as if it was never submitted, since it may reference an
	 * attachment unrelated to this submitter.
	 *
	 * This has to preserve the exact value shapes the upload path itself
	 * produces for each `value_format`, otherwise re-submitting an unchanged
	 * field (no new file) would corrupt or empty it:
	 * - `both`, single file: associative `array( 'id' => .., 'url' => .. )`
	 *   (@see Uploaded_File::get_attachment_both()).
	 * - `both`, multiple files: list of the associative shape above
	 *   (@see Uploaded_Collection::get_attachment_both()).
	 * - `id`/`ids`, single file: a scalar numeric-string ID.
	 * - `ids`, multiple files: a plain list of numeric-string IDs
	 *   (@see Uploaded_Collection::get_attachment_ids()).
	 * - `id`, multiple files: a comma-joined string of IDs, e.g. `"5,8"`
	 *   (@see Uploaded_Collection::get_attachment_id()).
	 *
	 * @param array|string|int|null $value
	 *
	 * @return array|string|int|null
	 */
	protected function sanitize_submitted_attachment_ids( $value ) {
		if ( ! in_array( $this->get_value_format(), array( 'id', 'ids', 'both' ), true ) ) {
			return $value;
		}

		// Single-item `both` shape: associative array( 'id' => .., 'url' => .. ).
		// Must not be run through array_filter()/array_values(), which would
		// reindex it into a plain list and discard the 'id'/'url' keys.
		if ( is_array( $value ) && array_key_exists( 'id', $value ) && ! is_array( $value['id'] ?? null ) ) {
			return $this->is_allowed_submitted_attachment( $value ) ? $value : array();
		}

		if ( is_array( $value ) ) {
			$filtered = array_values(
				array_filter(
					$value,
					array( $this, 'is_allowed_submitted_attachment' )
				)
			);

			return $filtered;
		}

		// Multi-file `id` format round-trips as a comma-joined string (e.g. "5,8").
		// is_numeric() on the whole string is false, so it must be split first.
		if ( is_string( $value ) && false !== strpos( $value, ',' ) ) {
			$allowed = array_filter(
				array_map( 'trim', explode( ',', $value ) ),
				array( $this, 'is_allowed_submitted_attachment' )
			);

			return implode( ',', $allowed );
		}

		return $this->is_allowed_submitted_attachment( $value ) ? $value : '';
	}

	/**
	 * Requires both the form marker AND (when recorded) a matching uploader before an
	 * attachment ID submitted without a file is accepted into the post meta. Checking only
	 * `_jfb_uploaded_by_form` (as an earlier revision of this method did) would let any
	 * user attach another user's plugin-uploaded file to their own post just by knowing its
	 * ID - the marker alone says "some form uploaded this", not "you uploaded this". The
	 * per-uploader check itself is `Media_Cleanup::is_owned_by_current_actor()` - shared
	 * with `delete_attachments()`'s own ownership check - so acceptance and deletion always
	 * apply the exact same trust model to the same marker, rather than two independently
	 * maintained copies that could silently drift apart.
	 *
	 * @param mixed $item
	 *
	 * @return bool
	 */
	private function is_allowed_submitted_attachment( $item ): bool {
		$attachment_id = is_array( $item ) ? ( $item['id'] ?? null ) : $item;

		if ( empty( $attachment_id ) || ! is_numeric( $attachment_id ) ) {
			return false;
		}

		$attachment_id = absint( $attachment_id );

		if ( ! get_post_meta( $attachment_id, '_jfb_uploaded_by_form', true ) ) {
			return false;
		}

		return \JFB_Modules\Media_Cleanup\Module::is_owned_by_current_actor( $attachment_id );
	}

}
