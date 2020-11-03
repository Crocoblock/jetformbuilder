<?php

namespace Jet_Form_Builder;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Form builder class
 */
class Form_Builder {

	public $form_id 				= null;
	public $post    				= null;
	public $render_field_args 		= null;
	
	private $field_type 			= null;
	private $field_name             = null;
	private $current_field_data 	= null;

	/**
	 * Constructor for the class
	 */
	function __construct( $form_id = null, $post = false, $args = array() ) {

		if ( ! $form_id ) {
			return;
		}

		$this->form_id = $form_id;

		$this->args = wp_parse_args( $args, array(
			'fields_layout' => 'column',
			'rows_divider'  => false,
			'required_mark' => '*',
			'submit_type'   => 'reload',
		) );

		if ( empty( $post ) ) {
			global $post;
		}

		$this->post = $post;

		add_filter( 
			'render_block', 
			array( $this, 'render_form_blocks' ), 
			10, 3
		);

		//$this->captcha = $captcha;
		//$this->preset  = new Jet_Engine_Booking_Forms_Preset( $this->form_id );

	}

	/**
	 * Returns form action url
	 *
	 * @return [type] [description]
	 */
	public function get_form_action_url() {

		$action = add_query_arg(
			array(
				'jet_form_action' => 'submit',
			),
			home_url( '/' )
		);

		return apply_filters( 'jet-form-builder/form-action-url', $action, $this );

	}

	/**
	 * Returns form refer url
	 *
	 * @return [type] [description]
	 */
	public function get_form_refer_url() {

		global $wp;

		$refer = home_url( $wp->request );

		if ( ! empty( $_SERVER['QUERY_STRING'] ) ) {
			$refer = trailingslashit( $refer ) . '?' . $_SERVER['QUERY_STRING'];
		}

		return apply_filters( 'jet-form-builder/forms/booking/form-refer-url', $refer, $this );

	}

	public function pre_render() {
		return apply_filters( 'jet-engine/forms/pre-render/' . $this->form_id, false );
	}
	
	
	/*
	* Open form wrapper
	*
	* @return [type] [description]
	*/
	public function start_form() {

		do_action( 'jet-engine/forms/booking/before-start-form', $this );

//		$this->add_attribute( 'class', 'jet-form' );
//		$this->add_attribute( 'class', 'layout-' . $this->args['fields_layout'] );
//		$this->add_attribute( 'class', 'submit-type-' . $this->args['submit_type'] );
//		$this->add_attribute( 'action', $this->get_form_action_url() );
//		$this->add_attribute( 'method', 'POST' );
//		$this->add_attribute( 'data-form-id', $this->form_id );

		$this->rendered_rows = 0;

		include jet_engine()->get_template( 'forms/common/start-form.php' );

		do_action( 'jet-engine/forms/booking/after-start-form', $this );

	}
	


	/**
	 * Render from HTML
	 * @return [type] [description]
	 */
	public function render_form( $echo = true ) {

		if ( $this->pre_render() ) {
			return false;
		}

		$this->start_form();

		ob_start();

		$this->render_field( array(
			'type'    => 'hidden',
			'default' => $this->form_id,
			'name'    => '_jet_engine_booking_form_id',
		) );

		$this->render_field( array(
			'type'    => 'hidden',
			'default' => $this->get_form_refer_url(),
			'name'    => '_jet_engine_refer',
		) );

		//var_dump( parse_blocks( get_post( $this->form_id )->post_content ) ); die;
		 
		//var_dump( get_post( $this->form_id )->post_content ); die;
		echo render_block( parse_blocks( get_post( $this->form_id )->post_content ) );

		//$form = get_the_content( '', '',  $this->form_id );
 

		$form = ob_get_clean();

		if ( $echo ) {
			echo $form;
		} else {
			return $form;
		}

	}
	

	/**
	 * 
	 */
	public function render_form_blocks( $block_content, $blocks ) {
		$fields = array();

		foreach ( $blocks as $block ) {
			$fields[] = $this->render_form_field( $block_content, $block );
		}

		return implode( "\n", $fields );
	}

	/**
	 * 
	 */
	public function render_form_field( $block_content, $block ) {

		if ( stripos( $block['blockName'], jet_form_builder()->form::NAMESPACE_FIELDS ) === false ) {
			return $block_content;
		}
		$this->set_field_data( $block );

		return $this->get_field_object()->render();
	}
	
	/**
	 * 
	 */
	public function set_field_data( $block ) {

		$this->current_field_data = $block; 

		$this->set_field_name()->set_field_args();
	}

	public function get_field_object() {
		return jet_form_builder()->blocks
				->get_field_by_name( $this->field_name )
				->get_block_renderer( $this->form_id, $this->current_field_data['attrs'] );
	}

