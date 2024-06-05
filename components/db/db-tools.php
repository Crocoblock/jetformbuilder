<?php

namespace JFB_Components\Db;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Db_Tools {

	public static function sanitize_column( $name ): string {
		if ( ! is_string( $name ) ) {
			return '';
		}

		return preg_replace( '/[^a-z0-9_\-\`\.]/', '', $name );
	}

}
