<?php


namespace Jet_Form_Builder\Actions\Types;


use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Methods\Wc_Product_Modification\Product_Catalog_Visibility_Property;
use Jet_Form_Builder\Actions\Methods\Wc_Product_Modification\Product_Description_Property;
use Jet_Form_Builder\Actions\Methods\Wc_Product_Modification\Product_Featured_Property;
use Jet_Form_Builder\Actions\Methods\Wc_Product_Modification\Product_Id_Property;
use Jet_Form_Builder\Actions\Methods\Wc_Product_Modification\Product_Name_Property;
use Jet_Form_Builder\Actions\Methods\Wc_Product_Modification\Product_Status_Property;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Collection;
use Jet_Form_Builder\Classes\Tools;

class Insert_Product extends Base {

	/** @var Collection */
	private $list;

	public function get_id() {
		return 'insert_product';
	}

	public function get_name() {
		return __( 'Insert Product', 'jet-form-builder' );
	}

	public function dependence() {
		if ( ! function_exists( 'WC' ) ) {
			return false;
		}

		$this->list = new Collection(
			array(
				new Product_Id_Property(),
				new Product_Name_Property(),
				new Product_Status_Property(),
				new Product_Description_Property(),
				new Product_Catalog_Visibility_Property(),
				new Product_Featured_Property(),
			)
		);

		return true;
	}

	public function action_data() {
		return array(
			'properties'    => Array_Tools::to_array( $this->list->all() ),
			'requestFields' => array(
				'inserted_post_id' => array(
					'name' => 'inserted_post_id',
					'help' => __( "A computed field from the <b>{$this->get_name()}</b> action.", 'jet-form-builder' ),
				),
			),
		);
	}

	public function do_action( array $request, Action_Handler $handler ) {

	}
}