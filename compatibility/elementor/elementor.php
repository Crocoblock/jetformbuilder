<?php


namespace JFB_Compatibility\Elementor;

use Jet_Form_Builder\Blocks;
use Jet_Form_Builder\Classes\Builder_Helper;
use JFB_Components\Compatibility\Base_Compat_Dir_Trait;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Modules\Deprecated;
use JFB_Components\Compatibility\Base_Compat_Handle_Trait;
use JFB_Components\Compatibility\Base_Compat_Url_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_It;
use JFB_Compatibility\Elementor\Widgets;
use JFB_Components\Module\Base_Module_Url_It;

// If this file is called directly, abort.
if (! defined('WPINC')) {
	die;
}

class Elementor implements
	Base_Module_It,
	Base_Module_Handle_It,
	Base_Module_Url_It,
	Base_Module_Dir_It,
	Base_Module_After_Install_It
{

	use Base_Compat_Handle_Trait;
	use Base_Compat_Url_Trait;
	use Base_Compat_Dir_Trait;

	private $types;

	/**
	 * @var Onboarding_Builder
	 */
	private $onboarding_builder;

	public function rep_item_id()
	{
		return 'elementor';
	}

	public function condition(): bool
	{
		return defined('ELEMENTOR_VERSION');
	}

	public function on_install()
	{
		$this->onboarding_builder = new Onboarding_Builder();
	}

	public function on_uninstall() {}

	public function init_hooks()
	{
		add_action('elementor/init', array($this, 'init_widgets'));
		add_action('elementor/editor/after_enqueue_styles', array($this, 'editor_styles'));
		add_action('elementor/preview/enqueue_scripts', array($this, 'enqueue_form_scripts'), 9);
		add_action('elementor/preview/enqueue_styles', array($this, 'enqueue_form_styles'));
		add_action('elementor/elements/categories_registered', array($this, 'register_category'));

		$this->get_onboarding_builder()->init_hooks();

		// compatibility with 3.7
		if (
			defined('ELEMENTOR_VERSION') &&
			version_compare(ELEMENTOR_VERSION, '3.5.0', '>=')
		) {
			add_action('elementor/widgets/register', array($this, 'register_widgets'));
		} else {
			add_action('elementor/widgets/widgets_registered', array($this, 'register_widgets'));
		}
	}

	public function remove_hooks()
	{
		remove_action('elementor/init', array($this, 'init_widgets'));
		remove_action('elementor/editor/after_enqueue_styles', array($this, 'editor_styles'));
		remove_action('elementor/preview/enqueue_scripts', array($this, 'enqueue_form_scripts'), 9);
		remove_action('elementor/preview/enqueue_styles', array($this, 'enqueue_form_styles'));
		remove_action('elementor/elements/categories_registered', array($this, 'register_category'));

		// compatibility with 3.7
		if (
			defined('ELEMENTOR_VERSION') &&
			version_compare(ELEMENTOR_VERSION, '3.5.0', '>=')
		) {
			remove_action('elementor/widgets/register', array($this, 'register_widgets'));
		} else {
			remove_action('elementor/widgets/widgets_registered', array($this, 'register_widgets'));
		}
	}

	public function init_widgets()
	{
		$this->types = array(
			new Widgets\Form(),
		);

		foreach ($this->types as $type) {
			$type->init_hooks();
		}
	}

	/**
	 * Register category for elementor if not exists
	 *
	 * @return void
	 */
	public function register_category()
	{

		$elements_manager = \Elementor\Plugin::instance()->elements_manager;

		$elements_manager->add_category(
			'jet-form-builder',
			array(
				'title' => esc_html__('JetFormBuilder', 'jet-form-builder'),
				'icon'  => 'font',
			)
		);
	}

	/**
	 * Enqueue editor styles
	 *
	 * @return void
	 */
	public function editor_styles()
	{
		wp_enqueue_style(
			$this->get_handle('icons'),
			$this->get_url('assets/build/css/icons.css'),
			array(),
			jet_form_builder()->get_version()
		);
	}

	public function register_widgets($manager)
	{
		foreach ($this->types as $widget) {
			// compatibility with 3.7
			if (method_exists($manager, 'register')) {
				$manager->register($widget);
			} else {
				$manager->register_widget_type($widget);
			}
		}
	}

	/**
	 * @noinspection PhpUnhandledExceptionInspection
	 */
	public function enqueue_form_scripts()
	{
		/** @var Blocks\Module $blocks */
		$blocks = jet_form_builder()->module('blocks');

		/** @var Deprecated\Module $deprecated */
		$deprecated = jet_form_builder()->module('deprecated');

		$blocks->enqueue_frontend_assets();

		// Elementor renders the selected form dynamically inside the preview.
		// At this point, block view scripts enqueued while rendering the form
		// are not automatically added to the already loaded preview document.
		$this->enqueue_form_block_scripts();

		// The WYSIWYG block requires WordPress editor scripts and settings.
		// They must be loaded before the form is dynamically rendered.
		wp_enqueue_editor();

		// appointment/booking compatibility
		$deprecated->register_scripts();
		$deprecated->add_deprecated_script('');
	}

	public function enqueue_form_styles()
	{
		wp_enqueue_style('jet-form-builder-frontend');

		// Load frontend styles of all JetFormBuilder blocks in the
		// Elementor preview before a form is selected dynamically.
		$this->enqueue_form_block_styles();
	}

	/**
	 * Enqueue frontend scripts of all registered JetFormBuilder blocks.
	 *
	 * Elementor can render or replace a form dynamically after the preview
	 * document has already loaded. Therefore, block scripts must be available
	 * before the form initialization is triggered.
	 *
	 * @return void
	 */
	private function enqueue_form_block_scripts()
	{
		$registered_blocks = \WP_Block_Type_Registry::get_instance()->get_all_registered();

		foreach ($registered_blocks as $block_type) {
			if (0 !== strpos($block_type->name, 'jet-forms/')) {
				continue;
			}

			$script_handles = array_merge(
				$block_type->script_handles,
				$block_type->view_script_handles
			);

			foreach (array_unique($script_handles) as $handle) {
				if (! $handle) {
					continue;
				}

				wp_enqueue_script($handle);
			}
		}
	}

	/**
	 * Enqueue frontend styles of all registered JetFormBuilder blocks.
	 *
	 * @return void
	 */
	private function enqueue_form_block_styles()
	{
		$registered_blocks = \WP_Block_Type_Registry::get_instance()->get_all_registered();

		foreach ($registered_blocks as $block_type) {
			if (0 !== strpos($block_type->name, 'jet-forms/')) {
				continue;
			}

			$style_handles = array_merge(
				$block_type->style_handles,
				$block_type->view_style_handles
			);

			foreach (array_unique($style_handles) as $handle) {
				if (! $handle) {
					continue;
				}

				wp_enqueue_style($handle);
			}
		}
	}

	/**
	 * @return Onboarding_Builder
	 */
	public function get_onboarding_builder(): Onboarding_Builder
	{
		return $this->onboarding_builder;
	}
}
