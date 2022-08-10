<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;

use Jet_Form_Builder\Actions\Types\Insert_Post;
use Jet_Form_Builder\Classes\Arrayable\Collection;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Post_Modifier extends Post_Modifier_Core {

	protected function get_properties(): Collection {
		return apply_filters(
			'jet-form-builder/post-modifier/object-properties',
			new Collection(
				array(
					new Post_Id_Property(),
					new Post_Status_Property(),
					new Post_Title_Property(),
					new Post_Content_Property(),
					new Post_Excerpt_Property(),
					new Post_Date_Property(),
					new Post_Date_Gmt_Property(),
					new Post_Author_Property(),
					new Post_Thumbnail_Property(),
					new Post_Comments_Property(),
					new Post_Parent_Property(),
					new Post_Meta_Property(),
					new Post_Je_Relation_Property(),
					new Post_Terms_Property(),
				)
			)
		);
	}

	public function get_actions() {
		return apply_filters(
			'jet-form-builder/post-modifier/object-actions',
			array(
				'update' => array(
					'action' => array( $this, 'update_post' ),
					'after'  => array( $this, 'after_do_action' ),
				),
				'insert' => array(
					'action' => array( $this, 'insert_post' ),
					'after'  => array( $this, 'after_do_action' ),
				),
				'trash'  => array(
					'action' => array( $this, 'trash_post' ),
				),
			),
			$this
		);
	}


	/**
	 * @throws Action_Exception
	 */
	public function insert_post() {
		try {
			$this->pre_check();
		} catch ( Silence_Exception $exception ) {
			return;
		}

		$this->inserted_post_id = wp_insert_post( $this->source_arr, true );
		$this->is_valid_post_id();
	}

	/**
	 * @throws Action_Exception
	 */
	public function update_post() {
		try {
			$this->pre_check();
		} catch ( Silence_Exception $exception ) {
			return;
		}

		$this->inserted_post_id = wp_update_post( $this->source_arr, true );
		$this->is_valid_post_id();
	}

	/**
	 * @throws Action_Exception
	 */
	public function trash_post() {
		try {
			$this->pre_check();
		} catch ( Silence_Exception $exception ) {
			return;
		}

		$post = wp_trash_post( $this->source_arr['ID'] ?? 0 );

		if ( ! is_a( $post, \WP_Post::class ) ) {
			throw new Action_Exception(
				'failed',
				$this->source_arr
			);
		}
	}

	/**
	 * @throws Action_Exception
	 */
	public function is_valid_post_id() {
		if ( is_wp_error( $this->inserted_post_id ) ) {
			throw new Action_Exception(
				'failed',
				$this->inserted_post_id->get_error_message(),
				$this->source_arr
			);
		}
	}


	public function after_do_action() {
		$post_id = $this->inserted_post_id;

		$this->add_inserted_post_id( $post_id );
		$this->add_context_once( $post_id );

		if ( $this->suppress_filters ) {
			return;
		}

		/**
		 * Perform any actions after post inserted/updated
		 */
		do_action(
			'jet-form-builder/action/after-post-' . $this->action,
			jet_fb_action_handler()->get_current_action(),
			jet_fb_action_handler()
		);
	}

	public function add_inserted_post_id( $post_id ) {
		$handler = jet_fb_action_handler();

		if ( ! $handler->in_loop() ) {
			return;
		}

		if ( empty( $handler->response_data['inserted_post_id'] ) ) {
			$handler->response_data['inserted_post_id'] = $post_id;
			$handler->request_data['inserted_post_id']  = $post_id;
		} else {
			$handler->response_data['inserted_posts'][] = array(
				'post_id'   => $post_id,
				'action_id' => $handler->get_current_action()->_id,
			);
		}
	}

	public function add_context_once( $post_id ) {
		if ( ! jet_fb_action_handler()->in_loop() ) {
			return;
		}
		/**
		 * For Redirect to Page action
		 */
		jet_fb_action_handler()->add_context_once(
			'insert_post',
			array(
				Insert_Post::get_context_post_key( $post_id ) => array_merge(
					array(
						'__action' => $this->action,
						'ID'       => $post_id,
					),
					$this->source_arr
				),
			)
		);
	}

}
