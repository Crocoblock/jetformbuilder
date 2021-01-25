<?php


namespace Jet_Form_Builder\Migrations\Types\Jet_Engine;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Migrations\Base_Settings_Migrate;
use Jet_Form_Builder\Plugin;

class Actions_Migrate extends Base_Settings_Migrate {

	public $transform_compatibility = array(
		'email'          => 'send_email',
		'activecampaign' => 'active_campaign',
		'webhook'        => 'call_webhook',
		'hook'           => 'call_hook',
		'redirect'       => 'redirect_to_page'
	);

	protected function parse_value( $value ) {
		$prepared_actions = array();

		foreach ( $value as $index => $action ) {
			$type = $this->get_action_type( $action );

			if ( ! $type ) {
				continue;
			}

			$prepared_actions[] = array(
				'id'       => rand( 1000, 9999 ),
				'type'     => $type,
				'settings' => Tools::array_merge_intersect_key(
					$this->get_action_attributes( $type ),
					$action
				)
			);
		}

		return json_encode( $prepared_actions );
	}

	public function get_action_attributes( $type ) {
		$manager = Plugin::instance()->actions;

		return $manager->get_actions( $type )->action_attributes();

	}

	public function get_action_type( $action ) {
		$manager = Plugin::instance()->actions;

		if ( $manager->has_action_type( $action['type'] ) ) {
			return $action['type'];
		} elseif ( isset( $this->transform_compatibility[ $action['type'] ] ) ) {
			return $this->transform_compatibility[ $action['type'] ];
		}

		return false;
	}
}