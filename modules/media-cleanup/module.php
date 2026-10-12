<?php

namespace JFB_Modules\Media_Cleanup;

use Jet_Form_Builder\Classes\Tools;
use JFB_Components\Module\Base_Module_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Module implements Base_Module_It {

	/** @var Media_Ownership_Migration_Notice */
	private $media_ownership_migration_notice;

	public function rep_item_id() {
		return 'media-cleanup';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		$this->media_ownership_migration_notice = new Media_Ownership_Migration_Notice();
		$this->media_ownership_migration_notice->init_hooks();
	}

	public static function collect_post_meta_attachment_ids( int $post_id, array $meta_keys ): array {
		$attachment_ids = array();

		foreach ( $meta_keys as $meta_key ) {
			$attachment_ids = array_merge(
				$attachment_ids,
				self::normalize_attachment_ids(
					get_post_meta( $post_id, $meta_key, true )
				)
			);
		}

		return self::normalize_attachment_ids( $attachment_ids );
	}

	public static function maybe_delete_attachments(
		array $old_attachment_ids,
		array $new_attachment_ids = array(),
		int $context_post_id = 0
	): void {
		$attachment_ids_to_delete = self::diff_attachment_ids(
			$old_attachment_ids,
			$new_attachment_ids
		);
		if ( empty( $attachment_ids_to_delete ) ) {
			return;
		}
		self::delete_attachments( $attachment_ids_to_delete, $context_post_id );
	}

	public static function diff_attachment_ids( array $old_attachment_ids, array $new_attachment_ids ): array {
		$old_attachment_ids = self::normalize_attachment_ids( $old_attachment_ids );
		$new_attachment_ids = self::normalize_attachment_ids( $new_attachment_ids );
		return array_values(
			array_diff( $old_attachment_ids, $new_attachment_ids )
		);
	}

	public static function normalize_attachment_ids( $value ): array {
		if ( empty( $value ) ) {
			return array();
		}

		if ( is_numeric( $value ) ) {
			return array( absint( $value ) );
		}

		if ( is_string( $value ) ) {
			$value = array_map( 'trim', explode( ',', $value ) );
		}

		if ( ! is_array( $value ) ) {
			return array();
		}

		$ids = array();

		foreach ( $value as $item ) {
			if ( is_numeric( $item ) ) {
				$ids[] = absint( $item );
				continue;
			}

			if ( is_array( $item ) && isset( $item['id'] ) && is_numeric( $item['id'] ) ) {
				$ids[] = absint( $item['id'] );
			}
		}

		return array_values(
			array_unique(
				array_filter(
					array_map( 'absint', $ids )
				)
			)
		);
	}

	/**
	 * Deletes plugin-owned attachments (marked with `_jfb_uploaded_by_form` at
	 * upload time) that were removed from a post's media field on this request.
	 *
	 * These attachments may have `post_author = 0` (anonymous form submissions),
	 * so WordPress core's `current_user_can( 'delete_post', $attachment_id )`
	 * cannot express their real ownership: `map_meta_cap()` only recognizes
	 * "author owns it" when `post_author` is truthy, so a `post_author = 0`
	 * attachment can never pass that check for anyone, including the
	 * legitimate logged-in editor of the post it's attached to. Ownership is
	 * therefore asserted via a combination of:
	 * - the request's already-verified authorization to edit the owning post
	 *   ($context_post_id), checked the same way `Post_Id_Property::can_attach()`
	 *   authorizes the request on the only call path that reaches this method
	 *   (post_author match OR edit_post OR webhook) - using only the narrower
	 *   edit_post-or-webhook check here would silently skip cleanup for a
	 *   legitimate post owner on a post type whose capability mapping doesn't
	 *   resolve edit_post true for its own author (e.g. a custom
	 *   map_meta_cap callback), even though insert_post already authorized
	 *   the very same request to update that post; and
	 * - a per-attachment uploader check ($this->is_owned_by_current_actor()):
	 *   a logged-in uploader's attachments can only be deleted by that same
	 *   user, so an editor of $context_post_id cannot delete an attachment
	 *   another user legitimately uploaded for an unrelated post just because
	 *   both happen to carry the plugin's upload marker. Attachments uploaded
	 *   before this per-uploader binding existed (no `_jfb_uploaded_by_user`
	 *   meta at all) fall back to the pre-existing marker + edit_post check
	 *   only - a deliberate, documented compatibility trade-off (see
	 *   changelog) since there is no way to retroactively know their real
	 *   uploader. Attachments explicitly recorded as anonymously uploaded
	 *   (uploader id `0`) are different: that is an ongoing, current-day case
	 *   (every anonymous form submission), not a legacy gap, so it is never
	 *   allowed via the edit_post fallback - only `Tools::is_webhook()` may
	 *   delete them, since no verifiable per-request identity exists to bind
	 *   them to.
	 *
	 * @param array $attachment_ids
	 * @param int   $context_post_id The post these attachments are being
	 *                                removed from; the caller must have already
	 *                                authorized the current request to edit it.
	 */
	public static function delete_attachments( array $attachment_ids, int $context_post_id = 0 ): void {

		$attachment_ids = self::normalize_attachment_ids( $attachment_ids );

		if ( empty( $attachment_ids ) ) {
			return;
		}

		$authorization = self::authorize_context_post( $context_post_id );

		if ( ! $authorization['authorized'] ) {
			return;
		}

		foreach ( $attachment_ids as $attachment_id ) {
			if ( 'attachment' !== get_post_type( $attachment_id ) ) {
				continue;
			}

			if ( ! get_post_meta( $attachment_id, '_jfb_uploaded_by_form', true ) ) {
				continue;
			}

			/**
			 * `authorize_context_post()` above already rejects every logged-out request
			 * outright (see its own docblock for why the anonymous post_author-match branch
			 * `Post_Id_Property::can_attach()` still grants - issues-tracker #20547's
			 * still-open Defect 3 - is deliberately NOT accepted as authorization here), so
			 * `$authorization['verified_identity']` is currently always `=== true` by the
			 * time this line runs. It is still checked explicitly (rather than assuming
			 * `authorized` alone is enough) so this call site stays correct on its own terms
			 * even if `authorize_context_post()` is ever changed to reintroduce a
			 * non-verified authorized branch - `is_owned_by_current_actor()`'s
			 * anonymous-uploader exception must never be unlocked by anything less than a
			 * verified identity, regardless of what else may authorize the request to edit
			 * the post in the future.
			 */
			if ( ! self::is_owned_by_current_actor( $attachment_id, $authorization['verified_identity'] ? $context_post_id : 0 ) ) {
				continue;
			}

			wp_delete_attachment( $attachment_id, true );
		}
	}

	/**
	 * Authorizes the current request to run CLEANUP against `$context_post_id`. Unlike
	 * `Post_Id_Property::can_attach()` (which this otherwise mirrors for post_author match /
	 * edit_post / webhook), a logged-out request is deliberately NEVER authorized here, even
	 * though `can_attach()` currently authorizes it via `post_author === 0 === get_current_user_id()`
	 * (issues-tracker #20547's still-open Defect 3, modules/actions-v2/insert-post/properties/
	 * post-id-property.php - not fixed by this file). That anonymous match is not a
	 * verifiable identity: because Defect 3 lets ANY anonymous visitor get authorized on
	 * ANY `post_author = 0` post, not just one they created, relying on it here would let an
	 * attacker delete a stranger's anonymously-uploaded attachment by first getting
	 * "authorized" on the stranger's own carrier post through that same anonymous match -
	 * reopening the exact "delete a stranger's file" primitive #20547 exists to close, just
	 * laundered through Defect 3 instead of the original PoC's chain. Cleanup for a
	 * logged-out request is therefore only ever performed via `Tools::is_webhook()`, which
	 * `delete_attachments()` still allows.
	 *
	 * The trade-off: an anonymous visitor can no longer have their OWN, legitimately
	 * removed-from-the-field attachment cleaned up automatically either - it is simply left
	 * in the Media Library instead of being deleted. This is the same fail-closed posture
	 * already documented for the anonymous-upload case elsewhere in this fix (see
	 * `is_owned_by_current_actor()`'s docblock) and in `readme.md`'s "Что осознанно осталось
	 * вне скоупа" section: anonymous form submitters never get automatic file cleanup
	 * without going through a webhook or an admin, by design.
	 *
	 * `verified_identity` in the return value is kept (rather than collapsing this to a
	 * plain bool) so `delete_attachments()`'s call to `is_owned_by_current_actor()` stays
	 * self-documenting about WHY it passes `0` vs `$context_post_id` - it is always
	 * `=== authorized` now that the anonymous branch is gone, but keeping the explicit field
	 * name at the call site is clearer than an implicit "true always means verified" rule a
	 * future change could silently invalidate by reintroducing an unverified branch here.
	 *
	 * @param int $context_post_id
	 *
	 * @return array{authorized: bool, verified_identity: bool}
	 */
	private static function authorize_context_post( int $context_post_id ): array {
		if ( Tools::is_webhook() ) {
			return array(
				'authorized'        => true,
				'verified_identity' => true,
			);
		}

		$current_user_id = get_current_user_id();

		if ( $current_user_id > 0 ) {
			$post = get_post( $context_post_id );

			if ( $post instanceof \WP_Post && absint( $post->post_author ) === $current_user_id ) {
				return array(
					'authorized'        => true,
					'verified_identity' => true,
				);
			}

			if ( current_user_can( 'edit_post', $context_post_id ) ) {
				return array(
					'authorized'        => true,
					'verified_identity' => true,
				);
			}
		}

		return array(
			'authorized'        => false,
			'verified_identity' => false,
		);
	}

	/**
	 * Shared ownership check for the plugin's `_jfb_uploaded_by_user` marker, used by BOTH
	 * `delete_attachments()` here (may this attachment be deleted?) and
	 * `Media_Field_Parser::is_allowed_submitted_attachment()` (may this attachment ID be
	 * accepted into a post's meta?). The two questions apply the exact same trust model -
	 * "does the current actor match who the plugin recorded as having uploaded this file?"
	 * - so they share this one implementation instead of two independently maintained
	 * copies that could silently drift apart.
	 *
	 * An attachment uploaded by a logged-in user may only be claimed (deleted OR newly
	 * attached to a post) by that same user. Attachments carrying `_jfb_uploaded_by_form`
	 * but NO `_jfb_uploaded_by_user` meta at all fall through to an unconditional allow
	 * below, since there is nothing to bind them to. Both `Uploaded_File::add_attachment()`
	 * (live uploads) and `Version_3_6_6::maybe_backfill_attachment()` (the migration) always
	 * write BOTH markers together - including an explicit `_jfb_uploaded_by_user = 0` for
	 * the anonymous case, precisely so a marked attachment never ends up in this
	 * unconditional branch just because its real uploader happens to be "nobody" (see
	 * `maybe_backfill_attachment()`'s docblock for why an earlier revision that left this
	 * meta unset for `post_author = 0` was itself a security bug: this branch is meant only
	 * for attachments that predate the marker system outright, and granting it to a marked
	 * anonymous upload let any authenticated user claim/delete it via any post they
	 * control). This branch is therefore not expected to be reachable through this fix's
	 * own code paths going forward; it remains only as a documented fallback for an
	 * attachment some other, unrelated code path marked `_jfb_uploaded_by_form` without
	 * also setting an uploader value.
	 *
	 * An anonymously-uploaded attachment (uploader id `0`) cannot be told apart from a
	 * stranger's anonymous upload by identity alone, since `0` is also what any logged-out
	 * visitor's `get_current_user_id()` returns - claiming it on that basis would let any
	 * anonymous visitor claim any other anonymous visitor's upload. `$owning_post_id` is
	 * the one exception a caller can supply: when the caller has ALREADY (a) verified the
	 * attachment ID was found in that specific post's own pre-save meta (proving it, not
	 * some other post's anonymous upload, is what's being claimed) and (b) authorized the
	 * current request to edit that same post via a VERIFIED IDENTITY - `Tools::is_webhook()`,
	 * or a logged-in user's own `post_author` match / `edit_post` capability - never the
	 * anonymous `post_author === 0 === get_current_user_id()` match alone. That last
	 * distinction is load-bearing: `Post_Id_Property::can_attach()` (issues-tracker #20547's
	 * still-open Defect 3) currently authorizes ANY anonymous visitor to edit ANY post with
	 * `post_author = 0`, not just the post its own submission created, so an anonymous
	 * post_author match proves nothing about who "the requester" actually is - passing it
	 * through as ownership proof would let an attacker claim a stranger's anonymous upload
	 * by first getting `Post_Id_Property::can_attach()` to authorize them on that stranger's
	 * carrier post (trivial today, see Defect 3), then deleting the attachment through that
	 * post's own cleanup. `delete_attachments()` is the only caller that can supply a
	 * verified identity (via `authorize_context_post()` and the diff in
	 * `maybe_delete_attachments()`), and only passes `$owning_post_id` when
	 * `authorize_context_post()` reports `verified_identity => true`. `Media_Field_Parser::
	 * is_allowed_submitted_attachment()` has no post context at all at the point it runs
	 * (see `Uploaded_File::add_attachment()`'s docblock on why no post is authorized yet
	 * when a field is parsed), so it always omits this parameter and an anonymous upload
	 * remains claimable there only via `Tools::is_webhook()` - including by the very same
	 * anonymous submitter resubmitting their own not-yet-authorized form. Concretely: if that
	 * form's Media field has "Delete removed attachments" enabled, an anonymous visitor who
	 * uploads a file and then resubmits the SAME form (e.g. multi-step form, validation
	 * retry, or simply re-saving the post) WITHOUT changing that field will have their own
	 * just-uploaded, still-wanted attachment physically deleted - `sanitize_submitted_
	 * attachment_ids()` drops the ID from the "new" snapshot, `Media_Cleanup::
	 * maybe_delete_attachments()` sees it missing from the diff, and `wp_delete_attachment()`
	 * runs. This is a known, deliberate limitation, not an oversight - the request has no
	 * way to prove "still the same visitor" beyond a session this check does not rely on -
	 * but it is a real, user-facing data-loss risk for anonymous-upload + cleanup-enabled
	 * forms, not merely a cosmetic "field forgets its value" annoyance. Closing it properly
	 * needs a verifiable, request-scoped identity for anonymous uploads (e.g. binding the
	 * upload to the plugin's own CSRF/session token infrastructure in modules/security/csrf/,
	 * available at field-parse time) rather than `get_current_user_id()`, which cannot
	 * distinguish anonymous visitors from each other; tracked as a follow-up, not fixed by
	 * this parameter.
	 *
	 * @param int $attachment_id
	 * @param int $owning_post_id Optional. A post ID the caller has already verified this
	 *                            attachment ID came from AND authorized the current request
	 *                            to edit via a verified (non-anonymous-match) identity. Only
	 *                            ever passed by `delete_attachments()`.
	 *
	 * @return bool
	 */
	public static function is_owned_by_current_actor( int $attachment_id, int $owning_post_id = 0 ): bool {
		$has_uploader_meta = metadata_exists( 'post', $attachment_id, '_jfb_uploaded_by_user' );

		if ( ! $has_uploader_meta ) {
			return true;
		}

		$uploader_id = (int) get_post_meta( $attachment_id, '_jfb_uploaded_by_user', true );

		if ( ! $uploader_id ) {
			return Tools::is_webhook() || $owning_post_id > 0;
		}

		if ( get_current_user_id() === $uploader_id || Tools::is_webhook() ) {
			return true;
		}

		/**
		 * A non-zero `_jfb_uploaded_by_user` is normally ground truth - `Uploaded_File::
		 * add_attachment()` records the actual `get_current_user_id()` at upload time, so
		 * requiring an exact match is correct and intentionally has no `$owning_post_id`
		 * fallback (unlike the anonymous-uploader branch above): that strictness is exactly
		 * what stops one user from claiming another user's real upload.
		 *
		 * `Version_3_6_6::maybe_backfill_attachment()` is the one exception: it writes this
		 * same meta key from `post_author` as a best-effort GUESS for pre-fix attachments,
		 * not an observed fact, and marks that with `_jfb_uploaded_by_user_heuristic` (see
		 * that method's docblock for why `post_author` can be stale/reassigned and is not
		 * reliable enough to lock an attachment to forever). Without this exception, a
		 * legacy attachment whose `post_author` no longer matches its post's actual current
		 * editor would become permanently unmanageable by anyone but that one guessed user
		 * or a webhook - worse than the pre-fix state, where an unmarked attachment was
		 * freely manageable by any `edit_post`-authorized editor of its post. For a
		 * heuristic value specifically, the same verified-identity `$owning_post_id`
		 * exception the anonymous branch above uses also applies here.
		 */
		if ( $owning_post_id > 0 && get_post_meta( $attachment_id, '_jfb_uploaded_by_user_heuristic', true ) ) {
			return true;
		}

		return false;
	}

	public function remove_hooks() {
		if ( $this->media_ownership_migration_notice ) {
			$this->media_ownership_migration_notice->remove_hooks();
		}
	}

	/**
	 * Names of Media fields (any value format) that the current user is not allowed to
	 * change, because they lack the field's "user access" capability.
	 *
	 * File_Uploader checks that capability only when a file is uploaded, so a submission without
	 * a file would otherwise still be able to write attachment IDs. The value is not emptied:
	 * a permission failure must never turn an unchanged field into a removal request, so callers
	 * skip these fields entirely and leave the stored meta (and its attachments) untouched.
	 * Other fields mapped to the same target are not affected.
	 *
	 * @param object $modifier Insert/Update Post modifier (uses `fields_map`).
	 *
	 * @return string[] Field names.
	 */
	public static function get_locked_media_field_names( $modifier ): array {
		$form_id = jet_fb_action_handler()->get_form_id();
		if ( ! $form_id || empty( $modifier->fields_map ) ) {
			return array();
		}
		// Parse the form once: get_field_by_name() reparses it on every call without $blocks.
		$blocks = \Jet_Form_Builder\Blocks\Block_Helper::get_blocks_by_post( $form_id );
		if ( empty( $blocks ) ) {
			return array();
		}
		$names = array();
		foreach ( $modifier->fields_map as $field_name => $meta_key ) {
			if ( empty( $field_name ) || empty( $meta_key ) ) {
				continue;
			}
			$field = jet_form_builder()->form->get_field_by_name(
				$form_id,
				$field_name,
				$blocks
			);
			if ( self::is_media_field_locked( $field ) ) {
				$names[] = $field_name;
			}
		}
		return $names;
	}

	/**
	 * @param mixed $field Parsed block array.
	 *
	 * @return bool
	 */
	public static function is_media_field_locked( $field ): bool {
		if ( ! is_array( $field ) || 'jet-forms/media-field' !== ( $field['blockName'] ?? '' ) ) {
			return false;
		}
		// Regardless of value format / insert_attachment: without a file the parser passes the
		// submitted value (a URL included) through as is, so the capability applies to every format.
		return ! \JFB_Modules\Block_Parsers\File_Uploader::is_permitted( $field['attrs'] ?? array() );
	}

	public static function get_post_meta_keys_for_cleanup( $modifier ): array {
		$form_id = jet_fb_action_handler()->get_form_id();
		if ( ! $form_id || empty( $modifier->fields_map ) ) {
			return array();
		}
		$meta_keys = array();
		foreach ( $modifier->fields_map as $field_name => $meta_key ) {
			if ( empty( $field_name ) || empty( $meta_key ) ) {
				continue;
			}
			$field = jet_form_builder()->form->get_field_by_name(
				$form_id,
				$field_name
			);
			if ( ! self::is_cleanup_enabled_media_field( $field ) ) {
				continue;
			}
			$meta_keys[] = $meta_key;
		}
		return array_values(
			array_unique(
				array_filter( $meta_keys )
			)
		);
	}

	private static function is_cleanup_enabled_media_field( $field ): bool {
		if ( ! is_array( $field ) || empty( $field ) ) {
			return false;
		}
		if ( 'jet-forms/media-field' !== ( $field['blockName'] ?? '' ) ) {
			return false;
		}
		$attrs = $field['attrs'] ?? array();
		if ( empty( $attrs['delete_uploaded_attachment'] ) ) {
			return false;
		}
		if ( empty( $attrs['insert_attachment'] ) ) {
			return false;
		}
		return in_array(
			$attrs['value_format'] ?? 'url',
			array( 'id', 'ids', 'both' ),
			true
		);
	}
}
