<?php

namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Redirect_To_Page extends Base {

	public function get_name() {
		return __( 'Redirect to Page', 'jet-form-builder' );
	}

	public function get_id() {
		return 'redirect_to_page';
	}

	public function action_attributes() {
		return array(
			'redirect_type' => array(
				'default' => '',
			),
			'redirect_page' => array(
				'default' => '',
			),
			'redirect_hash' => array(
				'default' => ''
			),
			'redirect_url'  => array(
				'default' => ''
			),
			'redirect_args' => array(
				'default' => array(),
			),
		);
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return mixed|void
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$type   = ! empty( $this->settings['redirect_type'] ) ? $this->settings['redirect_type'] : 'static_page';
		$to_url = false;

		switch ( $type ) {
			case 'static_page':
				$to_page = ! empty( $this->settings['redirect_page'] ) ? $this->settings['redirect_page'] : false;
				$to_url  = ! empty( $to_page ) ? get_permalink( $to_page ) : false;
				break;

			case 'current_page':
				$to_url = $request['__refer'];
				break;

			case 'inserted_post':
				/** @var Insert_Post $insert_instance */
				$insert_instance = jet_form_builder()->actions->get_actions( 'insert_post' );

				$context = $insert_instance->get_inserted_post_context();

				if ( ! $context ) {
					break;
				}

				if ( 'insert' === $context['__action'] && 'publish' === $context['post_status'] ) {
					$to_url = get_permalink( $context['ID'] );
				}

				break;

			default:
				$to_url = ! empty( $this->settings['redirect_url'] ) ? $this->settings['redirect_url'] : false;
				$to_url = apply_filters(
					"jet-form-builder/action/{$this->get_id()}/redirect/{$type}",
					$to_url, $this, $handler
				);
				break;
		}

		if ( ! $to_url ) {
			throw new Action_Exception( 'failed', $this->settings, $handler->context );
		} else {

			if ( ! empty( $this->settings['redirect_hash'] ) ) {
				$to_url = trailingslashit( $to_url ) . '#' . $this->settings['redirect_hash'];
			}

			if ( ! empty( $this->settings['redirect_args'] ) ) {

				$redirect_args = array();

				foreach ( $this->settings['redirect_args'] as $arg ) {
					$redirect_args[ $arg ] = ! empty( $request[ $arg ] ) ? $request[ $arg ] : 0;
				}

				$to_url = add_query_arg( $redirect_args, $to_url );

			}

			if ( ! $request['__is_ajax'] ) {
				wp_safe_redirect( $to_url );
				die();
			} else {
				$handler->response_data['redirect'] = $to_url;
			}
		}
	}

	public function self_script_name() {
		return 'jetFormRedirectToPageData';
	}

	public function visible_attributes_for_gateway_editor() {
		return array();
	}

	public function editor_labels() {
		return array(
			'redirect_type' => __( 'Redirect to:', 'jet-form-builder' ),
			'redirect_page' => __( 'Select page:', 'jet-form-builder' ),
			'redirect_url'  => __( 'Redirect URL:', 'jet-form-builder' ),
			'redirect_args' => __( 'Add query arguments to the redirect URL:', 'jet-form-builder' ),
			'redirect_hash' => __( 'Add hash to the redirect URL:', 'jet-form-builder' )
		);
	}

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data() {
		return apply_filters( "jet-form-builder/action/{$this->get_id()}/editor-data", array(
			'pages'          => Tools::get_pages_list_for_js(),
			'redirect_types' => $this->get_redirect_types(),
		) );
	}

	public function get_redirect_types() {
		return array(
			array(
				'value' => '',
				'label' => __( 'Select redirect to...', 'jet-form-builder' ),
			),
			array(
				'value' => 'static_page',
				'label' => __( 'Static Page', 'jet-form-builder' ),
			),
			array(
				'value' => 'custom_url',
				'label' => __( 'Custom URL', 'jet-form-builder' ),
			),
			array(
				'value' => 'current_page',
				'label' => __( 'Current Page', 'jet-form-builder' ),
			),
			array(
				'value' => 'inserted_post',
				'label' => __( 'Inserted post', 'jet-form-builder' )
			)
		);
	}


}


