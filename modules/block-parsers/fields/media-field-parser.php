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
			return false;
		}
		do_action( 'jet-form-builder/media-field/before-upload', $this );

		$uploader = ( new File_Uploader() )->set_context( $this );

		try {
			/** @var Media_Block_Value $uploads */
			$uploads = $uploader->upload();
		} catch ( Upload_Exception $exception ) {
			throw new Sanitize_Value_Exception( $exception->getMessage(), $this->name );
		}

		$this->set_file( $uploads );

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
		return empty( $this->settings['insert_attachment'] )
			? 'url'
			: ( $this->settings['value_format'] ?? 'url' );
	}

}
