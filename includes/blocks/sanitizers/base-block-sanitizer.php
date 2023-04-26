<?php


namespace Jet_Form_Builder\Blocks\Sanitizers;


// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Block_Sanitizer {

	abstract public function get_id(): string;

	abstract public function for_blocks(): array;

	abstract public function apply_data( array $parsed_block ): array;

}