<?php

namespace JFB_Modules\Security;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * One-time admin notice: forms now carry a signed post context. Pages cached
 * before the update have no signature, so forms that read the current post on
 * the server may ask visitors to reload the page until the page cache is
 * refreshed.
 *
 * The notice only explains the change; it deliberately does not scan forms,
 * so updating across many releases never runs a pile of per-fix scanners.
 * JetFormBuilder does not clear caches itself. Shown to users who can
 * manage_options until each of them dismisses it.
 */
class Post_Context_Cache_Notice {

	const VERSION          = '1';
	const DISMISS_META_KEY = 'jet_fb_post_context_cache_notice_dismissed';
	const NOTICE_QUERY_ARG = 'jet_fb_dismiss_post_context_notice';

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

	public function maybe_dismiss_notice() {
		if ( ! current_user_can( 'manage_options' ) || empty( $_GET[ self::NOTICE_QUERY_ARG ] ) ) {
			return;
		}

		check_admin_referer( self::NOTICE_QUERY_ARG );
		update_user_meta( get_current_user_id(), self::DISMISS_META_KEY, self::VERSION );

		wp_safe_redirect( remove_query_arg( array( self::NOTICE_QUERY_ARG, '_wpnonce' ) ) );
		exit;
	}

	public function render_notice() {
		if ( ! current_user_can( 'manage_options' ) || $this->is_dismissed() ) {
			return;
		}

		$dismiss_url = wp_nonce_url( add_query_arg( self::NOTICE_QUERY_ARG, '1' ), self::NOTICE_QUERY_ARG );

		?>
		<div class="notice notice-warning">
			<p>
				<strong><?php esc_html_e( 'JetFormBuilder - Security Update: Clear the Page Cache', 'jet-form-builder' ); ?></strong>
			</p>
			<p>
				<?php esc_html_e( 'Forms now confirm the page they were shown on. Pages cached before this update do not have this confirmation, so forms that use the current post data on the server (Hidden Field with "Render in HTML" turned off and a Current Post or Post Author value) may ask visitors to reload the page until the cache is refreshed. Other forms are not affected.', 'jet-form-builder' ); ?>
			</p>
			<p>
				<strong><?php esc_html_e( 'Action required:', 'jet-form-builder' ); ?></strong>
				<?php esc_html_e( 'Clear the page cache of your caching plugin, CDN (for example, Cloudflare) and hosting.', 'jet-form-builder' ); ?>
			</p>
			<p>
				<a href="<?php echo esc_url( $dismiss_url ); ?>" class="button button-secondary">
					<?php esc_html_e( 'Got it, dismiss', 'jet-form-builder' ); ?>
				</a>
			</p>
		</div>
		<?php
	}

	private function is_dismissed(): bool {
		return self::VERSION === (string) get_user_meta( get_current_user_id(), self::DISMISS_META_KEY, true );
	}
}
