<?php


namespace JFB_Modules\Gateways\Table_Views\Columns;

use Jet_Form_Builder\Admin\Table_Views\Columns\Base_Header_Actions_Column;
use JFB_Modules\Gateways\Table_Views\Actions\Delete_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Header_Actions_Column extends Base_Header_Actions_Column {

	protected function get_actions(): array {
		return array(
			new Delete_Action(),
		);
	}

}
