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
		// Zero-parameter — `call_user_func( $name, $value, $context )` succeeds and
		// silently discards the extra arguments (PHP does not enforce arity against
		// arguments beyond what a function declares), so it is reachable by every SSR-
		// gated form submission and permanently deletes all >7-day-old auto-drafts on
		// every call, regardless of $value/$context (review finding, issues-tracker
		// #20361 follow-up).
		'wp_delete_auto_drafts',
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
		// Callback-injection / dynamic execution (added 3.6.5.3 — the legacy-migration
		// auto-trust path relies on this denylist as its primary safety barrier, since
		// migrated names no longer sit in a manual-review queue; see
		// docs/vulnerability/20361/not-allow-list.md for the full audit).
		'array_diff_ukey',
		'array_diff_uassoc',
		'array_udiff',
		'array_udiff_assoc',
		'array_udiff_uassoc',
		'array_uintersect',
		'array_uintersect_assoc',
		'array_uintersect_uassoc',
		'array_intersect_ukey',
		'array_intersect_uassoc',
		'forward_static_call',
		'forward_static_call_array',
		'iterator_apply',
		'register_shutdown_function',
		'register_tick_function',
		'spl_autoload_register',
		'preg_replace',
		// Process/signal control
		'pcntl_fork',
		'pcntl_signal',
		'pcntl_wait',
		'pcntl_waitpid',
		'posix_getpwuid',
		'posix_getpwnam',
		'posix_getgrgid',
		'posix_getgrnam',
		// File I/O (writes, or read/write primitives)
		'tmpfile',
		'tempnam',
		'symlink',
		'link',
		'touch',
		'glob',
		'scandir',
		'opendir',
		'readdir',
		'closedir',
		'fseek',
		'ftruncate',
		'flock',
		'parse_ini_file',
		'parse_ini_string',
		// Network
		'get_headers',
		'dns_get_record',
		'checkdnsrr',
		'gethostbyname',
		'gethostbyaddr',
		'gethostbynamel',
		'socket_create',
		'socket_connect',
		'ftp_connect',
		'ftp_login',
		'ftp_get',
		'ftp_put',
		'ssh2_connect',
		'stream_context_create',
		// PHP runtime / environment
		'settype',
		'set_error_handler',
		'set_exception_handler',
		'restore_error_handler',
		'restore_exception_handler',
		'error_reporting',
		'define',
		'debug_backtrace',
		'debug_print_backtrace',
		// WordPress mutations
		'wp_create_user',
		'wp_redirect',
		'wp_safe_redirect',
		'wp_send_json',
		'wp_send_json_success',
		'wp_send_json_error',
		'wp_mail',
		'wp_schedule_event',
		'wp_schedule_single_event',
		'wp_clear_scheduled_hook',
		'wp_unschedule_event',
		'update_network_option',
		'delete_network_option',
		'add_network_option',
		'update_blog_option',
		'delete_blog_option',
		'wp_update_term',
		'wp_insert_term',
		'wp_delete_category',
		'wp_set_object_terms',
		'wp_set_post_terms',
		'wp_set_post_categories',
		'remove_action',
		'remove_filter',
		'remove_all_actions',
		'remove_all_filters',
		'add_action',
		'add_filter',
		'wp_upload_bits',
		'wp_handle_upload',
		'wp_handle_sideload',
		'media_handle_upload',
		'media_handle_sideload',
		'wp_insert_attachment',
		'wp_set_current_user',
		'wp_set_auth_cookie',
		'wp_clear_auth_cookie',
		'wp_logout',
		'wp_generate_auth_cookie',
		'retrieve_password',
		'switch_theme',
		'delete_plugins',
		'delete_theme',
		// `delete_site` (the pre-4th-pass entry here) is a capability name, not a callable
		// PHP function — `function_exists( 'delete_site' )` is always false, so it could
		// never have matched a real callback. The actual WP core function is
		// `wp_delete_site()` (found during the 4th-pass audit below); it stays here, next
		// to the other single-purpose destructive mutations already in this block, rather
		// than moving to the alphabetized 4th-pass block.
		'wp_delete_site',
		// Independent audit follow-up (see docs/vulnerability/20361/deep-research-report
		// for the full comparison against the previous pass) — closes gaps the first pass
		// missed and moves the previously-deferred "read oracle" class (get_option and
		// friends) into the denylist: for an unauthenticated call_user_func($name, $value,
		// $context) bridge, reading an arbitrary option/meta/path by visitor-controlled key
		// is itself a secret/PII-disclosure primitive, not merely a low-risk read.
		'activate_plugins',
		'add_shortcode',
		'add_site_option',
		'apache_getenv',
		'apply_filters_ref_array',
		'apply_shortcodes',
		'chdir',
		'class_alias',
		'class_exists',
		'compact',
		'copy_dir',
		'delete_comment_meta',
		'delete_metadata_by_mid',
		'delete_term_meta',
		'die',
		'disk_free_space',
		'disk_total_space',
		'diskfreespace',
		'do_action_ref_array',
		'download_url',
		'enum_exists',
		'exit',
		'extension_loaded',
		'file_exists',
		'func_get_arg',
		'func_get_args',
		'func_num_args',
		'get_comment_meta',
		'get_loaded_extensions',
		'get_metadata',
		'get_network_option',
		'get_option',
		'get_post_meta',
		'get_site_option',
		'get_term_meta',
		'get_user_meta',
		'grant_super_admin',
		'ini_get_all',
		'interface_exists',
		'is_readable',
		'is_writable',
		'is_writeable',
		'mb_parse_str',
		'ob_start',
		'pathinfo',
		'php_uname',
		'phpversion',
		'posix_access',
		'posix_mknod',
		'preg_replace_callback_array',
		'realpath',
		'revoke_super_admin',
		'set_include_path',
		'stream_filter_register',
		'stream_wrapper_register',
		'sys_get_temp_dir',
		'time_nanosleep',
		'trait_exists',
		'trigger_error',
		'unzip_file',
		'user_error',
		'wp_insert_comment',
		'wp_publish_post',
		'wp_remote_fopen',
		'wp_safe_remote_head',
		'wp_set_comment_status',
		'wp_set_post_tags',
		'wp_untrash_post',
		'wp_update_comment',
		'zend_version',
		// 4th-pass audit follow-up (docs/vulnerability/20361/not-allow-list.md) — closes
		// remaining gaps: WP Multisite site/blog mutations, cron-array bypass, theme-mod
		// mutations (wrappers around update_option that the option-level entries above
		// don't catch), nav-menu mutations plus the wp_nav_menu() callback-dispatch gadget
		// (its `fallback_cb` argument, like ob_start()/preg_replace_callback_array()
		// above, can itself invoke an attacker-influenced callback), block/post-type/
		// taxonomy/widget runtime registration, remaining read-oracle paths alongside
		// get_option()/get_*_meta() above, alternative filesystem read/write APIs
		// (gz*/bz* compression wrappers, hash-by-path, chown/chgrp variants), direct
		// DB/network connection primitives, and the reflection/introspection siblings of
		// class_exists()/compact()/func_get_args() already denylisted above.
		'_set_cron_array',
		'add_meta',
		'bzopen',
		'delete_meta',
		'delete_post_meta_by_key',
		'delete_site_meta',
		'delete_site_meta_by_key',
		'dns_get_mx',
		'error_log',
		'fileatime',
		'filectime',
		'filegroup',
		'filemtime',
		'fileowner',
		'fileperms',
		'filesize',
		'filetype',
		'get_blog_option',
		'get_meta_tags',
		'get_metadata_by_mid',
		'get_metadata_raw',
		'get_site_meta',
		'get_theme_mod',
		'get_theme_mods',
		'get_user_option',
		'getmxrr',
		'gzfile',
		'gzopen',
		'hash_file',
		'is_callable',
		'is_dir',
		'is_executable',
		'is_file',
		'is_link',
		'is_subclass_of',
		'lchgrp',
		'lchown',
		'linkinfo',
		'lstat',
		'md5_file',
		'method_exists',
		'mysqli_connect',
		'pg_connect',
		'pg_pconnect',
		'property_exists',
		'readgzfile',
		'readlink',
		'register_block_type',
		'register_block_type_from_metadata',
		'register_post_type',
		'register_taxonomy',
		'register_widget',
		'remove_theme_mod',
		'remove_theme_mods',
		'remove_user_from_blog',
		'reset_password',
		'set_theme_mod',
		'sha1_file',
		'socket_addrinfo_lookup',
		'socket_create_listen',
		'spl_autoload',
		'spl_autoload_call',
		'stat',
		'syslog',
		'unregister_widget',
		'update_blog_details',
		'update_meta',
		'wp_add_post_tags',
		'wp_authenticate',
		'wp_create_nav_menu',
		'wp_delete_nav_menu',
		'wp_delete_object_term_relationships',
		'wp_delete_post_revision',
		'wp_get_http',
		'wp_handle_comment_submission',
		'wp_initialize_site',
		'wp_insert_site',
		'wp_login',
		'wp_nav_menu',
		'wp_restore_post_revision',
		'wp_signon',
		'wp_trash_post_comments',
		'wp_uninitialize_site',
		'wp_unschedule_hook',
		'wp_untrash_post_comments',
		'wp_update_nav_menu_item',
		'wp_update_nav_menu_object',
		'wp_update_site',
		'wpmu_delete_blog',
		'wpmu_delete_user',
		// Zero-required-parameter WP core functions that mutate persistent state (review
		// finding, issues-tracker #20361 follow-up: `wp_delete_auto_drafts()`, moved next
		// to `wp_delete_post`/`wp_delete_attachment` above, was the first found this way).
		// PHP does not enforce arity for arguments beyond what a function declares, so
		// `call_user_func( $name, $value, $context )` succeeds against any of these and
		// silently discards $value/$context — unlike a function with a required parameter,
		// which throws `ArgumentCountError` (see `accepts_context_argument()`) or a
		// `FIXED_SAFE`/registry entry, which is deliberately vetted either way. That makes
		// every one of these reachable and triggerable by any SSR-gated form submission
		// regardless of what an admin ever trusted. The first pass here only grepped for
		// mutation-sounding function names (`delete_*`, `reset_*`, `clean_*`, ...), which
		// missed `wp_scheduled_delete()` (review finding, issues-tracker #20361 follow-up)
		// — its name doesn't match that pattern despite doing exactly that. The follow-up
		// pass instead scanned every zero-required-parameter function in this codebase's
		// bundled WP core for known-dangerous write/delete calls in its body, regardless of
		// name, and denylisted every one that touches persistent state; request-local-only
		// globals (`wp_reset_query`, `wp_reset_postdata`, `remove_all_shortcodes`) and
		// deprecated no-ops were left out as not a real mutation primitive.
		'delete_all_user_settings',
		'wp_clean_update_cache',
		'wp_delete_all_temp_backups',
		'wp_scheduled_delete',
		'wp_update_urls_to_https',
		'_wp_menus_changed',
		'check_theme_switched',
		'do_all_enclosures',
		'do_all_pingbacks',
		'do_all_trackbacks',
		'_wp_batch_split_terms',
		'_wp_batch_update_comment_type',
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

	/**
	 * @var array<string, int>|null Request-scoped cache of `accepts_context_argument()`'s
	 *      `ReflectionFunction::getNumberOfParameters()` lookups, keyed by function name.
	 *
	 * @since 3.6.5.3
	 */
	private static $callback_max_params;

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

		if ( in_array( strtolower( $name ), self::FIXED_SAFE, true ) || ! self::accepts_context_argument( $name ) ) {
			return (bool) call_user_func( $name, $parser->get_value() );
		}

		return (bool) call_user_func( $name, $parser->get_value(), $parser->get_context() );
	}

	/**
	 * Whether $function_name can be called with a second ($context) argument without
	 * PHP throwing `ArgumentCountError`.
	 *
	 * `FIXED_SAFE` callbacks are always called with one argument regardless of this check
	 * (see `validate_custom()`) — this only matters for everything else: a registry entry
	 * (admin-added manually, or restored by the legacy migration) is never required to
	 * accept two arguments, only to exist and clear the denylist/builtin checks. A single-
	 * parameter internal PHP function (e.g. `is_numeric`) or a strictly-typed user function
	 * is a legitimate, common shape for a validator — unlike a user-defined function with
	 * optional/variadic extra parameters, PHP's internal functions reject a call with more
	 * arguments than they declare, which without this check turned an otherwise-valid
	 * submission into a fatal `ArgumentCountError` instead of a normal pass/fail result
	 * (review finding, issues-tracker #20361 follow-up).
	 *
	 * @since 3.6.5.3
	 */
	protected static function accepts_context_argument( string $function_name ): bool {
		if ( null === self::$callback_max_params ) {
			self::$callback_max_params = array();
		}

		if ( ! array_key_exists( $function_name, self::$callback_max_params ) ) {
			try {
				$reflection = new \ReflectionFunction( $function_name );

				self::$callback_max_params[ $function_name ] = $reflection->getNumberOfParameters();
			} catch ( \ReflectionException $exception ) {
				// Not expected to be reachable — `validate_callback()` already confirmed
				// `function_exists( $name )` — but fail closed to the safe, one-argument
				// call shape rather than letting the exception surface as a fatal error.
				self::$callback_max_params[ $function_name ] = 1;
			}
		}

		return self::$callback_max_params[ $function_name ] >= 2;
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
