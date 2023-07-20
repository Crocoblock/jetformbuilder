<?php


namespace Jet_Form_Builder\Request\Fields;

use Jet_Form_Builder\Classes\Resources\Has_Error_File;
use Jet_Form_Builder\Classes\Resources\Media_Block_Value;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Request\Exceptions\Sanitize_Value_Exception;
use Jet_Form_Builder\Classes\Resources\Upload_Exception;
use Jet_Form_Builder\Request\Field_Data_Parser;
use Jet_Form_Builder\Request\File_Uploader;

class Media_Field_Parser extends Field_Data_Parser {

	public function type() {
		return 'media-field';
	}

	/**
	 * @since 3.0.4 Added `jet-form-builder/media-field/before-upload` hook
	 *
	 * @return array|false|int|string|null
	 * @throws Sanitize_Value_Exception
	 */
	public function get_response() {
		if (
			empty( $this->context->get_file() ) ||
			(
				is_object( $this->context->get_file() ) &&
				is_a( $this->context->get_file(), Has_Error_File::class ) &&
				$this->context->get_file()->has_error()
			)
		) {
			return false;
		}
		do_action( 'jet-form-builder/media-field/before-upload', $this );

		$uploader = ( new File_Uploader() )->set_context( $this->context );

		try {
			/** @var Media_Block_Value $uploads */
			$uploads = $uploader->upload();
		} catch ( Upload_Exception $exception ) {
			throw new Sanitize_Value_Exception( $exception->getMessage() );
		}

		jet_fb_request_handler()->update_file( $this->name, $uploads );

		switch ( $this->get_value_format() ) {
			case 'id':
				return $uploads->get_attachment_id();
			case 'both':
				return $uploads->get_attachment_both();
			default:
				return $uploads->get_attachment_url();
		}
	}

	protected function get_value_format(): string {
		if ( empty( $this->get_context()->get_settings()['insert_attachment'] ) ) {
			return 'url';
		}

		return $this->get_context()->get_settings()['value_format'] ?? 'url';
	}

}
