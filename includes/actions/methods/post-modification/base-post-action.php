<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Base_Modifier_Action;
use Jet_Form_Builder\Actions\Types\Insert_Post;
use Jet_Form_Builder\Exceptions\Action_Exception;

abstract class Base_Post_Action extends Base_Modifier_Action {

	protected $inserted_id;

	public function do_after() {
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
			$handler->request_data['inserted_post_id']  = $this->inserted_id;
		} else {
			$handler->response_data['inserted_posts'][] = array(
				'post_id'   => $this->inserted_id,
				'action_id' => $handler->get_current_action()->_id,
			);
		}
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