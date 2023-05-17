<?php


namespace JFB_Modules\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Classes_Column extends Column_Base {

	protected $type = 'rawArray';

	public function get_value( array $record = array() ) {
		return array(
			'list-table-item--not-viewed' => empty( $record['is_viewed'] ),
		);
	}

}
