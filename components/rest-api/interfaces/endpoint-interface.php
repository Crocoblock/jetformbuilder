<?php

namespace JFB_Components\Rest_Api\Interfaces;

interface Endpoint_Interface {

	public function get_method(): string;

	public function has_permission(): bool;

	public function get_args(): array;

	public function process( \WP_REST_Request $request ): \WP_REST_Response;

}
