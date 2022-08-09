<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Post_Id_Property extends Base_Post_Property {

	public function get_prop_name(): string {
		return 'ID';
	}

	public function get_label(): string {
		return __( 'Post ID (will update the post)', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier|Post_Modifier $modifier
	 *
	 * @throws Action_Exception|Silence_Exception
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		if ( empty( $modifier->current_value ) ) {
			throw new Action_Exception(
				'empty_field',
				$modifier->current_prop,
				$modifier->current_value
			);
		}

		$post = get_post( (int) $modifier->current_value );

		if (
			! is_a( $post, \WP_Post::class )
			|| (
				absint( $post->post_author ) !== get_current_user_id()
				&& ! current_user_can( 'edit_post', $post->ID )
			)
		) {
			throw new Action_Exception(
				'failed',
				array(
					'post' => $post,
				)
			);
		}

		$modifier->set_action_once( 'update' );
	}
}