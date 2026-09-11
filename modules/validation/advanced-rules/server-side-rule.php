<?php


namespace JFB_Modules\Validation\Advanced_Rules;

use JFB_Modules\Validation\Ssr;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Repository\Repository_Pattern_Trait;
use JFB_Modules\Block_Parsers\Field_Data_Parser;
use JFB_Modules\Validation\Handlers\Validation_Handler;
use Jet_Form_Builder\Request\Request_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Server_Side_Rule extends Rule {

	use Repository_Pattern_Trait;

	/**
	 * Blacklist of dangerous functions that should never be allowed as callbacks.
	 * All values MUST be lowercase for case-insensitive comparison.
	 *
	 * @since 3.5.6.2 Security fix: expanded list and case-insensitive check
	 */
	const NOT_ALLOWED = array(
		// Debug/output functions
		'var_dump',
		'var_export',
		'print_r',
		'sprintf',
		'printf',
		// Command execution
		'shell_exec',
		'system',
		'exec',
		'passthru',
		'proc_open',
		'popen',
		'pcntl_exec',
		'proc_nice',
		'proc_terminate',
		'proc_close',
		// Code execution
		'eval',
		'assert',
		'create_function',
		'call_user_func',
		'call_user_func_array',
		'preg_replace_callback',
		'array_map',
		'array_filter',
		'array_reduce',
		'usort',
		'uasort',
		'uksort',
		'array_walk',
		'array_walk_recursive',
		// User mutations
		'wp_insert_user',
		'wp_update_user',
		// File inclusion
		'include',
		'include_once',
		'require',
		'require_once',
		// Serialization (object injection)
		'unserialize',
		'maybe_unserialize',
		// File operations
		'file_get_contents',
		'file_put_contents',
		'fwrite',
		'fputs',
		'fopen',
		'readfile',
		'file',
		'fread',
		'fgets',
		'fgetc',
		'fgetcsv',
		'fpassthru',
		'move_uploaded_file',
		'copy',
		'rename',
		'unlink',
		'rmdir',
		'mkdir',
		'chmod',
		'chown',
		'chgrp',
		// Network functions
		'curl_exec',
		'curl_multi_exec',
		'fsockopen',
		'pfsockopen',
		'stream_socket_client',
		'stream_socket_server',
		// Dangerous PHP functions
		'parse_str',
		'extract',
		'putenv',
		'ini_set',
		'ini_alter',
		'dl',
		'mail',
		'header',
		'setcookie',
		'setrawcookie',
		// POSIX functions
		'posix_kill',
		'posix_mkfifo',
		'posix_setpgid',
		'posix_setsid',
		'posix_setuid',
		'posix_setgid',
		'posix_seteuid',
		'posix_setegid',
		// Apache functions
		'apache_child_terminate',
		'apache_setenv',
		// Reflection/class manipulation
		'get_defined_functions',
		'get_defined_vars',
		'get_defined_constants',
		'phpinfo',
		'highlight_file',
		'show_source',
		'php_strip_whitespace',
		'get_cfg_var',
		'get_current_user',
		'getmyuid',
		'getmypid',
		'getenv',
		// WordPress data/state mutation (added 3.6.5.3 — not blocked by the allowlist
		// alone, since the allowlist only records what an editor once typed, not what
		// is actually safe to expose to an unauthenticated caller's argument).
		'wp_delete_file',
		'wp_delete_post',
		'wp_delete_attachment',
		'wp_trash_post',
		'delete_option',
		'delete_site_option',
		'delete_post_meta',
		'delete_user_meta',
		'delete_metadata',
		'update_option',
		'add_option',
		'update_site_option',
		'update_post_meta',
		'update_user_meta',
		'wp_set_password',
		'wp_delete_user',
		'add_user_meta',
		'add_role',
		'remove_role',
		'wp_update_post',
		'wp_insert_post',
		'do_shortcode',
		'do_action',
		'apply_filters',
		'deactivate_plugins',
		'activate_plugin',
		'switch_to_blog',
		'restore_current_blog',
		'wp_remote_get',
		'wp_remote_post',
		'wp_remote_request',
		'wp_safe_remote_get',
		'wp_safe_remote_post',
		'wp_safe_remote_request',
		'wp_remote_head',
		'delete_transient',
		'delete_site_transient',
		'set_transient',
		'set_site_transient',
		'wp_cache_add',
		'wp_cache_set',
		'wp_cache_replace',
		'wp_cache_delete',
		'wp_cache_flush',
		'wp_cache_flush_group',
		'wp_cache_flush_runtime',
		'wp_cache_incr',
		'wp_cache_decr',
		'clean_post_cache',
		'clean_term_cache',
		'clean_comment_cache',
		'flush_rewrite_rules',
		'wp_delete_comment',
		'wp_trash_comment',
		'wp_delete_term',
		'wp_remove_object_terms',
		'wp_die',
	);

	/**
	 * Function names that ship with the plugin as selectable "Server-Side callback"
	 * options and are safe by construction — they never reach `call_user_func()`,
	 * `validate()` resolves them straight to a `Ssr\Base_Validation_Callback` instance.
	 * Kept separate from the allowlist option so a fresh install already offers them.
	 *
	 * @since 3.6.5.2
	 */
	const BUILTIN_ALLOWED = array();

	/**
	 * Small, immutable set of WordPress Core functions that are safe to call as a
	 * "Server-Side callback" without any site configuration: each accepts exactly one
	 * argument, returns `bool`, and performs no I/O or state changes. Available
	 * unconditionally because the plugin's minimum supported WordPress version (see
	 * `Requires at least` in the main plugin file) already guarantees all of them.
	 *
	 * @since 3.6.5.3
	 */
	const FIXED_SAFE = array(
		'rest_is_boolean',
		'rest_is_integer',
		'rest_is_array',
		'wp_is_numeric_array',
		'is_serialized_string',
		'wp_check_jsonp_callback',
	);

	/**
	 * @var string[]|null Lazily built, request-scoped cache of built-in callback IDs.
	 *
	 * @since 3.6.5.3
	 */
	private static $builtin_callback_ids;

	public function __construct() {
		$this->rep_install();
	}

	/**
	 * Whether $function_name resolves to one of the built-in callbacks (registered via
	 * `rep_instances()`/`get_id()`), i.e. it will never be passed to `call_user_func()`.
	 *
	 * The built-in list is constant for the lifetime of a request (it only depends on hooks
	 * already registered by the time SSR validation runs), so it is built once and cached
	 * rather than reconstructing `self()` and all 4 callback objects, plus re-dispatching
	 * `jet-form-builder/validation-callbacks`, on every call. This is called once per SSR
	 * rule per form both in `Version_3_6_5_3`'s migration scan (up to 200 forms per batch)
	 * and on every advanced-validation form render, so the uncached cost was not negligible.
	 *
	 * @since 3.6.5.2
	 * @since 3.6.5.3 Cached for the request.
	 */
	public static function is_builtin_callback( string $function_name ): bool {
		if ( null === self::$builtin_callback_ids ) {
			self::$builtin_callback_ids = array_map(
				static function ( $callback ) {
					return $callback->get_id();
				},
				( new self() )->rep_instances()
			);
		}

		return in_array( $function_name, self::$builtin_callback_ids, true );
	}

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/validation-callbacks',
			array(
				new Ssr\Is_User_Login_Unique(),
				new Ssr\Is_User_Email_Unique(),
				new Ssr\Is_Field_Value_Unique(),
				new Ssr\Is_User_Password_Valid(),
			)
		);
	}

	public function get_id(): string {
		return 'ssr';
	}

	public function get_label(): string {
		return __( 'Server-Side callback', 'jet-form-builder' );
	}

	public function validate_field( Field_Data_Parser $parser ) {
		$function_name = $this->get_setting( 'value' );

		if ( ! $this->validate_submission_signature( $parser ) ) {
			$parser->collect_error( 'rule:ssr:invalid_signature', $this->get_setting( 'message' ) );

			return;
		}

		$is_valid = $this->validate( $parser, $function_name );

		if ( $is_valid ) {
			return;
		}

		$parser->collect_error( 'rule:ssr:' . $function_name, $this->get_setting( 'message' ) );
	}

	/**
	 * @return Ssr\Base_Validation_Callback[]
	 */
	public function get_callbacks(): array {
		return $this->rep_get_items();
	}

	protected function validate( Field_Data_Parser $parser, string $function_name ): bool {
		try {
			/** @var Ssr\Base_Validation_Callback $callback */
			$callback = $this->rep_get_item( $function_name );
		} catch ( Repository_Exception $exception ) {
			return $this->validate_custom( $parser, $function_name );
		}

		return $callback->is_valid_with_parser( $parser );
	}

	protected function validate_submission_signature( Field_Data_Parser $parser ): bool {
		$rule_index = $this->get_setting( '_rule_index' );

		if ( false === $rule_index ) {
			return true;
		}

		return Validation_Handler::validate_main_signature(
			Request_Tools::get_request(),
			jet_fb_handler()->get_form_id(),
			explode( '.', $parser->get_scoped_name() ),
			absint( $rule_index )
		);
	}

	protected function validate_custom( Field_Data_Parser $parser, string $function_name ): bool {
		$name = $this->validate_callback( $function_name );

		if ( ! $name ) {
			return false;
		}

		if ( in_array( strtolower( $name ), self::FIXED_SAFE, true ) ) {
			return (bool) call_user_func( $name, $parser->get_value() );
		}

		return (bool) call_user_func( $name, $parser->get_value(), $parser->get_context() );
	}

	/**
	 * Keeps only syntactically-valid function names, i.e. names that survive
	 * `preg_replace('/[^\w]/i', '', ...)` unchanged. Shared between runtime validation
	 * and the global registry so the two enforcement points can never drift.
	 *
	 * @since 3.6.5.3
	 *
	 * @return string Empty string if the name contains anything but word characters,
	 *                lowercased name otherwise.
	 */
	public static function sanitize_callback_name( string $function_name ): string {
		$name = preg_replace( '/[^\w]/i', '', $function_name );

		if ( '' === $name || $name !== $function_name ) {
			return '';
		}

		return strtolower( $name );
	}

	/**
	 * Validate callback function name for security.
	 *
	 * Checks applied, all must pass:
	 * 1. Denylist (`NOT_ALLOWED`) — kept as defense in depth, blocks known-catastrophic
	 *    functions outright even if the allowlist below is ever misconfigured. Evaluated
	 *    before the registry lookup, so it always takes priority.
	 * 2. Allowlist — a function must be explicitly known-safe: either shipped with the
	 *    plugin, in the fixed-safe WordPress Core list, explicitly added by a site admin
	 *    to the global `Ssr_Callback_Registry`, or added by a site via the
	 *    `jet-form-builder/ssr-validation/allowed-callbacks` filter. A denylist alone
	 *    cannot enumerate every dangerous function in PHP core + WordPress core + active
	 *    plugins, so functions unknown to either list are rejected by default.
	 *
	 * @since 3.5.6.2 Denylist introduced.
	 * @since 3.6.5.2 Allowlist enforcement added.
	 * @since 3.6.5.3 Allowlist source moved from a per-form derived list to a single
	 *                admin-managed global registry; lazy/autosave re-collection removed.
	 *
	 * @param string $function_name The function name to validate.
	 *
	 * @return string Empty string if invalid, function name if valid.
	 */
	protected function validate_callback( string $function_name ): string {
		$name = self::sanitize_callback_name( $function_name );

		if ( '' === $name ) {
			return '';
		}

		if ( in_array( $name, self::NOT_ALLOWED, true ) ) {
			return '';
		}

		if ( ! function_exists( $name ) ) {
			return '';
		}

		$allowed = $this->get_allowed_callbacks();

		return in_array( $name, $allowed, true ) ? $name : '';
	}

	/**
	 * @since 3.6.5.2
	 * @since 3.6.5.3 Scoped per-form instead of site-wide, then sourced from the single
	 *                site-wide `Ssr_Callback_Registry` instead of a per-form derived list in
	 *                the same release. The `$form_id` argument is still passed to the
	 *                `jet-form-builder/ssr-validation/allowed-callbacks` filter for backward
	 *                compatibility, even though the registry itself is no longer per-form.
	 *
	 * @return string[] Lowercased function names allowed to run via `call_user_func()`.
	 */
	protected function get_allowed_callbacks(): array {
		$allowed = array_merge(
			self::BUILTIN_ALLOWED,
			self::FIXED_SAFE,
			Ssr_Callback_Registry::get_allowed_callbacks()
		);

		$allowed = (array) apply_filters(
			'jet-form-builder/ssr-validation/allowed-callbacks',
			array_values( array_unique( array_map( 'strtolower', $allowed ) ) ),
			(int) jet_fb_handler()->get_form_id()
		);

		$allowed = array_map(
			static function ( $callback ): string {
				return is_string( $callback ) ? strtolower( $callback ) : '';
			},
			$allowed
		);

		return array_values( array_unique( array_filter( $allowed ) ) );
	}

}
