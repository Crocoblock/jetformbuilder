<?php


namespace Jet_Form_Builder\Rest_Api\Traits;


interface Rest_Fetch_Endpoint {

	public function get_rest_url(): string;

	public function get_rest_methods(): string;

}