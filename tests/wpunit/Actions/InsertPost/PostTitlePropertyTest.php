<?php

namespace JFB_Tests\Wpunit\Actions\InsertPost;

use Codeception\AssertThrows;
use Jet_Form_Builder\Actions\Types\Insert_Post;

class PostTitlePropertyTest extends \Codeception\TestCase\WPTestCase {

	use AssertThrows;

	private $action;

	protected function setUp(): void {
		parent::setUp();


		$this->action      = new Insert_Post();
		$this->action->_id = 7755;

		jet_fb_action_handler()->save_action( $this->action, array() );
	}

	public function testEmptyTitleInsertPost() {
		$this->action->settings = array(
			'post_type' => 'page',
		);

		jet_fb_action_handler()->process_single_action( $this->action );

		$post_id = jet_fb_context()->get_value( 'inserted_post_id' );
		$this->assertNotEmpty( $post_id );
		$this->assertIsNumeric( $post_id );

		$post_type_obj = get_post_type_object( 'page' );
		$title         = "{$post_type_obj->labels->singular_name} #{$post_id}";
		$name          = "{$post_type_obj->labels->singular_name}-{$post_id}";

		$page = get_post( $post_id );

		$this->assertEquals( $title, $page->post_title );
		$this->assertEquals(
			array(
				'post_title' => 'Page #' . $post_id,
				'post_name'  => 'Page-' . $post_id,
			),
			array(
				'post_title' => $title,
				'post_name'  => $name,
			)
		);

	}


}