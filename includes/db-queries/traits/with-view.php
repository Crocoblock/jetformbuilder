<?php


namespace Jet_Form_Builder\Db_Queries\Traits;

use Jet_Form_Builder\Db_Queries\Views\View_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait With_View {

	private $view;

	public function before_set_view( View_Base $view ) {
	}

	public function after_set_view() {
	}

	public function set_view( View_Base $view ) {
		$this->before_set_view( $view );
		$this->view = $view;
		$this->after_set_view();

		return $this;
	}

	/**
	 * @return View_Base
	 * @throws Query_Builder_Exception
	 */
	public function view(): View_Base {
		if ( ! $this->view ) {
			throw new Query_Builder_Exception( 'Undefined view' );
		}

		return $this->view;
	}

}
