<?php


namespace JFB_Modules\Actions_V2\Insert_Post\Properties;

use Jet_Form_Builder\Actions\Methods\Object_Properties_Collection;
use Jet_Form_Builder\Classes\Arrayable\Collection;
use JFB_Modules\Actions_V2\Insert_Post\Insert_Post_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Modifier extends Abstract_Post_Modifier {

	public function is_supported( Insert_Post_Action $action ): bool {
		return true;
	}

	public function get_id(): string {
		return 'all';
	}

	public function before_run( Insert_Post_Action $action ) {
		parent::before_run( $action );

		$this->set( 'post_type', $action->get_post_type() );
	}

	protected function get_properties(): Object_Properties_Collection {
		return apply_filters(
			'jet-form-builder/post-modifier/object-properties',
			new Object_Properties_Collection(
				array(
					new Post_Id_Property(),
					new Post_Status_Property(),
					new Post_Type_Property(),
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
					new Post_Terms_Property(),
				)
			)
		);
	}

	public function get_actions(): Collection {
		return apply_filters(
			'jet-form-builder/post-modifier/object-actions',
			new Collection(
				array(
					new Insert_Action(),
					new Update_Action(),
					new Trash_Action(),
				)
			)
		);
	}

}
