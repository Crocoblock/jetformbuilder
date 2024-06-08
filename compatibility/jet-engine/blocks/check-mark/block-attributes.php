<?php

namespace JFB_Compatibility\Jet_Engine\Blocks\Check_Mark;

class Block_Attributes implements Interfaces\Attributes_Interface {

	private $control_type     = '';
	private $default_icon_url = '';
	private $checked_icon_url = '';
	private $width            = 24;

	public function is_image_control(): bool {
		return (
			'image' === $this->get_control_type() &&
			$this->get_default_icon_url() &&
			$this->get_checked_icon_url()
		);
	}

	public function get_wrapper_attributes(): string {
		return get_block_wrapper_attributes(
			array(
				'style' => sprintf( '--jfb-check-mark-width:%dpx;', $this->get_width() ),
				'class' => 'jet-fb-check-mark',
			)
		);
	}

	public function get_control_type(): string {
		return $this->control_type;
	}

	public function set_control_type( $control_type ) {
		$this->control_type = (string) $control_type;
	}

	public function get_default_icon_url(): string {
		return $this->default_icon_url;
	}

	public function set_default_icon_url( $icon_url ) {
		$this->default_icon_url = (string) $icon_url;
	}

	public function get_checked_icon_url(): string {
		return $this->checked_icon_url;
	}

	public function set_checked_icon_url( $icon_url ) {
		$this->checked_icon_url = (string) $icon_url;
	}

	public function get_width(): int {
		return $this->width;
	}

	public function set_width( $width ) {
		if ( ! $width || ! is_numeric( $width ) || 10 > $width ) {
			$width = 24;
		}
		$this->width = (int) $width;
	}
}
