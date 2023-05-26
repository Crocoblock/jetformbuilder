<?php

namespace JFB_Components\Db;

class Db_Tools {

	public static function sanitize_column( $name ): string {
		if ( ! is_string( $name ) ) {
			return '';
		}

		$name = strtolower( $name );

		return preg_replace( '/[^a-z0-9_\-\`\.]/', '', $name );
	}

}