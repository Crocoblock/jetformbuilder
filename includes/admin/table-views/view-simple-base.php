<?php


namespace Jet_Form_Builder\Admin\Table_Views;


use Jet_Form_Builder\Admin\Table_Record_Prepare_Trait;

abstract class View_Simple_Base extends View_Base {

	use Table_Record_Prepare_Trait;

	public function get_prepared_list( array $custom_list = array() ): array {
		return $this->prepare_list( $custom_list );
	}

}