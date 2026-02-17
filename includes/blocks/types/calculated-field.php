<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Manager;
use Jet_Form_Builder\Blocks\Render\Calculated_Field_Render;
use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Calculated_Field extends Base {

	const HANDLE = 'jet-fb-calculated-field';

	public function register_block_type() {
		parent::register_block_type();

		add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );
		add_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_scripts' ) );
	}

	public function register_scripts() {
		$script_asset = require_once jet_form_builder()->plugin_dir(
			'assets/build/frontend/calculated.field.asset.php'
		);

		if ( true === $script_asset ) {
			return;
		}

		array_push(
			$script_asset['dependencies'],
			Manager::MAIN_SCRIPT_HANDLE
		);

		wp_register_script(
			self::HANDLE,
			Plugin::instance()->plugin_url( 'assets/build/frontend/calculated.field.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	public function general_style_unregister() {
		return array( 'required' );
	}

	public function get_field_input() {
		return '-row .%1$s__calculated-field, {{WRAPPER}} .%1$s-row .%1$s__calculated-field--child, {{WRAPPER}} .jet-form-builder__calculated-field-val';
	}

	public function additional_selectors_for_controls() {
		return array(
			'input_alignment' => array(
				'options' => array(
					'flex-start' => array(
						'shortcut' => __( 'Left', 'jet-form-builder' ),
						'icon' => 'dashicons-editor-alignleft',
					),
					'center' => array(
						'shortcut' => __( 'Center', 'jet-form-builder' ),
						'icon' => 'dashicons-editor-aligncenter',
					),
					'flex-end' => array(
						'shortcut' => __( 'Right', 'jet-form-builder' ),
						'icon' => 'dashicons-editor-alignright',
					),
				),
				'css_selector' => array(
					$this->selector( 'input' ) => 'justify-content: {{VALUE}}; display: flex; width: 100%;',
				),

			),
		);
	}


	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'calculated-field';
	}

	public function render_row_layout() {
		return false;
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		wp_enqueue_script( self::HANDLE );

		$is_hidden = $this->block_attrs['calc_hidden'] ?? false;

		if ( $is_hidden ) {
			return ( new Calculated_Field_Render( $this ) )->render_without_layout();
		}

		return implode(
			"\n",
			array(
				$this->start_form_row( true ),
				( new Calculated_Field_Render( $this ) )->render(),
				$this->end_form_row( true ),
			)
		);
	}

	public function block_data( $editor, $handle ) {
		wp_localize_script(
			$handle,
			'JetFormCalculatedField',
			apply_filters(
				"jet-form-builder/field-data/{$this->get_name()}",
				array(
					'field_desc' => __(
						'
							Set math formula to calculate field value.<br/>
							For example:<br/><br/>
							%quantity% * %META::price%<br/><br/>
							Where:<br/>
							- %quantity% - macro for form field value. "quantity" - is a field name to get value from<br/>
							- %META::price% - macro for current post meta value. "price" - is a meta key to get value from<br/><br/>
						',
						'jet-form-builder'
					),
					'date_format' => __(
						'Note: if calculated result is used for dynamic value for another date, date-time or time field, you must use the following formats:<br/>
						* YYYY-MM-DD ( date field )<br/>
						* YYYY-MM-DD HH:mm ( date-time field )<br/>
						* HH:mm ( time field )<br/>
						<br/>
						Set date format to calculate field value.<br/>
						* YYYY — 4-digit year (2024)<br/>
						* MM   — month with leading zero (01–12)<br/>
						* M    — month without leading zero (1–12)<br/>
						* MMM  — abbreviated month name (Jan–Dec)<br/>
						* MMMM — full month name (January–December)<br/>
						* DD   — day of month with leading zero (01–31)<br/>
						* D    — day of month without leading zero (1–31)<br/>
						* HH   — hours with leading zero (00–23) in 24-hour format<br/>
						* H    — hours without leading zero (0–23) in 24-hour format<br/>
						* hh   — hours with leading zero (01–12) in 12-hour format<br/>
						* h    — hours without leading zero (1–12) in 12-hour format<br/>
						* mm   — minutes with leading zero (00–59)<br/>
						* m    — minutes without leading zero (0–59)<br/>
						* ss   — seconds with leading zero (00–59)<br/>
						* s    — seconds without leading zero (0–59)<br/>
						* dddd — full day of week name (Monday–Sunday)<br/>
						* ddd  — abbreviated day of week name (Mon–Sun)<br/>
						* A    — AM/PM designation<br/>
					',
						'jet-form-builder'
					),
				)
			)
		);
	}

}
