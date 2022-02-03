<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views;


use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

class Record_View_Forms extends Record_View {

	/**
	 * @return \string[][]
	 * @throws Query_Builder_Exception
	 */
	public function select_columns(): array {
		return array(
			array(
				'as' => "DISTINCT {$this->column( 'form_id' )}"
			)
		);
	}

}