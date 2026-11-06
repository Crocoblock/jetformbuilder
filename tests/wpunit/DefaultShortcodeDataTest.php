<?php

namespace JFB_Tests\Wpunit;

/**
 * "Default Value", Min and Max of a field run shortcodes. A shortcode can
 * print data that visitors write (post meta through an Insert Post form).
 * The browser calculates a default with field macros and Min/Max as
 * formulas, so a value a shortcode produced is used as data: the default is
 * set as a plain value, a Min/Max with "%" is not printed. Formulas the form
 * author typed keep working.
 */
class DefaultShortcodeDataTest extends \Codeception\TestCase\WPTestCase {

	const PAYLOAD = "(window.jfbTest=1,'%x::y%')";

	public static $output = '';

	private $admin_id;

	protected function setUp(): void {
		parent::setUp();

		$this->admin_id = self::factory()->user->create( array( 'role' => 'administrator' ) );

		add_shortcode(
			'jfb_default_data',
			static function () {
				return DefaultShortcodeDataTest::$output;
			}
		);
	}

	protected function tearDown(): void {
		remove_shortcode( 'jfb_default_data' );
		remove_all_filters( 'jet-form-builder/fields/default-shortcode-is-data' );
		wp_set_current_user( 0 );

		parent::tearDown();
	}

	private function block( string $name, array $attrs ): string {
		return '<!-- wp:jet-forms/' . $name . ' ' . wp_json_encode( (object) $attrs ) . ' /-->';
	}

