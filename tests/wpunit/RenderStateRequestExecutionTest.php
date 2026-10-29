<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Actions\Events\Bad_Request\Bad_Request_Event;
use Jet_Form_Builder\Actions\Events\Base_Event;
use Jet_Form_Builder\Actions\Events\Base_Executor;
use Jet_Form_Builder\Actions\Events\Default_Process\Default_Process_Event;
use Jet_Form_Builder\Actions\Events\Default_Required\Default_Required_Event;
use Jet_Form_Builder\Actions\Events\Gateway_Failed\Gateway_Failed_Event;
use Jet_Form_Builder\Actions\Events\Gateway_Success\Gateway_Success_Event;
use Jet_Form_Builder\Actions\Events\On_Dynamic_State\On_Dynamic_State_Event;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Blocks\Conditional_Block\Render_State;
use Jet_Form_Builder\Blocks\Conditional_Block\Rest_Api\Add_Render_State_Endpoint_Option;
use JFB_Modules\Post_Type\Actions\Import_Action;

/**
 * Minimal action type used only to detect, via Base::on_validate(),
 * which events actually reached execution for this action - without
 * relying on any side effect (post creation, email, etc).
 */
class Probe_Action extends Base {

	public function get_id(): string {
		return 'probe-action-' . ( $this->_id ?? 0 );
	}

	public function get_name(): string {
		return 'Probe Action';
	}

	public function do_action( array $request, \Jet_Form_Builder\Actions\Action_Handler $handler ) {
	}
}

/**
 * Stands for an event registered by an add-on that was activated AFTER a
 * custom render state with the same value had been created.
 */
class Lab_Addon_Event extends Base_Event {

	public function get_id(): string {
		return 'LAB.ADDON.EVENT';
	}

	public function executors(): array {
		return array( new Lab_Addon_Executor() );
	}
}

class Lab_Addon_Executor extends Base_Executor {

	public function is_supported(): bool {
		return true;
	}
}

/**
 * Regression tests for issue 20706: a request-controlled
 * `_jfb_current_render_states[]` value must never be able to trigger
 * gateway/verification/other non render-state events (authorization bypass),
 * must never crash on malformed input, and must keep working for the
 * legitimate built-in/custom render-state flow.
 */
class RenderStateRequestExecutionTest extends \Codeception\TestCase\WPTestCase {

	private $form_id;

	/** @var Probe_Action */
	private $probe;

	protected function setUp(): void {
		parent::setUp();

		$this->form_id = wp_insert_post(
			array(
				'post_type'   => 'jet-form-builder',
				'post_status' => 'publish',
				'post_title'  => 'Render state probe form',
			)
		);

		jet_fb_context()->set_request( array() );
		jet_fb_action_handler()->set_form_id( $this->form_id );

		// Action_Handler is a singleton: actions saved by earlier tests in the
		// suite (e.g. Insert Post) would otherwise run on DEFAULT.PROCESS here.
		foreach ( array_keys( jet_fb_action_handler()->form_actions ) as $key ) {
			jet_fb_action_handler()->unregister_action( $key );
		}

		$this->probe      = new Probe_Action();
		$this->probe->_id = 991177;
	}

	protected function tearDown(): void {
		jet_fb_action_handler()->unregister_action( $this->probe->_id );
		jet_fb_context()->set_request( array() );

		parent::tearDown();
	}

	/**
	 * Base::$executed_on has no default value, so if on_validate() was never
	 * called (e.g. because the action was correctly skipped before reaching
	 * execution) Base::get_executed_events() returns null rather than [].
	 * Normalize that here so assertContains()/assertNotContains() always get
	 * a real array.
	 */
	private function executed_events(): array {
		$events = $this->probe->get_executed_events();

		return is_array( $events ) ? $events : array();
	}

	/**
	 * @dataProvider forged_event_provider
	 */
	public function testForgedRenderStateDoesNotTriggerForeignEvent( string $event_class, string $event_id ): void {
		jet_fb_action_handler()->save_action(
			$this->probe,
			array( 'events' => array( $event_class ) )
		);

		jet_fb_context()->set_request(
			array( Render_State::FIELD_NAME => array( $event_id ) )
		);

		jet_fb_events()->execute( Default_Process_Event::class );

		$this->assertNotContains(
			$event_id,
			$this->executed_events(),
			"Action must not run for forged state [{$event_id}] resolving to {$event_class}"
		);
	}

