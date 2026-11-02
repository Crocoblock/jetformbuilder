<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Admin\Table_Views\Column_Base;
use JFB_Modules\Form_Record\Admin\View_Columns\Error_Message_Column;
use JFB_Modules\Gateways\Meta_Boxes\Columns\Payer_First_Name_Column;
use JFB_Modules\Gateways\Table_Views\Columns\Payer_Column;

/**
 * Admin tables render `string` columns with v-html (EntryColumnsTable.vue,
 * EntryColumnList.vue). Values from visitors or external APIs (PayPal payer
 * data, error messages) must not keep active markup, while everything that
 * rendered correctly before (entities, ampersands, simple formatting) must
 * render the same way.
 */
class AdminColumnCellHtmlTest extends \Codeception\TestCase\WPTestCase {

	private function cell( Column_Base $column, array $record ) {
		return $column->get_column( $record )['value'];
	}

	public function testEventHandlerIsRemovedFromPayerName(): void {
		$value = $this->cell(
			new Payer_First_Name_Column(),
			array( 'first_name' => '<span onmouseover="jfbMarker()">John</span>' )
		);

		$this->assertStringNotContainsString( 'onmouseover', $value );
		$this->assertStringContainsString( 'John', $value );
	}

	public function testScriptElementIsRemovedFromErrorMessage(): void {
		$value = $this->cell(
			( new Error_Message_Column() ),
			array( 'message' => 'Failed<script>jfbMarker()</script>' )
		);

		$this->assertStringNotContainsString( '<script', $value );
		$this->assertStringStartsWith( 'Failed', $value );
	}

	public function testComposedPayerColumnIsCleanedToo(): void {
		$value = $this->cell(
			new Payer_Column(),
			array(
				'payer' => array(
					'first_name' => '<img src="x" onerror="jfbMarker()">',
					'last_name'  => 'Doe',
				),
			)
		);

		$this->assertStringNotContainsString( 'onerror', $value );
		$this->assertStringContainsString( 'Doe', $value );
	}

	/**
	 * Backward compatibility: strings without "<" are returned byte for byte,
	 * so titles from get_the_title() ("&#8211;") and values already escaped
	 * with esc_html() do not get double-encoded or changed.
	 */
	public function testStringsWithoutMarkupAreUntouched(): void {
		foreach (
			array(
				'Tom & Jerry',
				'Price &#8211; 10$',
				'O&#039;Brien',
				'a+b@example.com',
				'Quote " and apostrophe \'',
				'5 > 3',
			) as $raw
		) {
			$this->assertSame(
				$raw,
				$this->cell( new Payer_First_Name_Column(), array( 'first_name' => $raw ) ),
				$raw
			);
		}
	}

	/**
	 * Backward compatibility: formatting allowed in post content still renders.
	 */
	public function testAllowedFormattingIsKept(): void {
		$value = $this->cell(
			new Error_Message_Column(),
			array( 'message' => 'Field <b>email</b> is <a href="https://example.com/help">invalid</a>' )
		);

		$this->assertSame(
			'Field <b>email</b> is <a href="https://example.com/help">invalid</a>',
			$value
		);
	}

	public function testNonStringColumnTypesAreNotAffected(): void {
		$column = new Error_Message_Column();
		$column->set_type( 'rawArray' );

		$raw = array( 'text' => '<b>x</b>', 'href' => 'https://example.com' );

		$this->assertSame( $raw, $this->cell( $column, array( 'message' => $raw ) ) );
	}
}
