<?php


namespace JFB_Modules\Validation\Advanced_Rules;

use Jet_Form_Builder\Blocks\Block_Helper;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Builds and stores the allowlist of function names that the "Server-Side callback"
 * validation rule (`Server_Side_Rule`) is permitted to invoke via `call_user_func()`.
 *
 * The list is collected from function names actually configured in saved forms and
 * their reusable blocks. Only trusted saved content participates in collection. Saves
 * by capable editors refresh the derived list immediately; programmatic saves invalidate
 * it so the next request can safely re-collect from the new saved content.
 *
 * Storage is per-form (post meta on the form itself), not a single site-wide list —
 * a function name typed into form A never becomes callable from form B just because
 * both happen to be edited by users who share the (already admin-gated) capability to
 * save a `jet-form-builder` post. `OPTION_KEY` remains only as a legacy source for code
 * paths without a form identity. A valid form with missing meta is initialized lazily
 * from its own saved content and never inherits the site-wide union.
 *
 * @since 3.6.5.2
 * @since 3.6.5.3 Storage moved from a single global option to per-form post meta.
 */
class Ssr_Callback_Allowlist {

	const OPTION_KEY = 'jet_fb_ssr_allowed_callbacks';
	const META_KEY   = '_jfb_ssr_allowed_callbacks';

	const REBUILD_PROGRESS_OPTION = 'jet_fb_ssr_allowlist_rebuild_progress';
	const REBUILD_LOCK_TRANSIENT  = 'jet_fb_ssr_allowlist_rebuild_lock';
	const REBUILD_BATCH_SIZE      = 50;
	const REBUILD_AJAX_ACTION     = 'jet_form_builder_ssr_allowlist_rebuild';

	public function __construct() {
		add_action( 'save_post_jet-form-builder', array( $this, 'collect_on_save' ), 20, 2 );
		add_action( 'save_post_wp_block', array( $this, 'rebuild_on_reusable_save' ), 20, 2 );
		add_action( 'admin_enqueue_scripts', array( __CLASS__, 'enqueue_rebuild_runner' ) );
		add_action( 'wp_ajax_' . self::REBUILD_AJAX_ACTION, array( __CLASS__, 'process_rebuild_ajax' ) );
	}

	public function remove_hooks() {
		remove_action( 'save_post_jet-form-builder', array( $this, 'collect_on_save' ), 20 );
		remove_action( 'save_post_wp_block', array( $this, 'rebuild_on_reusable_save' ), 20 );
		remove_action( 'admin_enqueue_scripts', array( __CLASS__, 'enqueue_rebuild_runner' ) );
		remove_action( 'wp_ajax_' . self::REBUILD_AJAX_ACTION, array( __CLASS__, 'process_rebuild_ajax' ) );
	}

	/**
	 * @param int      $post_id
	 * @param \WP_Post $post
	 */
	public function collect_on_save( $post_id, $post ) {
		if (
			! $post instanceof \WP_Post ||
			wp_is_post_autosave( $post_id ) ||
			wp_is_post_revision( $post_id )
		) {
			return;
		}

		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			delete_post_meta( $post_id, self::META_KEY );

			return;
		}

		$found = self::collect_from_content( $post->post_content );

