<?php
namespace Crocoblock\Blocks_Style;

/**
 * Block handler class
 *
 * @since 1.0.0
 */
class Block {

	/**
	 * Block name
	 *
	 * @var string
	 */
	protected $name;

	/**
	 * Block attributes
	 *
	 * @var array
	 */
	protected $attributes;

	/**
	 * Block styles
	 *
	 * @var array
	 */
	protected $styles;

	/**
	 * Block controls stack
	 *
	 * @var array
	 */
	protected $controls_stack = array(
		'children' => array(),
	);

	/**
	 * Whether the block is rendered via REST API.
	 *
	 * @var bool
	 */
	protected $is_rest_render = false;

	/**
	 * Currently processed section for registration.
	 */
	protected $_current_section = null;

	/**
	 * Currently processed tabs for registration.
	 */
	protected $_current_tabs = null;

	/**
	 * Currently processed tab for registration.
	 */
	protected $_current_tab = null;

	protected $css_props = array();

	protected $defaults = null;

	/**
	 * Constructor
	 *
	 * @param string $name Block name.
	 * @param array  $attributes Block attributes.
	 */
	public function __construct( $name, $attributes = array() ) {
		$this->name       = $name;
		$this->attributes = $attributes;

		add_filter(
			'rest_request_before_callbacks',
			array( $this, 'prevent_styles_on_self_render' ),
			10, 3
		);

		add_filter(
			'render_block_' . $this->get_block_name(),
			array( $this, 'render_block_styles' ),
			10, 3
		);
	}

	/**
	 * Set block attributes
	 *
	 * @param array $attributes Block attributes.
	 */
	public function set_attributes( $attributes ) {
		$this->attributes = array_merge( $this->attributes, $attributes );
	}

	/**
	 * Prevent styles from being rendered when there is a Rest API request
	 * to render the block itself.
	 *
	 * @param mixed $response The response object.
	 * @param mixed $handler The handler for the request.
	 * @param WP_REST_Request $request The request object.
	 * @return mixed
	 */
	public function prevent_styles_on_self_render( $response, $handler, $request ) {

		if ( strpos( $request->get_route(), '/wp/v2/block-renderer/' ) === 0 ) {
			$block_name = $request->get_param( 'name' );

			if ( ! $block_name ) {
				$route_parts = explode( '/', trim( $request->get_route(), '/' ) );
				$block_name = end( $route_parts );
			}

			if ( $block_name === $this->get_block_name() ) {
				/*remove_filter(
					'render_block_' . $this->get_block_name(),
					array( $this, 'render_block_styles' ),
					10, 3
				);*/
				$this->is_rest_render = true;
			}
		}

		return $response;
	}

	/**
	 * Render block styles
	 *
	 * @param string $block_content Block content.
	 * @param array  $block Block data.
	 * @param bool   $is_preview Is preview mode.
	 * @return string
	 */
	public function render_block_styles( $block_content, $parsed_block, $wp_block ) {

		if ( ! empty( $parsed_block['attrs'][ Registry::instance()->get_support_name() ] ) ) {

			if ( $this->is_rest_render ) {

				$block_class_name = Style_Engine::get_classname_from_attrs(
					$parsed_block['attrs'][ Registry::instance()->get_support_name() ]
				);

				$style_inserter = new Style_Inserter( $block_class_name, [] );

				return $style_inserter->with_class_name( $block_content );
			}

			$style_engine = new Style_Engine(
				$parsed_block['attrs'][ Registry::instance()->get_support_name() ],
				$this->css_props
			);

			$styles_data = Style_Cache::get_instance()->get_cached( $style_engine );

			$style_inserter = new Style_Inserter(
				$style_engine->get_class_name(),
				$styles_data
			);

			$block_content = $style_inserter->insert_styles( $block_content );

			if ( ! apply_filters( 'jet-styles-manager/block/force-print-styles', false, $this ) ) {
				Style_Cache::get_instance()->add_printed( $style_engine->get_class_name() );
			}
		}

		return $block_content;
	}

