<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Models;

use Jet_Form_Builder\Db_Queries\Base_Db_Model;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Render_State_Model extends Base_Db_Model {

	/**
	 * @return string
	 */
	public static function table_name(): string {
		return 'custom_render_states';
	}

	/**
	 * @return array
	 */
	public static function schema(): array {
		return array(
			'id'         => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'slug'       => 'varchar(100)',
			'title'      => 'varchar(255)',
			'created_at' => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
		);
	}

	/**
	 * @return array
	 */
	public static function schema_keys(): array {
		return array(
			'id'   => 'primary',
			'slug' => 'unique',
		);
	}
}
