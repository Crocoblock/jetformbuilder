<?php


namespace JFB_Modules\Form_Record\Admin\View_Columns;

use Jet_Form_Builder\Admin\Table_Views\Column_Advanced_Base;
use Jet_Form_Builder\Classes\Post\Post_Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Referrer_Link_Column extends Column_Advanced_Base {

	protected $column = 'from_content_id';
	protected $type   = self::LINK;

	public function get_label(): string {
		return __( 'Referrer', 'jet-form-builder' );
	}

	public function get_value( array $record = array() ) {
		$id = parent::get_value( $record );

		$params = array(
			'text'  => Post_Tools::get_title( $id ),
			'title' => __( 'Go to refer page', 'jet-form-builder' ),
			'type'  => 'external',
		);

		if ( ! empty( $record['referrer'] ) ) {
			$params['href'] = $record['referrer'];
		}

		return $params;
	}

}
