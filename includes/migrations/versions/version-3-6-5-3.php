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
 * Imported names are queued as **pending** (`Ssr_Callback_Registry::add_pending_callbacks()`)
 * rather than granted live trust: a name already sitting in a saved form is not, by itself,
 * a reason to trust it. They are not callable by `Server_Side_Rule` until a `manage_options`
 * admin explicitly approves each one in Settings.
 *
 * A denylisted (`Server_Side_Rule::NOT_ALLOWED`) name is never imported into the registry —
 * it can never be approved — but every (form, field, name) triple encountered is still
 * recorded via `Ssr_Blocked_Callback_Usages` so the settings tab can list exactly which
 * existing forms silently stopped passing SSR validation, instead of leaving the admin to
 * discover that only by noticing a live form is broken.
 *
 * @since 3.6.5.3
 */
class Version_3_6_5_3 extends Base_Migration {

	const BATCH_SIZE = 200;

	const PROGRESS_OPTION     = 'jet_fb_ssr_registry_migration_progress';
	const TIME_BUDGET_SECONDS = 15;

	/**
	 * Bounded to `TIME_BUDGET_SECONDS` per call so a large forms table cannot run past the
	 * request's `max_execution_time` inside `Auto_Migrator`'s DB transaction. When the
	 * budget is exceeded before the table is fully scanned, progress (cursor + partial
	 * callback accumulator) is persisted to `PROGRESS_OPTION` and this method throws so
	 * `Base_Migration::install()` never marks the migration installed and the registry/
	 * notice are never written from a partial scan; the next capable admin's `admin_init`
	 * request resumes from the persisted cursor. Uses its own progress option (distinct
	 * from `Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION`) since both migrations may
	 * need to resume independently in the same request.
	 *
	 * @throws \Jet_Form_Builder\Migrations\Migration_Incomplete_Exception When the time
	 *         budget is exceeded before the scan completes.
	 */
	public function up( \wpdb $wpdb ) {
		$progress  = get_option( self::PROGRESS_OPTION, array() );
		$callbacks = is_array( $progress ) && isset( $progress['callbacks'] ) && is_array( $progress['callbacks'] )
			? $progress['callbacks']
			: array();
		$blocked   = is_array( $progress ) && isset( $progress['blocked'] ) && is_array( $progress['blocked'] )
			? $progress['blocked']
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
					self::BATCH_SIZE
				)
			);

			if ( empty( $form_ids ) ) {
				break;
			}

			$is_last_page = count( $form_ids ) < self::BATCH_SIZE;

			foreach ( $form_ids as $form_id ) {
				$form_id = (int) $form_id;
				$last_id = max( $last_id, $form_id );
				$post    = get_post( $form_id );

				if ( ! $post instanceof \WP_Post ) {
					continue;
				}

				foreach ( $this->collect_static_callbacks( $post->post_content ) as $name ) {
					$callbacks[ $name ] = true;
				}

				foreach ( Ssr_Blocked_Callback_Usages::collect_from_content( $post->post_content ) as $usage ) {
					$blocked[] = array(
						'form_id' => $form_id,
						'field'   => $usage['field'],
						'name'    => $usage['name'],
					);
				}

				// Checked per form (not only once per batch) so even the last, short page —
				// which never hits the `$is_last_page` break below since there is no further
				// page to fetch — is still time-boxed. A page short enough to end the scan can
				// still contain forms with very large post_content (many reusable blocks), and
				// without this the last page ran fully unbounded regardless of size.
				if ( $this->time_budget_exceeded( $started_at ) ) {
					$this->persist_progress_and_yield( $last_id, $callbacks, $blocked );
				}
			}

			if ( $is_last_page ) {
				break;
			}

			if ( $this->time_budget_exceeded( $started_at ) ) {
				$this->persist_progress_and_yield( $last_id, $callbacks, $blocked );
			}
		}

		delete_option( self::PROGRESS_OPTION );

		if ( ! empty( $blocked ) ) {
			Ssr_Blocked_Callback_Usages::set_usages( $blocked );
		}

		if ( empty( $callbacks ) ) {
			return;
		}

		$imported = array_values( array_keys( $callbacks ) );

		$result = Ssr_Callback_Registry::add_pending_callbacks( $imported );

		if ( ! empty( $result['saved'] ) ) {
			Ssr_Registry_Migration_Notice::mark_imported( $result['saved'] );
		}
	}

	public function down( \wpdb $wpdb ) {
		delete_option( Ssr_Callback_Registry::OPTION_KEY );
		delete_option( Ssr_Callback_Registry::PENDING_OPTION_KEY );
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
	 * @since 3.6.5.3
	 *
	 * @param int                                      $last_id
	 * @param array<string, bool>                      $callbacks
	 * @param array{form_id: int, field: string, name: string}[] $blocked
	 *
	 * @throws \Jet_Form_Builder\Migrations\Migration_Incomplete_Exception Always.
	 */
	private function persist_progress_and_yield( int $last_id, array $callbacks, array $blocked ) {
		update_option(
			self::PROGRESS_OPTION,
			array(
				'last_id'   => $last_id,
				'callbacks' => $callbacks,
				'blocked'   => $blocked,
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
