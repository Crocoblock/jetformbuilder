<?php


namespace JFB_Modules\User_Journey\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Journey_Query_Column extends Column_Advanced_Base {

	public function get_label(): string {
		return __( 'URL Query', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$journey_query = $record['journey_query'] ?? '';

		if ( isset( $record['is_separator'] ) && $record['is_separator'] ) {
			return '';
		}

		return $journey_query;
	}
}