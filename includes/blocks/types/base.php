<?php

namespace Jet_Form_Builder\Blocks\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field;
use Jet_Form_Builder\Blocks\Modules\Base_Module;
use Jet_Form_Builder\Classes\Builder_Helper;
use Jet_Form_Builder\Classes\Compatibility;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Form_Break;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Presets\Preset_Manager;
use Jet_Form_Builder\Presets\Sources\Base_Source;
use JET_SM\Gutenberg\Controls_Manager;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
abstract class Base extends Base_Module implements Repository_Item_Instance_Trait {

	const PRESET_RAW     = 'raw';
	const PRESET_ARRAY   = 'array';
	const PRESET_EXACTLY = 'exactly';

	/**
	 * @var Controls_Manager
	 */
	protected $controls_manager;
	protected $css_scheme;
	public    $style_attributes = array();

	/**
	 * Block attributes on render
	 *
	 * @var array
	 */
	public $block_attrs = array();
	/**
	 * Block content on render
	 *
	 * @var string
	 */
	public $block_content;

	public $block_context = array();

	/**
	 * Block attributes on register
	 *
	 * @var array
	 */
	public    $attrs            = array();
	protected $provides_context = array();
	protected $uses_context     = array();

	/**
	 * Set to `false` if your block should not be styled
	 *
	 * @var bool
	 */
	public $use_style_manager = true;

	/**
	 * @see \Jet_Form_Builder\Blocks\Blocks_Repository_Base::rep_before_install_item
	 */
	public function is_supported(): bool {
		return true;
	}

	/**
	 * Used to load additional fields through a preset. Example: map-field
	 *
	 * @param Base_Source $source
	 *
	 * @return array
	 */
	public function get_extra_fields( Base_Source $source ): array {
		return array();
	}

	/**
	 * @see \Jet_Form_Builder\Blocks\Blocks_Repository_Base::rep_before_install_item
	 */
	public function register_block_type() {
		$this->maybe_init_style_manager();
		$this->register_block();
	}

	/**
	 * Override this method to set you style controls
	 */
	protected function jsm_controls() {
	}

	public function get_css_scheme() {
		return array();
	}

	public function use_preset() {
		return true;
	}

	public function rep_item_id() {
		return $this->get_name();
	}

	/**
	 * Returns block name/slug
	 *
	 * @return string
	 */
	abstract public function get_name();

	/**
	 * Returns renderer class instance for current block
	 *
	 * @param null $wp_block
	 *
	 * @return  [type] [description]
	 */
	abstract public function get_block_renderer( $wp_block = null );

	public function get_path_metadata_block() {
		$path_parts = array( 'assets', 'blocks-src', $this->get_name() );
		$path       = implode( DIRECTORY_SEPARATOR, $path_parts );

		return jet_form_builder()->plugin_dir( $path );
	}

	protected function register_block() {
		if ( ! function_exists( 'register_block_type_from_metadata' ) ) {
			return;
		}

		$block = register_block_type_from_metadata(
			$this->get_path_metadata_block(),
			array(
				'render_callback' => Plugin::instance()->blocks->render_callback( $this ),
			)
		);

		if ( ! $block ) {
			_doing_it_wrong(
				__METHOD__,
				esc_html__(
					'Unsuccessful field (block) registration. 
				Perhaps the path to the block scheme (block.json) is incorrectly specified',
					'jet-form-builder'
				),
				'2.1.0'
			);
		}

		$this->attrs            = $block->attributes;
		$this->uses_context     = $block->uses_context;
		$this->provides_context = $block->provides_context;
	}

	/**
	 * @return array
	 */
	public function get_uses_context(): array {
		return $this->uses_context;
	}

	/**
	 * @return array
	 */
	public function get_provides_context(): array {
		return $this->provides_context;
	}

	private function maybe_init_style_manager() {
		if ( ! Compatibility::has_jet_sm() || ! $this->use_style_manager ) {
			return;
		}

		$this->css_scheme       = array_merge( $this->general_css_scheme(), $this->get_css_scheme() );
		$this->controls_manager = new Controls_Manager( $this->block_name() );

		$this->run_jsm_controls();

		$this->general_style_manager_options();
	}

	/**
	 * Set style manager class instance
	 *
	 * @return Base
	 */
	private function run_jsm_controls(): Base {
		if ( method_exists( $this, '_jsm_register_controls' ) ) {
			$this->_jsm_register_controls();

			return $this;
		}
		$this->jsm_controls();

		return $this;
	}

