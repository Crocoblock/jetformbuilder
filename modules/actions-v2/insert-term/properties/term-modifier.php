<?php

namespace JFB_Modules\Actions_V2\Insert_Term\Properties;

use Jet_Form_Builder\Actions\Methods\Object_Properties_Collection;
use Jet_Form_Builder\Classes\Arrayable\Collection;
use JFB_Modules\Actions_V2\Insert_Term\Insert_Term_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Term_Modifier extends Abstract_Term_Modifier {

	public function is_supported( Insert_Term_Action $action ): bool {
		return true;
	}

	public function get_id(): string {
		return 'all';
	}

	public function before_run( Insert_Term_Action $action ) {
		parent::before_run( $action );

		$this->set( 'taxonomy', $action->get_taxonomy() );
	}

	protected function get_properties(): Object_Properties_Collection {
		return apply_filters(
			'jet-form-builder/term-modifier/object-properties',
			new Object_Properties_Collection(
				array(
					new Term_Id_Property(),
					new Term_Taxonomy_Property(),
					new Term_Name_Property(),
					new Term_Slug_Property(),
					new Term_Parent_Property(),
					new Term_Meta_Property(),
				)
			)
		);
	}

	public function get_actions(): Collection {
		return apply_filters(
			'jet-form-builder/term-modifier/object-actions',
			new Collection(
				array(
					new Insert_Action(),
					new Update_Action(),
				)
			)
		);
	}
}
