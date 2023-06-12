<?php


namespace JFB_Modules\Gateways\Meta_Boxes;

use JFB_Modules\Gateways\Meta_Boxes\Columns\Export_Csv_Column;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_List_Box;
use JFB_Modules\Gateways\Meta_Boxes\Columns\Print_Pdf_Column;
use JFB_Modules\Gateways\Query_Views\Payment_For_Export_View;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Payment_Actions_Box extends Base_List_Box {

	public function get_title(): string {
		return __( 'Actions', 'jet-form-builder' );
	}

	public function get_columns(): array {
		return array(
			'export_csv' => new Export_Csv_Column(),
			'print_pdf'  => new Print_Pdf_Column(),
		);
	}

	/**
	 * @return array
	 * @throws Not_Found_Page_Exception
	 */
	public function get_list(): array {
		try {
			return Payment_For_Export_View::findById( $this->get_id() );
		} catch ( Query_Builder_Exception $exception ) {
			throw new Not_Found_Page_Exception( $exception->getMessage(), ...$exception->get_additional() );
		}
	}

}
