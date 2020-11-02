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
	
	private $field_namespace_render = 'Jet_Form_Builder\\Blocks\\Render\\';
	private $field_class 			= null;
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

	/**
	 * Render from HTML
	 * @return [type] [description]
	 */
	public function render_form( $echo = true ) {

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

		add_filter( 
			'render_block', 
			array( $this, 'render_form_blocks' ), 
			10, 3
		);

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
	public function set_field_data( $block ) {

		$this->current_field_data = $block;

		$this->set_field_name()
				->make_field_class_name()
				->set_field_args();
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

	public function get_field_object() {
		$name = $this->field_class;

		return new $name( $this->current_field_data['attrs'] );
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
	public function make_field_class_name() {
		$field_class = explode( '-', $this->field_name );

        foreach ($field_class as $key => $value) {
            $field_class[ $key ] = ucfirst( $value );
		}

		$this->field_class = $this->field_namespace_render . implode( '_', $field_class ) . '_Render';
		
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

	


	/**
		 * Render form field by passed arguments.
		 *
		 * @param  array  $args [description]
		 * @return [type]       [description]
		 */
		public function render_field( $args = array() ) {

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

		

		}

}
