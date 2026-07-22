<?php

namespace JFB_Modules\Gateways;

use JFB_Modules\Post_Type\Module as Post_Type_Module;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Secure_Price_Notice {

	const SCAN_VERSION_OPTION = 'jet_fb_secure_price_scan_version';
	const NOTICE_OPTION       = 'jet_fb_secure_price_notice';
	const DISMISS_META_KEY    = 'jet_fb_secure_price_notice_dismissed';
	const NOTICE_QUERY_ARG    = 'jet_fb_dismiss_secure_price_notice';
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

	public function remove_hooks() {
		remove_action( 'save_post_' . Post_Type_Module::SLUG, array( $this, 'invalidate_scan_cache' ) );
		remove_action( 'admin_init', array( $this, 'maybe_scan_affected_forms' ) );
		remove_action( 'admin_init', array( $this, 'maybe_dismiss_notice' ) );
		remove_action( 'admin_notices', array( $this, 'render_affected_forms_notice' ) );
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
		$notice  = get_option( self::NOTICE_OPTION, array() );

		if ( get_option( self::SCAN_VERSION_OPTION, '' ) === $version ) {
			return;
		}

		$tracked_ids = array_values(
			array_unique(
				array_filter(
					array_map( 'intval', $notice['tracked_ids'] ?? array() )
				)
			)
		);

		if ( array_key_exists( 'tracked_ids', $notice ) ) {
			$forms = empty( $tracked_ids )
				? array()
				: $this->scan_specific_forms( $tracked_ids );

			$this->save_scan( $version, $tracked_ids, $forms );

			return;
		}

		$forms       = $this->scan_affected_forms();
		$tracked_ids = array_values( array_unique( array_map( 'intval', wp_list_pluck( $forms, 'id' ) ) ) );

		$this->save_scan( $version, $tracked_ids, $forms );
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
			$this->get_dismiss_version()
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

		if ( $this->get_scan_version() !== $notice['version'] || $this->is_notice_dismissed( $notice ) ) {
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
				<strong><?php esc_html_e( 'JetFormBuilder: enable Secure payment amount for existing payment forms.', 'jet-form-builder' ); ?></strong>
			</p>
			<p>
				<?php esc_html_e( 'This update adds server-side payment amount validation, but it is disabled for existing forms to preserve compatibility. The forms below still trust the submitted amount, which visitors may be able to modify.', 'jet-form-builder' ); ?>
			</p>
			<p>
				<?php esc_html_e( 'Open each form, enable Secure payment amount in Gateways Settings, verify that its price source is supported, and test the payment flow. Unsupported client-controlled price sources will be rejected after protection is enabled.', 'jet-form-builder' ); ?>
			</p>
			<ul style="list-style: disc; margin-left: 1.5em;">
				<?php foreach ( $forms as $form ) : ?>
					<li>
						<a href="<?php echo esc_url( $form['edit_link'] ); ?>">
							<?php echo esc_html( $form['title'] ); ?>
						</a>
						<?php echo esc_html( ' (#' . $form['id'] . ')' ); ?>:
						<?php
						echo esc_html(
							sprintf(
								/* translators: %s: comma-separated payment gateway IDs */
								__( 'payment gateway(s): %s', 'jet-form-builder' ),
								implode( ', ', $form['gateways'] )
							)
						);
						?>
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

	private function save_scan( string $version, array $tracked_ids, array $forms ) {
		update_option( self::SCAN_VERSION_OPTION, $version, false );
		update_option(
			self::NOTICE_OPTION,
			array(
				'version'      => $version,
				'notice_token' => wp_generate_uuid4(),
				'tracked_ids'  => $tracked_ids,
				'forms'        => $forms,
			),
			false
		);
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
				$form = $this->get_affected_form( (int) $form_id );

				if ( $form ) {
					$affected_forms[] = $form;
				}
			}

			if ( count( $form_ids ) < self::SCAN_BATCH_SIZE ) {
				break;
			}

			$offset += self::SCAN_BATCH_SIZE;
		}

		return $affected_forms;
	}

	private function scan_specific_forms( array $form_ids ): array {
		$affected_forms = array();

		foreach ( $form_ids as $form_id ) {
			$form_id = (int) $form_id;

			if ( $form_id <= 0 || Post_Type_Module::SLUG !== get_post_type( $form_id ) ) {
				continue;
			}

			$form = $this->get_affected_form( $form_id );

			if ( $form ) {
				$affected_forms[] = $form;
			}
		}

		return $affected_forms;
	}

	private function get_affected_form( int $form_id ): array {
		$settings = jet_form_builder()->post_type->get_gateways( $form_id );
		$gateways = $this->get_active_gateways( $settings );

		if ( empty( $gateways ) || $this->is_price_protection_enabled( $settings ) ) {
			return array();
		}

		return array(
			'id'        => $form_id,
			'title'     => get_the_title( $form_id ) ?: sprintf(
				/* translators: %d: form ID */
				__( 'Form #%d', 'jet-form-builder' ),
				$form_id
			),
			'edit_link' => get_edit_post_link( $form_id, 'raw' ) ?: admin_url( 'post.php?post=' . absint( $form_id ) . '&action=edit' ),
			'gateways'  => $gateways,
		);
	}

	private function get_active_gateways( array $settings ): array {
		$gateways = array();

		if ( 'manual' === ( $settings['mode'] ?? 'single' ) ) {
			foreach ( $settings as $gateway_id => $gateway_settings ) {
				if (
					! is_string( $gateway_id ) ||
					! is_array( $gateway_settings ) ||
					! filter_var( $gateway_settings['show_on_front'] ?? false, FILTER_VALIDATE_BOOLEAN )
				) {
					continue;
				}

				$gateways[] = sanitize_key( $gateway_id );
			}
		} else {
			$gateway_id = is_string( $settings['gateway'] ?? null )
				? sanitize_key( $settings['gateway'] )
				: '';

			if ( $gateway_id && ! in_array( $gateway_id, array( 'none', 'manual' ), true ) ) {
				$gateways[] = $gateway_id;
			}
		}

		return array_values( array_unique( array_filter( $gateways ) ) );
	}

	private function is_price_protection_enabled( array $settings ): bool {
		return filter_var( $settings['protect_price_field'] ?? false, FILTER_VALIDATE_BOOLEAN );
	}

	private function get_scan_version(): string {
		return jet_form_builder()->get_version() . ':' . self::SCAN_SCHEMA_VERSION;
	}

	private function get_dismiss_version(): string {
		return 'schema:' . self::SCAN_SCHEMA_VERSION;
	}

	private function is_notice_dismissed( array $notice ): bool {
		$dismissed = (string) get_user_meta( get_current_user_id(), self::DISMISS_META_KEY, true );

		if ( '' === $dismissed ) {
			return false;
		}

		if (
			$dismissed === $this->get_dismiss_version() ||
			$dismissed === $this->get_notice_dismiss_token( $notice )
		) {
			return true;
		}

		// Older builds stored "<plugin-version>:<schema>" in user meta.
		$legacy_suffix = ':' . self::SCAN_SCHEMA_VERSION;

		return strlen( $dismissed ) > strlen( $legacy_suffix )
			&& $legacy_suffix === substr( $dismissed, -strlen( $legacy_suffix ) );
	}

	private function get_notice_dismiss_token( array $notice ): string {
		return (string) ( $notice['notice_token'] ?? $notice['version'] ?? '' );
	}
}
