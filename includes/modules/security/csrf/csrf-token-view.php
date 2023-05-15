<?php


namespace Jet_Form_Builder\Modules\Security\Csrf;

use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Csrf_Token_View extends View_Base {

	/**
	 * @return string
	 */
	public function table(): string {
		return Csrf_Token_Model::table();
	}

	public function select_columns(): array {
		return Csrf_Token_Model::schema_columns();
	}

	public function get_dependencies(): array {
		return array(
			new Csrf_Token_Model(),
		);
	}

	/**
	 * @param string $client_id
	 *
	 * @return array
	 * @throws Query_Builder_Exception
	 */
	public static function by_client( string $client_id ): array {
		return static::findOne(
			array(
				'client_id' => $client_id,
			)
		)->query()->query_one();
	}

}
