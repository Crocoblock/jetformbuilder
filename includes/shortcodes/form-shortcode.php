<?php


namespace Jet_Form_Builder\Shortcodes;

class Form_Shortcode extends Shortcode {

	/**
	 * @return mixed
	 */
	public function get_name() {
		return 'jet_fb_form';
	}

	public function default_args() {
		return $this->prepare_attributes(
			jet_form_builder()->blocks->get_form_class()->get_attributes()
		);
	}

	/**
	 * @param $settings
	 *
	 * @return mixed
	 */
	public function generate( $settings ) {
		return jet_fb_render_form( $settings );
	}


}
