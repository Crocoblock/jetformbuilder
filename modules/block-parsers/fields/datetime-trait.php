<?php


namespace JFB_Modules\Block_Parsers\Fields;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Datetime_Trait {

	public function update_request() {
		parent::update_request();

		if ( $this->get_errors() ||
			! $this->get_value() ||
			! $this->get_setting( 'is_timestamp' )
		) {
			return;
		}

		$this->set_value( strtotime( $this->value ) );
	}

	public function iterate_row_value(): \Generator {
		if ( ! $this->get_value() || ! $this->get_setting( 'is_timestamp' ) ) {
			yield from parent::iterate_row_value();

			return;
		}

		/**
		 * CSV cannot perceive a large number normally,
		 * so we have to let it know that this is a text, and this is a number.
		 *
		 * @since 3.2.2
		 * @see https://github.com/Crocoblock/issues-tracker/issues/5734
		 */
		$this->set_value( $this->get_value() . "\t" );

		yield from parent::iterate_row_value();
	}


}