	public function forged_event_provider(): array {
		return array(
			'GATEWAY.SUCCESS'  => array( Gateway_Success_Event::class, 'GATEWAY.SUCCESS' ),
			'GATEWAY.FAILED'   => array( Gateway_Failed_Event::class, 'GATEWAY.FAILED' ),
			'DEFAULT.REQUIRED' => array( Default_Required_Event::class, 'DEFAULT.REQUIRED' ),
			'BAD.REQUEST'      => array( Bad_Request_Event::class, 'BAD.REQUEST' ),
		);
	}

	/**
	 * @dataProvider malformed_request_provider
	 *
	 * @param mixed $forged_states
	 */
	public function testMalformedRenderStateRequestNeverFatals( $forged_states ): void {
		jet_fb_action_handler()->save_action(
			$this->probe,
			array( 'events' => array( Gateway_Success_Event::class ) )
		);

		jet_fb_context()->set_request(
			array( Render_State::FIELD_NAME => $forged_states )
		);

		jet_fb_events()->execute( Default_Process_Event::class );

		$this->assertNotContains(
			'GATEWAY.SUCCESS',
			$this->executed_events()
		);
	}

	public function malformed_request_provider(): array {
		return array(
			'nested array element' => array( array( array( 'x' ) ) ),
			'empty string element' => array( array( '' ) ),
			'integer element'      => array( array( 123 ) ),
			'boolean element'      => array( array( true ) ),
			'not an array at all'  => array( 'GATEWAY.SUCCESS' ),
		);
	}

	public function testBuiltInDefaultStateStillExecutesOnDynamicStateActions(): void {
		jet_fb_action_handler()->save_action(
			$this->probe,
			array( 'events' => array( 'ON.DEFAULT.STATE' ) )
		);

		jet_fb_context()->set_request(
			array( Render_State::FIELD_NAME => array( 'DEFAULT.STATE' ) )
		);

		jet_fb_events()->execute( Default_Process_Event::class );

		$this->assertContains( 'ON.DEFAULT.STATE', $this->executed_events() );
	}

	public function testPrefixedBuiltInStateStillExecutesOnDynamicStateActions(): void {
		jet_fb_action_handler()->save_action(
			$this->probe,
			array( 'events' => array( 'ON.DEFAULT.STATE' ) )
		);

		jet_fb_context()->set_request(
			array( Render_State::FIELD_NAME => array( 'ON.DEFAULT.STATE' ) )
		);

		jet_fb_events()->execute( Default_Process_Event::class );

		$this->assertContains( 'ON.DEFAULT.STATE', $this->executed_events() );
	}

	public function testUnknownStateDoesNotExecuteAndDoesNotFatal(): void {
		jet_fb_action_handler()->save_action(
			$this->probe,
			array( 'events' => array( 'ON.DEFAULT.STATE' ) )
		);

		jet_fb_context()->set_request(
			array( Render_State::FIELD_NAME => array( 'ON.DELETED.STATE' ) )
		);

		jet_fb_events()->execute( Default_Process_Event::class );

		$this->assertEmpty( $this->executed_events() );
	}

	public function testGetStatesReturnsEmptyArrayOnCorruptOption(): void {
		$previous = get_option( Render_State::OPTION_KEY, false );

		update_option( Render_State::OPTION_KEY, 'not valid json' );

		$this->assertSame( array(), Render_State::get_states() );

		if ( false === $previous ) {
			delete_option( Render_State::OPTION_KEY );
		} else {
			update_option( Render_State::OPTION_KEY, $previous );
		}
	}

