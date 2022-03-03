<?php


namespace Jet_Form_Builder\Admin\Table_Views;


interface Column_Heading_Interface {

	public function get_label(): string;

	public function get_heading(): array;

}