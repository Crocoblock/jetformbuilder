<?php


namespace JFB_Modules\Gateways\Meta_Boxes\Columns;

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Gateways\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Print_Pdf_Column extends \JFB_Modules\Form_Record\Admin\View_Columns\Print_Pdf_Column {

	/**
	 * @param array $record
	 *
	 * @return array
	 * @throws Repository_Exception
	 */
	public function get_value( array $record = array() ) {
		$record_id = (int) $record['id'];

		/** @var Module $module */
		$module = jet_form_builder()->module( Module::class );

		return array(
			'text' => __( 'Print in PDF', 'jet-form-builder' ),
			'href' => '#',
			'type' => 'media-document',
		);
	}
}
