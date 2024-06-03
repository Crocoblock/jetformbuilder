<?php

namespace JFB_Modules\Onboarding\Builders\Traits;

trait Builder_Trait {

	protected $form_id  = 0;
	protected $redirect = '';
	protected $type;

	public function set_form_id( int $form_id ) {
		$this->form_id = $form_id;
	}

	public function get_form_id(): int {
		return $this->form_id;
	}

	public function set_redirect_url( string $url ) {
		$this->redirect = $url;
	}

	public function get_redirect_url(): string {
		return $this->redirect;
	}

	public function set_builder_type( string $type ) {
		$this->type = $type;
	}

	public function get_builder_type(): string {
		return $this->type;
	}

}
