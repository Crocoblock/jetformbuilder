<?php


namespace Jet_Form_Builder\Migrations\Types\Jet_Engine;


use Jet_Form_Builder\Migrations\Base_Settings_Migrate;

class Preset_Migrate extends Base_Settings_Migrate {

	protected function parse_value( $value ) {
		if ( $value['from'] && 'query_vars' === $value['from'] ) {
			$value['from'] = 'query_var';
		}

		foreach ( $value['fields_map'] as $name => $field ) {
			if ( 'login' === $field['prop'] ) {
				$value['fields_map'][ $name ]['prop'] = 'user_login';
			}
			if ( 'email' === $field['prop'] ) {
				$value['fields_map'][ $name ]['prop'] = 'user_email';
			}
		}

		return json_encode( $value );
	}
}