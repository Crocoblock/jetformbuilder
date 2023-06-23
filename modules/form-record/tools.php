<?php


namespace JFB_Modules\Form_Record;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Exceptions\Silence_Exception;
use JFB_Modules\Form_Record\Query_Views\Record_Fields_View;
use Jet_Form_Builder\Classes\Tools as GlobalTools;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Tools {

	/**
	 * @param array $record
	 */
	public static function apply_context( array $record ) {
		$fields = Record_Fields_View::get_request( $record['id'] );

		if ( empty( $fields ) ) {
			return;
		}

		// set fields without request
		jet_fb_context()->set_parsers(
			Block_Helper::get_blocks_by_post( $record['form_id'] )
		);

		$request = array();

		foreach ( $fields as $field ) {
			$attrs  = GlobalTools::decode_json( $field['field_attrs'] );
			$parsed = iterator_to_array( self::iterate_request_line( $field ) );

			$value = current( $parsed );
			$name  = key( $parsed );

			$request[ $name ] = $value;

			try {
				jet_fb_context()->resolve_parser( $name );
			} catch ( Silence_Exception $exception ) {
				jet_fb_context()->set_field_type( $field['field_type'], $name );
				jet_fb_context()->set_field_settings( $attrs, $name );
			}
		}

		jet_fb_context()->set_request( $request );
		jet_fb_context()->apply_request();
	}

	/**
	 * @since 3.1.0
	 *
	 * @param array|\Generator $request
	 *
	 * @return \Generator
	 */
	public static function iterate_request( $request ): \Generator {
		foreach ( $request as $field ) {
			yield from self::iterate_request_line( $field );
		}
	}

	/**
	 * @since 3.1.0
	 *
	 * @param array $field
	 *
	 * @return \Generator
	 */
	public static function iterate_request_line( array $field ): \Generator {
		$attrs = GlobalTools::decode_json( $field['field_attrs'] );

		if ( empty( $attrs['is_encoded'] ) ) {
			yield $field['field_name'] => $field['field_value'];
			return;
		}

		yield $field['field_name'] => GlobalTools::decode_json( $field['field_value'] );
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
		$controller->set_setting( 'save_errors', jet_form_builder()->has_module( 'dev' ) );

		$controller->save_actions();
		$controller->save_errors();
	}

}
