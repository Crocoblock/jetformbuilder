<?php
namespace JFB_Modules\Validation\Handlers;

use JFB_Modules\Validation\Rest_Api\Rest_Validation_Endpoint;
use JFB_Modules\Validation\Silence_Exception;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;

class Validation_Handler {
	public static function validate($body) {
		remove_all_actions('jet-form-builder/validate-field');

		try {
			$request = new \WP_REST_Request();
			$request->set_body_params($body);
			$parser = (new Rest_Validation_Endpoint())->get_parser_public($request);
		} catch (Silence_Exception $exception) {
			return [
				'result' => false,
				'message' => __('Unresolved parser for field', 'jet-form-builder'),
			];
		}

		$validation = $parser->get_setting('validation');
		$ssr_attrs = Array_Tools::get(
			$validation,
			['rules', $body[Rest_Validation_Endpoint::RULE_INDEX_KEY]]
		);

		if (null === $parser->get_value() || '' === $parser->get_value() || empty($ssr_attrs['value'])) {
			return [
				'result' => false,
				'message' => __('Field value or callback is empty', 'jet-form-builder'),
			];
		}

		/** @var Module $module */
		$module = jet_form_builder()->module('validation');
		$ssr_rule = $module->get_rules()->get_ssr();

		$ssr_rule->set_settings($ssr_attrs);
		$ssr_rule->validate_field($parser);

		return [
			'result' => empty($parser->get_errors()),
			'message' => empty($parser->get_errors()) ? '' : __('Validation failed', 'jet-form-builder'),
		];
	}
}
