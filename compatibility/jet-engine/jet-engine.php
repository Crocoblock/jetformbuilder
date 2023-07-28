<?php


namespace JFB_Compatibility\Jet_Engine;

use Jet_Form_Builder\Actions\Methods\Object_Properties_Collection;
use Jet_Form_Builder\Blocks\Render\Checkbox_Field_Render;
use Jet_Form_Builder\Blocks\Render\Radio_Field_Render;
use Jet_Form_Builder\Classes\Builder_Helper;
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
use JFB_Components\Module\Base_Module_After_Install_It;
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
	Base_Module_Url_It,
	Base_Module_After_Install_It {

	use Base_Compat_Handle_Trait;
	use Base_Compat_Url_Trait;
	use Base_Compat_Dir_Trait;

	private $has_custom_template;

	public function rep_item_id() {
		return 'jet-engine';
	}

	public function condition(): bool {
		return function_exists( 'jet_engine' );
	}

	public function on_install() {
		/** @var \JFB_Modules\Block_Parsers\Module $module */
		/** @noinspection PhpUnhandledExceptionInspection */
		$module = jet_form_builder()->module( 'block-parsers' );

		$module->install( new Map_Field_Parser() );
	}

	public function on_uninstall() {
		/** @var \JFB_Modules\Block_Parsers\Module $module */
		/** @noinspection PhpUnhandledExceptionInspection */
		$module = jet_form_builder()->module( 'block-parsers' );

		$module->uninstall( new Map_Field_Parser() );
	}

	public function init_hooks() {
		add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );
		add_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_scripts' ) );
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_admin_assets' ) );
		add_action( 'jet-form-builder/actions/register', array( $this, 'add_actions' ) );

		add_filter(
			'jet-form-builder/preset/source-types',
			array( $this, 'add_sources' )
		);
		add_filter(
			'jet-form-builder/forms/options-generators',
			array( $this, 'add_generators' )
		);
		add_filter(
			'jet-form-builder/blocks/items',
			array( $this, 'add_blocks' ),
			0
		);
		add_filter(
			'jet-form-builder/render/checkbox-field/option',
			array( $this, 'on_render_field_option' ),
			10,
			4
		);
		add_filter(
			'jet-form-builder/render/radio-field/option',
			array( $this, 'on_render_field_option' ),
			10,
			4
		);
		add_filter(
			'render_block_jet-forms/checkbox-field',
			array( $this, 'reset_post_data_after_render_options' )
		);
		add_filter(
			'render_block_jet-forms/radio-field',
			array( $this, 'reset_post_data_after_render_options' )
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
			'jet-form-builder/blocks/items',
			array( $this, 'add_blocks' ),
			0
		);
		remove_filter(
			'jet-form-builder/render/checkbox-field/option',
			array( $this, 'on_render_field_option' )
		);
		remove_filter(
			'jet-form-builder/render/radio-field/option',
			array( $this, 'on_render_field_option' )
		);
		remove_filter(
			'render_block_jet-forms/checkbox-field',
			array( $this, 'reset_post_data_after_render_options' )
		);
		remove_filter(
			'render_block_jet-forms/radio-field',
			array( $this, 'reset_post_data_after_render_options' )
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
			Module::LISTING_OPTIONS_HANDLE,
			$this->get_url( 'assets/build/js/frontend/listing.options.js' ),
			array(
				Module::MAIN_SCRIPT_HANDLE,
			),
			jet_form_builder()->get_version(),
			true
		);

		wp_register_script(
			$handle,
			$this->get_url( 'assets/build/js/frontend/map.field.js' ),
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
			$this->get_url( 'assets/build/js/editor.js' ),
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

	/**
	 * @param string $item
	 * @param $value
	 * @param $option
	 * @param Checkbox_Field_Render|Radio_Field_Render $render
	 *
	 * @return string
	 */
	public function on_render_field_option( string $item, $value, $option, $render ): string {
		$template = '';

		if ( ! empty( $render->args['custom_item_template'] ) ) {
			$template = ( new Builder_Helper() )->get_custom_template(
				$option['object_id'] ?? $value,
				$render->args
			);
		}

		if ( $template ) {
			$this->has_custom_template = true;
		}

		return ( $template . $item );
	}

	public function reset_post_data_after_render_options( string $content ): string {
		if ( $this->has_custom_template ) {
			wp_reset_postdata();
		}

		$this->has_custom_template = null;

		return $content;
	}

}
