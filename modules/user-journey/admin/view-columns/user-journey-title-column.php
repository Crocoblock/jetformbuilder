<?php


namespace JFB_Modules\User_Journey\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use JFB_Modules\User_Journey\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Journey_Title_Column extends Column_Advanced_Base {

	public function get_label(): string {
		return __( 'Title', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$journey_url = isset( $record['journey_url'] ) ? $record['journey_url'] : '';

		if ( isset( $record['is_separator'] ) && $record['is_separator'] ) {
			return '';
		}

		$wp_page_data = Tools::get_wp_page_data_by_url( $journey_url );

		if ( $wp_page_data ) {
			return $wp_page_data['title'];
		}

		return '';
	}
}
