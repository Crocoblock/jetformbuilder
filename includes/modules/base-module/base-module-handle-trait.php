<?php


namespace Jet_Form_Builder\Modules\Base_Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Base_Module_Handle_Trait {

	public function get_handle( string $unique_string = '' ): string {
		$parts = array(
			'jet-fb-' . $this->rep_item_id(),
			$unique_string,
		);

		return implode( '-', array_filter( $parts ) );
	}

	abstract public function rep_item_id();

}