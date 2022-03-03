<?php


namespace Jet_Form_Builder\Admin\Table_Views;


trait Column_Heading_Trait  {

	public function get_heading(): array {
		return array(
			'label' => $this->get_label(),
		);
	}

}