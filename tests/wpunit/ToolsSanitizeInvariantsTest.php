<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Classes\Tools;

/**
 * Pins down what the input layer
 * (Tools::sanitize_text_field / sanitize_recursive) does and does NOT do.
 *
 * It is a cleanup of submitted text, not an XSS defence: quote-only values
 * pass unchanged on purpose, because quotes are legitimate in form values.
 * Treating this layer as output escaping leads to stored XSS. If this test starts failing, the input layer changed and
 * every consumer of stored form values must be re-checked.
 */
class ToolsSanitizeInvariantsTest extends \Codeception\TestCase\WPTestCase {

	public function testMarkupIsFilteredWithKses(): void {
		$value = Tools::sanitize_text_field( 'a<script>jfbMarker()</script><b onclick="x">b</b>' );

		$this->assertStringNotContainsString( '<script', $value );
		$this->assertStringNotContainsString( 'onclick', $value );
		$this->assertStringContainsString( '<b>b</b>', $value );
	}

	/**
	 * Documented limitation: without "<" nothing is changed, so a value can
	 * still close an HTML attribute. Output must always escape.
	 */
	public function testQuoteOnlyValueIsNotChanged(): void {
		$value = '" data-x="1';

		$this->assertSame( $value, Tools::sanitize_text_field( $value ) );
	}

	public function testOrdinaryTextIsNotChanged(): void {
		foreach (
			array(
				"O'Brien & Sons",
				'5 > 3',
				'https://example.com/?a=1&b=2',
				"line 1\nline 2",
				'[not_a_shortcode]',
				'Анна, 100%',
			) as $value
		) {
			$this->assertSame( $value, Tools::sanitize_text_field( $value ), $value );
		}
	}

	public function testRecursiveSanitizesKeysAndNestedValues(): void {
		$result = Tools::sanitize_recursive(
			array(
				'ok'                  => 'v',
				'k<img src=x>'        => '1',
				'nested'              => array( 'x' => 'a<script>b</script>c' ),
			)
		);

		$this->assertSame( 'v', $result['ok'] );
		$this->assertStringNotContainsString( '<script', $result['nested']['x'] );

		foreach ( array_keys( $result ) as $key ) {
			$this->assertStringNotContainsString( '<', (string) $key );
		}
	}

	/**
	 * JSON stored in fields and printed into inline scripts relies on "/"
	 * being escaped, so "</script>" cannot close the script element.
	 */
	public function testEncodeJsonEscapesSlashes(): void {
		$this->assertStringNotContainsString( '</script>', Tools::encode_json( array( 'v' => '</script>' ) ) );
	}
}
