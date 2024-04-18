<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;

use Jet_Form_Builder\Actions\Methods\Base_Modifier_Action;
use Jet_Form_Builder\Actions\Types\Insert_Post;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Post_Action extends Base_Modifier_Action {

	protected $inserted_id = 0;

	public function do_after() {
		if ( ! $this->inserted_id ) {
			return;
		}
		$this->add_inserted_post_id();
		$this->add_context_once();

		/**
		 * Perform any actions after post inserted/updated
		 */
		do_action(
			'jet-form-builder/action/after-post-' . $this->get_id(),
			jet_fb_action_handler()->get_current_action(),
			jet_fb_action_handler()
		);
	}

	public function pre_check(): bool {
		return apply_filters(
			'jet-form-builder/action/insert-post/pre-check',
			true,
			$this->modifier->source_arr,
			jet_fb_action_handler()->get_current_action()
		);
	}

	public function add_inserted_post_id() {
		$handler = jet_fb_action_handler();

		if ( ! $handler->in_loop() ) {
			return;
		}

		if ( empty( $handler->response_data['inserted_post_id'] ) ) {
			$handler->response_data['inserted_post_id'] = $this->inserted_id;
			jet_fb_context()->update_request( $this->inserted_id, 'inserted_post_id' );
		} else {
			$handler->response_data['inserted_posts'][] = array(
				'post_id'   => $this->inserted_id,
				'action_id' => $handler->get_current_action()->_id,
			);
		}

		$post_type = $this->modifier->source_arr['post_type'] ?? '';

		if ( ! $post_type ) {
			$post_type = get_post_type( $this->inserted_id );
		}

		$inserted_key = jet_fb_context()->get_unique_name(
			'inserted_' . $post_type
		);

		jet_fb_context()->update_request( $this->inserted_id, $inserted_key );
	}

	public function add_context_once() {
		if ( ! jet_fb_action_handler()->in_loop() ) {
			return;
		}
		/**
		 * For Redirect to Page action
		 */
		jet_fb_action_handler()->add_context_once(
			'insert_post',
			array(
				Insert_Post::get_context_post_key( $this->inserted_id ) => array_merge(
					array(
						'__action' => $this->get_id(),
						'ID'       => $this->inserted_id,
					),
					$this->modifier->source_arr
				),
			)
		);
	}

	public function get_inserted(): int {
		return $this->inserted_id;
	}

}
