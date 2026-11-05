<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Request\Parser_Context;
use JFB_Modules\Actions_V2\Send_Email\Send_Email_Action;
use JFB_Modules\Actions_V2\Send_Email\Send_Email_Hooks;
use JFB_Modules\Rich_Content\Module as Rich_Content_Module;

/**
 * Regression coverage for issues-tracker #20703 (residual CVE-2026-19859):
 * a `%field_name%` macro resolved from a *submitted* value must never be
 * parsed as shortcode syntax by Send_Email_Hooks::basic_formatting() (or by
 * any other caller sharing the same `jet-form-builder/rich-content` filter -
 * Call_Webhook_Action, Redirect_To_Page_Action, the Media field's
 * max_size/max_files limits), while an admin-authored shortcode already
 * present in the template, and a plain macro value with no shortcode syntax
 * at all, must keep working exactly as before.
 *
 * Field values are injected directly into the shared Parser_Context via
 * update_request(), the same mechanism Macros_Parser::get_replace()/has_replace()
 * read from (see modules/block-parsers/parser-context.php resolve()/get_value()):
 * a value that is not a Field_Data_Parser instance is returned as-is via
 * Plain_Value_Exception, so this exercises the exact production code path
 * (Module::apply_submit_macros() -> jet_fb_context()->get_value()) without
 * needing a full block/field parser setup.
 */
class SendEmailMacroShortcodeSecurityTest extends \Codeception\TestCase\WPTestCase {

	private $shortcode_calls = 0;
	private $shortcode_attributes = array();

	public function setUp(): void {
		parent::setUp();
		$this->shortcode_calls      = 0;
		$this->shortcode_attributes = array();

		add_shortcode(
			'jfb_security_probe',
			function ( $attributes ) {
				++$this->shortcode_calls;
				$this->shortcode_attributes = $attributes;

				return '<strong>probe-result</strong>';
			}
		);
	}

	public function tearDown(): void {
		remove_shortcode( 'jfb_security_probe' );
		$this->reset_context_parsers();

		parent::tearDown();
	}

	/**
	 * jet_fb_context() is a process-wide singleton (JFB_Modules\Block_Parsers\Module::$context).
	 * update_request() stores a plain value directly in its private $parsers array
	 * (no public API removes a single entry), so it is cleared via reflection to
	 * avoid leaking test field values into any test that runs afterwards in the
	 * same process - the same technique already used by
	 * PresetAccessControlTest::unregister_test_source_types() for the same reason.
	 */
	private function reset_context_parsers(): void {
		$property = new \ReflectionProperty( Parser_Context::class, 'parsers' );
		$property->setAccessible( true );
		$property->setValue( jet_fb_context(), array() );
	}

	private function set_field( string $name, $value ): void {
		jet_fb_context()->update_request( $value, $name );
	}

	private function make_email(): Send_Email_Action {
		return new Send_Email_Action();
	}

	public function testSubmittedFieldMacroCannotIntroduceShortcodeInEmailContent(): void {
		$this->set_field( 'jfbname', '[jfb_security_probe]' );

		$email = $this->make_email();
		$email->set_content( 'Hello %jfbname%, thanks for submitting.' );
		$email->set_subject( 'Subject' );

		Send_Email_Hooks::basic_formatting( $email );

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertStringNotContainsString( '<strong>probe-result</strong>', $email->get_content() );
		$this->assertStringContainsString( '[jfb_security_probe]', $email->get_content() );
	}

	public function testSubmittedFieldMacroCannotIntroduceShortcodeInEmailSubject(): void {
		$this->set_field( 'jfbname', '[jfb_security_probe]' );

		$email = $this->make_email();
		$email->set_content( 'Body' );
		$email->set_subject( 'JFBSUBJ %jfbname%' );

		Send_Email_Hooks::basic_formatting( $email );

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertStringContainsString( '[jfb_security_probe]', $email->get_subject() );
	}

