<?php

namespace Jet_Form_Builder\Blocks\Render;


use Jet_Form_Builder\Classes\Arguments_Trait;
use Jet_Form_Builder\Classes\Attributes_Trait;
use Jet_Form_Builder\Classes\Get_Template_Trait;
use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Form builder class
 */
class Form_Builder {

    use Attributes_Trait;
    use Arguments_Trait;
    use Get_Template_Trait;


    public $form_id 				= null;
    public $post    				= null;

    private $field_type 			= null;

    private $field_name             = null;

    private $current_field_data 	= null;

    private $blocks                 = null;

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

        $this->blocks = Plugin::instance()->form->get_fields( $form_id );

		$this->post = $post;
	}

	/**
	 * Returns form action url
	 *
	 * @return [type] [description]
	 */
	public function get_form_action_url() {

		$action = add_query_arg(
			array(
				jet_form_builder()->form_handler->hook_key => jet_form_builder()->form_handler->hook_val,
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

		return apply_filters( 'jet-form-builder/form-refer-url', $refer, $this );

	}

    /**
     * @return mixed|void
     */
    public function pre_render() {
		return apply_filters( 'jet-form-builder/pre-render/' . $this->form_id, false );
	}


    /**
     * Open form wrapper
     *
     * @return string [type] [description]
     */
    public function start_form() {

        $start_form = apply_filters( 'jet-form-builder/before-start-form', '', $this );

		$this->add_attribute( 'class', 'jet-form' );
		$this->add_attribute( 'class', 'layout-' . $this->args['fields_layout'] );
		$this->add_attribute( 'class', 'submit-type-' . $this->args['submit_type'] );
		$this->add_attribute( 'action', $this->get_form_action_url() );
		$this->add_attribute( 'method', 'POST' );
		$this->add_attribute( 'data-form-id', $this->form_id );

		$this->rendered_rows = 0;

		ob_start();
		include $this->get_template( 'common/start-form.php' );
		$start_form .= ob_get_clean();

        $start_form .= apply_filters( 'jet-form-builder/after-start-form', '', $this );

        return $start_form;
	}

    /**
     * Close form wrapper
     *
     * @return string [type] [description]
     */
    public function end_form() {

        $end_form = apply_filters( 'jet-form-builder/before-end-form', '', $this );
        $form_id = $this->form_id;

        ob_start();
        include $this->get_template( 'common/end-form.php' );
        $end_form .= ob_get_clean();

        $end_form .= apply_filters( 'jet-form-builder/after-end-form', '', $this );
        return $end_form;
    }


    /**
     * Render from HTML
     * @param bool $echo
     * @return false|string [type] [description]
     */
	public function render_form( $echo = true ) {

		if ( $this->pre_render() ) {
			return false;
		}

        $form = $this->start_form();

        $form .= $this->force_render_field( 'hidden-field', array(
            'field_value'   => $this->form_id,
            'name'          => '_jet_engine_booking_form_id',
        ) );

        $form .= $this->force_render_field( 'hidden-field', array(
            'field_value'   => $this->get_form_refer_url(),
            'name'          => '_jet_engine_refer',
        ) );

        $form .= $this->render_form_blocks();

        $form .= $this->end_form();

		if ( $echo ) {
			echo $form;
		} else {
			return $form;
		}

	}
	

	/**
	 * 
	 */
	public function render_form_blocks() {
		$fields = array();

		foreach ( $this->blocks as $block ) {
            $this->set_field_data( $block );

            $fields[] = $this->get_field_object()->render();
		}

		return implode( "\n", $fields );
	}

    /**
     * @param $block
     */
	public function set_field_data( $block ) {

		$this->current_field_data = $block; 

		$this->set_field_name()->set_field_args();
	}

    /**
     * @return mixed
     */
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

	public function force_render_field( $name, $arguments = array() ) {

	    if( empty( $name ) ) {
	        return;
        }
        $field = jet_form_builder()->blocks->get_field_by_name( $name );

        if( ! $field ) {
            return;
        }

	    return $field->get_block_renderer( $this->form_id, $arguments )->render();
    }


}


