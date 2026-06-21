<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Form_Handler;
use JFB_Modules\Validation\Advanced_Rules\Server_Side_Rule;
use JFB_Modules\Validation\Handlers\Validation_Handler;
use JFB_Modules\Validation\Rest_Api\Rest_Validation_Endpoint;

class BlockHelperTest extends \Codeception\TestCase\WPTestCase
{
    /**
     * @var \WpunitTester
     */
    protected $tester;
    
    public function setUp(): void
    {
        // Before...
        parent::setUp();

        // Your set up methods here.
    }

    public function tearDown(): void
    {
        // Your tear down methods here.
	    unset( $_REQUEST[ Block_Helper::PREVIEW_NONCE_FIELD ] );
	    wp_set_current_user( 0 );

        // Then...
        parent::tearDown();
    }

    // Tests
    public function testGetAttrsFromBlock()
    {
	    $blocks = array(
		    array(
			    'blockName'   => 'core/column',
			    'attrs'       => array(),
			    'innerBlocks' => array(
				    array(
					    'blockName'   => 'core/group',
					    'innerBlocks' => array(
						    array(
							    'blockName' => 'core/some-block',
							    'attrs'     => array(
								    'name' => 'find_me',
							    ),
						    ),
					    ),
				    ),
				    array(
					    'blockName'   => 'core/group',
					    'innerBlocks' => array(
						    array(
							    'blockName' => 'jet-forms/some-field',
							    'attrs'     => array(
								    'name' => 'find_me',
							    ),
						    ),
					    ),
				    ),
			    ),
		    ),
	    );

	    $block     = Block_Helper::find_block_by_name( 'find_me', $blocks );
	    $not_block = Block_Helper::find_block_by_name( 'not_find_me', $blocks );

	    $this->assertIsArray( $block );
	    $this->assertIsArray( $not_block );

	    $this->assertArrayHasKey( 'attrs', $block );
	    $this->assertArrayHasKey( 'name', $block['attrs'] );
	    $this->assertEquals( 'find_me', $block['attrs']['name'] );
	    $this->assertEquals( 'jet-forms/some-field', $block['blockName'] );
    }

