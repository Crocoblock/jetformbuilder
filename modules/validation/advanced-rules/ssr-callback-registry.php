<?php


namespace JFB_Modules\Validation\Advanced_Rules;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Single, site-wide, admin-managed allowlist of custom function names that the
 * "Server-Side callback" validation rule (`Server_Side_Rule`) is permitted to invoke
 * via `call_user_func()`.
 *
 * Unlike the retired `Ssr_Callback_Allowlist`, this registry is never populated by
 * saving a form, a reusable block, a frontend submission, or a dynamic preset result.
 * A new custom function name is added here either by a `manage_options` admin explicitly
 * typing it in Settings, or — once, per site — by the legacy-migration import
 * (`Migrations\Versions\Version_3_6_5_3`) restoring names that were already in use before
 * the update. Either way, the name must clear the same validation
 * (`Server_Side_Rule::NOT_ALLOWED` denylist, not already a built-in, `function_exists()`)
 * before it becomes callable. This closes the original self-service trust gap (a form
 * editor typing an existing function name into a field never made that function callable
 * on its own) while still letting existing sites keep working after the update without
 * requiring a manual per-name review of every function already relied upon.
 *
 * @since 3.6.5.3
 */
class Ssr_Callback_Registry {

	const OPTION_KEY = 'jet_fb_ssr_allowed_callbacks_registry';

	/**
	 * @return string[] Lowercased, de-duplicated function names currently allowed.
	 */
	public static function get_allowed_callbacks(): array {
		return self::read_names_option( self::OPTION_KEY );
	}

	/**
	 * @return string[]
	 */
	private static function read_names_option( string $option_key ): array {
		$stored = get_option( $option_key, array() );

		if ( ! is_array( $stored ) ) {
			return array();
		}

		$stored = array_map( 'strtolower', array_filter( $stored, 'is_string' ) );

		return array_values( array_unique( $stored ) );
	}

	/**
	 * Validates and persists a new registry from raw admin-submitted textarea lines.
	 *
	 * Each line must, independently:
	 * - survive `Server_Side_Rule::sanitize_callback_name()` unchanged (only word
	 *   characters, same format rule enforced at validation time);
	 * - not be on the `Server_Side_Rule::NOT_ALLOWED` denylist;
	 * - not already be one of the built-in callbacks (those are offered separately and
	 *   never reach `call_user_func()`, so listing them here would be pure noise);
	 * - resolve to an existing PHP function.
	 *
	 * @since 3.6.5.3
	 *
	 * @param string[] $raw_lines Raw, unsanitized textarea lines (one name per line).
	 *
	 * @return array{saved: string[], rejected: array<string, string>} Accepted names and
	 *                                                                  rejected lines with
	 *                                                                  a human-readable
	 *                                                                  reason.
	 */
	public static function save_allowed_callbacks( array $raw_lines ): array {
		$saved    = array();
		$rejected = array();

		foreach ( $raw_lines as $raw_line ) {
			$line = trim( (string) $raw_line );

			if ( '' === $line ) {
				continue;
			}

			$error = '';
			$name  = self::validate_single_name( $line, $error );

			if ( '' === $name ) {
				$rejected[ $line ] = $error;

				continue;
			}

			$saved[ $name ] = true;
		}

		$saved = array_values( array_keys( $saved ) );

		update_option( self::OPTION_KEY, $saved, false );

		return array(
			'saved'    => $saved,
			'rejected' => $rejected,
		);
	}

