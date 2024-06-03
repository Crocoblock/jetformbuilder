<?php

namespace JFB_Modules\Onboarding\Builders\Interfaces;

interface Builder_Interface {

	public function set_form_id( int $form_id );

	public function get_form_id(): int;

	public function set_redirect_url( string $url );

	public function set_builder_type( string $type );

	public function get_builder_type(): string;

	public function get_redirect_url(): string;

}
