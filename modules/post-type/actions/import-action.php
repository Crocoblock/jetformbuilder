<?php


namespace JFB_Modules\Post_Type\Actions;

use Jet_Form_Builder\Classes\Resources\File;
use Jet_Form_Builder\Classes\Resources\File_Collection;
use JFB_Modules\Post_Type\Actions\Traits\Import_Form_Trait;
use Jet_Form_Builder\Request\Request_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Import_Action extends Base_Form_Action {

	use Import_Form_Trait;

	public function get_id() {
		return 'jet_fb_import';
	}

	public function get_title() {
		return __( 'Import from JSON', 'jet-form-builder' );
	}

	public function display_action_link() {
		return false;
	}

	public function do_admin_action() {
		if ( ! current_user_can( 'publish_posts' ) ) {
			wp_die( 'Access denied', 'Error' );
		}

		add_filter( 'upload_mimes', array( $this, 'allow_json' ) );

		/** @var File_Collection[] $files */
		// phpcs:ignore WordPress.Security
		$files = Request_Tools::get_files( $_FILES );

		remove_filter( 'upload_mimes', array( $this, 'allow_json' ) );

		if ( ! is_array( $files ) ) {
			wp_die( 'File not found in request', 'Error' );
		}

		$collection = $files['form_file'] ?? false;

		if ( ! $collection ||
			! is_a( $collection, File_Collection::class ) ||
			! $collection->count()
		) {
			wp_die( 'File not found in request', 'Error' );
		}

		$wp_error = new \WP_Error();
		$form_ids = array();

		/** @var File $file */
		foreach ( $collection as $file ) {
			if ( 'json' !== strtolower(
				pathinfo( $file->get_name(), PATHINFO_EXTENSION )
			) ) {
				$wp_error->add(
					'not_json',
					sprintf( 'Incorrect file type (%s)', $file->get_name() ),
					$file->to_array()
				);
				continue;
			}

			if ( MB_IN_BYTES < $file->get_size() ) {
				$wp_error->add( 'too_large', 'File to large', $file->to_array() );
				continue;
			}

			// phpcs:ignore WordPress.WP.AlternativeFunctions
			$content = file_get_contents( $file->get_tmp_name() );

			wp_delete_file( $file->get_tmp_name() );

			$content = json_decode( $content, true );

			if ( ! $content ) {
				$wp_error->add( 'no_content', 'Incorrect file format', $file->to_array() );
				continue;
			}

			$form_ids[] = $this->import_form( $content );
		}

		if ( $wp_error->has_errors() ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			wp_die( $wp_error );
		}

		$url = esc_url(
			add_query_arg(
				array( 'post_type' => jet_form_builder()->post_type->slug() ),
				admin_url( 'edit.php' )
			)
		);

		if ( 1 === count( $form_ids ) ) {
			$url = get_edit_post_link( $form_ids[0], 'url' );
		}

		wp_safe_redirect( $url );
		die();
	}

	public function allow_json( $mimes ): array {
		$mimes['json'] = 'application/json';

		return $mimes;
	}
}
