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

	public function __construct() {
		$this->rep_install();
	}

	/**
	 * Whether $function_name resolves to one of the built-in callbacks (registered via
	 * `rep_instances()`/`get_id()`), i.e. it will never be passed to `call_user_func()`.
	 *
	 * @since 3.6.5.2
	 */
	public static function is_builtin_callback( string $function_name ): bool {
		foreach ( ( new self() )->rep_instances() as $callback ) {
			if ( $callback->get_id() === $function_name ) {
				return true;
			}
		}

		return false;
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

		return (bool) call_user_func( $name, $parser->get_value(), $parser->get_context() );
	}

	/**
	 * Validate callback function name for security.
	 *
	 * Two checks apply, both must pass:
	 * 1. Denylist (`NOT_ALLOWED`) — kept as defense in depth, blocks known-catastrophic
	 *    functions outright even if the allowlist below is ever misconfigured.
	 * 2. Allowlist — a function must be explicitly known-safe: either shipped with the
	 *    plugin, collected from a form an editor actually saved with this callback
	 *    configured (`Ssr_Callback_Allowlist`), or added by a site via the
	 *    `jet-form-builder/ssr-validation/allowed-callbacks` filter. A denylist alone
	 *    cannot enumerate every dangerous function in PHP core + WordPress core + active
	 *    plugins, so functions unknown to either list are rejected by default.
	 *
	 * @since 3.5.6.2 Denylist introduced.
	 * @since 3.6.5.2 Allowlist enforcement added.
	 *
	 * @param string $function_name The function name to validate.
	 *
	 * @return string Empty string if invalid, function name if valid.
	 */
	protected function validate_callback( string $function_name ): string {
		$name = preg_replace( '/[^\w]/i', '', $function_name );

		if ( $name !== $function_name ) {
			return '';
		}

		// Case-insensitive checks (PHP function names are case-insensitive).
		$name_lower = strtolower( $name );

		if ( in_array( $name_lower, self::NOT_ALLOWED, true ) ) {
			return '';
		}

		if ( ! function_exists( $name ) ) {
			return '';
		}

		$allowed = $this->get_allowed_callbacks();

		if ( ! in_array( $name_lower, $allowed, true ) ) {
			Ssr_Callback_Allowlist::refresh_allowed_callbacks_for_form(
				(int) jet_fb_handler()->get_form_id()
			);
			$allowed = $this->get_allowed_callbacks();
		}

		return in_array( $name_lower, $allowed, true ) ? $name : '';
	}

	/**
	 * Scoped to the form actually being submitted — a function name configured on one
	 * form is never usable from another form, even though both may have been saved by
	 * the same (already admin-gated) capability. See `Ssr_Callback_Allowlist` for why
	 * this matters: the allowlist only records "some editor typed this name once", not
	 * "this function is safe everywhere", so it must not widen past the form an editor
	 * actually approved it on.
	 *
	 * @since 3.6.5.2
	 * @since 3.6.5.3 Scoped per-form instead of site-wide.
	 *
	 * @return string[] Lowercased function names allowed to run via `call_user_func()`.
	 */
	protected function get_allowed_callbacks(): array {
		$allowed = array_merge(
			self::BUILTIN_ALLOWED,
			Ssr_Callback_Allowlist::get_allowed_callbacks_for_form(
				(int) jet_fb_handler()->get_form_id()
			)
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
