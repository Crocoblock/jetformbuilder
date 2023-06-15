<?php


namespace JFB_Modules\Form_Record\Admin\Meta_Boxes;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form_Record_Print_Values_Box extends Form_Record_Values_Box {

	public function get_columns(): array {
		/** @var Column_Advanced_Base[] $columns */
		$columns = parent::get_columns();

		/*$columns['form']     = $columns['form']->set_type( 'string' );
		$columns['referrer'] = $columns['referrer']->set_type( 'string' );*/

		return $columns;
	}

}
