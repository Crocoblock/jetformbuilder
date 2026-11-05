<?php


namespace Jet_Form_Builder\Blocks\Conditional_Block;

use Jet_Form_Builder\Actions\Events\Base_Event;
use Jet_Form_Builder\Actions\Events\Default_Process\Default_Process_Event;
use Jet_Form_Builder\Actions\Events\On_Dynamic_State\On_Dynamic_State_Event;
use Jet_Form_Builder\Blocks\Conditional_Block\Render_States\Base_Render_State;
use Jet_Form_Builder\Blocks\Conditional_Block\Render_States\Default_State;
use Jet_Form_Builder\Blocks\Conditional_Block\Render_States\Render_State_Replace_Exception;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Instance_Trait;
use JFB_Components\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Repository_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method static Render_State instance()
 *
 * Class Render_State
 * @package Jet_Form_Builder\Blocks\Conditional_Block
 */
class Render_State implements Arrayable {

	const OPTION_KEY = 'jet_fb_conditional_render_states';
	const FIELD_NAME = '_jfb_current_render_states';

	use Repository_Pattern_Trait;
	use Instance_Trait;

	/** @var Render_States_Collection */
	private $current;

	protected function __construct() {
		$this->current = new Render_States_Collection();
		$this->rep_install();

		add_action( 'jet-form-builder/after-trigger-event', array( $this, 'execute_render_states_events' ) );
		add_action( 'jet-form-builder/form-handler/before-send', array( $this, 'set_current' ) );
		add_filter( 'jet-form-builder/frontend-settings', array( $this, 'add_built_in_states_to_script' ) );
	}

