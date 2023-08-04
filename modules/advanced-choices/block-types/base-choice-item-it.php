<?php


namespace JFB_Modules\Advanced_Choices\Block_Types;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Interface Base_Choice_Item_It
 *
 * @package JFB_Modules\Advanced_Choices\Block_Types
 */
interface Base_Choice_Item_It {

	public function is_allowed_multiple(): bool;

	public function is_checked_current(): bool;

	public function get_calculated_value(): string;

}
