<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Classes\Tools;

/**
 * %META::key% in a Calculated Field (and Repeater) formula is replaced on the
 * server with the post meta value. The formula is executed as JavaScript in
 * the browser, and post meta can be written by a visitor through a public
 * Insert Post form.
 *
 * Invariant: a meta value enters the formula as a number, true/false or a
 * string literal without "%"; never as code. The rendered formulas are also
 * saved to tests/_output/meta-formula-e2e.json, so they can be executed by
 * the client CalculatedFormula in a Node check (metaFormula.e2e.js).
 */
class CalculatedMetaFormulaTest extends \Codeception\TestCase\WPTestCase {

	const PAYLOAD = '(__jfbMarker(),7)//%meta::video%';

	/**
	 * Formulas produced by the real renderer, for the JS end-to-end check:
	 * [ label, formula, expect executed, expected result | null ].
	 *
	 * @var array
	 */
	private static $e2e = array();

	private $admin_id;

	protected function setUp(): void {
		parent::setUp();

		$this->admin_id = self::factory()->user->create( array( 'role' => 'administrator' ) );
	}

	public static function tearDownAfterClass(): void {
		parent::tearDownAfterClass();

		file_put_contents(
			codecept_output_dir( 'meta-formula-e2e.json' ),
			wp_json_encode( self::$e2e, JSON_PRETTY_PRINT )
		);
	}

	private function block( string $name, array $attrs, ?string $inner = null ): string {
		$open = '<!-- wp:' . $name . ' ' . wp_json_encode( (object) $attrs ) . ' ';

		return null === $inner
			? $open . '/-->'
			: $open . '-->' . $inner . '<!-- /wp:' . $name . ' -->';
	}