	/**
	 * Restores the `jet_fb_conditional_render_states` option to its state
	 * before the callback runs, regardless of what the callback does to it.
	 */
	private function with_clean_render_states_option( callable $callback ) {
		$previous = get_option( Render_State::OPTION_KEY, false );

		try {
			return $callback();
		} finally {
			if ( false === $previous ) {
				delete_option( Render_State::OPTION_KEY );
			} else {
				update_option( Render_State::OPTION_KEY, $previous );
			}
		}
	}

	/**
	 * A custom render state colliding with a reserved event id
	 * (`GATEWAY.SUCCESS`) already exists in the option, e.g. because it was
	 * created before this fix shipped, imported, or created while the add-on
	 * registering the event was inactive. The action here is saved with the
	 * event CLASS name; see testCollidingCustomStateWithIdStringEventDoesNotRun()
	 * for the id-string form the editor actually saves.
	 */
	public function testCollidingCustomStateDoesNotUnlockReservedEvent(): void {
		$this->with_clean_render_states_option(
			function () {
				Render_State::update_states(
					array(
						array(
							'value'           => 'GATEWAY.SUCCESS',
							'label'           => 'Gateway Success',
							'can_be_switched' => true,
						),
					)
				);

				// Action bound to the literal reserved event: must NOT run.
				jet_fb_action_handler()->save_action(
					$this->probe,
					array( 'events' => array( Gateway_Success_Event::class ) )
				);

				jet_fb_context()->set_request(
					array( Render_State::FIELD_NAME => array( 'GATEWAY.SUCCESS' ) )
				);

				jet_fb_events()->execute( Default_Process_Event::class );

				$this->assertNotContains(
					'GATEWAY.SUCCESS',
					$this->executed_events(),
					'A custom render state colliding with a reserved event id must never resolve to the real reserved event.'
				);
			}
		);
	}

	private function set_custom_states( array $values ) {
		Render_State::update_states(
			array_map(
				static function ( $value ) {
					return array(
						'value'           => $value,
						'label'           => $value,
						'can_be_switched' => true,
					);
				},
				$values
			)
		);
	}

	private function submit_states( array $events, array $states ) {
		jet_fb_action_handler()->save_action( $this->probe, array( 'events' => $events ) );
		jet_fb_context()->set_request( array( Render_State::FIELD_NAME => $states ) );
		jet_fb_events()->execute( Default_Process_Event::class );
	}

	/**
	 * Same forged values as forged_event_provider(), but the action stores the
	 * event the way the block editor saves it: as the id string.
	 *
	 * @dataProvider forged_id_string_provider
	 */
	public function testForgedRenderStateDoesNotTriggerIdStringEvent( string $event_id ): void {
		$this->submit_states( array( $event_id ), array( $event_id ) );

		$this->assertNotContains( $event_id, $this->executed_events() );
	}

	public function forged_id_string_provider(): array {
		return array(
			'GATEWAY.SUCCESS'      => array( 'GATEWAY.SUCCESS' ),
			'GATEWAY.FAILED'       => array( 'GATEWAY.FAILED' ),
			'BAD.REQUEST'          => array( 'BAD.REQUEST' ),
			'VERIFICATION.SUCCESS' => array( 'VERIFICATION.SUCCESS' ),
		);
	}

	/**
	 * @dataProvider colliding_forged_value_provider
	 */
	public function testCollidingCustomStateWithIdStringEventDoesNotRun( string $forged ): void {
		$this->with_clean_render_states_option(
			function () use ( $forged ) {
				$this->set_custom_states( array( 'GATEWAY.SUCCESS' ) );

				$this->submit_states( array( 'GATEWAY.SUCCESS' ), array( $forged ) );

				$this->assertEmpty(
					$this->executed_events(),
					"Forged [{$forged}] must not run an action bound to GATEWAY.SUCCESS, even with a colliding custom state"
				);
			}
		);
	}

	public function colliding_forged_value_provider(): array {
		return array(
			'bare id'      => array( 'GATEWAY.SUCCESS' ),
			'ON. prefixed' => array( 'ON.GATEWAY.SUCCESS' ),
			'on. prefixed' => array( 'on.GATEWAY.SUCCESS' ),
		);
	}

