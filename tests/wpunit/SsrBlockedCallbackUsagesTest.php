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
 *
 * `Ssr_Blocked_Callback_Usages` stores entries as post meta on each form (`META_KEY`), not
 * in one shared option — a prior revision's shared-option storage made
 * `replace_for_form()` a read-modify-write of one option across every form, so two forms
 * saved close enough together could race and silently drop one form's entry (review
 * finding, issues-tracker #20361 follow-up). Per-form meta removes that race outright: each
 * form's entry is its own `wp_postmeta` row.
 */
class SsrBlockedCallbackUsagesTest extends \Codeception\TestCase\WPTestCase {

	public function setUp(): void {
		parent::setUp();

		global $wpdb;
		$wpdb->delete( $wpdb->postmeta, array( 'meta_key' => Ssr_Blocked_Callback_Usages::META_KEY ) );
	}

	public function tearDown(): void {
		global $wpdb;
		$wpdb->delete( $wpdb->postmeta, array( 'meta_key' => Ssr_Blocked_Callback_Usages::META_KEY ) );

		parent::tearDown();
	}

	public function testSavingFormWithBlockedRuleRecordsUsage(): void {
		$form_id = $this->create_form_with_ssr_rule( 'blocked_field', 'wp_insert_user' );

		( new Module() )->refresh_blocked_callback_usages( $form_id );

		$this->assertSame(
			array( array( 'field' => 'blocked_field', 'name' => 'wp_insert_user' ) ),
			Ssr_Blocked_Callback_Usages::get_usages_for_form( $form_id )
		);

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
		$this->assertNotSame( '', get_post_meta( $form_id, Ssr_Blocked_Callback_Usages::META_KEY, true ) );

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
		$this->assertSame(
			array(),
			Ssr_Blocked_Callback_Usages::get_usages_for_form( $form_id )
		);
		$this->assertSame(
			'',
			get_post_meta( $form_id, Ssr_Blocked_Callback_Usages::META_KEY, true ),
			'The meta entry itself must be deleted, not just emptied, once the form has no blocked usages.'
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
		$this->assertSame(
			array(),
			Ssr_Blocked_Callback_Usages::get_usages_for_form( $clean_form_id ),
			'A form with no blocked rule must never gain a meta entry.'
		);
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

	/**
	 * Regression for issues-tracker #20361 follow-up review (concurrent-save race): two
	 * forms writing their own blocked-usage entries must never clobber each other, since
	 * each is a separate `wp_postmeta` row rather than a shared option.
	 */
	public function testConcurrentSavesOfDifferentFormsDoNotClobberEachOther(): void {
		$form_a = $this->create_form_with_ssr_rule( 'field_a', 'wp_insert_user' );
		$form_b = $this->create_form_with_ssr_rule( 'field_b', 'wp_delete_file' );

		// Simulates two forms saved close together: both writes happen without either
		// re-reading the other's result in between, which is exactly the interleaving that
		// broke the old shared-option storage.
		Ssr_Blocked_Callback_Usages::replace_for_form(
			$form_a,
			Ssr_Blocked_Callback_Usages::collect_from_content( get_post( $form_a )->post_content )
		);
		Ssr_Blocked_Callback_Usages::replace_for_form(
			$form_b,
			Ssr_Blocked_Callback_Usages::collect_from_content( get_post( $form_b )->post_content )
		);

		$usages = Ssr_Blocked_Callback_Usages::get_usages();

		$this->assertCount( 2, $usages );

		$by_form_id = array();
		foreach ( $usages as $usage ) {
			$by_form_id[ $usage['form_id'] ] = $usage;
		}

		$this->assertSame( 'wp_insert_user', $by_form_id[ $form_a ]['name'] );
		$this->assertSame( 'wp_delete_file', $by_form_id[ $form_b ]['name'] );
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
