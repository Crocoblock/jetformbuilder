<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;


use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

class Form_Record_Side_Box extends Base_Meta_Box {

	public function get_title(): string {
		return __( 'General Values','jet-form-builder' );
	}

	/**
	 * @return array
	 * @throws Not_Found_Page_Exception
	 */
	public function get_values(): array {
		try {
			return Record_View::findById( $this->get_id() );
		} catch ( Query_Builder_Exception $exception ) {
			throw new Not_Found_Page_Exception( $exception, ...$exception->get_additional() );
		}
	}
}