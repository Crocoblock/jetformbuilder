<?php


namespace JFB_Modules\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

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
	 */
	public function get_value( array $record = array() ) {
		$record_id = (int) $record['id'];

		return array(
			'text'   => __( 'Export in CSV', 'jet-form-builder' ),
			'href'   => Pages_Manager::instance()->get_action_url(
				'records-export',
				array(
					'id' => $record_id,
				)
			),
			'target' => '_blank',
			'type'   => 'media-spreadsheet',
		);
	}
}
