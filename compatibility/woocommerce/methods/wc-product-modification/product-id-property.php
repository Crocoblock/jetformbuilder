<?php


namespace JFB_Compatibility\Woocommerce\Methods\Wc_Product_Modification;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use JFB_Modules\Actions_V2\Insert_Post\Properties\Post_Id_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Product_Id_Property extends Post_Id_Property {

	/**
	 * @param string $key
	 * @param $value
	 * @param Abstract_Modifier $modifier
	 *
	 * @throws Action_Exception
	 */
	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		try {
			$this->value = wc_get_product( $value );
		} catch ( \Exception $exception ) {
			throw new Action_Exception( esc_html( $exception->getMessage() ) );
		}
	}

	public function get_product(): \WC_Product {
		if ( ! is_null( $this->value ) ) {
			return $this->value;
		}
		$this->value = new \WC_Product_Simple();

		return $this->value;
	}


}
