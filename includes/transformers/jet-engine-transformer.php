<?php

namespace Jet_Form_Builder\Transformers;

use Jet_Form_Builder\Plugin;

class Jet_Engine_Transformer extends Base_Transformer {

	public function source_form_data() {
		return get_post_meta( $this->form_id );
	}

	public function source_fields() {
		return json_decode( wp_unslash( $this->form_data['_form_data'] ), true );
	}

	public function source_actions() {
		return json_decode( wp_unslash( $this->form_data['_notifications_data'] ), true );

	}

	public function source_settings() {
		$preset   = $this->form_data['_preset'];
		$messages = $this->form_data['_messages'];
		$captcha  = $this->form_data['_captcha'];

		return array(
			'_jf_preset'    => $preset,
			'_jf_messages'  => $messages,
			'_jf_recaptcha' => $captcha
		);
	}

	public function transform_fields() {
		// TODO: Implement transform_fields() method.
	}

	public function transform_settings() {
		// TODO: Implement transform_settings() method.
	}

	public function save_transformer() {

	}
}