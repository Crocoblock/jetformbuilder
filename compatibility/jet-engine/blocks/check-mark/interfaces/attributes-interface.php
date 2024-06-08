<?php

namespace JFB_Compatibility\Jet_Engine\Blocks\Check_Mark\Interfaces;

interface Attributes_Interface {

	public function is_image_control(): bool;

	public function get_wrapper_attributes(): string;

	public function get_control_type(): string;

	public function set_control_type( $control_type );

	public function get_default_icon_url(): string;

	public function set_default_icon_url( $icon_url );

	public function get_checked_icon_url(): string;

	public function set_checked_icon_url( $icon_url );

}
