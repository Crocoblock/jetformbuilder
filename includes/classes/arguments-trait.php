<?php


namespace Jet_Form_Builder\Classes;


trait Arguments_Trait
{

    public $args = array();

    /**
     * Get required attribute value
     *
     * @param  [type] $args [description]
     * @return [type]       [description]
     */
    public function get_required_val() {

        if (
            ! empty( $this->args['required'] )
            && ( 'required' === $this->args['required'] || true === $this->args['required'] )
        ) {
            return 'required';
        }

        return '';

    }

}