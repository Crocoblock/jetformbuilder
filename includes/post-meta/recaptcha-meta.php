<?php


namespace Jet_Form_Builder\Post_Meta;



class Recaptcha_Meta extends Base_Meta_Type {

	public function get_id(): string {
		return '_jf_recaptcha';
	}

	public function get_type(): string {
		return 'string';
	}

	public function get_default(): string {
		return '{}';
	}
}