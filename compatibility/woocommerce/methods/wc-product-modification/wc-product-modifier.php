<?php


namespace JFB_Compatibility\Woocommerce\Methods\Wc_Product_Modification;

use Jet_Form_Builder\Actions\Methods\Object_Properties_Collection;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Abstract_Post_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Meta_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Terms_Property;
use Jet_Form_Builder\Actions\Types\Insert_Post;
use Jet_Form_Builder\Classes\Arrayable\Collection;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Wc_Product_Modifier extends Abstract_Post_Modifier {

	public function is_supported( Insert_Post $action ): bool {
		return 'product' === $action->get_post_type();
	}

	public function get_id(): string {
		return 'product';
	}

	public function before_run( Insert_Post $action ) {
		parent::before_run( $action );

		// for property post_title
		$this->source_arr['post_type'] = 'product';
	}

	protected function get_properties(): Object_Properties_Collection {
		return apply_filters(
			'jet-form-builder/wc-product-modifier/object-properties',
			new Object_Properties_Collection(
				array(
					new Product_Id_Property(),
					new Product_Name_Property(),
					new Product_Status_Property(),
					new Product_Description_Property(),
					new Product_Short_Description_Property(),
					new Product_Date_Property(),
					new Product_Image_Property(),
					new Product_Reviews_Allowed_Property(),
					new Product_Parent_Property(),
					new Post_Meta_Property(),
					new Post_Terms_Property(),
					new Product_Featured_Property(),
					new Product_Catalog_Visibility_Property(),
					new Product_Sku_Property(),
					new Product_Regular_Price_Property(),
					new Product_Sale_Price_Property(),
					new Product_Date_On_Sale_From_Property(),
					new Product_Date_On_Sale_To_Property(),
					new Product_Total_Sales_Property(),
					new Product_Tax_Status_Property(),
					new Product_Tax_Class_Property(),
					new Product_Manage_Stock_Property(),
					new Product_Stock_Quantity_Property(),
					new Product_Stock_Status_Property(),
					new Product_Backorders_Property(),
					new Product_Low_Stock_Amount_Property(),
					new Product_Sold_Individually_Property(),
					new Product_Weight_Property(),
					new Product_Length_Property(),
					new Product_Width_Property(),
					new Product_Height_Property(),
					new Product_Upsell_Ids_Property(),
					new Product_Cross_Sell_Ids_Property(),
					new Product_Gallery_Property(),
				)
			) 
		);
	}

	public function get_actions(): Collection {
		return apply_filters(
			'jet-form-builder/product-modifier/object-actions',
			new Collection(
				array(
					new Trash_Action(),
					new Save_Action(),
				)
			)
		);
	}


}
