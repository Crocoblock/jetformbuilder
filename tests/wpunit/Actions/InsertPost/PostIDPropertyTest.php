<?php

namespace JFB_Tests\Wpunit\Actions\InsertPost;

use Codeception\AssertThrows;
use JFB_Modules\Actions_V2\Insert_Post\Properties\Post_Id_Property;
use JFB_Modules\Actions_V2\Insert_Post\Properties\Post_Modifier;
use Jet_Form_Builder\Exceptions\Action_Exception;

class PostIDPropertyTest extends \Codeception\TestCase\WPTestCase {

	use AssertThrows;

	private $modifier;

	private $user_id;
	private $post_id;
	private $guest_post_id;

	protected function setUp(): void {
		parent::setUp();

		$this->modifier = new Post_Modifier();

		$this->user_id = register_new_user(
			'subscriber_test',
			'subscriber@sub.scriber'
		);

		$this->post_id = wp_insert_post(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
				'post_title'  => 'Temporary post',
				'post_author' => $this->user_id,
			)
		);

		$this->guest_post_id = wp_insert_post(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
				'post_title'  => 'Temporary post by guest',
			)
		);
	}

	public function testInvalidIdProperty() {
		/** @var Post_Id_Property $id */
		$id = $this->modifier->get( 'ID' );

		$this->assertThrows( Action_Exception::class, static function () use ( $id ) {
			$id->can_attach( '', 0 ); // empty value
		} );

		$this->assertThrows( Action_Exception::class, static function () use ( $id ) {
			$id->can_attach( '', - 1 ); // not-existing ID
		} );
	}

	public function testGuestCantUpdateSomeoneElsePost() {
		/** @var Post_Id_Property $id */
		$id      = $this->modifier->get( 'ID' );
		$post_id = $this->post_id;

		$this->assertThrows( Action_Exception::class, static function () use ( $id, $post_id ) {
			$id->can_attach( '', $post_id ); // post exist, but guest can't edit it
		} );
	}

	public function testGuestCanUpdateHisPost() {
		/** @var Post_Id_Property $id */
		$id = $this->modifier->get( 'ID' );

		$this->assertTrue( $id->can_attach( '', $this->guest_post_id ) );
	}

	public function testSubscriberCantUpdateSomeoneElsePost() {
		/** @var Post_Id_Property $id */
		$id = $this->modifier->get( 'ID' );

		wp_set_current_user( $this->user_id );

		$this->assertThrows( Action_Exception::class, static function () use ( $id ) {
			$id->can_attach( '', 14 ); // post exist, but subscriber can't edit it (see in dump.sql)
		} );
	}

	public function testSubscriberCanUpdateHisPost() {
		/** @var Post_Id_Property $id */
		$id = $this->modifier->get( 'ID' );

		wp_set_current_user( $this->user_id );

		$this->assertTrue( $id->can_attach( '', $this->post_id ) );
	}

	public function testAdminCanUpdateAllPosts() {
		/** @var Post_Id_Property $id */
		$id = $this->modifier->get( 'ID' );

		// admin
		wp_set_current_user( 1 );

		// admin can update his post
		$this->assertTrue( $id->can_attach( '', 14 ) );
		// admin can update someone's else post
		$this->assertTrue( $id->can_attach( '', $this->post_id ) );
		$this->assertTrue( $id->can_attach( '', $this->guest_post_id ) );
	}

}