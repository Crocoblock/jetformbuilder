<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Actions\Events\Bad_Request\Bad_Request_Event;
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Blocks\Modules\Fields_Errors\Error_Handler;
use Jet_Form_Builder\Classes\Resources\Media_Block_Value;
use Jet_Form_Builder\Classes\Security\Wp_Nonce_Tools;
use Jet_Form_Builder\Classes\Resources\File;
use Jet_Form_Builder\Classes\Resources\File_Collection;
use Jet_Form_Builder\Classes\Resources\Sanitize_File_Exception;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Live_Form;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Request_Handler {

	// phpcs:ignore PSR2.Classes.PropertyDeclaration.Underscore
	public $_fields        = array();
	private $request_types = array();
	private $request_attrs = array();
	private $raw_request   = array();
	private $files         = array();

	/**
	 * Get submitted form data
	 *
	 * @throws Action_Exception|Request_Exception
	 */
	public function set_form_data() {
		$this->set_raw_request( $this->get_raw_request() );
		$this->set_raw_files( Request_Tools::get_files( $_FILES ) );

		$context = ( new Parser_Context() )
			->set_files_context( $this->files )
			->set_request_context( $this->raw_request );

		$request = apply_filters(
			'jet-form-builder/form-handler/form-data',
			Parser_Manager::instance()->get_values_fields( $this->_fields, $context ),
			$this
		);

		jet_fb_action_handler()->add_request( $request );

		jet_fb_events()->execute( Bad_Request_Event::class );

		/*throw new Request_Exception(
			'validation_failed',
			Error_Handler::instance()->errors(),
			$request
		);*/
	}

	private function get_raw_request(): array {
		$this->_fields = Block_Helper::get_blocks_by_post(
			jet_fb_handler()->get_form_id()
		);

		// phpcs:ignore WordPress.Security.NonceVerification.Missing
		$values = Tools::sanitize_recursive( wp_unslash( $_POST ) );

		Live_Form::instance()
				->set_form_id( jet_fb_handler()->get_form_id() )
				->set_specific_data_for_render();

		return apply_filters( 'jet-form-builder/request-handler/request', $values );
	}

	public function exclude( string $field_name ): Request_Handler {
		$attrs = $this->get_attrs_by_name( $field_name );

		/**
		 * @see \Jet_Form_Builder\Actions\Methods\Form_Record\Controller::generate_request
		 */
		$attrs['field_type'] = 'password';

		return $this->set_request_attrs(
			array(
				$field_name => $attrs,
			)
		);
	}

	public function set_request_type( array $types ): Request_Handler {
		$this->request_types = array_merge( $this->request_types, $types );

		return $this;
	}

	public function set_request_attrs( array $attrs ): Request_Handler {
		$this->request_attrs = array_merge( $this->request_attrs, $attrs );

		return $this;
	}

	public function get_types(): array {
		return $this->request_types;
	}

	public function get_attrs(): array {
		return $this->request_attrs;
	}

	/**
	 * @param string $name
	 * @param string $field_type
	 *
	 * @return bool
	 */
	public function is_type( string $name, string $field_type ): bool {
		return $this->get_type( $name ) === $field_type;
	}

	public function get_type( string $name ): string {
		return $this->request_types[ $name ] ?? '';
	}

	/**
	 * @param string $name
	 *
	 * @return array
	 */
	public function get_attrs_by_name( string $name ): array {
		return $this->request_attrs[ $name ] ?? array();
	}

	public function set_raw_request( array $request ): Request_Handler {
		$this->raw_request = $request;

		return $this;
	}

	public function set_raw_files( array $files ): Request_Handler {
		$this->files = $files;

		return $this;
	}

	/**
	 * @return array
	 */
	public function get_request(): array {
		return $this->raw_request;
	}

	/**
	 * @return File[]|File_Collection[]|array[]
	 */
	public function get_files(): array {
		return $this->files;
	}

	/**
	 * @param string $name
	 *
	 * @return false|Media_Block_Value
	 */
	public function get_file( string $name ) {
		return $this->files[ $name ] ?? false;
	}

	public function update_file( string $name, $file ): Request_Handler {
		$this->files[ $name ] = $file;

		return $this;
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
		$attrs = $this->get_attrs_by_name( $field_name );

		return $attrs[ $attr_name ] ?? $if_not_exist;
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
