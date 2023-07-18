<?php


namespace JFB_Modules\Block_Parsers\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

interface Multiple_Parsers {

	public function generate_parsers(): \Generator;

}
