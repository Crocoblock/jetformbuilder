<?php


namespace JFB_Modules\Webhook\Db\Views;

use Jet_Form_Builder\Db_Queries\Query_Builder;
use JFB_Modules\Form_Record\Models\Record_Model;
use JFB_Modules\Webhook\Db\Models\Tokens_Model;
use JFB_Modules\Webhook\Db\Models\Tokens_To_Records_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Record_By_Token_View extends Tokens_View {

	public function get_prepared_join( Query_Builder $builder ) {
		parent::get_prepared_join( $builder );

		$tokens_to_records = Tokens_To_Records_Model::table();
		$tokens            = Tokens_Model::table();
		$records           = Record_Model::table();

		$builder->join .= "
LEFT JOIN `{$tokens_to_records}` ON 1=1 
	AND `{$tokens_to_records}`.`token_id` = `{$tokens}`.`id`
	
LEFT JOIN `{$records}` ON 1=1 
	AND `{$records}`.`id` = `{$tokens_to_records}`.`record_id`
		";
	}

	public function select_columns(): array {
		return Record_Model::schema_columns();
	}

	public function get_dependencies(): array {
		return array(
			new Tokens_To_Records_Model(),
		);
	}

}
