<?php


namespace JFB_Modules\Admin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Classes\Http\Utm_Url;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;

class Module implements Base_Module_It, Base_Module_Url_It, Base_Module_Handle_It {

	use Base_Module_Handle_Trait;
	use Base_Module_Url_Trait;

	public function rep_item_id() {
		return 'admin';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_action( 'admin_footer', array( $this, 'add_modal_on_deactivate' ) );
		add_filter(
			'plugin_action_links_' . JET_FORM_BUILDER_PLUGIN_BASE,
			array( $this, 'modify_plugin_action_links' )
		);
	}

	public function remove_hooks() {
		remove_action( 'admin_init', array( $this, 'add_modal_on_deactivate' ) );
		add_filter(
			'plugin_action_links_' . JET_FORM_BUILDER_PLUGIN_BASE,
			array( $this, 'modify_plugin_action_links' )
		);
	}

	public function modify_plugin_action_links( array $links ): array {
		if ( jet_form_builder()->addons_manager->is_active() ) {
			return $links;
		}

		wp_enqueue_style(
			$this->get_handle(),
			$this->get_url( 'assets/build/css/plugins.css' ),
			array(),
			jet_form_builder()->get_version()
		);

		$utm = new Utm_Url( 'wp-dashboard/jet-form-builder-plugins-page' );
		$utm->set_campaign( 'go-pro-button' );

		$url = $utm->add_query( JET_FORM_BUILDER_SITE . '/pricing/' );

		$label = __( 'Go Pro', 'jet-form-builder' );

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

		wp_enqueue_style(
			$this->get_handle(),
			$this->get_url( 'assets/build/css/plugins.css' ),
			array(),
			jet_form_builder()->get_version()
		);

		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/js/plugins{min}.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);

		$slug = basename( jet_form_builder()->plugin_dir() );

		wp_localize_script(
			$this->get_handle(),
			'JetFBPluginConfig',
			array(
				'slug' => $slug,
			)
		);

		// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
		ob_start();
		?>
        <dialog class="jet-form-builder-modal" id="modal-<?php echo esc_attr( $slug ); ?>">
            <h2><?php echo __( 'Deactivating JetFormBuilder', 'jet-form-builder' ); ?></h2>
            <hr/>
            <p>
				<?php
				echo __(
					'You have the "<b>Clear data on uninstall plugin</b>" option enabled, which deletes the following information when the plugin is removed:',
					'jet-form-builder'
				);
				?>
            </p>
            <ul>
                <li><?php echo __( 'All forms', 'jet-form-builder' ); ?></li>
                <li><?php echo __( 'All saved Form Records', 'jet-form-builder' ); ?></li>
                <li><?php echo __( 'All saved files', 'jet-form-builder' ); ?></li>
                <li><?php echo __( 'All custom sql-tables', 'jet-form-builder' ); ?></li>
                <li><?php echo __( 'All global options', 'jet-form-builder' ); ?></li>
            </ul>
            <p>
				<?php
				echo __(
					'If you are sure that you want to delete all this information, 
then click "<b>Continue</b>", if not, click "<b>Cancel</b>".',
					'jet-form-builder'
				);
				?>
            </p>
            <hr/>
            <button type="button" class="button continue"><?php echo __( 'Continue', 'jet-form-builder' ); ?></button>
            <button type="button" class="button close"><?php echo __( 'Cancel', 'jet-form-builder' ); ?></button>
        </dialog>
		<?php
		echo ob_get_clean();
		// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}
