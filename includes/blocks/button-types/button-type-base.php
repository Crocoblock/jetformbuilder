<?php


namespace Jet_Form_Builder\Blocks\Button_Types;


abstract class Button_Type_Base {

	private $html_attrs = array();

	abstract public function slug(): string;

	abstract public function label(): string;

	public function preset_label(): string {
		return $this->label();
	}

	public function html_attrs() {
		return array(
			'type'  => 'button',
			'class' => array(
				'button' => "jet-form-builder__button-{$this->slug()}"
			)
		);
	}

	public function get_html_attrs( $with_update = false ) {
		if ( $with_update || ! $this->html_attrs ) {
			$this->html_attrs = $this->html_attrs();
		}

		return $this->html_attrs;
	}

	public function get_class( $type ) {
		return $this->get_html_attrs()['class'][ $type ] ?? '';
	}

	public function get_type() {
		return $this->get_html_attrs()['type'] ?? 'button';
	}



}