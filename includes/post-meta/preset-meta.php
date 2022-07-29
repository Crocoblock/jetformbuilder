<?php


namespace Jet_Form_Builder\Post_Meta;



class Preset_Meta extends Base_Meta_Type {

	public function get_id(): string {
		return '_jf_preset';
	}

	public function get_type(): string {
		return 'string';
	}

	public function get_default(): string {
		return '{}';
	}
}