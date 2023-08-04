<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Actions\Events\Bad_Request\Bad_Request_Event;
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Classes\Resources\Media_Block_Value;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;
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

	/**
	 * Get submitted form data
	 *
	 * @throws Action_Exception|Spam_Exception|Request_Exception
	 */
	public function set_form_data() {
		$this->_fields = Block_Helper::get_blocks_by_post(
			jet_fb_handler()->get_form_id()
		);

		do_action( 'jet-form-builder/request' );
	}


	/**
	 * @deprecated 3.1.0
	 *
	 * @param string|array $name 'field_name'|'repeater_name.field_name'|['repeater_name', 'field_name']
	 */
	public function exclude( $name ) {
		jet_fb_context()->make_secure( $name );
	}

	/**
	 * @deprecated 3.1.0
	 *
	 * @return array
	 */
	public function get_types(): array {
		return iterator_to_array( jet_fb_context()->iterate_fields_types() );
	}

	/**
	 * @deprecated 3.1.0
	 *
	 * @return array
	 */
	public function get_attrs(): array {
		return iterator_to_array( jet_fb_context()->iterate_fields_settings() );
	}

	/**
	 * @deprecated 3.1.0
	 *
	 * @param string|array $name 'field_name'|'repeater_name.0.field_name'|['repeater_name', 0, 'field_name']
	 * @param string $field_type
	 *
	 * @return bool
	 */
	public function is_type( $name, string $field_type ): bool {
		return jet_fb_context()->get_field_type( $name ) === $field_type;
	}

	/**
	 * @deprecated 3.1.0
	 * @param $name
	 *
	 * @return string
	 */
	public function get_type( $name ): string {
		return jet_fb_context()->get_field_type( $name );
	}

	/**
	 * @deprecated 3.1.0
	 *
	 * @return array
	 */
	public function get_request(): array {
		return jet_fb_context()->get_request();
	}

	/**
	 * @deprecated 3.1.0
	 *
	 * @return array
	 */
	public function get_files(): array {
		return array_merge(
			jet_fb_context()->resolve_files(),
			jet_fb_context()->get_files()
		);
	}

	/**
	 * @deprecated 3.1.0
	 * @param string $name
	 *
	 * @return false|Media_Block_Value
	 */
	public function get_file( string $name ) {
		return jet_fb_context()->get_file( $name );
	}

	/**
	 * @deprecated 3.1.0
	 *
	 * @param $field_name
	 * @param $attr_name
	 * @param false $if_not_exist
	 *
	 * @return mixed
	 */
	public function get_attr(
		$field_name, $attr_name, $if_not_exist = false
	) {
		$attr = jet_fb_context()->get_setting( $attr_name, $field_name );

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

}
