<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;

use Jet_Form_Builder\Classes\Arrayable\Arrayable;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Meta_Box_Options_Converter implements Arrayable {

	protected $editable_table         = false;
	protected $editable_table_control = false;

	public function __construct( Meta_Box_Options $box ) {
		$this->editable_table         = $box->is_editable_table();
		$this->editable_table_control = $box->is_editable_table_control();
	}

	/**
	 * Get the instance as an array.
	 *
	 * @return array
	 */
	public function to_array(): array {
		return array(
			'is_editable_table'         => $this->editable_table,
			'is_editable_table_control' => $this->editable_table_control,
		);
	}
}
