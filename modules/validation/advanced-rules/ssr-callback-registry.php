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
 * The only way a custom function name enters this list is a `manage_options` admin
 * explicitly adding it in Settings. This closes the self-service trust gap: a form
 * editor typing an existing function name into a field no longer makes that function
 * callable.
 *
 * @since 3.6.5.3
 */
class Ssr_Callback_Registry {

	const OPTION_KEY = 'jet_fb_ssr_allowed_callbacks_registry';

	/**
	 * Names imported by a migration (currently `Version_3_6_5_3`) but not yet reviewed by a
	 * `manage_options` admin. Stored separately from `OPTION_KEY` and never read by
	 * `Server_Side_Rule::get_allowed_callbacks()` — a name here is not callable until it is
	 * explicitly moved into `OPTION_KEY` via `approve_pending_callback()`.
	 *
	 * @since 3.6.5.3
	 */
	const PENDING_OPTION_KEY = 'jet_fb_ssr_pending_callbacks_registry';

	/**
	 * @return string[] Lowercased, de-duplicated function names currently allowed.
	 */
	public static function get_allowed_callbacks(): array {
		return self::read_names_option( self::OPTION_KEY );
	}

	/**
	 * @since 3.6.5.3
	 *
	 * @return string[] Lowercased, de-duplicated function names imported but not yet
	 *                   approved by an admin. Never consulted by SSR validation.
	 */
	public static function get_pending_callbacks(): array {
		return self::read_names_option( self::PENDING_OPTION_KEY );
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
	 * A name that lands in the trusted list this way — including one that happens to match
	 * an entry already sitting in the pending-review queue — is also removed from that
	 * queue: an admin who directly types a pending name into this textarea has, in effect,
	 * already reviewed and approved it, and leaving it duplicated in Pending Review would
	 * be confusing (it would otherwise keep showing as awaiting a decision that was already
	 * made through this other path).
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

		$pending = array_values( array_diff( self::get_pending_callbacks(), $saved ) );
		update_option( self::PENDING_OPTION_KEY, $pending, false );

		return array(
			'saved'    => $saved,
			'rejected' => $rejected,
		);
	}

	/**
	 * Validates and merges raw legacy callback names into the pending queue, used only by
	 * the one-time registry migration (`Version_3_6_5_3`). Names already present in the
	 * live, trusted `OPTION_KEY` list are skipped (no need to re-review something an admin
	 * already approved) and never downgraded. Applies the exact same per-name validation as
	 * `save_allowed_callbacks()`.
	 *
	 * @since 3.6.5.3
	 *
	 * @param string[] $raw_lines Raw, unsanitized names (one per entry).
	 *
	 * @return array{saved: string[], rejected: array<string, string>} `saved` here means
	 *                                                                  "queued for review,"
	 *                                                                  not "trusted."
	 */
	public static function add_pending_callbacks( array $raw_lines ): array {
		$trusted = self::get_allowed_callbacks();
		$pending = array();

		foreach ( self::get_pending_callbacks() as $name ) {
			$pending[ $name ] = true;
		}

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

			if ( in_array( $name, $trusted, true ) ) {
				continue;
			}

			$pending[ $name ] = true;
			$saved[ $name ]   = true;
		}

		update_option( self::PENDING_OPTION_KEY, array_values( array_keys( $pending ) ), false );

		return array(
			'saved'    => array_values( array_keys( $saved ) ),
			'rejected' => $rejected,
		);
	}

	/**
	 * Moves pending names into the trusted, live registry after an admin approves them.
	 * Re-validates each name (denylist/builtin/`function_exists()`) at approval time, since
	 * time may have passed since import — e.g. a plugin providing the function could have
	 * been deactivated. A name that fails re-validation stays in the pending queue rather
	 * than being discarded: it is reported as rejected for this one response, but an admin
	 * who fixes the underlying cause (e.g. reactivates the plugin) can still find and
	 * approve it later instead of it silently vanishing with no trace.
	 *
	 * @since 3.6.5.3
	 *
	 * @param string[] $names Pending function names to approve.
	 *
	 * @return array{approved: string[], rejected: array<string, string>}
	 */
	public static function approve_pending_callbacks( array $names ): array {
		$pending = self::get_pending_callbacks();
		$trusted = array();

		foreach ( self::get_allowed_callbacks() as $name ) {
			$trusted[ $name ] = true;
		}

		$approved = array();
		$rejected = array();

		foreach ( $names as $raw_name ) {
			$name = strtolower( trim( (string) $raw_name ) );

			if ( '' === $name || ! in_array( $name, $pending, true ) ) {
				continue;
			}

			$error    = '';
			$verified = self::validate_single_name( $name, $error );

			if ( '' === $verified ) {
				$rejected[ $name ] = $error;

				continue;
			}

			$pending = array_values( array_diff( $pending, array( $name ) ) );

			$trusted[ $verified ] = true;
			$approved[]           = $verified;
		}

		update_option( self::PENDING_OPTION_KEY, $pending, false );
		update_option( self::OPTION_KEY, array_values( array_keys( $trusted ) ), false );

		return array(
			'approved' => $approved,
			'rejected' => $rejected,
		);
	}

	/**
	 * Removes names from the pending queue without trusting them. Does not touch the
	 * trusted `OPTION_KEY` list.
	 *
	 * @since 3.6.5.3
	 *
	 * @param string[] $names Pending function names to discard.
	 *
	 * @return string[] Remaining pending names after removal.
	 */
	public static function discard_pending_callbacks( array $names ): array {
		$discard = array_map(
			static function ( $name ) {
				return strtolower( trim( (string) $name ) );
			},
			$names
		);

		$pending = array_values( array_diff( self::get_pending_callbacks(), $discard ) );

		update_option( self::PENDING_OPTION_KEY, $pending, false );

		return $pending;
	}

	/**
	 * Shared per-name validation used by `save_allowed_callbacks()`,
	 * `add_pending_callbacks()`, and `approve_pending_callbacks()`.
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

		if ( Server_Side_Rule::is_builtin_callback( $name ) ) {
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
