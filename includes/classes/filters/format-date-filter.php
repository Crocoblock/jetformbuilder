<?php


namespace Jet_Form_Builder\Classes\Filters;


use Jet_Form_Builder\Classes\Tools;

class Format_Date_Filter extends Base_Filter {

	public function get_id(): string {
		return 'format_date';
	}

	public function callback_args(): array {
		return array( '' );
	}

	public function apply_macros( $value, ...$args ): string {
		if ( ! Tools::is_valid_timestamp( $value ) ) {
			$value = strtotime( $value );
		}
		list( $date_format ) = $args;

		$format = ! empty( $date_format ) ? $date_format : get_option( 'date_format', 'F j, Y' );

		return date_i18n( $format, $value );
	}

}