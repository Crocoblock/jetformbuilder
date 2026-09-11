<?php


namespace JFB_Modules\Validation\Advanced_Rules;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Retired. This class used to build a per-form allowlist automatically from whatever
 * SSR callback name an editor typed into a saved form/reusable block. That self-service
 * model did not close the actual security gap (issues-tracker #20361): a form editor
 * saving a form was, in effect, the same act as approving a function for execution.
 *
 * Runtime validation (`Server_Side_Rule`) now sources its allowlist exclusively from
 * `Ssr_Callback_Registry`, a single site-wide list only a `manage_options` admin can
 * change via Settings. No hooks, AJAX endpoints, or lazy/autosave re-collection remain.
 *
 * This shell is kept only because `Migrations\Versions\Version_3_6_5_2` (a permanent,
 * already-shipped historical migration — including its `down()` path used by the
 * `wp jet-form-builder db-downgrade` WP-CLI command) still references these constants
 * and `rebuild_from_all_forms()`. Do not add new hooks or collection behavior here; new
 * code must use `Ssr_Callback_Registry` instead.
 *
 * @since 3.6.5.2
 * @since 3.6.5.3 Storage moved from a single global option to per-form post meta, then
 *                retired in favor of `Ssr_Callback_Registry` in the same release. Kept
 *                only for `Version_3_6_5_2` migration compatibility.
 */
class Ssr_Callback_Allowlist {

	const OPTION_KEY = 'jet_fb_ssr_allowed_callbacks';
	const META_KEY   = '_jfb_ssr_allowed_callbacks';

	const REBUILD_PROGRESS_OPTION     = 'jet_fb_ssr_allowlist_rebuild_progress';
	const REBUILD_LOCK_TRANSIENT      = 'jet_fb_ssr_allowlist_rebuild_lock';
	const REBUILD_BATCH_SIZE          = 50;
	const REBUILD_AJAX_ACTION         = 'jet_form_builder_ssr_allowlist_rebuild';
	const REBUILD_TIME_BUDGET_SECONDS = 15;

	/**
	 * Parses the given form `post_content`, including referenced reusable blocks, and
	 * returns every function name configured as the "value" of an SSR ('ssr') validation
	 * rule, excluding names that:
	 * - resolve to one of the built-in callbacks (those never reach `call_user_func()`);
	 * - are on the `NOT_ALLOWED` denylist;
	 * - do not resolve to an existing function at collection time.
	 *
	 * @since 3.6.5.2
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
		$blocks = \Jet_Form_Builder\Blocks\Block_Helper::get_blocks_from_content( $post_content );

		foreach ( \Jet_Form_Builder\Blocks\Block_Helper::generate_blocks_in_space( $blocks ) as $block ) {
			$rules = $block['attrs']['validation']['rules'] ?? array();

			foreach ( $rules as $rule ) {
				if ( 'ssr' !== ( $rule['type'] ?? '' ) ) {
					continue;
				}

				$name = Server_Side_Rule::sanitize_callback_name( (string) ( $rule['value'] ?? '' ) );

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
	 * Historical one-time backfill entry point used by `Version_3_6_5_2::up()`. Writes
	 * per-form meta and the legacy global option so a fresh/updated install lands in the
	 * same state it always has; this data is no longer read by runtime validation.
	 *
	 * Bounded to `REBUILD_TIME_BUDGET_SECONDS` per call so a large forms table cannot run
	 * past the request's `max_execution_time` inside `Auto_Migrator`'s DB transaction. When
	 * the budget is exceeded before the table is fully scanned, progress (cursor + partial
	 * callback accumulator) is persisted to `REBUILD_PROGRESS_OPTION` and this method
	 * throws so `Base_Migration::install()` never marks the migration installed; the next
	 * capable admin's `admin_init` request resumes from the persisted cursor.
	 *
	 * @since 3.6.5.2
	 *
	 * @throws \Jet_Form_Builder\Migrations\Migration_Incomplete_Exception When the time
	 *         budget is exceeded before the scan completes.
	 */
	public static function rebuild_from_all_forms() {
		global $wpdb;

		$progress  = get_option( self::REBUILD_PROGRESS_OPTION, array() );
		$callbacks = is_array( $progress ) && isset( $progress['callbacks'] ) && is_array( $progress['callbacks'] )
			? $progress['callbacks']
			: array();
		$last_id   = is_array( $progress ) && isset( $progress['last_id'] ) ? (int) $progress['last_id'] : 0;

		$started_at = microtime( true );

		while ( true ) {
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
					self::REBUILD_BATCH_SIZE
				)
			);

			if ( empty( $form_ids ) ) {
				break;
			}

			$is_last_page = count( $form_ids ) < self::REBUILD_BATCH_SIZE;

			foreach ( $form_ids as $form_id ) {
				$form_id = (int) $form_id;
				$last_id = max( $last_id, $form_id );
				$post    = get_post( $form_id );

				if ( ! $post instanceof \WP_Post ) {
					continue;
				}

				$found = self::collect_from_content( $post->post_content );

				update_post_meta( $form_id, self::META_KEY, $found );

				foreach ( $found as $name ) {
					$callbacks[ $name ] = true;
				}

				// Checked per form (not only once per batch) so even the last, short page —
				// which never hits the `$is_last_page` break below since there is no further
				// page to fetch — is still time-boxed. A page short enough to end the scan can
				// still contain forms with very large post_content, and without this the last
				// page ran fully unbounded regardless of size.
				if ( self::rebuild_time_budget_exceeded( $started_at ) ) {
					self::persist_progress_and_yield( $last_id, $callbacks );
				}
			}

			if ( $is_last_page ) {
				break;
			}

			if ( self::rebuild_time_budget_exceeded( $started_at ) ) {
				self::persist_progress_and_yield( $last_id, $callbacks );
			}
		}

		delete_option( self::REBUILD_PROGRESS_OPTION );

		update_option( self::OPTION_KEY, array_values( array_keys( $callbacks ) ), false );
	}

	/**
	 * Whether the rebuild has been running long enough that it should persist progress and
	 * yield the request instead of continuing. The budget is filterable so tests can force
	 * an early "incomplete" result without waiting on wall-clock time.
	 *
	 * @param float $started_at `microtime( true )` value captured when the rebuild started.
	 */
	protected static function rebuild_time_budget_exceeded( float $started_at ): bool {
		$budget = (float) apply_filters(
			'jet-form-builder/ssr-callback-allowlist/rebuild-time-budget',
			self::REBUILD_TIME_BUDGET_SECONDS
		);

		return ( microtime( true ) - $started_at ) >= $budget;
	}

	/**
	 * Writes the resume cursor and throws to yield the request. Write the cursor FIRST, then
	 * commit: with `autocommit = 0`, an explicit `COMMIT` ends the current transaction and
	 * the next write opens a new implicit one. Committing before writing the cursor would
	 * leave the cursor itself in that fresh, uncommitted transaction — exactly what
	 * `Auto_Migrator::run()`'s catch-and-rollback of the exception below would then discard,
	 * defeating the whole point of committing early.
	 *
	 * @since 3.6.5.3
	 *
	 * @param int                  $last_id
	 * @param array<string, bool>  $callbacks
	 *
	 * @throws \Jet_Form_Builder\Migrations\Migration_Incomplete_Exception Always.
	 */
	private static function persist_progress_and_yield( int $last_id, array $callbacks ) {
		update_option(
			self::REBUILD_PROGRESS_OPTION,
			array(
				'last_id'   => $last_id,
				'callbacks' => $callbacks,
			),
			false
		);

		\Jet_Form_Builder\Db_Queries\Execution_Builder::instance()->transaction_commit();

		throw new \Jet_Form_Builder\Migrations\Migration_Incomplete_Exception( 'SSR allowlist rebuild exceeded its time budget; will resume on the next request.' );
	}

}
