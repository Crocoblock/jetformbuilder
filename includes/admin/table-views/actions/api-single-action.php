<?php


namespace Jet_Form_Builder\Admin\Table_Views\Actions;


abstract class Api_Single_Action extends View_Single_Action {

	abstract public function get_method(): string;

	abstract public function get_rest_url(): string;

	abstract public function show_in_header( array $record ): bool;

	abstract public function show_in_row( array $record ): bool;

	public function get_action(): array {
		$attrs = parent::get_action();

		$attrs['endpoint'] = array(
			'method' => $this->get_method(),
			'url'    => $this->get_rest_url(),
		);

		return $attrs;
	}
}