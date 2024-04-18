<?php

namespace JFB_Tests\Wpunit\Actions\InsertPost;

use Codeception\AssertThrows;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Status_Property;
use Jet_Form_Builder\Actions\Types\Insert_Post;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class PostStatusPropertyTest extends \Codeception\TestCase\WPTestCase {

	use AssertThrows;

	private $action;
	private $modifier;
	private $post_id;

	protected function setUp(): void {
		parent::setUp();

		$this->modifier = new Post_Modifier();

		$this->post_id = wp_insert_post(
			array(
				'post_type'   => 'post',
				'post_status' => 'publish',
				'post_title'  => 'Temporary post',
			)
		);

		$this->action      = new Insert_Post();
		$this->action->_id = 7755;

		jet_fb_action_handler()->save_action( $this->action, array() );
	}

	/**
	 * @throws \Throwable
	 */
	public function testPostStatusProperty() {
		/** @var Post_Status_Property $property */
		$property = $this->modifier->get( 'post_status' );

		$modifier = $this->modifier;
		$property->set_value( '', '', $modifier );
		$this->assertThrows( Silence_Exception::class, static function () use ( $property, $modifier ) {
			$property->get_value( $modifier );
		} );

		$property->set_value( '', 'from-field', $modifier );
		$this->assertThrows( Silence_Exception::class, static function () use ( $property, $modifier ) {
			$property->get_value( $modifier );
		} );

		$property->set_value( '', 'keep-current', $modifier );

		// because of excluding by the 'keep-current' status
		$this->assertNotTrue( $property->can_attach( '', 'published' ) );
	}

	public function testPostInTrash() {
		$this->action->settings = array(
			'fields_map' => array(
				'post_id_field'     => 'ID',
				'post_status_field' => 'post_status',
			),
		);

		jet_fb_context()->update_request( $this->post_id, 'post_id_field' );
		jet_fb_context()->update_request( 'trash', 'post_status_field' );

		if ( ! EMPTY_TRASH_DAYS ) {
			add_action( 'deleted_post', array( $this, 'isDeletedPost' ) );
		} else {
			add_action( 'trashed_post', array( $this, 'isTrashedPost' ) );
		}

		jet_fb_action_handler()->process_single_action( $this->action );
	}

	public function isDeletedPost( $postid ) {
		$this->assertEquals( $this->post_id, (int) $postid );
	}

	public function isTrashedPost( $postid ) {
		$this->assertEquals( $this->post_id, (int) $postid );
	}


}