<?php


namespace Jet_Form_Builder\Admin\Notices;

abstract class Base_Notice {

	const PRESET_ALERT  = 'alert';
	const PRESET_NOTICE = 'notice';

	abstract public function get_id(): string;

	abstract public function get_type(): string;

	abstract public function get_icon(): string;

}
