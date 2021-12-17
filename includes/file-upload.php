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

	private $nonce_key = 'jet-form-builder-file-upload-nonce-key';
	private $action = 'jet-form-builder-upload-file';
	private $errors = array();
	private $rendered_scripts = false;

	public function __construct() {
		add_action( 'wp_ajax_' . $this->action, array( $this, 'ajax_file_upload' ) );
		add_action( 'wp_ajax_nopriv_' . $this->action, array( $this, 'ajax_file_upload' ) );
	}


	/**
	 * Returns data arguments for files wrapper
	 */
	public function get_files_data_args( $args ) {

		$data_args = array(
			'max_files'         => 1,
			'insert_attachment' => false,
			'value_format'      => 'url',
		);

		foreach ( $data_args as $key => $value ) {
			$data_args[ $key ] = ! empty( $args[ $key ] ) ? $args[ $key ] : $value;
		}

		return sprintf( ' data-args="%s"', htmlspecialchars( wp_json_encode( $data_args ) ) );
	}

	/**
	 * Ajax callback for uploading files
	 *
	 * @return [type] [description]
	 */
	public function ajax_file_upload() {

		$nonce   = sanitize_text_field( wp_unslash( $_POST['nonce'] ?? '' ) );
		$form_id = absint( wp_unslash( $_POST['form_id'] ?? 0 ) );
		$field   = sanitize_text_field( wp_unslash( $_POST['field'] ?? '' ) );

		if ( ! $nonce || ! wp_verify_nonce( $nonce, $this->nonce_key ) ) {
			wp_send_json_error( __( 'You not allowed to do this', 'jet-form-builder' ) );
		}

		if ( ! $form_id || ! $field ) {
			wp_send_json_error( __( 'Required parameters not found in request', 'jet-form-builder' ) );
		}

		$form_data = Plugin::instance()->form->get_only_form_fields( $form_id );

		if ( ! $form_data ) {
			wp_send_json_error( __( 'Form data not found', 'jet-form-builder' ) );
		}

		$field_data = null;

		foreach ( $form_data as $item ) {
			if ( ! empty( $item['attrs']['name'] ) && $item['attrs']['name'] === $field ) {
				$field_data = $item['attrs'];
				break;
			}
		}

		if ( ! $field_data ) {
			wp_send_json_error( __( 'Requested field not found', 'jet-form-builder' ) );
		}

		$cap = ! empty( $field_data['allowed_user_cap'] ) ? $field_data['allowed_user_cap'] : 'upload_files';

		if ( 'any_user' !== $cap && ! is_user_logged_in() ) {
			wp_send_json_error( __( 'You are not allowed to upload files', 'jet-form-builder' ) );
		}

		if ( ! in_array( $cap, array( 'all', 'any_user' ) ) && ! current_user_can( $cap ) ) {
			wp_send_json_error( __( 'You are not allowed to upload files', 'jet-form-builder' ) );
		}

		// Prevent non logged-in users insert attachment
		if ( ! is_user_logged_in() ) {
			$field_data['insert_attachment'] = false;
		}

		$settings = array(
			'max_size' => $this->get_max_size_for_field( $field_data ),
		);

		$settings['messages'] = jet_form_builder()->msg_router->get_manager( array(
			'form_id' => $form_id
		) );

		$settings = array_merge( $field_data, $settings );

		$result = $this->process_upload( $_FILES, $settings );

		if ( ! $result ) {
			wp_send_json_error( $settings['messages']['internal'] );
		}

		wp_send_json_success(
			array(
				'files'  => $result,
				'html'   => $this->get_result_html( $settings, $result ),
				'value'  => $this->get_result_value( $settings, $result ),
				'errors' => $this->get_errors_string(),
			)
		);
	}

	/**
	 * Process files upload
	 *
	 * @param boolean $files [description]
	 *
	 * @return [type]         [description]
	 */
	public function process_upload( $files = false, $settings = array() ) {

		$settings              = wp_parse_args(
			$settings,
			array(
				'max_size'          => wp_max_upload_size(),
				'max_files'         => 1,
				'insert_attachment' => false,
			)
		);
		$settings['max_files'] = $settings['max_files'] ? $settings['max_files'] : 1;

		$insert_attachment = filter_var( $settings['insert_attachment'], FILTER_VALIDATE_BOOLEAN );

		$files = Tools::sanitize_files( $files );

		if ( empty( $files ) || ! is_array( $files ) ) {
			return false;
		}

		if ( count( $files ) > $settings['max_files'] ) {
			wp_send_json_error( $settings['messages']['upload_max_files'] );
		}

		$result = array();
		$index  = 0;

		foreach ( $files as $file ) {

			if ( ! $file['size'] > $settings['max_size'] ) {
				wp_send_json_error( $settings['messages']['upload_max_size'] );
			}

			if ( ! empty( $settings['mime_types'] ) && ! in_array( $file['type'], $settings['mime_types'] ) ) {
				wp_send_json_error( $settings['messages']['upload_mime_types'] );
			}

			$result[] = $this->upload_file( $file, $insert_attachment );

		}

		return $result;

	}

	/**
	 * Upload file
	 *
	 * @return [type] [description]
	 */
	public function upload_file( $file = array(), $insert_attachment = false ) {

		$result = array();

		if ( ! function_exists( 'wp_handle_upload' ) ) {
			include_once ABSPATH . 'wp-admin/includes/file.php';
			include_once ABSPATH . 'wp-admin/includes/media.php';
		}

		add_filter( 'upload_dir', array( $this, 'apply_upload_dir' ) );

		$upload = wp_handle_upload(
			$file,
			array( 'test_form' => false )
		);

		if ( empty( $upload['error'] ) && $insert_attachment ) {

			$filepath   = $upload['file'];
			$attachment = wp_insert_attachment(
				array(
					'guid'           => $upload['url'],
					'post_mime_type' => $upload['type'],
					'post_title'     => preg_replace( '/\.[^.]+$/', '', basename( $filepath ) ),
					'post_content'   => '',
					'post_status'    => 'publish',
				),
				$filepath,
				0,
				true
			);

			if ( ! is_wp_error( $attachment ) ) {
				$metadata = wp_generate_attachment_metadata( $attachment, $filepath );
				wp_update_attachment_metadata( $attachment, $metadata );
			} else {
				$this->errors[] = $attachment->get_error_message();
			}

			$upload['attachment'] = $attachment;

		} elseif ( ! empty( $upload['error'] ) ) {
			$this->errors[] = $upload['error'];
		}

		remove_filter( 'upload_dir', array( $this, 'apply_upload_dir' ) );

		return $upload;

	}

	/**
	 * Try to get files array from field data
	 *
	 * @param array $field [description]
	 * @param string $format [description]
	 *
	 * @return [type]         [description]
	 */
	public function get_files_from_field( $field = array(), $format = 'url' ) {

		$files = array();
		$value = ! empty( $field['default'] ) ? $field['default'] : array();

		if ( ! is_array( $value ) ) {
			if ( 'both' !== $format ) {
				$value = explode( ',', str_replace( ', ', ',', $value ) );
			} else {
				if ( false !== strpos( $value, '{' ) ) {
					$value = json_decode( wp_unslash( $value ), true );
				} else {
					return $files;
				}
			}
		}

		if ( 'both' === $format ) {
			$value = isset( $value['id'] ) ? array( $value ) : $value;
		}

		foreach ( $value as $val ) {
			switch ( $format ) {
				case 'id':
					$files[] = array(
						'url'        => wp_get_attachment_url( $val ),
						'attachment' => $val,
					);
					break;

				case 'url':
					$files[] = array(
						'url' => $val,
					);
					break;

				case 'both':
					if ( is_array( $val ) && isset( $val['url'] ) && isset( $val['id'] ) ) {
						$files[] = array(
							'url'        => $val['url'],
							'attachment' => $val['id'],
						);
					}
					break;
			}
		}

		return $files;
	}

	/**
	 * Returns formatted HTML result
	 *
	 * @return [type] [description]
	 */
	public function get_result_html( $field = array(), $files = array() ) {

		if ( ! empty( $field['insert_attachment'] ) ) {
			$result_format = ! empty( $field['value_format'] ) ? $field['value_format'] : 'url';
		} else {
			$result_format = 'url';
		}

		if ( empty( $files ) ) {
			$files = $this->get_files_from_field( $field, $result_format );
		}

		if ( empty( $files ) ) {
			return '';
		}

		$format = '<div class="jet-form-builder-file-upload__file" data-file="%1$s" data-id="%2$s" data-format="%3$s"><img src="%1$s" alt=""><div class="jet-form-builder-file-upload__file-remove"><svg width="22" height="22" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.375 7H6.125V12.25H4.375V7ZM7.875 7H9.625V12.25H7.875V7ZM10.5 1.75C10.5 1.51302 10.4134 1.30794 10.2402 1.13477C10.0762 0.961589 9.87109 0.875 9.625 0.875H4.375C4.12891 0.875 3.91927 0.961589 3.74609 1.13477C3.58203 1.30794 3.5 1.51302 3.5 1.75V3.5H0V5.25H0.875V14C0.875 14.237 0.957031 14.4421 1.12109 14.6152C1.29427 14.7884 1.50391 14.875 1.75 14.875H12.25C12.4961 14.875 12.7012 14.7884 12.8652 14.6152C13.0384 14.4421 13.125 14.237 13.125 14V5.25H14V3.5H10.5V1.75ZM5.25 2.625H8.75V3.5H5.25V2.625ZM11.375 5.25V13.125H2.625V5.25H11.375Z"></path></svg></div>%4$s</div>';

		$result = '';

		foreach ( $files as $file ) {

			if ( ! empty( $file['attachment'] ) && ! is_wp_error( $file['attachment'] ) ) {
				$attachment = $file['attachment'];
			} else {
				$attachment = 0;
			}

			$result .= sprintf(
				$format,
				$file['url'],
				$attachment,
				$result_format,
				apply_filters( 'jet-form-builder/file-upload/custom-html', '', $file, $field )
			);

		}

		return $result;

	}

	public function get_loader() {
		return '<div class="jet-form-builder-file-upload__loader">' . apply_filters(
				'jet-form-builder/file-upload/loader',
				'<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" stroke="#fff"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".5" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18" transform="rotate(137.826 18 18)"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg>'
			) . '</div>';
	}

	/**
	 * Returns formatted result array
	 *
	 * @param array $field [description]
	 * @param array $files [description]
	 *
	 * @return [type]        [description]
	 */
	public function get_result_value( $field = array(), $files = array() ) {

		if ( ! empty( $field['insert_attachment'] ) ) {
			$format = ! empty( $field['value_format'] ) ? $field['value_format'] : 'url';
		} else {
			$format = 'url';
		}

		if ( empty( $files ) ) {
			$files = $this->get_files_from_field( $field, $format );
		}

		if ( empty( $files ) ) {
			return '';
		}

		$limit  = ! empty( $field['max_files'] ) ? absint( $field['max_files'] ) : 1;
		$limit  = $limit ? $limit : 1;
		$result = array();

		foreach ( $files as $file ) {

			if ( isset( $file['attachment'] ) && ! is_wp_error( $file['attachment'] ) ) {
				$id = $file['attachment'];
			} else {
				$id = false;
			}

			$url = ! empty( $file['url'] ) ? $file['url'] : false;

			switch ( $format ) {
				case 'id':
					if ( 1 < $limit ) {
						$result[] = $id;
					} else {
						$result = $id;
					}
					break;

				case 'url':
					if ( 1 < $limit ) {
						$result[] = $url;
					} else {
						$result = $url;
					}
					break;

				case 'both':
					if ( $url && $id ) {
						if ( 1 < $limit ) {
							$result[] = array(
								'id'  => $id,
								'url' => $url,
							);
						} else {
							$result = array(
								'id'  => $id,
								'url' => $url,
							);
						}
					}
					break;
			}
		}

		return is_array( $result ) ? array_filter( $result ) : $result;

	}

	/**
	 * Returns stringified uploading errors
	 *
	 * @return string
	 */
	public function get_errors_string() {

		if ( empty( $this->errors ) ) {
			return null;
		}

		if ( 1 === count( $this->errors ) ) {
			return $this->errors[0];
		} else {

			$result = '';

			foreach ( $this->errors as $error ) {
				$result .= '- ' . $error . '<br>';
			}

			return $result;

		}

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
	 * Returns upload subdirectory
	 *
	 * @return [type] [description]
	 */
	public function get_upload_dir() {

		$user_id       = get_current_user_id();
		$user_dir_name = $user_id ? $user_id : 'guest';
		$user_dir_name = apply_filters( 'jet-form-builder/file-upload/user-dir-name', $user_dir_name );

		return $this->upload_base() . '/' . $user_dir_name;
	}

	/**
	 * Returns upload base directory
	 *
	 * @return [type] [description]
	 */
	public function upload_base() {
		return apply_filters( 'jet-form-builder/file-upload/dir', 'jet-form-builder' );
	}

	/**
	 * Change upload directory for JetEngine uploads
	 *
	 * @param  [type] $pathdata [description]
	 *
	 * @return [type]           [description]
	 */
	public function apply_upload_dir( $pathdata ) {

		$dir = $this->get_upload_dir();

		if ( empty( $pathdata['subdir'] ) ) {
			$pathdata['path']   = $pathdata['path'] . '/' . $dir;
			$pathdata['url']    = $pathdata['url'] . '/' . $dir;
			$pathdata['subdir'] = '/' . $dir;
		} else {
			$new_subdir         = '/' . $dir . $pathdata['subdir'];
			$pathdata['path']   = str_replace( $pathdata['subdir'], $new_subdir, $pathdata['path'] );
			$pathdata['url']    = str_replace( $pathdata['subdir'], $new_subdir, $pathdata['url'] );
			$pathdata['subdir'] = $new_subdir;
		}

		return $pathdata;

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

		wp_localize_script( 'jet-form-builder-file-upload', 'JetFormBuilderFileUploadConfig', array(
			'ajaxurl'         => esc_url_raw( admin_url( 'admin-ajax.php' ) ),
			'action'          => $this->action,
			'nonce'           => wp_create_nonce( $this->nonce_key ),
			'max_upload_size' => wp_max_upload_size()
		) );

		wp_add_inline_script( 'jet-form-builder-file-upload', "
			window.JetFormBuilderFileUploadConfig = window.JetFormBuilderFileUploadConfig || {};
			window.JetFormBuilderFileUploadConfig.errors = window.JetFormBuilderFileUploadConfig.errors || {};
			
			window.JetFormBuilderFileUploadConfig.errors[ $form_id ] = $messages;  
		" );
	}

	public function ensure_media_js( $content = '', $popup_data = array() ) {
		if ( $this->rendered_scripts ) {
			return '';
		}
		$this->rendered_scripts = true;

		ob_start();
		jet_form_builder()->blocks->register_form_scripts();

		$this->enqueue_scripts();
		wp_scripts()->done[] = 'jet-form-builder-frontend-forms';
		wp_scripts()->print_scripts( 'jet-form-builder-file-upload' );

		return $content . ob_get_clean();
	}

}