	/**
	 * The exact PoC payload from issues-tracker #20703: [gallery ids="6"]hello[/gallery]
	 * submitted as the field value, substituted into both the Send Email subject and
	 * content via %jfbname%.
	 */
	public function testIssuePocGalleryPayloadDoesNotExecute(): void {
		add_shortcode(
			'gallery',
			function ( $atts ) {
				++$this->shortcode_calls;

				return "<div id='gallery-2' class='gallery'>EXECUTED</div>";
			}
		);

		try {
			$this->set_field( 'jfbname', '[gallery ids="6"]hello[/gallery]' );

			$email = $this->make_email();
			$email->set_content( 'JFB: %jfbname%' );
			$email->set_subject( 'JFBSUBJ %jfbname%' );

			Send_Email_Hooks::basic_formatting( $email );

			$this->assertSame( 0, $this->shortcode_calls );
			$this->assertStringNotContainsString( 'EXECUTED', $email->get_content() );
			$this->assertStringNotContainsString( 'EXECUTED', $email->get_subject() );
			$this->assertStringContainsString( '[gallery ids="6"]hello[/gallery]', $email->get_content() );
			$this->assertStringContainsString( '[gallery ids="6"]hello[/gallery]', $email->get_subject() );
		} finally {
			remove_shortcode( 'gallery' );
		}
	}

	public function testSubmittedFieldMacroCannotEscapeShortcodeAttributeInEmailTemplate(): void {
		$this->set_field( 'jfbfield', 'injected" onx="y' );

		$email = $this->make_email();
		$email->set_content( '[jfb_security_probe value="%jfbfield%"]' );
		$email->set_subject( 'Subject' );

		Send_Email_Hooks::basic_formatting( $email );

		$this->assertSame( 1, $this->shortcode_calls );
		$this->assertSame( 'injected" onx="y', $this->shortcode_attributes['value'] ?? null );
		$this->assertArrayNotHasKey( 'onx', $this->shortcode_attributes );
	}

	public function testAdminAuthoredShortcodeInEmailTemplateStillExecutes(): void {
		$email = $this->make_email();
		$email->set_content( '[jfb_security_probe]' );
		$email->set_subject( 'Subject' );

		Send_Email_Hooks::basic_formatting( $email );

		$this->assertSame( 1, $this->shortcode_calls );
		$this->assertStringContainsString( '<strong>probe-result</strong>', $email->get_content() );
	}

	public function testPlainMacroWithoutShortcodeRendersByteIdentical(): void {
		$this->set_field( 'jfbname', 'hello world' );

		$email = $this->make_email();
		$email->set_content( 'Hi %jfbname%!' );
		$email->set_subject( 'Subj %jfbname%' );

		Send_Email_Hooks::basic_formatting( $email );

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertSame( 'Hi hello world!', $email->get_content() );
		$this->assertSame( 'Subj hello world', $email->get_subject() );
	}

	public function testMacroValueWithBracketsButUnregisteredTagRendersAsText(): void {
		$this->set_field( 'jfbname', '[not_a_real_shortcode]' );

		$email = $this->make_email();
		$email->set_content( 'Value: %jfbname%' );
		$email->set_subject( 'Subject' );

		Send_Email_Hooks::basic_formatting( $email );

		$this->assertStringNotContainsString( 'jfbmacro', $email->get_content() );
		$this->assertStringContainsString( '[not_a_real_shortcode]', $email->get_content() );
	}

	public function testCustomMacroCannotIntroduceShortcodeInEmail(): void {
		$callback = function ( $value, $name ) {
			return 'test::macro' === $name ? '[jfb_security_probe]' : $value;
		};

		add_filter( 'jet-form-builder/custom-macro', $callback, 10, 2 );

		// Macros_Parser::parse_macros() resolves nothing without a request.
		$this->set_field( 'jfbname', 'plain' );

		try {
			$email = $this->make_email();
			$email->set_content( 'Result: %test::macro%' );
			$email->set_subject( 'Subject' );

			Send_Email_Hooks::basic_formatting( $email );

			$this->assertSame( 0, $this->shortcode_calls );
			$this->assertStringContainsString( '[jfb_security_probe]', $email->get_content() );
		} finally {
			remove_filter( 'jet-form-builder/custom-macro', $callback, 10 );
		}
	}

