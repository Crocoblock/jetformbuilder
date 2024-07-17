<?php


namespace Jet_Form_Builder\Classes\Filters;

use JFB_Modules\Actions_V2\Send_Email\Send_Email_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Link_By_Id_Filter extends Base_Multiple_Filter {

	public function get_id(): string {
		return 'post_link_by_id';
	}

	public function callback_args(): array {
		return array( '' );
	}

	protected function apply_item( $item, ...$args ): string {
		list( $format ) = $args;

		if ( ! $format && jet_fb_action_handler()->in_loop() ) {
			/** @var Send_Email_Action $action */
			$action = jet_fb_action_handler()->get_current_action();

			$format = ( $action instanceof Send_Email_Action ) && $action->is_html() ? 'html' : 'plain';
		}

		$url   = get_permalink( $item );
		$title = get_the_title( $item );

		if ( 'html' !== $format ) {
			return sprintf( '%1$s: %2$s', $title, $url );
		}

		return sprintf(
			'<a href="%1$s">%2$s</a>',
			$url,
			$title
		);
	}

}
