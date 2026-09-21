<?php

namespace JFB_Modules\Actions_V2\Send_Email;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Content_Formatter {

	/**
	 * Format the body without resolving dynamic content or running send hooks.
	 */
	public static function format( string $content, bool $is_html, bool $disable_format ): string {
		if ( $is_html && ! $disable_format ) {
			$content = make_clickable( wpautop( $content ) );
		}

		return str_replace( '&#038;', '&amp;', $content );
	}
}