	/**
	 * Twin sink (same Rich_Content\Module::rich() call used by
	 * Call_Webhook_Action::do_action() before esc_url_raw()).
	 */
	public function testWebhookUrlMacroCannotIntroduceShortcode(): void {
		$this->set_field( 'jfbname', '[jfb_security_probe]' );

		$result = Rich_Content_Module::rich( 'https://example.com/%jfbname%' );

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertStringContainsString( '[jfb_security_probe]', $result );
	}

	/**
	 * Twin sink (same Rich_Content\Module::rich() call used by
	 * Redirect_To_Page_Action::get_redirect_url()).
	 */
	public function testRedirectUrlMacroCannotIntroduceShortcode(): void {
		$this->set_field( 'jfbname', '[jfb_security_probe]' );

		$result = Rich_Content_Module::rich( 'https://example.com/?r=%jfbname%' );

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertStringContainsString( '[jfb_security_probe]', $result );
	}

	/**
	 * Twin sink (same Rich_Content\Module::rich() call used by
	 * modules/block-parsers/file-uploader.php for max_size/max_files, through
	 * the rich-no-preset filter argument).
	 */
	public function testFileUploaderLimitMacroCannotIntroduceShortcode(): void {
		$this->set_field( 'jfbname', '[jfb_security_probe]' );

		/** @var Rich_Content_Module $rich */
		$rich   = jet_form_builder()->module( 'rich-content' );
		$result = $rich->rich_without_preset( '%jfbname%' );

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertStringContainsString( '[jfb_security_probe]', $result );
	}

	public function testSubmittedValueCannotCompleteShortcodeTagName(): void {
		$this->set_field( 'jfbname', 'probe' );

		$result = Rich_Content_Module::rich( '[jfb_security_%jfbname%]' );

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertSame( '[jfb_security_probe]', $result );
	}

	public function testNestedDoShortcodeCallbackCannotExecuteSubmittedShortcode(): void {
		add_shortcode(
			'jfb_security_wrap',
			function ( $attributes, $content = '' ) {
				return '<div>' . do_shortcode( (string) $content ) . '</div>';
			}
		);

		try {
			$this->set_field( 'jfbname', '[jfb_security_probe]' );

			$result = Rich_Content_Module::rich( '[jfb_security_wrap]%jfbname%[/jfb_security_wrap]' );

			$this->assertSame( 0, $this->shortcode_calls );
			$this->assertSame( '<div>[jfb_security_probe]</div>', $result );
		} finally {
			remove_shortcode( 'jfb_security_wrap' );
		}
	}

	public function testShortcodeNestedInAdminShortcodeCannotExecuteSubmittedShortcode(): void {
		add_shortcode(
			'jfb_security_wrap',
			function ( $attributes, $content = '' ) {
				return '<div>' . do_shortcode( (string) $content ) . '</div>';
			}
		);
		add_shortcode(
			'jfb_security_bold',
			function ( $attributes, $content = '' ) {
				return '<b>' . do_shortcode( (string) $content ) . '</b>';
			}
		);

		try {
			$this->set_field( 'jfbname', '[jfb_security_probe]' );

			$result = Rich_Content_Module::rich(
				'[jfb_security_wrap][jfb_security_bold]%jfbname%[/jfb_security_bold][/jfb_security_wrap]'
			);

			$this->assertSame( 0, $this->shortcode_calls );
			$this->assertStringContainsString( '<div><b>', $result );
		} finally {
			remove_shortcode( 'jfb_security_wrap' );
			remove_shortcode( 'jfb_security_bold' );
		}
	}

	public function testBlockedValueIsStillEscapedByShortcodeCallback(): void {
		add_shortcode(
			'jfb_security_attr',
			function ( $attributes ) {
				return '<a title="' . esc_attr( $attributes['title'] ?? '' ) . '">x</a>';
			}
		);

		try {
			$this->set_field( 'jfbname', '[jfb_security_probe]" onmouseover="alert(1)' );

			$result = Rich_Content_Module::rich( '[jfb_security_attr title="%jfbname%"]' );

			$this->assertSame( 0, $this->shortcode_calls );
			$this->assertStringNotContainsString( '" onmouseover="', $result );
			$this->assertStringContainsString( '&quot; onmouseover=&quot;', $result );
		} finally {
			remove_shortcode( 'jfb_security_attr' );
		}
	}

