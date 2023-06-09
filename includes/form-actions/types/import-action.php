<?php


namespace Jet_Form_Builder\Form_Actions\Types;

use Jet_Form_Builder\Classes\Resources\File;
use Jet_Form_Builder\Classes\Resources\File_Collection;
use Jet_Form_Builder\Classes\Resources\Sanitize_File_Exception;
use Jet_Form_Builder\Form_Actions\Base_Form_Action;
use Jet_Form_Builder\Form_Actions\Import_Form_Trait;
use Jet_Form_Builder\Request\Request_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Import_Action extends Base_Form_Action {

	use Import_Form_Trait;


	public function __construct() {
		parent::__construct();

		add_action( 'admin_enqueue_scripts', array( $this, 'import_form_js' ) );
	}

	public function get_id() {
		return 'jet_fb_import';
	}

	public function get_title() {
		return __( 'Import Form', 'jet-form-builder' );
	}

	public function display_action_link() {
		return false;
	}

	public function do_admin_action() {
		if ( ! current_user_can( 'publish_posts' ) ) {
			wp_die( 'Access denied', 'Error' );
		}

		/** @var File_Collection[] $files */
		// phpcs:ignore WordPress.Security
		$files = Request_Tools::get_files( $_FILES );

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

	public function import_form_js() {
		if ( ! jet_form_builder()->post_type->is_form_list_page() ) {
			return;
		}

		$import_button = __( 'Start Import', 'jet-form-builder' );

		ob_start();
		include $this->get_global_template( 'admin/import-form.php' );
		$import_template = ob_get_clean();

		wp_enqueue_script(
			'jet-form-builder-import-form',
			jet_form_builder()->plugin_url( 'assets/js/import-form.js' ),
			array( 'jquery' ),
			jet_form_builder()->get_version(),
			true
		);

		wp_localize_script(
			'jet-form-builder-import-form',
			'JetFormBuilderImportForm',
			array(
				'id'       => $this->get_id(),
				'template' => $import_template,
			)
		);
	}
}
