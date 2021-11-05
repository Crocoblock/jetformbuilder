<?php

namespace Jet_Form_Builder\Blocks\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Modules\Base_Module;
use Jet_Form_Builder\Compatibility\Jet_Style_Manager;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Presets\Preset_Manager;
use JET_SM\Gutenberg\Controls_Manager;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
abstract class Base extends Base_Module {

	private $_unregistered = array();

	/**
	 * @var Controls_Manager
	 */
	protected $controls_manager;
	protected $css_scheme;
	public $style_attributes = array();

	/**
	 * Block attributes on render
	 * @var array
	 */
	public $block_attrs = array();
	/**
	 * Block content on render
	 * @var string
	 */
	public $block_content;

	/**
	 * Block attributes on register
	 * @var array
	 */
	public $attrs = array();

	/**
	 * Set to `false` if your block should not be styled
	 * @var bool
	 */
	public $use_style_manager = true;

	public $error_data = false;

	public function __construct() {

		$this->maybe_init_style_manager();
		$this->_register_block();

		add_filter( 'jet-form-builder/editor/allowed-blocks', function ( $blocks ) {
			$blocks[] = $this->block_name();

			return $blocks;
		} );
	}

	/**
	 * Override this method to set you style controls
	 */
	protected function _jsm_register_controls() {
		//
	}


	public function get_css_scheme() {
		return array();
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

	private function _register_block() {
		if ( ! function_exists( 'register_block_type_from_metadata' ) ) {
			return;
		}

		$block = register_block_type_from_metadata(
			$this->get_path_metadata_block(),
			array(
				'render_callback' => Plugin::instance()->blocks->render_callback( $this )
			)
		);

		$this->attrs = $block->attributes;
	}

	private function maybe_init_style_manager() {
		if ( Jet_Style_Manager::is_activated() && $this->use_style_manager ) {
			$this->css_scheme = array_merge( $this->general_css_scheme(), $this->_get_css_scheme() );
			$this->set_style_manager_instance()->_jsm_register_controls();
			$this->general_style_manager_options();
		}
	}

	private function _get_css_scheme() {
		return apply_filters(
			"jet-form-builder/block/css-scheme",
			$this->get_css_scheme(),
			$this->get_name()
		);
	}

	/**
	 * Set style manager class instance
	 *
	 * @return Base
	 */
	private function set_style_manager_instance() {
		$this->controls_manager = new Controls_Manager( $this->block_name() );

		return $this;
	}

	public function get_storage_name() {
		return jet_form_builder()->blocks::FORM_EDITOR_STORAGE;
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
		if ( ! Live_Form::instance()->form_id ) {
			return '';
		}
		$this->set_block_data( $attrs, $content );
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

	public function set_block_data( $attributes, $content = null ) {
		$this->block_content = $content;
		$this->block_attrs   = array_merge(
			$this->get_default_attributes(),
			$attributes
		);

		$this->block_attrs['blockName'] = $this->block_name();
		$this->block_attrs['type']      = Plugin::instance()->form->field_name( $this->block_attrs['blockName'] );
	}

	protected function set_preset() {
		$this->block_attrs['default'] = $this->get_default_from_preset();
	}

	private function get_default_from_preset() {
		$name = $this->block_attrs['name'] ?? '';

		if ( empty( Live_Form::instance()->current_repeater['values'] ) ) {
			return Preset_Manager::instance()->get_field_value( $this->block_attrs );
		}

		if ( isset( Live_Form::instance()->current_repeater['values'][ $name ] ) ) {
			return Live_Form::instance()->current_repeater['values'][ $name ];
		}

		return '';
	}

	/**
	 * <Easy access to Live_Form functions>
	 */

	/**
	 * Returns field ID with repeater prefix if needed
	 *
	 * @param $name
	 *
	 * @return string
	 */
	public function get_field_id( $name ) {
		return Live_Form::instance()->get_field_id( $name );
	}

	/**
	 * Returns field name with repeater prefix if needed
	 *
	 * @param $name
	 *
	 * @return string
	 */
	public function get_field_name( $name ) {
		return Live_Form::instance()->get_field_name( $name );
	}

	/**
	 * You can override this method
	 * to set your own template path
	 * @return false|string
	 */
	public function fields_templates_path() {
		return false;
	}

	/**
	 * You can override this method
	 * to set your own template path
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
	 * Remove attribute from registered
	 * (should be called only inside get_attributes() method)
	 *
	 * @param  [type] $key [description]
	 *
	 * @return [type]      [description]
	 */
	public function unregister_attribute( $key ) {
		$this->_unregistered[] = $key;
	}

	public function unregister_attributes( $keys = array() ) {
		$this->_unregistered = array_merge(
			$this->_unregistered,
			$keys
		);
	}


	/**
	 * Returns full block name
	 *
	 * @return [type] [description]
	 */
	public function block_name() {
		return jet_form_builder()->form::NAMESPACE_FIELDS . $this->get_name();
	}

	/**
	 * Returns default class name for the block
	 *
	 * @return [type] [description]
	 */
	public function block_class_name() {
		return 'jet-form-' . $this->get_name();
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
	 * Returns attra from input array if not isset, get from defaults
	 *
	 * @param string $attr
	 * @param array $all
	 *
	 * @return mixed|string [type] [description]
	 */
	public function get_attr( $attr = '', $all = array() ) {
		if ( isset( $all[ $attr ] ) ) {
			return $all[ $attr ];
		} else {
			$defaults = $this->block_attributes();

			return isset( $defaults[ $attr ]['default'] ) ? $defaults[ $attr ]['default'] : '';
		}
	}

	/**
	 * Returns all block attributes list (custom + general + system)
	 *
	 * @param bool $with_styles
	 *
	 * @return array [type] [description]
	 */
	public function block_attributes() {

		/**
		 * Set default blocks attributes to avoid errors
		 */
		$this->attrs['className'] = array(
			'type'    => 'string',
			'default' => '',
		);

		if ( ! empty( $this->_unregistered ) ) {
			foreach ( $this->_unregistered as $key ) {
				unset( $this->attrs[ $key ] );
			}
		}

		return $this->attrs;

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

	/**
	 * Allow to filter raw attributes from block type instance to adjust JS and PHP attributes format
	 *
	 * @param  [type] $attributes [description]
	 *
	 * @return [type]             [description]
	 */
	public function prepare_attributes( $attributes ) {
		return $attributes;
	}

	public function general_field_name_params( $label = '', $help = '' ) {
		return array(
			'type'  => 'text',
			'label' => $label ? $label : __( 'Form field name', 'jet-form-builder' ),
			'help'  => $help ? $help : __( 'Should contain only Latin letters, numbers, `-` or `_` chars, no spaces only lower case', 'jet-form-builder' )
		);
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


}
