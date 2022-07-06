<?php


namespace Jet_Form_Builder\Gateways;

use Jet_Form_Builder\Actions\Events\Default_Process\Default_Process_Event;
use Jet_Form_Builder\Actions\Events\Gateway_Failed\Gateway_Failed_Event;
use Jet_Form_Builder\Actions\Events\Gateway_Success\Gateway_Success_Event;
use Jet_Form_Builder\Actions\Events_List;

class Migrate_Legacy_Data {

	protected $gateways;

	public function __construct( array $gateways ) {
		$this->gateways = $gateways;
	}

	public static function migrate( array $gateways ) {
		if ( ! empty( $gateways['last_migrate'] ) ) {
			return;
		}
		$self = new static( $gateways );

		jet_fb_action_handler()->merge_events(
			$self->get_actions_ids()
		);
	}

	protected function get_actions_ids(): array {
		$on_success   = $this->get_active_actions( $this->gateways['notifications_success'] ?? array() );
		$on_failed    = $this->get_active_actions( $this->gateways['notifications_failed'] ?? array() );
		$on_before    = $this->get_active_actions( $this->gateways['notifications_before'] ?? array() );
		$use_redirect = $this->gateways['use_success_redirect'] ?? false;

		$has_redirect = false;

		if ( ! $on_success && ! $on_failed && ! $on_before && ! $use_redirect ) {
			return array();
		}

		$response = array();

		foreach ( jet_fb_action_handler()->get_all() as $action ) {
			$events = new Events_List();

			if ( in_array( $action->_id, $on_success, true ) ) {
				$events->push( Gateway_Success_Event::class );
			}
			if ( in_array( $action->_id, $on_failed, true ) ) {
				$events->push( Gateway_Failed_Event::class );
			}
			if ( in_array( $action->_id, $on_before, true ) ) {
				$events->push( Default_Process_Event::class );
			}
			if ( $use_redirect && ! $has_redirect && 'redirect_to_page' === $action->get_id() ) {
				$events->push( Gateway_Success_Event::class );
				$has_redirect = true;
			}

			if ( ! $events ) {
				continue;
			}

			$response[ $action->_id ] = $events;
		}

		return $response;
	}

	protected function get_active_actions( $actions ): array {
		$response = array();

		foreach ( $actions as $id => $settings ) {
			if ( ! empty( $settings['active'] ) ) {
				$response[] = $id;
			}
		}

		return $response;
	}

}
