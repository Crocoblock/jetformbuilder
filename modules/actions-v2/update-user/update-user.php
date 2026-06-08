<?php

namespace JFB_Modules\Actions_V2\Update_User;

use Jet_Form_Builder\Actions\Manager;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Classes\Tools;
use JFB_Modules\Actions_V2\Interfaces\Action_Integration_Interface;
use JFB_Modules\Actions_V2\Traits\Action_Integration_Trait;
use JFB_Modules\Post_Type\Module as Post_Type_Module;

class Update_User implements Action_Integration_Interface {

	use Action_Integration_Trait;

	const SCAN_VERSION_OPTION = 'jet_fb_update_user_role_scan_version';
	const NOTICE_OPTION       = 'jet_fb_update_user_role_notice';
	const DISMISS_META_KEY    = 'jet_fb_update_user_role_notice_dismissed';
	const NOTICE_QUERY_ARG    = 'jet_fb_dismiss_update_user_role_notice';
	const SCAN_SCHEMA_VERSION = '1';

	public function rep_item_id() {
		return 'update-user';
	}

	public function init_hooks() {
		add_action(
			'jet-form-builder/editor-assets/after',
			array( $this, 'editor_assets' )
		);

		if ( ! is_admin() ) {
			return;
		}

		add_action( 'admin_init', array( $this, 'maybe_scan_affected_forms' ) );
		add_action( 'admin_init', array( $this, 'maybe_dismiss_notice' ) );
		add_action( 'admin_notices', array( $this, 'render_affected_forms_notice' ) );
	}

	public function on_install() {
		// TODO: Implement on_install() method.
	}

	public function register_actions( Manager $manager ) {
		$manager->register_action_type( new Update_User_Action() );
	}

	public function editor_assets() {
		$script_asset = require_once $this->get_dir( 'assets/build/editor.asset.php' );

		array_push(
			$script_asset['dependencies'],
			'jet-fb-components',
			'jet-fb-data',
			'jet-fb-actions-v2',
			'jet-fb-blocks-v2-to-actions-v2'
		);

		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	public function maybe_scan_affected_forms() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		$version = $this->get_scan_version();

		if ( $version === get_option( self::SCAN_VERSION_OPTION, '' ) ) {
			return;
		}

		$forms = $this->scan_affected_forms();

		update_option( self::SCAN_VERSION_OPTION, $version, false );

		if ( empty( $forms ) ) {
			delete_option( self::NOTICE_OPTION );

			return;
		}

		update_option(
			self::NOTICE_OPTION,
			array(
				'version' => $version,
				'forms'   => $forms,
			),
			false
		);
	}

	public function maybe_dismiss_notice() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if ( empty( $_GET[ self::NOTICE_QUERY_ARG ] ) ) {
			return;
		}

		check_admin_referer( self::NOTICE_QUERY_ARG );

		update_user_meta(
			get_current_user_id(),
			self::DISMISS_META_KEY,
			$this->get_scan_version()
		);