	public function testEscapedShortcodeInSubmittedValueIsPassedUnchanged(): void {
		$received = null;

		add_shortcode(
			'jfb_security_wrap',
			function ( $attributes, $content = '' ) use ( &$received ) {
				$received = $content;

				return '<div>' . do_shortcode( (string) $content ) . '</div>';
			}
		);

		try {
			$this->set_field( 'jfbname', '[[jfb_security_probe]]' );

			$result = Rich_Content_Module::rich( '[jfb_security_wrap]%jfbname%[/jfb_security_wrap]' );

			$this->assertSame( 0, $this->shortcode_calls );
			$this->assertSame( '[[jfb_security_probe]]', $received );
			$this->assertSame( '<div>[jfb_security_probe]</div>', $result );
		} finally {
			remove_shortcode( 'jfb_security_wrap' );
		}
	}

	public function testHalfEscapedShortcodeInSubmittedValueIsStillBlocked(): void {
		add_shortcode(
			'jfb_security_wrap',
			function ( $attributes, $content = '' ) {
				return '<div>' . do_shortcode( (string) $content ) . '</div>';
			}
		);

		try {
			foreach ( array( '[[jfb_security_probe]', '[jfb_security_probe]]' ) as $value ) {
				$this->set_field( 'jfbname', $value );

				Rich_Content_Module::rich( '[jfb_security_wrap]%jfbname%[/jfb_security_wrap]' );

				$this->assertSame( 0, $this->shortcode_calls, $value );
			}
		} finally {
			remove_shortcode( 'jfb_security_wrap' );
		}
	}

	public function testValueCannotCompleteTagWithTemplateBracketsInsideAdminShortcode(): void {
		add_shortcode(
			'jfb_security_wrap',
			function ( $attributes, $content = '' ) {
				return '<div>' . do_shortcode( (string) $content ) . '</div>';
			}
		);

		try {
			$this->set_field( 'jfbname', 'jfb_security_probe' );

			$result = Rich_Content_Module::rich( '[jfb_security_wrap][%jfbname%][/jfb_security_wrap]' );

			$this->assertSame( 0, $this->shortcode_calls );
			$this->assertSame( '<div>[jfb_security_probe]</div>', $result );
		} finally {
			remove_shortcode( 'jfb_security_wrap' );
		}
	}

	/**
	 * `[gallery` with no closing bracket is not a shortcode, so the callback
	 * must get the real value unchanged, not a blocked/neutralized one.
	 */
	public function testIncompleteShortcodeFragmentReachesCallbackUnchanged(): void {
		$received = null;

		add_shortcode(
			'jfb_security_upper',
			function ( $attributes, $content = '' ) use ( &$received ) {
				$received = $content;

				return strtoupper( (string) $content );
			}
		);

		try {
			$this->set_field( 'jfbname', '[jfb_security_probe no closing bracket' );

			$result = Rich_Content_Module::rich( '[jfb_security_upper]%jfbname%[/jfb_security_upper]' );

			$this->assertSame( '[jfb_security_probe no closing bracket', $received );
			$this->assertSame( '[JFB_SECURITY_PROBE NO CLOSING BRACKET', $result );
			$this->assertStringNotContainsStringIgnoringCase( 'jfbmacro', $result );
		} finally {
			remove_shortcode( 'jfb_security_upper' );
		}
	}

	public function testMacroInsideAdminShortcodeContentIsPassedAsData(): void {
		$received = null;

		add_shortcode(
			'jfb_security_wrap',
			function ( $attributes, $content = '' ) use ( &$received ) {
				$received = $content;

				return '<div>' . $content . '</div>';
			}
		);

		try {
			$this->set_field( 'jfbname', 'Tom & "Jerry"' );

			$result = Rich_Content_Module::rich( '[jfb_security_wrap]Hi %jfbname%[/jfb_security_wrap]' );

			$this->assertSame( 'Hi Tom & "Jerry"', $received );
			$this->assertSame( '<div>Hi Tom & "Jerry"</div>', $result );
		} finally {
			remove_shortcode( 'jfb_security_wrap' );
		}
	}

