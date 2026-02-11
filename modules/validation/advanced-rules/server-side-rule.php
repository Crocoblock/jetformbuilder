<?php


namespace JFB_Modules\Validation\Advanced_Rules;

use JFB_Modules\Validation\Ssr;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Repository\Repository_Pattern_Trait;
use JFB_Modules\Block_Parsers\Field_Data_Parser;

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
	 * @since 3.x.x Security fix: expanded list and case-insensitive check
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
	);

	public function __construct() {
		$this->rep_install();
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
		$is_valid      = $this->validate( $parser, $function_name );

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

		return $callback->is_valid( $parser->get_value(), $parser->get_context() );
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
	 * @since 3.5.6.2
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

		// Case-insensitive blacklist check (PHP function names are case-insensitive)
		$name_lower = strtolower( $name );

		if ( in_array( $name_lower, self::NOT_ALLOWED, true ) ) {
			return '';
		}

		return function_exists( $name ) ? $name : '';
	}

}
