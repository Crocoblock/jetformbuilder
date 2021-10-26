<?php


namespace Jet_Form_Builder\Classes;

class Listing_Filter_Manager {

	public function get_filter() {
		if ( $this->isset_engine_filter_module() ) {
			return jet_engine()->listings->filters;
		}

		return new Listing_Filter();
	}

	private function isset_engine_filter_module() {
		return ( function_exists( 'jet_engine' ) && jet_engine()->listings );
	}


}
