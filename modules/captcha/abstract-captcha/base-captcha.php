<?php


namespace JFB_Modules\Captcha\Abstract_Captcha;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;
use JFB_Modules\Base_Module\Base_Module_After_Install_It;
use JFB_Modules\Base_Module\Base_Module_Dir_It;
use JFB_Modules\Base_Module\Base_Module_Handle_It;
use JFB_Modules\Base_Module\Base_Module_It;
use JFB_Modules\Base_Module\Base_Module_Url_It;
use JFB_Modules\Captcha\Module;
use JFB_Modules\Security\Exceptions\Spam_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Captcha implements
	Repository_Item_Instance_Trait,
	Arrayable {

	protected $options;
	protected $locked_render = false;

	const FIELD_CLASS = 'captcha-token';
	const FIELD       = '_captcha_token';
	const HANDLE_API  = 'jet-form-builder-recaptcha';
	const HANDLE_USER = self::HANDLE_API . '-handler';

	abstract public function get_id(): string;

	abstract public function get_title(): string;

	/**
	 * @param array $request
	 *
	 * @throws Spam_Exception
	 */
	abstract public function verify( array $request );

	abstract protected function render(): string;

	public function get_output(): string {
		if ( $this->is_locked_render() ) {
			return '';
		}

		try {
			$output = $this->render();
		} catch ( Render_Empty_Field $exception ) {
			return '';
		}
		$this->lock_render();

		return $output;
	}

	public function sanitize_options( array $options ): Base_Captcha {
		$this->options = $options[ $this->get_id() ] ?? array();

		return $this;
	}

	public function rep_item_id() {
		return $this->get_id();
	}

	public function to_array(): array {
		return array(
			'label' => $this->get_title(),
			'value' => $this->get_id(),
		);
	}

	public function lock_render() {
		$this->locked_render = true;
	}

	public function is_locked_render(): bool {
		return $this->locked_render;
	}

	public function get_handle( string $unique = '' ): string {
		return $this->module()->get_handle( $this->get_id() . $unique );
	}

	/**
	 * @return Module|mixed
	 */
	public function module() {
		try {
			return jet_form_builder()->module( 'captcha' );
		} catch ( Repository_Exception $exception ) {
			return false;
		}
	}
}
