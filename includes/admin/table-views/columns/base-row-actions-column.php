<?php


namespace Jet_Form_Builder\Admin\Table_Views\Columns;

use Jet_Form_Builder\Admin\Table_Views\Actions\View_Single_Action;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Row_Actions_Column extends Base_Actions_Column {

	protected function is_active( View_Single_Action $action, array $record ): bool {
		return $action->show_in_row( $record );
	}

}