	/**
	 * Third-party code calling the filter with the text only (no
	 * Macro_Runtime_Values) must get the same protection as Module::rich().
	 */
	public function testDirectFilterCallWithoutRuntimeValuesCannotIntroduceShortcode(): void {
		$this->set_field( 'jfbname', '[jfb_security_probe]' );

		$result = apply_filters( Rich_Content_Module::HOOK, 'Hi %jfbname%' );

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertSame( 'Hi [jfb_security_probe]', $result );
		$this->assertSame( 0, $this->count_pass_stack() );
	}

	public function testDirectFilterCallWithoutRuntimeValuesKeepsAdminShortcodeAndAttributeData(): void {
		$this->set_field( 'jfbfield', 'a" b="c' );

		$result = apply_filters( Rich_Content_Module::HOOK, '[jfb_security_probe value="%jfbfield%"]' );

		$this->assertSame( 1, $this->shortcode_calls );
		$this->assertSame( 'a" b="c', $this->shortcode_attributes['value'] ?? null );
		$this->assertSame( '<strong>probe-result</strong>', $result );
		$this->assertSame( 0, $this->count_pass_stack() );
	}

	public function testNestedDirectFilterCallsDoNotShareTokens(): void {
		add_shortcode(
			'jfb_security_nested',
			function () {
				return apply_filters( Rich_Content_Module::HOOK, 'In %jfbname%' );
			}
		);

		try {
			$this->set_field( 'jfbname', 'value' );

			$result = apply_filters( Rich_Content_Module::HOOK, 'Out %jfbname% [jfb_security_nested]' );

			$this->assertSame( 'Out value In value', $result );
			$this->assertSame( 0, $this->count_pass_stack() );
		} finally {
			remove_shortcode( 'jfb_security_nested' );
		}
	}

	public function testRemovedShortcodeStepDoesNotLeakTokens(): void {
		/** @var Rich_Content_Module $module */
		$module = jet_form_builder()->module( 'rich-content' );

		remove_filter( Rich_Content_Module::HOOK, array( $module, 'apply_shortcodes' ) );

		try {
			$this->set_field( 'jfbname', '[jfb_security_probe]' );

			$this->assertSame( 'Hi [jfb_security_probe]', Rich_Content_Module::rich( 'Hi %jfbname%' ) );
			$this->assertSame( 'Hi [jfb_security_probe]', apply_filters( Rich_Content_Module::HOOK, 'Hi %jfbname%' ) );
			$this->assertSame( 0, $this->shortcode_calls );
			$this->assertSame( 0, $this->count_pass_stack() );
		} finally {
			add_filter( Rich_Content_Module::HOOK, array( $module, 'apply_shortcodes' ), 10, 1 );
		}
	}

	public function testDirectMethodCallResolvesMacrosImmediately(): void {
		$this->set_field( 'jfbname', 'value' );

		/** @var Rich_Content_Module $module */
		$module = jet_form_builder()->module( 'rich-content' );

		$this->assertSame( 'Hi value', $module->apply_submit_macros( 'Hi %jfbname%' ) );
		$this->assertSame( 0, $this->count_pass_stack() );
	}

	public function testCaughtNestedPassExceptionInCustomMacroKeepsOuterValues(): void {
		global $wp_current_filter;

		$filters_before = $wp_current_filter;
		$callback       = function ( $value, $name ) {
			if ( 'test::nested' !== $name ) {
				return $value;
			}

			try {
				Rich_Content_Module::rich( 'inner %jfbname% [jfb_security_thrower]' );
			} catch ( \RuntimeException $exception ) {
				return 'caught';
			}

			return 'not-thrown';
		};

		add_shortcode( 'jfb_security_thrower', array( $this, 'throw_runtime_exception' ) );
		add_filter( 'jet-form-builder/custom-macro', $callback, 10, 2 );

		try {
			$this->set_field( 'jfbname', 'Outer Value' );

			$result = Rich_Content_Module::rich( 'Hello %jfbname% / %test::nested%' );

			$this->assertSame( 'Hello Outer Value / caught', $result );
			$this->assertSame( 0, $this->count_pass_stack() );
			$this->assertSame( $filters_before, $wp_current_filter );
		} finally {
			remove_filter( 'jet-form-builder/custom-macro', $callback, 10 );
			remove_shortcode( 'jfb_security_thrower' );
		}
	}

