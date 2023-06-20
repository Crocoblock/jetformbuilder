<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Actions\Events\Bad_Request\Bad_Request_Event;
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Classes\Resources\Media_Block_Value;
use Jet_Form_Builder\Classes\Resources\File;
use Jet_Form_Builder\Classes\Resources\File_Collection;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Live_Form;
use JFB_Modules\Security\Exceptions\Spam_Exception;
use Jet_Form_Builder\Request\Exceptions\Sanitize_Value_Exception;
use JFB_Modules\Logger;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Request_Handler {

	// phpcs:ignore PSR2.Classes.PropertyDeclaration.Underscore
	public $_fields = array();
	private $context;

	public function __construct() {
		// main context
		$this->context = new Parser_Context();
	}

	/**
	 * Get submitted form data
	 *
	 * @throws Action_Exception|Spam_Exception|Request_Exception
	 */
	public function set_form_data() {
		$this->get_context()
			->set_files( Request_Tools::get_files( $_FILES ) )
			->set_request( $this->get_raw_request() );

		$this->_fields = Block_Helper::get_blocks_by_post(
			jet_fb_handler()->get_form_id()
		);

		$this->get_context()->apply( $this->_fields );

		$this->get_context()->update_request(
			apply_filters(
				'jet-form-builder/form-handler/form-data',
				$this->get_context()->resolve_request()
			),
			array()
		);

		if ( ! Logger\Module::instance()->has_log( Sanitize_Value_Exception::class ) ) {
			return;
		}

		jet_fb_events()->execute( Bad_Request_Event::class );

		throw new Request_Exception( 'validation_failed' );
	}

	/**
	 * @return array
	 * @throws Request_Exception|Spam_Exception
	 */
	private function get_raw_request(): array {
		// phpcs:ignore WordPress.Security.NonceVerification.Missing
		$values = Tools::sanitize_recursive( wp_unslash( $_POST ) );

		Live_Form::instance()
				->set_form_id( jet_fb_handler()->get_form_id() )
				->set_specific_data_for_render();

		return apply_filters( 'jet-form-builder/request-handler/request', $values );
	}

	/**
	 * @param string|array $name 'field_name'|'repeater_name.field_name'|['repeater_name', 'field_name']
	 */
	public function exclude( $name ) {
		$this->get_context()->exclude( $name );
	}

	public function set_request_type( array $types ): Request_Handler {
		foreach ( $types as $name => $value ) {
			$this->get_context()->set_field_type( $value, $name );
		}

		return $this;
	}

	public function set_request_attrs( array $attrs ): Request_Handler {
		foreach ( $attrs as $name => $value ) {
			$this->get_context()->set_field_settings( $value, $name );
		}

		return $this;
	}

	/**
	 * @param string|array $name 'field_name'|'repeater_name.field_name'|['repeater_name', 'field_name']
	 * @param string $field_type
	 *
	 * @return bool
	 */
	public function is_type( $name, string $field_type ): bool {
		return $this->get_type( $name ) === $field_type;
	}

	/**
	 * @param string|array $name 'field_name'|'repeater_name.field_name'|['repeater_name', 0, 'field_name']
	 *
	 * @return string
	 */
	public function get_type( $name ): string {
		return $this->get_context()->get_field_type( $name );
	}

	/**
	 * @param string|array $name 'field_name'|'repeater_name.field_name'|['repeater_name', 'field_name']
	 *
	 * @return array
	 */
	public function get_attrs_by_name( $name ): array {
		return $this->get_context()->get_settings( $name );
	}

	/**
	 * @return array
	 */
	public function get_request(): array {
		return $this->get_context()->get_request();
	}

	/**
	 * @return File[]|File_Collection[]|array[]
	 */
	public function get_files(): array {
		return $this->get_context()->get_files();
	}

	/**
	 * @param string $name
	 *
	 * @return false|Media_Block_Value
	 */
	public function get_file( string $name ) {
		return $this->get_context()->get_file( $name );
	}

	/**
	 * @param $field_name
	 * @param $attr_name
	 * @param false $if_not_exist
	 *
	 * @return mixed
	 */
	public function get_attr(
		$field_name, $attr_name, $if_not_exist = false
	) {
		$attr = $this->get_context()->get_setting( $attr_name, $field_name );

		return false === $attr ? $if_not_exist : $attr;
	}


	/**
	 * @param $field_name
	 * @param string $attr_name
	 * @param bool $if_empty
	 *
	 * @return array
	 * @deprecated since 2.0.0
	 * Use jfb_request_handler()->get_attr instead
	 */
	public function get_field_attrs_by_name(
		$field_name, $attr_name = '', $if_empty = false
	) {
		return $this->get_attr( $field_name, $attr_name, $if_empty );
	}

	public function get_context(): Parser_Context {
		return $this->context;
	}

}
