<?php


namespace Jet_Form_Builder\Shortcodes;

use Jet_Form_Builder\Classes\Arguments\Form_Arguments;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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

	protected function prepare_attributes( $attrs ): array {
		$result    = array();
		$arguments = new Form_Arguments();

		foreach ( $attrs as $name => $attr ) {
			if ( ! array_key_exists( $name, $arguments->props ) ) {
				continue;
			}

			$result[ $name ] = $attr['default'];
		}

		return $result;
	}

	/**
	 * @param $settings
	 *
	 * @return mixed
	 */
	public function generate( $settings ) {
		$form = jet_form_builder()->blocks->get_form_class();

		return do_shortcode( $form->render_callback_field( $settings ) );
	}


}