	public function testCollidingCustomStateKeepsRealGatewayEvent(): void {
		$this->with_clean_render_states_option(
			function () {
				$this->set_custom_states( array( 'GATEWAY.SUCCESS' ) );

				jet_fb_action_handler()->save_action(
					$this->probe,
					array( 'events' => array( 'GATEWAY.SUCCESS' ) )
				);

				// What the gateway return / webhook flow does after a verified payment.
				jet_fb_events()->execute( Gateway_Success_Event::class );

				$this->assertContains(
					'GATEWAY.SUCCESS',
					$this->executed_events(),
					'An action saved with GATEWAY.SUCCESS must run on the real gateway event even if a colliding custom state exists.'
				);
			}
		);
	}

	public function testEventRegisteredAfterCustomStateIsNotTriggerable(): void {
		$event = new Lab_Addon_Event();

		$this->with_clean_render_states_option(
			function () use ( $event ) {
				$this->set_custom_states( array( $event->get_id() ) );
				jet_fb_events()->rep_install_item( $event );

				try {
					$this->submit_states( array( $event->get_id() ), array( $event->get_id() ) );
				} finally {
					jet_fb_events()->rep_remove( $event );
				}

				$this->assertEmpty( $this->executed_events() );
			}
		);
	}

	/**
	 * Custom states the editor can no longer create (before 3.1.8 or through
	 * form import) must keep running their ON.<state> actions.
	 *
	 * @dataProvider legacy_state_provider
	 */
	public function testLegacyCustomStateValuesStillExecute( string $value ): void {
		$this->with_clean_render_states_option(
			function () use ( $value ) {
				$this->set_custom_states( array( $value ) );

				$this->submit_states( array( 'ON.' . $value ), array( $value ) );

				$this->assertContains( 'ON.' . $value, $this->executed_events() );
			}
		);
	}

	public function legacy_state_provider(): array {
		return array(
			'lower case + underscore' => array( 'my_state' ),
			'mixed case + dash'       => array( 'My-State' ),
			'cyrillic'                => array( 'стан.один' ),
			'digits'                  => array( 'STEP.2' ),
			'slash (form import)'     => array( 'STEP/2' ),
			'space'                   => array( 'Step two' ),
		);
	}

	/**
	 * End-to-end: Import_Form_Trait copies everything after `ON.` into the
	 * custom states, so the frontend can submit such a value afterwards.
	 */
	public function testImportedCustomStateWithAnyCharactersStillExecutes(): void {
		$this->with_clean_render_states_option(
			function () {
				$form_id = ( new Import_Action() )->import_form(
					array(
						'post_title'  => 'Imported form with STEP/2 state',
						'post_status' => 'publish',
						'meta_input'  => array(
							'_jf_actions' => wp_json_encode(
								array(
									array(
										'type'   => 'send_email',
										'events' => array( 'ON.STEP/2' ),
									),
								)
							),
						),
					)
				);

				$this->assertContains( 'STEP/2', wp_list_pluck( Render_State::get_states(), 'value' ) );

				$this->submit_states( array( 'ON.STEP/2' ), array( 'STEP/2' ) );

				$this->assertContains( 'ON.STEP/2', $this->executed_events() );

				wp_delete_post( $form_id, true );
			}
		);
	}

	/**
	 * A stored custom state may contain any characters, including a class
	 * name. It must still only ever resolve to its own ON.<value> pseudo-event.
	 */
	public function testStoredClassNameStateDoesNotUnlockGatewayEvent(): void {
		$this->with_clean_render_states_option(
			function () {
				$this->set_custom_states( array( Gateway_Success_Event::class ) );

				$this->submit_states(
					array( 'GATEWAY.SUCCESS', Gateway_Success_Event::class ),
					array( Gateway_Success_Event::class, 'ON.' . Gateway_Success_Event::class )
				);

				$this->assertNotContains( 'GATEWAY.SUCCESS', $this->executed_events() );
			}
		);
	}

	public function testLowercasePrefixResolvesToTheSameState(): void {
		$this->submit_states( array( 'ON.DEFAULT.STATE' ), array( 'on.DEFAULT.STATE' ) );

		$this->assertContains( 'ON.DEFAULT.STATE', $this->executed_events() );
	}