	/**
	 * @return array
	 */
	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/render-states',
			array(
				new Default_State(),
			)
		);
	}

	/**
	 * Execute actions on each render state from
	 * _jfb_current_render_states[] hidden field
	 *
	 * @throws \Jet_Form_Builder\Exceptions\Action_Exception
	 */
	public function execute_render_states_events( Base_Event $event ) {
		if ( ! is_a( $event, Default_Process_Event::class ) ) {
			return;
		}
		$render_states = self::get_from_request();

		foreach ( $render_states as $state ) {
			if ( ! is_string( $state ) || '' === $state ) {
				continue;
			}

			if ( ! $this->is_allowed_dynamic_state_id( $state ) ) {
				continue;
			}

			try {
				$event = jet_fb_events()->get_event( $state );
			} catch ( Repository_Exception $exception ) {
				continue;
			}

			// Only render-state pseudo-events can be triggered from the request.
			if ( ! ( $event instanceof On_Dynamic_State_Event ) ) {
				continue;
			}

			jet_fb_events()->execute( $state );
		}
	}

	/**
	 * Allow-list check performed BEFORE the submitted render-state value
	 * is ever passed to the events repository resolver.
	 *
	 * Only values that are a built-in render state id (e.g. `DEFAULT.STATE`),
	 * or a registered custom render state `value` (with or without the
	 * `On_Dynamic_State_Event::ID_PREFIX` prefix), are accepted. Everything
	 * else is rejected here, so it never reaches `jet_fb_events()->execute()`:
	 * - reserved event ids such as `GATEWAY.SUCCESS`, even when a custom
	 *   render state with the same value exists (created before this check,
	 *   imported, or created while the add-on registering the event was
	 *   inactive), because the action's own `GATEWAY.SUCCESS` event would
	 *   resolve to the same `ON.GATEWAY.SUCCESS` pseudo-event;
	 * - any value that is not an exact match of a known state id, e.g. class
	 *   names and path-like values.
	 *
	 * No character restriction is applied: both lists are exact matches against
	 * trusted data (code-registered states, admin-saved states), and custom
	 * states created before 3.1.8 or through form import may contain any
	 * characters (e.g. `STEP/2`).
	 *
	 * @param string $state
	 *
	 * @return bool
	 */
	private function is_allowed_dynamic_state_id( string $state ): bool {
		$name = On_Dynamic_State_Event::strip_prefix( $state );

		if ( '' === $name ) {
			return false;
		}

		if ( in_array( $name, jet_fb_events()->rep_get_keys(), true ) ) {
			return false;
		}

		if ( in_array( $name, $this->rep_get_keys(), true ) ) {
			return true;
		}

		foreach ( self::get_states() as $item ) {
			if ( ( $item['value'] ?? '' ) === $name ) {
				return true;
			}
		}

		return false;
	}

	public function add_built_in_states_to_script( array $localize_data ): array {
		$states = $this->rep_get_items();
		$keys   = array();

		/** @var Base_Render_State $state */
		foreach ( $states as $state ) {
			$keys[] = $state->get_id();
		}

		$localize_data['builtInStates'] = $keys;

		return $localize_data;
	}

	/**
	 * @param string $slug
	 *
	 * @return Base_Render_State
	 * @throws Repository_Exception
	 */
	public function get_item( string $slug ): Base_Render_State {
		return $this->rep_get_item( $slug );
	}

	public function is_multiple(): bool {
		$keys = $this->rep_get_keys();

		return ( count( $keys ) > 1 );
	}

	/**
	 * @return $this
	 */
	public function set_current(): Render_State {
		if ( count( $this->current ) ) {
			return $this;
		}
		$items = $this->rep_get_items();

		/** @var Base_Render_State $render_state */
		foreach ( $items as $render_state ) {
			try {
				if ( ! $render_state->is_supported_on_current() ) {
					continue;
				}
			} catch ( Render_State_Replace_Exception $exception ) {
				$this->current->push( $exception->get_state() );

				continue;
			}

			$this->current->push( $render_state );
		}

		$this->current->confirm();
		$this->set_states_from_url();
		$this->set_current_default();

		return $this;
	}

	protected function set_current_default() {
		if ( count( $this->current ) ) {
			return;
		}

		try {
			/** @var Default_State $state */
			$state = $this->rep_get_item( Default_State::class );
		} catch ( Repository_Exception $exception ) {
			wp_die(
				esc_html__( 'Something went wrong', 'jet-form-builder' ),
				esc_html__( 'Error', 'jet-form-builder' )
			);
		}

		$this->current->push( $state );
	}

	protected function set_states_from_url() {
		$custom = self::get_states();
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		$raw_url_states = $this->load_render_states();

		if ( ! $raw_url_states || ! count( $custom ) ) {
			return;
		}

		$url_states = array_map( 'trim', explode( ',', $raw_url_states ) );

		foreach ( $custom as $item_state ) {
			$slug = $item_state['value'] ?? '';

			if ( ! in_array( $slug, $url_states, true ) ) {
				continue;
			}

			$this->current->push( $slug );
		}
	}

	public function to_array(): array {
		$custom = self::get_states();

		foreach ( $custom as &$current ) {
			$current['is_custom'] = true;
		}

		return array_merge(
			Array_Tools::to_array( $this->rep_get_items() ),
			$custom
		);
	}

	public function clear_current(): Render_State {
		$this->current = new Render_States_Collection();

		return $this;
	}

	/**
	 * @return Render_States_Collection
	 */
	public function get_current(): Render_States_Collection {
		return $this->current;
	}

	public function render(): string {
		return $this->get_current()->render();
	}

	public static function get_states(): array {
		$states = Tools::decode_json(
			get_option( self::OPTION_KEY, '[]' )
		);

		return is_array( $states ) ? $states : array();
	}

	public static function update_states( array $states ): bool {
		return update_option(
			self::OPTION_KEY,
			Tools::encode_json( $states ),
			false
		);
	}

	public static function get_from_request(): array {
		$states = jet_fb_context()->get_request( self::FIELD_NAME );

		return is_array( $states ) ? $states : array();
	}

	protected function load_render_states(): string {
		return $this->sanitize_render_state(
			// phpcs:ignore WordPress.Security
			wp_unslash( $_GET['jfb'][ jet_fb_live()->form_id ]['state'] ?? '' )
		);
	}

	/**
	 * Accepts: 'DEFAULT.STATE', 'DEFAULT.STATE,REGISTER.FORM.CUSTOM'
	 *
	 * @param string $content
	 *
	 * @return string
	 */
	protected function sanitize_render_state( string $content ): string {
		$content = strtoupper( $content );

		return preg_replace( '/[^A-Z0-9\.\,]/', '', $content );
	}

}
