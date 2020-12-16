<?php


namespace Jet_Form_Builder\Presets;


use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Plugin;

class Form_Base_Preset extends Base_Preset {

	use Instance_Trait;

	private $form_id;

	public function preset_source() {
		 return Plugin::instance()->post_type->get_preset( $this->form_id );
	}

	public function set_form_id( $form_id ) {
		$this->form_id = $form_id;
	}

}