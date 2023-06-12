<?php


namespace JFB_Modules\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Form_Record\Module;

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
	 * @throws Repository_Exception
	 */
	public function get_value( array $record = array() ) {
		$record_id = (int) $record['id'];

		/** @var Module $module */
		$module = jet_form_builder()->module( 'form-record' );

		return array(
			'text' => __( 'Print in PDF', 'jet-form-builder' ),
			'href' => '#',
			'type' => 'media-document',
		);
	}
}
