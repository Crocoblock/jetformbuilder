<?php


namespace JFB_Compatibility\Jet_Engine;

use Jet_Form_Builder\Actions\Methods\Object_Properties_Collection;
use JFB_Compatibility\Jet_Engine\Actions\Update_Options;
use JFB_Compatibility\Jet_Engine\Blocks\Map_Field;
use JFB_Compatibility\Jet_Engine\Blocks\Map_Tools;
use JFB_Compatibility\Jet_Engine\Generators\Get_From_Field;
use JFB_Compatibility\Jet_Engine\Generators\Get_From_Je_Query;
use JFB_Compatibility\Jet_Engine\Methods\Post_Modification\Post_Je_Relation_Property;
use JFB_Compatibility\Jet_Engine\Parsers\Map_Field_Parser;
use JFB_Compatibility\Jet_Engine\Preset_Sources\Preset_Source_Options_Page;
use JFB_Compatibility\Jet_Engine\Preset_Sources\Preset_User;
use JFB_Components\Compatibility\Base_Compat_Dir_Trait;
use JFB_Components\Compatibility\Base_Compat_Handle_Trait;
use JFB_Components\Compatibility\Base_Compat_Url_Trait;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use Jet_Form_Builder\Blocks\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Jet_Engine implements
	Base_Module_It,
	Base_Module_Handle_It,
	Base_Module_Dir_It,
	Base_Module_Url_It {

	use Base_Compat_Handle_Trait;
	use Base_Compat_Url_Trait;
	use Base_Compat_Dir_Trait;

	public function rep_item_id() {
		return 'jet-engine';
	}

	public function condition(): bool {
		return function_exists( 'jet_engine' );
	}

	public function init_hooks() {
		add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );
		add_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_scripts' ) );
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_admin_assets' ) );

		add_filter(
			'jet-form-builder/preset/source-types',
			array( $this, 'add_sources' )
		);
		add_filter(
			'jet-form-builder/forms/options-generators',
			array( $this, 'add_generators' )
		);
		add_filter(
			'jet-form-builder/parsers-request/register',
			array( $this, 'add_parsers' )
		);
		add_filter(
			'jet-form-builder/blocks/items',
			array( $this, 'add_blocks' ),
			0
		);
		add_action(
			'jet-form-builder/actions/register',
			array( $this, 'add_actions' )
		);

		if ( jet_engine()->relations ) {
			add_filter(
				'jet-form-builder/post-modifier/object-properties',
				array( $this, 'add_post_properties' )
			);
		}
	}

	public function remove_hooks() {
		remove_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );
		remove_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_scripts' ) );

		remove_filter(
			'jet-form-builder/preset/source-types',
			array( $this, 'add_sources' )
		);
		remove_filter(
			'jet-form-builder/forms/options-generators',
			array( $this, 'add_generators' )
		);
		remove_filter(
			'jet-form-builder/parsers-request/register',
			array( $this, 'add_parsers' )
		);
		remove_filter(
			'jet-form-builder/blocks/items',
			array( $this, 'add_blocks' ),
			0
		);

		remove_action(
			'jet-form-builder/actions/register',
			array( $this, 'add_actions' )
		);

		if ( jet_engine()->relations ) {
			remove_filter(
				'jet-form-builder/post-modifier/object-properties',
				array( $this, 'add_post_properties' )
			);
		}
	}

	public function register_scripts() {
		$handle = $this->get_handle( 'map-field' );

		wp_register_script(
			$handle,
			$this->get_url( 'assets/build/js/frontend/map.field{min}.js' ),
			array(
				Module::MAIN_SCRIPT_HANDLE,
			),
			jet_form_builder()->get_version(),
			true
		);

		wp_localize_script(
			$handle,
			'JetMapFieldsSettings',
			array(
				'api'     => jet_engine()->api->get_route( 'get-map-point-data' ),
				'apiHash' => jet_engine()->api->get_route( 'get-map-location-hash' ),
				'nonce'   => wp_create_nonce( 'jet-map-field' ),
				'i18n'    => array(
					'loading'   => esc_html__( 'Loading ...', 'jet-form-builder' ),
					'notFound'  => esc_html__( 'Address not found', 'jet-form-builder' ),
					'resetBtn'  => esc_html__( 'Reset location', 'jet-form-builder' ),
					'descTitle' => esc_html__( 'Lat and Lng are separately stored in the following fields', 'jet-form-builder' ),
				),
			)
		);
	}

	public function enqueue_admin_assets() {
		$handle = $this->get_handle( 'editor' );

		wp_enqueue_script(
			$handle,
			$this->get_url( 'assets/build/js/editor{min}.js' ),
			array(),
			jet_form_builder()->get_version(),
			true
		);

		wp_localize_script(
			$handle,
			'JetFBMapField',
			array(
				'image'        => $this->get_url( 'assets/img/map-placeholder.png' ),
				'formats'      => Map_Tools::get_formats(),
				'is_supported' => Map_Tools::is_supported(),
				'help'         => Map_Tools::get_help_message(),
			)
		);
	}

	public function add_sources( array $sources ): array {
		array_push(
			$sources,
			new Preset_Source_Options_Page(),
			new Preset_User()
		);

		return $sources;
	}

	public function add_generators( array $generators ): array {
		array_push(
			$generators,
			new Get_From_Field(),
			new Get_From_Je_Query()
		);

		return $generators;
	}

	public function add_parsers( array $parsers ): array {
		$parsers[] = new Map_Field_Parser();

		return $parsers;
	}

	public function add_blocks( array $blocks ): array {
		$blocks[] = new Map_Field();

		return $blocks;
	}

	public function add_actions( \Jet_Form_Builder\Actions\Manager $manager ) {
		$manager->register_action_type( new Update_Options() );
	}

	public function add_post_properties(
		Object_Properties_Collection $collection
	): Object_Properties_Collection {
		return $collection->add( new Post_Je_Relation_Property() );
	}

}