	private function render( string $blocks ): \DOMXPath {
		wp_set_current_user( $this->admin_id );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Default shortcode',
				'post_content' => wp_slash( $blocks ),
			)
		);

		wp_set_current_user( 0 );

		$dom = new \DOMDocument();
		libxml_use_internal_errors( true );
		$dom->loadHTML( '<?xml encoding="utf-8"?>' . jet_fb_render_form( array( 'form_id' => $form_id ) ) );
		libxml_clear_errors();

		return new \DOMXPath( $dom );
	}

	private function field( \DOMXPath $xpath, string $name ): \DOMElement {
		$node = $xpath->query( '//*[@name="' . $name . '"]' )->item( 0 );

		$this->assertInstanceOf( \DOMElement::class, $node, $name );

		return $node;
	}

	public function testShortcodeOutputIsData(): void {
		self::$output = self::PAYLOAD;

		$xpath = $this->render(
			$this->block( 'text-field', array( 'name' => 'text', 'default' => '[jfb_default_data]' ) )
			. $this->block( 'textarea-field', array( 'name' => 'area', 'default' => '[jfb_default_data]' ) )
			. $this->block( 'number-field', array( 'name' => 'num', 'min' => '[jfb_default_data]', 'max' => '[jfb_default_data]' ) )
			. $this->block(
				'select-field',
				array(
					'name'          => 'sel',
					'default'       => '[jfb_default_data]',
					'field_options' => array( array( 'value' => 'a', 'label' => 'A' ) ),
				)
			)
		);

		$text = $this->field( $xpath, 'text' );
		$this->assertFalse( $text->hasAttribute( 'data-value' ) );
		$this->assertSame( self::PAYLOAD, $text->getAttribute( 'value' ) );

		$area = $this->field( $xpath, 'area' );
		$this->assertFalse( $area->hasAttribute( 'data-value' ) );
		$this->assertSame( self::PAYLOAD, $area->textContent );

		$num = $this->field( $xpath, 'num' );
		$this->assertFalse( $num->hasAttribute( 'min' ) );
		$this->assertFalse( $num->hasAttribute( 'max' ) );

		$sel = $this->field( $xpath, 'sel' );
		$this->assertSame( '1', $sel->getAttribute( 'data-default-literal' ) );
	}

	/**
	 * Backward compatibility: a shortcode that prints a number or a plain
	 * value still sets it.
	 */
	public function testPlainShortcodeOutputIsKept(): void {
		self::$output = '5';

		$xpath = $this->render(
			$this->block( 'text-field', array( 'name' => 'text', 'default' => '[jfb_default_data]' ) )
			. $this->block( 'number-field', array( 'name' => 'num', 'min' => '[jfb_default_data]' ) )
		);

		$this->assertSame( '5', $this->field( $xpath, 'text' )->getAttribute( 'value' ) );
		$this->assertSame( '5', $this->field( $xpath, 'num' )->getAttribute( 'min' ) );
	}

	/**
	 * Backward compatibility: a formula the form author typed in "Default
	 * Value" and in Min is still calculated in the browser.
	 */
	public function testAuthorFormulaIsKept(): void {
		$xpath = $this->render(
			$this->block( 'number-field', array( 'name' => 'a' ) )
			. $this->block( 'text-field', array( 'name' => 'text', 'default' => '%a% + 1' ) )
			. $this->block( 'number-field', array( 'name' => 'num', 'min' => '%a% - 1' ) )
		);

		$this->assertSame( '%a% + 1', $this->field( $xpath, 'text' )->getAttribute( 'data-value' ) );
		$this->assertSame( '%a% - 1', $this->field( $xpath, 'num' )->getAttribute( 'min' ) );
	}

	/**
	 * Backward compatibility: the author's formula with a shortcode that
	 * prints a plain number (a rate from post meta) or nothing is still
	 * calculated.
	 */
	public function testAuthorFormulaWithNumberShortcodeIsKept(): void {
		foreach ( array( '0.9', '-2', ' 15 ', '' ) as $number ) {
			self::$output = $number;

			$xpath = $this->render(
				$this->block( 'number-field', array( 'name' => 'a' ) )
				. $this->block( 'text-field', array( 'name' => 'text', 'default' => '%a% * [jfb_default_data] + [jfb_default_data]' ) )
				. $this->block( 'number-field', array( 'name' => 'num', 'min' => '%a% - [jfb_default_data]' ) )
				. $this->block(
					'select-field',
					array(
						'name'          => 'sel',
						'default'       => '%a% + [jfb_default_data]',
						'field_options' => array( array( 'value' => 'a', 'label' => 'A' ) ),
					)
				)
			);

			$this->assertSame( "%a% * $number + $number", $this->field( $xpath, 'text' )->getAttribute( 'data-value' ), $number );
			$this->assertSame( "%a% - $number", $this->field( $xpath, 'num' )->getAttribute( 'min' ), $number );
			$this->assertFalse( $this->field( $xpath, 'sel' )->hasAttribute( 'data-default-literal' ), $number );
		}
	}

	/**
	 * In the author's formula, a shortcode that prints anything but a plain
	 * number makes the whole value data: it is not calculated.
	 */
	public function testAuthorFormulaWithOtherShortcodeIsData(): void {
		$outputs = array(
			'1,window.jfbTest=1',
			'1);window.jfbTest=1;(1',
			'0.9 + %b%',
			'1e5',
			'0x10',
			'5abc',
			'1.2.3',
			"5\n;window.jfbTest=1",
		);

		foreach ( $outputs as $output ) {
			self::$output = $output;

			$xpath = $this->render(
				$this->block( 'number-field', array( 'name' => 'a' ) )
				. $this->block( 'text-field', array( 'name' => 'text', 'default' => '%a% * [jfb_default_data]' ) )
				. $this->block( 'number-field', array( 'name' => 'num', 'min' => '%a% - [jfb_default_data]' ) )
			);

			$text = $this->field( $xpath, 'text' );
			$this->assertFalse( $text->hasAttribute( 'data-value' ), $output );
			$this->assertSame( '%a% * ' . $output, $text->getAttribute( 'value' ), $output );
			$this->assertFalse( $this->field( $xpath, 'num' )->hasAttribute( 'min' ), $output );
		}
	}

	/**
	 * One shortcode with a number and another with other text: the value is
	 * data.
	 */
	public function testMixedShortcodeOutputsAreData(): void {
		self::$output = '2';
		add_shortcode(
			'jfb_default_text',
			static function () {
				return 'window.jfbTest=1';
			}
		);

		try {
			$xpath = $this->render(
				$this->block( 'number-field', array( 'name' => 'a' ) )
				. $this->block( 'text-field', array( 'name' => 'text', 'default' => '%a% * [jfb_default_data] + [jfb_default_text]' ) )
			);
		} finally {
			remove_shortcode( 'jfb_default_text' );
		}

		$this->assertFalse( $this->field( $xpath, 'text' )->hasAttribute( 'data-value' ) );
	}

	/**
	 * The jet-form-builder/fields/default-shortcode-is-data filter restores
	 * the old behaviour for a site that needs it.
	 */
	public function testFilterRestoresFormula(): void {
		self::$output = '%a% * 2';
		add_filter( 'jet-form-builder/fields/default-shortcode-is-data', '__return_false' );

		$xpath = $this->render(
			$this->block( 'number-field', array( 'name' => 'a' ) )
			. $this->block( 'text-field', array( 'name' => 'text', 'default' => '[jfb_default_data]' ) )
		);

		$this->assertSame( '%a% * 2', $this->field( $xpath, 'text' )->getAttribute( 'data-value' ) );
	}
}
