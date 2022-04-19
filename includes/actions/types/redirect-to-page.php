<?php

namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Classes\Macros_Parser;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;
use phpDocumentor\Reflection\Types\False_;

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
				'default' => '',
			),
			'redirect_url'  => array(
				'default' => '',
			),
			'redirect_args' => array(
				'default' => array(),
			),
		);
	}

	public function get_redirect_url() {
		$type = ! empty( $this->settings['redirect_type'] ) ? $this->settings['redirect_type'] : 'static_page';

		switch ( $type ) {
			case 'static_page':
				$to_page = $this->settings['redirect_page'] ?? '';

				return empty( $to_page ) ? false : get_permalink( $to_page );

			case 'current_page':
				return jet_fb_action_handler()->get_refer();

			case 'inserted_post':
				/** @var Insert_Post $insert_instance */
				try {
					$insert_instance = jet_form_builder()->actions->get_action( 'insert_post' );
				} catch ( Repository_Exception $exception ) {
					return false;
				}

				$context = $insert_instance->get_inserted_post_context();

				if ( ! $context ) {
					return false;
				}

				if ( 'insert' === $context['__action'] && 'publish' === $context['post_status'] ) {
					return get_permalink( $context['ID'] );
				}

				return false;

			default:
				$this->settings['redirect_url'] = $this->settings['redirect_url'] ?? false;

				$request = jet_fb_action_handler()->request_data;

				$to_url = ( new Dynamic_Preset() )->parse_value( $this->settings, 'redirect_url' );
				$parser = ( new Macros_Parser() )->set_replacements( $request );

				return $parser->parse_macros( $to_url );
		}
	}

	public function get_url_with_hash( $url ) {
		if ( empty( $this->settings['redirect_hash'] ) ) {
			return $url;
		}

		return trailingslashit( $url ) . '#' . $this->settings['redirect_hash'];
	}

	public function get_url_with_args( $url ) {
		if ( empty( $this->settings['redirect_args'] ) ) {
			return $url;
		}
		$redirect_args = array();
		$request       = jet_fb_action_handler()->request_data;

		foreach ( $this->settings['redirect_args'] as $arg ) {
			$redirect_args[ $arg ] = ! empty( $request[ $arg ] ) ? $request[ $arg ] : 0;
		}

		return add_query_arg( $redirect_args, $url );
	}

	public function get_completed_redirect_url( $url = '' ) {
		if ( ! $url ) {
			$url = $this->get_redirect_url();
		}
		$url = $this->get_url_with_hash( $url );

		return $this->get_url_with_args( $url );
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return mixed|void
	 * @throws Action_Exception
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$to_url = $this->get_redirect_url();

		if ( ! $to_url ) {
			throw new Action_Exception( 'failed', $this->settings );
		}

		$to_url = $this->get_completed_redirect_url( $to_url );

		$handler->response_data['redirect'] = $to_url;
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
			'redirect_hash' => __( 'Add hash to the redirect URL:', 'jet-form-builder' ),
		);
	}

	/**
	 * Register custom action data for the editor
	 *
	 * @return mixed|void [description]
	 */
	public function action_data() {
		return apply_filters(
			"jet-form-builder/action/{$this->get_id()}/editor-data",
			array(
				'pages'          => Tools::with_placeholder( Tools::get_pages_list_for_js() ),
				'redirect_types' => $this->get_redirect_types(),
			)
		);
	}

	public function get_redirect_types(): array {
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
				'label' => __( 'Inserted post', 'jet-form-builder' ),
			),
		);
	}


}


