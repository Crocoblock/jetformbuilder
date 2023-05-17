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
		__NAMESPACE__ . '\\' => 'includes/',
		'JFB_Modules\\'      => 'modules/',
	);

	const DEPRECATED_CLASSMAP = array(
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Actions_Box' => 'JFB_Modules\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Actions_Box',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Errors_Box' => 'JFB_Modules\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Errors_Box',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Fields_Box' => 'JFB_Modules\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Fields_Box',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Values_Box' => 'JFB_Modules\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Values_Box',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\Meta_Boxes\\Record_To_Payment_Box' => 'JFB_Modules\\Form_Record\\Admin\\Meta_Boxes\\Record_To_Payment_Box',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\Notices\\Update_Db_Notice' => 'JFB_Modules\\Form_Record\\Admin\\Notices\\Update_Db_Notice',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\Pages\\Form_Records' => 'JFB_Modules\\Form_Record\\Admin\\Pages\\Form_Records',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\Pages\\Single_Form_Record_Page' => 'JFB_Modules\\Form_Record\\Admin\\Pages\\Single_Form_Record_Page',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\Table_Views\\Records_Table_View' => 'JFB_Modules\\Form_Record\\Admin\\Table_Views\\Records_Table_View',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Actions\\Delete_Record_Action' => 'JFB_Modules\\Form_Record\\Admin\\View_Actions\\Delete_Record_Action',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Actions\\Mark_Not_Viewed_Action' => 'JFB_Modules\\Form_Record\\Admin\\View_Actions\\Mark_Not_Viewed_Action',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Actions\\Mark_Viewed_Action' => 'JFB_Modules\\Form_Record\\Admin\\View_Actions\\Mark_Viewed_Action',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Actions\\View_Action' => 'JFB_Modules\\Form_Record\\Admin\\View_Actions\\View_Action',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Actions\\View_Related_Form' => 'JFB_Modules\\Form_Record\\Admin\\View_Actions\\View_Related_Form',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Action_Event_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Action_Event_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Actions_List_For_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Actions_List_For_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Classes_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Classes_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Error_Data_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Error_Data_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Error_Message_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Error_Message_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Error_Place_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Error_Place_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Exception_Name_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Exception_Name_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Field_Name_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Field_Name_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Field_Type_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Field_Type_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Field_Value_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Field_Value_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Form_Action_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Form_Action_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Form_Action_Status_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Form_Action_Status_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Form_Link_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Form_Link_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Header_Actions_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Header_Actions_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Ip_Address_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Ip_Address_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Primary_Form_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Primary_Form_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Referrer_Link_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Referrer_Link_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Row_Actions_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Row_Actions_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Status_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Status_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\User_Agent_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\User_Agent_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\User_Login_Column' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\User_Login_Column',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Utils' => 'JFB_Modules\\Form_Record\\Admin\\View_Columns\\Utils',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Constraints\\Record_Model_Constraint' => 'JFB_Modules\\Form_Record\\Constraints\\Record_Model_Constraint',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Controller' => 'JFB_Modules\\Form_Record\\Controller',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Models\\Record_Action_Result_Model' => 'JFB_Modules\\Form_Record\\Models\\Record_Action_Result_Model',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Models\\Record_Error_Model' => 'JFB_Modules\\Form_Record\\Models\\Record_Error_Model',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Models\\Record_Field_Model' => 'JFB_Modules\\Form_Record\\Models\\Record_Field_Model',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Models\\Record_Model' => 'JFB_Modules\\Form_Record\\Models\\Record_Model',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Query_Views\\Record_Actions' => 'JFB_Modules\\Form_Record\\Query_Views\\Record_Actions',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Query_Views\\Record_By_Payment' => 'JFB_Modules\\Form_Record\\Query_Views\\Record_By_Payment',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Query_Views\\Record_Errors' => 'JFB_Modules\\Form_Record\\Query_Views\\Record_Errors',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Query_Views\\Record_Fields_View_Count' => 'JFB_Modules\\Form_Record\\Query_Views\\Record_Fields_View_Count',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Query_Views\\Record_Fields_View' => 'JFB_Modules\\Form_Record\\Query_Views\\Record_Fields_View',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Query_Views\\Record_View_Count' => 'JFB_Modules\\Form_Record\\Query_Views\\Record_View_Count',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Query_Views\\Record_View_Forms' => 'JFB_Modules\\Form_Record\\Query_Views\\Record_View_Forms',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Query_Views\\Record_View' => 'JFB_Modules\\Form_Record\\Query_Views\\Record_View',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Records_Rest_Controller' => 'JFB_Modules\\Form_Record\\Records_Rest_Controller',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Rest_Endpoints\\Delete_Form_Record_Endpoint' => 'JFB_Modules\\Form_Record\\Rest_Endpoints\\Delete_Form_Record_Endpoint',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Rest_Endpoints\\Fetch_Filters_Endpoint' => 'JFB_Modules\\Form_Record\\Rest_Endpoints\\Fetch_Filters_Endpoint',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Rest_Endpoints\\Fetch_Records_Fields_Box_Endpoint' => 'JFB_Modules\\Form_Record\\Rest_Endpoints\\Fetch_Records_Fields_Box_Endpoint',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Rest_Endpoints\\Fetch_Records_Page_Endpoint' => 'JFB_Modules\\Form_Record\\Rest_Endpoints\\Fetch_Records_Page_Endpoint',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Rest_Endpoints\\Mark_As_Not_Viewed_Record_Endpoint' => 'JFB_Modules\\Form_Record\\Rest_Endpoints\\Mark_As_Not_Viewed_Record_Endpoint',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Rest_Endpoints\\Mark_As_Viewed_Record_Endpoint' => 'JFB_Modules\\Form_Record\\Rest_Endpoints\\Mark_As_Viewed_Record_Endpoint',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Rest_Endpoints\\Mark_View_Record_Base_Endpoint' => 'JFB_Modules\\Form_Record\\Rest_Endpoints\\Mark_View_Record_Base_Endpoint',
		'Jet_Form_Builder\\Actions\\Methods\\Form_Record\\Tools' => 'JFB_Modules\\Form_Record\\Tools',
		'Jet_Form_Builder\\Actions\\Types\\Save_Record'   => 'JFB_Modules\\Form_Record\\Action_Types\\Save_Record',
		'Jet_Form_Builder\\Classes\\Security\\Csrf_Token_Model' => 'JFB_Modules\\Security\\Csrf\\Csrf_Token_Model',
		'Jet_Form_Builder\\Classes\\Security\\Csrf_Token_View' => 'JFB_Modules\\Security\\Csrf\\Csrf_Token_View',
		'Jet_Form_Builder\\Classes\\Security\\Csrf_Tools' => 'JFB_Modules\\Security\\Csrf\\Csrf_Tools',
		'Jet_Form_Builder\\Integrations\\Forms_Captcha'   => 'JFB_Modules\\Captcha\\Module',
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
