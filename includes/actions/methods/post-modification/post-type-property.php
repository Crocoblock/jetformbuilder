<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Classes\Arrayable\Array_Continue_Exception;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Type_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'post_type';
	}

	/**
	 * @param string $key
	 * @param $value
	 * @param Abstract_Modifier $modifier
	 *
	 * @return void
	 * @throws Action_Exception
	 */
	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$post_id = $modifier->get( 'ID' )->value;

		if ( ! $post_id ) {
			if ( ! $value || ! post_type_exists( $value ) ) {
				throw new Action_Exception( 'failed', 'Invalid post_type' );
			}

			parent::do_before( $key, $value, $modifier );

			return;
		}

		// allow pass empty post-type for non-insert action
		if ( ! $value ) {
			return;
		}

		$current_post_type = get_post_type( $post_id );

		if ( $current_post_type === $value ) {
			return;
		}

		/**
		 * @since 3.3.3
		 */
		$allow_to_change = apply_filters(
			'jet-form-builder/action/insert-post/allow-change-post-type',
			false,
			$value,
			$current_post_type,
			$modifier
		);

		if ( $allow_to_change ) {
			parent::do_before( $key, $value, $modifier );

			return;
		}

		if ( ! current_user_can( 'edit_jet_fb_form', jet_fb_handler()->form_id ) ) {
			throw new Action_Exception(
				'Changing type of the post is not allowed. Please contact website admin'
			);
		}

		throw new Action_Exception(
			'Changing type of the post is not allowed. Add Save Form Record action and enable Dev-Mode for more details',
			array(
				'message' => 'If you anyway need this functionality, you can unlock it by adding this snippet into functions.php file of your active theme.',
				'snippet' => "add_filter( 'jet-form-builder/action/insert-post/allow-change-post-type', '__return_true' );",
			)
		);
	}

	/**
	 * @return string
	 * @throws Array_Continue_Exception
	 */
	public function get_label(): string {
		throw new Array_Continue_Exception();
	}

	public function get_related(): array {
		return array( 'ID' );
	}
}
