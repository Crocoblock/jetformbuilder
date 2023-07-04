<?php


namespace Jet_Form_Builder\Blocks\Render;

use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;
use Jet_Form_Builder\Classes\Http\Http_Tools;
use Jet_Form_Builder\Classes\Security\Csrf_Tools;
use JFB_Modules\Security\Wp_Nonce;
use Jet_Form_Builder\Live_Form;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form_Hidden_Fields {

	public static function render() {
		$fields = Render_State::instance()->set_current()->render();

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
