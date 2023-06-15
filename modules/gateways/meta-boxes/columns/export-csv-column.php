<?php


namespace JFB_Modules\Gateways\Meta_Boxes\Columns;

use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Gateways\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Export_Csv_Column extends \JFB_Modules\Form_Record\Admin\View_Columns\Export_Csv_Column {

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
				'payments-export',
				array(
					'id' => $record_id,
				)
			),
			'target' => '_blank',
			'type'   => 'media-spreadsheet',
		);
	}
}
