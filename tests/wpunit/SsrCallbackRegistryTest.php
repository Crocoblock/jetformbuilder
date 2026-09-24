<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Admin\Tabs_Handlers\Base_Handler;
use Jet_Form_Builder\Admin\Tabs_Handlers\Ssr_Callbacks_Handler;
use Jet_Form_Builder\Migrations\Versions\Version_3_6_5_3;
use Jet_Form_Builder\Request\Parser_Context;
use JFB_Modules\Block_Parsers\Fields\Text_Field_Parser;
use JFB_Modules\Validation\Advanced_Rules\Ssr_Callback_Registry;
use JFB_Modules\Validation\Handlers\Validation_Handler;
use JFB_Modules\Validation\Module;
use JFB_Modules\Validation\Rest_Api\Rest_Validation_Endpoint;
use JFB_Modules\Validation\Ssr\Ssr_Registry_Migration_Notice;
use JFB_Modules\Blocks_V2\Text_Field\Block_Type as Text_Field_Block_Type;

/**
 * Regression coverage for issues-tracker #20361: `Server_Side_Rule::validate_callback()`
 * must reject any custom function name that is not explicitly present in the global,
 * admin-managed `Ssr_Callback_Registry`. Saving a form (or a reusable block) must never,
 * by itself, make a function callable.
 */
class SsrCallbackRegistryTest extends \Codeception\TestCase\WPTestCase {

	public function setUp(): void {
		parent::setUp();

		delete_option( Ssr_Callback_Registry::OPTION_KEY );
		delete_option( Ssr_Registry_Migration_Notice::NOTICE_OPTION );
	}

	public function tearDown(): void {
		delete_option( Ssr_Callback_Registry::OPTION_KEY );
		delete_option( Ssr_Registry_Migration_Notice::NOTICE_OPTION );

		parent::tearDown();
	}

	public function testFunctionAbsentFromRegistryIsRejected(): void {
		// A real, syntactically valid function that is not denylisted must still fail
		// closed until an admin explicitly allows it in the registry.
		$this->assertValidationRejectsCallback( 'is_email', 'test@example.com' );
	}

	public function testReportedDangerousCallbacksAreRejected(): void {
		$this->assertValidationRejectsCallback( 'wp_delete_file' );
		$this->assertValidationRejectsCallback( 'delete_option' );
		$this->assertValidationRejectsCallback( 'do_shortcode' );
		$this->assertValidationRejectsCallback( 'update_option' );
	}

	public function testDenylistedFunctionIsRejectedEvenIfInRegistry(): void {
		update_option( Ssr_Callback_Registry::OPTION_KEY, array( 'wp_delete_file' ), false );

		$this->assertValidationRejectsCallback( 'wp_delete_file' );
	}

	public function testSavingFormDoesNotAddCallbackToRegistry(): void {
		$content = '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[' .
			'{"type":"ssr","value":"is_email"}' .
			']}} /-->';

		$form_id = $this->run_as_form_editor(
			function () use ( $content ) {
				return $this->factory()->post->create(
					array(
						'post_type'    => 'jet-form-builder',
						'post_status'  => 'publish',
						'post_content' => $content,
					)
				);
			}
		);

		$this->assertSame( array(), Ssr_Callback_Registry::get_allowed_callbacks() );

		$parser = $this->run_ssr_validation( 'is_email', 'test@example.com', null, $form_id );

		$this->assertContains( 'rule:ssr:is_email', $parser->get_errors() );
	}

	public function testFunctionInRegistryIsAccepted(): void {
		update_option( Ssr_Callback_Registry::OPTION_KEY, array( 'is_email' ), false );

		$this->assertValidationAcceptsCallback( 'is_email', 'test@example.com' );
	}

	public function testRemovingFromRegistryImmediatelyBlocksIt(): void {
		update_option( Ssr_Callback_Registry::OPTION_KEY, array( 'is_email' ), false );

		$this->assertValidationAcceptsCallback( 'is_email', 'test@example.com' );

		update_option( Ssr_Callback_Registry::OPTION_KEY, array(), false );

		$this->assertValidationRejectsCallback( 'is_email', 'test@example.com' );
	}

