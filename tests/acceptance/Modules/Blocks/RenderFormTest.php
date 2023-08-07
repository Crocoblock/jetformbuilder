<?php

namespace Modules\Blocks;

class RenderFormTest extends \Codeception\TestCase\WPTestCase {
	/**
	 * @var \AcceptanceTester
	 */
	protected $tester;

	/** @var \WP_Post */
	protected $form;

	public function setUp(): void {
		// Before...
		parent::setUp();

		$this->form = static::factory()->post->create_and_get(
			array(
				'post_type'    => jet_form_builder()->post_type->slug(),
				'post_title'   => 'Base Form',
				'post_content' => '<!-- wp:jet-forms/text-field 
				{"label":"text label","name":"text_label","desc":"text description","required":true} /-->
<!-- wp:jet-forms/submit-field /-->',
			)
		);

		static::factory()->post->create(
			array(
				'post_type'    => 'page',
				'post_title'   => 'Testing shortcode',
				'post_content' => sprintf( '<!-- wp:shortcode -->
[jet_fb_form form_id="%d" submit_type="reload" required_mark="*" fields_layout="column" 
enable_progress="" fields_label_tag="div" load_nonce="render" use_csrf=""]
<!-- /wp:shortcode -->', $this->form->ID ),
			)
		);

		static::factory()->post->create(
			array(
				'post_type'    => 'page',
				'post_title'   => 'Testing block',
				'post_content' => sprintf(
					'<!-- wp:jet-forms/form-block {"form_id":%d} /-->',
					$this->form->ID
				)
			)
		);
	}

	public function tearDown(): void {
		// Your tear down methods here.

		// Then...
		parent::tearDown();
	}

	public function testRenderShortcode() {
		/*$I = $this->tester;

		$I->amOnPage( '/testing-shortcode' );
		$I->seeElement( 'form.jet-form-builder' );*/
	}

	public function testRenderBlock() {
		/*$I = $this->tester;

		$I->amOnPage( '/testing-block' );
		$I->seeElement( 'form.jet-form-builder' );*/
	}
}
