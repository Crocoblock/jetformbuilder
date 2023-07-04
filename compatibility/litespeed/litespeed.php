<?php


namespace JFB_Compatibility\Litespeed;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Modules\Security\Wp_Nonce;
use JFB_Components\Module\Base_Module_It;

class Litespeed implements Base_Module_It {

	public function rep_item_id() {
		return 'litespeed';
	}

	public function condition(): bool {
		return defined( 'LSCWP_V' );
	}

	public function init_hooks() {
		add_filter(
			'jet-form-builder/after-start-form',
			array( $this, 'on_render_form' ),
			9
		);
	}

	public function remove_hooks() {
		remove_filter(
			'jet-form-builder/after-start-form',
			array( $this, 'on_render_form' ),
			9
		);
	}

	public function on_render_form( string $html ): string {
		do_action( 'litespeed_nonce', Wp_Nonce\Module::NONCE_ACTION_PREF . '*' );

		$this->remove_hooks();

		return $html;
	}
}