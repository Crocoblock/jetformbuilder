<?php


namespace Jet_Form_Builder\Actions\Events;


use JET_APB\Formbuilder_Plugin\Actions\Insert_Appointment_Action;
use Jet_Form_Builder\Actions\Executors\Action_Default_Executor;
use Jet_Form_Builder\Actions\Executors\Action_Executor_Base;
use Jet_Form_Builder\Actions\Executors\Action_Required_Executor;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Arrayable\Collection_Item_Interface;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Static_Item_It;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

abstract class Base_Event implements
	Repository_Item_Instance_Trait,
	Collection_Item_Interface,
	Arrayable {

	/**
	 * @return Base_Executor[]
	 */
	abstract public function executors(): array;

	public function ignored_executors(): array {
		return array();
	}

	/**
	 * @throws Action_Exception
	 */
	final public function execute() {
		// unregister all actions which never should be executed
		foreach ( $this->get_unsupported_actions() as $action ) {
			jet_fb_action_handler()->unregister_action( $action );
		}

		$this->get_executor()->execute();
	}


	/**
	 * @return Base_Executor
	 */
	final public function get_executor(): Base_Executor {
		foreach ( $this->executors() as $executor ) {
			if ( $executor->is_supported() ) {
				return $executor->set_event( $this );
			}
		}

		// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
		wp_die(
			/* translators: %s - Event class name */
			sprintf( __( 'Not founded supported executor for %s', 'jet-form-builder' ), static::class )
		);
		// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
	}

	public function get_label(): string {
		return $this->get_id();
	}

	public function rep_item_id() {
		return $this->get_id();
	}

	protected function get_unsupported_actions(): array {
		return array();
	}

	public function to_array(): array {
		return array(
			'value'       => $this->get_id(),
			'label'       => $this->get_label(),
			'unsupported' => $this->get_unsupported_actions(),
		);
	}

}