	/**
	 * Get block name
	 *
	 * @return string
	 */
	public function get_block_name() {
		return $this->name;
	}

	/**
	 * Get currently registered controls.
	 *
	 * @return array
	 */
	public function get_controls_stack() {
		return $this->controls_stack['children'];
	}

	/**
	 * Get default values for the registered controls,
	 * if there were any.
	 *
	 * @return array|null
	 */
	public function get_defaults() {
		return $this->defaults;
	}

	/**
	 * Whether to register full controls or only CSS-render-related.
	 *
	 * @return bool
	 */
	public function should_register_full_controls() {
		return is_admin();
	}

	/**
	 * Start a new section for block styles
	 *
	 * @param array $args
	 * @return void
	 */
	public function start_section( $args = array() ) {

		if ( ! $this->should_register_full_controls() ) {
			return;
		}

		if ( ! isset( $args['id'] ) ) {
			_doing_it_wrong(
				'Blocks_Style\Proxy::start_section',
				'Section id is required.',
				'1.0.0'
			);
			return;
		}

		$section_id = $args['id'];

		$this->_current_section = $section_id;

		if ( ! isset( $this->controls_stack['children'][ $this->_current_section ] ) ) {
			$this->controls_stack['children'][ $this->_current_section ] = $args;
			$this->controls_stack['children'][ $this->_current_section ]['children'] = array();
		}
	}

	/**
	 * End the current section
	 *
	 * @return void
	 */
	public function end_section() {

		if ( ! $this->should_register_full_controls() ) {
			return;
		}

		$this->_current_section = null;
	}

	/**
	 * Add a new control to the current section
	 *
	 * @param array $args
	 * @return void
	 */
	public function add_control( $args = array() ) {

		if ( ! $this->should_register_full_controls() ) {

			$control_id = ! empty( $args['id'] ) ? $args['id'] : false;

			$this->css_props[ $control_id ] = array(
				'type'         => ! empty( $args['type'] ) ? $args['type'] : 'text',
				'css_var'      => ! empty( $args['css_var'] ) ? $args['css_var'] : array(),
				'css_selector' => ! empty( $args['css_selector'] ) ? $args['css_selector'] : array(),
			);

			return;
		}

		if ( ! $this->_current_section ) {

			_doing_it_wrong(
				'Block::add_control',
				'You must call start_section() before adding controls.',
				'1.0.0'
			);

			return;
		}

		$control_id = ! empty( $args['id'] ) ? $args['id'] : false;

		if ( ! $control_id ) {
			_doing_it_wrong(
				'Block::add_control',
				'You must provide a control `id` parameter.',
				'1.0.0'
			);

			return;
		}

		// Ensure correct format of CSS variable prop
		$css_var = ! empty( $args['css_var'] ) ? (array) $args['css_var'] : array();

		if ( ! empty( $css_var ) ) {

			$css_var = array_merge(
				array(
					'prefix' => '--csm',
					'name'   => $control_id,
				),
				$css_var
			);

			$args['css_var'] = $css_var;
		}

		if ( $this->_current_tabs && $this->_current_tab ) {
			$this->register_children(
				array( $this->_current_section, $this->_current_tabs, $this->_current_tab ),
				$control_id,
				$args
			);
		} else {
			$this->register_children(
				array( $this->_current_section ),
				$control_id,
				$args
			);
		}

		if ( ! empty( $args['default'] ) ) {

			if ( is_null( $this->defaults ) ) {
				$this->defaults = array();
			}

			$this->defaults[ $control_id ] = $args['default'];
		}

		$this->css_props[ $control_id ] = array(
			'type'         => ! empty( $args['type'] ) ? $args['type'] : 'text',
			'css_var'      => ! empty( $args['css_var'] ) ? $args['css_var'] : array(),
			'css_selector' => ! empty( $args['css_selector'] ) ? $args['css_selector'] : array(),
		);
	}