	/**
	 * Render callback for the block
	 *
	 * @param array $attrs
	 * @param $content
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function render_callback_field( array $attrs, $content = null, $wp_block = null ) {
		try {
			$before = $this->before_render_field( $attrs, $content, $wp_block );

			return $before . $this->render_field( $attrs, $content, $wp_block );
		} catch ( Render_Empty_Field $exception ) {
			return '';
		}
	}

	/**
	 * @param array $attrs
	 * @param null $content
	 * @param null $wp_block
	 *
	 * @return string
	 * @throws Render_Empty_Field
	 */
	protected function render_field( array $attrs, $content = null, $wp_block = null ): string {
		if ( ! Live_Form::instance()->form_id ) {
			throw new Render_Empty_Field( 'empty_form_id' );
		}
		$this->set_block_data( $attrs, $content, $wp_block );
		$this->set_preset();

		$result   = array();
		$result[] = $this->start_form_row();

		if ( $this->is_field_visible() ) {

			/**
			 * $wp_block should not save in $this,
			 * like $attributes & $content
			 * because it's too large
			 */
			$parsed_block = $wp_block ? $wp_block->parsed_block : null;
			$result[]     = $this->get_block_renderer( $parsed_block );
		}

		$result[] = $this->end_form_row();

		return implode( "\n", $result );
	}

	protected function before_render_field( array $attrs, $content = null, $wp_block = null ): string {
		return apply_filters(
			"jet-form-builder/before-render/{$this->get_name()}",
			'',
			$attrs,
			$content,
			$wp_block
		);
	}

	/**
	 * @param $attributes
	 * @param null $content
	 * @param \WP_Block $wp_block
	 */
	public function set_block_data( $attributes, $content = null, $wp_block = null ) {
		$this->block_content = $content;
		$this->block_attrs   = array_merge(
			$this->get_default_attributes(),
			$attributes
		);
		$this->set_context( $wp_block->context ?? array() );

		$this->block_attrs['blockName'] = $this->block_name();
		$this->block_attrs['type']      = $this->get_name();

		foreach ( $this->attrs as $name => $settings ) {
			if ( ! array_key_exists( $name, $this->block_attrs ) ) {
				continue;
			}
			$this->block_attrs[ $name ] = $this->apply_attribute( $name );
		}
	}

	public function set_context( array $context ): Base {
		$this->block_context = $context;

		return $this;
	}

	public function set_preset() {
		if ( ! $this->use_preset() ) {
			return;
		}

		$this->block_attrs['default'] = $this->get_prepared_default( $this->get_default_from_preset() );
	}

	/**
	 * @param string $name
	 *
	 * @return mixed
	 */
	protected function apply_attribute( string $name ) {
		$shortcode = $this->attrs['jfb']['shortcode'] ?? false;
		$value     = $this->block_attrs[ $name ];

		if ( $shortcode ) {
			$value = do_shortcode( $value );
		}

		return $value;
	}

	/**
	 * @param $value
	 *
	 * @return mixed
	 */
	protected function get_prepared_default( $value ) {
		$format = $this->expected_preset_type()[0] ?? false;

		switch ( $format ) {
			case self::PRESET_EXACTLY:
				return $value;
			case self::PRESET_ARRAY:
				if ( ! is_array( $value ) ) {
					$value = array( $value );
				}

				return array_map( 'strval', $value );
			case self::PRESET_RAW:
			default:
				if ( is_array( $value ) ) {
					foreach ( $value as $item ) {
						return $item;
					}
				}

				return $value;
		}
	}

	protected function get_default_from_preset( $attributes = array() ) {
		jet_fb_preset( jet_fb_live()->form_id );

		if ( ! $this->parent_repeater_name() ) {
			return $this->get_field_value( $attributes );
		}

		if ( ! $this->get_current_repeater() ) {
			$this->set_current_repeater(
				array(
					'index'  => false,
					'values' => $this->load_current_repeater_preset(),
				)
			);
		}

		$repeater = $this->get_current_repeater();

		if ( false === $repeater['index'] ) {
			return $this->get_field_value( $attributes );
		}

		$name = $this->block_attrs['name'] ?? '';
		$row  = $repeater['values'][ $repeater['index'] ] ?? array();

		$custom_value = $this->get_value_from_repeater( $row, $name );

		if ( false !== $custom_value ) {
			return $custom_value;
		}

		$value = ( $row[ $name ] ?? $this->get_field_value( $attributes ) ) ?: '';

		return Preset_Manager::instance()->prepare_result( $this->get_name(), $value );
	}


