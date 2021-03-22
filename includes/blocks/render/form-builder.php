<?php

namespace Jet_Form_Builder\Blocks\Render;


use Jet_Form_Builder\Classes\Attributes_Trait;
use Jet_Form_Builder\Classes\Get_Template_Trait;
use Jet_Form_Builder\Compatibility\Jet_Style_Manager;
use Jet_Form_Builder\File_Upload;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Plugin;
use Jet_Form_Builder\Presets\Preset_Manager;
use function Crontrol\Schedule\delete;

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
	 * @param bool $post
	 * @param array $args
	 */
	function __construct( $form_id = null, $post = false, $args = array() ) {

		if ( ! $form_id ) {
			return;
		}
		$this->form_id = $form_id;
		$this->set_form_args( $args );

		if ( empty( $post ) ) {
			$this->post = get_post();
		}

		$this->form_content = Plugin::instance()->form->get_form_content( $form_id );
	}

	/**
	 * @param $arguments
	 */
	public function set_form_args( $arguments ) {
		$this->args = array_intersect_key( $arguments, Plugin::instance()->post_type->get_default_args() );

		return $this;
	}


	/**
	 * Returns form action url
	 *
	 * @return [type] [description]
	 */
	public function get_form_action_url() {

		$action = add_query_arg(
			array(
				Plugin::instance()->form_handler->hook_key => Plugin::instance()->form_handler->hook_val,
			),
			home_url( '/' )
		);

		return apply_filters( 'jet-form-builder/form-action-url', $action, $this );

	}

	/**
	 * Returns form refer url
	 *
	 * @return [type] [description]
	 */
	public function get_form_refer_url() {

		global $wp;

		$refer = home_url( $wp->request );

		if ( ! empty( $_SERVER['QUERY_STRING'] ) ) {
			$refer = trailingslashit( $refer ) . '?' . $_SERVER['QUERY_STRING'];
		}

		return apply_filters( 'jet-form-builder/form-refer-url', $refer, $this );

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

		$start_form = apply_filters( 'jet-form-builder/before-start-form', '', $this );

		$this->add_attribute( 'class', 'jet-form-builder' );
		$this->add_attribute( 'class', 'layout-' . $this->args['fields_layout'] );
		$this->add_attribute( 'class', 'submit-type-' . $this->args['submit_type'] );
		$this->add_attribute( 'action', $this->get_form_action_url() );
		$this->add_attribute( 'method', 'POST' );
		$this->add_attribute( 'data-form-id', $this->form_id );
		$this->add_attribute( 'data-layout', $this->args['fields_layout'] );

		ob_start();
		echo $this->maybe_render_styles_block();

		include $this->get_global_template( 'common/start-form.php' );
		$start_form .= ob_get_clean();

		$start_form .= apply_filters( 'jet-form-builder/after-start-form', '', $this );

		return $start_form;
	}

	/**
	 * Close form wrapper
	 *
	 * @return string [type] [description]
	 */
	public function end_form() {

		$end_form = apply_filters( 'jet-form-builder/before-end-form', '', $this );
		$form_id  = $this->form_id;

		ob_start();

		if ( Plugin::instance()->captcha ) {
			Plugin::instance()->captcha->render( $this->form_id );
		}

		include $this->get_global_template( 'common/end-form.php' );

		Plugin::instance()->blocks->enqueue_frontend_assets();
		File_Upload::instance()->enqueue_scripts();

		$end_form .= ob_get_clean();

		$end_form .= apply_filters( 'jet-form-builder/after-end-form', '', $this );

		return $end_form;
	}


	/**
	 * Render from HTML
	 *
	 * @param bool $echo
	 *
	 * @return false|string [type] [description]
	 */
	public function render_form( $echo = true ) {

		if ( $this->pre_render() ) {
			return '';
		}

		if ( ! $this->preset()->sanitize_source() ) {
			echo 'You are not permitted to submit this form!';
			return '';
		}

		$form = $this->start_form();

		Live_Form::instance()
		         ->set_form_id( $this->form_id )
		         ->set_specific_data_for_render( $this->args )
		         ->setup_fields( $this->form_content );

		$form .= Live_Form::force_render_field( 'hidden-field',
			array(
				'field_value' => $this->form_id,
				'name'        => Plugin::instance()->form_handler->form_key,
			)
		);

		$form .= Live_Form::force_render_field( 'hidden-field',
			array(
				'field_value' => $this->get_form_refer_url(),
				'name'        => Plugin::instance()->form_handler->refer_key,
			)
		);
		$form .= Live_Form::force_render_field( 'hidden-field',
			array(
				'field_value' => Live_Form::instance()->post->ID,
				'name'        => Plugin::instance()->form_handler->post_id_key,
			)
		);
		$form .= Live_Form::instance()->maybe_progress_pages();

		$form .= Live_Form::instance()->maybe_start_page();

		$form .= do_blocks( $this->form_content );

		$form .= Live_Form::instance()->maybe_end_page( true );
		$form .= $this->end_form();

		Live_Form::clear();

		if ( $echo ) {
			echo $form;
		} else {
			return $form;
		}

	}

	public function preset() {
		Preset_Manager::instance()->set_form_id( $this->form_id );

		return Preset_Manager::instance();
	}

}


