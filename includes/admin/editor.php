<?php

namespace Jet_Form_Builder\Admin;

use Jet_Form_Builder\Actions\Condition_Manager;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Classes\Arguments\Form_Arguments;
use Jet_Form_Builder\Classes\Http\Utm_Url;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Gateways\Gateway_Manager;
use Jet_Form_Builder\Plugin;

/**
 * Form editor class
 * Thanks Tom J Nowell for initial editor idea and inspiration!
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Editor class
 */
class Editor {

	const EDITOR_HANDLE         = 'jet-form-builder-editor';
	const EDITOR_PACKAGE_HANDLE = 'jet-form-builder-editor-package';

	public function __construct() {
		add_action( 'enqueue_block_editor_assets', array( $this, 'admin_assets' ) );
	}

	/**
	 * Register admin assets
	 *
	 * @return void [type] [description]
	 */
	public function admin_assets() {
		if ( jet_form_builder()->post_type->is_form_editor ) {
			$this->enqueue_assets();
		} else {
			$this->enqueue_form_assets();
		}
	}

	/**
	 * Returns taxonomies list for the config
	 *
	 * @return [type] [description]
	 */
	public function get_taxonomies_list() {

		$taxonomies = get_taxonomies( array(), 'objects' );

		$result = array();

		foreach ( $taxonomies as $tax ) {
			$result[] = array(
				'value' => $tax->name,
				'label' => sprintf( '%1$s (%2$s)', $tax->label, $tax->name ),
			);
		}

		return $result;

	}

