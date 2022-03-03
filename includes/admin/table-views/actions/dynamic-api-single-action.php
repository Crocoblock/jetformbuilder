<?php


namespace Jet_Form_Builder\Admin\Table_Views\Actions;


abstract class Dynamic_Api_Single_Action extends Api_Single_Action {

	private $params = array();

	abstract public function get_dynamic_url( array $params ): string;

	public function set_params( array $params ): Dynamic_Api_Single_Action {
		$this->params = $params;

		return $this;
	}

	public function get_rest_url(): string {
		return $this->get_dynamic_url( $this->params );
	}
}