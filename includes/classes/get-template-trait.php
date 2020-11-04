<?php


namespace Jet_Form_Builder\Classes;


trait Get_Template_Trait
{
    /**
     * Returns template path
     *
     * @param  [type] $path [description]
     * @return [type]       [description]
     */
    public function get_template( $path ) {
        return JET_FORM_BUILDER_PATH . 'templates/' . $path;
    }

}