	/**
	 * Start tabs group
	 *
	 * @param array $args
	 * @return void
	 */
	public function start_tabs( $args = array() ) {

		if ( ! $this->should_register_full_controls() ) {
			return;
		}

		if ( ! empty( $args['id'] ) ) {
			$id = $args['id'];
		} else {
			_doing_it_wrong(
				'Block::start_tabs',
				'You must provide a tabs `id` parameter.',
				'1.0.0'
			);
			return;
		}

		$this->_current_tabs = $id;

		$args['type'] = 'tabs';

		$this->register_children(
			array( $this->_current_section ),
			$this->_current_tabs,
			$args
		);
	}

	/**
	 * Start a new tab
	 *
	 * @param array $args
	 * @return void
	 */
	public function start_tab( $args = array() ) {

		if ( ! $this->should_register_full_controls() ) {
			return;
		}

		if ( ! empty( $args['id'] ) ) {
			$id = $args['id'];
		} else {
			_doing_it_wrong(
				'Block::start_tab',
				'You must provide a tabs `id` parameter.',
				'1.0.0'
			);
			return;
		}

		$this->_current_tab = $id;

		$args['type'] = 'tab';

		$this->register_children(
			array( $this->_current_section, $this->_current_tabs ),
			$this->_current_tab,
			$args
		);
	}

	/**
	 * End tabs group
	 *
	 * @return void
	 */
	public function end_tabs() {

		if ( ! $this->should_register_full_controls() ) {
			return;
		}

		$this->_current_tabs = null;
		$this->_current_tab   = null;
	}

	/**
	 * End the current tab
	 *
	 * @return void
	 */
	public function end_tab() {

		if ( ! $this->should_register_full_controls() ) {
			return;
		}

		$this->_current_tab = null;
	}

	/**
	 * Register children controls recursively
	 *
	 * This method registers child controls under the specified parent trace.
	 *
	 * @param array  $parents_trace Array of parent keys representing the trace.
	 *                              Example: ['section1', 'tabs1', 'tab1'].
	 *                              Each key must be a non-empty string.
	 * @param string $control_id    The control ID. Must be a unique, non-empty string.
	 *                              Example: 'control1'.
	 * @param array  $args          The control arguments. Should include control-specific
	 *                              settings such as 'type', 'label', etc.
	 *                              Example: ['type' => 'text', 'label' => 'Enter text'].
	 * @return void
	 */
	public function register_children( $parents_trace, $control_id, $args ) {

		// Validate $parents_trace to ensure it contains valid keys
		if ( ! is_array( $parents_trace ) || empty( $parents_trace ) ) {
			_doing_it_wrong(
				'Block::register_children',
				'The $parents_trace parameter must be a non-empty array of valid keys.',
				'1.0.0'
			);
			return;
		}

		// Validate $control_id to ensure it's a non-empty string
		if ( ! is_string( $control_id ) || empty( $control_id ) ) {
			_doing_it_wrong(
				'Block::register_children',
				'The $control_id parameter must be a non-empty string.',
				'1.0.0'
			);
			return;
		}

		// Validate $args to ensure it's an array
		if ( ! is_array( $args ) || empty( $args ) ) {
			_doing_it_wrong(
				'Block::register_children',
				'The $args parameter must be a non-empty array.',
				'1.0.0'
			);
			return;
		}

		$controls = &$this->controls_stack;

		foreach ( $parents_trace as $parent ) {

			if ( ! isset( $controls['children'][ $parent ] ) ) {
				_doing_it_wrong(
					'Block::register_children',
					"Parent control `$parent` not found in the controls stack.",
					'1.0.0'
				);
				return;
			}

			$controls = &$controls['children'][ $parent ];

			if ( ! isset( $controls['children'] ) ) {
				$controls['children'] = array();
			}

			// Check if is last parent in the trace and register the control
			if ( end( $parents_trace ) === $parent ) {
				$controls['children'][ $control_id ] = $args;
			}
		}
	}
}