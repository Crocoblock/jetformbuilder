<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;

use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_View;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

class Form_Record_General_Box extends Base_Meta_Box {

	public function get_title(): string {
		return __( 'Form Fields', 'jet-form-builder' );
	}

	/**
	 * @return array
	 * @throws Not_Found_Page_Exception
	 */
	public function get_values(): array {
		return array(
			'filekljdf'     => 'dsfd',
			'filedf'        => 'dsfd',
			'fild879sgfedf' => 'ds324fd',
			'figfjhledf'    => 'd456sfd',
			'file21df'      => 'dgfsfd',
			'filsdfedf'     => 'dfdsfd',
			'filertedf'     => 'dsfk,jd',
			'filbhjedf'     => 'dsfdfgd',
			'filweredf'     => 'dsszdfd',
		);
	}
}
