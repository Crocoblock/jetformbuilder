<?php


namespace JFB_Modules\Webhook\Form_Record\Db\Views;

use Jet_Form_Builder\Db_Queries\Query_Builder;
use JFB_Modules\Webhook\Db\Models\Tokens_Model;
use JFB_Modules\Webhook\Form_Record\Db\Models\Tokens_To_Records_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Token_By_Record_View extends Record_By_Token_View {

	public function get_prepared_join( Query_Builder $builder ) {
		parent::get_prepared_join( $builder );

		$tokens_to_records = Tokens_To_Records_Model::table();
		$tokens            = Tokens_Model::table();

		$builder->join .= "
LEFT JOIN `{$tokens}` ON 1=1 
	AND `{$tokens_to_records}`.`token_id` = `{$tokens}`.`id`
		";
	}

	public function select_columns(): array {
		return Tokens_Model::schema_columns();
	}

}
