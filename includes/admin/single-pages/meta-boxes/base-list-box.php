<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;

use Jet_Form_Builder\Admin\Table_Advanced_Record_Prepare_Trait;

abstract class Base_List_Box extends Base_Meta_Box {

	use Table_Advanced_Record_Prepare_Trait;

	final public function get_values(): array {
		return $this->prepare_record( $this->get_list() );
	}

	public function to_array(): array {
		return array_merge(
			parent::to_array(),
			array(
				'columns'     => $this->get_columns_headings(),
				'render_type' => self::TYPE_LIST,
			)
		);
	}

}
