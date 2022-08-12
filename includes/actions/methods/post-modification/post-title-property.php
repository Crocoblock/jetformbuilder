<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Exceptions\Modifier_Exclude_Property;
use Jet_Form_Builder\Actions\Methods\Object_Required_Property;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Post_Title_Property extends Base_Object_Property implements
	Object_Required_Property {

	private $is_empty = false;

	public function get_id(): string {
		return 'post_title';
	}

	public function get_label(): string {
		return __( 'Post Title', 'jet-form-builder' );
	}

	public function do_if_required( Abstract_Modifier $modifier ) {
		$action = $modifier->get_supported_action();

		if ( ! is_a( $action, Insert_Action::class ) ||
		     ! is_null( $this->value )
		) {
			return;
		}

		$this->is_empty = true;
	}

	public function do_after( string $key, $value, Abstract_Modifier $modifier ) {
		if ( ! $this->is_empty ) {
			return;
		}

		/** @var Base_Post_Action $action */
		$action = $modifier->get_action();
		$id     = $action->get_inserted();

		$post_type_obj = get_post_type_object( $modifier->source_arr['post_type'] );
		$title         = "{$post_type_obj->labels->singular_name} #{$id}";
		$name          = "{$post_type_obj->labels->singular_name}-{$id}";

		wp_update_post(
			array(
				'ID'         => $id,
				'post_title' => $title,
				'post_name'  => $name,
			)
		);
	}
}