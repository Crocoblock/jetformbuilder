<?php


namespace Jet_Form_Builder\Migrations\Versions;

use Jet_Form_Builder\Blocks\Block_Helper;
use JFB_Modules\Form_Record\Models\Record_Field_Model;
use JFB_Modules\Form_Record\Models\Record_Model;
use JFB_Modules\Media_Cleanup\Media_Ownership_Migration_Notice;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Backfills `_jfb_uploaded_by_form` / `_jfb_uploaded_by_user` on attachments that were
 * legitimately saved through a Media field's Insert Post action *before* the fix in
 * issues-tracker #20547 started recording those markers at upload time
 * (`Uploaded_File::add_attachment()`).
 *
 * Without this backfill, every such pre-existing attachment is indistinguishable from an
 * attacker-supplied ID the moment a site upgrades: `Media_Field_Parser::
 * sanitize_submitted_attachment_ids()` and `Media_Cleanup::delete_attachments()` both now
 * require the marker, so the very first time an affected post's form is re-submitted
 * without changing that field, the attachment silently drops out of the post meta (the
 * field "forgets" it) even though the file itself is never deleted (see both methods'
 * docblocks - an unmarked ID is simply skipped, never treated as a deletion candidate).
 * That is a real, if non-destructive, regression for any site that already had this
 * feature in production; this migration closes the gap for the common case instead of
 * leaving every upgrading site to discover it one edited post at a time.
 *
 * Three-phase scan, each phase batched and time-boxed independently (same resumable
 * pattern as `Version_3_6_5_3`, which this migration otherwise mirrors):
 *
 * Phase 1 - find which post meta keys can even hold plugin-uploaded attachment IDs.
 * Scans every `jet-form-builder` post's `post_content` for `jet-forms/media-field`
 * blocks with `insert_attachment: true`, resolves each field's `name` through that same
 * form's Insert Post action `fields_map` (`_jf_actions` meta) to the post meta key it is
 * actually saved under, and collects the unique set of those keys across every form. A
 * key is only collected when a form still resolves to it; a meta key some now-deleted or
 * reconfigured form once used is not guessed at.
 *
 * Phase 2 - using that key set, scans every post's meta for values under those keys,
 * normalizes them the same way `Media_Cleanup::normalize_attachment_ids()` does (single
 * ID, comma string, list, or `both`-shape array), and backfills each resulting attachment
 * ID as described below.
 *
 * Phase 3 - independently of post meta entirely (but NOT independently of forms - see
 * `run_record_backfill_phase()`'s docblock), scans the plugin's own Form Record storage
 * (`{$wpdb->prefix}jet_fb_records_fields` joined to `{$wpdb->prefix}jet_fb_records`) for
 * saved attachment values whose `(form_id, field_name)` matches an `insert_attachment`
 * Media field Phase 1 actually found on that record's own form, and backfills those the
 * same way. This covers a case Phase 1/2 cannot: `Media_Field_Parser::get_response()` has,
 * since issues-tracker #4422 (long
 * before #20547), deliberately let a Media field's *current* value be populated by
 * `Preset_Source_Form_Record` from a previously saved Form Record (via
 * `record_query_var` in the URL) rather than from that request's own post meta - the
 * record's `field_value` is a wholly separate value the Insert Post meta-key scan in
 * Phase 1/2 never touches. Without this phase, a site that used that preset flow before
 * #20547's fix would have the exact same field "forgets" its attachment regression
 * Phase 1/2 exists to prevent, just sourced from records instead of post meta - silently
 * breaking the pre-existing #4422 behavior this branch's own `sanitize_submitted_attachment_ids()`
 * docblock says it must preserve.
 *
 * For each attachment ID phase 2/3 resolve that is a real `attachment` post NOT already
 * carrying `_jfb_uploaded_by_form`:
 * - sets `_jfb_uploaded_by_form = 1`;
 * - sets `_jfb_uploaded_by_user` from that attachment's own `post_author`, but ONLY when
 *   `post_author` is a real (non-zero) user - see `maybe_backfill_attachment()`'s docblock
 *   for why a zero `post_author` is left unbackfilled rather than written as an explicit
 *   `0` "anonymous uploader" marker.
 *
 * Backfilling `_jfb_uploaded_by_user` from a non-zero `post_author` (rather than leaving it
 * unset, which `Media_Cleanup::is_owned_by_current_actor()` already treats as a compatible
 * legacy attachment) is deliberate, not redundant: `Uploaded_File::add_attachment()` never
 * passes an explicit `post_author` to `wp_insert_attachment()`, so WordPress core itself
 * fills it in from `get_current_user_id()` at upload time - the exact same source the fixed
 * code now reads into `_jfb_uploaded_by_user` going forward. For a genuinely plugin-uploaded
 * legacy attachment, `post_author` is therefore already the same value the marker would
 * hold had it existed from the start, not merely a guess.
 *
 * This IS, however, only a plausible guess, not an observed fact - unlike a live upload's
 * uploader ID - because `post_author` can be legitimately reassigned after upload for
 * reasons unrelated to who actually uploaded the file (editorial cleanup, bulk
 * ownership-transfer tools, or simply reflecting a different user's later edit of the
 * attachment's own post record). `maybe_backfill_attachment()` therefore also writes
 * `_jfb_uploaded_by_user_heuristic = 1` alongside a non-zero `_jfb_uploaded_by_user`, and
 * `is_owned_by_current_actor()` reads that marker to allow its verified-identity
 * `$owning_post_id` exception for a heuristic value too (the same exception the anonymous-
 * uploader case already uses), instead of binding the attachment with absolute, no-exception
 * strictness to whichever user happened to be its `post_author` at migration time. Without
 * that exception, a mismatch between the backfilled guess and the post's actual current
 * editor would make the attachment permanently unmanageable by anyone but that one guessed
 * user (or a webhook) - a real regression from the pre-migration state, where an unmarked
 * attachment was freely manageable by any `edit_post`-authorized editor of its post; see
 * `is_owned_by_current_actor()`'s own docblock for the exact mechanics.
 *
 * PHASE 2 IS A HEURISTIC, NOT A GUARANTEED-EXACT MATCH, AND THIS IS LOAD-BEARING FOR
 * DELETION DECISIONS, not just cosmetic: Phase 2 scans `wp_postmeta` for VALUES stored
 * under a given meta KEY NAME (e.g. `gallery`), because that is the only thing a post meta
 * row can be matched on - it carries no record of which form or action actually wrote it.
 * If a different form's Insert Post action (or a completely unrelated meta box, plugin, or
 * direct SQL/import) happens to reuse the same meta key name for a different purpose, or a
 * post of a different type reuses it coincidentally, Phase 2 cannot tell that apart from a
 * genuine legacy attachment ID and will grant it `_jfb_uploaded_by_form`. Unlike Phase 3
 * (which - see `run_record_backfill_phase()` - CAN and does verify the `(form_id,
 * field_name)` pair a value actually came from, because `records_fields` records that
 * unambiguously), Phase 2 has no equivalent join available: `wp_postmeta` rows do not
 * self-identify their writer. This is an accepted, structural limitation of scanning
 * existing WordPress data after the fact, not an oversight fixable by tightening the query
 * further within Phase 2 itself.
 *
 * The blast radius of a Phase 2 false positive is bounded and strictly less severe than the
 * vulnerability this migration exists to smooth the upgrade for: it only ever grants an
 * attachment the SAME trust level a genuinely plugin-uploaded one has post-fix (marker
 * present, uploader-bound deletion) - never the pre-fix, unrestricted trust the original
 * vulnerability relied on. It cannot, by itself, cause a deletion; `delete_attachments()`
 * still requires the field to observe that ID being removed from the post meta on some
 * later request, AND to pass the post-authorization and ownership checks in
 * `delete_attachments()`/`is_owned_by_current_actor()`, before it is ever a deletion
 * candidate. A false-positive marker's worst realistic outcome is therefore the same
 * bounded risk a genuine attachment already carries post-fix, not a new deletion primitive.
 *
 * Progress across ALL THREE phases is persisted in a single `PROGRESS_OPTION` so a large
 * site's scan can span many `admin_init` requests without losing its place, exactly like
 * `Version_3_6_5_3`. `Media_Ownership_Migration_Notice::mark_backfilled()` is always
 * called once every phase completes (even if nothing was found), so an admin who never had
 * this feature in production sees no notice at all, and one who did gets a single, honest
 * count of how many attachments were restored across both sources.
 *
 * KNOWN WINDOW: `Auto_Migrator` (see its own docblock) deliberately has no activation-hook
 * or deploy-time trigger - by design, since `register_activation_hook` does not fire on a
 * plugin file update, only on explicit (re)activation - so this migration only runs on an
 * `admin_init` request from a `manage_options` user, and a large site's scan can take
 * several such requests to finish (`Auto_Migrator::is_migration_in_progress()` reports this
 * state, though nothing in this fix currently reads it). Public form submission is not
 * gated on migration completion: between the moment a site's plugin files are updated and
 * the moment this migration finishes running, `Media_Field_Parser::
 * sanitize_submitted_attachment_ids()` already enforces the fixed, strict marker check
 * against attachments this migration has not backfilled yet, so a legacy attachment can
 * still transiently "drop out" of a field during that window even though it would have
 * been correctly recognized moments later. This is bounded and non-destructive by the same
 * fail-closed design as the rest of this fix - it cannot cause a wrongful deletion, only a
 * possibly-premature "forgets the value" outcome identical to what Phase 1/2/3 exist to
 * minimize, just not yet eliminated for that specific attachment at that specific moment -
 * and it closes itself out automatically as soon as an admin's next `wp-admin` page load
 * lets the migration run (or resume). Fully eliminating this window would require either a
 * synchronous, deploy-time migration trigger or gating public form submission on migration
 * completion, both a materially larger and riskier change than this fix's scope; not
 * addressed here.
 *
 * @since 3.6.6
 */
class Version_3_6_6 extends Base_Migration {

	const FORM_BATCH_SIZE       = 200;
	const ATTACHMENT_BATCH_SIZE = 500;
	const RECORD_FIELD_BATCH_SIZE = 500;

	const PROGRESS_OPTION     = 'jet_fb_media_ownership_migration_progress';
	const TIME_BUDGET_SECONDS = 25;

	const PHASE_COLLECT_KEYS   = 'collect_keys';
	const PHASE_BACKFILL       = 'backfill';
	const PHASE_RECORD_BACKFILL = 'record_backfill';

	/**
	 * @throws \Jet_Form_Builder\Migrations\Migration_Incomplete_Exception When the time
	 *         budget is exceeded before all phases complete.
	 */
	public function up( \wpdb $wpdb ) {
		$progress = $this->load_progress();
		$started_at = microtime( true );

		if ( self::PHASE_COLLECT_KEYS === $progress['phase'] ) {
			$this->run_collect_keys_phase( $wpdb, $progress, $started_at );
		}

		// Each phase method above only returns (instead of yielding via exception) once it
		// has fully advanced `$progress['phase']` past itself, so reaching each line below
		// always means every phase before it is done for this call.
		if ( self::PHASE_BACKFILL === $progress['phase'] ) {
			$this->run_backfill_phase( $wpdb, $progress, $started_at );
		}

		$this->run_record_backfill_phase( $wpdb, $progress, $started_at );

		delete_option( self::PROGRESS_OPTION );

		Media_Ownership_Migration_Notice::mark_backfilled( $progress['backfilled_count'] );
	}

	public function down( \wpdb $wpdb ) {
		delete_option( self::PROGRESS_OPTION );
		Media_Ownership_Migration_Notice::clear();

		// Deliberately does not strip `_jfb_uploaded_by_form` / `_jfb_uploaded_by_user`
		// from attachments this migration backfilled: by the time anyone runs `uninstall()`
		// on a migration, those markers may already be load-bearing for real form activity
		// that happened since (new uploads on the same meta keys, cleanup decisions already
		// made using them). Reverting the schema/option state is safe; reverting live
		// ownership data an admin may already be relying on is not.
	}

	/**
	 * @param \wpdb $wpdb
	 * @param array $progress By reference; mutated in place and persisted on yield.
	 * @param float $started_at
	 *
	 * @throws \Jet_Form_Builder\Migrations\Migration_Incomplete_Exception
	 */
	private function run_collect_keys_phase( \wpdb $wpdb, array &$progress, float $started_at ) {
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
					$progress['last_form_id'],
					self::FORM_BATCH_SIZE
				)
			);

			if ( empty( $form_ids ) ) {
				break;
			}

			$is_last_page = count( $form_ids ) < self::FORM_BATCH_SIZE;

			foreach ( $form_ids as $form_id ) {
				$form_id                  = (int) $form_id;
				$progress['last_form_id'] = max( $progress['last_form_id'], $form_id );

				$collected = $this->collect_meta_keys_for_form( $form_id );

				foreach ( $collected['meta_keys'] as $meta_key ) {
					$progress['meta_keys'][ $meta_key ] = true;
				}

				if ( ! empty( $collected['field_names'] ) ) {
					$progress['field_names_by_form'][ $form_id ] = $collected['field_names'];
				}

				if ( $this->time_budget_exceeded( $started_at ) ) {
					$this->persist_progress_and_yield( $progress );
				}
			}

			if ( $is_last_page ) {
				break;
			}

			if ( $this->time_budget_exceeded( $started_at ) ) {
				$this->persist_progress_and_yield( $progress );
			}
		}

		$progress['phase'] = self::PHASE_BACKFILL;
		$this->persist_progress( $progress );
	}

	/**
	 * A form's Media fields only matter here if `insert_attachment` is on - that is the
	 * only setting that ever caused `Uploaded_File::add_attachment()` to run and create a
	 * real WP attachment for this field in the first place (see that method's docblock);
	 * without it, whatever the field saved was never an attachment ID to begin with, so
	 * there is nothing here for `_jfb_uploaded_by_form` to legitimately describe.
	 * `delete_uploaded_attachment` is NOT required to collect the key: an attachment
	 * deserves the "this came from a form" marker regardless of whether THIS site ever
	 * had cleanup-on-removal enabled, since a later edit turning that setting on should not
	 * need every attachment re-uploaded to become eligible for it.
	 *
	 * Returns BOTH the resolved post meta keys (for Phase 2) and the raw `insert_attachment`
	 * field names (for Phase 3, keyed by this `$form_id` - see `run_record_backfill_phase()`'s
	 * docblock for why Phase 3 needs a per-form field name set rather than a global one: a
	 * Form Record row only proves the field belongs to a real `insert_attachment` field of
	 * the record's OWN form, never of some other form that happens to reuse the same field
	 * name).
	 *
	 * @param int $form_id
	 *
	 * @return array{meta_keys: string[], field_names: string[]}
	 */
	private function collect_meta_keys_for_form( int $form_id ): array {
		$empty = array(
			'meta_keys'   => array(),
			'field_names' => array(),
		);

		$post = get_post( $form_id );

		if ( ! $post instanceof \WP_Post || '' === trim( $post->post_content ) ) {
			return $empty;
		}

		$field_names = array();

		$blocks = Block_Helper::get_blocks_from_content( $post->post_content );

		foreach ( Block_Helper::generate_blocks_in_space( $blocks ) as $block ) {
			if ( 'jet-forms/media-field' !== ( $block['blockName'] ?? '' ) ) {
				continue;
			}

			$attrs = $block['attrs'] ?? array();

			if ( empty( $attrs['insert_attachment'] ) || empty( $attrs['name'] ) ) {
				continue;
			}

			$field_names[ (string) $attrs['name'] ] = true;
		}

		if ( empty( $field_names ) ) {
			return $empty;
		}

		$actions = jet_form_builder()->post_type->get_actions( $form_id );

		if ( ! is_array( $actions ) ) {
			// No Insert Post action → no post meta key for Phase 2, but the
			// `insert_attachment` field names themselves are still real for Phase 3 (a Form
			// Record can be saved regardless of which/whether a post-insert action ran).
			return array(
				'meta_keys'   => array(),
				'field_names' => array_keys( $field_names ),
			);
		}

		$meta_keys = array();

		foreach ( $actions as $action ) {
			if ( ! is_array( $action ) || 'insert_post' !== ( $action['type'] ?? '' ) ) {
				continue;
			}

			/**
			 * `_jf_actions` stores an action's settings in one of two shapes, and both are
			 * live/current, not legacy-vs-new: `Action_Handler::save_form_action()`
			 * (includes/actions/action-handler.php) reads
			 * `$form_action['settings'][$type] ?? $form_action['settings']` - i.e. nested
			 * under the action type key (`settings.insert_post.fields_map`) when present,
			 * falling back to a flat `settings.fields_map` when it isn't. A form saved with
			 * the flat shape has a real, currently-working Insert Post action that this
			 * migration must resolve the same way the request-time handler does; reading
			 * only the nested shape would silently skip such a form's meta key entirely,
			 * and every legacy attachment behind it would never be backfilled.
			 */
			$insert_post_settings = $action['settings']['insert_post'] ?? $action['settings'] ?? array();
			$fields_map           = is_array( $insert_post_settings ) ? ( $insert_post_settings['fields_map'] ?? array() ) : array();

			if ( ! is_array( $fields_map ) ) {
				continue;
			}

			foreach ( $fields_map as $field_name => $meta_key ) {
				if (
					isset( $field_names[ $field_name ] )
					&& is_string( $meta_key )
					&& '' !== $meta_key
					// System post properties (ID, post_title, post_status, ...) are never
					// where an attachment ID list would be stored; only an actual meta key
					// is a candidate.
					&& ! in_array( $meta_key, array( 'ID', 'post_title', 'post_status', 'post_type', 'post_author', 'post_date', 'post_name', 'post_content', 'post_excerpt', 'post_parent' ), true )
				) {
					$meta_keys[ $meta_key ] = true;
				}
			}
		}

		return array(
			'meta_keys'   => array_keys( $meta_keys ),
			'field_names' => array_keys( $field_names ),
		);
	}

	/**
	 * @param \wpdb $wpdb
	 * @param array $progress By reference; mutated in place and persisted on yield.
	 * @param float $started_at
	 *
	 * @throws \Jet_Form_Builder\Migrations\Migration_Incomplete_Exception
	 */
	private function run_backfill_phase( \wpdb $wpdb, array &$progress, float $started_at ) {
		$meta_keys = array_keys( $progress['meta_keys'] );

		if ( empty( $meta_keys ) ) {
			$progress['phase'] = self::PHASE_RECORD_BACKFILL;
			$this->persist_progress( $progress );

			return;
		}

		$placeholders = implode( ',', array_fill( 0, count( $meta_keys ), '%s' ) );

		while ( true ) {
			$rows = $wpdb->get_results( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.PreparedSQL.NotPrepared
				$wpdb->prepare(
					"SELECT meta_id, meta_value FROM {$wpdb->postmeta}
					WHERE meta_key IN ({$placeholders})
					AND meta_id > %d
					ORDER BY meta_id ASC
					LIMIT %d",
					array_merge( $meta_keys, array( $progress['last_meta_id'], self::ATTACHMENT_BATCH_SIZE ) )
				)
			);

			if ( empty( $rows ) ) {
				break;
			}

			$is_last_page = count( $rows ) < self::ATTACHMENT_BATCH_SIZE;

			foreach ( $rows as $row ) {
				$progress['last_meta_id'] = max( $progress['last_meta_id'], (int) $row->meta_id );

				foreach ( $this->extract_attachment_ids( $row->meta_value ) as $attachment_id ) {
					if ( $this->maybe_backfill_attachment( $attachment_id ) ) {
						++$progress['backfilled_count'];
					}
				}

				if ( $this->time_budget_exceeded( $started_at ) ) {
					$this->persist_progress_and_yield( $progress );
				}
			}

			if ( $is_last_page ) {
				break;
			}

			if ( $this->time_budget_exceeded( $started_at ) ) {
				$this->persist_progress_and_yield( $progress );
			}
		}

		$progress['phase'] = self::PHASE_RECORD_BACKFILL;
		$this->persist_progress( $progress );
	}

	/**
	 * Phase 3 - see the class docblock for why Form Record values are a separate source
	 * from post meta (Phase 1/2) entirely: `Preset_Source_Form_Record` can populate a
	 * Media field's current value from a previously saved Form Record, and
	 * `Media_Field_Parser::get_response()` has deliberately accepted that value verbatim
	 * (issues-tracker #4422) since long before #20547.
	 *
	 * Joins `{$wpdb->prefix}jet_fb_records_fields` to `{$wpdb->prefix}jet_fb_records` (via
	 * `record_id`) rather than reading `records_fields` alone, and filters each row against
	 * `$progress['field_names_by_form'][$record->form_id]` - the exact `insert_attachment`
	 * field-name set Phase 1 found for THAT SPECIFIC form. `field_type = 'media-field'`
	 * alone is not sufficient: a saved Form Record's `field_attrs` column does not persist
	 * `insert_attachment` (`Form_Record\Controller::get_attrs_by_field_type()` only adds
	 * `label`, and `field_type` for `text-field`), so there is no per-row way to tell a
	 * genuine attachment-holding Media field apart from a `media-field` block whose
	 * `insert_attachment` was off (in which case its value is a URL string or empty, not an
	 * attachment ID - `normalize_attachment_ids()` would usually no-op on that anyway, but
	 * relying on that incidental behavior instead of checking the actual setting would be
	 * fragile) - or, more importantly, from a `media-field` on a COMPLETELY DIFFERENT form
	 * that happens to use the same `field_name`, whose value the requesting form's own
	 * config says nothing trustworthy about. The `(form_id, field_name)` pair from Phase 1
	 * is the only reliable proof a given record row's value actually came from an
	 * attachment-holding field of ITS OWN form.
	 *
	 * `records_fields` has no index on `field_type` (adding one is a schema change on the
	 * plugin's own table, out of scope for this fix), only on its primary key `id` and on
	 * `record_id`. Paginating by "rows matched" (`WHERE field_type = ... LIMIT N`, as Phase
	 * 1/2 do against `wp_postmeta`, which DOES index `meta_key`) would let MySQL scan an
	 * unbounded number of physical rows per call while it looks for `N` matches: on a site
	 * with years of Form Record history dominated by non-media fields, a single
	 * `$wpdb->get_results()` could scan most or all of the remaining table before the
	 * `LIMIT` is satisfied, and the time-budget check between loop iterations cannot
	 * interrupt a single already-running query. Pagination here is therefore by a FIXED `id`
	 * range instead: `record_field_max_id` (the table's highest `id` at the start of this
	 * phase, captured once) bounds how many pages will ever be walked, and each page's
	 * `WHERE id > :cursor AND id <= :cursor + RECORD_FIELD_BATCH_SIZE` scans at most
	 * `RECORD_FIELD_BATCH_SIZE` physical rows no matter how few (or none) are `media-field` -
	 * trading a possibly-larger number of small, bounded queries for the guarantee that no
	 * single query's cost depends on how sparse matching rows are.
	 *
	 * @param \wpdb $wpdb
	 * @param array $progress By reference; mutated in place and persisted on yield.
	 * @param float $started_at
	 *
	 * @throws \Jet_Form_Builder\Migrations\Migration_Incomplete_Exception
	 */
	private function run_record_backfill_phase( \wpdb $wpdb, array &$progress, float $started_at ) {
		if ( empty( $progress['field_names_by_form'] ) ) {
			return;
		}

		$fields_table  = Record_Field_Model::table();
		$records_table = Record_Model::table();

		if ( ! $progress['record_field_max_id'] ) {
			// phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
			$progress['record_field_max_id'] = (int) $wpdb->get_var( "SELECT MAX(id) FROM {$fields_table}" );
		}

		while ( $progress['last_record_field_id'] < $progress['record_field_max_id'] ) {
			$range_start = $progress['last_record_field_id'];
			$range_end   = $range_start + self::RECORD_FIELD_BATCH_SIZE;

			$rows = $wpdb->get_results( // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching
				$wpdb->prepare(
					"SELECT rf.id, rf.field_name, rf.field_value, rf.field_attrs, r.form_id
					FROM {$fields_table} rf
					INNER JOIN {$records_table} r ON r.id = rf.record_id
					WHERE rf.field_type = %s
					AND rf.id > %d
					AND rf.id <= %d
					ORDER BY rf.id ASC",
					'media-field',
					$range_start,
					$range_end
				)
			);

			foreach ( $rows as $row ) {
				$form_id           = (int) $row->form_id;
				$allowed_field_set = $progress['field_names_by_form'][ $form_id ] ?? array();

				if ( ! in_array( $row->field_name, $allowed_field_set, true ) ) {
					continue;
				}

				foreach ( $this->extract_record_field_attachment_ids( $row ) as $attachment_id ) {
					if ( $this->maybe_backfill_attachment( $attachment_id ) ) {
						++$progress['backfilled_count'];
					}
				}

				// A mid-range timeout deliberately does NOT advance
				// `last_record_field_id` past `$range_start` (set below, only once the
				// whole range is done) - persisting a cursor inside a partially-processed
				// range would skip this range's remaining rows forever on resume.
				// `maybe_backfill_attachment()` is idempotent, so redoing the same range
				// from its start next time is safe, just not free.
				if ( $this->time_budget_exceeded( $started_at ) ) {
					$this->persist_progress_and_yield( $progress );
				}
			}

			$progress['last_record_field_id'] = $range_end;

			if ( $this->time_budget_exceeded( $started_at ) ) {
				$this->persist_progress_and_yield( $progress );
			}
		}
	}

	/**
	 * Decodes one `records_fields` row the same way `Record_Tools::iterate_request_line()`
	 * decodes it when a saved record is re-read for display/preset use (JSON-decode
	 * `field_value` when `field_attrs.is_encoded` is set, otherwise use it verbatim - see
	 * that method for why: `Form_Record\Controller::get_prepared_fields()` only encodes a
	 * non-scalar value, e.g. the list/array shapes a multi-file Media field produces),
	 * then normalizes the result through the same `normalize_attachment_ids()` shapes as
	 * every other source this migration reads.
	 *
	 * @param object $row Raw row with `field_value` and `field_attrs` columns.
	 *
	 * @return int[]
	 */
	private function extract_record_field_attachment_ids( $row ): array {
		$attrs = \Jet_Form_Builder\Classes\Tools::decode_json( $row->field_attrs );
		$value = empty( $attrs['is_encoded'] )
			? $row->field_value
			: \Jet_Form_Builder\Classes\Tools::decode_json( $row->field_value );

		return \JFB_Modules\Media_Cleanup\Module::normalize_attachment_ids( $value );
	}

	/**
	 * Mirrors `Media_Cleanup::normalize_attachment_ids()` so the same stored shapes
	 * (single numeric ID, comma-joined string, plain list, or `both`-shape
	 * `array( 'id' => .., 'url' => .. )` / list of those) resolve to the same attachment
	 * IDs the plugin's own cleanup code would see for this value.
	 *
	 * @param mixed $meta_value Raw `meta_value` column straight from `$wpdb->get_results()`.
	 *                          Unlike `get_post_meta()`, a direct `$wpdb` query does NOT run
	 *                          `maybe_unserialize()` on the row - a `both`/`ids` value stored
	 *                          as a serialized PHP array would otherwise reach
	 *                          `normalize_attachment_ids()` as its raw serialized string
	 *                          (e.g. `a:2:{i:0;s:1:"5";...}`), which is not numeric and has
	 *                          no comma, so every ID inside it would be silently dropped
	 *                          instead of backfilled.
	 *
	 * @return int[]
	 */
	private function extract_attachment_ids( $meta_value ): array {
		return \JFB_Modules\Media_Cleanup\Module::normalize_attachment_ids( maybe_unserialize( $meta_value ) );
	}

	/**
	 * Backfills `_jfb_uploaded_by_user` from `post_author` regardless of whether it is zero
	 * or a real user ID, and always pairs it with `_jfb_uploaded_by_user_heuristic = 1` so
	 * `Media_Cleanup::is_owned_by_current_actor()` can tell this guessed value apart from a
	 * live upload's ground-truth uploader ID. See this class's own docblock (search for
	 * "PHASE 2 IS A HEURISTIC") for why leaving `post_author = 0` unbackfilled was itself a
	 * security bug this method used to have, and why writing an explicit `0` here is what
	 * closes it: an unbackfilled attachment falls into `is_owned_by_current_actor()`'s
	 * unconditional-allow "no uploader meta at all" branch, which - combined with this
	 * migration also granting `_jfb_uploaded_by_form` to the same attachment - let any
	 * authenticated user claim or delete it via any post they control, the same primitive
	 * issues-tracker #20547 exists to close.
	 *
	 * @param int $attachment_id
	 *
	 * @return bool Whether this attachment was backfilled (false = not an attachment, or
	 *              already carrying the marker).
	 */
	private function maybe_backfill_attachment( int $attachment_id ): bool {
		if ( $attachment_id <= 0 ) {
			return false;
		}

		$attachment = get_post( $attachment_id );

		if ( ! $attachment instanceof \WP_Post || 'attachment' !== $attachment->post_type ) {
			return false;
		}

		if ( get_post_meta( $attachment_id, '_jfb_uploaded_by_form', true ) ) {
			return false;
		}

		update_post_meta( $attachment_id, '_jfb_uploaded_by_form', 1 );

		$uploader_id = absint( $attachment->post_author );

		/**
		 * A non-zero `post_author` writes `_jfb_uploaded_by_user` as normal; a zero
		 * `post_author` ALSO now writes it, explicitly, as `0` - unlike an earlier revision
		 * of this migration, which left `_jfb_uploaded_by_user` entirely absent for
		 * `post_author = 0` to preserve `is_owned_by_current_actor()`'s lenient "no
		 * uploader meta at all" branch. That earlier choice was itself the bug: "no
		 * uploader meta" is `is_owned_by_current_actor()`'s UNCONDITIONAL-allow branch (it
		 * returns `true` before checking webhook, `$owning_post_id`, or anything else) -
		 * the one branch meant only for attachments the marker system predates entirely.
		 * Combined with this migration ALSO granting `_jfb_uploaded_by_form` to the same
		 * attachment, an anonymously-uploaded legacy attachment left without
		 * `_jfb_uploaded_by_user` became claimable/deletable by ANY authenticated user via
		 * ANY post they control - `Media_Field_Parser::is_allowed_submitted_attachment()`
		 * accepts it into an unrelated post's meta on the strength of the unconditional
		 * branch alone, and a subsequent `delete_attachments()` call deletes it the same
		 * way. That is not meaningfully different from the original #20547 primitive; it
		 * is now closed by writing an explicit `0` here, which routes the same attachment
		 * through the anonymous-uploader branch instead (`Tools::is_webhook() ||
		 * $owning_post_id > 0` for deletion; `Tools::is_webhook()` only for acceptance into
		 * meta - see both call sites' own docblocks).
		 *
		 * `_jfb_uploaded_by_user_heuristic` is written alongside `_jfb_uploaded_by_user`
		 * regardless of whether the value is zero or non-zero: it marks this specific value
		 * as migration-inferred from `post_author`, not observed from a live upload
		 * request. This distinction is read by `Media_Cleanup::is_owned_by_current_actor()`:
		 * a live upload's uploader ID (zero or not) is ground truth (the actual
		 * `get_current_user_id()` at upload time, recorded directly by
		 * `Uploaded_File::add_attachment()`), so a live-uploaded attachment is bound
		 * strictly to that one identity. A migration-inferred value is only ever a
		 * plausible guess - `post_author` can legitimately be reassigned after upload for
		 * reasons unrelated to who actually uploaded the file (editorial cleanup, bulk
		 * ownership-transfer tools, a different user's later edit of the attachment's own
		 * post record, or - for the zero case specifically - an attachment created via
		 * import/WP-CLI/any programmatic path with no current user, never a real anonymous
		 * form submission at all). Marking it lets a verified-identity editor of the post
		 * it is demonstrably still attached to (`$owning_post_id`, only ever supplied by
		 * `delete_attachments()`) clean it up despite the guess, without granting that same
		 * exception to a live, ground-truth-bound upload.
		 */
		update_post_meta( $attachment_id, '_jfb_uploaded_by_user', $uploader_id );
		update_post_meta( $attachment_id, '_jfb_uploaded_by_user_heuristic', 1 );

		return true;
	}

	private function load_progress(): array {
		$stored = get_option( self::PROGRESS_OPTION, array() );

		if ( ! is_array( $stored ) ) {
			$stored = array();
		}

		return array_merge(
			array(
				'phase'                 => self::PHASE_COLLECT_KEYS,
				'last_form_id'          => 0,
				'meta_keys'             => array(),
				'field_names_by_form'   => array(),
				'last_meta_id'          => 0,
				'last_record_field_id'  => 0,
				'record_field_max_id'   => 0,
				'backfilled_count'      => 0,
			),
			$stored
		);
	}

	private function persist_progress( array $progress ) {
		update_option( self::PROGRESS_OPTION, $progress, false );
	}

	/**
	 * Writes the resume cursor FIRST, then commits: with `autocommit = 0`, an explicit
	 * `COMMIT` ends the current transaction and the next write opens a new implicit one.
	 * Committing before writing the cursor would leave the cursor itself in that fresh,
	 * uncommitted transaction - exactly what `Auto_Migrator::run()`'s catch-and-rollback of
	 * the exception below would then discard, defeating the whole point of committing
	 * early. Same reasoning as `Version_3_6_5_3::persist_progress_and_yield()`.
	 *
	 * @param array $progress
	 *
	 * @throws \Jet_Form_Builder\Migrations\Migration_Incomplete_Exception Always.
	 */
	private function persist_progress_and_yield( array $progress ) {
		$this->persist_progress( $progress );

		\Jet_Form_Builder\Db_Queries\Execution_Builder::instance()->transaction_commit();

		throw new \Jet_Form_Builder\Migrations\Migration_Incomplete_Exception( 'Media ownership backfill migration exceeded its time budget; will resume on the next request.' );
	}

	/**
	 * @param float $started_at `microtime( true )` value captured when this `up()` call
	 *                          started (covers both phases in this call, matching
	 *                          `Version_3_6_5_3`'s single-budget-per-call approach).
	 */
	private function time_budget_exceeded( float $started_at ): bool {
		$budget = (float) apply_filters(
			'jet-form-builder/media-ownership-migration/time-budget',
			self::TIME_BUDGET_SECONDS
		);

		return ( microtime( true ) - $started_at ) >= $budget;
	}
}
