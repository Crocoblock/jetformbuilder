<?php

namespace Jet_Form_Builder\Blocks\Types;

use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;
use Jet_Form_Builder\Blocks\Render\Form_Builder;
use Jet_Form_Builder\Classes\Arguments\Form_Arguments;
use Jet_Form_Builder\Classes\Builder_Helper;
use Jet_Form_Builder\Classes\Post\Not_Found_Post_Exception;
use Jet_Form_Builder\Classes\Post\Post_Tools;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Text field block class
 */
class Form extends Base {

	use Form_Break_Field_Style;

	public $use_style_manager = false;

	public function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'handle_header_assets' ) );
	}

	/**
	 * Render callback for the block
	 *
	 * @param array $attrs [description]
	 *
	 * @param null $content
	 * @param null $wp_block
	 *
	 * @return false|string [type]             [description]
	 */
	public function render_callback_field( array $attrs, $content = null, $wp_block = null ) {
		return sprintf(
			'<div class="jet-fb-form-block" data-is-block="jet-forms/%2$s">%1$s</div>',
			$this->render_form( $attrs, $content, $wp_block ),
			$this->get_name()
		);
	}

	public function get_placeholder(): string {
		return __( 'Please select form to show', 'jet-form-builder' );
	}

	public function get_name() {
		return 'form-block';
	}


	/**
	 * Returns current block render instatnce
	 *
	 * @param array $attributes
	 *
	 * @return false
	 */
	public function get_block_renderer( $attributes = null ) {
		return false;
	}

	public function block_data( $editor, $handle ) {
		$options = Form_Arguments::get_options();

		wp_localize_script(
			$handle,
			'JetFormData',
			array_merge(
				array(
					'forms_list' => Tools::with_placeholder(
						Tools::get_forms_list_for_js(),
						$this->get_placeholder()
					),
				),
				$options
			)
		);
	}

	/**
	 * Render callback for the block
	 *
	 * @param array $attrs [description]
	 *
	 * @param null $content
	 * @param null $wp_block
	 *
	 * @return false|string [type]             [description]
	 */
	public function render_form( array $attrs, $content = null, $wp_block = null ) {
		if ( ! empty( $attrs['form_id_custom'] ) ) {
			$attrs['form_id'] = $attrs['form_id_custom'];
		}

		$form_id = absint( $attrs['form_id'] ?? 0 );

		if ( ! $form_id ) {
			return $this->get_placeholder();
		}

		try {
			$form = Post_Tools::get_post( $form_id );
		} catch ( Not_Found_Post_Exception $exception ) {
			return $this->get_placeholder();
		}

		\Jet_Admin_Bar::get_instance()->register_item(
			$form_id,
			array(
				'title'     => get_the_title( $form ),
				'sub_title' => __( 'JetForm', 'jet-form-builder' ),
				'href'      => get_edit_post_link( $form ),
			)
		);

		jet_form_builder()->msg_router->set_up(
			array(
				'form_id' => $form_id,
			)
		);

		// phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores
		$custom_form = apply_filters( 'jet-form-builder/prevent-render-form', false, $attrs );

		if ( $custom_form ) {
			return $custom_form;
		}

		$form = ( new Form_Builder( $form_id, $attrs ) )->render_form();

		ob_start();
		jet_form_builder()->msg_router->get_builder()->render_messages();

		if ( Tools::is_editor() ) {
			jet_form_builder()->msg_router->get_builder()->render_messages_samples();
		}

		Render_State::instance()->clear_current();

		return ( $form . ob_get_clean() );
	}

	/**
	 * @since 3.0.4 Enqueue specific styles
	 * @since 3.0.3 Introduced
	 */
	public function handle_header_assets() {
		if ( ! is_singular() ) {
			return;
		}

		$post = get_post();

		$has_shortcode = has_shortcode( $post->post_content, 'jet_fb_form' );
		$has_block     = function_exists( 'has_block' ) && has_block( 'jet-forms/form-block' );

		if ( $has_block || $has_shortcode ) {
			jet_form_builder()->blocks->enqueue_frontend_styles();
			Builder_Helper::enqueue_global_styles();
		}

		$form_ids = array();

		if ( $has_block ) {
			$form_ids = jet_form_builder()->regexp->get_form_ids_from_block( $post->post_content );
		}
		if ( $has_shortcode ) {
			$form_ids = array_merge(
				$form_ids,
				jet_form_builder()->regexp->get_form_ids_from_shortcode( $post->post_content )
			);
		}

		foreach ( $form_ids as $form_id ) {
			jet_fb_live()->set_form_id( $form_id );
			Builder_Helper::enqueue_style_form( $form_id );
		}
		jet_fb_live()->set_form_id( false );
	}


}
