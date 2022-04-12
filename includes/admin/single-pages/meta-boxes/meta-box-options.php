<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;


interface Meta_Box_Options {

	/**
	 * @return bool
	 */
	public function is_editable_table(): bool;

	/**
	 * @return bool
	 */
	public function is_editable_table_control(): bool;

}