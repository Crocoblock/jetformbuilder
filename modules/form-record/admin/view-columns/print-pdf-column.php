<?php


namespace JFB_Modules\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Pages\Pages_Manager;
use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Print_Pdf_Column extends Column_Advanced_Base {

	protected $column = 'print_pdf';
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
			'text'   => __( 'Print in PDF', 'jet-form-builder' ),
			'href'   => Pages_Manager::instance()->get_action_url(
				'record-print',
				array(
					'item_id' => $record_id,
				)
			),
			'target' => '_blank',
			'type'   => 'media-document',
		);
	}
}
