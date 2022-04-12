<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;


interface Meta_Table_Options extends Meta_Box_Options {

	public function is_footer_heading(): bool;

	/**
	 * @return bool
	 */
	public function is_show_overflow(): bool;

	/**
	 * @return bool
	 */
	public function is_show_overflow_control(): bool;

}