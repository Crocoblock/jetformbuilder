<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views;

use Jet_Form_Builder\Actions\Methods\Form_Record\Models\Record_Model;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Db_Models\Payment_To_Record;

class Record_By_Payment extends View_Base {

	public function table(): string {
		return Payment_To_Record::table();
	}

	public function select_columns(): array {
		return Record_Model::schema_columns();
	}

	/**
	 * @param Query_Builder $builder
	 *
	 * @throws Query_Builder_Exception
	 */
	public function get_prepared_join( Query_Builder $builder ) {
		try {
			$payment_to_record = ( new Payment_To_Record() )->create()::table();
		} catch ( Sql_Exception $exception ) {
			throw new Query_Builder_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}

		$records = Record_Model::table();

		$builder->join = "
LEFT JOIN `{$records}` ON 1=1
    AND `{$records}`.`id` = `{$payment_to_record}`.`record_id`
		";
	}
}
