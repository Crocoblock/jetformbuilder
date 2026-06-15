<?php

namespace JFB_Compatibility\Jet_Engine;

use JFB_Modules\Post_Type\Module as Post_Type_Module;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Update_Options_Notice {

	const SCAN_VERSION_OPTION = 'jet_fb_jet_engine_update_options_scan_version';
	const NOTICE_OPTION       = 'jet_fb_jet_engine_update_options_notice';
	const DISMISS_META_KEY    = 'jet_fb_jet_engine_update_options_notice_dismissed';
	const NOTICE_QUERY_ARG    = 'jet_fb_dismiss_jet_engine_update_options_notice';
	const SCAN_SCHEMA_VERSION = '1';
	const SCAN_BATCH_SIZE     = 30;

	public function init_hooks() {
		add_action( 'save_post_' . Post_Type_Module::SLUG, array( $this, 'invalidate_scan_cache' ) );

		if ( ! is_admin() ) {
			return;
		}

		add_action( 'admin_init', array( $this, 'maybe_scan_affected_forms' ) );
		add_action( 'admin_init', array( $this, 'maybe_dismiss_notice' ) );
		add_action( 'admin_notices', array( $this, 'render_affected_forms_notice' ) );
	}

	public function invalidate_scan_cache() {
		delete_option( self::SCAN_VERSION_OPTION );
	}

	public function maybe_scan_affected_forms() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if (
			wp_doing_ajax() ||
			wp_doing_cron() ||
			( defined( 'REST_REQUEST' ) && REST_REQUEST )
		) {
			return;
		}

		$version = $this->get_scan_version();

		if ( get_option( self::SCAN_VERSION_OPTION, '' ) === $version ) {
			return;
		}

		$forms = $this->scan_affected_forms();

		update_option( self::SCAN_VERSION_OPTION, $version, false );
		update_option(
			self::NOTICE_OPTION,
			array(
				'version'      => $version,
				'notice_token' => wp_generate_uuid4(),
				'forms'        => $forms,
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

		if ( $this->is_notice_dismissed( $notice ) ) {
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
				<strong><?php esc_html_e( 'JetFormBuilder: review JetEngine Update Options actions after this update.', 'jet-form-builder' ); ?></strong>
			</p>
			<p>
				<?php esc_html_e( 'JetEngine Update Options actions now require the manage_options capability before they can modify an Options Page. Review the forms below if you expected these updates to run for public or lower-privilege submissions.', 'jet-form-builder' ); ?>
			</p>
			<p>
				<?php esc_html_e( 'If you intentionally need a non-admin flow, replace this action with Call Hook and update the option in custom code where you can enforce your own capability and request validation rules.', 'jet-form-builder' ); ?>
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
				<a href="<?php echo esc_url( $dismiss_url ); ?>" class="button button-secondary">
					<?php esc_html_e( 'Dismiss', 'jet-form-builder' ); ?>
				</a>
			</p>
		</div>
		<?php
	}

	private function scan_affected_forms(): array {
		$affected_forms = array();
		$offset         = 0;

		while ( true ) {
			$form_ids = get_posts(
				array(
					'post_type'              => Post_Type_Module::SLUG,
					'post_status'            => array( 'publish', 'draft', 'pending', 'future', 'private' ),
					'posts_per_page'         => self::SCAN_BATCH_SIZE,
					'offset'                 => $offset,
					'fields'                 => 'ids',
					'orderby'                => 'ID',
					'order'                  => 'ASC',
					'no_found_rows'          => true,
					'update_post_meta_cache' => false,
					'update_post_term_cache' => false,
				)
			);

			if ( empty( $form_ids ) ) {
				break;
			}

			foreach ( $form_ids as $form_id ) {
				$issues = $this->get_form_issues( (int) $form_id );

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

			if ( count( $form_ids ) < self::SCAN_BATCH_SIZE ) {
				break;
			}

			$offset += self::SCAN_BATCH_SIZE;
		}

		return $affected_forms;
	}

	private function get_form_issues( int $form_id ): array {
		$actions = jet_form_builder()->post_type->get_actions( $form_id );
		$issues  = array();

		foreach ( $actions as $action ) {
			if ( 'update_options' !== ( $action['type'] ?? '' ) ) {
				continue;
			}

			$issues = array_merge( $issues, $this->get_update_options_action_issues( $action ) );
		}

		return array_values( array_unique( $issues ) );
	}

	private function get_update_options_action_issues( array $action ): array {
		$settings     = $action['settings']['update_options'] ?? $action['settings'] ?? array();
		$options_page = (string) ( $settings['options_page'] ?? '' );
		$issues       = array();

		if ( '' !== $options_page ) {
			$issues[] = __(
				'updates the JetEngine Options Page, which now requires manage_options during form submission',
				'jet-form-builder'
			);
		} else {
			$issues[] = __(
				'uses the JetEngine Update Options action, which now requires manage_options during form submission',
				'jet-form-builder'
			);
		}

		return $issues;
	}

	private function get_scan_version(): string {
		return jet_form_builder()->get_version() . ':' . self::SCAN_SCHEMA_VERSION;
	}

	private function is_notice_dismissed( array $notice ): bool {
		$dismissed = (string) get_user_meta( get_current_user_id(), self::DISMISS_META_KEY, true );

		if ( '' === $dismissed ) {
			return false;
		}

		if ( $dismissed === $this->get_scan_version() ) {
			return true;
		}

		return $dismissed === $this->get_notice_dismiss_token( $notice );
	}

	private function get_notice_dismiss_token( array $notice ): string {
		return (string) ( $notice['notice_token'] ?? $notice['version'] ?? '' );
	}
}
