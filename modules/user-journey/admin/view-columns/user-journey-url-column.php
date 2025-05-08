<?php


namespace JFB_Modules\User_Journey\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use JFB_Modules\User_Journey\Tools;
// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Journey_Url_Column extends Column_Advanced_Base {

	protected $column = 'journey_url';
	protected $type   = self::LINK;

	public function get_label(): string {
		return __( 'URL', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$journey_url = isset( $record['journey_url'] ) ? $record['journey_url'] : '';

		$wp_page_data = Tools::get_wp_page_data_by_url( $journey_url );

		if ( '/' === $journey_url ) {
			$journey_url = $journey_url . " (" .__( 'Home Page', 'jet-form-builder' ) . ")";
		}

		if ( $wp_page_data ) {

			return array(
				'text'   => $journey_url,
				'href'   => $wp_page_data['permalink'],
				'target' => '_blank',
				'type'   => 'external',
			);
		}

		return '';
	}
}