	public function testCaughtNestedBareFilterExceptionInShortcodeKeepsOuterValues(): void {
		global $wp_current_filter;

		$filters_before = $wp_current_filter;

		add_shortcode( 'jfb_security_thrower', array( $this, 'throw_runtime_exception' ) );
		add_shortcode(
			'jfb_security_catcher',
			function ( $attributes, $content = '' ) {
				try {
					apply_filters( Rich_Content_Module::HOOK, 'inner %jfbname% [jfb_security_thrower]' );
				} catch ( \RuntimeException $exception ) {
					return '<i>' . $content . '</i>';
				}

				return 'not-thrown';
			}
		);

		try {
			$this->set_field( 'jfbname', 'Value' );

			$result = Rich_Content_Module::rich(
				'A %jfbname% [jfb_security_catcher]in %jfbname%[/jfb_security_catcher] Z %jfbname%'
			);

			$this->assertSame( 'A Value <i>in Value</i> Z Value', $result );
			$this->assertSame( 0, $this->count_pass_stack() );
			$this->assertSame( $filters_before, $wp_current_filter );
		} finally {
			remove_shortcode( 'jfb_security_catcher' );
			remove_shortcode( 'jfb_security_thrower' );
		}
	}

	/**
	 * The exception comes from a third-party callback on the filter itself,
	 * outside the module's own guarded callbacks.
	 */
	public function testCaughtThirdPartyFilterExceptionInNestedPassKeepsOuterValues(): void {
		global $wp_current_filter;

		$filters_before = $wp_current_filter;
		$thrower        = function ( $content ) {
			if ( false !== strpos( (string) $content, 'jfb-third-party-throw' ) ) {
				throw new \RuntimeException( 'third party' );
			}

			return $content;
		};
		$callback       = function ( $value, $name ) {
			if ( 'test::nested' !== $name ) {
				return $value;
			}

			try {
				Rich_Content_Module::rich( 'jfb-third-party-throw' );
			} catch ( \RuntimeException $exception ) {
				return 'caught';
			}

			return 'not-thrown';
		};

		add_filter( Rich_Content_Module::HOOK, $thrower, 11 );
		add_filter( 'jet-form-builder/custom-macro', $callback, 10, 2 );

		try {
			$this->set_field( 'jfbname', 'Outer Value' );

			$result = Rich_Content_Module::rich( 'Hello %jfbname% / %test::nested%' );

			$this->assertSame( 'Hello Outer Value / caught', $result );
			$this->assertSame( 0, $this->count_pass_stack() );
			$this->assertSame( $filters_before, $wp_current_filter );
		} finally {
			remove_filter( 'jet-form-builder/custom-macro', $callback, 10 );
			remove_filter( Rich_Content_Module::HOOK, $thrower, 11 );
		}
	}

	public function testUncaughtExceptionUnwindsPassStack(): void {
		global $wp_current_filter;

		$filters_before = $wp_current_filter;

		add_shortcode( 'jfb_security_thrower', array( $this, 'throw_runtime_exception' ) );

		try {
			$this->set_field( 'jfbname', 'Value' );

			try {
				Rich_Content_Module::rich( '%jfbname% [jfb_security_thrower]' );
				$this->fail( 'Expected the shortcode exception to propagate.' );
			} catch ( \RuntimeException $exception ) {
				$this->assertSame( 'jfb security thrower', $exception->getMessage() );
			}

			$this->assertSame( 0, $this->count_pass_stack() );
			$this->assertSame( $filters_before, $wp_current_filter );
			$this->assertSame( 'Next Value', Rich_Content_Module::rich( 'Next %jfbname%' ) );
		} finally {
			remove_shortcode( 'jfb_security_thrower' );
		}
	}

	public function throw_runtime_exception() {
		throw new \RuntimeException( 'jfb security thrower' );
	}

	private function count_pass_stack(): int {
		$property = new \ReflectionProperty( Rich_Content_Module::class, 'pass_stack' );
		$property->setAccessible( true );

		return count( $property->getValue( jet_form_builder()->module( 'rich-content' ) ) );
	}
}

