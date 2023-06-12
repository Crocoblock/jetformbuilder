<?php


namespace JFB_Modules\Gateways\Meta_Boxes\Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Gateways\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Export_Csv_Column extends Column_Advanced_Base {

	protected $column = 'export_csv';
	protected $type   = self::LINK;

	public function get_label(): string {
		return '';
	}

	/**
	 * @param array $record
	 *
	 * @return array
	 * @throws Repository_Exception
	 */
	public function get_value( array $record = array() ) {
		$record_id = (int) $record['id'];

		/** @var Module $module */
		$module = jet_form_builder()->module( 'gateways' );

		return array(
			'text' => __( 'Export in CSV', 'jet-form-builder' ),
			'href' => add_query_arg(
				array(
					'id' => $record_id,
				),
				$module->get_export_single()->get_url()
			),
			'type' => 'external',
		);
	}
}
