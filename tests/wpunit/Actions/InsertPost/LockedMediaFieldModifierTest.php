<?php

namespace JFB_Tests\Wpunit\Actions\InsertPost;

use JFB_Modules\Actions_V2\Insert_Post\Properties\Post_Modifier;

/**
 * A Media field the current user has no "user access" capability for must never reach the
 * modifier's request, whatever order the request and the fields map are assigned in.
 */
class LockedMediaFieldModifierTest extends \Codeception\TestCase\WPTestCase {

	private $form_id;
	private $subscriber_id;
	private $admin_id;

	protected function setUp(): void {
		parent::setUp();

		$this->subscriber_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$this->admin_id      = self::factory()->user->create( array( 'role' => 'administrator' ) );

		$this->form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Locked media form',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"pid"} /-->'
					. '<!-- wp:jet-forms/text-field {"name":"ttl"} /-->'
					. '<!-- wp:jet-forms/media-field {"name":"photo","allowed_user_cap":"upload_files"} /-->',
			)
		);

		jet_fb_action_handler()->set_form_id( $this->form_id );
	}

	protected function tearDown(): void {
		wp_set_current_user( 0 );

		parent::tearDown();
	}

	private function fields_map(): array {
		return array(
			'pid'   => 'ID',
			'ttl'   => 'post_title',
			'photo' => 'gallery',
		);
	}

	private function request( $photo ): array {
		return array(
			'pid'   => '15',
			'ttl'   => 'New title',
			'photo' => $photo,
		);
	}

	/**
	 * Both setter orders: Insert_Post uses map -> request, Update_User_Action uses request -> map.
	 */
	private function build( array $request, bool $map_first ): Post_Modifier {
		$modifier = new Post_Modifier();

		if ( $map_first ) {
			$modifier->set_fields_map( $this->fields_map() );
			$modifier->set_request( $request );
		} else {
			$modifier->set_request( $request );
			$modifier->set_fields_map( $this->fields_map() );
		}

		return $modifier;
	}

	public function provideScenarios(): array {
		$values = array(
			'attachment id' => array( '15' ),
			'url'           => array( 'http://evil.example/x.png' ),
			'ids array'     => array( array( '15', '16' ) ),
		);

		$scenarios = array();

		foreach ( $values as $label => $value ) {
			$scenarios[ "$label, map first" ]     = array( $value[0], true );
			$scenarios[ "$label, request first" ] = array( $value[0], false );
		}

		return $scenarios;
	}

	/**
	 * @dataProvider provideScenarios
	 */
	public function testGuestCannotSupplyLockedMediaValue( $photo, bool $map_first ) {
		$modifier = $this->build( $this->request( $photo ), $map_first );

		$this->assertArrayNotHasKey( 'photo', $modifier->get_request() );
		$this->assertSame( 'New title', $modifier->get_request()['ttl'] );
		$this->assertSame( '15', $modifier->get_request()['pid'] );
	}

	/**
	 * @dataProvider provideScenarios
	 */
	public function testUserWithoutCapabilityCannotSupplyLockedMediaValue( $photo, bool $map_first ) {
		wp_set_current_user( $this->subscriber_id );

		$modifier = $this->build( $this->request( $photo ), $map_first );

		$this->assertArrayNotHasKey( 'photo', $modifier->get_request() );
		$this->assertSame( 'New title', $modifier->get_request()['ttl'] );
	}

	/**
	 * @dataProvider provideScenarios
	 */
	public function testUserWithCapabilityKeepsMediaValue( $photo, bool $map_first ) {
		wp_set_current_user( $this->admin_id );

		$modifier = $this->build( $this->request( $photo ), $map_first );

		$this->assertSame( $photo, $modifier->get_request()['photo'] );
	}

	public function testLockedMediaFieldMappedToIdIsNotReadable() {
		wp_set_current_user( $this->subscriber_id );

		$modifier = new Post_Modifier();
		$modifier->set_request( array( 'photo' => '15' ) );
		$modifier->set_fields_map( array( 'photo' => 'ID' ) );

		// Property preparation reads raw values through get_value().
		$this->assertFalse( $modifier->get_value( 'photo' ) );
	}

	public function testLockedMediaFieldDoesNotAffectSharedTarget() {
		wp_set_current_user( $this->subscriber_id );

		$modifier = new Post_Modifier();
		$modifier->set_fields_map(
			array(
				'photo' => 'shared_meta',
				'ttl'   => 'shared_meta',
			)
		);
		$modifier->set_request(
			array(
				'photo' => '15',
				'ttl'   => 'Text value',
			)
		);

		$this->assertSame( array( 'ttl' => 'Text value' ), $modifier->get_request() );
	}
}