		wp_safe_redirect(
			remove_query_arg(
				array(
					self::NOTICE_QUERY_ARG,
					'_wpnonce',
				)
			)
		);
		exit;
	}

	public function render_affected_forms_notice() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		$notice = get_option( self::NOTICE_OPTION, array() );

		if ( empty( $notice['forms'] ) || empty( $notice['version'] ) ) {
			return;
		}

		if ( $this->get_scan_version() !== $notice['version'] ) {
			return;
		}

		if ( get_user_meta( get_current_user_id(), self::DISMISS_META_KEY, true ) === $notice['version'] ) {
			return;
		}

		$forms       = array_slice( $notice['forms'], 0, 5 );
		$more_forms  = count( $notice['forms'] ) - count( $forms );
		$dismiss_url = wp_nonce_url(
			add_query_arg( self::NOTICE_QUERY_ARG, '1' ),
			self::NOTICE_QUERY_ARG
		);

		?>
		<div class="notice notice-warning">
			<p>
				<strong><?php esc_html_e( 'JetFormBuilder: review Update User role transitions after this update.', 'jet-form-builder' ); ?></strong>
			</p>
			<p>
				<?php esc_html_e( 'Some forms use Update User role changes that may now be skipped for users without the promote_users capability. Review the forms below and update the global Self-Promotable Roles setting or the action flow if needed.', 'jet-form-builder' ); ?>
			</p>
			<ul style="list-style: disc; margin-left: 1.5em;">
				<?php foreach ( $forms as $form ) : ?>
					<li>
						<a href="<?php echo esc_url( $form['edit_link'] ); ?>">
							<?php echo esc_html( $form['title'] ); ?>
						</a>
						<?php echo esc_html( ' (#' . $form['id'] . ')' ); ?>:
						<?php echo esc_html( implode( '; ', $form['issues'] ) ); ?>
					</li>
				<?php endforeach; ?>
			</ul>
			<?php if ( $more_forms > 0 ) : ?>
				<p>
					<?php
					echo esc_html(
						sprintf(
							/* translators: %d: number of hidden forms */
							__( 'Plus %d more form(s) that should be reviewed.', 'jet-form-builder' ),
							$more_forms
						)
					);
					?>
				</p>
			<?php endif; ?>
			<p>
				<a href="<?php echo esc_url( admin_url( 'edit.php?post_type=' . Post_Type_Module::SLUG ) ); ?>" class="button button-primary">
					<?php esc_html_e( 'Review Forms', 'jet-form-builder' ); ?>
				</a>
				<a href="<?php echo esc_url( $dismiss_url ); ?>" class="button button-secondary">
					<?php esc_html_e( 'Dismiss', 'jet-form-builder' ); ?>
				</a>
			</p>
		</div>
		<?php
	}

	private function scan_affected_forms(): array {
		$form_ids = get_posts(
			array(
				'post_type'              => Post_Type_Module::SLUG,
				'post_status'            => array( 'publish', 'draft', 'pending', 'future', 'private' ),
				'posts_per_page'         => -1,
				'fields'                 => 'ids',
				'orderby'                => 'ID',
				'order'                  => 'ASC',
				'no_found_rows'          => true,
				'update_post_meta_cache' => false,
				'update_post_term_cache' => false,
			)
		);

		$affected_forms = array();

		foreach ( $form_ids as $form_id ) {
			$issues = $this->get_form_issues( $form_id );

			if ( empty( $issues ) ) {
				continue;
			}

			$affected_forms[] = array(
				'id'        => (int) $form_id,
				'title'     => get_the_title( $form_id ) ?: sprintf(
					/* translators: %d: form ID */
					__( 'Form #%d', 'jet-form-builder' ),
					$form_id
				),
				'edit_link' => get_edit_post_link( $form_id, 'raw' ) ?: admin_url( 'post.php?post=' . absint( $form_id ) . '&action=edit' ),
				'issues'    => array_values( array_unique( $issues ) ),
			);
		}

		return $affected_forms;
	}

	private function get_form_issues( int $form_id ): array {
		$actions = jet_form_builder()->post_type->get_actions( $form_id );
		$issues  = array();

		foreach ( $actions as $action ) {
			if ( 'update_user' !== ( $action['type'] ?? '' ) ) {
				continue;
			}

			$issues = array_merge( $issues, $this->get_update_user_action_issues( $action ) );
		}

		return array_values( array_unique( $issues ) );
	}

	private function get_update_user_action_issues( array $action ): array {
		$settings        = $action['settings']['update_user'] ?? $action['settings'] ?? array();
		$fields_map      = $settings['fields_map'] ?? array();
		$mapped_values   = array_map( 'strval', array_values( (array) $fields_map ) );
		$static_roles    = array_values(
			array_filter(
				array_map(
					'strval',
					Tools::get_array_of_user_roles( $settings['user_role'] ?? array() )
				)
			)
		);
		$allowed_roles   = $this->get_self_promotable_roles();
		$issues          = array();

		if ( in_array( 'role', $mapped_values, true ) ) {
			$issues[] = __(
				'maps a form field to the user role, so self-service role changes now depend on the global Self-Promotable Roles list',
				'jet-form-builder'
			);
		}

		if ( empty( $static_roles ) ) {
			return $issues;
		}

		$outside_allowlist = array_values( array_diff( $static_roles, $allowed_roles ) );

		if ( ! empty( $outside_allowlist ) ) {
			$issues[] = __(
				'assigns static User Role values outside the global Self-Promotable Roles list, so they may be skipped for users without the promote_users capability',
				'jet-form-builder'
			);
		}

		return $issues;
	}

	private function get_self_promotable_roles(): array {
		$options = Tab_Handler_Manager::get_options( 'options-tab' );
		$roles   = Tools::get_array_of_user_roles( $options['self_promotable_roles'] ?? array() );

		return array_values(
			array_filter(
				array_map( 'strval', $roles )
			)
		);
	}

	private function get_scan_version(): string {
		return jet_form_builder()->get_version() . ':' . self::SCAN_SCHEMA_VERSION;
	}
}
