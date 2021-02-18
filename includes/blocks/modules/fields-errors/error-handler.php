<?php


namespace Jet_Form_Builder\Blocks\Modules\Fields_Errors;



class Error_Handler {

	private static $instance = null;

	private $_types = array();
	private $_errors = array();

	private function register_field_types() {

		$types = array(
			new Text_Field_Error(),
			new Textarea_Field_Error(),
			new Number_Field_Error(),
			new Checkboxes_Field_Error(),
			new Media_Field_Error(),
			new Wysiwyg_Field_Error(),
			new Repeater_Field_Error()
		);

		foreach ( $types as $type ) {
			$this->register_field_type( $type );
		}

		do_action( 'jet-form-builder/fields-errors/register', $this );

	}

	private function maybe_set_errors() {
		if ( empty( $_REQUEST ) || ! isset( $_REQUEST['fields'] ) ) {
			return;
		}
		$request = stripslashes( $_REQUEST['fields'] );

		if ( is_array( json_decode( $request, true ) ) && json_last_error() == JSON_ERROR_NONE ) {

			$this->_errors = json_decode( $request, true );
		}
	}

	public function register_field_type( $field ) {
		if ( $field instanceof Base_Field_Error ) {
			$this->_types[ $field->get_name() ] = $field;
		}
	}


	/**
	 * Instance.
	 *
	 * Ensures only one instance of the plugin class is loaded or can be loaded.
	 *
	 * @return Error_Handler An instance of the class.
	 * @since 1.0.0
	 * @access public
	 * @static
	 *
	 */
	public static function instance() {

		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	private function __construct() {
		$this->register_field_types();
		$this->maybe_set_errors();
	}


	public function add( $type, $args ) {
		if ( ! isset( $this->_types[ $type ] ) ) {
			return false;
		}
		$field = $this->_types[ $type ];

		$arguments = array_merge( array(
			'name'      => 'field_name',
			'message'   => false,
			'params' => array()
		), $args );

		$field->set_params( $arguments );

		$message = $arguments['message'] ? $arguments['message'] : $field->error();

		$this->_errors[ $arguments['name'] ] = array(
			'message' => $message
		);

		return true;
	}

	public function empty_errors() {
		return empty( $this->_errors );
	}

	public function has_error_by_name( $name ) {
		return isset( $this->_errors[ $name ] );
	}

	public function error_by_name( $name ) {
		if ( isset( $this->_errors[ $name ]['message'] ) ) {
			return $this->_errors[ $name ]['message'];
		}
	}

	public function errors() {
		return $this->_errors;
	}

}