<?php
namespace JFB_Modules\Promo_Banner;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;

class Module implements Base_Module_It, Base_Module_Url_It, Base_Module_Handle_It, Base_Module_Dir_It {

	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Dir_Trait;

	public $storage = null;

	public function rep_item_id() {
		return 'promo-banner';
	}

	public function condition(): bool {
		return ( is_admin() && current_user_can( 'manage_options' ) ) ? true : false;
	}

	public function init_hooks() {

		add_action( 'admin_enqueue_scripts', array( $this, 'register_banner' ) );
		add_action( 'wp_ajax_' . $this->get_handle(), array( $this, 'process_banner_dismiss' ) );

		add_filter( 'jet-form-builder/admin/pages/go-pro-title', array( $this, 'add_promo_disounts' ) );
		add_filter( 'jet-form-builder/admin/go-pro-link-title', array( $this, 'add_promo_disounts' ) );
	}

	public function remove_hooks() {

		remove_action( 'admin_enqueue_scripts', array( $this, 'register_banner' ) );
		remove_action( 'wp_ajax_' . $this->get_handle(), array( $this, 'process_banner_dismiss' ) );

		remove_filter( 'jet-form-builder/admin/pages/go-pro-title', array( $this, 'add_promo_disounts' ) );
		remove_filter( 'jet-form-builder/admin/go-pro-link-title', array( $this, 'add_promo_disounts' ) );
	}

	/**
	 * Get storage instance
	 *
	 * @return [type] [description]
	 */
	public function get_storage() {

		if ( null === $this->storage ) {
			$this->storage = new Storage( $this->get_handle() );
		}

		return $this->storage;
	}

	/**
	 * Add promo discount text
	 *
	 * @param string $text Default text.
	 */
	public function add_promo_disounts( $text ) {

		$promo_value = $this->get_storage()->get_promo_value();

		if ( $promo_value ) {
			$text .= ' - ' . $promo_value;
		}

		return $text;
	}

	/**
	 * Dismiss banner
	 *
	 * @return [type] [description]
	 */
	public function process_banner_dismiss() {

		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
		if ( empty( $_REQUEST['nonce'] ) || ! wp_verify_nonce( wp_unslash( $_REQUEST['nonce'] ), $this->get_handle() ) ) {
			wp_send_json_error(
				esc_html__( 'The page is expired. Pleaser reload it and try again.', 'jet-form-builder' )
			);
		}

		// phpcs:ignore WordPress.Security.ValidatedSanitizedInput.MissingUnslash
		$hash = ! empty( $_REQUEST['hash'] ) ? sanitize_text_field( $_REQUEST['hash'] ) : false;

		if ( ! $hash ) {
			wp_send_json_error( esc_html__( 'There is no banner hash do dimiss.', 'jet-form-builder' ) );
		}

		$storage = $this->get_storage();

		if ( ! $storage->is_banner_dismissed( $hash ) ) {
			$storage->dismiss_banner( $hash );
		}

		wp_send_json_success();
	}

	/**
	 * Check if is allowed page to show banner on
	 *
	 * @return boolean
	 */
	public function is_allowed_page() {

		if (
			! empty( $_GET['post_type'] )
			&& jet_form_builder()->post_type->slug() === $_GET['post_type']
		) {
			return true;
		}

		return false;
	}

	/**
	 * Register banner to show on the page
	 *
	 * @return bool
	 */
	public function register_banner() {

		if ( ! $this->is_allowed_page() ) {
			return;
		}

		$storage = $this->get_storage();
		$banner  = $storage->get_banner_html();

		if ( ! $banner ) {
			return;
		}

		$hash = $storage->get_banner_hash( $banner );

		if ( $storage->is_banner_dismissed( $hash ) ) {
			return;
		}

		$script_asset = require_once $this->get_dir( 'assets/build/index.asset.php' );

		if ( true === $script_asset ) {
			return;
		}

		wp_enqueue_style(
			$this->get_handle(),
			$this->get_url( 'assets/build/index.css' ),
			array(),
			$script_asset['version']
		);

		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/index.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		$addition_classes = '';

		if ( get_current_screen()->get_help_tabs() || get_current_screen()->show_screen_options() ) {
			$addition_classes = 'has-screen-links';
		}

		wp_localize_script(
			$this->get_handle(),
			'jfbPromoBanner',
			array(
				'banner'  => $banner,
				'hash'    => $hash,
				'nonce'   => wp_create_nonce( $this->get_handle() ),
				'action'  => $this->get_handle(),
				'classes' => $addition_classes,
			)
		);
	}
}
