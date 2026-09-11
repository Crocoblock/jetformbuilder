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
 * @since 3.6.5.3
 */
class Ssr_Blocked_Callback_Usages {

	const OPTION_KEY = 'jet_fb_ssr_blocked_callback_usages';

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
	 * @param array{form_id: int, field: string, name: string}[] $usages
	 */
	public static function set_usages( array $usages ) {
		update_option( self::OPTION_KEY, self::sanitize_usages( $usages ), false );
	}

	/**
	 * Replaces every recorded usage for a single form with the given set, leaving every
	 * other form's entries untouched. Passing an empty `$usages` removes the form entirely,
	 * which is exactly what should happen once its blocked rule is fixed or removed.
	 *
	 * @since 3.6.5.3
	 *
	 * @param int                                        $form_id
	 * @param array{field: string, name: string}[]        $usages Entries for this form only
	 *                                                             (no `form_id` key needed).
	 */
	public static function replace_for_form( int $form_id, array $usages ) {
		$remaining = array_values(
			array_filter(
				self::get_usages(),
				static function ( $usage ) use ( $form_id ) {
					return ( (int) ( $usage['form_id'] ?? 0 ) ) !== $form_id;
				}
			)
		);

		foreach ( $usages as $usage ) {
			$remaining[] = array(
				'form_id' => $form_id,
				'field'   => (string) ( $usage['field'] ?? '' ),
				'name'    => (string) ( $usage['name'] ?? '' ),
			);
		}

		update_option( self::OPTION_KEY, self::sanitize_usages( $remaining ), false );
	}

	/**
	 * @return array{form_id: int, field: string, name: string}[]
	 */
	public static function get_usages(): array {
		$stored = get_option( self::OPTION_KEY, array() );

		return is_array( $stored ) ? $stored : array();
	}

	public static function clear() {
		delete_option( self::OPTION_KEY );
	}

	/**
	 * @param array<int, array<string, mixed>> $usages
	 *
	 * @return array{form_id: int, field: string, name: string}[]
	 */
	private static function sanitize_usages( array $usages ): array {
		$clean = array();

		foreach ( $usages as $usage ) {
			$form_id = isset( $usage['form_id'] ) ? (int) $usage['form_id'] : 0;
			$name    = isset( $usage['name'] ) ? (string) $usage['name'] : '';

			if ( $form_id <= 0 || '' === $name ) {
				continue;
			}

			$clean[] = array(
				'form_id' => $form_id,
				'field'   => isset( $usage['field'] ) ? (string) $usage['field'] : '',
				'name'    => $name,
			);
		}

		return $clean;
	}

}
