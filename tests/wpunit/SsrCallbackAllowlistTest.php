<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Request\Parser_Context;
use Jet_Form_Builder\Migrations\Auto_Migrator;
use Jet_Form_Builder\Migrations\Versions\Version_3_6_5_2;
use JFB_Modules\Block_Parsers\Fields\Text_Field_Parser;
use JFB_Modules\Validation\Advanced_Rules\Server_Side_Rule;
use JFB_Modules\Validation\Advanced_Rules\Ssr_Callback_Allowlist;
use JFB_Modules\Validation\Handlers\Validation_Handler;
use JFB_Modules\Validation\Module;
use JFB_Modules\Validation\Rest_Api\Rest_Validation_Endpoint;

/**
 * Regression coverage for issues-tracker #20361: `Server_Side_Rule::validate_callback()`
 * previously only checked a denylist, so any function not explicitly listed there
 * (`wp_delete_file`, `delete_option`, `do_shortcode`, ...) could be invoked via
 * `call_user_func()` with the attacker-submitted field value as its argument.
 */
class SsrCallbackAllowlistTest extends \Codeception\TestCase\WPTestCase {

	public function setUp(): void {
		parent::setUp();

		delete_option( Ssr_Callback_Allowlist::OPTION_KEY );
		delete_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION );
		delete_transient( Ssr_Callback_Allowlist::REBUILD_LOCK_TRANSIENT );
	}

	public function tearDown(): void {
		delete_option( Ssr_Callback_Allowlist::OPTION_KEY );
		delete_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION );
		delete_transient( Ssr_Callback_Allowlist::REBUILD_LOCK_TRANSIENT );

		parent::tearDown();
	}

	public function testFunctionAbsentFromAllowlistIsRejected(): void {
		// A real, syntactically valid function that is not denylisted must still fail
		// closed until this specific form explicitly allows it.
		$this->assertValidationRejectsCallback( 'is_email', 'test@example.com' );
	}

	public function testReportedDangerousCallbacksAreRejected(): void {
		$this->assertValidationRejectsCallback( 'wp_delete_file' );
		$this->assertValidationRejectsCallback( 'delete_option' );
		$this->assertValidationRejectsCallback( 'do_shortcode' );
		$this->assertValidationRejectsCallback( 'update_option' );
	}

	public function testDenylistedFunctionIsRejectedEvenIfAllowlisted(): void {
		$this->assertValidationRejectsCallback(
			'wp_delete_file',
			'some-value',
			function ( int $form_id ) {
				update_post_meta( $form_id, Ssr_Callback_Allowlist::META_KEY, array( 'wp_delete_file' ) );
			}
		);
	}

	public function testAdditionalDangerousWordPressCallbacksAreDenylisted(): void {
		$callbacks = array(
			'wp_cache_flush',
			'wp_cache_delete',
			'delete_transient',
			'delete_site_transient',
			'wp_safe_remote_get',
			'wp_remote_head',
			'wp_delete_term',
			'wp_delete_comment',
			'clean_post_cache',
			'flush_rewrite_rules',
		);

		foreach ( $callbacks as $callback ) {
			$this->assertContains( $callback, Server_Side_Rule::NOT_ALLOWED );
		}
	}

	public function testFunctionCollectedFromSavedFormIsAccepted(): void {
		$this->assertValidationAcceptsCallback(
			'is_email',
			'test@example.com',
			function ( int $form_id ) {
				update_post_meta( $form_id, Ssr_Callback_Allowlist::META_KEY, array( 'is_email' ) );
			}
		);
	}

	public function testAllowlistDoesNotCrossFormBoundaries(): void {
		// Form A explicitly allows `is_email` for itself.
		$form_a = $this->factory()->post->create(
			array(
				'post_type'   => 'jet-form-builder',
				'post_status' => 'publish',
			)
		);
		update_post_meta( $form_a, Ssr_Callback_Allowlist::META_KEY, array( 'is_email' ) );

		// Form B never configured/saved `is_email` for itself — it must not inherit
		// form A's allowlist entry just because both forms exist on the same site.
		$parser = $this->run_ssr_validation( 'is_email', 'test@example.com' );

		$this->assertContains( 'rule:ssr:is_email', $parser->get_errors() );
	}

	public function testFilterCanExtendAllowlist(): void {
		$add_filter = function ( array $allowed ): array {
			$allowed[] = 'is_email';

			return $allowed;
		};

		add_filter( 'jet-form-builder/ssr-validation/allowed-callbacks', $add_filter );

		try {
			$this->assertValidationAcceptsCallback( 'is_email', 'test@example.com' );
		} finally {
			remove_filter( 'jet-form-builder/ssr-validation/allowed-callbacks', $add_filter );
		}
	}

	public function testCollectFromContentIgnoresBuiltinCallbacks(): void {
		$content = '<!-- wp:jet-forms/text-field {"name":"login","validation":{"type":"advanced","rules":[' .
			'{"type":"ssr","value":"is_user_login_unique"},' .
			'{"type":"ssr","value":"is_email"}' .
			']}} /-->';

		$found = Ssr_Callback_Allowlist::collect_from_content( $content );

		$this->assertSame( array( 'is_email' ), $found );
	}

	public function testCollectFromContentSkipsDenylistedFunctions(): void {
		// Denylisted names can never pass validation, so they must not clutter the
		// stored allowlist — even though an editor is free to type them into the field.
		$content = '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[' .
			'{"type":"ssr","value":"wp_delete_file"},' .
			'{"type":"ssr","value":"eval"},' .
			'{"type":"ssr","value":"is_email"}' .
			']}} /-->';

		$found = Ssr_Callback_Allowlist::collect_from_content( $content );

		$this->assertSame( array( 'is_email' ), $found );
		$this->assertNotContains( 'wp_delete_file', $found );
		$this->assertNotContains( 'eval', $found );
	}

	public function testCollectFromContentSkipsMalformedFunctionNames(): void {
		$content = '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[' .
			'{"type":"ssr","value":"not a function; rm -rf /"}' .
			']}} /-->';

		$this->assertSame( array(), Ssr_Callback_Allowlist::collect_from_content( $content ) );
	}

	public function testCollectFromContentSkipsFunctionsThatDoNotExistYet(): void {
		$content = '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[' .
			'{"type":"ssr","value":"jfb_20361_callback_that_does_not_exist"}' .
			']}} /-->';

		$this->assertFalse( function_exists( 'jfb_20361_callback_that_does_not_exist' ) );
		$this->assertSame( array(), Ssr_Callback_Allowlist::collect_from_content( $content ) );
	}

	public function testCollectFromContentExpandsReusableBlocks(): void {
		$reusable_id = $this->factory()->post->create(
			array(
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[{"type":"ssr","value":"is_email"}]}} /-->',
			)
		);
		$content     = sprintf( '<!-- wp:block {"ref":%d} /-->', $reusable_id );

		$this->assertSame(
			array( 'is_email' ),
			Ssr_Callback_Allowlist::collect_from_content( $content )
		);
	}

	public function testPreexistingReusableBlockFormWorksBeforeMigration(): void {
		$reusable_id = $this->factory()->post->create(
			array(
				'post_type'    => 'wp_block',
				'post_status'  => 'publish',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[{"type":"ssr","value":"is_email"}]}} /-->',
			)
		);
		$form_id     = $this->factory()->post->create(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_content' => sprintf( '<!-- wp:block {"ref":%d} /-->', $reusable_id ),
			)
		);

		delete_post_meta( $form_id, Ssr_Callback_Allowlist::META_KEY );

		$parser = $this->run_ssr_validation( 'is_email', 'test@example.com', null, $form_id );

		$this->assertSame( array(), $parser->get_errors() );
		$this->assertSame(
			array( 'is_email' ),
			get_post_meta( $form_id, Ssr_Callback_Allowlist::META_KEY, true )
		);
	}

	public function testReusableBlockSaveRebuildsFormAllowlist(): void {
		$this->run_as_form_editor(
			function () {
				$reusable_id = $this->factory()->post->create(
					array(
						'post_type'    => 'wp_block',
						'post_status'  => 'publish',
						'post_content' => '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[{"type":"ssr","value":"is_email"}]}} /-->',
					)
				);
				$form_id     = $this->factory()->post->create(
					array(
						'post_type'    => 'jet-form-builder',
						'post_status'  => 'publish',
						'post_content' => sprintf( '<!-- wp:block {"ref":%d} /-->', $reusable_id ),
					)
				);

				$this->assertSame(
					array( 'is_email' ),
					get_post_meta( $form_id, Ssr_Callback_Allowlist::META_KEY, true )
				);

				wp_update_post(
					array(
						'ID'           => $reusable_id,
						'post_content' => '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[{"type":"ssr","value":"is_numeric"}]}} /-->',
					)
				);

				$this->assertSame(
					array( 'is_numeric' ),
					get_post_meta( $form_id, Ssr_Callback_Allowlist::META_KEY, true )
				);
			}
		);
	}

	public function testPreexistingFormWorksBeforeAdminMigrationRuns(): void {
		$form_id = $this->factory()->post->create(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[{"type":"ssr","value":"is_email"}]}} /-->',
			)
		);

		delete_post_meta( $form_id, Ssr_Callback_Allowlist::META_KEY );
		delete_option( Ssr_Callback_Allowlist::OPTION_KEY );
		delete_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION );

		$parser = $this->run_ssr_validation( 'is_email', 'test@example.com', null, $form_id );

		$this->assertSame( array(), $parser->get_errors() );
		$this->assertTrue( metadata_exists( 'post', $form_id, Ssr_Callback_Allowlist::META_KEY ) );
		$this->assertSame(
			array( 'is_email' ),
			get_post_meta( $form_id, Ssr_Callback_Allowlist::META_KEY, true )
		);
	}

	public function testSaveHookWritesCollectedCallbacksToFormMeta(): void {
		$this->run_as_form_editor(
			function () {
				$form_id = $this->factory()->post->create(
					array(
						'post_type'    => 'jet-form-builder',
						'post_status'  => 'publish',
						'post_content' => '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[{"type":"ssr","value":"is_email"}]}} /-->',
					)
				);

				wp_update_post(
					array(
						'ID'         => $form_id,
						'post_title' => 'trigger save_post again',
					)
				);

				$this->assertContains(
					'is_email',
					Ssr_Callback_Allowlist::get_allowed_callbacks_for_form( $form_id )
				);
			}
		);
	}

	public function testSaveHookDoesNotLeakIntoOtherForms(): void {
		$this->run_as_form_editor(
			function () {
				$form_a = $this->factory()->post->create(
					array(
						'post_type'    => 'jet-form-builder',
						'post_status'  => 'publish',
						'post_content' => '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[{"type":"ssr","value":"is_email"}]}} /-->',
					)
				);
				$form_b = $this->factory()->post->create(
					array(
						'post_type'   => 'jet-form-builder',
						'post_status' => 'publish',
					)
				);

				wp_update_post( array( 'ID' => $form_a, 'post_title' => 'trigger save_post again' ) );

				$this->assertContains( 'is_email', Ssr_Callback_Allowlist::get_allowed_callbacks_for_form( $form_a ) );
				$this->assertNotContains( 'is_email', Ssr_Callback_Allowlist::get_allowed_callbacks_for_form( $form_b ) );
			}
		);
	}

	public function testRebuildFromAllFormsSeedsPerFormMetaFromExistingForms(): void {
		$form_id = $this->factory()->post->create(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[{"type":"ssr","value":"is_email"}]}} /-->',
			)
		);

		delete_post_meta( $form_id, Ssr_Callback_Allowlist::META_KEY );
		delete_option( Ssr_Callback_Allowlist::OPTION_KEY );

		Ssr_Callback_Allowlist::rebuild_from_all_forms();

		$this->assertContains(
			'is_email',
			Ssr_Callback_Allowlist::get_allowed_callbacks_for_form( $form_id )
		);
		// The legacy global option is also refreshed, for any code path still relying
		// on it as a fallback for forms without their own meta.
		$this->assertContains( 'is_email', Ssr_Callback_Allowlist::get_legacy_global_callbacks() );
	}

	public function testRebuildFromAllFormsCoversNonPublishedForms(): void {
		// A form that is only a draft at migration time must still get its own per-form
		// meta, otherwise it would keep falling back to the site-wide legacy option
		// until an editor happens to re-save it.
		$draft_id = $this->factory()->post->create(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'draft',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[{"type":"ssr","value":"is_email"}]}} /-->',
			)
		);

		// A different published form seeds an unrelated function into the legacy option,
		// so we can prove the draft gets its OWN list, not the site-wide union.
		$this->factory()->post->create(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"g","validation":{"type":"advanced","rules":[{"type":"ssr","value":"is_numeric"}]}} /-->',
			)
		);

		delete_post_meta( $draft_id, Ssr_Callback_Allowlist::META_KEY );
		delete_option( Ssr_Callback_Allowlist::OPTION_KEY );

		Ssr_Callback_Allowlist::rebuild_from_all_forms();

		$draft_allowed = Ssr_Callback_Allowlist::get_allowed_callbacks_for_form( $draft_id );

		$this->assertContains( 'is_email', $draft_allowed );
		// The draft has its own meta now, so it must NOT inherit the other form's
		// `is_numeric` via the legacy fallback.
		$this->assertNotContains( 'is_numeric', $draft_allowed );
	}

	public function testRebuildProcessesBoundedBatchesAndResumesFromCursor(): void {
		$form_ids = array();

		foreach ( array( 'is_email', 'is_numeric', 'is_string' ) as $callback ) {
			$form_ids[] = $this->factory()->post->create(
				array(
					'post_type'    => 'jet-form-builder',
					'post_status'  => 'publish',
					'post_content' => '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[{"type":"ssr","value":"' . $callback . '"}]}} /-->',
				)
			);
		}

		foreach ( $form_ids as $form_id ) {
			delete_post_meta( $form_id, Ssr_Callback_Allowlist::META_KEY );
		}

		Ssr_Callback_Allowlist::start_rebuild( 2 );

		$progress = get_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION );

		$this->assertIsArray( $progress );
		$this->assertSame( $form_ids[1], $progress['last_id'] );
		$this->assertTrue( metadata_exists( 'post', $form_ids[0], Ssr_Callback_Allowlist::META_KEY ) );
		$this->assertTrue( metadata_exists( 'post', $form_ids[1], Ssr_Callback_Allowlist::META_KEY ) );
		$this->assertFalse( metadata_exists( 'post', $form_ids[2], Ssr_Callback_Allowlist::META_KEY ) );

		$this->run_as_form_editor(
			function () {
				Ssr_Callback_Allowlist::enqueue_rebuild_runner();

				$this->assertTrue( wp_script_is( 'jquery', 'enqueued' ) );
				$this->assertStringContainsString(
					Ssr_Callback_Allowlist::REBUILD_AJAX_ACTION,
					implode( "\n", (array) wp_scripts()->get_data( 'jquery-core', 'after' ) )
				);
			}
		);

		$this->assertTrue( Ssr_Callback_Allowlist::process_rebuild_batch( 2 ) );
		$this->assertTrue( metadata_exists( 'post', $form_ids[2], Ssr_Callback_Allowlist::META_KEY ) );
		$this->assertFalse( get_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION, false ) );
		$this->assertEqualsCanonicalizing(
			array( 'is_email', 'is_numeric', 'is_string' ),
			Ssr_Callback_Allowlist::get_legacy_global_callbacks()
		);
	}

	public function testValidFormWithoutOwnMetaIsHydratedInsteadOfUsingLegacyGlobalOption(): void {
		$form_id = $this->factory()->post->create(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[{"type":"ssr","value":"is_numeric"}]}} /-->',
			)
		);

		delete_post_meta( $form_id, Ssr_Callback_Allowlist::META_KEY );
		update_option( Ssr_Callback_Allowlist::OPTION_KEY, array( 'is_email' ), false );

		$this->assertSame(
			array( 'is_numeric' ),
			Ssr_Callback_Allowlist::get_allowed_callbacks_for_form( $form_id )
		);
	}

	public function testMissingFormIdentityCanStillReadLegacyGlobalOption(): void {
		update_option( Ssr_Callback_Allowlist::OPTION_KEY, array( 'is_email' ), false );

		$this->assertSame(
			array( 'is_email' ),
			Ssr_Callback_Allowlist::get_allowed_callbacks_for_form( 0 )
		);
	}

	public function testFormWithOwnEmptyMetaDoesNotFallBackToLegacyGlobalOption(): void {
		$form_id = $this->factory()->post->create(
			array(
				'post_type'   => 'jet-form-builder',
				'post_status' => 'publish',
			)
		);

		// Form explicitly has no SSR callbacks of its own (e.g. re-saved after
		// removing its SSR rule) — the legacy global option must not widen it back.
		update_post_meta( $form_id, Ssr_Callback_Allowlist::META_KEY, array() );
		update_option( Ssr_Callback_Allowlist::OPTION_KEY, array( 'is_email' ), false );

		$this->assertSame(
			array(),
			Ssr_Callback_Allowlist::get_allowed_callbacks_for_form( $form_id )
		);
	}

	public function testMigrationDownRemovesDerivedAllowlistStateAndVersionStamp(): void {
		global $wpdb;

		$form_id = $this->factory()->post->create(
			array(
				'post_type'   => 'jet-form-builder',
				'post_status' => 'publish',
			)
		);

		update_post_meta( $form_id, Ssr_Callback_Allowlist::META_KEY, array( 'is_email' ) );
		update_post_meta( $form_id, '_unrelated_meta', 'keep-me' );
		update_option( Ssr_Callback_Allowlist::OPTION_KEY, array( 'is_email' ), false );
		update_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION, array( 'last_id' => $form_id ), false );
		set_transient( Ssr_Callback_Allowlist::REBUILD_LOCK_TRANSIENT, 1, MINUTE_IN_SECONDS );
		update_option( Auto_Migrator::DB_VERSION_OPTION, JET_FORM_BUILDER_VERSION, false );

		( new Version_3_6_5_2() )->down( $wpdb );

		$this->assertFalse( metadata_exists( 'post', $form_id, Ssr_Callback_Allowlist::META_KEY ) );
		$this->assertSame( 'keep-me', get_post_meta( $form_id, '_unrelated_meta', true ) );
		$this->assertFalse( get_option( Ssr_Callback_Allowlist::OPTION_KEY, false ) );
		$this->assertFalse( get_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION, false ) );
		$this->assertFalse( get_transient( Ssr_Callback_Allowlist::REBUILD_LOCK_TRANSIENT ) );
		$this->assertFalse( get_option( Auto_Migrator::DB_VERSION_OPTION, false ) );
		$this->assertTrue( ( new Auto_Migrator() )->needs_upgrade() );
	}

	private function assertValidationRejectsCallback(
		string $function_name,
		$value = 'some-value',
		?callable $before_validate = null
	): void {
		$parser = $this->run_ssr_validation( $function_name, $value, $before_validate );

		$this->assertContains( 'rule:ssr:' . $function_name, $parser->get_errors() );
	}

	/**
	 * Runs a callback as a user who can pass `collect_on_save()`'s edit-post check.
	 *
	 * @param callable $callback
	 */
	private function run_as_form_editor( callable $callback ) {
		$previous_user_id = get_current_user_id();
		$editor_user_id   = $this->factory()->user->create( array( 'role' => 'administrator' ) );

		wp_set_current_user( $editor_user_id );

		try {
			return $callback();
		} finally {
			wp_set_current_user( $previous_user_id );
		}
	}

	private function assertValidationAcceptsCallback(
		string $function_name,
		$value,
		?callable $before_validate = null
	): void {
		$parser = $this->run_ssr_validation( $function_name, $value, $before_validate );

		$this->assertSame( array(), $parser->get_errors() );
	}

	/**
	 * Runs the SSR rule through the same public entry point a real submission uses
	 * (`Module::validate_block()`), including the signature check, so these tests
	 * exercise `validate_callback()`'s allowlist/denylist logic rather than bypassing it.
	 *
	 * @param callable|null $before_validate Receives the created form's ID before
	 *                                       validation runs — used to seed per-form
	 *                                       allowlist meta (`Ssr_Callback_Allowlist::META_KEY`).
	 */
	private function run_ssr_validation(
		string $function_name,
		$value = 'some-value',
		?callable $before_validate = null,
		int $form_id = 0
	): Text_Field_Parser {
		if ( ! $form_id ) {
			$form_id = $this->factory()->post->create(
				array(
					'post_type'   => 'jet-form-builder',
					'post_status' => 'publish',
				)
			);
		}

		if ( $before_validate ) {
			$before_validate( $form_id );
		}

		$previous_post    = $_POST;
		$previous_form_id = jet_fb_handler()->get_form_id();

		$parser = new Text_Field_Parser();
		$parser->set_name( 'ssr_field' );
		$parser->set_type( 'text-field' );
		$parser->set_settings(
			array(
				'validation' => array(
					'type'  => Module::FORMAT_ADVANCED,
					'rules' => array(
						array(
							'type'  => 'ssr',
							'value' => $function_name,
						),
					),
				),
			)
		);

		$signature = Rest_Validation_Endpoint::generate_signature( $form_id, 'ssr_field', 0 );

		try {
			$_POST = array(
				Validation_Handler::MAIN_SIGNATURES_KEY => array(
					Validation_Handler::get_signature_key( 'ssr_field', 0 ) => $signature,
				),
			);
			jet_fb_handler()->set_form_id( $form_id );

			$parser->set_context( ( new Parser_Context() )->set_request( array( 'ssr_field' => $value ) ) );
			$parser->update_request();

			( new Module() )->validate_block( $parser );
		} finally {
			$_POST = $previous_post;
			jet_fb_handler()->set_form_id( $previous_form_id );
		}

		return $parser;
	}
}
