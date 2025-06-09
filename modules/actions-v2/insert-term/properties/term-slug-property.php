<?php


namespace JFB_Modules\Actions_V2\Insert_Term\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Term_Slug_Property extends Base_Object_Property {

	protected $is_empty = false;

	public function get_id(): string {
		return 'slug';
	}

	public function get_label(): string {
		return __( 'Term Slug', 'jet-form-builder' );
	}

	public function get_value( Abstract_Modifier $modifier ) {
		$action = $modifier->get_action();

		if ( ! is_a( $action, Insert_Action::class ) ||
			$this->value
		) {
			return parent::get_value( $modifier );
		}

		$this->value    = '(empty)';
		$this->is_empty = true;

		return parent::get_value( $modifier );
	}
}
