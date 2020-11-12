<?php
namespace Jet_Form_Builder;

use Jet_Form_Builder\Blocks\Render\Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Main file
 */
class Fields_Factory {

	private $form_id = false;
	private $form    = false;

    private $field_name             = null;
    private $current_field_data 	= null;

    private $repeater;
    private $repeater_count;

	/**
	 * Create form instance
	 *
	 * @param [type] $form_id [description]
	 */
	public function __construct( $form_id ) {
	    $this->form_id = $form_id;
	}

	public function set_repeater( $item, $count = false ) {
	    $this->repeater = $item;
	    $this->repeater_count = $count;

	    return $this;
    }

    /**
     * @param $source
     * @return string
     */
    public function render_form_blocks( $source ) {
        $fields = array();

        foreach ( $source as $block ) {
            $this->set_field_data( $block );
            $field = $this->get_field_object();

            if ( $this->repeater ) {
                $field->current_repeater = $this->repeater;
                $field->current_repeater_i = $this->repeater_count;
            }

            $fields[] = $field->render();
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
     * @return Base [render]
     */
    public function get_field_object() {
        $block = jet_form_builder()->blocks->get_field_by_name( $this->field_name );

        $this->current_field_data['attrs'] = array_merge(
            $block->get_default_attributes(),
            $this->current_field_data['attrs']
        );

        return $block->get_block_renderer( $this->form_id,  $this->current_field_data );
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
    public function set_field_args() {
        $this->current_field_data['attrs'] = jet_form_builder()->blocks
            ->get_field_attrs(
                $this->field_name,
                $this->current_field_data['attrs']
            );
    }

    public static function force_render_field( $name, $form_id = 0, $arguments = array() ) {

        if( empty( $name ) ) {
            return;
        }
        $field = jet_form_builder()->blocks->get_field_by_name( $name );

        if( ! $field ) {
            return;
        }
        $attrs = array(
            'attrs' => $arguments
        );

        return $field->get_block_renderer( $form_id, $attrs )->render();
    }

}