	public function testFilterCanExtendAllowedCallbacks(): void {
		$add_filter = function ( array $allowed ): array {
			$allowed[] = 'IS_EMAIL';
			$allowed[] = 'is_email';
			$allowed[] = null;

			return $allowed;
		};

		add_filter( 'jet-form-builder/ssr-validation/allowed-callbacks', $add_filter );

		try {
			$this->assertValidationAcceptsCallback( 'is_email', 'test@example.com' );
		} finally {
			remove_filter( 'jet-form-builder/ssr-validation/allowed-callbacks', $add_filter );
		}
	}

	public function testFixedSafeCallbackWorksWithoutRegistryEntry(): void {
		$this->assertSame( array(), Ssr_Callback_Registry::get_allowed_callbacks() );

		$this->assertValidationAcceptsCallback( 'rest_is_boolean', true );
	}

	// -- Public JSON opaque-ID rendering -----------------------------------

	public function testCustomCallbackIsRenderedAsOpaqueIdInPublicJson(): void {
		update_option( Ssr_Callback_Registry::OPTION_KEY, array( 'is_email' ), false );

		$rendered_rules = $this->render_ssr_validation_rules( 'is_email' );

		$this->assertNotSame( 'is_email', $rendered_rules[0]['value'] );
		$this->assertSame(
			Ssr_Callback_Registry::id_for_callback( 'is_email' ),
			$rendered_rules[0]['value']
		);
	}

	public function testBuiltinAndFixedSafeCallbacksAreNotSubstituted(): void {
		$rendered_rules = $this->render_ssr_validation_rules( 'is_user_login_unique' );
		$this->assertSame( 'is_user_login_unique', $rendered_rules[0]['value'] );

		$rendered_rules = $this->render_ssr_validation_rules( 'rest_is_boolean' );
		$this->assertSame( 'rest_is_boolean', $rendered_rules[0]['value'] );
	}

	/**
	 * Regression for review finding (issues-tracker #20361 follow-up): PHP function names
	 * are case-insensitive, so a builtin callback saved with non-canonical casing must still
	 * be recognized as builtin and left in the clear, not needlessly masked behind an opaque
	 * registry ID.
	 */
	public function testBuiltinCallbackWithNonCanonicalCasingIsNotSubstituted(): void {
		$rendered_rules = $this->render_ssr_validation_rules( 'Is_User_Login_Unique' );
		$this->assertSame( 'Is_User_Login_Unique', $rendered_rules[0]['value'] );
	}

	public function testOpaqueIdIsStableAndDoesNotCollide(): void {
		$first  = Ssr_Callback_Registry::id_for_callback( 'is_email' );
		$second = Ssr_Callback_Registry::id_for_callback( 'is_email' );

		$this->assertSame( $first, $second );
		$this->assertNotSame( $first, Ssr_Callback_Registry::id_for_callback( 'is_numeric' ) );
	}

	public function testRenderingDoesNotMutateStoredBlockAttrs(): void {
		update_option( Ssr_Callback_Registry::OPTION_KEY, array( 'is_email' ), false );

		$block = new Text_Field_Block_Type();

		$block->block_attrs = array(
			'name'       => 'ssr_field',
			'validation' => array(
				'type'  => Module::FORMAT_ADVANCED,
				'rules' => array(
					array(
						'type'  => 'ssr',
						'value' => 'is_email',
					),
				),
			),
		);

		jet_fb_live()->set_form_id( 0 );

		( new Module() )->add_validation_block( $block );

		// The public JSON copy is substituted, but the block's own stored
		// attributes must still hold the clean callback name (form
		// save/edit-screen invariant from issue #20361).
		$this->assertSame(
			'is_email',
			$block->block_attrs['validation']['rules'][0]['value']
		);
	}

	// -- Registry save() --------------------------------------------------

	public function testSaveAllowedCallbacksAcceptsValidName(): void {
		$result = Ssr_Callback_Registry::save_allowed_callbacks( array( 'is_email' ) );

		$this->assertSame( array( 'is_email' ), $result['saved'] );
		$this->assertSame( array(), $result['rejected'] );
		$this->assertSame( array( 'is_email' ), Ssr_Callback_Registry::get_allowed_callbacks() );
	}

	public function testSaveAllowedCallbacksRejectsMalformedName(): void {
		$result = Ssr_Callback_Registry::save_allowed_callbacks( array( 'not a function; rm -rf /' ) );

		$this->assertSame( array(), $result['saved'] );
		$this->assertArrayHasKey( 'not a function; rm -rf /', $result['rejected'] );
	}

