<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Admin\View_Actions;


use Jet_Form_Builder\Actions\Methods\Form_Record\Admin\Pages\Single_Form_Record_Page;
use Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page;
use Jet_Form_Builder\Admin\Table_Views\Actions\Link_Single_Action;

class View_Action extends Link_Single_Action {

	/** @var Base_Single_Page */
	private $single;

	public function get_slug(): string {
		return 'view';
	}

	public function get_label(): string {
		return __( 'View', 'jet-form-builder' );
	}

	public function show_in_header(): bool {
		return false;
	}

	/**
	 * @param array $record
	 *
	 * @return bool
	 * @throws Not_Found_Page_Exception
	 */
	public function show_in_row( array $record ): bool {
		$this->single = ( new Single_Form_Record_Page() )->set_id( $record['id'] );

		return true;
	}

	public function get_href(): string {
		return $this->single->get_url();
	}
}