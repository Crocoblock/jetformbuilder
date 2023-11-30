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

	const NOT_ALLOWED = array(
		'var_dump',
		'var_export',
		'print_r',
		'sprintf',
		'printf',
		'shell_exec',
		'system',
		'exec',
		'unserialize',
		'file_get_contents',
		'maybe_unserialize',
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

		$parser->collect_error( "ssr:{$function_name}", $this->get_setting( 'message' ) );
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

	protected function validate_callback( string $function_name ): string {
		$name = preg_replace( '/[^\w]/i', '', $function_name );

		if ( $name !== $function_name ||
			// not in the blacklist
			in_array( $name, self::NOT_ALLOWED, true )
		) {
			return '';
		}

		return function_exists( $name ) ? $name : '';
	}

}
