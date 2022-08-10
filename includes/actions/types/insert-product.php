<?php


namespace Jet_Form_Builder\Actions\Types;


use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Meta_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Parent_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Terms_Property;
use Jet_Form_Builder\Actions\Methods\Wc_Product_Modification\Product_Catalog_Visibility_Property;
use Jet_Form_Builder\Actions\Methods\Wc_Product_Modification\Product_Description_Property;
use Jet_Form_Builder\Actions\Methods\Wc_Product_Modification\Product_Featured_Property;
use Jet_Form_Builder\Actions\Methods\Wc_Product_Modification\Product_Id_Property;
use Jet_Form_Builder\Actions\Methods\Wc_Product_Modification\Product_Name_Property;
use Jet_Form_Builder\Actions\Methods\Wc_Product_Modification\Product_Short_Description_Property;
use Jet_Form_Builder\Actions\Methods\Wc_Product_Modification\Product_Status_Property;
use Jet_Form_Builder\Actions\Methods\Wc_Product_Modification\Wc_Product_Modifier;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Collection;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;

/**
 * @since 2.1.4
 *
 * Class Insert_Product
 * @package Jet_Form_Builder\Actions\Types
 */
class Insert_Product extends Base {

	/** @var Wc_Product_Modifier */
	private $modifier;

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

		$this->modifier = new Wc_Product_Modifier();

		return true;
	}

	public function editor_labels() {
		return array(
			'post_status' => __( 'Post Status:', 'jet-form-builder' ),
			'fields_map'  => __( 'Fields Map:', 'jet-form-builder' ),
		);
	}

	public function editor_labels_help() {
		return array(
			'fields_map' => __( 'Set meta fields names or post properties to save appropriate form fields into', 'jet-form-builder' ),
		);
	}

	public function action_data() {
		return array(
			'taxonomies'    => Tools::get_taxonomies_for_modify(),
			'properties'    => Tools::with_placeholder(
				Array_Tools::to_array( $this->modifier->properties->all() )
			),
			'requestFields' => array(
				'inserted_product_id' => array(
					'name' => 'inserted_product_id',
					'help' => __( "A computed field from the <b>{$this->get_name()}</b> action.", 'jet-form-builder' ),
				),
			),
		);
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$fields_map  = $this->settings['fields_map'] ?? array();
		$post_status = $this->settings['post_status'] ?? '';

		$this->modifier
			->suppress_filters( false )
			->set_fields_map( $fields_map )
			->set_request( $request )
			->replace_field_by_prop( 'post_status', $post_status )
			->run();
	}
}