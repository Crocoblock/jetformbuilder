<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Modifier;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class Wc_Product_Modifier extends Post_Modifier {

	/**
	 * @throws Action_Exception
	 */
	public function __construct() {
		$this->set_post_type( 'product' );
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

	/**
	 * @return \WC_Product
	 */
	public static function get_product() {
		$action  = jet_fb_action_handler()->get_current_action();
		$product = $action->get_context( 'wc_product' );

		if ( is_a( $product, \WC_Product::class ) ) {
			return $product;
		}

		$product = new \WC_Product();

		$action->add_context(
			array(
				'wc_product' => $product
			)
		);

		return $product;
	}

	public function get_properties(): array {
		return [
			// post title
			/*[
				'value' => 'set_name',
				'label' => __( 'Product Name', 'jet-form-builder' ),
			],*/
			// post status
			/*[
				'value' => 'set_status',
				'label' => __( 'Product Status', 'jet-form-builder' ),
			],*/
			[
				'value' => 'set_featured',
				'label' => __( 'Product is Featured', 'jet-form-builder' ),
			],
			[
				'value' => 'set_catalog_visibility',
				'label' => __( 'Product Catalog Visibility', 'jet-form-builder' ),
			],
			// post_content
			[
				'value' => 'set_description',
				'label' => __( 'Product Description', 'jet-form-builder' ),
			],
			// post_excerpt
			[
				'value' => 'set_short_description',
				'label' => __( 'Product Short Description', 'jet-form-builder' ),
			],
			[
				'value' => 'set_sku',
				'label' => __( 'Product SKU', 'jet-form-builder' ),
			],
			[
				'value' => 'set_regular_price',
				'label' => __( 'Product Regular Price', 'jet-form-builder' ),
			],
			[
				'value' => 'set_sale_price',
				'label' => __( 'Product Sale Price', 'jet-form-builder' ),
			],
			[
				'value' => 'set_date_on_sale_from',
				'label' => __( 'Product Date on Sale from', 'jet-form-builder' ),
			],
			[
				'value' => 'set_date_on_sale_to',
				'label' => __( 'Product Date on Sale to', 'jet-form-builder' ),
			],
			[
				'value' => 'set_total_sales',
				'label' => __( 'Product Total Sales', 'jet-form-builder' ),
			],
			[
				'value' => 'set_tax_status',
				'label' => __( 'Product Tax Status', 'jet-form-builder' ),
			],
			[
				'value' => 'set_tax_class',
				'label' => __( 'Product Tax Class', 'jet-form-builder' ),
			],
			[
				'value' => 'set_manage_stock',
				'label' => __( 'Product Manage Stock', 'jet-form-builder' ),
			],
			[
				'value' => 'set_stock_quantity',
				'label' => __( 'Product Stock Quantity', 'jet-form-builder' ),
			],
			[
				'value' => 'set_stock_status',
				'label' => __( 'Product Stock Status', 'jet-form-builder' ),
			],
			[
				'value' => 'set_backorders',
				'label' => __( 'Product Backorders', 'jet-form-builder' ),
			],
			[
				'value' => 'set_low_stock_amount',
				'label' => __( 'Product Low Stock Amount', 'jet-form-builder' ),
			],
			[
				'value' => 'set_sold_individually',
				'label' => __( 'Product Sold Individually', 'jet-form-builder' ),
			],
			[
				'value' => 'set_weight',
				'label' => __( 'Product Weight', 'jet-form-builder' ),
			],
			[
				'value' => 'set_length',
				'label' => __( 'Product Length', 'jet-form-builder' ),
			],
			[
				'value' => 'set_width',
				'label' => __( 'Product Width', 'jet-form-builder' ),
			],
			[
				'value' => 'set_height',
				'label' => __( 'Product Height', 'jet-form-builder' ),
			],
			[
				'value' => 'set_upsell_ids',
				'label' => __( 'Product Upsell IDs', 'jet-form-builder' ),
			],
			[
				'value' => 'set_cross_sell_ids',
				'label' => __( 'Product Cross Sell IDs', 'jet-form-builder' ),
			],
			[
				'value' => 'set_parent_id',
				'label' => __( 'Product Parent ID', 'jet-form-builder' ),
			],
			[
				'value' => 'set_reviews_allowed',
				'label' => __( 'Product Review Allowed', 'jet-form-builder' ),
			],
			[
				'value' => 'set_category_ids',
				'label' => __( 'Product Category IDs', 'jet-form-builder' ),
			],
			[
				'value' => 'set_tag_ids',
				'label' => __( 'Product Tag IDs', 'jet-form-builder' ),
			],
			[
				'value' => 'set_gallery_image_ids',
				'label' => __( 'Product Gallery Image IDs', 'jet-form-builder' ),
			],
			[
				'value' => 'set_image_id',
				'label' => __( 'Product Image ID', 'jet-form-builder' ),
			],
		];
	}

}