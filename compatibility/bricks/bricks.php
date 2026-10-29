<?php


namespace JFB_Compatibility\Bricks;

use Bricks\Elements;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Classes\Tools;
use JFB_Components\Compatibility\Base_Compat_Handle_Trait;
use JFB_Components\Compatibility\Base_Compat_Url_Trait;
use JFB_Components\Compatibility\Base_Compat_Dir_Trait;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Dir_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Bricks implements
	Base_Module_It,
	Base_Module_Handle_It,
	Base_Module_Url_It,
	Base_Module_Dir_It,
	Base_Module_After_Install_It {

	use Base_Compat_Handle_Trait;
	use Base_Compat_Url_Trait;
	use Base_Compat_Dir_Trait;

	/**
	 * @var Onboarding_Builder
	 */
	private $onboarding_builder;

	public function rep_item_id() {
		return 'bricks';
	}

	public function condition(): bool {
		return defined( 'BRICKS_VERSION' );
	}

	public function on_install() {
		$this->onboarding_builder = new Onboarding_Builder();
	}

	public function on_uninstall() {
	}

	public function init_hooks() {
		add_action( 'init', array( $this, 'register_elements' ), 10 );
		add_action( 'wp_enqueue_scripts', array( $this, 'editor_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'frontend_scripts' ), 20 );
		add_filter( 'jet-form-builder/form-action-url', array( $this, 'fix_popup_form_action_url' ) );
		add_filter( 'jet-form-builder/form-refer-url', array( $this, 'fix_popup_form_refer_url' ) );

		$this->get_onboarding_builder()->init_hooks();
	}

	public function remove_hooks() {
		remove_action( 'init', array( $this, 'register_elements' ) );
		remove_action( 'wp_enqueue_scripts', array( $this, 'editor_styles' ) );
		remove_action( 'wp_enqueue_scripts', array( $this, 'frontend_scripts' ), 20 );
		remove_filter( 'jet-form-builder/form-action-url', array( $this, 'fix_popup_form_action_url' ) );
		remove_filter( 'jet-form-builder/form-refer-url', array( $this, 'fix_popup_form_refer_url' ) );
	}

	/**
	 * Form inside the Bricks AJAX popup is rendered during the REST request,
	 * so the action URL must be based on the page where the popup was opened.
	 * Request router args (hook key & method) are kept.
	 */
	public function fix_popup_form_action_url( $action ) {
		$page_url = $this->get_popup_page_url();

		if ( ! $page_url ) {
			return $action;
		}

		$query = array();

		wp_parse_str( (string) wp_parse_url( $action, PHP_URL_QUERY ), $query );

		return add_query_arg( $query, $page_url );
	}

	public function fix_popup_form_refer_url( $refer ) {
		return $this->get_popup_page_url() ?: $refer;
	}

	/**
	 * @return string URL of the page where the AJAX popup was opened,
	 *                or empty string if it is not the Bricks AJAX popup request
	 */
	private function get_popup_page_url(): string {
		if ( ! class_exists( '\Bricks\Api' ) || ! \Bricks\Api::is_current_endpoint( 'load_popup_content' ) ) {
			return '';
		}

		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput
		$referer = wp_validate_redirect( esc_url_raw( wp_unslash( $_SERVER['HTTP_REFERER'] ?? '' ) ), '' );

		if ( ! $referer ) {
			$data    = json_decode( file_get_contents( 'php://input' ), true ); // phpcs:ignore WordPress.WP.AlternativeFunctions
			$referer = (string) get_permalink( absint( $data['postId'] ?? 0 ) );
		}

		return remove_query_arg( array( 'values', 'status', 'fields' ), strtok( $referer, '#' ) ?: '' );
	}

	public function register_elements() {
		$file_path = $this->get_dir( 'widgets/form.php' );
		Elements::register_element( $file_path, '', 'JFB_Compatibility\Bricks\Widgets\Form' );

		do_action( 'jet-form-builder/bricks/register-elements' );
	}

	public function editor_styles() {
		// Enqueue your files on the canvas & frontend, not the builder panel. Otherwise custom CSS might affect builder)
		if ( Tools::is_editor() ) {
			wp_enqueue_style(
				$this->get_handle( 'icons' ),
				$this->get_url( 'assets/build/editor/icons.css' ),
				array(),
				Plugin::instance()->get_version()
			);
		}
	}

	/**
	 * Enqueue frontend scripts for AJAX popup support
	 *
	 * @since 3.5.6
	 */
	public function frontend_scripts() {
		// Only enqueue on frontend, not in editor
		if ( Tools::is_editor() ) {
			return;
		}

		$asset_file = $this->get_dir( 'assets/build/frontend.asset.php' );

		if ( file_exists( $asset_file ) ) {
			$asset = require $asset_file;
		} else {
			$asset = array(
				'dependencies' => array(),
				'version'     => Plugin::instance()->get_version(),
			);
		}

		// Start with dependencies from asset file
		$dependencies = $asset['dependencies'] ?? array();

		$script_url    = $this->get_url( 'assets/build/frontend.js' );
		$script_handle = $this->get_handle( 'frontend' );

		wp_enqueue_script(
			$script_handle,
			$script_url,
			$dependencies,
			$asset['version'] ?? Plugin::instance()->get_version(),
			true
		);
	}

	/**
	 * @return Onboarding_Builder
	 */
	public function get_onboarding_builder(): Onboarding_Builder {
		return $this->onboarding_builder;
	}
}
