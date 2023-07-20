<?php


namespace JFB_Modules\Captcha;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Exceptions\Handler_Exception;
use JFB_Components\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Captcha\Abstract_Captcha\Base_Captcha;
use JFB_Modules\Captcha\Abstract_Captcha\Captcha_Frontend_Style_It;
use JFB_Modules\Captcha\Abstract_Captcha\Captcha_Separate_Editor_Script;
use JFB_Modules\Captcha\Abstract_Captcha\Captcha_Separate_Frontend_Script;
use JFB_Modules\Captcha\Abstract_Captcha\Captcha_Settings_From_Options;
use JFB_Modules\Captcha\Friendly_Captcha\Friendly_Captcha;
use JFB_Modules\Captcha\Hcaptcha\Hcaptcha;
use JFB_Modules\Captcha\Re_Captcha_V3\Re_Captcha_V3;
use JFB_Modules\Captcha\Turnstile\Turnstile;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Modules\Security\Exceptions\Spam_Exception;
use Jet_Form_Builder\Plugin;

/**
 * @since 3.1.0
 *
 * Class Module
 * @package JFB_Modules\Captcha
 */
final class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Dir_It,
	Base_Module_After_Install_It,
	Base_Module_Handle_It {

	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Dir_Trait;

	use Repository_Pattern_Trait;

	const PREFIX = 'jet_form_builder_captcha__';

	/**
	 * @var Base_Captcha[]
	 */
	private $current = array();

	public function rep_item_id() {
		return 'captcha';
	}

	public function on_install() {
		$this->rep_install();

		Tab_Handler_Manager::instance()->install( new Admin_Tabs\Captcha_Handler() );
	}

	public function on_uninstall() {
		$this->rep_clear();

		Tab_Handler_Manager::instance()->uninstall( 'captcha-tab' );
	}

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/captcha/types',
			array(
				new Re_Captcha_V3(),
				new Hcaptcha(),
				new Turnstile(),
				new Friendly_Captcha(),
			)
		);
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_filter( 'jet-form-builder/request-handler/request', array( $this, 'on_request' ) );
		add_filter( 'jet-form-builder/before-render/submit-field', array( $this, 'on_render_submit' ), 10, 2 );
		add_filter( 'jet-form-builder/page-config/jfb-settings', array( $this, 'on_localize_config' ) );
		add_filter( 'jet-form-builder/editor/config', array( $this, 'on_localize_config' ) );
		add_filter( 'jet-form-builder/setup-blocks', array( $this, 'check_is_container_exist' ) );
		add_filter( 'jet-form-builder/before-end-form', array( $this, 'on_end_render_form' ) );
		add_filter( 'jet-form-builder/blocks/items', array( $this, 'add_blocks_types' ) );

		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_editor_assets' ) );
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_editor_package_assets' ), 0 );
		add_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
		add_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_frontend_scripts' ) );
		add_action( 'jet-form-builder/enqueue-style', array( $this, 'register_frontend_styles' ) );
	}

	public function remove_hooks() {
		remove_filter( 'jet-form-builder/request-handler/request', array( $this, 'on_request' ) );
		remove_filter( 'jet-form-builder/before-render/submit-field', array( $this, 'on_render_submit' ) );
		remove_filter( 'jet-form-builder/page-config/jfb-settings', array( $this, 'on_localize_config' ) );
		remove_filter( 'jet-form-builder/editor/config', array( $this, 'on_localize_config' ) );
		remove_filter( 'jet-form-builder/setup-blocks', array( $this, 'check_is_container_exist' ) );
		remove_filter( 'jet-form-builder/before-end-form', array( $this, 'on_end_render_form' ) );
		remove_filter( 'jet-form-builder/blocks/items', array( $this, 'add_blocks_types' ) );

		remove_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_editor_assets' ) );
		remove_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'enqueue_editor_package_assets' ),
			0
		);
		remove_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
		remove_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_frontend_scripts' ) );
		remove_action( 'jet-form-builder/enqueue-style', array( $this, 'register_frontend_styles' ) );
	}

	/**
	 * @param $request
	 *
	 * @return mixed
	 * @throws Spam_Exception
	 */
	public function on_request( $request ) {
		$this->verify( $request );

		return $request;
	}

	/**
	 * By default, the captcha is displayed before the submit button.
	 * But if the Captcha Container block is present in the form, we can check it in advance.
	 * This is necessary because the captcha and the button can be in parallel columns.
	 *
	 * @param string $content
	 * @param array $attrs
	 *
	 * @return string
	 * @see Forms_Captcha::check_is_container_exist
	 */
	public function on_render_submit( string $content, array $attrs ): string {
		try {
			$current = $this->get_current();
		} catch ( Repository_Exception $exception ) {
			return $content;
		}

		$type = $attrs['action_type'] ?? '';

		if (
			'submit' !== $type ||
			$current->is_exist_container()
		) {
			return $content;
		}

		return ( $content . $this->render() );
	}

	/**
	 * If for some reason the submit button has not been rendered in the form,
	 * then to make sure that we have displayed the captcha,
	 * we display it at the end of the rendering of the entire form.
	 *
	 * @param string $content
	 *
	 * @return string
	 */
	public function on_end_render_form( string $content ): string {
		$content .= $this->render();

		return $content;
	}

	public function add_blocks_types( array $block_types ): array {
		$block_types[] = new Block_Types\Captcha_Container();

		return $block_types;
	}

	public function register_frontend_scripts() {
		/** @var Base_Captcha $captcha */
		foreach ( $this->rep_generate_items() as $captcha ) {
			if ( ! ( $captcha instanceof Captcha_Separate_Frontend_Script ) ) {
				continue;
			}
			$captcha->register_frontend_scripts();
		}
	}

	public function register_frontend_styles() {
		try {
			$current = $this->get_current();
		} catch ( Repository_Exception $exception ) {
			return;
		}
		if ( ! ( $current instanceof Captcha_Frontend_Style_It ) ) {
			return;
		}
		$current->register_frontend_styles();
	}

	public function enqueue_editor_assets() {
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets-build/js/editor{min}.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);

		/** @var Base_Captcha $captcha */
		foreach ( $this->rep_generate_items() as $captcha ) {
			if ( ! ( $captcha instanceof Captcha_Separate_Editor_Script ) ) {
				continue;
			}
			$captcha->enqueue_editor_script();
		}
	}

	public function enqueue_editor_package_assets() {
		wp_enqueue_script(
			$this->get_handle( 'package' ),
			$this->get_url( 'assets-build/js/editor.package{min}.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);
	}

	/**
	 * @param $request
	 *
	 * @throws Spam_Exception
	 */
	protected function verify( $request ) {
		try {
			$this->get_current()->verify( $request );
		} catch ( Repository_Exception $exception ) {
			return;
		}
	}

	public function render(): string {
		try {
			return $this->get_current()->get_output();
		} catch ( Repository_Exception $exception ) {
			return '';
		}
	}

	/**
	 * Returns captcha settings for current form
	 *
	 * @return Base_Captcha
	 * @throws Repository_Exception
	 */
	public function get_current(): Base_Captcha {
		if ( ! jet_fb_live()->form_id ) {
			throw new Repository_Exception( 'no_captcha' );
		}

		if ( array_key_exists( (int) jet_fb_live()->form_id, $this->current ) ) {
			if ( $this->current[ jet_fb_live()->form_id ] instanceof Base_Captcha ) {
				return $this->current[ jet_fb_live()->form_id ];
			}

			throw new Repository_Exception( 'no_captcha' );
		}

		$settings = Plugin::instance()->post_type->get_captcha( jet_fb_live()->form_id );

		if ( ! $settings || ! is_array( $settings ) ) {
			$this->current[ jet_fb_live()->form_id ] = false;

			throw new Repository_Exception( 'no_captcha' );
		}

		$captcha = $settings['captcha'] ?? false;

		/**
		 * For backward compatibility
		 */
		if ( false === $captcha && ! empty( $settings['enabled'] ) ) {
			$captcha = Re_Captcha_V3::class;
		}

		/**
		 * @var Base_Captcha $current
		 */
		$current = $this->rep_clone_item( $captcha );

		$this->current[ jet_fb_live()->form_id ] = $current->sanitize_options( $settings );

		return $this->current[ jet_fb_live()->form_id ];
	}

	public function on_localize_config( array $config ): array {
		$captcha_config = array();

		/** @var Base_Captcha $captcha */
		foreach ( $this->rep_generate_items() as $captcha ) {
			if ( ! ( $captcha instanceof Captcha_Settings_From_Options ) ) {
				continue;
			}
			$captcha_config[] = $captcha->to_array();
		}

		$config['captcha-tab-config'] = $captcha_config;

		return $config;
	}

	public function check_is_container_exist( array $blocks ): array {
		try {
			$current = $this->get_current();
		} catch ( Repository_Exception $exception ) {
			return $blocks;
		}

		if ( ! is_null( $current->is_exist_container() ) ) {
			return $blocks;
		}

		$current->set_exist_container(
			! empty(
			Block_Helper::find_by_block_name(
				$blocks,
				'jet-forms/captcha-container'
			)
			)
		);

		return $blocks;
	}

	/**
	 * @param string|array $config
	 * @param string $handle
	 *
	 * @return bool
	 */
	public function add_inline_config( $config, string $handle = '' ): bool {
		$form_id = jet_fb_live()->form_id;

		if ( ! is_string( $config ) ) {
			$config = Tools::encode_json( $config );
		}

		return wp_add_inline_script(
			$handle ?: Base_Captcha::HANDLE_USER,
			"
		    window.JetFormBuilderCaptchaConfig = window.JetFormBuilderCaptchaConfig || {};
		    window.JetFormBuilderCaptchaConfig[ $form_id ] = {$config};
		",
			'before'
		);
	}
}
