<?php
namespace Jet_Engine\Gateways;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

class Message_Tag extends \Elementor\Core\DynamicTags\Tag {

	public function get_name() {
		return 'jet-gateway-message';
	}

	public function get_title() {
		return __( 'Payment Form Message', 'jet-engine' );
	}

	public function get_group() {
		return \Jet_Engine_Dynamic_Tags_Module::JET_GROUP;
	}

	public function get_categories() {
		return array(
			\Jet_Engine_Dynamic_Tags_Module::TEXT_CATEGORY,
		);
	}

	public function is_settings_required() {
		return false;
	}

	protected function _register_controls() {}

	public function render() {

		if ( ! Manager::instance()->data ) {
			return;
		}

		$form_id = ! empty( Manager::instance()->data['form_id'] ) ? Manager::instance()->data['form_id'] : false;

		if ( ! $form_id ) {
			return;
		}

		echo Manager::instance()->apply_macros( Manager::instance()->message, $form_id );

	}

}
