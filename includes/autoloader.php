<?php

namespace Jet_Form_Builder;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Autoloader handler class is responsible for loading the different
 * classes needed to run the plugin.
 */
class Autoloader {

	const NAMESPACES = array(
		__NAMESPACE__ . '\\'  => 'includes/',
		'JFB_Modules\\'       => 'modules/',
		'JFB_Components\\'    => 'components/',
		'JFB_Compatibility\\' => 'compatibility/',
	);

	/**
	 * @since 3.1.0
	 */
	const DEPRECATED_CLASSMAP = array(
		'Jet_Form_Builder\\Classes\\Security\\Csrf_Token_Model' => 'JFB_Modules\\Security\\Csrf\\Csrf_Token_Model',
		'Jet_Form_Builder\\Classes\\Security\\Csrf_Token_View' => 'JFB_Modules\\Security\\Csrf\\Csrf_Token_View',
		'Jet_Form_Builder\\Classes\\Security\\Csrf_Tools'  => 'JFB_Modules\\Security\\Csrf\\Csrf_Tools',
		'Jet_Form_Builder\\Integrations\\Forms_Captcha'    => 'JFB_Modules\\Captcha\\Module',
		'Jet_Form_Builder\\Rest_Api\\Dynamic_Rest_Url_Trait' => 'JFB_Components\\Rest_Api\\Dynamic_Rest_Url_Trait',
		'Jet_Form_Builder\\Rest_Api\\Rest_Api_Controller_Base' => 'JFB_Components\\Rest_Api\\Rest_Api_Controller_Base',
		'Jet_Form_Builder\\Rest_Api\\Rest_Api_Endpoint_Base' => 'JFB_Components\\Rest_Api\\Rest_Api_Endpoint_Base',
		'Jet_Form_Builder\\Rest_Api\\Rest_Endpoint'        => 'JFB_Components\\Rest_Api\\Rest_Endpoint',
		'Jet_Form_Builder\\Rest_Api\\Rest_Response'        => 'JFB_Components\\Rest_Api\\Rest_Response',
		'Jet_Form_Builder\\Rest_Api\\Traits\\Paginated_Args' => 'JFB_Components\\Rest_Api\\Traits\\Paginated_Args',
		'Jet_Form_Builder\\Rest_Api\\Traits\\Rest_Fetch_Endpoint' => 'JFB_Components\\Rest_Api\\Traits\\Rest_Fetch_Endpoint',
		'Jet_Form_Builder\\Blocks\\Manager'                => 'Jet_Form_Builder\\Blocks\\Module',
		// gateways
		'Jet_Form_Builder\\Gateways\\Base_Gateway_Action'  => 'JFB_Modules\\Gateways\\Base_Gateway_Action',
		'Jet_Form_Builder\\Gateways\\Base_Gateway'         => 'JFB_Modules\\Gateways\\Base_Gateway',
		'Jet_Form_Builder\\Gateways\\Base_Scenario_Gateway' => 'JFB_Modules\\Gateways\\Base_Scenario_Gateway',
		'Jet_Form_Builder\\Gateways\\Scenarios_Abstract\\Scenario_Logic_Base' => 'JFB_Modules\\Gateways\\Scenarios_Abstract\\Scenario_Logic_Base',
		'Jet_Form_Builder\\Gateways\\Scenarios_Abstract\\Scenario_Logic_Repository' => 'JFB_Modules\\Gateways\\Scenarios_Abstract\\Scenario_Logic_Repository',
		'Jet_Form_Builder\\Gateways\\Scenarios_Abstract\\Scenario_View_Base' => 'JFB_Modules\\Gateways\\Scenarios_Abstract\\Scenario_View_Base',
		'Jet_Form_Builder\\Gateways\\Scenarios_Abstract\\Scenarios_Manager_Abstract' => 'JFB_Modules\\Gateways\\Scenarios_Abstract\\Scenarios_Manager_Abstract',
		'Jet_Form_Builder\\Gateways\\Scenarios_Abstract\\Scenarios_View_Repository' => 'JFB_Modules\\Gateways\\Scenarios_Abstract\\Scenarios_View_Repository',
		'Jet_Form_Builder\\Gateways\\Db_Models\\Payer_Model' => 'JFB_Modules\\Gateways\\Db_Models\\Payer_Model',
		'Jet_Form_Builder\\Gateways\\Db_Models\\Payer_Shipping_Model' => 'JFB_Modules\\Gateways\\Db_Models\\Payer_Shipping_Model',
		'Jet_Form_Builder\\Gateways\\Db_Models\\Payment_Meta_Model' => 'JFB_Modules\\Gateways\\Db_Models\\Payment_Meta_Model',
		'Jet_Form_Builder\\Gateways\\Db_Models\\Payment_Model' => 'JFB_Modules\\Gateways\\Db_Models\\Payment_Model',
		'Jet_Form_Builder\\Gateways\\Db_Models\\Payment_To_Payer_Shipping_Model' => 'JFB_Modules\\Gateways\\Db_Models\\Payment_To_Payer_Shipping_Model',
		'Jet_Form_Builder\\Gateways\\Db_Models\\Payment_To_Record' => 'JFB_Modules\\Gateways\\Db_Models\\Payment_To_Record',
		'Jet_Form_Builder\\Gateways\\Db_Models\\Constraints\\Payer_Shipping_Model_Constraint' => 'JFB_Modules\\Gateways\\Db_Models\\Constraints\\Payer_Shipping_Model_Constraint',
		'Jet_Form_Builder\\Gateways\\Db_Models\\Constraints\\Payment_Model_Constraint' => 'JFB_Modules\\Gateways\\Db_Models\\Constraints\\Payment_Model_Constraint',
		'Jet_Form_Builder\\Gateways\\Gateway_Manager'      => 'JFB_Modules\\Gateways\\Module',
		'Jet_Form_Builder\\Gateways\\Pages\\Single_Payment_Page' => 'JFB_Modules\\Gateways\\Pages\\Single_Payment_Page',
		'Jet_Form_Builder\\Gateways\\Rest_Api\\Gateway_Endpoint' => 'JFB_Modules\\Gateways\\Rest_Api\\Gateway_Endpoint',
		'Jet_Form_Builder\\Gateways\\Rest_Api\\Receive_Payments' => 'JFB_Modules\\Gateways\\Rest_Api\\Receive_Payments',
		'Jet_Form_Builder\\Gateways\\Rest_Api\\Receive_Payment' => 'JFB_Modules\\Gateways\\Rest_Api\\Receive_Payment',
		'Jet_Form_Builder\\Gateways\\Paypal\\Scenarios_Logic\\With_Resource_It' => 'JFB_Modules\\Gateways\\Paypal\\Scenarios_Logic\\With_Resource_It',
		'Jet_Form_Builder\\Gateways\\Paypal\\Scenarios_Views\\Pay_Now' => 'JFB_Modules\\Gateways\\Paypal\\Scenarios_Views\\Pay_Now',
		'Jet_Form_Builder\\Gateways\\Paypal\\Rest_Endpoints\\Fetch_Pay_Now_Editor' => 'JFB_Modules\\Gateways\\Paypal\\Rest_Endpoints\\Fetch_Pay_Now_Editor',
		'Jet_Form_Builder\\Gateways\\Paypal\\Api_Actions\\Base_Action' => 'JFB_Modules\\Gateways\\Paypal\\Api_Actions\\Base_Action',
		'Jet_Form_Builder\\Gateways\\Paypal\\Api_Actions\\Traits\\App_Context_Trait' => 'JFB_Modules\\Gateways\\Paypal\\Api_Actions\\Traits\\App_Context_Trait',
		'Jet_Form_Builder\\Gateways\\Paypal\\Controller'   => 'JFB_Modules\\Gateways\\Paypal\\Controller',
		'Jet_Form_Builder\\Gateways\\Table_Views\\Columns\\Row_Actions_Column' => 'JFB_Modules\\Gateways\\Table_Views\\Columns\\Row_Actions_Column',
		'Jet_Form_Builder\\Gateways\\Table_Views\\Columns\\Gross_Column' => 'JFB_Modules\\Gateways\\Table_Views\\Columns\\Gross_Column',
		'Jet_Form_Builder\\Gateways\\Pages\\Payments_Page' => 'JFB_Modules\\Gateways\\Pages\\Payments_Page',
		'Jet_Form_Builder\\Gateways\\Meta_Boxes\\Payer_Box' => 'JFB_Modules\\Gateways\\Meta_Boxes\\Payer_Box',
		'Jet_Form_Builder\\Gateways\\Meta_Boxes\\Payer_Shipping_Box' => 'JFB_Modules\\Gateways\\Meta_Boxes\\Payer_Shipping_Box',
		'Jet_Form_Builder\\Gateways\\Meta_Boxes\\Columns\\Payment_Amount_Column' => 'JFB_Modules\\Gateways\\Meta_Boxes\\Columns\\Payment_Amount_Column',
		'Jet_Form_Builder\\Gateways\\Meta_Boxes\\Columns\\Payment_Currency_Column' => 'JFB_Modules\\Gateways\\Meta_Boxes\\Columns\\Payment_Currency_Column',
		'Jet_Form_Builder\\Gateways\\Meta_Boxes\\Columns\\Gateway_Type_Column' => 'JFB_Modules\\Gateways\\Meta_Boxes\\Columns\\Gateway_Type_Column',
		'Jet_Form_Builder\\Gateways\\Table_Views\\Columns\\Payment_Type_Column' => 'JFB_Modules\\Gateways\\Table_Views\\Columns\\Payment_Type_Column',
		'Jet_Form_Builder\\Gateways\\Table_Views\\Columns\\Payment_Status_Column' => 'JFB_Modules\\Gateways\\Table_Views\\Columns\\Payment_Status_Column',
		'Jet_Form_Builder\\Gateways\\Table_Views\\Columns\\Payer_Column' => 'JFB_Modules\\Gateways\\Table_Views\\Columns\\Payer_Column',
		'Jet_Form_Builder\\Gateways\\Table_Views\\Payments' => 'JFB_Modules\\Gateways\\Table_Views\\Payments',
		'Jet_Form_Builder\\Gateways\\Query_Views\\Payment_View' => 'JFB_Modules\\Gateways\\Query_Views\\Payment_View',
		// jet-engine compatibility
		'Jet_Form_Builder\\Blocks\\Types\\Map_Field'       => 'JFB_Compatibility\\Jet_Engine\\Blocks\\Map_Field',
		// repository component
		'Jet_Form_Builder\\Classes\\Repository\\Repository_Pattern_Trait' => 'JFB_Components\\Repository\\Repository_Pattern_Trait',
		'Jet_Form_Builder\\Classes\\Repository\\Repository_Static_Item_It' => 'JFB_Components\\Repository\\Repository_Static_Item_It',
		// form-record
		'Jet_Form_Builder\\Actions\\Types\\Save_Record'    => 'JFB_Modules\\Form_Record\\Action_Types\\Save_Record',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Values_Box' => 'JFB_Modules\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Values_Box',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Error_Message_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Error_Message_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Models\\Record_Model' => 'JFB_Modules\\Form_Record\\Models\\Record_Model',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\Pages\\Single_Form_Record_Page' => 'JFB_Modules\\Form_Record\\Admin\\Pages\\Single_Form_Record_Page',
	);

