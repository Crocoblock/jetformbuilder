<?php


namespace JFB_Components\Db\Views;

use Jet_Form_Builder\Db_Queries\Views\View_Base;
use JFB_Component\Db\Models\Tokens_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Tokens_View extends View_Base {

	public function table(): string {
		return Tokens_Model::table();
	}

	public function get_dependencies(): array {
		return array(
			new Tokens_Model(),
		);
	}
}
