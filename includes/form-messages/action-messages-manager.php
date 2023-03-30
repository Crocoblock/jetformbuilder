<?php


namespace Jet_Form_Builder\Form_Messages;

use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Form_Messages\Actions\Base_Action_Messages;
use Jet_Form_Builder\Form_Messages\Actions\Register_User_Messages;
use Jet_Form_Builder\Form_Messages\Actions\User_Specific_Messages;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method static Action_Messages_Manager instance()
 *
 * Class Action_Messages_Manager
 * @package Jet_Form_Builder\Form_Messages
 */
class Action_Messages_Manager {

	use Instance_Trait;

	/** @var Base_Action_Messages[] */
	private $types;

	public function __construct() {
		$this->types = apply_filters(
			'jet-form-builder/form-messages/register',
			array(
				new User_Specific_Messages(),
				new Register_User_Messages(),
			)
		);
	}

	public function get_messages_values( Base $action ): array {
		$messages = array();

		/** @var Base_Action_Messages $type */
		foreach ( $this->get_types( $action ) as $type ) {
			$messages = array_merge(
				$messages,
				wp_list_pluck( $type->get_messages(), 'value' )
			);
		}

		return array_merge(
			$messages,
			$action->settings['messages'] ?? array()
		);
	}

	public function get_messages( Base $action ): array {
		$messages = array();

		/** @var Base_Action_Messages $type */
		foreach ( $this->get_types( $action ) as $type ) {
			$messages = array_merge(
				$messages,
				$type->get_messages()
			);
		}

		return $messages;
	}

	/**
	 * @param Base $action
	 *
	 * @return \Generator
	 */
	private function get_types( Base $action ): \Generator {
		foreach ( $this->types as $type ) {
			if ( ! $type->is_supported( $action ) ) {
				continue;
			}
			yield $type;
		}
	}

}
