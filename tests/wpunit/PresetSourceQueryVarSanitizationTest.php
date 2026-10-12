<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Presets\Types\Dynamic_Preset;

/**
 * Preset_Source_Query_Var hands the request's own query string to a field
 * default, which frontend macros can later echo (#20585). Values that contain
 * markup must be cleaned; everything else must reach the field unchanged.
 */
class PresetSourceQueryVarSanitizationTest extends \Codeception\TestCase\WPTestCase {

	protected function tearDown(): void {
		$_GET = array();

		parent::tearDown();
	}

	/**
	 * @param array|string $value Raw (unslashed) query value, as sent by the visitor.
	 *
	 * @return mixed
	 */
	private function read_query_var( $value ) {
		// WordPress adds slashes to $_GET before plugins see it.
		$_GET['jfb_qv'] = wp_slash( $value );

		$json = wp_json_encode(
			array(
				'jet_preset'        => 1,
				'from'              => 'query_var',
				'current_field_key' => 'jfb_qv',
			)
		);

		return ( new Dynamic_Preset() )->parse_json( $json );
	}

	public function testEventHandlerIsStrippedFromTag(): void {
		$result = $this->read_query_var( 'x<img src=x onerror=alert(1337)>' );

		$this->assertStringNotContainsString( 'onerror', $result );
		$this->assertStringStartsWith( 'x', $result );
	}

	public function testScriptTagIsRemoved(): void {
		$result = $this->read_query_var( 'a<script>alert(1)</script>b' );

		$this->assertStringNotContainsString( '<script', $result );
	}

	public function testJavascriptUrlIsRemovedFromLink(): void {
		$result = $this->read_query_var( '<a href="javascript:alert(1)">click</a>' );

		$this->assertStringNotContainsString( 'javascript:', $result );
	}

	public function testQuotesAreUnslashedAndHarmlessTextIsUntouched(): void {
		$this->assertSame( 'O\'Brien said "hi"', $this->read_query_var( 'O\'Brien said "hi"' ) );
	}

	/**
	 * A "<" that does not start a tag is plain text and must survive; an
	 * over-eager sanitizer would turn it into "5  3".
	 */
	public function testPlainTextWithAngleBracketsIsUntouched(): void {
		$this->assertSame( '5 < 6 and 7 > 3', $this->read_query_var( '5 < 6 and 7 > 3' ) );
	}

	public function testUrlEmailLineBreaksAndUnicodeAreUntouched(): void {
		foreach (
			array(
				'https://example.com/?a=1&b=2',
				'a+b@example.com',
				"line1\nline2",
				'Hello, world 100%',
			) as $value
		) {
			$this->assertSame( $value, $this->read_query_var( $value ) );
		}
	}

	public function testNestedArrayValuesAreSanitized(): void {
		$result = $this->read_query_var(
			array(
				'a' => 'ok',
				'b' => array( 'x<img src=x onerror=alert(1)>', '5 < 6' ),
			)
		);

		$this->assertSame( 'ok', $result['a'] );
		$this->assertStringNotContainsString( 'onerror', $result['b'][0] );
		$this->assertSame( '5 < 6', $result['b'][1] );
	}

	public function testArrayKeysAreSanitized(): void {
		$result = $this->read_query_var( array( 'k<img src=x onerror=alert(1)>' => '1' ) );

		$this->assertIsArray( $result );

		foreach ( array_keys( $result ) as $key ) {
			$this->assertStringNotContainsString( '<', (string) $key );
		}
	}

	/**
	 * Keys that become equal after sanitizing keep the first value instead of
	 * letting a later one overwrite it.
	 */
	public function testKeysCollidingAfterSanitizingKeepTheFirstValue(): void {
		$result = $this->read_query_var(
			array(
				'k'          => 'first',
				'k<b></b>'   => 'second',
			)
		);

		$this->assertSame( array( 'k' => 'first' ), $result );
	}

	public function testMissingQueryVarStillReturnsEmptyString(): void {
		$_GET = array();

		$json = wp_json_encode(
			array(
				'jet_preset'        => 1,
				'from'              => 'query_var',
				'current_field_key' => 'jfb_missing',
			)
		);

		$this->assertSame( '', ( new Dynamic_Preset() )->parse_json( $json ) );
	}
}
