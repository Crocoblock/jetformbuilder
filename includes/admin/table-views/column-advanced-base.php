<?php


namespace Jet_Form_Builder\Admin\Table_Views;


abstract class Column_Advanced_Base extends Column_Base implements Column_Heading_Interface {

	private $use_label = true;

	use Column_Heading_Trait;

	public function use_label( bool $use_label ): Column_Advanced_Base {
		$this->use_label = $use_label;

		return $this;
	}

	public function has_label(): bool {
		return $this->use_label;
	}

}