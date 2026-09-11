<?php


namespace JFB_Modules\Validation\Ssr;

use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use JFB_Modules\Validation\Advanced_Rules\Ssr_Callback_Registry;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Persistent admin notice shown after `Migrations\Versions\Version_3_6_5_3` imports one
 * or more legacy static SSR callback names into the global `Ssr_Callback_Registry` as
 * pending, unapproved entries, so every admin gets a chance to review them. These names
 * are not yet callable — only created when the import list is non-empty. Dismissal is
 * recorded per-admin (`update_user_meta`), matching
 * `JFB_Modules\Security\Restricted_Preset_Notice`.
 *
 * The notice never prints the imported function names itself, only a count: a large legacy
 * site can import dozens of names, and the settings tab (not an admin notice) is the right
 * place to read them one by one. It also reads the *current* pending count from
 * `Ssr_Callback_Registry::get_pending_callbacks()` rather than the frozen import-time list, so
 * it reflects review progress and disappears once every imported name has been approved or
 * rejected, instead of continuing to reference an import list the admin already dealt with.
 *
 * @since 3.6.5.3
 */
class Ssr_Registry_Migration_Notice {

	const NOTICE_OPTION    = 'jet_fb_ssr_registry_migration_notice';
	const DISMISS_META_KEY = 'jet_fb_ssr_registry_migration_notice_dismissed';

	public function init_hooks() {
		if ( ! is_admin() ) {
			return;
		}

		add_action( 'admin_init', array( $this, 'maybe_dismiss_notice' ) );
		add_action( 'admin_notices', array( $this, 'render_notice' ) );
	}

	public function remove_hooks() {
		remove_action( 'admin_init', array( $this, 'maybe_dismiss_notice' ) );
		remove_action( 'admin_notices', array( $this, 'render_notice' ) );
	}

	/**
	 * @param string[] $imported Lowercased function names imported by the migration.
	 */
	public static function mark_imported( array $imported ) {
		if ( empty( $imported ) ) {
			return;
		}

		update_option(
			self::NOTICE_OPTION,
			array(
				'token'    => wp_generate_uuid4(),
				'imported' => array_values( $imported ),
			),
			false
		);
	}

	public static function clear() {
		delete_option( self::NOTICE_OPTION );
	}

	/**
	 * Handles notice dismissal before wp-admin starts rendering markup, so the redirect
	 * can reliably send its Location header.
	 */
	public function maybe_dismiss_notice() {
		if (
			! current_user_can( 'manage_options' ) ||
			! isset( $_GET['jet_fb_dismiss_ssr_registry_notice'] ) // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		) {
			return;
		}

		$notice = get_option( self::NOTICE_OPTION, array() );

		if (
			empty( $notice['imported'] ) ||
			empty( $notice['token'] ) ||
			$this->is_dismissed( (string) $notice['token'] )
		) {
			return;
		}

		check_admin_referer( 'jet_fb_dismiss_ssr_registry_notice' );

		update_user_meta( get_current_user_id(), self::DISMISS_META_KEY, (string) $notice['token'] );

		wp_safe_redirect( remove_query_arg( array( 'jet_fb_dismiss_ssr_registry_notice', '_wpnonce' ) ) );
		exit;
	}

	public function render_notice() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		$notice = get_option( self::NOTICE_OPTION, array() );

		if ( empty( $notice['imported'] ) || empty( $notice['token'] ) ) {
			return;
		}

		if ( $this->is_dismissed( (string) $notice['token'] ) ) {
			return;
		}

		$pending_count = count( Ssr_Callback_Registry::get_pending_callbacks() );

		// Every imported name has already been approved or rejected on the settings tab:
		// nothing left to review, so stop showing a notice that would otherwise keep
		// pointing at an import list the admin already dealt with.
		if ( 0 === $pending_count ) {
			return;
		}

		$settings_url = Pages_Manager::instance()->get_stable_url( 'jfb-settings' ) . '#ssr-callbacks-tab';
		$dismiss_url  = wp_nonce_url(
			add_query_arg( 'jet_fb_dismiss_ssr_registry_notice', '1' ),
			'jet_fb_dismiss_ssr_registry_notice'
		);

		?>
		<div class="notice notice-warning">
			<p>
				<strong><?php esc_html_e( 'JetFormBuilder - Review Allowed Server-Side Callbacks', 'jet-form-builder' ); ?></strong>
			</p>
			<p>
				<?php
				echo esc_html(
					sprintf(
						/* translators: %d: number of custom "Server-Side callback" function names awaiting review. */
						_n(
							'While updating, %d custom "Server-Side callback" function name already used in your existing forms was found and queued for review. It is not yet active — forms relying on it will not pass server-side validation until you approve it.',
							'While updating, %d custom "Server-Side callback" function names already used in your existing forms were found and queued for review. They are not yet active — forms relying on them will not pass server-side validation until you approve them.',
							$pending_count,
							'jet-form-builder'
						),
						$pending_count
					)
				);
				?>
			</p>
			<p>
				<?php esc_html_e( 'Please review the pending callbacks and approve anything that should be allowed to run.', 'jet-form-builder' ); ?>
			</p>
			<p>
				<a href="<?php echo esc_url( $settings_url ); ?>" class="button button-primary">
					<?php esc_html_e( 'Review Pending Callbacks', 'jet-form-builder' ); ?>
				</a>
				<a href="<?php echo esc_url( $dismiss_url ); ?>" class="button button-secondary">
					<?php esc_html_e( 'Dismiss', 'jet-form-builder' ); ?>
				</a>
			</p>
		</div>
		<?php
	}

	private function is_dismissed( string $token ): bool {
		$dismissed = (string) get_user_meta( get_current_user_id(), self::DISMISS_META_KEY, true );

		return '' !== $dismissed && $dismissed === $token;
	}

}
