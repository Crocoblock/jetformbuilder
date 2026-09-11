<?php

namespace JFB_Tests\Wpunit;

use JFB_Modules\Validation\Module;
use JFB_Modules\Validation\Ssr\Ssr_Blocked_Callback_Usages;

/**
 * Regression coverage for the follow-up UX gap on issues-tracker #20361: a form using a
 * denylisted "Server-Side callback" name previously vanished from admin visibility the
 * moment `Version_3_6_5_3` ran once — editing the form to fix the rule never removed it
 * from `Ssr_Blocked_Callback_Usages`, so the settings tab kept showing a stale problem the
 * admin had already solved (or a fresh one they had not yet noticed). `Module::
 * refresh_blocked_callback_usages()`, hooked to `save_post_jet-form-builder`, must keep the
 * record live: fixing the rule removes the form from the list, and a newly introduced
 * denylisted rule appears without waiting for the next migration run (there is none after
 * the first).
 */
class SsrBlockedCallbackUsagesTest extends \Codeception\TestCase\WPTestCase {

	public function setUp(): void {
		parent::setUp();

		delete_option( Ssr_Blocked_Callback_Usages::OPTION_KEY );
	}

	public function tearDown(): void {
		delete_option( Ssr_Blocked_Callback_Usages::OPTION_KEY );

		parent::tearDown();
	}

	public function testSavingFormWithBlockedRuleRecordsUsage(): void {
		$form_id = $this->create_form_with_ssr_rule( 'blocked_field', 'wp_insert_user' );

		( new Module() )->refresh_blocked_callback_usages( $form_id );

		$usages = Ssr_Blocked_Callback_Usages::get_usages();

		$this->assertCount( 1, $usages );
		$this->assertSame( $form_id, $usages[0]['form_id'] );
		$this->assertSame( 'blocked_field', $usages[0]['field'] );
		$this->assertSame( 'wp_insert_user', $usages[0]['name'] );
	}

	public function testFixingTheRuleAndResavingRemovesTheFormFromTheList(): void {
		$form_id = $this->create_form_with_ssr_rule( 'blocked_field', 'wp_insert_user' );

		( new Module() )->refresh_blocked_callback_usages( $form_id );
		$this->assertCount( 1, Ssr_Blocked_Callback_Usages::get_usages() );

		// Admin edits the form and removes the SSR rule entirely.
		wp_update_post(
			array(
				'ID'           => $form_id,
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"blocked_field"} /-->',
			)
		);

		( new Module() )->refresh_blocked_callback_usages( $form_id );

		$this->assertSame(
			array(),
			Ssr_Blocked_Callback_Usages::get_usages(),
			'Once the blocked rule is removed and the form is resaved, it must drop off the list immediately.'
		);
	}

	public function testResavingUnrelatedFormDoesNotTouchOtherFormsEntries(): void {
		$blocked_form_id = $this->create_form_with_ssr_rule( 'blocked_field', 'wp_insert_user' );
		( new Module() )->refresh_blocked_callback_usages( $blocked_form_id );

		$clean_form_id = $this->create_form_with_ssr_rule( 'clean_field', 'is_email' );
		( new Module() )->refresh_blocked_callback_usages( $clean_form_id );

		$usages = Ssr_Blocked_Callback_Usages::get_usages();

		$this->assertCount( 1, $usages );
		$this->assertSame( $blocked_form_id, $usages[0]['form_id'] );
	}

	/**
	 * Regression for review finding (issues-tracker #20361 follow-up): `save_post_jet-form-
	 * builder` is the only hook that used to keep `Ssr_Blocked_Callback_Usages` in sync, so a
	 * permanently deleted form's entry lingered forever — a phantom row with a dead edit link
	 * on the settings tab. `Module::remove_blocked_callback_usages_for_deleted_form()`, hooked
	 * to `delete_post`, must clear it once the form is actually deleted (not merely trashed).
	 */
	public function testDeletingFormRemovesItFromTheList(): void {
		$form_id = $this->create_form_with_ssr_rule( 'blocked_field', 'wp_insert_user' );

		( new Module() )->refresh_blocked_callback_usages( $form_id );
		$this->assertCount( 1, Ssr_Blocked_Callback_Usages::get_usages() );

		wp_delete_post( $form_id, true );

		$this->assertSame(
			array(),
			Ssr_Blocked_Callback_Usages::get_usages(),
			'A permanently deleted form must not leave a phantom entry on the settings tab.'
		);
	}

	public function testDeletingUnrelatedPostTypeDoesNotTouchFormEntries(): void {
		$form_id = $this->create_form_with_ssr_rule( 'blocked_field', 'wp_insert_user' );
		( new Module() )->refresh_blocked_callback_usages( $form_id );

		$other_id = $this->factory()->post->create( array( 'post_type' => 'post' ) );
		wp_delete_post( $other_id, true );

		$this->assertCount(
			1,
			Ssr_Blocked_Callback_Usages::get_usages(),
			'Deleting a post of an unrelated post type must not affect recorded form usages.'
		);
	}

	private function create_form_with_ssr_rule( string $field_name, string $function_name ): int {
		$content = '<!-- wp:jet-forms/text-field {"name":"' . $field_name . '","validation":{"type":"advanced","rules":[' .
			'{"type":"ssr","value":"' . $function_name . '"}' .
			']}} /-->';

		return $this->factory()->post->create(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_content' => $content,
			)
		);
	}
}
