<?php


namespace JFB_Modules\Media_Cleanup;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Persistent admin notice shown once, after `Migrations\Versions\Version_3_6_6` runs and
 * finds at least one pre-existing, plugin-uploaded attachment that was missing its
 * `_jfb_uploaded_by_form` / `_jfb_uploaded_by_user` ownership markers (issues-tracker
 * #20547 follow-up). Lets an admin who had this feature in production before the fix know
 * their existing Media field attachments were reconciled automatically and nothing needs
 * manual attention; an update with nothing to backfill shows no notice at all.
 *
 * Mirrors `JFB_Modules\Validation\Ssr\Ssr_Registry_Migration_Notice` (dismissal recorded
 * per-admin via `update_user_meta`, same lifecycle), simplified to a single count since
 * this migration has no "needs manual action" outcome to report alongside it.
 *
 * @since 3.6.6
 */
class Media_Ownership_Migration_Notice {

	const NOTICE_OPTION    = 'jet_fb_media_ownership_migration_notice';
	const DISMISS_META_KEY = 'jet_fb_media_ownership_migration_notice_dismissed';

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
	 * @param int $backfilled_count Number of pre-existing attachments that were given
	 *                              ownership markers by this migration.
	 */
	public static function mark_backfilled( int $backfilled_count ) {
		if ( $backfilled_count <= 0 ) {
			return;
		}

		update_option(
			self::NOTICE_OPTION,
			array(
				'token'             => wp_generate_uuid4(),
				'backfilled_count'  => $backfilled_count,
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
			! isset( $_GET['jet_fb_dismiss_media_ownership_notice'] ) // phpcs:ignore WordPress.Security.NonceVerification.Recommended
		) {
			return;
		}

		$notice = get_option( self::NOTICE_OPTION, array() );

		if ( ! $this->has_content( $notice ) || $this->is_dismissed( (string) $notice['token'] ) ) {
			return;
		}

		check_admin_referer( 'jet_fb_dismiss_media_ownership_notice' );

		update_user_meta( get_current_user_id(), self::DISMISS_META_KEY, (string) $notice['token'] );

		wp_safe_redirect( remove_query_arg( array( 'jet_fb_dismiss_media_ownership_notice', '_wpnonce' ) ) );
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

		$backfilled_count = (int) ( $notice['backfilled_count'] ?? 0 );

		$dismiss_url = wp_nonce_url(
			add_query_arg( 'jet_fb_dismiss_media_ownership_notice', '1' ),
			'jet_fb_dismiss_media_ownership_notice'
		);

		?>
		<div class="notice notice-info">
			<p>
				<strong><?php esc_html_e( 'JetFormBuilder: Media Field Security Update', 'jet-form-builder' ); ?></strong>
			</p>
			<p>
				<?php
				echo '✅ ' . esc_html( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					sprintf(
						/* translators: %d: number of existing Media Library attachments reconciled. */
						_n(
							'%d existing Media Library attachment used by your forms was automatically reconciled with the new security check. No action needed.',
							'%d existing Media Library attachments used by your forms were automatically reconciled with the new security check. No action needed.',
							$backfilled_count,
							'jet-form-builder'
						),
						$backfilled_count
					)
				);
				?>
			</p>
			<p>
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

		return (int) ( $notice['backfilled_count'] ?? 0 ) > 0;
	}

	private function is_dismissed( string $token ): bool {
		$dismissed = (string) get_user_meta( get_current_user_id(), self::DISMISS_META_KEY, true );

		return '' !== $dismissed && $dismissed === $token;
	}

}
