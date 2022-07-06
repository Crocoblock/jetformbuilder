<?php


namespace Jet_Form_Builder\Classes\Filters;


class Render_Acf_Checkbox_Filter extends Base_Filter {

	public function get_id(): string {
		return 'render_acf_checkbox';
	}

	public function callback_args(): array {
		return array( ', ' );
	}

	public function apply_macros( $value, ...$args ): string {
		if ( ! $value || ! is_array( $value ) ) {
			return $value;
		}
		list( $delimiter ) = $args;

		return wp_kses_post( implode( $delimiter, $value ) );
	}

}