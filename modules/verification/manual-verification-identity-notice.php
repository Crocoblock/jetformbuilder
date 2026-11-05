<?php


namespace JFB_Modules\Verification;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * One-time admin notice for the issues-tracker #20720 hardening.
 *
 * "Verify manually" used to replay a held submission's actions as the
 * verifying admin, so every permission check inside them passed for the
 * admin. They now replay as the original submitter (logged out for a guest).
 *
 * The notice only explains the change; it deliberately does not scan forms,
 * so updating across many releases never runs a pile of per-fix scanners.
 * Shown to users who can manage_options until each of them dismisses it.
 */
class Manual_Verification_Identity_Notice {

	const DISMISS_META_KEY = 'jet_fb_manual_verification_identity_notice_dismissed';
	const NOTICE_QUERY_ARG = 'jet_fb_dismiss_manual_verification_identity_notice';
	const NOTICE_VERSION   = '1';

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
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if ( empty( $_GET[ self::NOTICE_QUERY_ARG ] ) ) {
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

	public function render_notice() {
		if ( ! current_user_can( 'manage_options' ) || $this->is_dismissed() ) {
			return;
		}

		$dismiss_url = wp_nonce_url(
			add_query_arg( self::NOTICE_QUERY_ARG, '1' ),
			self::NOTICE_QUERY_ARG
		);

		?>
		<div class="notice notice-warning">
			<p>
				<strong><?php esc_html_e( 'JetFormBuilder: "Verify manually" now runs form actions as the person who submitted the form', 'jet-form-builder' ); ?></strong>
			</p>
			<p>
				<strong><?php esc_html_e( 'Before:', 'jet-form-builder' ); ?></strong>
				<?php esc_html_e( 'when you approved a held submission with "Verify manually", its remaining actions ran with your administrator permissions. A submission could therefore change things its author was not allowed to touch, such as another user\'s account, including an administrator\'s.', 'jet-form-builder' ); ?>
			</p>
			<p>
				<strong><?php esc_html_e( 'Now:', 'jet-form-builder' ); ?></strong>
				<?php esc_html_e( 'the actions run as the original submitter (as a logged-out visitor for guest submissions), exactly as if they had confirmed the submission themselves. Approving a submission no longer gives it your permissions.', 'jet-form-builder' ); ?>
			</p>
			<p><strong><?php esc_html_e( 'What may stop working after approval:', 'jet-form-builder' ); ?></strong></p>
			<ul style="list-style: disc; margin-left: 1.5em;">
				<li><?php esc_html_e( 'Update User that edits an account other than the submitter\'s own. The submitter now needs permission to edit users.', 'jet-form-builder' ); ?></li>
				<li><?php esc_html_e( 'Insert/Update Post that updates an existing post the submitter did not write and cannot edit. Creating new posts still works; their author is now the submitter instead of the approving administrator.', 'jet-form-builder' ); ?></li>
				<li><?php esc_html_e( 'Insert/Update Term. The submitter now needs permission to manage terms of that taxonomy, which guests and subscribers usually do not have.', 'jet-form-builder' ); ?></li>
			</ul>
			<p>
				<?php esc_html_e( 'Register User keeps working: your approval still lets the registration through, and the new user\'s role comes from the form settings.', 'jet-form-builder' ); ?>
			</p>
			<p>
				<strong><?php esc_html_e( 'What to do:', 'jet-form-builder' ); ?></strong>
				<?php esc_html_e( 'if your forms with the Verification action only change the submitter\'s own account and content, nothing. Otherwise, allow such a form only for logged-in users who have the needed permissions, instead of relying on manual approval to grant them.', 'jet-form-builder' ); ?>
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
		return self::NOTICE_VERSION === (string) get_user_meta( get_current_user_id(), self::DISMISS_META_KEY, true );
	}
}
