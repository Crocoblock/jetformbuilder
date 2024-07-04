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

	protected function apply_item( $item, ...$args ): string {
		/** @var Send_Email_Action $action */
		$action = jet_fb_action_handler()->get_current_action();

		$url   = get_permalink( $item );
		$title = get_the_title( $item );

		if ( ! $action->is_html() ) {
			return sprintf( '%1$s: %2$s', $title, $url );
		}

		return sprintf(
			'<a href="%1$s">%2$s</a>',
			$url,
			$title
		);
	}

}
