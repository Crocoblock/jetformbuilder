<?php


namespace Jet_Form_Builder\Classes;


class Listing_Filter_Manager
{

    public $manager;

    public function __construct() {
        if ( $this->isset_engine_filter_module() ) {
            $this->manager = jet_engine()->listings->filters;
        } else {
            $this->manager = new Listing_Filter();
        }
    }

    private function isset_engine_filter_module() {
        return ( function_exists( 'jet_engine' ) && jet_engine()->listings );
    }



}