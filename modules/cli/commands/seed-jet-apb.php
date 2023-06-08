<?php


namespace JFB_Modules\Cli\Commands;

use JET_APB\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Seed_Jet_Apb implements Base_Command_It {

	public function rep_item_id() {
		return 'seed-jet-apb';
	}

	public function condition(): bool {
		return function_exists( 'jet_apb' );
	}

	public function do_command( $args, $assoc_args ) {
		$sample_app = array(
			'status'           => 'completed',
			'service'          => 87,
			'user_id'          => 1,
			'user_email'       => 'sanko200065@gmail.com',
			'date'             => 1660780800,
			'slot'             => 1660809600,
			'slot_end'         => 1660811400,
			'type'             => 'range',
			'appointment_date' => '2022-07-20 10:26:09',
		);

		foreach ( range( 0, 1000000 ) as $next ) {
			Plugin::instance()->db->appointments->insert( $sample_app );
		}
	}

}