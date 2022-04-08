<?php


namespace Jet_Form_Builder\Admin\Table_Views\Actions;


abstract class Api_Single_Action extends View_Single_Action {

	abstract public function get_method(): string;

	abstract public function get_rest_url( array $record ): string;

	public function get_payload( array $record ): array {
		return array();
	}

	public function to_array( array $record ): array {
		$attrs = parent::to_array( $record );

		$attrs['payload']  = $this->get_payload( $record );
		$attrs['endpoint'] = array(
			'method' => $this->get_method(),
			'url'    => $this->get_rest_url( $record ),
		);

		return $attrs;
	}
}