	public function testSaveAllowedCallbacksRejectsDenylistedName(): void {
		$result = Ssr_Callback_Registry::save_allowed_callbacks( array( 'wp_delete_file' ) );

		$this->assertSame( array(), $result['saved'] );
		$this->assertArrayHasKey( 'wp_delete_file', $result['rejected'] );
	}

	public function testSaveAllowedCallbacksRejectsUnknownFunction(): void {
		$result = Ssr_Callback_Registry::save_allowed_callbacks(
			array( 'jfb_20361_callback_that_does_not_exist' )
		);

		$this->assertFalse( function_exists( 'jfb_20361_callback_that_does_not_exist' ) );
		$this->assertSame( array(), $result['saved'] );
		$this->assertArrayHasKey( 'jfb_20361_callback_that_does_not_exist', $result['rejected'] );
	}

	public function testSaveAllowedCallbacksRejectsBuiltinName(): void {
		$result = Ssr_Callback_Registry::save_allowed_callbacks( array( 'is_user_login_unique' ) );

		$this->assertSame( array(), $result['saved'] );
		$this->assertArrayHasKey( 'is_user_login_unique', $result['rejected'] );
	}

	public function testSaveAllowedCallbacksDedupesLines(): void {
		$result = Ssr_Callback_Registry::save_allowed_callbacks( array( 'is_email', 'IS_EMAIL', 'is_email' ) );

		$this->assertSame( array( 'is_email' ), $result['saved'] );
	}

	// -- Registry import_trusted_callbacks() (legacy-migration restore path) ---------------

	/**
	 * `import_trusted_callbacks()` (used only by `Version_3_6_5_3`) merges a name directly
	 * into the trusted registry — restoring backward compatibility for a site where the
	 * name was already relied upon before the update, without requiring a manual
	 * `manage_options` approval (issues-tracker #20361 follow-up).
	 */
	public function testImportTrustedCallbacksMergesValidNameDirectly(): void {
		$result = Ssr_Callback_Registry::import_trusted_callbacks( array( 'is_email' ) );

		$this->assertSame( array( 'is_email' ), $result['imported'] );
		$this->assertSame( array(), $result['rejected'] );
		$this->assertSame( array( 'is_email' ), Ssr_Callback_Registry::get_allowed_callbacks() );
	}

	public function testImportTrustedCallbacksRejectsDenylistedName(): void {
		$result = Ssr_Callback_Registry::import_trusted_callbacks( array( 'wp_delete_file' ) );

		$this->assertSame( array(), $result['imported'] );
		$this->assertArrayHasKey( 'wp_delete_file', $result['rejected'] );
		$this->assertSame( array(), Ssr_Callback_Registry::get_allowed_callbacks() );
	}

	public function testImportTrustedCallbacksDoesNotDowngradeOrDuplicateAlreadyTrustedName(): void {
		update_option( Ssr_Callback_Registry::OPTION_KEY, array( 'is_email' ), false );

		$result = Ssr_Callback_Registry::import_trusted_callbacks( array( 'is_email', 'is_numeric' ) );

		$this->assertSame( array( 'is_numeric' ), $result['imported'] );
		$this->assertSame( array( 'is_email', 'is_numeric' ), Ssr_Callback_Registry::get_allowed_callbacks() );
	}

	// -- Tab handler ------------------------------------------------------

	public function testTabHandlerDoesNotOverrideCapabilityGate(): void {
		$handler = new Ssr_Callbacks_Handler();

		// `on_raw_request()` (nonce + `manage_options` gate) must remain the inherited
		// `Base_Handler` implementation — the new handler must not bypass it.
		$reflection = new \ReflectionMethod( $handler, 'on_raw_request' );

		$this->assertSame( Base_Handler::class, $reflection->getDeclaringClass()->getName() );
	}

	public function testTabHandlerLoadsCurrentRegistryAsNewlineList(): void {
		update_option( Ssr_Callback_Registry::OPTION_KEY, array( 'is_email', 'is_numeric' ), false );

		$handler = new Ssr_Callbacks_Handler();
		$loaded  = $handler->on_load();

		$this->assertSame( "is_email\nis_numeric", $loaded['callbacks'] );
	}

