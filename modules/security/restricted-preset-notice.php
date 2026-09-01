<?php

namespace JFB_Modules\Security;

use Jet_Form_Builder\Blocks\Block_Helper;
use JFB_Modules\Post_Type\Module as Post_Type_Module;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Finds forms affected by the issues-tracker #20359 hardening, in two
 * distinct ways:
 *
 * 1. Settings that never checked permissions before (validation rules, date
 *    min/max, conditional blocks, action conditions, dynamic value, and the
 *    rich-trusted value limits on Number/Range/Textarea/Media/Switcher) now
 *    do. A preset pointing at another user's post/user/term data silently
 *    resolves to an empty string - which does not blank a field on screen
 *    but *changes a decision*: `Equals` starts blocking the form,
 *    `Must contain characters` stops matching anything, a date loses its
 *    min/max, a conditional block flips, an action fires when it shouldn't.
 *    The form author can restore the old behaviour per preset by switching
 *    "Restrict access" off, but they have to know which forms to look at -
 *    hence this notice.
 *
 * 2. The form's own Preset settings (`_jf_preset`, General_Preset) reading a
 *    JetEngine Options Page with "Restrict access" switched off. That
 *    opt-out used to work for Options Page the same as for Post/User/Term,
 *    but Preset_Source_Options_Page now locks it unconditionally - the
 *    page's capability can gate site-wide secrets, not just data owned by
 *    the current visitor, so it must not be bypassable by a toggle. Unlike
 *    case 1, "switch Restrict access off" is NOT the fix here; the notice
 *    points these forms at the `can-read` filter instead.
 *
 * Presets that are safe for everyone anyway (query_var, which only reads the
 * visitor's own $_GET) are opted out automatically and never reported.
 *
 * Modelled on JFB_Modules\Gateways\Secure_Price_Notice.
 */
class Restricted_Preset_Notice {

	const SCAN_VERSION_OPTION = 'jet_fb_restricted_preset_scan_version';
	const NOTICE_OPTION       = 'jet_fb_restricted_preset_notice';
	const DISMISS_META_KEY    = 'jet_fb_restricted_preset_notice_dismissed';
	const NOTICE_QUERY_ARG    = 'jet_fb_dismiss_restricted_preset_notice';
	const SCAN_SCHEMA_VERSION = '2';
	const SCAN_BATCH_SIZE     = 30;

	/**
	 * Sources that read data belonging to some *other* object/user, i.e. the
	 * ones whose permission check can now turn a value into ''. `query_var`
	 * is deliberately absent: it only ever reads the caller's own $_GET.
	 */
	const RESTRICTED_SOURCES = array( 'post', 'user', 'term', 'option_page' );

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

		if ( get_option( self::SCAN_VERSION_OPTION, '' ) === $version ) {
			return;
		}

		$notice = get_option( self::NOTICE_OPTION, array() );

		$tracked_ids = array_values(
			array_unique(
				array_filter(
					array_map( 'intval', $notice['tracked_ids'] ?? array() )
				)
			)
		);

		// Re-scan only the forms already known to be affected, unless the
		// scan schema changed (then everything must be walked again).
		if (
			array_key_exists( 'tracked_ids', $notice )
			&& $this->notice_uses_current_scan_schema( $notice )
		) {
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
				<strong><?php esc_html_e( 'JetFormBuilder: review presets flagged by a recent security hardening.', 'jet-form-builder' ); ?></strong>
			</p>
			<p>
				<?php esc_html_e( 'Presets used in validation rules, value limits (Number/Range min-max-step, Textarea min-max length, Media file limits, Switcher active value), date limits, conditional blocks and action conditions now check whether the visitor is allowed to read the data they point at. Previously they did not. In the forms below such a preset reads data an anonymous visitor cannot access, so it will resolve to an empty value for them.', 'jet-form-builder' ); ?>
			</p>
			<p>
				<?php esc_html_e( 'This does not blank a visible field - it changes a decision: a rule may start blocking the form or stop matching, a limit or date may disappear, a conditional block may flip, or an action may run when it should not. Open each form, check the listed places, and if the data is meant to be public, switch "Restrict access" off on that preset.', 'jet-form-builder' ); ?>
			</p>
			<?php if ( $this->has_options_page_form( $notice['forms'] ) ) : ?>
				<p>
					<strong><?php esc_html_e( 'Exception: JetEngine Options Page.', 'jet-form-builder' ); ?></strong>
					<?php esc_html_e( 'Forms marked "Options Page preset" below cannot be fixed with "Restrict access" - that toggle no longer opens Options Page values, on purpose, because that capability can gate site-wide secrets rather than data owned by the current visitor. If a specific field is genuinely public (a region list, a phone number), allow just that field with the jet-form-builder/preset/options-page/can-read filter instead.', 'jet-form-builder' ); ?>
				</p>
			<?php endif; ?>
			<ul style="list-style: disc; margin-left: 1.5em;">
				<?php foreach ( $forms as $form ) : ?>
					<li>
						<a href="<?php echo esc_url( $form['edit_link'] ); ?>">
							<?php echo esc_html( $form['title'] ); ?>
						</a>
						<?php echo esc_html( ' (#' . $form['id'] . ')' ); ?>
						<?php if ( ! empty( $form['has_options_page'] ) ) : ?>
							<strong><?php esc_html_e( '(Options Page preset)', 'jet-form-builder' ); ?></strong>
						<?php endif; ?>:
						<?php echo esc_html( implode( '; ', $form['places'] ) ); ?>
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
		$has_options_page = false;
		$places = array_merge(
			$this->find_in_blocks( Block_Helper::get_blocks_by_post( $form_id, true, true ), '', $has_options_page ),
			$this->find_in_actions( $form_id, $has_options_page ),
			$this->find_in_general_preset( $form_id, $has_options_page )
		);

		$places = array_values( array_unique( $places ) );

		if ( empty( $places ) ) {
			return array();
		}

		return array(
			'id'               => $form_id,
			'title'            => get_the_title( $form_id ) ?: sprintf(
				/* translators: %d: form ID */
				__( 'Form #%d', 'jet-form-builder' ),
				$form_id
			),
			'edit_link'        => get_edit_post_link( $form_id, 'raw' ) ?: admin_url( 'post.php?post=' . absint( $form_id ) . '&action=edit' ),
			'places'           => array_slice( $places, 0, 6 ),
			'has_options_page' => $has_options_page,
		);
	}

	/**
	 * Walks the form's blocks looking for restricted presets in settings -
	 * NOT in a field's `default`, which has always been permission-checked
	 * and already exposes its own "Restrict access" toggle.
	 *
	 * @param array $blocks
	 * @param string $repeater
	 * @param bool $has_options_page
	 *
	 * @return string[] Human-readable "where" labels.
	 */
	private function find_in_blocks( array $blocks, string $repeater = '', bool &$has_options_page = false ): array {
		$places = array();

		foreach ( $blocks as $block ) {
			if ( ! is_array( $block ) ) {
				continue;
			}

			$attrs = is_array( $block['attrs'] ?? null ) ? $block['attrs'] : array();
			$name  = (string) ( $attrs['name'] ?? '' );
			$label = $name ?: Block_Helper::delete_namespace( $block['blockName'] ?? '' );

			if ( $repeater ) {
				$label = $repeater . ' > ' . $label;
			}

			// Advanced validation rules.
			$has_validation_rule = false;

			foreach ( $attrs['validation']['rules'] ?? array() as $rule ) {
				if ( is_array( $rule ) && $this->is_restricted_preset( $rule['value'] ?? '', $has_options_page ) ) {
					$has_validation_rule = true;
				}
			}

			if ( $has_validation_rule ) {
				$places[] = sprintf(
					/* translators: %s: field name */
					__( 'validation rule on "%s"', 'jet-form-builder' ),
					$label
				);
			}

			// Trusted-parsed attributes: date/time/datetime min-max (parsed via
			// Date_Tools::time_to_string(), already trusted) share the same
			// attribute names as Number/Range min-max-step, Textarea
			// minlength/maxlength, Media max_files/max_size and Switcher
			// value_active/calc_value_active (parsed via
			// Base::apply_attribute()'s `rich-trusted` branch). All of them
			// only matter here because each has its own "Restrict access"
			// toggle in the editor for the site owner to act on.
			$has_value_limit = false;

			foreach (
				array(
					'min',
					'max',
					'step',
					'minlength',
					'maxlength',
					'max_files',
					'max_size',
					'value_active',
					'calc_value_active',
				) as $limit
			) {
				if ( $this->is_restricted_preset( $attrs[ $limit ] ?? '', $has_options_page ) ) {
					$has_value_limit = true;
				}
			}

			if ( $has_value_limit ) {
				$places[] = sprintf(
					/* translators: %s: field name */
					__( 'value limits on "%s"', 'jet-form-builder' ),
					$label
				);
			}

			// Conditional block conditions.
			$has_block_condition = false;

			foreach ( $attrs['conditions'] ?? array() as $condition ) {
				if ( is_array( $condition ) && $this->is_restricted_preset( $condition['value'] ?? '', $has_options_page ) ) {
					$has_block_condition = true;
				}
			}

			if ( $has_block_condition ) {
				$places[] = __( 'conditional block', 'jet-form-builder' );
			}

			// Dynamic value groups.
			$has_dynamic_value = false;

			foreach ( $attrs['value']['groups'] ?? array() as $group ) {
				if ( ! is_array( $group ) ) {
					continue;
				}

				$found = $this->is_restricted_preset( $group['to_set'] ?? '', $has_options_page );

				foreach ( $group['conditions'] ?? array() as $condition ) {
					if ( is_array( $condition ) && $this->is_restricted_preset( $condition['value'] ?? '', $has_options_page ) ) {
						$found = true;
					}
				}

				if ( $found ) {
					$has_dynamic_value = true;
				}
			}

			if ( $has_dynamic_value ) {
				$places[] = sprintf(
					/* translators: %s: field name */
					__( 'dynamic value on "%s"', 'jet-form-builder' ),
					$label
				);
			}

			if ( ! empty( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) ) {
				$places = array_merge(
					$places,
					$this->find_in_blocks(
						$block['innerBlocks'],
						'repeater-field' === Block_Helper::delete_namespace( $block['blockName'] ?? '' )
							? $label
							: $repeater,
						$has_options_page
					)
				);
			}
		}

		return $places;
	}

	/**
	 * @param int $form_id
	 * @param bool $has_options_page
	 *
	 * @return string[]
	 */
	private function find_in_actions( int $form_id, bool &$has_options_page = false ): array {
		$places  = array();
		$actions = jet_form_builder()->post_type->get_actions( $form_id );

		if ( ! is_array( $actions ) ) {
			return $places;
		}

		foreach ( $actions as $action ) {
			if ( ! is_array( $action ) ) {
				continue;
			}

			$has_action_condition = false;

			foreach ( $action['conditions'] ?? array() as $condition ) {
				if ( is_array( $condition ) && $this->is_restricted_preset( $condition['default'] ?? '', $has_options_page ) ) {
					$has_action_condition = true;
				}
			}

			if ( $has_action_condition ) {
				$places[] = sprintf(
					/* translators: %s: action type */
					__( 'condition on action "%s"', 'jet-form-builder' ),
					(string) ( $action['type'] ?? __( 'unknown', 'jet-form-builder' ) )
				);
			}
		}

		return $places;
	}

	/**
	 * The form's own Preset settings (`_jf_preset` meta, `General_Preset`)
	 * are a different shape from the other places scanned here: not a JSON
	 * string embedded in a block attribute, but a decoded config array with
	 * its own top-level `restricted`/`from` keys, shared by every field the
	 * form maps in `fields_map`.
	 *
	 * Unlike the other scanned places, `restricted: false` here normally
	 * keeps working after #20359 - General_Preset is a trusted origin (see
	 * Base_Preset::trusts_restriction_flag_by_default()), so the toggle
	 * still does what its help text says for Post/User/Term sources. The
	 * one exception is `option_page`: Preset_Source_Options_Page locks the
	 * bypass unconditionally (allows_restriction_bypass() => false),
	 * because unlike Post/User/Term this capability isn't about owning a
	 * specific object - it can gate site-wide secrets. A form that relied
	 * on the toggle to publish an Options Page value needs to know that
	 * stopped working; nothing else in this method's scope does.
	 *
	 * @param int $form_id
	 * @param bool $has_options_page
	 *
	 * @return string[]
	 */
	private function find_in_general_preset( int $form_id, bool &$has_options_page = false ): array {
		$preset = jet_form_builder()->post_type->get_preset( $form_id );

		$opted_out = is_array( $preset )
			&& ! empty( $preset['enabled'] )
			&& 'option_page' === ( $preset['from'] ?? '' )
			&& array_key_exists( 'restricted', $preset )
			&& ! $preset['restricted'];

		if ( ! $opted_out ) {
			return array();
		}

		$has_options_page = true;

		$fields = array_keys( $preset['fields_map'] ?? array() );

		return array(
			sprintf(
				/* translators: %s: comma-separated field names */
				__( 'form Preset (Options Page) on: %s', 'jet-form-builder' ),
				$fields ? implode( ', ', $fields ) : __( 'unknown field', 'jet-form-builder' )
			),
		);
	}

	/**
	 * True when the value is a preset JSON whose result can change after the
	 * permission hardening. Owner-based sources are unaffected when the author
	 * opted out; Options Page is still affected because it disallows that
	 * bypass unconditionally.
	 *
	 * @param mixed $value
	 * @param bool $has_options_page
	 *
	 * @return bool
	 */
	private function is_restricted_preset( $value, bool &$has_options_page = false ): bool {
		if ( ! is_string( $value ) || false === strpos( $value, 'jet_preset' ) ) {
			return false;
		}

		$preset = json_decode( $value, true );

		if ( ! is_array( $preset ) || empty( $preset['jet_preset'] ) ) {
			return false;
		}

		$source = (string) ( $preset['from'] ?? '' );

		if ( ! in_array( $source, self::RESTRICTED_SOURCES, true ) ) {
			return false;
		}

		// Options Page no longer allows the restriction bypass, even for a
		// trusted admin-authored setting. It therefore remains affected when the
		// author previously saved `restricted: false` and needs source-specific
		// remediation in the notice.
		if ( 'option_page' === $source ) {
			$has_options_page = true;

			return true;
		}

		// For owner-based sources the author's trusted opt-out keeps working.
		return ! array_key_exists( 'restricted', $preset ) || $preset['restricted'];
	}

	private function get_scan_version(): string {
		return jet_form_builder()->get_version() . ':' . self::SCAN_SCHEMA_VERSION;
	}

	private function notice_uses_current_scan_schema( array $notice ): bool {
		$version = (string) ( $notice['version'] ?? '' );
		$suffix  = ':' . self::SCAN_SCHEMA_VERSION;

		return strlen( $version ) > strlen( $suffix )
			&& substr( $version, -strlen( $suffix ) ) === $suffix;
	}

	/**
	 * Whether any listed form contains an affected Options Page preset. The
	 * source is stored as machine-readable scan data instead of being inferred
	 * from a translated, potentially truncated presentation label.
	 *
	 * @param array $forms
	 *
	 * @return bool
	 */
	private function has_options_page_form( array $forms ): bool {
		foreach ( $forms as $form ) {
			if ( ! empty( $form['has_options_page'] ) ) {
				return true;
			}
		}

		return false;
	}

	private function get_dismiss_version(): string {
		return 'schema:' . self::SCAN_SCHEMA_VERSION;
	}

	private function is_notice_dismissed( array $notice ): bool {
		$dismissed = (string) get_user_meta( get_current_user_id(), self::DISMISS_META_KEY, true );

		if ( '' === $dismissed ) {
			return false;
		}

		return (
			$dismissed === $this->get_dismiss_version() ||
			$dismissed === (string) ( $notice['notice_token'] ?? $notice['version'] ?? '' )
		);
	}
}
