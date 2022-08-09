<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Exceptions\Modifier_Exclude_Property;
use Jet_Form_Builder\Actions\Methods\Object_Required_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Post_Title_Property extends Base_Post_Property implements
	Object_Required_Property {

	private $is_empty = false;

	public function get_prop_name(): string {
		return 'post_title';
	}

	public function get_label(): string {
		return __( 'Post Title', 'jet-form-builder' );
	}

	public function do_if_empty( Abstract_Modifier $modifier ) {
		if ( 'insert' !== $modifier->get_action() ) {
			return;
		}

		$this->is_empty = true;
	}

	/**
	 * @param Abstract_Modifier|Post_Modifier $modifier
	 */
	public function do_after( Abstract_Modifier $modifier ) {
		if ( ! $this->is_empty ) {
			return;
		}

		$post_type_obj = get_post_type_object( $modifier->source_arr['post_type'] );
		$title         = $post_type_obj->labels->singular_name . ' #' . $modifier->inserted_post_id;

		wp_update_post(
			array(
				'ID'         => $modifier->inserted_post_id,
				'post_title' => $title,
				'post_name'  => "{$post_type_obj->labels->singular_name}-{$modifier->inserted_post_id}",
			)
		);
	}
}