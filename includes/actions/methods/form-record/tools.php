<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record;


use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_Fields_View;
use Jet_Form_Builder\Classes\Tools as GlobalTools;

class Tools {

	public static function apply_record( array $record ): array {
		$request = Record_Fields_View::get_request( $record['id'] ?? 0 );

		self::parse_values( $request );

		$values = wp_list_pluck( $request, 'field_value', 'field_name' );

		jet_fb_action_handler()->add_request( $values );
		jet_fb_request_handler()->set_request_type(
			wp_list_pluck( $request, 'field_type', 'field_name' )
		);
		jet_fb_request_handler()->set_request_attrs(
			wp_list_pluck( $request, 'field_attrs', 'field_name' )
		);
		jet_fb_handler()->set_referrer( $record['referrer'] ?? '' );

		return $values;
	}

	public static function parse_values( array &$request ) {
		foreach ( $request as &$field ) {
			$field['field_attrs'] = GlobalTools::decode_json( $field['field_attrs'] );

			if ( empty( $field['field_attrs']['is_encoded'] ) ) {
				continue;
			}

			$field['field_value'] = GlobalTools::decode_json( $field['field_value'] );
		}
	}

}