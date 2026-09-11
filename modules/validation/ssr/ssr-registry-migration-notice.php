<?php


namespace JFB_Modules\Validation\Ssr;

use Jet_Form_Builder\Admin\Pages\Pages_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Persistent admin notice shown once, after `Migrations\Versions\Version_3_6_5_3` runs and
 * the migration found at least one custom "Server-Side callback" name already in use on
 * the site. It summarizes both migration outcomes in one place (issues-tracker #20361
 * follow-up):
 * - how many custom callback names were found safe and automatically kept allowed, so the
 *   admin knows those forms keep working without any action;
 * - how many forms use a callback name that is permanently denylisted and could not be
 *   restored, so the admin knows exactly how many forms need a manual fix and can jump
 *   straight to the settings tab to see which ones.
 *
 * Created only when the migration found something to report (`mark_imported()`); an update
 * with nothing relevant in any existing form shows no notice at all. Dismissal is recorded
 * per-admin (`update_user_meta`), matching `JFB_Modules\Security\Restricted_Preset_Notice`.
 *
 * The notice never prints the function/form names itself, only counts: a large legacy site
 * can restore dozens of names or flag dozens of forms, and the settings tab (not an admin
 * notice) is the right place to read and act on them one by one.
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
	 * @param string[] $imported     Lowercased function names automatically kept allowed.
	 * @param int      $blocked_forms_count Number of forms found using a denylisted callback
	 *                                      name that could not be restored.
	 */
	public static function mark_imported( array $imported, int $blocked_forms_count = 0 ) {
		if ( empty( $imported ) && $blocked_forms_count <= 0 ) {
			return;
		}

		update_option(
			self::NOTICE_OPTION,
			array(
				'token'               => wp_generate_uuid4(),
				'imported'            => array_values( $imported ),
				'blocked_forms_count' => max( 0, $blocked_forms_count ),
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

		if ( ! $this->has_content( $notice ) || $this->is_dismissed( (string) $notice['token'] ) ) {
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

		if ( ! $this->has_content( $notice ) || $this->is_dismissed( (string) $notice['token'] ) ) {
			return;
		}

		$imported_count = count( $notice['imported'] );
		$blocked_count  = (int) ( $notice['blocked_forms_count'] ?? 0 );

		$settings_url = Pages_Manager::instance()->get_stable_url( 'jfb-settings' ) . '#ssr-callbacks-tab';
		$dismiss_url  = wp_nonce_url(
			add_query_arg( 'jet_fb_dismiss_ssr_registry_notice', '1' ),
			'jet_fb_dismiss_ssr_registry_notice'
		);

		$notice_class = $blocked_count > 0 ? 'notice-warning' : 'notice-info';

		?>
		<div class="notice <?php echo esc_attr( $notice_class ); ?>">
			<p>
				<strong><?php esc_html_e( 'JetFormBuilder - Server-Side Callbacks Update Summary', 'jet-form-builder' ); ?></strong>
			</p>
			<?php if ( $imported_count > 0 ) : ?>
				<p>
					<?php
					echo esc_html(
						sprintf(
							/* translators: %d: number of custom "Server-Side callback" function names restored. */
							_n(
								'%d custom "Server-Side callback" function name already used in your existing forms was found safe and automatically kept allowed — those forms keep passing server-side validation, no action needed.',
								'%d custom "Server-Side callback" function names already used in your existing forms were found safe and automatically kept allowed — those forms keep passing server-side validation, no action needed.',
								$imported_count,
								'jet-form-builder'
							),
							$imported_count
						)
					);
					?>
				</p>
			<?php endif; ?>
			<?php if ( $blocked_count > 0 ) : ?>
				<p>
					<?php
					echo esc_html(
						sprintf(
							/* translators: %d: number of forms using a permanently blocked callback function. */
							_n(
								'%d form uses a "Server-Side callback" function that is never allowed to run for security reasons. It could not be restored — that form will keep failing server-side validation until you edit it and remove or replace the rule.',
								'%d forms use a "Server-Side callback" function that is never allowed to run for security reasons. They could not be restored — those forms will keep failing server-side validation until you edit them and remove or replace the rule.',
								$blocked_count,
								'jet-form-builder'
							),
							$blocked_count
						)
					);
					?>
				</p>
			<?php endif; ?>
			<p>
				<a href="<?php echo esc_url( $settings_url ); ?>" class="button button-primary">
					<?php esc_html_e( 'Open Settings', 'jet-form-builder' ); ?>
				</a>
				<a href="<?php echo esc_url( $dismiss_url ); ?>" class="button button-secondary">
					<?php esc_html_e( 'Dismiss', 'jet-form-builder' ); ?>
				</a>
			</p>
		</div>
		<?php
	}

	/**
	 * @param mixed $notice
	 */
	private function has_content( $notice ): bool {
		if ( ! is_array( $notice ) || empty( $notice['token'] ) ) {
			return false;
		}

		$has_imported = ! empty( $notice['imported'] );
		$has_blocked  = (int) ( $notice['blocked_forms_count'] ?? 0 ) > 0;

		return $has_imported || $has_blocked;
	}

	private function is_dismissed( string $token ): bool {
		$dismissed = (string) get_user_meta( get_current_user_id(), self::DISMISS_META_KEY, true );

		return '' !== $dismissed && $dismissed === $token;
	}

}
