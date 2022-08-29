<?php

namespace Jet_Form_Builder;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method static File_Upload instance()
 *
 * Class description
 *
 * @package   package_name
 * @author    Cherry Team
 * @license   GPL-2.0+
 */
class File_Upload {

	use Instance_Trait;

	public function get_loader() {
		return '<div class="jet-form-builder-file-upload__loader">' . apply_filters(
				'jet-form-builder/file-upload/loader',
				'<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" stroke="#fff"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(137.826 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg>'
			) . '</div>';
	}

	/**
	 * Resturns max upload size based on field arguments
	 *
	 * @param array $args [description]
	 *
	 * @return [type]       [description]
	 */
	public function get_max_size_for_field( $args = array() ) {

		$max_size       = wp_max_upload_size();
		$field_max_size = $max_size;

		if ( ! empty( $args['max_size'] ) ) {

			$field_max_size = intval( floatval( $args['max_size'] ) * MB_IN_BYTES );

			if ( $field_max_size > $max_size ) {
				$field_max_size = $max_size;
			}
		}

		return $field_max_size;

	}

	/**
	 * Register form-specific assets
	 *
	 * @return void
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( 'jet-form-builder-sortable' );
		wp_enqueue_script( 'jet-form-builder-file-upload' );

		$messages = wp_json_encode( jet_form_builder()->msg_router->get_manager()->get_messages() );
		$form_id  = (int) Live_Form::instance()->form_id;

		wp_add_inline_script(
			'jet-form-builder-file-upload',
			"
			window.JetFormBuilderFileUploadConfig = window.JetFormBuilderFileUploadConfig || {};
			window.JetFormBuilderFileUploadConfig.errors = window.JetFormBuilderFileUploadConfig.errors || {};
			
			window.JetFormBuilderFileUploadConfig.errors[ $form_id ] = $messages;  
		"
		);
	}

}