	/**
	 * Renders a form on a post with the given meta and returns the values of
	 * all data-formula attributes (decoded, as the browser reads them).
	 */
	private function formulas( string $content, array $meta ): array {
		global $post;

		wp_set_current_user( $this->admin_id );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Meta formula',
				'post_content' => wp_slash( $content ),
			)
		);

		wp_set_current_user( 0 );

		// The post a visitor wrote through a public Insert Post form.
		$post_id = self::factory()->post->create( array( 'post_author' => 0 ) );

		foreach ( $meta as $key => $value ) {
			update_post_meta( $post_id, $key, wp_slash( $value ) );
		}

		$previous = $post;
		$post     = get_post( $post_id ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited

		try {
			$html = (string) jet_fb_render_form( array( 'form_id' => $form_id ) );
		} finally {
			$post = $previous; // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		}

		$dom = new \DOMDocument();
		libxml_use_internal_errors( true );
		$dom->loadHTML( '<?xml encoding="utf-8"?>' . $html );
		libxml_clear_errors();

		$found = array();

		foreach ( ( new \DOMXPath( $dom ) )->query( '//*[@data-formula]' ) as $node ) {
			$found[] = $node->getAttribute( 'data-formula' );
		}

		return $found;
	}

	private function calculated( string $formula ): string {
		return $this->block( 'jet-forms/number-field', array( 'name' => 'units', 'default' => '3' ) )
			. $this->block(
				'jet-forms/calculated-field',
				array(
					'name'         => 'total',
					'calc_formula' => $formula,
				)
			);
	}

	private function repeater( string $formula ): string {
		return $this->block( 'jet-forms/number-field', array( 'name' => 'units', 'default' => '3' ) )
			. $this->block(
				'jet-forms/repeater-field',
				array(
					'name'               => 'rows',
					'repeater_calc_type' => 'custom',
					'calc_formula'       => $formula,
				),
				$this->block( 'jet-forms/text-field', array( 'name' => 'item' ) )
			);
	}

	/**
	 * A value inserted as data: only A-Z, a-z, 0-9, "_" and \uXXXX escapes,
	 * and it decodes back to the stored value. $quoted: whether it carries its
	 * own string quotes (code position) or not (inside the author's string).
	 */
	private function assertDataToken( string $value, string $token, bool $quoted ): void {
		if ( $quoted ) {
			$this->assertSame( '"', substr( $token, 0, 1 ), $token );
			$this->assertSame( '"', substr( $token, -1 ), $token );
			$token = substr( $token, 1, -1 );
		}

		$this->assertMatchesRegularExpression( '/^(?:[A-Za-z0-9_]|\\\\u[0-9a-f]{4})*$/', $token );
		$this->assertSame( $value, json_decode( '"' . $token . '"' ) );
	}

	public function bareProvider(): array {
		return array(
			'integer string' => array( '9', '9' ),
			'padded decimal' => array( ' 12.5 ', '12.5' ),
			'negative'       => array( '-3', '-3' ),
			'exponent'       => array( '1e3', '1e3' ),
			'leading zero'   => array( '0123', '0123' ),
			'int'            => array( 7, '7' ),
			'float'          => array( 2.5, '2.5' ),
			'empty'          => array( '', '' ),
			'missing meta'   => array( false, '' ),
			'true'           => array( 'true', 'true' ),
			'false'          => array( 'false', 'false' ),
			'array'          => array( array( 1, 2 ), '' ),
			'infinity'       => array( INF, '' ),
		);
	}

	/**
	 * Numbers, true/false and empty values are inserted as before.
	 *
	 * @dataProvider bareProvider
	 */
	public function testBareValues( $value, string $expected ): void {
		$this->assertSame( $expected, Tools::to_formula_literal( $value ) );
	}

	public function textProvider(): array {
		return array(
			'text'          => array( 'Large box' ),
			'quotes'        => array( 'a"b\'c`d${e}' ),
			'percent'       => array( '50%' ),
			'decimal comma' => array( '1,5' ),
			'backslash'     => array( 'a\\b' ),
			'new line'      => array( "a\nb" ),
			'unicode'       => array( 'Ціна €' ),
			'formula code'  => array( self::PAYLOAD ),
		);
	}

	/**
	 * Text in code position becomes a string literal.
	 *
	 * @dataProvider textProvider
	 */
	public function testTextIsStringLiteral( string $value ): void {
		$this->assertDataToken( $value, Tools::to_formula_literal( $value ), true );
	}

	/**
	 * Inside the author's string only the escaped characters are inserted,
	 * so the string keeps its own quotes ('%META::name%' gives 'Alice').
	 *
	 * @dataProvider textProvider
	 */
	public function testTextInsideStringHasNoOwnQuotes( string $value ): void {
		$this->assertDataToken( $value, Tools::to_formula_literal( $value, true ), false );
	}

	public function testValuesInsideString(): void {
		$this->assertSame( 'Alice', Tools::to_formula_literal( 'Alice', true ) );
		$this->assertSame( '9', Tools::to_formula_literal( '9', true ) );
		$this->assertSame( 'true', Tools::to_formula_literal( 'true', true ) );
		$this->assertSame( '', Tools::to_formula_literal( '', true ) );
		$this->assertDataToken( ' 12.5 ', Tools::to_formula_literal( ' 12.5 ', true ), false );
	}

	public function contextProvider(): array {
		return array(
			'code and strings' => array(
				"%META::a% + '%META::b%' + \"x %META::c%\" + `t \${ %META::d% } %META::e%`",
				array( false, true, true, false, true ),
			),
			'escaped quote'    => array( "'it\\'s %META::a%' + %META::b%", array( true, false ) ),
			'line comment'     => array( "1 // it's\n + %META::a%", array( false ) ),
			'block comment'    => array( '/* "x */ %META::a%', array( false ) ),
			'nested braces'    => array( '`${ { a: 1 }.a } %META::a%` + %META::b%', array( true, false ) ),
			'field macro'      => array( "'%FIELD::x%' + %META::a%", array( true, false ) ),
		);
	}

	/**
	 * @dataProvider contextProvider
	 */
	public function testMacroStringContexts( string $formula, array $expected ): void {
		$this->assertSame( $expected, Tools::formula_macro_string_contexts( $formula ) );
	}

	public function testFormulaCodeInMetaIsDataInCalculatedField(): void {
		$formulas = $this->formulas( $this->calculated( '%units% * %META::cost%' ), array( 'cost' => self::PAYLOAD ) );

		$this->assertCount( 1, $formulas );
		$this->assertStringStartsWith( '%units% * ', $formulas[0] );
		$this->assertDataToken( self::PAYLOAD, substr( $formulas[0], strlen( '%units% * ' ) ), true );

		self::$e2e[] = array( 'calculated: formula code in meta', $formulas[0], false, null );
	}

	public function testTwoMetaValuesCannotJoinIntoCode(): void {
		$formulas = $this->formulas(
			$this->calculated( '%META::cost% * %units% + %META::ship%' ),
			array(
				'cost' => '%units',
				'ship' => '+__jfbMarker()//',
			)
		);

		$this->assertSame( 2, substr_count( $formulas[0], '%' ), $formulas[0] );

		self::$e2e[] = array( 'calculated: two meta values', $formulas[0], false, null );
	}

	public function testFormulaCodeInMetaIsDataInRepeaterFormula(): void {
		$formulas = $this->formulas( $this->repeater( '%units% * %META::cost%' ), array( 'cost' => self::PAYLOAD ) );
		$formula  = (string) end( $formulas );

		$this->assertStringStartsWith( '%units% * ', $formula );
		$this->assertDataToken( self::PAYLOAD, substr( $formula, strlen( '%units% * ' ) ), true );

		self::$e2e[] = array( 'repeater: formula code in meta', $formula, false, null );
	}

	/**
	 * Backward compatibility: a macro inside the author's quotes gives the
	 * plain value, without extra quotes.
	 */
	public function testMetaInsideQuotesKeepsPlainValue(): void {
		$formulas = $this->formulas( $this->calculated( "'%META::name%'" ), array( 'name' => 'Alice' ) );

		$this->assertSame( array( "'Alice'" ), $formulas );

		self::$e2e[] = array( 'calculated: quoted meta (compat)', $formulas[0], false, 'Alice' );

		$formulas = $this->formulas( $this->calculated( "'%META::name%'.length" ), array( 'name' => "O'Brien" ) );

		self::$e2e[] = array( 'calculated: quoted meta with quote', $formulas[0], false, 7 );
	}

	public function testPayloadInsideQuotesStaysInString(): void {
		$formulas = $this->formulas(
			$this->calculated( "'%META::cost%' + \"%META::cost%\" + `%META::cost%`" ),
			array( 'cost' => "'+__jfbMarker()+\"+__jfbMarker()+`+\${__jfbMarker()}+" )
		);

		self::$e2e[] = array( 'calculated: payload inside quotes', $formulas[0], false, null );
	}

	/**
	 * A regular expression literal with a quote is not recognised, so the
	 * macro after it is taken for one inside a string. The value still
	 * cannot run: outside a string the escapes are not valid code.
	 */
	public function testWrongContextGuessStaysInert(): void {
		$formulas = $this->formulas(
			$this->calculated( "/'/.test('a') + %META::cost%" ),
			array( 'cost' => '__jfbMarker()' )
		);

		self::$e2e[] = array( 'calculated: wrong context guess', $formulas[0], false, null );
	}

	/**
	 * Backward compatibility: the documented %quantity% * %META::price% case.
	 */
	public function testNumericMetaIsUnchanged(): void {
		$formulas = $this->formulas( $this->calculated( '%units% * %META::cost%' ), array( 'cost' => '9' ) );

		$this->assertSame( array( '%units% * 9' ), $formulas );

		self::$e2e[] = array( 'calculated: numeric meta (compat)', $formulas[0], false, 27 );

		$formulas = $this->formulas( $this->repeater( '%units% + %META::cost%' ), array( 'cost' => '2.5' ) );

		$this->assertContains( '%units% + 2.5', $formulas );
	}

	/**
	 * Backward compatibility: text meta used as text keeps working.
	 */
	public function testTextMetaWorksAsString(): void {
		$formulas = $this->formulas( $this->calculated( '%META::unit_label%.length' ), array( 'unit_label' => 'kg' ) );

		$this->assertSame( array( '"kg".length' ), $formulas );

		self::$e2e[] = array( 'calculated: text meta (compat)', $formulas[0], false, 2 );
	}

	public function testFieldMacroIsUnchanged(): void {
		$this->assertSame(
			array( '%units% * 2' ),
			$this->formulas( $this->calculated( '%FIELD::units% * 2' ), array() )
		);
	}

	public function testSiteOwnerCanOptInToFormulaCodeForTrustedKey(): void {
		$filter = static function ( $value, $raw, $key ) {
			return 'owner_formula' === $key ? $raw : $value;
		};

		add_filter( 'jet-form-builder/calculated-field/meta-value', $filter, 10, 3 );

		try {
			$formulas = $this->formulas(
				$this->calculated( '%META::owner_formula% + %META::cost%' ),
				array(
					'owner_formula' => '%units% * 1.2',
					'cost'          => self::PAYLOAD,
				)
			);
		} finally {
			remove_filter( 'jet-form-builder/calculated-field/meta-value', $filter, 10 );
		}

		$this->assertStringStartsWith( '%units% * 1.2 + ', $formulas[0] );
		$this->assertDataToken( self::PAYLOAD, substr( $formulas[0], strlen( '%units% * 1.2 + ' ) ), true );
	}
}