	/**
	 * @param array $row
	 * @param string $name
	 *
	 * @return mixed
	 */
	protected function get_value_from_repeater( array $row, string $name ) {
		return false;
	}

	/**
	 * Returns field ID with repeater prefix if needed
	 *
	 * @param string $name
	 *
	 * @return mixed|string
	 */
	public function get_field_id( $name = '', $for = 'input' ) {
		if ( $name && is_array( $name ) ) {
			$name = $name['name'];
		}
		if ( ! $name ) {
			$name = $this->block_attrs['name'] ?? '';
		}

		if ( $this->parent_repeater_name() ) {
			$name = sprintf(
				'%1$s_%2$s_%3$s',
				$this->parent_repeater_name(),
				$this->get_current_repeater_index(),
				$name
			);
		}

		return Builder_Helper::get_unique_id( $name, $for );
	}

	/**
	 * Returns field name with repeater prefix if needed
	 *
	 * @param $name
	 *
	 * @return string
	 */
	public function get_field_name( $name = '' ) {
		if ( ! $name ) {
			$name = $this->block_attrs['name'] ?? '';
		}
		if ( $this->parent_repeater_name() ) {
			$name = sprintf(
				'%1$s[%2$s][%3$s]',
				$this->parent_repeater_name(),
				$this->get_current_repeater_index(),
				$name
			);
		}

		return $name;
	}

	/**
	 * You can override this method
	 * to set your own template path
	 *
	 * @return false|string
	 */
	public function fields_templates_path() {
		return false;
	}

	/**
	 * You can override this method
	 * to set your own template path
	 *
	 * @return false|string
	 */
	public function common_templates_path() {
		return false;
	}

	/**
	 * You can rewrite this method
	 * so as not to display an additional html wrapper.
	 *
	 * Or you can add it yourself under some condition
	 * using the Base::start_form_row & Base::end_form_row methods
	 *
	 * @return bool
	 */
	public function render_row_layout() {
		return true;
	}


	/**
	 * Returns full block name
	 *
	 * @return [type] [description]
	 */
	public function block_name(): string {
		return jet_form_builder()->form::NAMESPACE_FIELDS . $this->get_name();
	}

	/**
	 * Get required attribute value
	 *
	 * @param  [type] $args [description]
	 *
	 * @return [type]       [description]
	 */
	public function get_required_val() {
		if (
			! empty( $this->block_attrs['required'] )
			&& ( 'required' === $this->block_attrs['required'] || true === $this->block_attrs['required'] )
		) {
			return 'required';
		}

		return '';
	}

	public function get_required_attr() {
		$required = $this->get_required_val();

		if ( $required ) {
			return "required=\"$required\"";
		}

		return '';
	}

	/**
	 * Returns template path
	 *
	 * @param  [type] $path [description]
	 *
	 * @return [type]       [description]
	 */
	public function get_field_template( $path ) {
		$fields_path = $this->fields_templates_path();

		if ( ! $fields_path ) {
			$fields_path = JET_FORM_BUILDER_PATH . 'templates/fields/';
		}

		return $fields_path . $path;
	}

	public function get_common_template( $path ) {
		$fields_path = $this->common_templates_path();

		if ( ! $fields_path ) {
			$fields_path = JET_FORM_BUILDER_PATH . 'templates/common/';
		}

		return $fields_path . $path;
	}


	public function get_default_attributes() {
		$default = array();

		foreach ( $this->attrs as $name => $value ) {
			if ( isset( $value['default'] ) ) {
				$default[ $name ] = $value['default'];
			}
		}

		return $default;
	}

	/**
	 * Register blocks specific JS variables
	 *
	 * @param  [type] $editor [description]
	 * @param  [type] $handle [description]
	 *
	 * @return [type]         [description]
	 */
	public function block_data( $editor, $handle ) {
	}

	public function get_attributes() {
		return $this->attrs;
	}

