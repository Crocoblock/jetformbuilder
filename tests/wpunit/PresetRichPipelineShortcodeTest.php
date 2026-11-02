<?php

namespace JFB_Tests\Wpunit;

use JFB_Modules\Rich_Content\Module as Rich_Content_Module;

/**
 * Module::rich() serves e-mail fields (content, subject,
 * from name/address, reply-to), redirect URLs and webhook URLs. A dynamic
 * preset there resolves to visitor data (here a query var) and must not be
 * expanded as a shortcode by the pass's own do_shortcode(). The returned
 * string must stay byte-identical to the source value, and shortcodes the
 * author wrote into the template keep working.
 */
class PresetRichPipelineShortcodeTest extends \Codeception\TestCase\WPTestCase {

	const MARKER_TAG    = 'jfb_test_marker';
	const MARKER_OUTPUT = 'JFB_TEST_MARKER_EXPANDED';

	protected function setUp(): void {
		parent::setUp();

		add_shortcode(
			self::MARKER_TAG,
			function () {
				return self::MARKER_OUTPUT;
			}
		);
	}

	protected function tearDown(): void {
		$_GET = array();
		remove_shortcode( self::MARKER_TAG );

		parent::tearDown();
	}

	private function preset(): string {
		return wp_json_encode(
			array(
				'jet_preset'        => 1,
				'from'              => 'query_var',
				'current_field_key' => 'f',
				'query_var'         => 'f',
			)
		);
	}

	public function testPresetResultIsNotExpandedAndStaysIdentical(): void {
		$value     = 'Order [' . self::MARKER_TAG . '] #42';
		$_GET['f'] = wp_slash( $value );

		$result = Rich_Content_Module::rich( $this->preset() );

		$this->assertSame( $value, $result );
	}

	public function testTrustedPresetResultIsNotExpanded(): void {
		$value     = '[' . self::MARKER_TAG . ']';
		$_GET['f'] = wp_slash( $value );

		/** @var Rich_Content_Module $module */
		$module = jet_form_builder()->module( 'rich-content' );

		$this->assertSame( $value, $module->rich_trusted( $this->preset() ) );
	}

	public function testNoRuntimeTokenLeaksIntoResult(): void {
		$_GET['f'] = wp_slash( 'a [' . self::MARKER_TAG . '] b [' . self::MARKER_TAG . ' x="1"]' );

		$result = Rich_Content_Module::rich( $this->preset() );

		$this->assertStringNotContainsString( 'jfbmacro', $result );
		$this->assertStringNotContainsString( self::MARKER_OUTPUT, $result );
	}

	/**
	 * Backward compatibility: preset values without brackets, including URLs
	 * with query arrays, are returned exactly as before.
	 */
	public function testPlainPresetValuesAreUnchanged(): void {
		foreach (
			array(
				'https://example.com/thanks/?id=5&ref=form',
				'John Doe, john@example.com',
				'',
			) as $value
		) {
			$_GET['f'] = wp_slash( $value );

			$this->assertSame( $value, Rich_Content_Module::rich( $this->preset() ), $value );
		}
	}

	/**
	 * Backward compatibility opt-in restores the previous expansion.
	 */
	public function testOptInFilterRestoresPreviousBehaviour(): void {
		$_GET['f'] = wp_slash( '[' . self::MARKER_TAG . ']' );

		add_filter( 'jet-form-builder/rich-content/allow-preset-shortcodes', '__return_true' );

		try {
			$this->assertSame( self::MARKER_OUTPUT, Rich_Content_Module::rich( $this->preset() ) );
		} finally {
			remove_filter( 'jet-form-builder/rich-content/allow-preset-shortcodes', '__return_true' );
		}
	}

	/**
	 * Backward compatibility: shortcodes the author wrote into an e-mail
	 * template or URL are still expanded.
	 */
	public function testAuthorShortcodeInTemplateStillWorks(): void {
		$this->assertSame(
			'Thanks ' . self::MARKER_OUTPUT,
			Rich_Content_Module::rich( 'Thanks [' . self::MARKER_TAG . ']' )
		);
	}
}
