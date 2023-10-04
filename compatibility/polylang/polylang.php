<?php


namespace JFB_Compatibility\Polylang;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

use JFB_Components\Module\Base_Module_It;

class Polylang implements Base_Module_It {

	public function rep_item_id() {
		return 'polylang';
	}

	public function condition(): bool {
		return function_exists( 'PLL' );
	}

	public function init_hooks() {
		add_filter(
			'jet-form-builder/render-choice/query-options/posts',
			array( $this, 'remove_suppress_filters' )
		);
	}

	public function remove_hooks() {
		remove_filter(
			'jet-form-builder/render-choice/query-options/posts',
			array( $this, 'remove_suppress_filters' )
		);
	}

	public function remove_suppress_filters( array $args ): array {
		$args['suppress_filters'] = false;

		return $args;
	}
}