	/**
	 * Open form wrapper
	 *
	 * @param bool $force
	 *
	 * @return false|string [type] [description]
	 */
	public function start_form_row( $force = false ) {
		if ( ! $force && ! $this->render_row_layout() ) {
			return '';
		}

		ob_start();

		do_action( 'jet-form-builder/before-start-form-row', $this );

		$this->add_attribute( 'class', 'jet-form-builder-row' );
		$this->add_attribute( 'class', 'field-type-' . $this->get_name() );

		include $this->get_global_template( 'common/start-form-row.php' );

		do_action( 'jet-form-builder/after-start-form-row', $this );

		return ob_get_clean();
	}

	/**
	 * Close form wrapper
	 *
	 * @param bool $force
	 *
	 * @return false|string [type] [description]
	 */
	public function end_form_row( $force = false ) {
		if ( ! $force && ! $this->render_row_layout() ) {
			return '';
		}

		ob_start();
		do_action( 'jet-form-builder/before-end-form-row', $this );

		include $this->get_global_template( 'common/end-form-row.php' );

		do_action( 'jet-form-builder/after-end-form-row', $this );

		return ob_get_clean();
	}

	/**
	 * Returns true if field is visible
	 *
	 * @param $field
	 *
	 * @return boolean        [description]
	 */
	public function is_field_visible() {
		$visibility = $this->block_attrs['visibility'] ?? false;

		// For backward compatibility and hidden fields
		if ( empty( $visibility ) ) {
			return true;
		}

		// If is visible for all - show field
		if ( 'all' === $visibility ) {
			return true;
		}

		// If is visible for logged in users and user is logged in - show field
		if ( 'logged_id' === $visibility && is_user_logged_in() ) {
			return true;
		}

		// If is visible for not logged in users and user is not logged in - show field
		if ( 'not_logged_in' === $visibility && ! is_user_logged_in() ) {
			return true;
		}

		return false;
	}

	public function after_set_pages( Form_Break $break ) {
	}

	/**
	 * @return Form_Break
	 */
	public function get_current_form_break() {
		$context_name = 'jet-forms/conditional-block--name';

		if ( ! isset( $this->block_context[ $context_name ] ) ) {
			return Live_Form::instance()->get_form_break();
		}
		$name  = $this->block_context[ $context_name ];
		$break = Live_Form::instance()->get_form_break( $name );

		if ( ! $break->get_pages() ) {
			$conditional = Plugin::instance()->form->get_field_by_name( 0, $name, Live_Form::instance()->blocks );

			$break->set_pages( $conditional['innerBlocks'], false );
			$this->after_set_pages( $break );
		}

		return $break;
	}

	public function get_current_repeater( $prop = '', $if_empty = false ) {
		$repeater = Live_Form::instance()->get_repeater( $this->parent_repeater_name() );

		return $prop ? ( $repeater[ $prop ] ?? $if_empty ) : $repeater;
	}

	public function get_current_repeater_index() {
		$index = $this->get_current_repeater( 'index' );

		return false !== $index ? $index : '__i__';
	}

	public function parent_repeater_name() {
		$context = 'jet-forms/repeater-field--name';

		return $this->block_context[ $context ] ?? '';
	}

	public function load_current_repeater_preset(): array {
		$repeater_block = Plugin::instance()->form->get_field_by_name(
			0,
			$this->parent_repeater_name(),
			Live_Form::instance()->blocks
		);

		if ( ! $repeater_block ) {
			return array();
		}

		$repeater_preset = $this->get_field_value(
			array_merge(
				$repeater_block['attrs'],
				array(
					'type'      => Block_Helper::delete_namespace( $repeater_block['blockName'] ),
					'blockName' => $repeater_block['blockName'],
				)
			)
		);

		if ( ! $repeater_preset || ! is_array( $repeater_preset ) ) {
			return array();
		}

		return array_values( $repeater_preset );
	}

	public function get_field_value( $attributes = array() ) {
		if ( ! $attributes ) {
			$attributes = $this->block_attrs;
		}

		return Preset_Manager::instance()->get_field_value( $attributes );
	}

	public function set_current_repeater( $attrs ) {
		Live_Form::instance()->set_repeater( $this->parent_repeater_name(), $attrs );
	}

	/**
	 * Possible values:
	 * 'raw' - get what is, unchanged;
	 * 'array';
	 *
	 * @return array
	 */
	public function expected_preset_type(): array {
		return array( self::PRESET_RAW );
	}


}
