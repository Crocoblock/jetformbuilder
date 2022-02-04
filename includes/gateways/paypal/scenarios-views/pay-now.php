<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios_Views;

use Jet_Form_Builder\Gateways\Paypal\Scenarios_Connectors;
use Jet_Form_Builder\Gateways\Paypal\Rest_Endpoints\Fetch_Pay_Now_Editor;

class Pay_Now extends Scenario_View_Base {

	use Scenarios_Connectors\Pay_Now;

	public function get_title(): string {
		return _x( 'Pay Now', 'Paypal gateway editor data', 'jet-form-builder' );
	}

	public function get_columns_handlers(): array {
		return array();
	}

	public function get_columns_headings(): array {
		return array();
	}

	public function get_list(): array {
		return array();
	}

	public function get_editor_labels(): array {
		return array(
			'currency'           => __( 'Currency Code', 'jet-form-builder' ),
			'fetch_button'       => __( 'Sync', 'jet-form-builder' ),
			'fetch_button_retry' => __( 'Retry Sync', 'jet-form-builder' ),
			'fetch_button_label' => __( 'Request Button', 'jet-form-builder' ),
		);
	}

	public function get_editor_data(): array {
		return array(
			'fetch' => array(
				'method' => Fetch_Pay_Now_Editor::get_methods(),
				'url'    => Fetch_Pay_Now_Editor::rest_url(),
			),
		);
	}

	public function get_raw_list( array $args ): array {
		return array();
	}
}