	/**
	 * 
	 */
	public function set_field_name() {
		$block = explode( jet_form_builder()->form::NAMESPACE_FIELDS, $this->current_field_data['blockName'] );

		$this->field_name = $block[1];

        return $this;
	}

	/**
	 * 
	 */
	public function set_field_type() {
		$this->field_type = jet_form_builder()->blocks->get_field_by_name( $this->field_name )->get_block_field_type();
		
		return $this;
	}
	

	/**
	 * 
	 */
	public function set_field_args() {
		$this->current_field_data['attrs'] = jet_form_builder()->blocks
				->get_field_attrs( 
					$this->field_name, 
					$this->current_field_data['attrs'] 
				);
	}


	/*
	* Render form field by passed arguments.
	*
	* @param  array  $args [description]
	* @return [type]       [description]
	*/
	public function render_field( $args = array() ) {

		return;

		if ( empty( $args['type'] ) ) {
			return;
		}

		$defaults = array(
			'default'     => '',
			'name'        => '',
			'placeholder' => '',
			'required'    => false,
		);

		$template = null;

		// Prepare defaults
		switch ( $args['type'] ) {

			case 'hidden':

				if ( empty( $args['default'] ) ) {
					$defaults['default'] = $this->get_hidden_val( $args );
				}

				if ( isset( $args['default'] ) && empty( $args['default'] ) ) {
					unset( $args['default'] );
				}

				break;

			case 'number':
			case 'range':

				$defaults['min'] = '';
				$defaults['max'] = '';
				$defaults['step'] = 1;

				break;

			case 'text':

				$defaults['field_type'] = 'text';

				break;

			case 'calculated':

				$defaults['formula']  = '';
				$args['required']     = false;

				break;

			case 'submit':

				$defaults['label']      = __( 'Submit', 'jet-engine' );
				$defaults['class_name'] = '';

				$this->is_submit_row = true;

				break;

			case 'page_break':

				$defaults['label']      = __( 'Submit', 'jet-engine' );
				$defaults['class_name'] = '';

				$this->is_page_break_row = true;

				break;

			case 'media':
				File_Upload::instance()->set_custom_messages( $this->form_id );
				File_Upload::instance()->enqueue_upload_script();

				add_filter(
					'jet-engine/compatibility/popup-package/the_content',
					array( File_Upload::instance(), 'ensure_media_js' ), 10, 2
				);

				break;

			case 'textarea':
			case 'select':
			case 'checkboxes':
			case 'radio':
			case 'date':
			case 'time':
			case 'wysiwyg':
			case 'heading':
			case 'group_break':

				// Ensure template not rewritten
				$template = false;

				if ( 'wysiwyg' === $args['type'] ) {

					wp_localize_script( 
						'jet-engine-frontend-forms', 
						'JetEngineFormsEditor',
						array(
							'hasEditor' => true,
						)
					);

					add_filter(
						'jet-engine/compatibility/popup-package/the_content',
						array( $this, 'ensure_wysiwyg_js' ), 10, 2
					);
				}

				break;

			default:

				if ( 'hidden' !== $args['type'] ) {
					$this->is_hidden_row = false;
				}

				/**
				 * Render custom field
				 */
				do_action( 'jet-engine/forms/booking/render-field/' . $args['type'], $args, $this );

				/**
				 * Or just get custom template for field
				 */
				$template = apply_filters(
					'jet-engine/forms/booking/field-template/' . $args['type'],
					$template,
					$args,
					$this
				);

				if ( ! $template ) {
					return;
				} else {
					break;
				}

		}

		$sanitized_args = array();

		foreach ( $args as $key => $value ) {
			$sanitized_args[ $key ] = $value;
		}

		$args = wp_parse_args( $sanitized_args, $defaults );

		if ( ! $template ) {
			$template_name = str_replace( '_', '-', $args['type'] );
			$template      = jet_engine()->get_template( 'forms/fields/' . $template_name . '.php' );
		}

		// Ensure args
		switch ( $args['type'] ) {

			case 'select':
			case 'checkboxes':
			case 'radio':

				$args['field_options'] = $this->get_field_options( $args );

				break;
		}

		$label        = $this->get_field_label( $args );
		$desc         = $this->get_field_desc( $args );
		$layout       = $this->args['fields_layout'];
		$preset_value = $this->preset->get_field_value( $args['name'], $args );

		if ( $preset_value['rewrite'] ) {
			$args['default'] = $preset_value['value'];
		} else {
			$args['default'] = $this->maybe_adjust_value( $args );
		}

		if ( 'column' === $layout ) {
			include jet_engine()->get_template( 'forms/common/field-column.php' );
		} else {
			include jet_engine()->get_template( 'forms/common/field-row.php' );
		}

		if ( 'hidden' !== $args['type'] ) {
			$this->is_hidden_row = false;
		}

	}


}


