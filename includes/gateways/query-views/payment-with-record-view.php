<?php


namespace Jet_Form_Builder\Gateways\Query_Views;

use Jet_Form_Builder\Actions\Methods\Form_Record\Models\Record_Model;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Db_Models\Payment_Model;
use Jet_Form_Builder\Gateways\Db_Models\Payment_To_Record;

class Payment_With_Record_View extends Payment_View {

	public function get_prepared_join( Query_Builder $builder ) {
		parent::get_prepared_join( $builder );

		$payments_to_records = ( new Payment_To_Record() )->create()::table();
		$payments            = Payment_Model::table();
		$records             = Record_Model::table();

		$builder->join .= "
LEFT JOIN `{$payments_to_records}` ON 1=1 
	AND `{$payments_to_records}`.`payment_id` = `{$payments}`.`id`
	
LEFT JOIN `{$records}` ON 1=1 
	AND `{$records}`.`id` = `{$payments_to_records}`.`record_id`
		";
	}

	public function select_columns(): array {
		return array_merge(
			parent::select_columns(),
			Record_Model::schema_columns( 'record' )
		);
	}

}
