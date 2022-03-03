<?php


namespace Jet_Form_Builder\Admin\Table_Views;


use Jet_Form_Builder\Admin\Table_Advanced_Record_Prepare_Trait;

abstract class View_Advanced_Base extends View_Base {

	use Table_Advanced_Record_Prepare_Trait;

	public function get_prepared_list( array $custom_list = array() ): array {
		return $this->prepare_list( $custom_list );
	}


}