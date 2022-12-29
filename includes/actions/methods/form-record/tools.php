<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record;


use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Record_Fields_View;
use Jet_Form_Builder\Classes\Tools as GlobalTools;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Dev_Mode\Manager;

class Tools {

	public static function apply_record( array $record ): array {
		$request = Record_Fields_View::get_request( $record['id'] ?? 0 );

		self::parse_values( $request );

		$values = wp_list_pluck( $request, 'field_value', 'field_name' );

		// apply actions
		jet_fb_action_handler()->set_form_id( $record['form_id'] ?? 0 );

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

	/**
	 * @param int $record_id
	 *
	 * @throws Sql_Exception
	 */
	public static function update_record( int $record_id ) {
		if ( ! $record_id ) {
			return;
		}
		$controller = ( new Controller() )->set_record_id( $record_id );
		$controller->set_setting( 'save_errors', Manager::instance()->active() );

		$controller->save_actions();
		$controller->save_errors();
	}

}