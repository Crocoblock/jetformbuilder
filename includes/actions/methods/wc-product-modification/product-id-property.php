<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Id_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Modifier;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Product_Id_Property extends Post_Id_Property {

	public function get_supported_post_types(): array {
		return array( 'product' );
	}

	/**
	 * @param Abstract_Modifier $modifier
	 *
	 * @throws Action_Exception
	 * @throws Silence_Exception
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		parent::do_before( $modifier );

		$action = jet_fb_action_handler()->get_current_action();

		$action->add_context(
			array(
				'wc_product' => new \WC_Product( $modifier->get_value() )
			)
		);
	}

}