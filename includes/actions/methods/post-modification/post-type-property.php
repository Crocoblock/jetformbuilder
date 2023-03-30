<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;

use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Classes\Arrayable\Array_Continue_Exception;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Type_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'post_type';
	}

	/**
	 * @param string $key
	 * @param $value
	 *
	 * @return bool
	 * @throws Action_Exception
	 */
	public function can_attach( string $key, $value ): bool {
		if ( ! $value || ! post_type_exists( $value ) ) {
			throw new Action_Exception( 'failed', 'Empty post_type' );
		}
		return parent::can_attach( $key, $value );
	}

	/**
	 * @return string
	 * @throws Array_Continue_Exception
	 */
	public function get_label(): string {
		throw new Array_Continue_Exception();
	}
}
