<?php


namespace Jet_Form_Builder\Blocks\Types;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Interface Base_Choice_Item_It
 *
 * @package Jet_Form_Builder\Blocks\Types
 */
interface Base_Choice_Item_It {

	public function is_allowed_multiple(): bool;

	public function is_checked_current(): bool;

	public function get_calculated_value(): string;

	public function get_raw_field_name(): string;

}
