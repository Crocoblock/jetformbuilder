<?php


namespace Jet_Form_Builder\Compatibility;


class Jet_Style_Manager extends Base_Compatibility
{
    public static function check() {
        return (
            class_exists( 'JET_SM\Gutenberg\Controls_Manager' )
            && class_exists( 'JET_SM\Gutenberg\Block_Manager' )
        );
    }

}

