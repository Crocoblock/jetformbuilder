<?php


namespace Jet_Form_Builder\Actions\Events;


use JET_APB\Formbuilder_Plugin\Actions\Insert_Appointment_Action;
use Jet_Form_Builder\Actions\Executors\Action_Required_Executor;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Arrayable\Collection_Item_Interface;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Static_Item_It;

abstract class Base_Event implements
	Repository_Item_Instance_Trait,
	Collection_Item_Interface,
	Arrayable {

	public function get_label(): string {
		return $this->get_id();
	}

	public function rep_item_id() {
		return $this->get_id();
	}

	protected function get_unsupported_actions(): array {
		return array();
	}

	public function validate_actions() {
		foreach ( $this->get_unsupported_actions() as $action ) {
			jet_fb_action_handler()->unregister_action( $action );
		}
		$actions = jet_fb_action_handler()->get_all();

		foreach ( $actions as $action ) {
			$this->validate_action( $action );
		}
	}

	protected function validate_action( Base $action ) {
		$events = $action->get_events();

		if ( ! $events || ! count( $events ) || ! $events->in_array( $this ) ) {
			$action->unregister();
		}
	}

	public function to_array(): array {
		return array(
			'value'       => $this->get_id(),
			'label'       => $this->get_label(),
			'unsupported' => $this->get_unsupported_actions(),
		);
	}

}