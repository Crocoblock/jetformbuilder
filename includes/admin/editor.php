<?php

namespace Jet_Form_Builder\Admin;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Classes\Condition_Helper;
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

	const EDITOR_HANDLE = 'jet-form-builder-editor';
	const EDITOR_PACKAGE_HANDLE = 'jet-form-builder-editor-package';

	public static $index = 0;

	public $allowed_blocks = null;
	public $action = null;
	public $item_id = null;

	/**
	 * Set up editor instatnce props
	 *
	 * @param array $config [description]
	 */
	public function __construct( $config = array() ) {

		if ( ! empty( $config['allowed_blocks'] ) ) {
			$this->allowed_blocks = $config['allowed_blocks'];
		}

		if ( ! empty( $config['action'] ) ) {
			$this->action = $config['action'];
		}

		if ( ! empty( $config['item_id'] ) ) {
			$this->item_id = $config['item_id'];
		}

	}

	/**
	 * Returns action URL
	 *
	 * @return [type] [description]
	 */
	public function get_action() {

		if ( null === $this->action ) {
			$this->action = apply_filters( 'jet-form-builder/editor/action', null );
		}

		return $this->action;

	}

	/**
	 * Returns current item ID
	 *
	 * @return [type] [description]
	 */
	public function get_item_id() {
		return $this->item_id;
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

	public function get_messages_default() {
		return Plugin::instance()->post_type->get_messages_default();
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

		$conditions_settings = jet_form_builder()->form_handler->action_handler->condition_manager()->get_settings();

		wp_localize_script(
			self::EDITOR_PACKAGE_HANDLE,
			'JetFormEditorData',
			array(
				'action'                  => $this->get_action(),
				'itemID'                  => $this->get_item_id(),
				'presetConfig'            => $this->get_preset_config(),
				'messagesDefault'         => $this->get_messages_default(),
				'gateways'                => Gateway_Manager::instance()->editor_data(),
				'helpForRepeaters'        => $this->get_help_for_repeaters(),
				'global_settings'         => Tab_Handler_Manager::instance()->all(),
				'jetEngineVersion'        => Tools::get_jet_engine_version(),
				'actionConditionSettings' => $conditions_settings,
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

		wp_enqueue_script(
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

		wp_enqueue_style(
			'jet-form-builder-others',
			Plugin::instance()->plugin_url( 'assets/css/frontend.css' ),
			array(),
			Plugin::instance()->get_version()
		);

		wp_localize_script(
			$handle,
			'JetFormEditorData',
			array(
				'action'       => $this->get_action(),
				'itemID'       => $this->get_item_id(),
				'presetConfig' => $this->get_preset_config(),
			)
		);

		do_action( 'jet-form-builder/other-editor-assets/after', $this, $handle );

	}

	/**
	 * Render new editor instance
	 *
	 * @return [type] [description]
	 */
	public function render( $input_name = '', $content = '', $form_name = '' ) {

		if ( ! $input_name ) {
			$input_name = 'jet_form_editor_' . self::$index;
			self::$index ++;
		}

		?>
        <input name="<?php echo esc_attr( $input_name ); ?>" id="<?php echo esc_attr( $input_name ); ?>" type="hidden"/>
        <script>
			document.addEventListener( 'jet-form-builder-initialized', function ( event ) {
				window.JetFormEditor(
					'<?php echo esc_js( $input_name ); ?>',
					'<?php echo esc_js( $input_name ); ?>',
					'<?php echo html_entity_decode( esc_js( $content ) ); ?>',
					'<?php echo esc_js( $form_name ); ?>',
				);
			} );
        </script>
		<?php
	}

}