	public function get_preset_config() {
		return apply_filters(
			'jet-form-builder/editor/preset-config',
			array(
				'global_fields' => array(
					array(
						'name'    => 'from',
						'label'   => __( 'Source:', 'jet-form-builder' ),
						'type'    => 'select',
						'options' => Tools::with_placeholder(
							array(
								array(
									'value' => 'post',
									'label' => __( 'Post', 'jet-form-builder' ),
								),
								array(
									'value' => 'user',
									'label' => __( 'User', 'jet-form-builder' ),
								),
								array(
									'value' => 'query_var',
									'label' => __( 'URL Query Variable', 'jet-form-builder' ),
								),
							)
						),
					),
					array(
						'name'      => 'post_from',
						'label'     => __( 'Get post ID from:', 'jet-form-builder' ),
						'type'      => 'select',
						'options'   => Tools::with_placeholder(
							array(
								array(
									'value' => 'current_post',
									'label' => __( 'Current post', 'jet-form-builder' ),
								),
								array(
									'value' => 'query_var',
									'label' => __( 'URL Query Variable', 'jet-form-builder' ),
								),
							)
						),
						'condition' => array(
							'field' => 'from',
							'value' => 'post',
						),
					),
					array(
						'name'      => 'user_from',
						'label'     => __( 'Get user ID from:', 'jet-form-builder' ),
						'type'      => 'select',
						'options'   => Tools::with_placeholder(
							array(
								array(
									'value' => 'current_user',
									'label' => __( 'Current user', 'jet-form-builder' ),
								),
								array(
									'value' => 'query_var',
									'label' => __( 'URL Query Variable', 'jet-form-builder' ),
								),
							)
						),
						'condition' => array(
							'field' => 'from',
							'value' => 'user',
						),
					),
					array(
						'name'             => 'query_var',
						'label'            => __( 'Query variable name:', 'jet-form-builder' ),
						'type'             => 'text',
						'custom_condition' => 'query_var',
						'position'         => 'dynamic',
					),
				),
				'map_fields'    => array(
					array(
						'name'             => 'key',
						'label'            => __( 'Query variable key', 'jet-form-builder' ),
						'type'             => 'text',
						'position'         => 'general',
						'parent_condition' => array(
							'field' => 'from',
							'value' => 'query_var',
						),
					),
					array(
						'name'             => 'prop',
						'label'            => __( 'Post property', 'jet-form-builder' ),
						'type'             => 'select',
						'options'          => Tools::with_placeholder(
							array(
								array(
									'value' => 'ID',
									'label' => __( 'Post ID', 'jet-form-builder' ),
								),
								array(
									'value' => 'post_title',
									'label' => __( 'Post Title', 'jet-form-builder' ),
								),
								array(
									'value' => 'post_content',
									'label' => __( 'Post Content', 'jet-form-builder' ),
								),
								array(
									'value' => 'post_status',
									'label' => __( 'Post Status', 'jet-form-builder' ),
								),
								array(
									'value' => 'post_author',
									'label' => __( 'Post Author', 'jet-form-builder' ),
								),
								array(
									'value' => 'post_excerpt',
									'label' => __( 'Post Excerpt', 'jet-form-builder' ),
								),
								array(
									'value' => 'post_date',
									'label' => __( 'Post Date', 'jet-form-builder' ),
								),
								array(
									'value' => 'post_date_gmt',
									'label' => __( 'Post Date GMT', 'jet-form-builder' ),
								),
								array(
									'value' => 'post_thumb',
									'label' => __( 'Post Thumbnail', 'jet-form-builder' ),
								),
								array(
									'value' => 'post_meta',
									'label' => __( 'Post Meta', 'jet-form-builder' ),
								),
								array(
									'value' => 'post_terms',
									'label' => __( 'Post Terms', 'jet-form-builder' ),
								),
							)
						),
						'parent_condition' => array(
							'field' => 'from',
							'value' => 'post',
						),
					),
					array(
						'name'             => 'key',
						'label'            => __( 'Taxonomy', 'jet-form-builder' ),
						'type'             => 'select',
						'options'          => Tools::with_placeholder( $this->get_taxonomies_list() ),
						'parent_condition' => array(
							'field' => 'from',
							'value' => 'post',
						),
						'condition'        => array(
							'field' => 'prop',
							'value' => 'post_terms',
						),
					),
					array(
						'name'             => 'key',
						'label'            => __( 'Meta field key', 'jet-form-builder' ),
						'type'             => 'text',
						'parent_condition' => array(
							'field' => 'from',
							'value' => 'post',
						),
						'condition'        => array(
							'field' => 'prop',
							'value' => 'post_meta',
						),
					),
					array(
						'name'             => 'prop',
						'label'            => __( 'User field', 'jet-form-builder' ),
						'type'             => 'select',
						'options'          => Tools::with_placeholder(
							array(
								array(
									'value' => 'ID',
									'label' => __( 'User ID', 'jet-form-builder' ),
								),
								array(
									'value' => 'user_login',
									'label' => __( 'User Login', 'jet-form-builder' ),
								),
								array(
									'value' => 'user_email',
									'label' => __( 'Email', 'jet-form-builder' ),
								),
								array(
									'value' => 'password',
									'label' => __( 'Password', 'jet-form-builder' ),
								),
								array(
									'value' => 'first_name',
									'label' => __( 'First Name', 'jet-form-builder' ),
								),
								array(
									'value' => 'last_name',
									'label' => __( 'Last Name', 'jet-form-builder' ),
								),
								array(
									'value' => 'user_url',
									'label' => __( 'User URL', 'jet-form-builder' ),
								),
								array(
									'value' => 'user_meta',
									'label' => __( 'User Meta', 'jet-form-builder' ),
								),
							)
						),
						'parent_condition' => array(
							'field' => 'from',
							'value' => 'user',
						),
					),
					array(
						'name'             => 'key',
						'label'            => __( 'Meta field key', 'jet-form-builder' ),
						'type'             => 'text',
						'parent_condition' => array(
							'field' => 'from',
							'value' => 'user',
						),
						'condition'        => array(
							'field' => 'prop',
							'value' => 'user_meta',
						),
					),
				),
			)
		);
	}