	public function testGetBlocksByPostParsesPublishedForm() {
		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Valid form',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"valid_field"} /-->',
			)
		);

		$blocks = Block_Helper::get_blocks_by_post( $form_id );

		$this->assertCount( 1, $blocks );
		$this->assertEquals( 'jet-forms/text-field', $blocks[0]['blockName'] );
		$this->assertEquals( 'valid_field', $blocks[0]['attrs']['name'] );
	}

	public function testGetBlocksByPostRejectsRegularPost() {
		$post_id = wp_insert_post(
			array(
				'post_type'    => 'post',
				'post_status'  => 'publish',
				'post_title'   => 'Not a form',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"forged_field"} /-->',
			)
		);

		$this->assertSame( array(), Block_Helper::get_blocks_by_post( $post_id ) );
	}

	public function testGetBlocksByPostRejectsDraftForm() {
		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'draft',
				'post_title'   => 'Draft form',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"draft_field"} /-->',
			)
		);

		$this->assertSame( array(), Block_Helper::get_blocks_by_post( $form_id ) );
	}

	public function testGetBlocksByPostParsesDraftFormInAuthorizedPreview() {
		$user_id = $this->factory()->user->create( array( 'role' => 'administrator' ) );
		$user    = get_user_by( 'id', $user_id );
		$user->add_cap( 'edit_jet_fb_form' );
		wp_set_current_user( $user_id );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'draft',
				'post_title'   => 'Preview form',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"preview_field"} /-->',
			)
		);

		$_REQUEST[ Block_Helper::PREVIEW_NONCE_FIELD ] = wp_create_nonce( Block_Helper::PREVIEW_NONCE_ACTION );

		$blocks = Block_Helper::get_blocks_by_post( $form_id, true, true );

		$this->assertCount( 1, $blocks );
		$this->assertEquals( 'preview_field', $blocks[0]['attrs']['name'] );
	}

	public function testGetBlocksByPostRejectsRevisionWithoutPreviewAuthorization() {
		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Revision parent form',
				'post_content' => '',
			)
		);
		$revision_id = wp_insert_post(
			array(
				'post_type'    => 'revision',
				'post_status'  => 'inherit',
				'post_parent'  => $form_id,
				'post_title'   => 'Revision form',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"revision_field"} /-->',
			)
		);

		$this->assertSame( array(), Block_Helper::get_blocks_by_post( $revision_id, true, true ) );
	}

	public function testGetBlocksByPostParsesRevisionInAuthorizedPreview() {
		$user_id = $this->factory()->user->create( array( 'role' => 'administrator' ) );
		$user    = get_user_by( 'id', $user_id );
		$user->add_cap( 'edit_jet_fb_form' );
		wp_set_current_user( $user_id );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Revision parent form',
				'post_content' => '',
			)
		);
		$revision_id = wp_insert_post(
			array(
				'post_type'    => 'revision',
				'post_status'  => 'inherit',
				'post_parent'  => $form_id,
				'post_title'   => 'Revision form',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"revision_field"} /-->',
			)
		);

		$_REQUEST[ Block_Helper::PREVIEW_NONCE_FIELD ] = wp_create_nonce( Block_Helper::PREVIEW_NONCE_ACTION );

		$blocks = Block_Helper::get_blocks_by_post( $revision_id, true, true );

		$this->assertCount( 1, $blocks );
		$this->assertEquals( 'revision_field', $blocks[0]['attrs']['name'] );
	}

	public function testGetBlocksByPostKeepsReusableBlocksInPublishedForm() {
		$reusable_id = wp_insert_post(
			array(
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_title'   => 'Reusable field',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"reusable_field"} /-->',
			)
		);

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Form with reusable field',
				'post_content' => sprintf( '<!-- wp:block {"ref":%d} /-->', $reusable_id ),
			)
		);

		$blocks = Block_Helper::get_blocks_by_post( $form_id );

		$this->assertCount( 1, $blocks );
		$this->assertEquals( 'core/block', $blocks[0]['blockName'] );
		$this->assertCount( 1, $blocks[0]['innerBlocks'] );
		$this->assertEquals( 'reusable_field', $blocks[0]['innerBlocks'][0]['attrs']['name'] );
	}

	public function testFormHandlerRejectsInvalidFormId() {
		$post_id = wp_insert_post(
			array(
				'post_type'    => 'post',
				'post_status'  => 'publish',
				'post_title'   => 'Not a form',
				'post_content' => '',
			)
		);

		$handler = new Form_Handler();
		$handler->set_form_id( $post_id );

		$this->assertSame( 0, $handler->get_form_id() );
	}

	public function testFormHandlerAcceptsPublishedFormId() {
		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Valid form',
				'post_content' => '',
			)
		);

		$handler = new Form_Handler();
		$handler->set_form_id( $form_id );

		$this->assertSame( $form_id, $handler->get_form_id() );
	}

	public function testFormHandlerAcceptsRevisionFormIdInAuthorizedPreview() {
		$user_id = $this->factory()->user->create( array( 'role' => 'administrator' ) );
		$user    = get_user_by( 'id', $user_id );
		$user->add_cap( 'edit_jet_fb_form' );
		wp_set_current_user( $user_id );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Revision parent form',
				'post_content' => '',
			)
		);
		$revision_id = wp_insert_post(
			array(
				'post_type'    => 'revision',
				'post_status'  => 'inherit',
				'post_parent'  => $form_id,
				'post_title'   => 'Revision form',
				'post_content' => '',
			)
		);

		$_REQUEST[ Block_Helper::PREVIEW_NONCE_FIELD ] = wp_create_nonce( Block_Helper::PREVIEW_NONCE_ACTION );

		$handler = new Form_Handler();
		$handler->set_form_id( $revision_id );

		$this->assertSame( $revision_id, $handler->get_form_id() );
	}

	public function testServerSideRuleRejectsUserMutationCallbacks() {
		$rule     = new Server_Side_Rule();
		$method   = new \ReflectionMethod( $rule, 'validate_callback' );
		$method->setAccessible( true );

		$this->assertSame( '', $method->invoke( $rule, 'wp_insert_user' ) );
		$this->assertSame( '', $method->invoke( $rule, 'wp_update_user' ) );
		$this->assertSame( '', $method->invoke( $rule, 'WP_INSERT_USER' ) );
		$this->assertSame( '', $method->invoke( $rule, 'WP_UPDATE_USER' ) );
	}

	public function testMainSubmissionSignatureValidationNormalizesRepeaterPath() {
		$form_id    = 123;
		$field_path = array( 'repeater', '0', 'email' );
		$rule_index = 2;
		$signature  = Rest_Validation_Endpoint::generate_signature(
			$form_id,
			array( 'repeater', 'email' ),
			$rule_index
		);

		$body = array(
			Validation_Handler::MAIN_SIGNATURES_KEY => array(
				Validation_Handler::get_signature_key( $field_path, $rule_index ) => $signature,
			),
		);

		$this->assertTrue(
			Validation_Handler::validate_main_signature( $body, $form_id, $field_path, $rule_index )
		);
		$this->assertFalse(
			Validation_Handler::validate_main_signature( array(), $form_id, $field_path, $rule_index )
		);
	}
}
