<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block\Rest_Api;

use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Rest_Api\Rest_Api_Endpoint_Base;

class Add_Render_State_Endpoint_Option extends Rest_Api_Endpoint_Base {

	/**
	 * @return mixed
	 */
	public static function get_rest_base() {
		return 'render-states/add/option';
	}

	/**
	 * @return mixed
	 */
	public static function get_methods() {
		return \WP_REST_Server::CREATABLE;
	}

	public function check_permission(): bool {
		return current_user_can( 'manage_options' );
	}

	/**
	 * @param \WP_REST_Request $request
	 *
	 * @return mixed
	 */
	public function run_callback( \WP_REST_Request $request ) {
		$body  = $request->get_json_params();
		$label = $body['value'] ?? '';
		$value = $this->format_name( $label );

		if ( ! $value ) {
			return new \WP_REST_Response(
				array(
					'message' => __( 'Empty render state name', 'jet-form-builder' ),
				),
				400
			);
		}

		$saved = Tools::decode_json( get_option( Render_State::OPTION_KEY, '[]' ) );

		$find = array_filter(
			$saved,
			function ( $item ) use ( $value ) {
				return $item['value'] === $value;
			}
		);

		if ( count( $find ) ) {
			return new \WP_REST_Response(
				array(
					'message' => sprintf(
					/* translators: %s - name of render state */
						__( 'Render state with name "%s" is already exist', 'jet-form-builder' ),
						$value
					),
				),
				400
			);
		}

		$new_state = array(
			'label' => $label,
			'value' => $value,
		);

		$saved[] = $new_state;

		$result = Render_State::update_states( $saved );

		if ( ! $result ) {
			return new \WP_REST_Response(
				array(
					'message' => __( 'Something went wrong', 'jet-form-builder' ),
				),
				400
			);
		}

		$new_state['is_custom'] = true;

		return new \WP_REST_Response(
			array(
				'message' => __( 'Successful added render state', 'jet-form-builder' ),
				'state'   => $new_state,
			)
		);
	}

	private function format_name( string $title ): string {
		$name = preg_replace( '#[\s\-\_]+#', '.', $title );
		$name = preg_replace( '#[^\w\.]+#', '', $name );
		$name = trim( $name, '.' );

		return strtoupper( $name );
	}
}
