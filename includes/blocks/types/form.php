<?php
namespace Jet_Form_Builder\Blocks\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Render\Form_Builder;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Form_Messages_Builder;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Form extends Base {

    public function __construct() {

        $this->unregister_attributes(
            array(
                'required',
                'label',
                'name',
                'desc',
                'default',
                'placeholder',
                'required',
                'add_prev',
                'prev_label',
                'visibility',
                'class_name',
            )
        );

        parent::__construct();
    }


    public function block_params() {
        return array(
            'attributes'		=> $this->block_attributes(),
            'render_callback' 	=> array( $this, 'render_callback_field' ),
        );
    }

    /**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Form';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'form-block';
	}

    public function get_storage_name() {
        return jet_form_builder()->blocks::OTHERS_STORAGE;
    }

	/**
	 * Returns icon class name
	 *
	 * @return [type] [description]
	 */
	public function get_icon() {
		return '<SVG width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><Path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V9.8l4.7-5.3H19c.3 0 .5.2.5.5v14zm-6-9.5L16 12l-2.5 2.8 1.1 1L18 12l-3.5-3.5-1 1zm-3 0l-1-1L6 12l3.5 3.8 1.1-1L8 12l2.5-2.5z"></Path></SVG>';
	}

    /**
     * Returns current block render instatnce
     *
     * @param array $attributes
     * @return false
     */
	public function get_block_renderer( $attributes = array() ) {
		return false;
	}

	/**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
		return array(
			'form_id' => array(
				'type' => 'number',
				'default' => 0,
			),
		);
	}

	public function block_data($editor, $handle)
    {
        wp_localize_script( $handle, 'JetFormData', array(
            'forms_list' => Tools::get_forms_list_for_js()
        ) );
    }

    /**
	 * Render callback for the block
	 *
	 * @param  array  $attributes [description]
	 * @return [type]             [description]
	 */
	public function render_callback_field( $attributes = array() ) {

		$form_id = $attributes['form_id'];

		if ( ! $form_id ) {
			return 'Please select form to show';
		}

		$builder = new Form_Builder( $form_id );
		$messages = jet_form_builder()->form_handler->get_message_builder( $form_id );

        ob_start();

        $builder->render_form();
        $messages->render_messages();

		return ob_get_clean();
	}

}
