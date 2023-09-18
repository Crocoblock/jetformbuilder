<?php

namespace JFB_Compatibility\Bricks\Widgets;
var_dump('Form');

//use Bricks\Element;
//use Jet_Form_Builder\Blocks\Modules\General_Style_Functions;
//use Jet_Form_Builder\Classes\Arguments\Form_Arguments;
//use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form extends Base {

//	use General_Style_Functions;

	// Element properties
	public $category     = 'jet-form-builder'; // Use predefined element category 'general'
	public $name         = 'jet-form-builder-form'; // Make sure to prefix your elements
	public $icon         = 'jet-form-builder-icon--form'; // Themify icon font class
	public $css_selector = ''; // Default CSS selector
	public $scripts      = []; // Script(s) run when element is rendered on frontend or updated in builder

	// Return localised element label
	public function get_label() {
		return esc_html__( 'JetForm', 'jet-engine' );
	}

	// Set builder controls
	public function set_controls() {
//		$this->start_jet_control_group( 'general' );
	}

	// Enqueue element styles and scripts
	public function enqueue_scripts() {
	}

	/**
	 * Render the widget output on the frontend.
	 *
	 * Written in PHP and used to generate the final HTML.
	 *
	 * @since 1.1.0
	 *
	 * @access protected
	 */
//	protected function render() {
//		$settings = $this->get_settings_for_display();

		// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
//		echo jet_fb_render_form( $settings );
//	}


}
