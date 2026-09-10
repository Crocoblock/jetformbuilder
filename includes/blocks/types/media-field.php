<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Module;
use Jet_Form_Builder\Blocks\Render\Media_Field_Render;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Plugin;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Media_Field extends Base {

	const HANDLE       = 'jet-fb-media-field';
	const RESTRICTIONS = self::HANDLE . '-restrictions';

	protected $value_format    = 'url';
	protected $max_files       = 1;
	protected $max_size        = 1;
	protected $max_size_format = '';

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'media-field';
	}

	public function jsm_controls() {
		$wrap    = '{{WRAPPER}} .jet-form-builder-file-upload';
		$input   = $wrap . '__input';
		$button  = $input . '::file-selector-button';
		$file    = $wrap . '__file';
		$message = $wrap . '__message';

		$this->media_style_section( 'layout', __( 'Media Layout', 'jet-form-builder' ) );
		$this->media_style_choose( 'position', __( 'Upload Button Position', 'jet-form-builder' ), array(
			'"fields" "content" / minmax(0, 1fr)' => __( 'Top', 'jet-form-builder' ),
			'"content" "fields" / minmax(0, 1fr)' => __( 'Bottom', 'jet-form-builder' ),
			'"fields content" / auto minmax(0, 1fr)' => __( 'Left', 'jet-form-builder' ),
			'"content fields" / minmax(0, 1fr) auto' => __( 'Right', 'jet-form-builder' ),
		), array(
			$wrap => 'display: grid; grid-template: {{VALUE}};',
			$wrap . '__fields' => 'grid-area: fields; min-width: 0;',
			$wrap . '__content' => 'grid-area: content; min-width: 0;',
			$message => 'grid-column: 1 / -1;',
			$wrap . '__errors' => 'grid-column: 1 / -1;',
		) );
		$this->media_style_range( 'layout_gap', __( 'Gap', 'jet-form-builder' ), array( $wrap => 'gap: {{VALUE}}{{UNIT}};' ) );
		$this->media_style_choose( 'alignment', __( 'Vertical Alignment', 'jet-form-builder' ), array(
			'start' => __( 'Top', 'jet-form-builder' ),
			'center' => __( 'Center', 'jet-form-builder' ),
			'end' => __( 'Bottom', 'jet-form-builder' ),
		), array( $wrap => 'align-items: {{VALUE}};' ) );
		$this->controls_manager->end_section();

		$this->media_style_section( 'button', __( 'Upload Button', 'jet-form-builder' ) );
		$this->media_style_range( 'button_width', __( 'Width', 'jet-form-builder' ), array(
			$button => 'width: {{VALUE}}{{UNIT}}; max-width: 100%; box-sizing: border-box;',
			$wrap . '__fields' => 'width: {{VALUE}}{{UNIT}};',
			$input => 'max-width: 100%;',
		) );
		$this->media_style_range( 'button_height', __( 'Height', 'jet-form-builder' ), array( $button => 'height: {{VALUE}}{{UNIT}};' ) );
		$this->media_style_control( 'button_padding', 'dimensions', __( 'Padding', 'jet-form-builder' ), $button, 'padding: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};' );
		$this->media_style_typography( 'button_typography', $button );
		$this->media_style_control( 'button_border', 'border', __( 'Border', 'jet-form-builder' ), $button, 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};' );
		$this->controls_manager->start_tabs( 'style_controls', array( 'id' => 'media_button_states' ) );
		foreach ( array( 'normal' => __( 'Normal', 'jet-form-builder' ), 'hover' => __( 'Hover', 'jet-form-builder' ), 'focus' => __( 'Focus', 'jet-form-builder' ) ) as $state => $label ) {
			$this->controls_manager->start_tab( 'style_controls', array( 'id' => 'media_button_' . $state, 'title' => $label ) );
			$selector = $button;
			if ( 'hover' === $state ) {
				$selector = $input . ':hover::file-selector-button';
			} elseif ( 'focus' === $state ) {
				$selector = $input . ':focus-visible::file-selector-button';
			}
			$this->media_style_control( 'button_' . $state . '_color', 'color-picker', __( 'Text Color', 'jet-form-builder' ), $selector, 'color: {{VALUE}};' );
			$this->media_style_control( 'button_' . $state . '_background', 'color-picker', __( 'Background', 'jet-form-builder' ), $selector, 'background-color: {{VALUE}};' );
			$this->media_style_control( 'button_' . $state . '_border_color', 'color-picker', __( 'Border Color', 'jet-form-builder' ), $selector, 'border-color: {{VALUE}};' );
			$this->controls_manager->end_tab();
		}
		$this->controls_manager->end_tabs();
		$this->controls_manager->end_section();

		$this->media_style_section( 'preview', __( 'File Preview', 'jet-form-builder' ) );
		$this->media_style_range( 'preview_width', __( 'Width', 'jet-form-builder' ), array(
			$file => 'width: {{VALUE}}{{UNIT}}; box-sizing: border-box;',
			$wrap . ' .sortable-placeholder' => 'width: {{VALUE}}{{UNIT}}; flex-basis: {{VALUE}}{{UNIT}};',
			$wrap . '__content' => 'min-width: {{VALUE}}{{UNIT}};',
		) );
		$this->media_style_range( 'preview_height', __( 'Height', 'jet-form-builder' ), array(
			$file => 'height: {{VALUE}}{{UNIT}}; box-sizing: border-box;',
			$wrap . ' .sortable-placeholder' => 'height: {{VALUE}}{{UNIT}};',
			$wrap . '__content' => 'min-height: {{VALUE}}{{UNIT}};',
		) );
		// Keep the sortable placeholder and the loading overlay aligned with the cards.
		$this->media_style_range( 'preview_column_gap', __( 'Horizontal Gap', 'jet-form-builder' ), array(
			$wrap . '__files' => 'column-gap: {{VALUE}}{{UNIT}};',
			$file => 'margin-right: 0;',
			$wrap . ' .sortable-placeholder' => 'margin-right: 0;',
			$wrap . '__loader' => 'right: 0;',
		) );
		$this->media_style_range( 'preview_row_gap', __( 'Vertical Gap', 'jet-form-builder' ), array(
			$wrap . '__files' => 'row-gap: {{VALUE}}{{UNIT}};',
			$file => 'margin-bottom: 0;',
			$wrap . ' .sortable-placeholder' => 'margin-bottom: 0;',
			$wrap . '__loader' => 'bottom: 0;',
		) );
		$this->media_style_control( 'preview_border', 'border', __( 'Border', 'jet-form-builder' ), $file, 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};' );
		$this->media_style_choose( 'preview_clip', __( 'Clip Preview to Border', 'jet-form-builder' ), array(
			'hidden' => __( 'Yes', 'jet-form-builder' ),
			'visible' => __( 'No', 'jet-form-builder' ),
		), array( $file => 'overflow: {{VALUE}};' ) );
		$this->media_style_control( 'preview_background', 'color-picker', __( 'Background', 'jet-form-builder' ), $file, 'background-color: {{VALUE}};' );
		$this->media_style_choose( 'preview_fit', __( 'Image Fit', 'jet-form-builder' ), array(
			'cover' => __( 'Cover', 'jet-form-builder' ),
			'contain' => __( 'Contain', 'jet-form-builder' ),
		), array( $file . ' img' => 'object-fit: {{VALUE}};' ) );
		$this->controls_manager->end_section();

		$this->media_style_section( 'message', __( 'File Size Message', 'jet-form-builder' ) );
		$this->media_style_choose( 'message_display', __( 'Visibility', 'jet-form-builder' ), array(
			'block' => __( 'Show', 'jet-form-builder' ),
			'none' => __( 'Hide', 'jet-form-builder' ),
		), array( $message => 'display: {{VALUE}};' ) );
		$this->media_style_typography( 'message_typography', $message . ' small' );
		$this->media_style_control( 'message_color', 'color-picker', __( 'Text Color', 'jet-form-builder' ), $message, 'color: {{VALUE}};' );
		$this->media_style_control( 'message_margin', 'dimensions', __( 'Margin', 'jet-form-builder' ), $message, 'margin: {{TOP}} {{RIGHT}} {{BOTTOM}} {{LEFT}};' );
		$this->controls_manager->end_section();
	}

	private function media_style_section( $id, $title ) {
		$this->controls_manager->start_section( 'style_controls', array(
			'id' => 'media_' . $id . '_style',
			'title' => $title,
			'initialOpen' => false,
		) );
	}

	private function media_style_control( $id, $type, $label, $selector, $css ) {
		$this->controls_manager->add_control( array(
			'id' => 'media_' . $id,
			'type' => $type,
			'label' => $label,
			'is_responsive' => true,
			'css_selector' => array( $selector => $css ),
		) );
	}

	private function media_style_range( $id, $label, $selectors ) {
		$this->controls_manager->add_control( array(
			'id' => 'media_' . $id,
			'type' => 'range',
			'label' => $label,
			'is_responsive' => true,
			'units' => array( array( 'value' => 'px', 'intervals' => array( 'min' => 0, 'max' => 1000, 'step' => 1 ) ) ),
			'css_selector' => $selectors,
		) );
	}

	private function media_style_choose( $id, $label, $options, $selectors ) {
		foreach ( $options as $value => $title ) {
			$options[ $value ] = array( 'label' => $title, 'shortcut' => $title );
		}
		$this->controls_manager->add_control( array(
			'id' => 'media_' . $id,
			'type' => 'choose',
			'label' => $label,
			'is_responsive' => true,
			'options' => $options,
			'css_selector' => $selectors,
		) );
	}

	private function media_style_typography( $id, $selector ) {
		$this->media_style_control( $id, 'typography', __( 'Typography', 'jet-form-builder' ), $selector,
			'font-family: {{FAMILY}}; font-weight: {{WEIGHT}}; text-transform: {{TRANSFORM}}; font-style: {{STYLE}}; text-decoration: {{DECORATION}}; line-height: {{LINEHEIGHT}}{{LH_UNIT}}; letter-spacing: {{LETTERSPACING}}{{LS_UNIT}}; font-size: {{SIZE}}{{S_UNIT}};'
		);
	}

	public function get_field_name( $name = '' ) {
		$max_files = absint( $this->block_attrs['max_files'] ?? 1 );

		$suffix = '';
		if ( 1 < $max_files ) {
			$suffix = '[]';
		}

		return ( parent::get_field_name() . $suffix );
	}

	public function set_block_data( $attributes, $content = null, $wp_block = null ) {
		parent::set_block_data( $attributes, $content, $wp_block );

		$this->set_value_format();
		$this->set_max_files();
		$this->set_max_size();
	}

	protected function parse_preset( $preset ): array {
		if ( empty( $preset ) ) {
			return array();
		}

		if ( ! $this->is_both_format() ) {
			// is value format wrong
			if ( ! is_string( $preset ) && ! is_numeric( $preset ) ) {
				if ( is_array( $preset ) ) {
					return $preset;
				}
				return array();
			}
			$preset = (string) $preset;

			return explode( ',', str_replace( ', ', ',', $preset ) );
		}

		// is it multiple media
		$response = isset( $preset['id'] ) ? array( $preset ) : $preset;

		return is_array( $response ) ? $response : array( $response );
	}

	public function expected_preset_type(): array {
		return array( self::PRESET_EXACTLY );
	}

	public function get_default_from_preset( $attributes = array() ): array {
		$preset = parent::get_default_from_preset( $attributes );
		$value  = $this->parse_preset( $preset );
		$files  = array();

		foreach ( $value as $item ) {

			switch ( $this->get_value_format() ) {
				case 'id':
					$files[] = array(
						'url' => wp_get_attachment_url( $item ),
						'id'  => $item,
					);
					break;

				case 'both':
					if ( is_array( $item ) && isset( $item['url'] ) && isset( $item['id'] ) ) {
						$files[] = array(
							'url' => $item['url'],
							'id'  => $item['id'],
						);
					}
					break;

				case 'ids':
					$files[] = array(
						'url' => wp_get_attachment_url( $item ),
						'id'  => $item,
					);
					break;

				default:
					$files[] = array(
						'url' => $item,
					);
					break;
			}
		}

		return $files;
	}

	public function register_block_type() {
		parent::register_block_type();

		add_action( 'wp_enqueue_scripts', array( $this, 'register_scripts' ) );

		/**
		 * @link https://github.com/Crocoblock/issues-tracker/issues/1542
		 */
		add_action( 'jet_plugins/frontend/register_scripts', array( $this, 'register_scripts' ) );
	}

	public function register_scripts() {
		$script_asset = require_once jet_form_builder()->plugin_dir(
			'assets/build/frontend/media.field.asset.php'
		);

		if ( true === $script_asset ) {
			return;
		}

		array_push(
			$script_asset['dependencies'],
			Module::MAIN_SCRIPT_HANDLE,
			'jet-form-builder-sortable'
		);

		wp_register_script(
			'jet-form-builder-sortable',
			Plugin::instance()->plugin_url( 'assets/lib/jquery-sortable/sortable.js' ),
			array(),
			Plugin::instance()->get_version(),
			true
		);
		wp_register_script(
			self::HANDLE,
			Plugin::instance()->plugin_url( 'assets/build/frontend/media.field.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);

		$script_asset = require_once jet_form_builder()->plugin_dir(
			'assets/build/frontend/media.field.restrictions.asset.php'
		);

		array_push(
			$script_asset['dependencies'],
			\JFB_Modules\Validation\Module::HANDLE
		);

		wp_register_script(
			self::RESTRICTIONS,
			Plugin::instance()->plugin_url( 'assets/build/frontend/media.field.restrictions.js' ),
			$script_asset['dependencies'],
			$script_asset['version'],
			true
		);
	}

	/**
	 * Returns current block render instatnce
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		$render = ( new Media_Field_Render( $this ) )->render();

		if ( Tools::is_editor() ) {
			return $render;
		}

		wp_enqueue_script( self::HANDLE );

		/** @var \JFB_Modules\Validation\Module $module */
		/** @noinspection PhpUnhandledExceptionInspection */
		$module = jet_form_builder()->module( 'validation' );

		if ( $module->is_advanced( $this->block_attrs ) ) {
			wp_enqueue_script( self::RESTRICTIONS );
		}

		return $render;
	}

	public function get_max_size_message(): string {
		$on_empty = 'Maximum file size: %max_size%';
		$message  = $this->block_attrs['validation']['messages']['max_size'] ?? $on_empty;

		if ( empty( $message ) ) {
			$message = $on_empty;
		}

		return str_replace( '%max_size%', size_format( $this->get_max_size() ), $message );
	}

	public function block_data( $editor, $handle ) {
		wp_localize_script(
			$handle,
			'jetFormMediaFieldData',
			array(
				'mime_types' => Tools::get_allowed_mimes_list_for_js(),
			)
		);
	}

	public function get_value_format(): string {
		return $this->value_format;
	}

	public function get_max_files(): int {
		return $this->max_files;
	}

	public function is_both_format(): bool {
		return 'both' === $this->value_format;
	}

	/**
	 * @return int
	 */
	public function get_max_size(): int {
		return $this->max_size;
	}

	protected function set_max_size() {
		$size_in_mb = $this->block_attrs['max_size'] ?? false;

		if ( ! is_numeric( $size_in_mb ) ) {
			$this->max_size = wp_max_upload_size();

			return;
		}

		$this->max_size = ( MB_IN_BYTES * $size_in_mb );
	}

	protected function set_value_format() {
		if ( ! empty( $this->block_attrs['insert_attachment'] ) ) {
			$this->value_format = $this->block_attrs['value_format'] ?? 'url';
		}
	}

	protected function set_max_files() {
		$max_files = $this->block_attrs['max_files'] ?? 1;

		$this->max_files = empty( $max_files ) ? 1 : (int) $max_files;
	}


}