	/**
	 * One-time legacy-migration entry point (`Migrations\Versions\Version_3_6_5_3`): merges
	 * a batch of static custom SSR callback names found in existing forms directly into the
	 * trusted, live registry — restoring backward compatibility for sites where those names
	 * were already relied upon before the update, without requiring a manual per-name
	 * review that many admins would never see or act on (issues-tracker #20361 follow-up).
	 *
	 * A name still only becomes trusted if it clears the exact same validation as the
	 * manual textarea path: not on the `Server_Side_Rule::NOT_ALLOWED` denylist, not
	 * already a built-in, and `function_exists()`. The denylist is therefore the primary
	 * safety barrier for this path — see docs/vulnerability/20361/not-allow-list.md for the
	 * audit that expanded it accordingly. A name that fails validation (most commonly:
	 * denylisted, or the providing plugin/theme is no longer active) is not imported and
	 * never silently retried — an admin who wants it can still add it manually in Settings.
	 *
	 * @since 3.6.5.3
	 *
	 * @param string[] $raw_lines Raw, unsanitized names (one per entry).
	 *
	 * @return array{imported: string[], rejected: array<string, string>} Names merged into
	 *                                                                     the trusted list
	 *                                                                     and rejected names
	 *                                                                     with a reason.
	 */
	public static function import_trusted_callbacks( array $raw_lines ): array {
		$trusted = array();

		foreach ( self::get_allowed_callbacks() as $name ) {
			$trusted[ $name ] = true;
		}

		$imported = array();
		$rejected = array();

		foreach ( $raw_lines as $raw_line ) {
			$line = trim( (string) $raw_line );

			if ( '' === $line ) {
				continue;
			}

			$error = '';
			$name  = self::validate_single_name( $line, $error );

			if ( '' === $name ) {
				$rejected[ $line ] = $error;

				continue;
			}

			if ( isset( $trusted[ $name ] ) ) {
				continue;
			}

			$trusted[ $name ] = true;
			$imported[]       = $name;
		}

		if ( ! empty( $imported ) ) {
			update_option( self::OPTION_KEY, array_values( array_keys( $trusted ) ), false );
		}

		return array(
			'imported' => $imported,
			'rejected' => $rejected,
		);
	}

	/**
	 * Shared per-name validation used by `save_allowed_callbacks()` and
	 * `import_trusted_callbacks()`.
	 *
	 * `Server_Side_Rule::FIXED_SAFE` names (e.g. `rest_is_boolean`) are rejected here the
	 * same as an `is_builtin_callback()` name: `Server_Side_Rule::get_allowed_callbacks()`
	 * already merges `FIXED_SAFE` into the effective allowed set unconditionally, so such a
	 * name validates and runs regardless of whether it is also present in this registry.
	 * Accepting it here would let an admin "add" it as if it were a genuinely new custom
	 * callback, and — for `import_trusted_callbacks()` specifically — let the legacy
	 * migration queue it as "restored" in its notice even though nothing about its trust
	 * status actually changed (review finding, issues-tracker #20361 follow-up).
	 *
	 * @since 3.6.5.3
	 *
	 * @param string $raw_line Raw, unsanitized function name.
	 * @param string $error    By-reference human-readable rejection reason, set only when
	 *                         an empty string is returned.
	 *
	 * @return string Sanitized, lowercase function name, or '' if rejected.
	 */
	private static function validate_single_name( string $raw_line, string &$error = '' ): string {
		$name = Server_Side_Rule::sanitize_callback_name( $raw_line );

		if ( '' === $name ) {
			$error = __( 'Only letters, numbers and underscores are allowed.', 'jet-form-builder' );

			return '';
		}

		if ( in_array( $name, Server_Side_Rule::NOT_ALLOWED, true ) ) {
			$error = __( 'This function is on the built-in denylist and can never be allowed.', 'jet-form-builder' );

			return '';
		}

		if ( Server_Side_Rule::is_builtin_callback( $name ) || in_array( $name, Server_Side_Rule::FIXED_SAFE, true ) ) {
			$error = __( 'This is already a built-in callback and does not need to be added here.', 'jet-form-builder' );

			return '';
		}

		if ( ! function_exists( $name ) ) {
			$error = __( 'No such PHP function exists.', 'jet-form-builder' );

			return '';
		}

		return $name;
	}

	/**
	 * Derives a stable, opaque identifier for a custom callback name, used only when
	 * rendering the public `data-validation-rules` JSON attribute
	 * (`Module::add_validation_block()`). It is not a secret and is never used by the
	 * server to select a callback — the server always resolves the callback from the
	 * clean name stored in the form itself. It exists purely so the plain function name
	 * is not exposed verbatim in rendered markup.
	 *
	 * Deterministic per name, stable across requests/page loads, but salted with
	 * `wp_salt()` so it isn't guessable/reproducible off-site.
	 *
	 * @since 3.6.5.3
	 */
	public static function id_for_callback( string $function_name ): string {
		return substr( hash_hmac( 'sha256', strtolower( $function_name ), wp_salt() ), 0, 12 );
	}

}
