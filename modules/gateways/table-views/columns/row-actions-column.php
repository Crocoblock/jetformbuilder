<?php


namespace JFB_Modules\Gateways\Table_Views\Columns;

use Jet_Form_Builder\Admin\Table_Views\Columns\Base_Row_Actions_Column;
use JFB_Modules\Gateways\Table_Views\Actions\Delete_Action;
use JFB_Modules\Gateways\Table_Views\Actions\View_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Row_Actions_Column extends Base_Row_Actions_Column {

	protected function get_actions(): array {
		return array(
			new View_Action(),
			new Delete_Action(),
		);
	}
}
