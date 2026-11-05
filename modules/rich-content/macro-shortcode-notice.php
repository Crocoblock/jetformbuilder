<?php

namespace JFB_Modules\Rich_Content;

use JFB_Modules\Post_Type\Module as Post_Type_Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * One-time, informational notice for the issues-tracker #20703 hardening:
 * explains, once per administrator, how a submitted value that contains
 * shortcode syntax is handled now in Send Email, Call Webhook, Redirect To
 * Page and the Media field limits.
 *
 * Deliberately not tied to individual submissions: a blocked attempt is
 * almost always someone probing the form, which the admin cannot act on, so
 * reporting every attempt would only be noise (and would mean writing to
 * the database from unauthenticated requests). Shown only on sites that
 * have at least one form, until the administrator dismisses it.
 *
 * @since 3.6.8
 */
class Macro_Shortcode_Notice {

	const DISMISS_META_KEY = 'jet_fb_macro_shortcode_notice_dismissed';
	const NOTICE_QUERY_ARG = 'jet_fb_dismiss_macro_shortcode_notice';

	/**
	 * Stored as the dismissal value; bump it to show a changed notice again.
	 */
	const NOTICE_VERSION = '1';

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

	public function render_notice() {
		if (
			! current_user_can( 'manage_options' ) ||
			$this->is_dismissed() ||
			! $this->has_forms()
		) {
			return;
		}

		$dismiss_url = wp_nonce_url(
			add_query_arg( self::NOTICE_QUERY_ARG, '1' ),
			self::NOTICE_QUERY_ARG
		);

		?>
		<div class="notice notice-info">
			<p>
				<strong><?php esc_html_e( 'JetFormBuilder: shortcodes typed into form fields are no longer executed', 'jet-form-builder' ); ?></strong>
			</p>
			<p>
				<?php
				printf(
					/* translators: 1: field macro example, e.g. %field_name%; 2: shortcode that uses a field macro, e.g. [gallery ids="%field_name%"] */
					esc_html__( 'Field macros such as %1$s in Send Email, Call Webhook, Redirect To Page and Media field limits work as before: the submitted value is inserted as text. Shortcodes you write in these settings yourself still run, including ones that use a field macro inside, for example %2$s.', 'jet-form-builder' ),
					esc_html( '%field_name%' ),
					esc_html( '[gallery ids="%field_name%"]' )
				);
				?>
			</p>
			<p>
				<?php esc_html_e( 'What changed: if a visitor types shortcode syntax, such as [gallery] or [audio src="..."], into a form field, it is no longer executed on your server. It now appears as plain text in the email, webhook or redirect URL. Nothing needs to be changed unless you relied on visitors\' input running as shortcodes.', 'jet-form-builder' ); ?>
			</p>
			<p>
				<a href="<?php echo esc_url( $dismiss_url ); ?>" class="button button-secondary">
					<?php esc_html_e( 'Dismiss', 'jet-form-builder' ); ?>
				</a>
			</p>
		</div>
		<?php
	}

	public function maybe_dismiss_notice() {
		if (
			! current_user_can( 'manage_options' ) ||
			empty( $_GET[ self::NOTICE_QUERY_ARG ] )
		) {
			return;
		}

		check_admin_referer( self::NOTICE_QUERY_ARG );

		update_user_meta( get_current_user_id(), self::DISMISS_META_KEY, self::NOTICE_VERSION );

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

	private function is_dismissed(): bool {
		return self::NOTICE_VERSION === (string) get_user_meta( get_current_user_id(), self::DISMISS_META_KEY, true );
	}

	/**
	 * A site without forms is not affected by the change.
	 *
	 * @return bool
	 */
	private function has_forms(): bool {
		return (bool) get_posts(
			array(
				'post_type'              => Post_Type_Module::SLUG,
				'post_status'            => array( 'publish', 'draft', 'pending', 'future', 'private' ),
				'posts_per_page'         => 1,
				'fields'                 => 'ids',
				'no_found_rows'          => true,
				'update_post_meta_cache' => false,
				'update_post_term_cache' => false,
			)
		);
	}
}
