<?php


namespace JFB_Modules\Gateways\Meta_Boxes\Columns;

use Jet_Form_Builder\Admin\Pages\Pages_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Print_Pdf_Column extends \JFB_Modules\Form_Record\Admin\View_Columns\Print_Pdf_Column {

	/**
	 * @param array $record
	 *
	 * @return array
	 */
	public function get_value( array $record = array() ) {
		$record_id = (int) $record['id'];

		return array(
			'text'   => __( 'Print in PDF', 'jet-form-builder' ),
			'href'   => Pages_Manager::instance()->get_action_url(
				'payment-print',
				array(
					'item_id' => $record_id,
				)
			),
			'target' => '_blank',
			'type'   => 'media-document',
		);
	}
}