	/**
	 * Enqueue editor assets
	 *
	 * @return void
	 */
	public function enqueue_assets() {
		do_action( 'jet-form-builder/editor-package/before', $this, self::EDITOR_PACKAGE_HANDLE );

		wp_enqueue_script(
			self::EDITOR_PACKAGE_HANDLE,
			JET_FORM_BUILDER_URL . 'assets/js/package.js',
			array(
				'wp-editor',
				'wp-core-data',
				'wp-data',
				'wp-block-library',
				'wp-format-library',
				'wp-api-fetch',
			),
			JET_FORM_BUILDER_VERSION,
			true
		);

		wp_set_script_translations(
			self::EDITOR_PACKAGE_HANDLE,
			'jet-form-builder',
			Plugin::instance()->plugin_dir( 'languages' )
		);

		do_action( 'jet-form-builder/editor-assets/before', $this, self::EDITOR_HANDLE );

		wp_enqueue_script(
			self::EDITOR_HANDLE,
			JET_FORM_BUILDER_URL . 'assets/js/editor.js',
			array(),
			JET_FORM_BUILDER_VERSION,
			true
		);

		wp_enqueue_style(
			self::EDITOR_HANDLE,
			JET_FORM_BUILDER_URL . 'assets/css/editor.css',
			array(
				'media',
				'l10n',
				'buttons',
				'wp-edit-blocks',
				'wp-editor',
			),
			JET_FORM_BUILDER_VERSION,
			'all'
		);

		$conditions_settings = ( new Condition_Manager() )->get_settings();

		$utm     = new Utm_Url( 'wp-admin/editor-jet-form' );
		$addons  = JET_FORM_BUILDER_SITE . '/addons/';
		$pricing = JET_FORM_BUILDER_SITE . '/pricing/';

		wp_localize_script(
			self::EDITOR_PACKAGE_HANDLE,
			'JetFormEditorData',
			array(
				'presetConfig'            => $this->get_preset_config(),
				'messagesDefault'         => Plugin::instance()->post_type->get_messages_default(),
				'gateways'                => Gateway_Manager::instance()->editor_data(),
				'helpForRepeaters'        => $this->get_help_for_repeaters(),
				'global_settings'         => Tab_Handler_Manager::instance()->all(),
				'jetEngineVersion'        => Tools::get_jet_engine_version(),
				'actionConditionSettings' => $conditions_settings,
				'argumentsSource'         => Form_Arguments::get_options(),
				'utmLinks'                => array(
					'allProActions'  => $utm->set_campaign( 'pro-actions' )->add_query( $addons ),
					'limitResponses' => $utm->set_campaign( 'responses-pricing' )->add_query( $pricing ),
					'scheduleForm'   => $utm->set_campaign( 'schedule-pricing' )->add_query( $pricing ),
				),
				'isActivePro'             => jet_form_builder()->addons_manager->is_active(),
			)
		);

		do_action( 'jet-form-builder/editor-assets/after', $this, self::EDITOR_HANDLE );
	}

	private function get_help_for_repeaters() {
		return array(
			'conditional_block'     => array(
				'label' => __( 'With many conditions for the block, they are checked with the AND operator', 'jet-form-builder' ),
			),
			'conditional_block_or'  => array(
				'label' => __( 'With many conditions for the block, they are checked with the OR operator', 'jet-form-builder' ),
			),
			'conditional_action'    => array(
				'label' => __( 'With many conditions for the action, they are checked with the AND operator', 'jet-form-builder' ),
			),
			'conditional_action_or' => array(
				'label' => __( 'With many conditions for the action, they are checked with the OR operator', 'jet-form-builder' ),
			),
		);
	}

	public function enqueue_form_assets() {

		$handle = 'jet-form-builder/form';

		do_action( 'jet-form-builder/other-editor-assets/before', $this, $handle );

		wp_register_script(
			$handle,
			JET_FORM_BUILDER_URL . 'assets/js/form-block.js',
			array(
				'wp-editor',
				'wp-core-data',
				'wp-data',
				'wp-block-library',
				'wp-format-library',
				'wp-api-fetch',
			),
			JET_FORM_BUILDER_VERSION,
			true
		);

		wp_register_style(
			'jet-form-builder-others',
			Plugin::instance()->plugin_url( 'assets/css/frontend.css' ),
			array(),
			Plugin::instance()->get_version()
		);

		do_action( 'jet-form-builder/other-editor-assets/after', $this, $handle );

	}

}
