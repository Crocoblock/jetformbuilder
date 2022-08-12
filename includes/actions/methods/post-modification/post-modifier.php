<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Object_Properties_Collection;
use Jet_Form_Builder\Classes\Arrayable\Collection;


class Post_Modifier extends Abstract_Modifier {

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
					new Post_Je_Relation_Property(),
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
					new Trash_Action(),
					new Update_Action(),
					new Insert_Action(),
				)
			)
		);
	}

}
