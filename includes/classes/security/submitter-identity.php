<?php

namespace Jet_Form_Builder\Classes\Security;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * A stored submission is replayed later (email confirmation link, payment
 * return) in a request made by whoever opens the link. Its visitor-supplied
 * values must be processed with the identity of the user who sent the form,
 * never with the capabilities of the person who happens to trigger the
 * replay (an administrator opening a confirmation email).
 */
class Submitter_Identity {

	const REGISTER_USER_HOOK = 'jet-form-builder/before-do-action/register_user';

	/** @var int */
	private static $depth = 0;

	/**
	 * Whether a stored submission is being replayed right now.
	 *
	 * @return bool
	 */
	public static function is_replaying(): bool {
		return self::$depth > 0;
	}

	/**
	 * Runs the callback as the given user and restores the current user
	 * afterwards, also when the callback throws. A callback that ends the
	 * request (redirect + exit) ends it as the given user.
	 *
	 * Everything that reads the current user belongs inside: restoring the
	 * stored request rebuilds server-side values, and the actions check
	 * capabilities.
	 *
	 * Restoring the current user does not restore the browser session: when
	 * somebody else is logged in in the browser that opens the link, Register
	 * User creates the account without logging it in (as "Verify manually"
	 * does), so that session is not replaced.
	 *
	 * @param int      $user_id  The submitter, 0 for a guest submission.
	 * @param callable $callback
	 *
	 * @return mixed The callback result.
	 */
	public static function run( int $user_id, callable $callback ) {
		$previous = get_current_user_id();
		$user_id  = max( 0, $user_id );
		$guard    = $previous && $previous !== $user_id;

		if ( $guard ) {
			add_action( self::REGISTER_USER_HOOK, array( self::class, 'keep_session' ) );
		}

		wp_set_current_user( $user_id );
		++self::$depth;

		try {
			return $callback();
		} finally {
			--self::$depth;
			wp_set_current_user( $previous );

			if ( $guard ) {
				remove_action( self::REGISTER_USER_HOOK, array( self::class, 'keep_session' ) );
			}
		}
	}

	/**
	 * @param object $action Register User action.
	 */
	public static function keep_session( $action ) {
		if ( is_object( $action ) && isset( $action->settings ) && is_array( $action->settings ) ) {
			$action->settings['log_in'] = false;
		}
	}

	/**
	 * The submitter stored with a form record. An unknown value is a guest:
	 * never fall back to the user who triggers the replay.
	 *
	 * @param mixed $record Form record row.
	 *
	 * @return int
	 */
	public static function of_record( $record ): int {
		$user_id = is_array( $record ) && is_scalar( $record['user_id'] ?? null ) ? (int) $record['user_id'] : 0;

		return max( 0, $user_id );
	}
}
