<?php


namespace Jet_Form_Builder\Classes\Filters;


use Jet_Form_Builder\Actions\Types\Send_Email;

class Post_Link_By_Id_Filter extends Base_Filter {

	public function get_id(): string {
		return 'post_link_by_id';
	}

	public function callback_args(): array {
		return array( ', ' );
	}

	public function apply_macros( $value, ...$args ): string {
		if ( empty( $value ) ) {
			return '';
		}

		if ( ! is_array( $value ) ) {
			$value = array( $value );
		}

		list( $delimiter ) = $args;

		return wp_kses_post(
			implode(
				$delimiter,
				array_map( array( $this, 'apply_item' ), $value )
			)
		);
	}

	private function apply_item( $item ): string {
		/** @var Send_Email $action */
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