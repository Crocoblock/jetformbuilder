<?php


namespace JFB_Modules\Admin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Tabs_Handlers\Options_Handler;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Classes\Http\Utm_Url;
use Jet_Form_Builder\Classes\Tools;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Modules\Post_Type;

class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Handle_It,
	Base_Module_Dir_It {

	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;
	use Base_Module_Dir_Trait;

	public function rep_item_id() {
		return 'admin';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_action( 'admin_footer', array( $this, 'add_modal_on_deactivate' ) );
		add_filter( 'admin_footer_text', array( $this, 'admin_footer_text' ) );

		add_filter(
			'plugin_action_links_' . JET_FORM_BUILDER_PLUGIN_BASE,
			array( $this, 'modify_plugin_action_links' )
		);
	}

	public function remove_hooks() {
		remove_action( 'admin_footer', array( $this, 'add_modal_on_deactivate' ) );
		remove_filter( 'admin_footer_text', array( $this, 'admin_footer_text' ) );

		remove_filter(
			'plugin_action_links_' . JET_FORM_BUILDER_PLUGIN_BASE,
			array( $this, 'modify_plugin_action_links' )
		);
	}

	/**
	 * Called by `register_activation_hook`
	 * inside `jetformbuilder/load.php`
	 *
	 * @return void
	 */
	public function on_plugin_activate() {
		/** @var Options_Handler $options */
		$options_tab = Tab_Handler_Manager::instance()->tab( 'options-tab' );

		$options     = $options_tab->get_options();
		$new_options = array();

		if ( ! isset( $options['disable_next_button'] ) ) {
			$new_options['disable_next_button'] = false;
		}
		if ( ! isset( $options['scroll_on_next'] ) ) {
			$new_options['scroll_on_next'] = true;
		}
		if ( ! isset( $options['auto_focus'] ) ) {
			$new_options['auto_focus'] = true;
		}

		if ( ! $new_options ) {
			return;
		}

		$options_tab->update_options(
			array_merge( $options, $new_options )
		);
	}

	public function admin_footer_text( $footer_text ): string {
		try {
			Pages_Manager::instance()->get_current();
		} catch ( Not_Found_Page_Exception $exception ) {
			$screen = get_current_screen();

			return ( $screen && 'edit-jet-form-builder' === $screen->id )
				? $this->get_footer_text()
				: Tools::to_string( $footer_text );
		}

		return $this->get_footer_text();
	}

	private function get_footer_text(): string {
		return sprintf(
		/* translators: %s - link to the JetFormBuilder reviews page */
			__(
				'Liked <strong>JetFormBuilder</strong>? 
Please <a href="%1$s" target="_blank">rate it ★★★★★</a>. 
For troubleshooting, contact <a href="%2$s" target="_blank">Crocoblock support</a>.',
				'jet-form-builder'
			),
			'https://wordpress.org/support/plugin/jetformbuilder/reviews/?filter=5',
			'https://support.crocoblock.com/support/home/'
		);
	}

	public function modify_plugin_action_links( array $links ): array {
		if ( jet_form_builder()->addons_manager->is_active() ) {
			return $links;
		}

		wp_enqueue_style(
			$this->get_handle( 'go-pro' ),
			$this->get_url( 'assets/build/go-pro.css' ),
			array(),
			jet_form_builder()->get_version()
		);

		$utm = new Utm_Url( 'plugin' );
		$utm->set_medium( 'all_plugins' );
		$utm->set_campaign( 'go-pro-button' );
		$utm->set_content( $utm->get_license_and_theme() );

		$url = $utm->add_query( JET_FORM_BUILDER_SITE . '/pricing/' );

		$label = apply_filters(
			'jet-form-builder/admin/go-pro-link-title',
			__( 'Go Pro', 'jet-form-builder' )
		);

		$links['go_pro'] = "<a href=\"{$url}\" target=\"_blank\" class=\"jet-fb-go-pro-link\">{$label}</a>";

		return $links;
	}

	public function add_modal_on_deactivate() {

		$screen = get_current_screen();

		if ( 'plugins' !== $screen->id ) {
			return;
		}

		$options = Tab_Handler_Manager::get_options( 'options-tab' );

		if ( empty( $options['clear_on_uninstall'] ) ) {
			return;
		}

		$handle = $this->get_handle( 'deactivate' );

		wp_enqueue_style(
			$handle,
			$this->get_url( 'assets/build/deactivate.css' ),
			array(),
			jet_form_builder()->get_version()
		);

		wp_enqueue_script(
			$handle,
			$this->get_url( 'assets/build/plugins.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);

		$slug = basename( jet_form_builder()->plugin_dir() );

		wp_localize_script(
			$handle,
			'JetFBPluginConfig',
			array(
				'slug' => $slug,
			)
		);

		// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
		ob_start();
		?>
		<div style="display:none;" class="jet-form-builder-modal" id="modal-<?php echo esc_attr( $slug ); ?>">
			<div class="jet-form-builder-modal-bg jet-form-builder-modal-exit"></div>
			<div class="jet-form-builder-modal-container">
				<h2 class="mb-unset"><?php echo __( 'Deactivating JetFormBuilder', 'jet-form-builder' ); ?></h2>
				<hr/>
				<p class="mt-unset">
					<?php
					echo __(
						'You have the "<b>Clear plugin data after the uninstall</b>" option enabled, which deletes the following when the plugin is removed:',
						'jet-form-builder'
					);
					?>
				</p>
				<ul>
					<li><?php echo __( 'All forms', 'jet-form-builder' ); ?></li>
					<li><?php echo __( 'All saved Form Records', 'jet-form-builder' ); ?></li>
					<li><?php echo __( 'All saved files', 'jet-form-builder' ); ?></li>
					<li><?php echo __( 'All custom SQL tables', 'jet-form-builder' ); ?></li>
					<li><?php echo __( 'All global options', 'jet-form-builder' ); ?></li>
				</ul>
				<p class="mb-unset">
					<?php
					echo __(
						'If you are sure that you want to delete all this data, 
click "<b>Continue</b>". If not, click "<b>Cancel</b>".',
						'jet-form-builder'
					);
					?>
				</p>
				<hr/>
				<div class="jet-form-builder-modal-container-footer">
					<button type="button"
							class="button continue"><?php echo __( 'Continue', 'jet-form-builder' ); ?></button>
					<button type="button"
							class="button close"><?php echo __( 'Cancel', 'jet-form-builder' ); ?></button>
				</div>
			</div>
		</div>
		<?php
		echo ob_get_clean();
		// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}