		update_post_meta( $post_id, self::META_KEY, $found );
	}

	/**
	 * Reusable blocks are resolved by the runtime validation pipeline. When one changes,
	 * every per-form allowlist is potentially stale, so invalidate the derived state. A
	 * capable editor also starts a fresh bounded rebuild; programmatic updates rely on safe
	 * lazy initialization. Forms remain protected while the remaining batches are pending.
	 *
	 * @param int      $post_id
	 * @param \WP_Post $post
	 */
	public function rebuild_on_reusable_save( $post_id, $post ) {
		if (
			! $post instanceof \WP_Post ||
			wp_is_post_autosave( $post_id ) ||
			wp_is_post_revision( $post_id )
		) {
			return;
		}

		delete_post_meta_by_key( self::META_KEY );
		delete_option( self::OPTION_KEY );
		delete_option( self::REBUILD_PROGRESS_OPTION );

		if ( ! current_user_can( 'edit_post', $post_id ) ) {
			return;
		}

		self::start_rebuild();
	}

	/**
	 * Parses the given form `post_content`, including referenced reusable blocks, and
	 * returns every function name configured as the "value" of an SSR ('ssr') validation
	 * rule, excluding names that:
	 * - resolve to one of the built-in callbacks (those never reach `call_user_func()`);
	 * - are on the `NOT_ALLOWED` denylist (they can never pass validation anyway, so
	 *   storing them here is pure noise that makes the stored allowlist confusing to
	 *   audit — the denylist is still enforced independently at validation time);
	 * - do not resolve to an existing function at collection time.
	 *
	 * @param string $post_content
	 *
	 * @return string[] Lowercased, de-duplicated function names.
	 */
	public static function collect_from_content( string $post_content ): array {
		if ( '' === trim( $post_content ) ) {
			return array();
		}

		$found  = array();
		$blocks = Block_Helper::get_blocks_from_content( $post_content );

		foreach ( Block_Helper::generate_blocks_in_space( $blocks ) as $block ) {
			$rules = $block['attrs']['validation']['rules'] ?? array();

			foreach ( $rules as $rule ) {
				if ( 'ssr' !== ( $rule['type'] ?? '' ) ) {
					continue;
				}

				$name = self::sanitize_callback_name( (string) ( $rule['value'] ?? '' ) );

				if (
					'' === $name ||
					in_array( $name, Server_Side_Rule::NOT_ALLOWED, true ) ||
					Server_Side_Rule::is_builtin_callback( $name ) ||
					! function_exists( $name )
				) {
					continue;
				}

				$found[ $name ] = true;
			}
		}

		return array_keys( $found );
	}

	/**
	 * Keeps only syntactically-valid function names. Existence is checked separately in
	 * `collect_from_content()` after normalization.
	 */
	private static function sanitize_callback_name( string $function_name ): string {
		$name = preg_replace( '/[^\w]/i', '', $function_name );

		if ( '' === $name || $name !== $function_name ) {
			return '';
		}

		return strtolower( $name );
	}

	/**
	 * Allowed callbacks for one specific form. A valid form without per-form meta is
	 * initialized lazily from its already-saved post content. This keeps existing custom
	 * SSR validation working immediately after an unattended/CLI update, before an admin
	 * request has had a chance to run the background backfill. The submitted value never
	 * participates in collection, and the normal denylist/function-existence checks still
	 * apply, so this compatibility path does not widen the trust boundary.
	 *
	 * `OPTION_KEY` is used only when there is no form identity at all. A valid form never
	 * inherits the site-wide union: its own saved configuration is authoritative, including
	 * an explicitly empty callback list.
	 *
	 * @since 3.6.5.3
	 *
	 * @param int $form_id
	 *
	 * @return string[] Lowercased function names allowed for this form.
	 */
	public static function get_allowed_callbacks_for_form( int $form_id ): array {
		if ( ! $form_id ) {
			return self::get_legacy_global_callbacks();
		}

		if ( ! metadata_exists( 'post', $form_id, self::META_KEY ) ) {
			$post = get_post( $form_id );

			if ( ! $post instanceof \WP_Post || 'jet-form-builder' !== $post->post_type ) {
				return array();
			}

			$found = self::collect_from_content( $post->post_content );

			if ( ! add_post_meta( $form_id, self::META_KEY, $found, true ) ) {
				$stored = get_post_meta( $form_id, self::META_KEY, true );

				return is_array( $stored ) ? $stored : array();
			}

			return $found;
		}

		$stored = get_post_meta( $form_id, self::META_KEY, true );

		return is_array( $stored ) ? $stored : array();
	}

	/**
	 * Re-collects a form's allowlist from its current saved content.
	 *
	 * This is used after a runtime allowlist miss for a callback that exists now but
	 * was unavailable when the form was migrated or last saved. The submitted callback
	 * name never participates in collection, so only names already present in trusted
	 * saved form content can be promoted.
	 *
	 * @since 3.6.5.3
	 *
	 * @param int $form_id
	 *
	 * @return string[] Lowercased function names allowed for this form.
	 */
	public static function refresh_allowed_callbacks_for_form( int $form_id ): array {
		if ( ! $form_id ) {
			return array();
		}

		$post = get_post( $form_id );

		if ( ! $post instanceof \WP_Post || 'jet-form-builder' !== $post->post_type ) {
			return array();
		}

		$found = self::collect_from_content( $post->post_content );

		update_post_meta( $form_id, self::META_KEY, $found );

		return $found;
	}

	/**
	 * @since 3.6.5.2
	 * @deprecated 3.6.5.3 Use `get_allowed_callbacks_for_form()`. Kept only for code paths
	 *             without a form identity, and as the final aggregate written by the
	 *             background backfill.
	 *
	 * @return string[] Lowercased function names collected from saved forms so far.
	 */
	public static function get_legacy_global_callbacks(): array {
		$stored = get_option( self::OPTION_KEY, array() );

		return is_array( $stored ) ? $stored : array();
	}

	/**
	 * Starts a bounded backfill of per-form meta. The first batch is processed synchronously
	 * by the migration; a capable admin page then runs the remaining batches as a sequence
	 * of short AJAX requests. The last processed post ID and collected legacy callbacks are
	 * persisted in `REBUILD_PROGRESS_OPTION`. The backfill deliberately does not depend on
	 * WP-Cron.
	 *
	 * Correctness does not depend on this scan completing: `get_allowed_callbacks_for_form()`
	 * initializes any not-yet-processed form from its own saved content on first use. The
	 * background scan only warms all forms ahead of time and refreshes the legacy global
	 * option for code paths without a form identity.
	 *
	 * Logs (via `error_log()`, gated on `WP_DEBUG`) which forms/functions were
	 * grandfathered in, so a site owner can audit what an upgrade silently allowed —
	 * the migration itself cannot tell whether a historically-saved function name is
	 * actually safe, only that some editor with form-edit rights typed it once.
	 *
	 * @since 3.6.5.2
	 * @since 3.6.5.3 Also writes per-form meta, not just the legacy global option.
	 */
	public static function rebuild_from_all_forms() {
		self::start_rebuild();
	}

	/**
	 * Creates progress state once and processes one bounded batch immediately.
	 * Existing progress is resumed rather than reset, so retries never restart at form #1.
	 *
	 * @param int $batch_size Primarily exposed for deterministic tests.
	 */
	public static function start_rebuild( int $batch_size = self::REBUILD_BATCH_SIZE ) {
		if ( false === get_option( self::REBUILD_PROGRESS_OPTION, false ) ) {
			update_option(
				self::REBUILD_PROGRESS_OPTION,
				array(
					'last_id'   => 0,
					'callbacks' => array(),
				),
				false
			);
		}

		self::process_rebuild_batch( $batch_size );
	}

	/**
	 * Starts the browser-side runner for an incomplete backfill.
	 *
	 * Each request processes one bounded batch. A short pause between requests prevents the
	 * migration from monopolizing PHP workers. Closing the page merely pauses the process;
	 * the persisted cursor lets the next capable admin page resume it.
	 */
	public static function enqueue_rebuild_runner() {
		if (
			false === get_option( self::REBUILD_PROGRESS_OPTION, false ) ||
			! current_user_can( 'manage_options' )
		) {
			return;
		}

		wp_enqueue_script( 'jquery' );

		$config = wp_json_encode(
			array(
				'url'    => admin_url( 'admin-ajax.php' ),
				'action' => self::REBUILD_AJAX_ACTION,
				'nonce'  => wp_create_nonce( self::REBUILD_AJAX_ACTION ),
				'delay'  => 1000,
			)
		);

		$script = "(function($,config){\n" .
			"\tfunction runBatch(){\n" .
			"\t\t$.post(config.url,{action:config.action,nonce:config.nonce})\n" .
			"\t\t\t.done(function(response){\n" .
			"\t\t\t\tif(response.success && !response.data.complete){\n" .
			"\t\t\t\t\twindow.setTimeout(runBatch,config.delay);\n" .
			"\t\t\t\t}\n" .
			"\t\t\t});\n" .
			"\t}\n" .
			"\twindow.setTimeout(runBatch,config.delay);\n" .
			'})(jQuery,' . $config . ');';

		wp_add_inline_script( 'jquery-core', $script );
	}

	/**
	 * Processes one browser-requested batch and reports whether the backfill is complete.
	 */
	public static function process_rebuild_ajax() {
		check_ajax_referer( self::REBUILD_AJAX_ACTION, 'nonce' );

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( array( 'message' => 'Forbidden' ), 403 );
		}

		wp_send_json_success(
			array(
				'complete' => self::process_rebuild_batch(),
			)
		);
	}

	/**
	 * Processes at most one batch and persists a stable ID cursor before yielding.
	 *
	 * @param int $batch_size Primarily exposed for deterministic tests.
	 *
	 * @return bool True when the backfill is complete.
	 */
	public static function process_rebuild_batch( int $batch_size = self::REBUILD_BATCH_SIZE ): bool {
		$progress = get_option( self::REBUILD_PROGRESS_OPTION, false );

		if ( ! is_array( $progress ) ) {
			return true;
		}

		$batch_size = max( 1, min( 200, $batch_size ) );

		if ( get_transient( self::REBUILD_LOCK_TRANSIENT ) ) {
			return false;
		}

		set_transient( self::REBUILD_LOCK_TRANSIENT, 1, MINUTE_IN_SECONDS * 5 );

		try {
			$last_id      = max( 0, (int) ( $progress['last_id'] ?? 0 ) );
			$callbacks    = array_fill_keys( (array) ( $progress['callbacks'] ?? array() ), true );
			$form_ids     = self::get_rebuild_form_ids( $last_id, $batch_size );
			$processed_id = $last_id;

			foreach ( $form_ids as $form_id ) {
				$processed_id = max( $processed_id, $form_id );

				if ( metadata_exists( 'post', $form_id, self::META_KEY ) ) {
					$stored = get_post_meta( $form_id, self::META_KEY, true );
					$found  = is_array( $stored ) ? $stored : array();
				} else {
					$post = get_post( $form_id );

					if ( ! $post instanceof \WP_Post ) {
						continue;
					}

					$found = self::collect_from_content( $post->post_content );

					if ( ! add_post_meta( $form_id, self::META_KEY, $found, true ) ) {
						$stored = get_post_meta( $form_id, self::META_KEY, true );
						$found  = is_array( $stored ) ? $stored : array();
					}
				}

				if ( defined( 'WP_DEBUG' ) && WP_DEBUG && ! empty( $found ) ) {
					error_log( // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
						sprintf(
							'[jet-form-builder] SSR allowlist migration: form #%d grandfathered callbacks: %s',
							$form_id,
							implode( ', ', $found )
						)
					);
				}

				foreach ( $found as $name ) {
					$callbacks[ $name ] = true;
				}
			}

			if ( count( $form_ids ) < $batch_size ) {
				update_option( self::OPTION_KEY, array_values( array_keys( $callbacks ) ), false );
				delete_option( self::REBUILD_PROGRESS_OPTION );

				return true;
			}

			update_option(
				self::REBUILD_PROGRESS_OPTION,
				array(
					'last_id'   => $processed_id,
					'callbacks' => array_values( array_keys( $callbacks ) ),
				),
				false
			);

			return false;
		} finally {
			delete_transient( self::REBUILD_LOCK_TRANSIENT );
		}
	}

	/**
	 * @return int[] Form post IDs ordered after the persisted cursor.
	 * @throws \RuntimeException When WordPress cannot read the next migration batch.
	 */
	private static function get_rebuild_form_ids( int $last_id, int $limit ): array {
		global $wpdb;

		$form_ids = $wpdb->get_col( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
			$wpdb->prepare(
				"SELECT ID FROM {$wpdb->posts}
				WHERE post_type = %s
				AND post_status IN ('publish', 'draft', 'pending', 'private', 'future')
				AND ID > %d
				ORDER BY ID ASC
				LIMIT %d",
				'jet-form-builder',
				$last_id,
				$limit
			)
		);

		if ( $wpdb->last_error ) {
			throw new \RuntimeException( esc_html( $wpdb->last_error ) );
		}

		return array_map( 'intval', $form_ids );
	}

}
