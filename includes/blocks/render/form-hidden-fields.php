<?php


namespace Jet_Form_Builder\Blocks\Render;

use Jet_Form_Builder\Classes\Http\Http_Tools;
use Jet_Form_Builder\Classes\Security\Csrf_Tools;
use Jet_Form_Builder\Classes\Security\Wp_Nonce_Tools;
use Jet_Form_Builder\Live_Form;

class Form_Hidden_Fields {

	public static function render() {
		// render wp nonce
		$fields = Wp_Nonce_Tools::get_nonce_field();

		$fields .= Csrf_Tools::get_field();

		$fields .= Live_Form::force_render_field(
			'hidden-field',
			array(
				'field_value' => jet_fb_live()->form_id,
				'name'        => jet_fb_handler()->form_key,
			)
		);

		$fields .= Live_Form::force_render_field(
			'hidden-field',
			array(
				'field_value' => Http_Tools::get_form_refer_url(),
				'name'        => jet_fb_handler()->refer_key,
			)
		);
		$fields .= Live_Form::force_render_field(
			'hidden-field',
			array(
				'field_value' => Live_Form::instance()->post->ID ?? - 1,
				'name'        => jet_fb_handler()->post_id_key,
			)
		);

		return $fields;
	}


}
