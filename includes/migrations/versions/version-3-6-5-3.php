<?php


namespace Jet_Form_Builder\Migrations\Versions;

use JFB_Modules\Validation\Advanced_Rules\Server_Side_Rule;
use JFB_Modules\Validation\Advanced_Rules\Ssr_Callback_Registry;
use JFB_Modules\Validation\Ssr\Ssr_Blocked_Callback_Usages;
use JFB_Modules\Validation\Ssr\Ssr_Registry_Migration_Notice;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * One-time, bounded import of static custom "Server-Side callback" function names from
 * existing forms and reusable blocks into the new global `Ssr_Callback_Registry`
 * (issues-tracker #20361). This replaces the retired per-form allowlist
 * (`Ssr_Callback_Allowlist`) as the SSR trust source.
 *
 * Only names that, at the time this migration runs: are syntactically valid, are not on
 * the `Server_Side_Rule::NOT_ALLOWED` denylist, are not already a built-in callback, and
 * resolve to an existing PHP function are imported. This is a live `post_content` scan,
 * not a read of the old per-form meta — the old meta is not treated as authoritative.
 *
 * Imported names are merged directly into the trusted, live registry
 * (`Ssr_Callback_Registry::import_trusted_callbacks()`) — not queued for manual review.
 * An earlier revision of this migration queued them as "pending" and required a
 * `manage_options` admin to explicitly approve each one before any of them became
 * callable again; in practice this broke backward compatibility for sites where the admin
 * never saw (or acted on) the resulting notice — every form relying on a custom callback
 * that predated the update silently stopped validating. The denylist is therefore now the
 * primary safety barrier for this restore path, and was substantially expanded to match
 * (see docs/vulnerability/20361/not-allow-list.md for the audit). A brand-new custom
 * callback name — one that was never in a form before this migration ran — still requires
 * an admin to add it manually in Settings; this migration only restores names that were
 * already relied upon.
 *
 * A denylisted (`Server_Side_Rule::NOT_ALLOWED`) name is never imported into the registry —
 * it can never be approved — but every (form, field, name) triple encountered is still
 * recorded via `Ssr_Blocked_Callback_Usages` so the settings tab can list exactly which
 * existing forms still fail SSR validation, instead of leaving the admin to discover that
 * only by noticing a live form is broken.
 *
 * `Ssr_Registry_Migration_Notice::mark_imported()` is always called once the scan
 * completes (even if nothing was restored), so an admin who sees the notice gets both
 * numbers in one place: how many callback names were restored automatically, and how many
 * forms still need a manual fix because their callback is permanently denylisted.
 *
 * @since 3.6.5.3
 */
class Version_3_6_5_3 extends Base_Migration {

	const BATCH_SIZE = 200;

	const PROGRESS_OPTION     = 'jet_fb_ssr_registry_migration_progress';
	const TIME_BUDGET_SECONDS = 25;

	/**
	 * Bounded to `TIME_BUDGET_SECONDS` per call so a large forms table cannot run past the
	 * request's `max_execution_time` inside `Auto_Migrator`'s DB transaction. When the
	 * budget is exceeded before the table is fully scanned, progress (a resume cursor plus
	 * this request's summary counters) is persisted to `PROGRESS_OPTION` and this method
	 * throws so `Base_Migration::install()` never marks the migration installed; the next
	 * capable admin's `admin_init` request resumes from the persisted cursor. Uses its own
	 * progress option (distinct from `Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION`)
	 * since both migrations may need to resume independently in the same request.
	 *
	 * Trusted-callback and blocked-usage writes happen once per completed batch (up to
	 * `BATCH_SIZE` forms) — not once for the entire scan, and not once per form either.
	 * `import_trusted_callbacks()` is additive (it merges into whatever is already trusted)
	 * and `replace_for_form()` touches only one form's own entries, so both are safe to call
	 * repeatedly; batching the calls at this granularity is a deliberate middle ground:
	 * - Once per form would mean up to `BATCH_SIZE` extra `update_option()` calls per batch,
	 *   which is wasteful for the common case (most sites have at most a handful of forms
	 *   using a custom SSR callback at all) to guard against a rare one (a site with
	 *   hundreds of forms each using a different one).
	 * - Once per entire scan (the original version of this migration) left every form
	 *   untrusted — and any form an admin fixed mid-scan un-fixed again — for however many
	 *   resumed requests a large site's scan needed, not just the current batch.
	 * Writing once per batch means the "stale" window for both problems is capped at one
	 * batch (at most `BATCH_SIZE` forms) instead of the whole scan, while a site with fewer
	 * forms than `BATCH_SIZE` — the common case — finishes in a single batch and gets
	 * exactly the same one-write behavior as before (both issues-tracker #20361 follow-up
	 * findings from review).
	 *
	 * The scan's `post_status` filter includes `trash`: `Ssr_Blocked_Callback_Usages`
	 * deliberately keeps a trashed form's entry alive (see `Module::
	 * remove_blocked_callback_usages_for_deleted_form()`'s docblock — it only clears on
	 * `delete_post`, since a trashed form can still be restored), but a form already in
	 * Trash at the moment this one-time scan runs would otherwise never be scanned at all —
	 * `wp_trash_post()` does not fire `save_post`, so nothing else re-scans it either, until
	 * it is restored and resaved. Without `trash` here, restoring such a form later would
	 * silently start failing its SSR rule (denylisted callback, never recorded as blocked)
	 * or lose backward compatibility for a legitimate custom callback (never imported), with
	 * no migration notice and no indication anything needed attention (review finding,
	 * issues-tracker #20361 follow-up).
	 *
	 * @throws \Jet_Form_Builder\Migrations\Migration_Incomplete_Exception When the time
	 *         budget is exceeded before the scan completes.
	 */
	public function up( \wpdb $wpdb ) {
		$progress = get_option( self::PROGRESS_OPTION, array() );
		$last_id  = is_array( $progress ) && isset( $progress['last_id'] ) ? (int) $progress['last_id'] : 0;

		$imported_total         = is_array( $progress ) && isset( $progress['imported'] ) && is_array( $progress['imported'] )
			? $progress['imported']
			: array();
		$blocked_form_ids_total = is_array( $progress ) && isset( $progress['blocked_form_ids'] ) && is_array( $progress['blocked_form_ids'] )
			? $progress['blocked_form_ids']
			: array();

		$started_at = microtime( true );

		while ( true ) {
			$form_ids = $wpdb->get_col( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
				$wpdb->prepare(
					"SELECT ID FROM {$wpdb->posts}
					WHERE post_type = %s
					AND post_status IN ('publish', 'draft', 'pending', 'private', 'future', 'trash')
					AND ID > %d
					ORDER BY ID ASC
					LIMIT %d",
					'jet-form-builder',
					$last_id,
					self::BATCH_SIZE
				)
			);

			if ( empty( $form_ids ) ) {
				break;
			}

			$is_last_page = count( $form_ids ) < self::BATCH_SIZE;

			// Batch-local accumulators, flushed to the database once this batch finishes (or
			// once the time budget is hit, whichever comes first) — see the docblock above
			// for why per-batch, rather than per-form or per-scan.
			$batch_callbacks = array();
			$batch_blocked   = array();

			foreach ( $form_ids as $form_id ) {
				$form_id = (int) $form_id;
				$last_id = max( $last_id, $form_id );
				$post    = get_post( $form_id );

				if ( ! $post instanceof \WP_Post ) {
					continue;
				}

				foreach ( $this->collect_static_callbacks( $post->post_content ) as $name ) {
					$batch_callbacks[ $name ] = true;
				}

				$batch_blocked[ $form_id ] = Ssr_Blocked_Callback_Usages::collect_from_content( $post->post_content );

				// Checked per form (not only once per batch) so even the last, short page —
				// which never hits the `$is_last_page` break below since there is no further
				// page to fetch — is still time-boxed. A page short enough to end the scan can
				// still contain forms with very large post_content (many reusable blocks), and
				// without this the last page ran fully unbounded regardless of size.
				if ( $this->time_budget_exceeded( $started_at ) ) {
					$this->flush_batch( $batch_callbacks, $batch_blocked, $imported_total, $blocked_form_ids_total );
					$this->persist_progress_and_yield( $last_id, $imported_total, $blocked_form_ids_total );
				}
			}

			$this->flush_batch( $batch_callbacks, $batch_blocked, $imported_total, $blocked_form_ids_total );

			if ( $is_last_page ) {
				break;
			}

			if ( $this->time_budget_exceeded( $started_at ) ) {
				$this->persist_progress_and_yield( $last_id, $imported_total, $blocked_form_ids_total );
			}
		}

		delete_option( self::PROGRESS_OPTION );

		Ssr_Registry_Migration_Notice::mark_imported(
			array_values( array_keys( $imported_total ) ),
			count( $blocked_form_ids_total )
		);
	}

	/**
	 * Writes one batch's (or partial batch's, if the time budget was hit mid-batch)
	 * findings to the database in one call each, then merges the outcome into this
	 * request's running totals (used only to build the final migration notice — see
	 * `persist_progress_and_yield()`'s docblock on why losing those totals to an unrelated
	 * failure is harmless).
	 *
	 * @since 3.6.5.3
	 *
	 * @param array<string, bool>                               $batch_callbacks        Callback
	 *        names found in this batch so far.
	 * @param array<int, array{field: string, name: string}[]>  $batch_blocked          This
	 *        batch's forms mapped to their blocked usages (possibly empty).
	 * @param array<string, bool>                               $imported_total         By
	 *        reference; running total across the whole scan.
	 * @param array<int, bool>                                  $blocked_form_ids_total By
	 *        reference; running total across the whole scan.
	 */
	private function flush_batch(
		array &$batch_callbacks,
		array &$batch_blocked,
		array &$imported_total,
		array &$blocked_form_ids_total
	) {
		if ( ! empty( $batch_callbacks ) ) {
			$result = Ssr_Callback_Registry::import_trusted_callbacks( array_values( array_keys( $batch_callbacks ) ) );

			foreach ( $result['imported'] as $name ) {
				$imported_total[ $name ] = true;
			}
		}

		foreach ( $batch_blocked as $form_id => $form_blocked ) {
			// Every form in the batch is visited exactly once, so this form's current set
			// of blocked usages (possibly empty) fully replaces whatever was recorded for
			// it before — including nothing, if a prior migration run or a later manual fix
			// already cleared it. This is the same call `Module::
			// refresh_blocked_callback_usages()` makes on every form save, so the two stay
			// consistent with each other.
			Ssr_Blocked_Callback_Usages::replace_for_form( $form_id, $form_blocked );

			if ( ! empty( $form_blocked ) ) {
				$blocked_form_ids_total[ $form_id ] = true;
			}
		}

		$batch_callbacks = array();
		$batch_blocked   = array();
	}

	public function down( \wpdb $wpdb ) {
		delete_option( Ssr_Callback_Registry::OPTION_KEY );
		delete_option( self::PROGRESS_OPTION );
		Ssr_Registry_Migration_Notice::clear();
		Ssr_Blocked_Callback_Usages::clear();
	}

	/**
	 * Whether the migration has been running long enough that it should persist progress
	 * and yield the request instead of continuing. The budget is filterable so tests can
	 * force an early "incomplete" result without waiting on wall-clock time.
	 *
	 * @param float $started_at `microtime( true )` value captured when the scan started.
	 */
	protected function time_budget_exceeded( float $started_at ): bool {
		$budget = (float) apply_filters(
			'jet-form-builder/ssr-registry-migration/time-budget',
			self::TIME_BUDGET_SECONDS
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
	 * `$imported`/`$blocked_form_ids` are this request's running summary counters only, used
	 * to build the final migration notice once the whole scan completes — the trusted
	 * registry and blocked-usages entries themselves are already durably written once per
	 * completed batch via `flush_batch()` (see `up()`'s docblock for why per-batch), so
	 * losing this summary to an unrelated failure would at worst under-report the notice's
	 * counts, never lose data. Note this method is only ever called either right after a
	 * `flush_batch()` (mid-batch time-out) or between batches (batch boundary time-out), so
	 * whatever this batch already collected has always just been flushed by the time this
	 * runs.
	 *
	 * @since 3.6.5.3
	 *
	 * @param int                 $last_id
	 * @param array<string, bool> $imported         Callback names imported so far, keyed by
	 *                                               name for dedup.
	 * @param array<int, bool>    $blocked_form_ids Form IDs with a blocked usage found so
	 *                                               far, keyed by ID for dedup.
	 *
	 * @throws \Jet_Form_Builder\Migrations\Migration_Incomplete_Exception Always.
	 */
	private function persist_progress_and_yield( int $last_id, array $imported, array $blocked_form_ids ) {
		update_option(
			self::PROGRESS_OPTION,
			array(
				'last_id'          => $last_id,
				'imported'         => $imported,
				'blocked_form_ids' => $blocked_form_ids,
			),
			false
		);

		\Jet_Form_Builder\Db_Queries\Execution_Builder::instance()->transaction_commit();

		throw new \Jet_Form_Builder\Migrations\Migration_Incomplete_Exception( 'SSR registry migration exceeded its time budget; will resume on the next request.' );
	}

	/**
	 * Walks the form's blocks (including reusable blocks) collecting statically
	 * configured SSR callback names, skipping anything that could not pass runtime
	 * validation anyway.
	 *
	 * @param string $post_content
	 *
	 * @return string[]
	 */
	private function collect_static_callbacks( string $post_content ): array {
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
}
