<?php


namespace Jet_Form_Builder\Actions\Events;

use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Arrayable\Collection_Item_Interface;
use Jet_Form_Builder\Classes\Repository\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Exceptions\Action_Exception;

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

	public function is_valid_action( Base $action ): bool {
		$unsupported = $action->unsupported_events();

		if ( ! empty( $unsupported ) && in_array( static::class, $unsupported, true ) ) {
			return false;
		}
		$supported = $action->supported_events();

		if ( ! empty( $supported ) && ! in_array( static::class, $supported, true ) ) {
			return false;
		}

		return $action->get_events()->in_array( $this );
	}

	public function get_label(): string {
		return $this->get_id();
	}

	public function get_help(): string {
		return '';
	}

	public function rep_item_id() {
		return $this->get_id();
	}


	public function to_array(): array {
		return array(
			'value' => $this->get_id(),
			'label' => $this->get_label(),
			'help'  => $this->get_help(),
			'self'  => static::class,
		);
	}

}