	public function testForgedDefaultProcessDoesNotRecurse(): void {
		$this->submit_states( array( 'DEFAULT.PROCESS' ), array( 'DEFAULT.PROCESS', 'ON.DEFAULT.PROCESS' ) );

		$this->assertSame(
			1,
			count( array_keys( $this->executed_events(), 'DEFAULT.PROCESS', true ) )
		);
	}

	/**
	 * @dataProvider class_or_path_provider
	 */
	public function testClassNameAndPathValuesAreRejected( string $forged ): void {
		$this->submit_states( array( Gateway_Success_Event::class ), array( $forged ) );

		$this->assertNotContains( 'GATEWAY.SUCCESS', $this->executed_events() );
	}

	public function class_or_path_provider(): array {
		return array(
			'event class name'  => array( Gateway_Success_Event::class ),
			'leading backslash' => array( '\\' . Gateway_Success_Event::class ),
			'namespace dotdot'  => array( 'Jet_Form_Builder\\..\\..\\wp-config' ),
			'relative path'     => array( '../../wp-config' ),
			'slash in id'       => array( 'GATEWAY/SUCCESS' ),
		);
	}

	public function testForgedValueAmongLegitStatesIsDropped(): void {
		$this->submit_states(
			array( 'ON.DEFAULT.STATE', 'GATEWAY.SUCCESS' ),
			array( 'DEFAULT.STATE', 'GATEWAY.SUCCESS' )
		);

		$events = $this->executed_events();

		$this->assertContains( 'ON.DEFAULT.STATE', $events );
		$this->assertNotContains( 'GATEWAY.SUCCESS', $events );
	}

	public function testStripPrefixRemovesOnlyOneLeadingPrefix(): void {
		$this->assertSame( 'DEFAULT.STATE', On_Dynamic_State_Event::strip_prefix( 'ON.DEFAULT.STATE' ) );
		$this->assertSame( 'DEFAULT.STATE', On_Dynamic_State_Event::strip_prefix( 'on.DEFAULT.STATE' ) );
		$this->assertSame( 'FOO.ON.BAR', On_Dynamic_State_Event::strip_prefix( 'ON.FOO.ON.BAR' ) );
		$this->assertSame( 'DEFAULT.STATE', On_Dynamic_State_Event::strip_prefix( 'DEFAULT.STATE' ) );
	}

	public function testRestEndpointRejectsReservedEventIdAsCustomState(): void {
		$this->with_clean_render_states_option(
			function () {
				$request = new \WP_REST_Request( 'POST', '/jet-form-builder/v1/render-states/add/option' );
				$request->set_header( 'Content-Type', 'application/json' );
				$request->set_body( wp_json_encode( array( 'value' => 'Gateway Success' ) ) );

				$response = ( new Add_Render_State_Endpoint_Option() )->run_callback( $request );

				$this->assertSame( 400, $response->get_status() );

				$saved = array_filter(
					Render_State::get_states(),
					static function ( $item ) {
						return 'GATEWAY.SUCCESS' === ( $item['value'] ?? '' );
					}
				);

				$this->assertEmpty( $saved );
			}
		);
	}

	public function testImportSyncSkipsReservedEventId(): void {
		$this->with_clean_render_states_option(
			function () {
				$import = new Import_Action();

				$form_id = $import->import_form(
					array(
						'post_title'  => 'Imported form with colliding event',
						'post_status' => 'publish',
						'meta_input'  => array(
							'_jf_actions' => wp_json_encode(
								array(
									array(
										'type'   => 'send_email',
										'events' => array( 'ON.GATEWAY.SUCCESS' ),
									),
								)
							),
						),
					)
				);

				$this->assertIsInt( $form_id );

				$saved = array_filter(
					Render_State::get_states(),
					static function ( $item ) {
						return 'GATEWAY.SUCCESS' === ( $item['value'] ?? '' );
					}
				);

				$this->assertEmpty(
					$saved,
					'Importing a form whose action event is ON.<reserved event id> must not register it as a custom render state.'
				);

				wp_delete_post( $form_id, true );
			}
		);
	}
}
