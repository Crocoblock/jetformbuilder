<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Classes\Tools;
use JFB_Compatibility\Jet_Popup\Jet_Popup;
use Crocoblock\Blocks_Style\Style_Inserter;

/**
 * CSS from style settings is printed inside <style>
 * elements (form inline styles, Style Manager, JetPopup inline styles). A
 * value must not be able to close the element; real stylesheets must pass
 * through byte for byte.
 */
class InlineCssEscapingTest extends \Codeception\TestCase\WPTestCase {

	public function closingTagProvider(): array {
		return array(
			'lowercase'  => array( 'a{color:red}</style><b>x</b>' ),
			'mixed case' => array( 'a{color:red}</StYlE ><b>x</b>' ),
			'in string'  => array( 'a::after{content:"</style>"}' ),
		);
	}

	/**
	 * @dataProvider closingTagProvider
	 */
	public function testClosingSequenceIsNeutralized( string $css ): void {
		$this->assertDoesNotMatchRegularExpression( '#</style#i', Tools::safe_inline_css( $css ) );
	}

	/**
	 * Backward compatibility: real CSS is unchanged.
	 */
	public function testRealCssIsUnchanged(): void {
		$css = '.jet-form-builder > .row{margin:0 auto;font-family:"Open Sans",sans-serif}'
			. '.a::before{content:"<";background:url("https://example.com/a.png?x=1&y=2")}'
			. '@media (max-width: 600px){.b{display:none}}'
			. ':root{--jfb-gap:calc(1em + 2px)}';

		$this->assertSame( $css, Tools::safe_inline_css( $css ) );
	}

	public function testStyleManagerWrapperUsesSafeCss(): void {
		$html = Style_Inserter::styles_with_tag( 'a{}</style><b>x</b>' );

		$this->assertSame( 1, substr_count( strtolower( $html ), '</style' ), $html );
		$this->assertStringEndsWith( '</style>', $html );
	}

	public function testJetPopupInlineStylesUseSafeCss(): void {
		$popup  = ( new \ReflectionClass( Jet_Popup::class ) )->newInstanceWithoutConstructor();
		$method = new \ReflectionMethod( Jet_Popup::class, 'prepend_inline_styles' );
		$method->setAccessible( true );

		$html = $method->invoke(
			$popup,
			'<div>popup</div>',
			array(
				array( 'handle' => 'h', 'index' => 0, 'content' => 'a{}</style><b>x</b>' ),
				array( 'handle' => 'h', 'index' => 1, 'content' => '.ok{color:red}' ),
			)
		);

		$this->assertSame( 2, substr_count( strtolower( $html ), '</style' ), $html );
		$this->assertStringContainsString( '<style id="h-inline-style-1">.ok{color:red}</style>', $html );
	}
}
