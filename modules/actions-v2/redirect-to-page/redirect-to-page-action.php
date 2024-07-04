<?php

namespace JFB_Modules\Actions_V2\Redirect_To_Page;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Actions_V2\Insert_Post\Insert_Post_Action;
use JFB_Modules\Rich_Content;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Redirect_To_Page_Action extends Base {

	public function get_name() {
		return __( 'Redirect to Page', 'jet-form-builder' );
	}

	public function get_id() {
		return 'redirect_to_page';
	}

	public function get_redirect_url() {
		$type = ! empty( $this->settings['redirect_type'] ) ? $this->settings['redirect_type'] : 'static_page';

		switch ( $type ) {
			case 'static_page':
				$to_page = $this->settings['redirect_page'] ?? '';

				return empty( $to_page ) ? false : get_permalink( $to_page );

			case 'current_page':
				return jet_fb_handler()->refer;

			case 'inserted_post':
				/** @var Insert_Post_Action $insert_instance */
				try {
					$insert_instance = jet_form_builder()->actions->get_action( 'insert_post' );
				} catch ( Repository_Exception $exception ) {
					return false;
				}

				$context = $insert_instance->get_inserted_post_context();

				if ( ! $context ) {
					return false;
				}

				return get_permalink( $context['ID'] );

			default:
				$this->settings['redirect_url'] = Tools::to_string(
					$this->settings['redirect_url'] ?? ''
				);

				return Rich_Content\Module::rich( $this->settings['redirect_url'] );
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

		foreach ( $this->settings['redirect_args'] as $arg ) {
			$value = jet_fb_context()->get_value( $arg );

			$redirect_args[ $arg ] = ! empty( $value ) ? $value : 0;
		}

		return add_query_arg( urlencode_deep( $redirect_args ), $url );
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
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Action_Exception( 'failed', $this->settings );
		}

		$to_url = $this->get_completed_redirect_url( $to_url );

		$handler->response_data['redirect'] = $to_url;
	}

}
