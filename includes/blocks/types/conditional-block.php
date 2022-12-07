<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Conditional_Block\Condition_Manager;
use Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field;
use Jet_Form_Builder\Blocks\Manager;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Form_Break;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Conditional_Block extends Base {

	const HANDLE = 'jet-fb-conditional-block';

	/**
	 * Returns block name
	 *
	 * @return [type] [description]
	 */
	public function get_name() {
		return 'conditional-block';
	}

	public function get_label_selector() {
		return '__label';
	}

	public function get_required_selector() {
		return '__label-text .%1$s__required';
	}

	public function get_description_selector() {
		return '__desc';
	}

	protected function jsm_controls() {
		$this->controls_manager->start_section(
			'style_controls',
			array(
				'id'    => 'conditional_wrapper_section',
				'title' => __( 'Wrapper', 'jet-form-builder' ),
			)
		);
		$this->add_margin_padding(
			$this->selector( '__conditional' ),
			array(
				'padding' => array(
					'id'        => 'style_padding',
					'separator' => 'after',
				),
				'margin'  => array(
					'id'        => 'style_margin',
					'separator' => 'after',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'style_border',
				'type'         => 'border',
				'separator'    => 'after',
				'label'        => __( 'Border', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( '__conditional' ) => 'border-style:{{STYLE}};border-width:{{WIDTH}};border-radius:{{RADIUS}};border-color:{{COLOR}};',
				),
			)
		);

		$this->controls_manager->add_control(
			array(
				'id'           => 'style_bg_color',
				'type'         => 'color-picker',
				'label'        => __( 'Background Color', 'jet-form-builder' ),
				'css_selector' => array(
					$this->selector( '__conditional' ) => 'background-color: {{VALUE}}',
				),
			)
		);

		$this->controls_manager->end_section();
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
		wp_register_script(
			self::HANDLE,
			Plugin::instance()->plugin_url( 'assets/js/frontend/conditional.block{min}.js' ),
			array(
				Manager::MAIN_SCRIPT_HANDLE,
			),
			Plugin::instance()->get_version(),
			true
		);
	}

	protected function render_field( array $attrs, $content = null, $wp_block = null ): string {
		if ( ! Live_Form::instance()->form_id ) {
			return '';
		}
		wp_enqueue_script( self::HANDLE );

		$this->set_block_data( $attrs, $content, $wp_block );

		$conditions = $this->get_conditions();
		$func_type  = $this->get_function();
		$content    = $this->block_content;
		$name       = $this->block_attrs['name'] ?? '';

		if ( Live_Form::instance()->isset_form_break( $name ) ) {
			$break = Live_Form::instance()->get_form_break( $name );

			$content = $break->maybe_start_page( true ) . $content . $break->maybe_end_page( true );
		}

		return sprintf(
			'<div class="jet-form-builder__conditional" data-jfb-conditional="%2$s" data-jfb-func="%3$s">%1$s</div>',
			$content,
			htmlspecialchars( wp_json_encode( $conditions ) ),
			esc_attr( $func_type )
		);
	}

	// Migration
	public function set_block_data( $attributes, $content = null, $wp_block = null ) {
		parent::set_block_data( $attributes, $content, $wp_block );

		$func_type  = $this->block_attrs['func_type'] ?? false;
		$conditions = $this->block_attrs['conditions'] ?? array();
		$parsed     = array();

		if ( ! count( $conditions ) || ! empty( $func_type ) ) {
			return;
		}

		usort( $conditions, function ( $current ) {
			return 'show' === $current['type'] ? - 1 : 1;
		} );

		foreach ( $conditions as $condition ) {
			$condition['type'] = $condition['type'] ?? '';

			if ( ! in_array( $condition['type'], array( 'show', 'hide' ), true ) ) {
				continue;
			}
			if ( empty( $func_type ) ) {
				$func_type = $condition['type'];
			}
			unset( $condition['type'] );

			if ( 'hide' === $func_type && ! empty( $parsed ) ) {
				$parsed[ $condition['field'] . '_or' ] = array(
					'or_operator' => true,
				);
			}

			$parsed[ $condition['field'] ] = $condition;
		}

		$this->block_attrs['func_type']  = $func_type;
		$this->block_attrs['conditions'] = array_values( $parsed );
	}

	/**
	 * @throws Render_Empty_Field
	 */
	protected function get_conditions(): array {
		return Condition_Manager::instance()->prepare(
			$this->block_attrs['conditions'] ?? array()
		);
	}

	protected function get_function(): string {
		$func_type = $this->block_attrs['func_type'] ?? '';

		try {
			Condition_Manager::instance()->get_functions()->isset_function( $func_type );
		} catch ( Repository_Exception $exception ) {
			return '';
		}

		return $func_type;
	}


	/**
	 * Returns current block render instance
	 *
	 * @param null $wp_block
	 *
	 * @return string
	 */
	public function get_block_renderer( $wp_block = null ) {
		return '';
	}
}
