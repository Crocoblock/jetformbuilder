<?php


namespace Jet_Form_Builder\Form_Actions\Types;

use Jet_Form_Builder\Classes\Resources\File;
use Jet_Form_Builder\Classes\Resources\Sanitize_File_Exception;
use Jet_Form_Builder\Form_Actions\Base_Form_Action;
use Jet_Form_Builder\Form_Actions\Import_Form_Trait;

class Import_Action extends Base_Form_Action {

	use Import_Form_Trait;

	const NONCE_ACTION = 'jfb_admin_import_form';

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
		if ( ! wp_verify_nonce( sanitize_key( $_POST['_wpnonce'] ?? '' ), self::NONCE_ACTION ) ||
			! current_user_can( 'publish_posts' )
		) {
			wp_die( 'Access denied', 'Error' );
		}

		try {
			// phpcs:ignore WordPress.Security
			$file = new File( $_FILES['form_file'] ?? array() );
		} catch ( Sanitize_File_Exception $exception ) {
			wp_die( 'File not found in request', 'Error' );
		}

		if ( 'application/json' !== $file->get_type() ) {
			wp_die( 'Incorrect file type', 'Error' );
		}

		if ( MB_IN_BYTES < $file->get_size() ) {
			wp_die( 'File to large', 'Error' );
		}

		// phpcs:ignore WordPress.WP.AlternativeFunctions
		$content = file_get_contents( $file->get_tmp_name() );

		wp_delete_file( $file->get_tmp_name() );

		$content = json_decode( $content, true );

		if ( ! $content ) {
			wp_die( 'Incorrect file format', 'Error' );
		}

		$form_id = $this->import_form( $content );

		// phpcs:ignore WordPress.Security.SafeRedirect
		wp_redirect( get_edit_post_link( $form_id, 'url' ) );
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
