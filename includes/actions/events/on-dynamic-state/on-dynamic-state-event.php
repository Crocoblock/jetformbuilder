<?php


namespace Jet_Form_Builder\Actions\Events\On_Dynamic_State;

use Jet_Form_Builder\Actions\Events\Base_Event;
use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;
use Jet_Form_Builder\Blocks\Conditional_Block\Render_States\Render_State_Replace_Exception;
use JFB_Components\Repository\Repository_Item_Dynamic_Id;
use Jet_Form_Builder\Exceptions\Repository_Exception;

class On_Dynamic_State_Event extends Base_Event implements Repository_Item_Dynamic_Id {

	const ID_PREFIX = 'ON.';

	protected $dynamic_id;

	public function get_id(): string {
		return $this->dynamic_id ?? self::ID_PREFIX . '{STATE}';
	}

	public function executors(): array {
		return array(
			new On_Dynamic_State_Executor(),
		);
	}

	/**
	 * @param string $name
	 *
	 * @return false|string
	 */
	public function create_dynamic_id( string $name ) {
		/**
		 * A bare id of a registered event (e.g. GATEWAY.SUCCESS saved in an
		 * action's events) always means that event, even if a custom render
		 * state with the same value exists.
		 */
		if ( 0 !== stripos( $name, self::ID_PREFIX ) && jet_fb_events()->rep_isset_item( $name ) ) {
			return false;
		}

		$name = self::strip_prefix( $name );

		try {
			$state = Render_State::instance()->get_item( $name );
		} catch ( Repository_Exception $exception ) {
			return $this->get_custom_state_id( $name );
		}

		try {
			if ( ! $state->is_supported() ) {
				return false;
			}
		} catch ( Render_State_Replace_Exception $exception ) {
			return $exception->get_state()->get_id();
		}

		return $state->get_id();
	}

	protected function get_custom_state_id( string $name ) {
		$custom = Render_State::get_states();

		foreach ( $custom as $item ) {
			if ( ( $item['value'] ?? '' ) !== $name ) {
				continue;
			}

			return $item['value'];
		}

		return false;
	}

	/**
	 * Removes a single leading `ON.` (case-insensitive).
	 *
	 * @param string $name
	 *
	 * @return string
	 */
	public static function strip_prefix( string $name ): string {
		if ( 0 === stripos( $name, self::ID_PREFIX ) ) {
			return substr( $name, strlen( self::ID_PREFIX ) );
		}

		return $name;
	}

	public function set_dynamic_id( string $id ) {
		$this->dynamic_id = self::ID_PREFIX . $id;
	}

	public function get_dynamic_id(): string {
		return $this->get_id();
	}
}
