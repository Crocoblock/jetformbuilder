<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Form_Messages\Builder;
use Jet_Form_Builder\Form_Messages\Manager;
use Jet_Form_Builder\Form_Messages\Message_Content_Processor;
use JFB_Modules\Rich_Content\Module as Rich_Content_Module;

class FormMessageShortcodeSecurityTest extends \Codeception\TestCase\WPTestCase {

	/**
	 * @var int
	 */
	private $shortcode_calls = 0;

	/**
	 * @var array
	 */
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
		add_shortcode(
			'jfb_parse_content',
			function ( $attributes, $content ) {
				return do_shortcode( $content );
			}
		);
	}

	public function tearDown(): void {
		remove_filter(
			'jet-form-builder/custom-macro',
			array( $this, 'return_probe_from_custom_macro' ),
			10
		);
		remove_shortcode( 'jfb_security_probe' );
		remove_shortcode( 'jfb_returns_shortcode' );
		remove_shortcode( 'jfb_returns_preset' );
		remove_shortcode( 'jfb_parse_content' );

		parent::tearDown();
	}

	public function testDynamicSuccessCannotExecuteShortcode(): void {
		$html = $this->render_status( 'dsuccess|[jfb_security_probe]' );

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertShortcodeRenderedAsText( '[jfb_security_probe]', $html );
		$this->assertSafeAfterOuterShortcodePasses( $html );
	}

	public function testDynamicErrorCannotExecuteShortcode(): void {
		$html = $this->render_status( 'derror|[jfb_security_probe]' );

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertSafeAfterOuterShortcodePasses( $html );
	}

	public function testUnknownStatusCannotExecuteShortcode(): void {
		$html = $this->render_status( '[jfb_security_probe]' );

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertStringContainsString( 'jet-form-builder-message--error', $html );
		$this->assertSafeAfterOuterShortcodePasses( $html );
	}

	public function testEscapedShortcodeCannotBeDeferredToOuterPass(): void {
		$html = $this->render_status( '[[jfb_security_probe]]' );

		$this->assertShortcodeRenderedAsText( '[[jfb_security_probe]]', $html );
		$this->assertSafeAfterOuterShortcodePasses( $html );
	}

	public function testRegisteredTemplateShortcodeRunsExactlyOnce(): void {
		$html = $this->render_status(
			'success',
			array(
				'success' => array(
					'value' => '[jfb_security_probe]',
				),
			)
		);

		$this->assertSame( 1, $this->shortcode_calls );
		$this->assertStringContainsString( '<strong>probe-result</strong>', $html );

		do_shortcode( do_shortcode( $html ) );

		$this->assertSame( 1, $this->shortcode_calls );
	}

	public function testFieldMacroCannotIntroduceShortcode(): void {
		$processor = new Message_Content_Processor();
		$content   = $processor->prepare_trusted(
			'Result: %field%',
			array( 'field' => '[jfb_security_probe]' )
		);

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertShortcodeRenderedAsText( '[jfb_security_probe]', $content );
		$this->assertSafeAfterOuterShortcodePasses( $content );
	}

	public function testFieldMacroCannotCompleteShortcodeName(): void {
		$processor = new Message_Content_Processor();
		$content   = $processor->prepare_trusted(
			'[%field%]',
			array( 'field' => 'jfb_security_probe' )
		);

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertShortcodeRenderedAsText( '[jfb_security_probe]', $content );
		$this->assertSafeAfterOuterShortcodePasses( $content );
	}

	public function testFieldMacroCannotCompletePartialShortcodeName(): void {
		$processor = new Message_Content_Processor();
		$content   = $processor->prepare_trusted(
			'[jfb_%field%]',
			array( 'field' => 'security_probe' )
		);

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertShortcodeRenderedAsText( '[jfb_security_probe]', $content );
		$this->assertSafeAfterOuterShortcodePasses( $content );
	}

	public function testFieldMacroCannotEscapeShortcodeAttribute(): void {
		$processor = new Message_Content_Processor();
		$cases     = array(
			array(
				'[jfb_security_probe value="%field%"]',
				'" privileged="yes',
				array( 'value' => '" privileged="yes' ),
			),
			array(
				"[jfb_security_probe value='%field%']",
				"' privileged='yes",
				array( 'value' => "' privileged='yes" ),
			),
			array(
				'[jfb_security_probe value=%field%]',
				'safe privileged=yes',
				array( 'value' => 'safe privileged=yes' ),
			),
			array(
				'[jfb_security_probe %field%]',
				'privileged="yes"',
				array( 'privileged="yes"' ),
			),
		);

		foreach ( $cases as $case ) {
			$this->shortcode_calls      = 0;
			$this->shortcode_attributes = array();

			$processor->prepare_trusted(
				$case[0],
				array( 'field' => $case[1] )
			);

			$this->assertSame( 1, $this->shortcode_calls );
			$this->assertSame( $case[2], $this->shortcode_attributes );
			$this->assertArrayNotHasKey( 'privileged', $this->shortcode_attributes );
		}
	}

	public function testFieldMacroCannotAssembleNestedShortcode(): void {
		$processor = new Message_Content_Processor();
		$content   = $processor->prepare_trusted(
			'[jfb_parse_content][%field%][/jfb_parse_content]',
			array( 'field' => 'jfb_security_probe' )
		);

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertShortcodeRenderedAsText( '[jfb_security_probe]', $content );
		$this->assertSafeAfterOuterShortcodePasses( $content );
	}

	public function testFieldMacroCannotIntroduceDynamicPreset(): void {
		$rich      = new Tracking_Rich_Content_Module();
		$processor = new Message_Content_Processor( $rich );
		$content   = $processor->prepare_trusted(
			'Result: %field%',
			array( 'field' => '{"jet_preset":1,"from":"query_var"}' )
		);

		$this->assertSame( 0, $rich->dynamic_preset_calls );
		$this->assertStringContainsString( '"jet_preset"', $content );
	}

	public function testCustomMacroCannotIntroduceShortcode(): void {
		add_filter(
			'jet-form-builder/custom-macro',
			array( $this, 'return_probe_from_custom_macro' ),
			10,
			2
		);

		$processor = new Message_Content_Processor();
		$content   = $processor->prepare_trusted(
			'Result: %test::macro%',
			array( 'unused' => 'value' )
		);

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertShortcodeRenderedAsText( '[jfb_security_probe]', $content );
		$this->assertSafeAfterOuterShortcodePasses( $content );
	}

	public function testDynamicPresetResultCannotIntroduceShortcode(): void {
		$rich                        = new Tracking_Rich_Content_Module();
		$rich->dynamic_preset_result = '[jfb_security_probe]';
		$processor                   = new Message_Content_Processor( $rich );
		$content                     = $processor->prepare_trusted(
			'{"jet_preset":1,"from":"query_var"}'
		);

		$this->assertSame( 1, $rich->dynamic_preset_calls );
		$this->assertSame( 0, $rich->shortcode_calls );
		$this->assertShortcodeRenderedAsText( '[jfb_security_probe]', $content );
		$this->assertSafeAfterOuterShortcodePasses( $content );
	}

	public function testShortcodeResultCannotIntroduceDynamicPreset(): void {
		add_shortcode(
			'jfb_returns_preset',
			function () {
				return '{"jet_preset":1,"from":"query_var"}';
			}
		);

		$rich      = new Tracking_Rich_Content_Module();
		$processor = new Message_Content_Processor( $rich );
		$content   = $processor->prepare_trusted( '[jfb_returns_preset]' );

		$this->assertSame( 0, $rich->dynamic_preset_calls );
		$this->assertSame( 1, $rich->shortcode_calls );
		$this->assertStringContainsString( '"jet_preset"', $content );
	}

	public function testShortcodeResultCannotBeDeferred(): void {
		add_shortcode(
			'jfb_returns_shortcode',
			function () {
				return '[jfb_security_probe]';
			}
		);

		$processor = new Message_Content_Processor();
		$content   = $processor->prepare_trusted( '[jfb_returns_shortcode]' );

		$this->assertSame( 0, $this->shortcode_calls );
		$this->assertShortcodeRenderedAsText( '[jfb_security_probe]', $content );
		$this->assertSafeAfterOuterShortcodePasses( $content );
	}

	public function testLegitimateHtmlAndMacroValueRemainVisible(): void {
		$processor = new Message_Content_Processor();
		$content   = $processor->prepare_trusted(
			'<strong>Hello, %name%</strong>',
			array( 'name' => 'Alice [customer]' )
		);

		$this->assertSame(
			'<strong>Hello, Alice [customer]</strong>',
			html_entity_decode( $content, ENT_QUOTES, 'UTF-8' )
		);
	}

	public function testUntrustedMessageKeepsAllowedHtmlButRemovesScripts(): void {
		$processor = new Message_Content_Processor();
		$content   = $processor->prepare_untrusted(
			'<strong>Error</strong><script>window.jfbCompromised = true;</script>'
		);

		$this->assertStringContainsString( '<strong>Error</strong>', $content );
		$this->assertStringNotContainsString( '<script', $content );
	}

	private function render_status( string $status, array $types = array() ): string {
		$manager         = new Manager();
		$manager->_types = $types;
		$builder         = new Testable_Form_Message_Builder( $manager );

		return $builder->set_form_status( $status )->get_rendered_messages();
	}

	private function assertSafeAfterOuterShortcodePasses( string $content ): void {
		do_shortcode( do_shortcode( $content ) );

		$this->assertSame( 0, $this->shortcode_calls );
	}

	private function assertShortcodeRenderedAsText( string $shortcode, string $content ): void {
		$this->assertStringNotContainsString( $shortcode, $content );
		$this->assertStringContainsString(
			$shortcode,
			html_entity_decode( $content, ENT_QUOTES, 'UTF-8' )
		);
	}

	public function return_probe_from_custom_macro( $value, $name ) {
		return 'test::macro' === $name ? '[jfb_security_probe]' : $value;
	}
}

class Testable_Form_Message_Builder extends Builder {

	/**
	 * @var Manager
	 */
	private $test_manager;

	public function __construct( Manager $manager ) {
		$this->test_manager = $manager;
	}

	public function get_manager( $data = array() ) {
		return $this->test_manager;
	}
}

class Tracking_Rich_Content_Module extends Rich_Content_Module {

	public $dynamic_preset_calls = 0;
	public $shortcode_calls       = 0;
	public $dynamic_preset_result = '';

	public function apply_dynamic_preset(
		string $content,
		bool $trusted = false,
		string $trusted_content = '',
		bool $without_preset = false
	): string {
		++$this->dynamic_preset_calls;

		return $this->dynamic_preset_result;
	}

	public function apply_shortcodes( string $content ): string {
		++$this->shortcode_calls;

		return parent::apply_shortcodes( $content );
	}
}