	// -- Migration ----------------------------------------------------------

	public function testMigrationImportsStaticLegacyCallbackOnce(): void {
		global $wpdb;

		$this->factory()->post->create(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[{"type":"ssr","value":"is_email"}]}} /-->',
			)
		);

		( new Version_3_6_5_3() )->up( $wpdb );

		// Imported names are merged directly into the trusted registry: a custom callback
		// already relied upon before the update keeps working without requiring a manual
		// per-name admin approval (issues-tracker #20361 follow-up).
		$this->assertContains( 'is_email', Ssr_Callback_Registry::get_allowed_callbacks() );

		$notice = get_option( Ssr_Registry_Migration_Notice::NOTICE_OPTION );
		$this->assertContains( 'is_email', $notice['imported'] );

		// Second run is a no-op: the trusted list is unchanged and stays deduped.
		( new Version_3_6_5_3() )->up( $wpdb );

		$this->assertSame(
			array( 'is_email' ),
			Ssr_Callback_Registry::get_allowed_callbacks()
		);
	}

	public function testMigrationDoesNotImportDenylistedOrNonexistentNames(): void {
		global $wpdb;

		$this->factory()->post->create(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_content' => '<!-- wp:jet-forms/text-field {"name":"f","validation":{"type":"advanced","rules":[' .
					'{"type":"ssr","value":"wp_delete_file"},' .
					'{"type":"ssr","value":"jfb_20361_missing_fn"}' .
					']}} /-->',
			)
		);

		( new Version_3_6_5_3() )->up( $wpdb );

		// wp_delete_file is denylisted, so it must never be imported; jfb_20361_missing_fn
		// does not resolve to an existing function either. The migration notice, however,
		// is written unconditionally once the scan completes — including when nothing was
		// imported — so an admin also learns this form still fails SSR validation and needs
		// a manual fix (issues-tracker #20361 follow-up; see `up()`'s docblock).
		$this->assertSame( array(), Ssr_Callback_Registry::get_allowed_callbacks() );

		$notice = get_option( Ssr_Registry_Migration_Notice::NOTICE_OPTION );
		$this->assertIsArray( $notice );
		$this->assertSame( array(), $notice['imported'] );
		$this->assertSame( 1, $notice['blocked_forms_count'] );
	}

	public function testMigrationCreatesNoticeOnlyWhenSomethingWasImported(): void {
		global $wpdb;

		( new Version_3_6_5_3() )->up( $wpdb );

		$this->assertFalse( get_option( Ssr_Registry_Migration_Notice::NOTICE_OPTION, false ) );
	}

	// -- Helpers --------------------------------------------------------------

	private function assertValidationRejectsCallback(
		string $function_name,
		$value = 'some-value'
	): void {
		$parser = $this->run_ssr_validation( $function_name, $value );

		$this->assertContains( 'rule:ssr:' . $function_name, $parser->get_errors() );
	}

	private function assertValidationAcceptsCallback( string $function_name, $value ): void {
		$parser = $this->run_ssr_validation( $function_name, $value );

		$this->assertSame( array(), $parser->get_errors() );
	}

	/**
	 * Runs `Module::add_validation_block()` (the same method that produces the public
	 * `data-validation-rules` attribute for a real field) against a minimal Text Field
	 * block instance carrying a single `ssr` rule, and returns the resulting rules array
	 * exactly as it would be JSON-encoded into that attribute.
	 *
	 * @return array
	 */
	private function render_ssr_validation_rules( string $function_name ): array {
		$block = new Text_Field_Block_Type();

		$block->block_attrs = array(
			'name'       => 'ssr_field',
			'validation' => array(
				'type'  => Module::FORMAT_ADVANCED,
				'rules' => array(
					array(
						'type'  => 'ssr',
						'value' => $function_name,
					),
				),
			),
		);

		jet_fb_live()->set_form_id( 0 );

		ob_start();
		( new Module() )->add_validation_block( $block );
		ob_end_clean();

		$attrs = $block->get_all_attrs();

		return \Jet_Form_Builder\Classes\Tools::decode_json(
			$attrs['data-validation-rules'] ?? '[]'
		);
	}

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

	/**
	 * Runs the SSR rule through the same public entry point a real submission uses
	 * (`Module::validate_block()`), including the signature check.
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