	/**
	 * Run autoloader.
	 *
	 * Register a function as `__autoload()` implementation.
	 *
	 * @since 1.6.0
	 * @access public
	 * @static
	 */
	public static function run() {
		spl_autoload_register( array( __CLASS__, 'autoload' ) );
	}

	/**
	 * Load class.
	 *
	 * For a given class name, require the class file.
	 *
	 * @param string $space
	 * @param array $class_parts
	 *
	 * @since 1.6.0
	 * @access private
	 * @static
	 */
	private static function load_class( string $space, array $class_parts ) {

		$file     = implode( DIRECTORY_SEPARATOR, $class_parts );
		$file     = strtolower( str_replace( '_', '-', $file ) );
		$filepath = JET_FORM_BUILDER_PATH . self::NAMESPACES[ $space ] . $file . '.php';

		if ( is_readable( $filepath ) ) {
			require_once $filepath;
		}
	}

	/**
	 * Autoload.
	 *
	 * For a given class, check if it exist and load it.
	 *
	 * @param $class_name
	 *
	 * @since 1.6.0
	 * @access private
	 * @static
	 */
	private static function autoload( $class_name ) {

		$parts = explode( '\\', $class_name );

		if ( ! array_key_exists( $parts[0] . '\\', self::NAMESPACES ) ) {
			return;
		}

		list( $prefix, $parts, $relative ) = self::get_class_parts( $parts );

		$has_alias = isset( self::DEPRECATED_CLASSMAP[ $prefix . $relative ] );

		if ( $has_alias ) {
			list( $prefix, $parts, $relative ) = self::get_class_parts(
				self::DEPRECATED_CLASSMAP[ $prefix . $relative ]
			);
		}

		if ( ! class_exists( $prefix . $relative ) ) {
			self::load_class( $prefix, $parts );
		}

		if ( $has_alias ) {
			class_alias( $prefix . $relative, $class_name );
		}
	}

	/**
	 * @param array|string $class_name
	 *
	 * @return array
	 */
	private static function get_class_parts( $class_name ): array {
		$parts = is_array( $class_name ) ? $class_name : explode( '\\', $class_name );

		// global namespace
		$prefix = $parts[0] . '\\';
		// remove first element
		array_shift( $parts );

		$relative = implode( '\\', $parts );

		return array( $prefix, $parts, $relative );
	}
}
