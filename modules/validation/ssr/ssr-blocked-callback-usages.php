<?php


namespace JFB_Modules\Validation\Ssr;

use JFB_Modules\Validation\Advanced_Rules\Server_Side_Rule;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Read-only record of existing forms whose saved "Server-Side callback" rule names are on
 * the `Server_Side_Rule::NOT_ALLOWED` denylist, populated once by
 * `Migrations\Versions\Version_3_6_5_3` and kept live afterwards by `save_post_jet-form-
 * builder` (see `Module::refresh_blocked_callback_usages()`). A denylisted name is never
 * imported into `Ssr_Callback_Registry` and can never be approved — this is informational
 * only, so a `manage_options` admin can find and manually fix the affected forms instead of
 * only discovering the break when a visitor reports a form that stopped validating.
 *
 * Unlike the pending-callback registry, entries here have no approve/reject action: the
 * only "fix" is editing the form to remove or replace the blocked rule, which is why each
 * entry carries a form ID (for an edit-form link) and field name rather than just a
 * function name.
 *
 * Storage: one post meta entry per form (`META_KEY`), not one site-wide option. An earlier
 * revision of this class stored every form's entries together in a single option, keyed by
 * `form_id` inside the array — `replace_for_form()` then had to read-modify-write that
 * whole option on every single form save (or reusable-block save, since a blocked usage can
 * come from inside a referenced reusable block). Two forms saved close enough together could
 * both read the option before either wrote back, so whichever write landed second silently
 * discarded the other form's entry (review finding, issues-tracker #20361 follow-up) — and
 * an "optimistic concurrency" re-read-before-write fix for that turned out not to actually
 * detect the conflict, since `get_option()` is cached for the lifetime of the PHP request
 * (even without a persistent object cache backend) so both the snapshot and the "did it
 * change" re-read return the same cached value regardless of what another process wrote to
 * the DB in between (review finding, issues-tracker #20361 follow-up). Per-form post meta
 * removes the conflict at its root instead of working around it: two forms writing their own
 * meta touch two different `wp_postmeta` rows, so there is nothing left to race over.
 *
 * @since 3.6.5.3
 */
class Ssr_Blocked_Callback_Usages {

	const META_KEY = '_jfb_ssr_blocked_callback_usages';

	/**
	 * Walks the form's blocks (including reusable blocks) collecting SSR rules whose
	 * configured name is on the `Server_Side_Rule::NOT_ALLOWED` denylist. Shared between
	 * the one-time migration scan and the live `save_post_jet-form-builder` refresh so the
	 * two can never drift on what counts as "blocked."
	 *
	 * @since 3.6.5.3
	 *
	 * @param string $post_content
	 *
	 * @return array{field: string, name: string}[]
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

				if ( '' === $name || ! in_array( $name, Server_Side_Rule::NOT_ALLOWED, true ) ) {
					continue;
				}

				$found[] = array(
					'field' => (string) ( $block['attrs']['name'] ?? '' ),
					'name'  => $name,
				);
			}
		}

		return $found;
	}

	/**
	 * Replaces the given form's own blocked-usage entries. A plain `update_post_meta()`/
	 * `delete_post_meta()` on this one form's own meta row — no read-modify-write of shared
	 * state, so no concurrent-save conflict is possible between different forms (see the
	 * class docblock). Passing an empty `$usages` removes the meta entirely, which is
	 * exactly what should happen once the form's blocked rule is fixed or removed.
	 *
	 * @since 3.6.5.3
	 *
	 * @param int                                   $form_id
	 * @param array{field: string, name: string}[]  $usages Entries for this form only (no
	 *                                                       `form_id` key needed).
	 */
	public static function replace_for_form( int $form_id, array $usages ) {
		$clean = self::sanitize_entries( $usages );

		if ( empty( $clean ) ) {
			delete_post_meta( $form_id, self::META_KEY );

			return;
		}

		update_post_meta( $form_id, self::META_KEY, $clean );
	}

	/**
	 * @since 3.6.5.3
	 *
	 * @return array{field: string, name: string}[]
	 */
	public static function get_usages_for_form( int $form_id ): array {
		$stored = get_post_meta( $form_id, self::META_KEY, true );

		return is_array( $stored ) ? self::sanitize_entries( $stored ) : array();
	}

	/**
	 * Every form currently carrying at least one blocked-usage entry. Used by the settings
	 * tab to build the "Forms Using Blocked Functions" list — a `WP_Query` `meta_key`
	 * existence lookup across `jet-form-builder` posts, rather than reading one shared
	 * option, since the data itself now lives per-form (see the class docblock).
	 *
	 * @since 3.6.5.3
	 *
	 * @return array{form_id: int, field: string, name: string}[]
	 */
	public static function get_usages(): array {
		$query = new \WP_Query(
			array(
				'post_type'      => 'jet-form-builder',
				// Every status a form can meaningfully be in, matching the migration scan's
				// own `post_status` filter (`Version_3_6_5_3::up()`) — a trashed form can
				// still be restored and must not silently drop off this list in the meantime.
				'post_status'    => array( 'publish', 'draft', 'pending', 'private', 'future', 'trash' ),
				'meta_key'       => self::META_KEY, // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_key
				'fields'         => 'ids',
				'posts_per_page' => -1,
				'no_found_rows'  => true,
				'orderby'        => 'ID',
				'order'          => 'ASC',
			)
		);

		$usages = array();

		foreach ( $query->posts as $form_id ) {
			$form_id = (int) $form_id;

			foreach ( self::get_usages_for_form( $form_id ) as $entry ) {
				$usages[] = array(
					'form_id' => $form_id,
					'field'   => $entry['field'],
					'name'    => $entry['name'],
				);
			}
		}

		return $usages;
	}

	/**
	 * Removes a form's blocked-usage meta entirely. Used when a form is permanently deleted
	 * (`Module::remove_blocked_callback_usages_for_deleted_form()`); redundant with
	 * WordPress's own post meta cleanup on `wp_delete_post()` in the common case, but this
	 * project's `remove_blocked_callback_usages_for_deleted_form()` predates that assumption
	 * and calling it explicitly costs nothing.
	 *
	 * @since 3.6.5.3
	 */
	public static function clear_for_form( int $form_id ) {
		delete_post_meta( $form_id, self::META_KEY );
	}

	/**
	 * Removes every form's blocked-usage meta. Used by `Version_3_6_5_3::down()` to fully
	 * reverse the migration.
	 *
	 * @since 3.6.5.3
	 */
	public static function clear() {
		global $wpdb;

		$wpdb->delete( $wpdb->postmeta, array( 'meta_key' => self::META_KEY ) ); // phpcs:ignore WordPress.DB.DirectDatabaseQuery.DirectQuery, WordPress.DB.DirectDatabaseQuery.NoCaching, WordPress.DB.SlowDBQuery.slow_db_query_meta_key

		wp_cache_delete( 'last_changed', 'posts' );
	}

	/**
	 * @param array<int, array<string, mixed>> $usages
	 *
	 * @return array{field: string, name: string}[]
	 */
	private static function sanitize_entries( array $usages ): array {
		$clean = array();

		foreach ( $usages as $usage ) {
			$name = isset( $usage['name'] ) ? (string) $usage['name'] : '';

			if ( '' === $name ) {
				continue;
			}

			$clean[] = array(
				'field' => isset( $usage['field'] ) ? (string) $usage['field'] : '',
				'name'  => $name,
			);
		}

		return $clean;
	}

}
