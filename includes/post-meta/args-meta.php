<?php


namespace Jet_Form_Builder\Post_Meta;

use Jet_Form_Builder\Classes\Arguments\Form_Arguments;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Args_Meta extends Base_Meta_Type {

	public function get_id(): string {
		return '_jf_args';
	}

	public function get_type(): string {
		return 'string';
	}

	public function get_default(): string {
		return Tools::encode_json( Form_Arguments::arguments() );
	}

	public function query( $form_id ) {
		$args = parent::query( $form_id );

		if ( ! is_array( $args ) ) {
			return array();
		}

		return $args;
	}
}
