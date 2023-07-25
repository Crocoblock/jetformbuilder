<?php

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

function jet_form_builder() {
	return Jet_Form_Builder\Plugin::instance();
}

function jet_fb_render_form( $settings ) {
	return Jet_Form_Builder\Plugin::instance()->blocks->get_form_class()->render_form( $settings );
}

function jet_fb_handler(): \Jet_Form_Builder\Form_Handler {
	return jet_form_builder()->form_handler;
}

function jet_fb_action_handler(): \Jet_Form_Builder\Actions\Action_Handler {
	return jet_fb_handler()->action_handler;
}

function jet_fb_request_handler(): \Jet_Form_Builder\Request\Request_Handler {
	return jet_fb_handler()->request_handler;
}

function jet_fb_msg_router_manager( $data = array() ): \Jet_Form_Builder\Form_Messages\Manager {
	return jet_form_builder()->msg_router->get_manager( $data );
}

function jet_fb_preset( $form_id = 0 ): \Jet_Form_Builder\Presets\Preset_Manager {
	return \Jet_Form_Builder\Presets\Preset_Manager::instance()->set_form_id( $form_id );
}


/**
 * @return false|\Jet_Form_Builder\Admin\Pages\Base_Page|\Jet_Form_Builder\Admin\Single_Pages\Base_Single_Page
 */
function jet_fb_current_page() {
	try {
		return \Jet_Form_Builder\Admin\Pages\Pages_Manager::instance()->get_current();
	} catch ( \Jet_Form_Builder\Admin\Exceptions\Not_Found_Page_Exception $exception ) {
		return false;
	}
}

function jet_fb_live(): \Jet_Form_Builder\Live_Form {
	return \Jet_Form_Builder\Live_Form::instance();
}

function jet_fb_live_arg( string $arg_name, $if_empty = false ) {
	return jet_fb_live_args()->argument( $arg_name, $if_empty );
}

function jet_fb_live_args(): \Jet_Form_Builder\Classes\Arguments\Form_Arguments {
	return jet_fb_live()->spec_data;
}

/**
 * @return false|\JFB_Modules\Gateways\Base_Gateway|\JFB_Modules\Gateways\Base_Scenario_Gateway
 */
function jet_fb_gateway_current() {
	return \JFB_Modules\Gateways\Module::instance()->get_current_gateway_controller_or_die();
}

function jet_fb_events(): \Jet_Form_Builder\Actions\Events_Manager {
	return \Jet_Form_Builder\Actions\Events_Manager::instance();
}

/**
 * Parse dynamic preset
 * If this hasn't json preset
 * it will return the incoming value
 *
 * @param string $value
 *
 * @return mixed|string
 */
function jet_fb_parse_dynamic( string $value ) {
	return ( new \Jet_Form_Builder\Presets\Types\Dynamic_Preset() )->parse_json( $value );
}

function jet_fb_parse_macro( $content ): string {
	return jet_fb_handler()->parser->parse_macros( $content );
}

/**
 * @since 3.1.0
 */
function jet_fb_context(): \Jet_Form_Builder\Request\Parser_Context {
	return JFB_Modules\Block_Parsers\Module::instance()->get_context();
}
