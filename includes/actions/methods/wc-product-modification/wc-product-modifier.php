<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Meta_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Terms_Property;
use Jet_Form_Builder\Classes\Arrayable\Collection;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Wc_Product_Modifier extends Post_Modifier {

	public $product;

	protected function get_properties(): Collection {
		return new Collection(
			array(
				new Product_Id_Property(),
				new Product_Status_Property(),
				new Product_Name_Property(),
				new Product_Description_Property(),
				new Product_Short_Description_Property(),
				new Product_Date_Property(),
				new Product_Image_Property(),
				new Product_Reviews_Allowed_Property(),
				new Product_Parent_Property(),
				new Post_Meta_Property(),
				new Post_Terms_Property(),
				new Product_Catalog_Visibility_Property(),
				new Product_Featured_Property(),
				new Product_Regular_Price_Property(),
				new Product_Sale_Price_Property(),
				new Product_Total_Sales_Property(),
				new Product_Upsell_Ids_Property(),
				new Product_Cross_Sell_Ids_Property(),
				new Product_Manage_Stock_Property(),
				new Product_Stock_Quantity_Property(),
				new Product_Stock_Status_Property(),
				new Product_Tax_Status_Property(),
				new Product_Tax_Class_Property(),
			)
		);
	}

	public function get_actions() {
		return apply_filters(
			'jet-form-builder/product-modifier/object-actions',
			array(
				'update' => array(
					'action' => array( $this, 'save_product' ),
					'after'  => array( $this, 'after_do_action' ),
				),
				'insert' => array(
					'action' => array( $this, 'save_product' ),
					'after'  => array( $this, 'after_do_action' ),
				),
				'trash'  => array(
					'action' => array( $this, 'trash_post' ),
				),
			),
			$this
		);
	}

	/**
	 * @throws Action_Exception
	 */
	public function save_product() {
		try {
			$this->pre_check();
		} catch ( Silence_Exception $exception ) {
			return;
		}

		$this->inserted_post_id = static::get_product()->save();
		$this->is_valid_post_id();
	}

	public function get_product(): \WC_Product {
		if ( is_a( $this->product, \WC_Product::class ) ) {
			return $this->product;
		}

		$this->product = new \WC_Product();

		return $this->product;
	}

	public function create_product( $product ): \WC_Product {
		$this->product = new \WC_Product( $product );

		return $this->product;
	}

}