<?php
namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Render\Calculated_Field_Render;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Calculated_Field extends Base {

	public function __construct() {
		$this->unregister_attribute( 'required' );

        parent::__construct();
	}

	/**
	 * Returns block title
	 *
	 * @return [type] [description]
	 */
	public function get_title() {
		return 'Calculated Field';
	}

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'calculated-field';
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
     * @param null $wp_block
     * @return string
     */
	public function get_block_renderer( $wp_block = null ) {
		return ( new Calculated_Field_Render( $this ) )->render();
	}

    public function block_data($editor, $handle)
    {
        wp_localize_script( $handle, 'jetFormCalculatedFieldData', array(
            'help_messages' => array(
                'calc_hidden' => __(
                    'Check this to hide calculated field',
                    'jet-form-builder'
                ),
            ),
        ) );
    }

    /**
	 * Return attributes array
	 *
	 * @return array
	 */
	public function get_attributes() {
        return array(
            'calc_formula' => array(
                'type' => 'string',
                'default' => ''
            ),
            'precision' => array(
                'type' => 'number',
                'default' => 2
            ),
            'calc_prefix' => array(
                'type' => 'string',
                'default' => ''
            ),
            'calc_suffix' => array(
                'type' => 'string',
                'default' => ''
            ),
            'calc_hidden' => array(
                'type' => 'boolean',
                'default' => false
            ),
        );
	}

}
