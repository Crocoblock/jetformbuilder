<?php

namespace Jet_Form_Builder\Presets\Sources;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Classes\Http\Http_Tools;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Presets\Preset_Manager;
use JFB_Modules\Form_Record\Query_Views\Record_Fields_View;
use JFB_Modules\Form_Record\Query_Views\Record_View;
use JFB_Modules\Form_Record\Tools as Record_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Preset_Source_Form_Record extends Base_Source {

	protected static $records_cache = array();
	protected static $values_cache  = array();

	public function get_id() {
		return 'form_record';
	}

	/**
	 * Form Record fields are mapped to form fields by name automatically.
	 *
	 * @return array
	 */
	public function get_field_data() {
		return array(
			'prop' => $this->field,
		);
	}

	public function get_result_on_prop() {
		if ( 'password' === ( $this->field_args['field_type'] ?? '' ) ) {
			return '';
		}

		return parent::get_result_on_prop();
	}

	/**
	 * @return false|object
	 */
	public function query_source() {
		$record_id = $this->get_record_id();

		if ( ! $record_id ) {
			return false;
		}

		if ( ! array_key_exists( $record_id, self::$records_cache ) ) {
			try {
				self::$records_cache[ $record_id ] = Record_View::findById( $record_id );
			} catch ( Query_Builder_Exception $exception ) {
				self::$records_cache[ $record_id ] = false;
			}
		}
		$record = self::$records_cache[ $record_id ];

		if ( ! is_array( $record ) || ! $this->can_view_record( $record ) ) {
			return false;
		}

		if ( ! array_key_exists( $record_id, self::$values_cache ) ) {
			$fields = array_filter(
				Record_Fields_View::get_request( $record_id ),
				array( $this, 'is_safe_record_field' )
			);
			self::$values_cache[ $record_id ] = iterator_to_array(
				Record_Tools::iterate_request( $fields )
			);
		}

		return (object) self::$values_cache[ $record_id ];
	}

	protected function is_safe_record_field( array $field ): bool {
		$attrs = Tools::decode_json( $field['field_attrs'] ?? '' );

		return 'password' !== ( $attrs['field_type'] ?? '' );
	}

	protected function can_view_record( array $record ): bool {
		if (
			empty( $record['id'] ) ||
			absint( $record['form_id'] ?? 0 ) !== Preset_Manager::instance()->get_form_id()
		) {
			return false;
		}

		$capability = Tab_Handler_Manager::get_form_records_access_capability();

		if ( current_user_can( 'manage_options' ) || current_user_can( $capability ) ) {
			return true;
		}

		return is_user_logged_in() && absint( $record['user_id'] ?? 0 ) === get_current_user_id();
	}

	protected function get_record_id(): int {
		$query_var = sanitize_key( $this->preset_data['record_query_var'] ?? '' );

		if ( ! $query_var ) {
			return 0;
		}

		$query_args = Http_Tools::get_query();

		return isset( $query_args[ $query_var ] ) && is_scalar( $query_args[ $query_var ] )
			? absint( $query_args[ $query_var ] )
			: 0;
	}
}
