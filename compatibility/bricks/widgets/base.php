<?php


namespace JFB_Compatibility\Bricks\Widgets;

use Bricks\Element;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Base extends Element {

	/**
	 * Use predefined element category 'general'
	 *
	 * @var string
	 */
	public $category = 'general';
	/**
	 * Make sure to prefix your elements
	 *
	 * @var string
	 */
	public $name = '';
	/**
	 * Themify icon font class
	 *
	 * @var string
	 */
	public $icon = 'ti-bolt-alt';
	/**
	 * Default CSS selector
	 *
	 * @var string
	 */
	public $css_selector = '';
	/**
	 * Script(s) run when element is rendered on frontend or updated in builder
	 *
	 * @var array
	 */
	public $scripts = array();

	public $current_jet_group = null;
	public $current_jet_tab   = null;

	public $jet_element_render_instance;
	public $jet_element_render = '';

	// Return localised element label
	public function get_label() {
		return 'Test';
	}

	/**
	 * Register new control group
	 * You can't add elements into new groups without registering these groups before
	 *
	 * @param  [type] $name [description]
	 * @param  array  $data [description]
	 * @return [type]       [description]
	 */
	public function register_jet_control_group( $name, $data = array() ) {
		$this->control_groups[ $name ] = $data;
	}

	/**
	 * Start controls group (aka Sections in Elementor)
	 *
	 * @param  [type] $group [description]
	 * @return [type]        [description]
	 */
	public function start_jet_control_group( $group ) {
		$data                  = isset( $this->control_groups[ $group ] ) ? $this->control_groups[ $group ] : array();
		$this->current_jet_tab = isset( $data['tab'] ) ? $data['tab'] : 'content';

		$this->current_jet_group = $group;
	}

	/**
	 * End controls grous
	 *
	 * @return [type] [description]
	 */
	public function end_jet_control_group() {
		$this->current_jet_tab   = null;
		$this->current_jet_group = null;
	}

	/**
	 * Wrapper to register control
	 *
	 * @param  [type] $name [description]
	 * @param  array  $data [description]
	 * @return [type]       [description]
	 */
	public function register_jet_control( $name, $data = array() ) {
		if ( ! $this->current_jet_tab ) {
			$this->current_jet_tab = 'content';
		}

		$data['tab']   = $this->current_jet_tab;
		$data['group'] = $this->current_jet_group;

		$this->controls[ $name ] = $data;
	}

	public function get_jet_settings( $setting = null, $default_value = false ) {

		if ( ! $setting ) {
			return $this->settings;
		}

		$value = null;

		if ( isset( $this->settings[ $setting ] ) ) {
			$value = $this->settings[ $setting ];
		} else {
			$value = isset( $this->controls[ $setting ] ) && isset( $this->controls[ $setting ]['default'] ) ? $this->controls[ $setting ]['default'] : $default_value;
		}

		return $value;
	}

	public function parse_jet_render_attributes( $attrs = array() ) {
		return apply_filters( 'jet-form-builder/bricks/element/parsed-attrs', $attrs, $this );
	}

	// Set builder control groups
	public function set_control_groups() {
	}

	// Set builder controls
	public function set_controls() {
	}

	// Enqueue element styles and scripts
	public function enqueue_scripts() {
	}

	// Render element HTML
	public function render() {
		// $this->set_attribute( '_root', 'data-is-block', 'jet-engine/' . $this->jet_element_render );
	}
}
