<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Id_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'ID';
	}

	public function get_label(): string {
		return __( 'Post ID (will update the post)', 'jet-form-builder' );
	}

	/**
	 * @param string $key
	 * @param $value
	 *
	 * @return bool
	 * @throws Action_Exception
	 */
	public function can_attach( string $key, $value ): bool {
		if ( ! parent::can_attach( $key, $value ) ) {
			return false;
		}
		if ( empty( $value ) ) {
			throw new Action_Exception( 'empty_field', $key );
		}

		$post = get_post( (int) $value );

		if (
			! is_a( $post, \WP_Post::class )
			|| (
				absint( $post->post_author ) !== get_current_user_id()
				&& ! current_user_can( 'edit_post', $post->ID )
				&& ! Tools::is_webhook()
			)
		) {
			throw new Action_Exception(
				'failed',
				array(
					'post' => $post,
				)
			);
		}

		return true;
	}
}