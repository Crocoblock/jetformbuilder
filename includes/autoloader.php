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

	const PREFIX = __NAMESPACE__ . '\\';

	const DEPRECATED_CLASSMAP = array(
		'Actions\\Methods\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Actions_Box' => 'Modules\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Actions_Box',
		'Actions\\Methods\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Errors_Box' => 'Modules\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Errors_Box',
		'Actions\\Methods\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Fields_Box' => 'Modules\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Fields_Box',
		'Actions\\Methods\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Values_Box' => 'Modules\\Form_Record\\Admin\\Meta_Boxes\\Form_Record_Values_Box',
		'Actions\\Methods\\Form_Record\\Admin\\Meta_Boxes\\Record_To_Payment_Box' => 'Modules\\Form_Record\\Admin\\Meta_Boxes\\Record_To_Payment_Box',
		'Actions\\Methods\\Form_Record\\Admin\\Notices\\Update_Db_Notice' => 'Modules\\Form_Record\\Admin\\Notices\\Update_Db_Notice',
		'Actions\\Methods\\Form_Record\\Admin\\Pages\\Form_Records' => 'Modules\\Form_Record\\Admin\\Pages\\Form_Records',
		'Actions\\Methods\\Form_Record\\Admin\\Pages\\Single_Form_Record_Page' => 'Modules\\Form_Record\\Admin\\Pages\\Single_Form_Record_Page',
		'Actions\\Methods\\Form_Record\\Admin\\Table_Views\\Records_Table_View' => 'Modules\\Form_Record\\Admin\\Table_Views\\Records_Table_View',
		'Actions\\Methods\\Form_Record\\Admin\\View_Actions\\Delete_Record_Action' => 'Modules\\Form_Record\\Admin\\View_Actions\\Delete_Record_Action',
		'Actions\\Methods\\Form_Record\\Admin\\View_Actions\\Mark_Not_Viewed_Action' => 'Modules\\Form_Record\\Admin\\View_Actions\\Mark_Not_Viewed_Action',
		'Actions\\Methods\\Form_Record\\Admin\\View_Actions\\Mark_Viewed_Action' => 'Modules\\Form_Record\\Admin\\View_Actions\\Mark_Viewed_Action',
		'Actions\\Methods\\Form_Record\\Admin\\View_Actions\\View_Action' => 'Modules\\Form_Record\\Admin\\View_Actions\\View_Action',
		'Actions\\Methods\\Form_Record\\Admin\\View_Actions\\View_Related_Form' => 'Modules\\Form_Record\\Admin\\View_Actions\\View_Related_Form',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Action_Event_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Action_Event_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Actions_List_For_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Actions_List_For_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Classes_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Classes_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Error_Data_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Error_Data_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Error_Message_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Error_Message_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Error_Place_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Error_Place_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Exception_Name_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Exception_Name_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Field_Name_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Field_Name_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Field_Type_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Field_Type_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Field_Value_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Field_Value_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Form_Action_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Form_Action_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Form_Action_Status_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Form_Action_Status_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Form_Link_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Form_Link_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Header_Actions_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Header_Actions_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Ip_Address_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Ip_Address_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Primary_Form_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Primary_Form_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Referrer_Link_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Referrer_Link_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Row_Actions_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Row_Actions_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Status_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\Status_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\User_Agent_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\User_Agent_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\User_Login_Column' => 'Modules\\Form_Record\\Admin\\View_Columns\\User_Login_Column',
		'Actions\\Methods\\Form_Record\\Admin\\View_Columns\\Utils' => 'Modules\\Form_Record\\Admin\\View_Columns\\Utils',
		'Actions\\Methods\\Form_Record\\Constraints\\Record_Model_Constraint' => 'Modules\\Form_Record\\Constraints\\Record_Model_Constraint',
		'Actions\\Methods\\Form_Record\\Controller' => 'Modules\\Form_Record\\Controller',
		'Actions\\Methods\\Form_Record\\Models\\Record_Action_Result_Model' => 'Modules\\Form_Record\\Models\\Record_Action_Result_Model',
		'Actions\\Methods\\Form_Record\\Models\\Record_Error_Model' => 'Modules\\Form_Record\\Models\\Record_Error_Model',
		'Actions\\Methods\\Form_Record\\Models\\Record_Field_Model' => 'Modules\\Form_Record\\Models\\Record_Field_Model',
		'Actions\\Methods\\Form_Record\\Models\\Record_Model' => 'Modules\\Form_Record\\Models\\Record_Model',
		'Actions\\Methods\\Form_Record\\Query_Views\\Record_Actions' => 'Modules\\Form_Record\\Query_Views\\Record_Actions',
		'Actions\\Methods\\Form_Record\\Query_Views\\Record_By_Payment' => 'Modules\\Form_Record\\Query_Views\\Record_By_Payment',
		'Actions\\Methods\\Form_Record\\Query_Views\\Record_Errors' => 'Modules\\Form_Record\\Query_Views\\Record_Errors',
		'Actions\\Methods\\Form_Record\\Query_Views\\Record_Fields_View_Count' => 'Modules\\Form_Record\\Query_Views\\Record_Fields_View_Count',
		'Actions\\Methods\\Form_Record\\Query_Views\\Record_Fields_View' => 'Modules\\Form_Record\\Query_Views\\Record_Fields_View',
		'Actions\\Methods\\Form_Record\\Query_Views\\Record_View_Count' => 'Modules\\Form_Record\\Query_Views\\Record_View_Count',
		'Actions\\Methods\\Form_Record\\Query_Views\\Record_View_Forms' => 'Modules\\Form_Record\\Query_Views\\Record_View_Forms',
		'Actions\\Methods\\Form_Record\\Query_Views\\Record_View' => 'Modules\\Form_Record\\Query_Views\\Record_View',
		'Actions\\Methods\\Form_Record\\Records_Rest_Controller' => 'Modules\\Form_Record\\Records_Rest_Controller',
		'Actions\\Methods\\Form_Record\\Rest_Endpoints\\Delete_Form_Record_Endpoint' => 'Modules\\Form_Record\\Rest_Endpoints\\Delete_Form_Record_Endpoint',
		'Actions\\Methods\\Form_Record\\Rest_Endpoints\\Fetch_Filters_Endpoint' => 'Modules\\Form_Record\\Rest_Endpoints\\Fetch_Filters_Endpoint',
		'Actions\\Methods\\Form_Record\\Rest_Endpoints\\Fetch_Records_Fields_Box_Endpoint' => 'Modules\\Form_Record\\Rest_Endpoints\\Fetch_Records_Fields_Box_Endpoint',
		'Actions\\Methods\\Form_Record\\Rest_Endpoints\\Fetch_Records_Page_Endpoint' => 'Modules\\Form_Record\\Rest_Endpoints\\Fetch_Records_Page_Endpoint',
		'Actions\\Methods\\Form_Record\\Rest_Endpoints\\Mark_As_Not_Viewed_Record_Endpoint' => 'Modules\\Form_Record\\Rest_Endpoints\\Mark_As_Not_Viewed_Record_Endpoint',
		'Actions\\Methods\\Form_Record\\Rest_Endpoints\\Mark_As_Viewed_Record_Endpoint' => 'Modules\\Form_Record\\Rest_Endpoints\\Mark_As_Viewed_Record_Endpoint',
		'Actions\\Methods\\Form_Record\\Rest_Endpoints\\Mark_View_Record_Base_Endpoint' => 'Modules\\Form_Record\\Rest_Endpoints\\Mark_View_Record_Base_Endpoint',
		'Actions\\Methods\\Form_Record\\Tools'      => 'Modules\\Form_Record\\Tools',
		'Actions\\Types\\Save_Record'               => 'Modules\\Form_Record\\Action_Types\\Save_Record',
		'Classes\\Security\\Csrf_Token_Model'       => 'Modules\\Security\\Csrf\\Csrf_Token_Model',
		'Classes\\Security\\Csrf_Token_View'        => 'Modules\\Security\\Csrf\\Csrf_Token_View',
		'Classes\\Security\\Csrf_Tools'             => 'Modules\\Security\\Csrf\\Csrf_Tools',
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
	 * @param $class_name
	 *
	 * @since 1.6.0
	 * @access private
	 * @static
	 */
	private static function load_class( $class_name ) {

		$file     = str_replace( '\\', DIRECTORY_SEPARATOR, $class_name );
		$file     = strtolower( str_replace( '_', '-', $file ) );
		$filepath = JET_FORM_BUILDER_PATH . 'includes/' . $file . '.php';

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

		if ( 0 !== strpos( $class_name, self::PREFIX ) ) {
			return;
		}

		$relative_class_name = substr( $class_name, strlen( self::PREFIX ) );
		$has_alias           = isset( self::DEPRECATED_CLASSMAP[ $relative_class_name ] );

		if ( $has_alias ) {
			$relative_class_name = self::DEPRECATED_CLASSMAP[ $relative_class_name ];
		}

		$final_class_name = __NAMESPACE__ . '\\' . $relative_class_name;

		if ( ! class_exists( $final_class_name ) ) {
			self::load_class( $relative_class_name );
		}

		if ( $has_alias ) {
			class_alias( $final_class_name, $class_name );
		}
	}
}
