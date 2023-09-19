<?php


namespace JFB_Compatibility\Wpml;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

use JFB_Components\Module\Base_Module_It;

class Wpml implements Base_Module_It {

	public function rep_item_id() {
		return 'wpml';
	}

	public function condition(): bool {
		return defined( 'ICL_SITEPRESS_VERSION' );
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
