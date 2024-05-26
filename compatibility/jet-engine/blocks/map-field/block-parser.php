<?php


namespace JFB_Compatibility\Jet_Engine\Blocks\Map_Field;

use Jet_Form_Builder\Exceptions\Parse_Exception;
use JFB_Modules\Block_Parsers\Field_Data_Parser;
use JFB_Modules\Block_Parsers\Fields\Default_Parser;
use JFB_Modules\Block_Parsers\Interfaces\Multiple_Parsers;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Block_Parser extends Field_Data_Parser implements Multiple_Parsers {

	/**
	 * @return mixed
	 */
	public function type() {
		return 'map-field';
	}

	public function generate_parsers(): \Generator {
		$lat_parser = new Default_Parser();
		$lat_parser->set_context( $this->get_context() );
		$lng_parser = clone $lat_parser;

		$lat_parser->set_type( 'map-field-lat' );
		$lng_parser->set_type( 'map-field-lng' );

		$lat_parser->set_name( $this->name . '_lat' );
		$lng_parser->set_name( $this->name . '_lng' );

		yield $lat_parser;
		yield $lng_parser;
	}

}
