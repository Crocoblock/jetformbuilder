<?php


namespace Jet_Form_Builder\Admin\Table_Views\Columns;

use Jet_Form_Builder\Admin\Table_Views\Actions\View_Single_Action;
use Jet_Form_Builder\Admin\Table_Views\Column_Base;

abstract class Base_Actions_Column extends Column_Base {

	protected $type = 'rawArray';

	/**
	 * @return View_Single_Action[]
	 */
	abstract protected function get_actions(): array;

	abstract protected function is_active( View_Single_Action $action, array $record ): bool;

	public function get_value( array $record = array() ) {
		$actions  = $this->get_actions();
		$prepared = array();

		foreach ( $actions as $index => $action ) {
			if ( ! $this->is_active( $action, $record ) ) {
				continue;
			}
			$prepared[] = $action->to_array();
		}

		return $prepared;
	}

}
