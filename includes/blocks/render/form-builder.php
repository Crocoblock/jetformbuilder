<?php

namespace Jet_Form_Builder\Blocks\Render;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use Jet_Form_Builder\Blocks\Module;
use Jet_Form_Builder\Classes\Arguments\Form_Arguments;
use Jet_Form_Builder\Classes\Attributes_Trait;
use Jet_Form_Builder\Classes\Builder_Helper;
use Jet_Form_Builder\Classes\Compatibility;
use Jet_Form_Builder\Classes\Get_Template_Trait;
use Jet_Form_Builder\Classes\Http\Http_Tools;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Plugin;
use JET_SM\Gutenberg\Style_Manager;

// If this file is called directly, abort.

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Form builder class
 */
class Form_Builder {

	use Attributes_Trait;
	use Get_Template_Trait;

	public $form_id;
	public $post;
	public $args = array();

	private $form_content;

	/**
	 * Constructor for the class
	 *
	 * @param null $form_id
	 * @param array $args
	 */
	public function __construct( $form_id = null, $args = array() ) {

		if ( ! $form_id ) {
			return;
		}
		$this->form_id = $form_id;
		$this->set_form_args( $args );
	}

	/**
	 * Render from HTML
	 *
	 * @return false|string [type] [description]
	 */
	public function render_form() {

		if ( $this->pre_render() ) {
			return '';
		}

		if ( ! jet_fb_preset( $this->form_id )->general()->sanitize_source() ) {
			echo 'You are not permitted to submit this form!';

			return '';
		}

		$blocks = Live_Form::instance()
							->set_form_id( $this->form_id )
							->set_specific_data_for_render( $this->args )
							->setup_fields();

		$form = $this->start_form();

		$form .= Form_Hidden_Fields::render();

		$form .= jet_fb_live()->maybe_progress_pages();
		$form .= jet_fb_live()->maybe_start_page( true );

		foreach ( $blocks as $block ) {
			$form .= render_block( $block );
		}

		$form .= jet_fb_live()->maybe_end_page( true );
		$form .= $this->end_form();

		return $form;
	}


	/**
	 * @param $arguments
	 *
	 * @return Form_Builder
	 */
	public function set_form_args( $arguments ): Form_Builder {
		$this->args = array_intersect_key( $arguments, Form_Arguments::arguments() );

		$this->args['className'] = $arguments['className'] ?? '';
		$this->args['anchor']    = $arguments['anchor'] ?? '';

		return $this;
	}


	/**
	 * @return mixed|void
	 */
	public function pre_render() {
		return apply_filters( 'jet-form-builder/pre-render/' . $this->form_id, false );
	}

	/**
	 * Open form wrapper
	 *
	 * @return string [type] [description]
	 */
	public function start_form() {
		Plugin::instance()->blocks->enqueue_frontend_styles();

		$start_form = apply_filters( 'jet-form-builder/before-start-form', '', $this );

		$start_form .= $this->maybe_render_fonts_block();
		$start_form .= $this->render_styles();

		$base_classes = sprintf(
			'jet-form-builder layout-%1$s submit-type-%2$s',
			jet_fb_live_args()->fields_layout,
			jet_fb_live_args()->submit_type
		);

		/**
		 * We use form builder methods to add attributes, as the form can be displayed
		 * not only with the Gutenberg block, but also with a third-party builder widget
		 */
		$this->add_attribute( 'id', $this->args['anchor'] );
		$this->add_attribute( 'class', $base_classes );
		$this->add_attribute( 'action', Http_Tools::get_form_action_url() );
		$this->add_attribute( 'method', \WP_REST_Server::CREATABLE );
		$this->add_attribute( 'data-form-id', $this->form_id );
		$this->add_attribute( 'data-layout', jet_fb_live_args()->fields_layout );
		$this->add_attribute( 'enctype', 'multipart/form-data' );
		$this->add_attribute( 'data-validation-type', jet_fb_live_args()->validation_type );
		$this->add_attribute( 'data-clear', jet_fb_live_args()->clear ? 1 : '' );
		$this->add_attribute( 'novalidate' );

		$options_tab = Tab_Handler_Manager::instance()->tab( 'options-tab' );
		$options     = $options_tab->get_options();
		$method = $options['ssr_validation_method'] ?? 'rest';
		$this->add_attribute( 'ssr_validation_method', $method );


		/**
		 * Backward compatibility.
		 * We leave only the basic ones in the classes, because the value
		 * from className is added "from above"
		 *
		 * Without it, custom classes will be on the <form> tag and the outer <div>
		 */
		$this->add_attribute(
			'class',
			Compatibility::has_jet_sm() ? '' : $this->args['className']
		);

		$start_form .= sprintf(
			'<form %1$s>',
			$this->get_attributes_string()
		);

		$start_form .= apply_filters( 'jet-form-builder/after-start-form', '', $this );

		return $start_form;
	}

	public function end_form() {
		/** @var Module $blocks */
		/** @noinspection PhpUnhandledExceptionInspection */
		$blocks = jet_form_builder()->module( 'blocks' );

		$blocks->enqueue_frontend_assets();

		$end_form = apply_filters( 'jet-form-builder/before-end-form', '', $this );
		$form_id  = $this->form_id;

		ob_start();

		include $this->get_global_template( 'common/end-form.php' );

		$end_form .= ob_get_clean();

		$end_form .= apply_filters( 'jet-form-builder/after-end-form', '', $this );

		return $end_form;
	}

	private function render_styles(): string {
		if ( wp_doing_ajax() || ( defined( 'REST_REQUEST' ) && REST_REQUEST ) ) {
			return $this->get_inline_styles();
		}

		if ( Tools::is_elementor_editor() ) {
			return $this->get_inline_styles();
		}

		Builder_Helper::enqueue_global_styles();
		Builder_Helper::enqueue_style_form( $this->form_id );

		return '';
	}

	private function get_inline_styles(): string {
		return sprintf(
			'<style id="jet-form-builder-%s-inline-css">%s</style>',
			$this->form_id,
			Plugin::instance()->post_type->maybe_get_jet_sm_ready_styles( $this->form_id )
		);
	}


	private function maybe_render_fonts_block(): string {
		if (
			! Compatibility::has_jet_sm()
			|| ! method_exists( Style_Manager::get_instance(), 'get_blocks_fonts' )
		) {
			return '';
		}
		$fonts = Style_Manager::get_instance()->get_blocks_fonts( $this->form_id );

		if ( ! $fonts ) {
			return '';
		}

		$fonts = trim( $fonts, '"' );
		$fonts = wp_unslash( $fonts );

		return wp_kses(
			$fonts,
			array(
				'link' => array(
					'href' => true,
					'rel'  => true,
				),
			)
		);
	}

}
