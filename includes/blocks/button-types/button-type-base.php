<?php


namespace Jet_Form_Builder\Blocks\Button_Types;

use Jet_Form_Builder\Blocks\Render\Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Button_Type_Base {

	private $html_attrs = array();

	abstract public function slug(): string;

	public function html_attrs(): array {
		return array(
			'type'  => 'button',
			'class' => array(
				'button' => "jet-form-builder__button-{$this->slug()}",
			),
		);
	}

	public function before_render( Base $render, array $args ) {
	}

	final public function get_html_attrs( $with_update = false ): array {
		if ( $with_update || ! $this->html_attrs ) {
			$this->html_attrs = $this->html_attrs();
		}

		return $this->html_attrs;
	}

	final public function get_class( $type ): array {
		$css_class = $this->get_html_attrs()['class'][ $type ] ?? '';

		return is_array( $css_class ) ? $css_class : array( $css_class );
	}

	final public function get_type(): string {
		return $this->get_html_attrs()['type'] ?? 'button';
	}


}
