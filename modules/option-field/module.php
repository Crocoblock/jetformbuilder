<?php


namespace JFB_Modules\Option_Field;

use Jet_Form_Builder\Blocks\Module as BlocksModule;
use JFB_Modules\Option_Field\Interfaces\Support_Option_Query_It;
use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Plugin;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Modules\Option_Query\Legacy_Generator_Query;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

final class Module implements
	Base_Module_It,
	Base_Module_Url_It,
	Base_Module_Handle_It,
	Base_Module_Dir_It {

	use Base_Module_Url_Trait;
	use Base_Module_Dir_Trait;
	use Base_Module_Handle_Trait;

	public function rep_item_id() {
		return 'option-field';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_filter( 'jet-form-builder/blocks/items', array( $this, 'add_blocks_types' ) );
		add_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_admin_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
		add_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_frontend_scripts' ) );
		add_action( 'jet-form-builder/after-start-form-row', array( $this, 'apply_field_options' ) );
		add_action(
			'jet-form-builder/option-query/set-in-block',
			array( $this, 'on_set_in_block' ),
			0
		);
	}

	public function remove_hooks() {
		remove_filter( 'jet-form-builder/blocks/items', array( $this, 'add_blocks_types' ) );
		remove_action( 'jet-form-builder/editor-assets/before', array( $this, 'enqueue_admin_assets' ) );
		remove_action( 'wp_enqueue_scripts', array( $this, 'register_frontend_scripts' ) );
		remove_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_frontend_scripts' ) );
		remove_action(
			'jet-form-builder/option-query/set-in-block',
			array( $this, 'on_set_in_block' ),
			0
		);
	}

	public function add_blocks_types( array $block_types ): array {
		array_push(
			$block_types,
			new Blocks\Select\Block_Type(),
			new Blocks\Checkbox\Block_Type(),
			new Blocks\Radio\Block_Type()
		);

		return $block_types;
	}

	/**
	 * @param Base $block
	 */
	public function apply_field_options( Base $block ) {
		if ( ! ( $block instanceof Support_Option_Query_It ) ) {
			return;
		}
		$block->block_attrs['field_options'] = iterator_to_array( $block->get_query()->fetch() );
	}

	public function enqueue_admin_assets() {
		$script_asset = require_once $this->get_dir( 'assets/build/editor.asset.php' );

		// for all blocks
		wp_enqueue_script(
			$this->get_handle(),
			$this->get_url( 'assets/build/editor.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		wp_localize_script(
			$this->get_handle(),
			'JetFormOptionFieldData',
			$this->get_localize_data()
		);

		wp_enqueue_style(
			$this->get_handle(),
			$this->get_url( 'assets/build/editor.css' ),
			array(),
			$script_asset['version']
		);
	}

	public function register_frontend_scripts() {
		// select
		$script_asset = require_once $this->get_dir( 'assets/build/select.asset.php' );

		array_push(
			$script_asset['dependencies'],
			BlocksModule::MAIN_SCRIPT_HANDLE
		);

		wp_register_script(
			$this->get_handle( 'select' ),
			$this->get_url( 'assets/build/select.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
		wp_register_style(
			$this->get_handle( 'select' ),
			$this->get_url( 'assets/build/select.css' ),
			array(),
			$script_asset['version']
		);

		// checkbox
		$script_asset = require_once $this->get_dir( 'assets/build/checkbox.asset.php' );

		array_push(
			$script_asset['dependencies'],
			BlocksModule::MAIN_SCRIPT_HANDLE
		);

		wp_register_script(
			Blocks\Checkbox\Block_Type::HANDLE,
			$this->get_url( 'assets/build/checkbox.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		// options restrictions
		$script_asset = require_once $this->get_dir(
			'assets/build/custom.options.restrictions.asset.php'
		);

		array_push(
			$script_asset['dependencies'],
			BlocksModule::MAIN_SCRIPT_HANDLE
		);

		wp_register_script(
			Blocks\Checkbox\Block_Type::HANDLE_CUSTOM,
			$this->get_url( 'assets/build/custom.options.restrictions.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		// radio
		$script_asset = require_once $this->get_dir( 'assets/build/radio.asset.php' );

		array_push(
			$script_asset['dependencies'],
			BlocksModule::MAIN_SCRIPT_HANDLE
		);

		wp_register_script(
			Blocks\Radio\Block_Type::HANDLE,
			$this->get_url( 'assets/build/radio.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	/**
	 * @param Base|Support_Option_Query_It $block
	 */
	public function on_set_in_block( Base $block ) {
		$value_from = ! empty( $block->block_attrs['value_from_key'] )
			? $block->block_attrs['value_from_key']
			: false;
		$calc_from  = ! empty( $block->block_attrs['calculated_value_from_key'] )
			? $block->block_attrs['calculated_value_from_key']
			: false;

		switch ( $block->get_query()->rep_item_id() ) {
			case 'manual_input':
				$block->get_query()->set_query(
					'options',
					$block->block_attrs['field_options'] ?? array()
				);

				break;
			case 'posts':
				$block->get_query()->set_setting( 'value_from', $value_from );
				$block->get_query()->set_setting( 'calc_from', $calc_from );
				$block->get_query()->set_query(
					'post_type',
					$block->block_attrs['field_options_post_type'] ?? ''
				);
				break;
			case 'terms':
				$block->get_query()->set_setting( 'value_from', $value_from );
				$block->get_query()->set_setting( 'calc_from', $calc_from );
				$block->get_query()->set_query(
					'taxonomy',
					$block->block_attrs['field_options_tax'] ?? ''
				);
				break;
			case 'meta_field':
				$block->get_query()->set_query(
					'meta_key',
					$block->block_attrs['field_options_key'] ?? ''
				);
				break;
			case 'generate':
				/** @var Legacy_Generator_Query $generator_query */
				$generator_query = $block->get_query();
				$generator_query->set_block( $block );
				$generator_query->set_settings( $block->block_attrs );
				$generator_query->set_setting( 'value_from', $value_from );
				$generator_query->set_setting( 'calc_from', $calc_from );
				break;
		}
	}

	/**
	 * Return data for Select, Checkboxes and Radio fields
	 *
	 * @param array $merged
	 *
	 * @return array
	 */
	protected function get_localize_data( $merged = array() ): array {
		$options = array(
			'post_types_list' => Tools::get_post_types_for_options(),
			'taxonomies_list' => Tools::get_taxonomies_for_js(),
			'generators_list' => Tools::get_generators_list_for_js(),
		);

		$active_jet_engine = false !== Tools::get_jet_engine_version();

		$options['glossaries_list'] = $active_jet_engine
			? $this->get_glossaries_list()
			: array();

		$options['listings_list'] = $active_jet_engine
			? jet_engine()->listings->get_listings_for_options( 'blocks' )
			: array();

		return array_merge( $options, $merged );
	}

	private function get_glossaries_list(): array {
		return array_map(
			function ( $glossary ) {
				return array(
					'label' => $glossary['name'],
					'value' => $glossary['id'],
				);
			},
			jet_engine()->glossaries->settings->get()
		);
	}
}
