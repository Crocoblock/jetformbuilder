<?php

namespace JFB_Tests\Wpunit;

/**
 * Core do_shortcode() over the page runs a shortcode found in an attribute
 * value of any tag. Values that visitors can write and that are printed in
 * attributes (field values from presets, the referrer URL, Dynamic Value,
 * Conditional Block and validation rule values from presets) must not run
 * a shortcode. The browser decodes the entities, so the values the script
 * reads do not change. Shortcodes the form author wrote in a formula,
 * Dynamic Value or a rule keep working.
 */
class AttributeShortcodeTest extends \Codeception\TestCase\WPTestCase {

	const MARKER = '[jfb_attr_marker]';

	public static $hits = 0;

	private $admin_id;

	protected function setUp(): void {
		parent::setUp();

		self::$hits     = 0;
		$this->admin_id = self::factory()->user->create( array( 'role' => 'administrator' ) );

		add_shortcode(
			'jfb_attr_marker',
			static function () {
				++AttributeShortcodeTest::$hits;

				return 'ATTR-MARKER-EXECUTED';
			}
		);
	}

	protected function tearDown(): void {
		$_GET = array();
		unset( $_SERVER['QUERY_STRING'] );
		remove_shortcode( 'jfb_attr_marker' );
		wp_set_current_user( 0 );

		parent::tearDown();
	}

	private function block( string $name, array $attrs ): string {
		return '<!-- wp:jet-forms/' . $name . ' ' . wp_json_encode( (object) $attrs ) . ' /-->';
	}

	private function preset( string $var ): string {
		return wp_json_encode(
			array(
				'jet_preset'        => 1,
				'from'              => 'query_var',
				'current_field_key' => $var,
				'query_var'         => $var,
			)
		);
	}

	/**
	 * Renders the form as a guest and runs do_shortcode() twice over it, as
	 * core and a page builder may do.
	 */
	private function render( string $blocks ): \DOMXPath {
		wp_set_current_user( $this->admin_id );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Attributes',
				'post_content' => wp_slash( $blocks ),
			)
		);

		wp_set_current_user( 0 );

		$html = do_shortcode( do_shortcode( (string) jet_fb_render_form( array( 'form_id' => $form_id ) ) ) );

		$dom = new \DOMDocument();
		libxml_use_internal_errors( true );
		$dom->loadHTML( '<?xml encoding="utf-8"?>' . $html );
		libxml_clear_errors();

		return new \DOMXPath( $dom );
	}

	private function attr( \DOMXPath $xpath, string $query, string $name ): string {
		$node = $xpath->query( $query )->item( 0 );

		$this->assertNotNull( $node, $query );

		return $node->getAttribute( $name );
	}

	public function testDynamicValueFromPreset(): void {
		$_GET['p'] = self::MARKER;

		$xpath  = $this->render(
			$this->block( 'text-field', array( 'name' => 'city', 'value' => array( 'groups' => array( array( 'to_set' => $this->preset( 'p' ) ) ) ) ) )
		);
		$groups = json_decode( $this->attr( $xpath, '//*[@data-value][contains(@class,"jet-form-builder-row")]', 'data-value' ), true );

		$this->assertSame( 0, self::$hits );
		$this->assertSame( self::MARKER, $groups[0]['to_set'] );
	}

	public function testConditionValueFromPreset(): void {
		$_GET['p'] = self::MARKER;

		$xpath = $this->render(
			$this->block( 'text-field', array( 'name' => 'city' ) )
			. '<!-- wp:jet-forms/conditional-block ' . wp_json_encode(
				array(
					'func_type'  => 'show',
					'conditions' => array(
						array(
							'field'    => 'city',
							'operator' => 'equal',
							'value'    => $this->preset( 'p' ),
						),
					),
				)
			) . ' -->'
			. $this->block( 'text-field', array( 'name' => 'inner' ) )
			. '<!-- /wp:jet-forms/conditional-block -->'
		);

		$conditions = json_decode( $this->attr( $xpath, '//*[@data-jfb-conditional]', 'data-jfb-conditional' ), true );

		$this->assertSame( 0, self::$hits );
		$this->assertSame( self::MARKER, $conditions[0]['value'] );
	}

	public function testValidationRuleFromPreset(): void {
		$_GET['p'] = self::MARKER;

		$xpath = $this->render(
			$this->block(
				'text-field',
				array(
					'name'       => 'city',
					'validation' => array(
						'type'  => 'advanced',
						'rules' => array(
							array(
								'type'    => 'equal',
								'value'   => $this->preset( 'p' ),
								'message' => 'Wrong',
							),
						),
					),
				)
			)
		);

		$rules = json_decode( $this->attr( $xpath, '//*[@data-validation-rules]', 'data-validation-rules' ), true );

		$this->assertSame( 0, self::$hits );
		$this->assertSame( self::MARKER, $rules[0]['value'] );
	}

	public function testFieldValueFromPreset(): void {
		$_GET['p'] = self::MARKER;

		$xpath = $this->render( $this->block( 'text-field', array( 'name' => 'city', 'default' => $this->preset( 'p' ) ) ) );

		$this->assertSame( 0, self::$hits );
		$this->assertSame( self::MARKER, $this->attr( $xpath, '//input[@name="city"]', 'value' ) );
	}

	public function testReferrerQueryString(): void {
		$_SERVER['QUERY_STRING'] = 'q=' . self::MARKER;

		$xpath = $this->render( $this->block( 'text-field', array( 'name' => 'city' ) ) );

		$this->assertSame( 0, self::$hits );
		$this->assertStringEndsWith( '?q=' . self::MARKER, $this->attr( $xpath, '//input[@name="_jet_engine_refer"]', 'value' ) );
	}

	/**
	 * Backward compatibility: a shortcode the form author wrote in "Set
	 * value" of Dynamic Value is still expanded by the page.
	 */
	public function testAuthorShortcodeInDynamicValueIsKept(): void {
		$xpath  = $this->render(
			$this->block( 'text-field', array( 'name' => 'city', 'value' => array( 'groups' => array( array( 'to_set' => self::MARKER ) ) ) ) )
		);
		$groups = json_decode( $this->attr( $xpath, '//*[@data-value][contains(@class,"jet-form-builder-row")]', 'data-value' ), true );

		$this->assertSame( 'ATTR-MARKER-EXECUTED', $groups[0]['to_set'] );
	}

	/**
	 * A value from a preset is marked on its own: a shortcode the author
	 * wrote in another group of the same field still runs.
	 */
	public function testMixedDynamicValueGroups(): void {
		$_GET['p'] = self::MARKER;

		$xpath  = $this->render(
			$this->block(
				'text-field',
				array(
					'name'  => 'city',
					'value' => array(
						'groups' => array(
							array( 'to_set' => $this->preset( 'p' ) ),
							array( 'to_set' => self::MARKER ),
						),
					),
				)
			)
		);
		$groups = json_decode( $this->attr( $xpath, '//*[@data-value][contains(@class,"jet-form-builder-row")]', 'data-value' ), true );

		$this->assertSame( self::MARKER, $groups[0]['to_set'] );
		$this->assertSame( 'ATTR-MARKER-EXECUTED', $groups[1]['to_set'] );
	}

	public function testMixedConditions(): void {
		$_GET['p'] = self::MARKER;

		$xpath = $this->render(
			$this->block( 'text-field', array( 'name' => 'city' ) )
			. '<!-- wp:jet-forms/conditional-block ' . wp_json_encode(
				array(
					'func_type'  => 'show',
					'conditions' => array(
						array(
							'field'    => 'city',
							'operator' => 'equal',
							'value'    => $this->preset( 'p' ),
						),
						array(
							'field'    => 'city',
							'operator' => 'equal',
							'value'    => self::MARKER,
						),
					),
				)
			) . ' -->'
			. $this->block( 'text-field', array( 'name' => 'inner' ) )
			. '<!-- /wp:jet-forms/conditional-block -->'
		);

		$conditions = json_decode( $this->attr( $xpath, '//*[@data-jfb-conditional]', 'data-jfb-conditional' ), true );

		$this->assertSame( self::MARKER, $conditions[0]['value'] );
		$this->assertSame( 'ATTR-MARKER-EXECUTED', $conditions[1]['value'] );
	}

	public function testMixedValidationRules(): void {
		$_GET['p'] = self::MARKER;

		$xpath = $this->render(
			$this->block(
				'text-field',
				array(
					'name'       => 'city',
					'validation' => array(
						'type'  => 'advanced',
						'rules' => array(
							array(
								'type'    => 'equal',
								'value'   => $this->preset( 'p' ),
								'message' => 'Wrong',
							),
							array(
								'type'    => 'equal',
								'value'   => self::MARKER,
								'message' => 'Wrong',
							),
						),
					),
				)
			)
		);

		$rules = json_decode( $this->attr( $xpath, '//*[@data-validation-rules]', 'data-validation-rules' ), true );

		$this->assertSame( self::MARKER, $rules[0]['value'] );
		$this->assertSame( 'ATTR-MARKER-EXECUTED', $rules[1]['value'] );
	}

	/**
	 * Backward compatibility: a shortcode the author wrote in Dynamic Value
	 * of a Hidden Field is left for the page, as before.
	 */
	public function testAuthorShortcodeInHiddenDynamicValueIsKept(): void {
		$xpath = $this->render(
			$this->block(
				'hidden-field',
				array(
					'name'  => 'secret',
					'value' => array( 'groups' => array( array( 'to_set' => self::MARKER ) ) ),
				)
			)
		);

		// Core runs a shortcode in an <input> attribute on each pass (its output
		// is dropped for this tag), as before.
		$this->assertGreaterThan( 0, self::$hits, 'the page ran the author shortcode' );
		$this->assertStringContainsString( 'jfb_attr_marker', $this->attr( $xpath, '//input[@name="secret"]', 'data-dynamic-value' ) );
	}

	/**
	 * Backward compatibility: a shortcode in the formula of a Calculated
	 * field is still expanded by the page.
	 */
	public function testAuthorShortcodeInFormulaIsKept(): void {
		$xpath = $this->render(
			$this->block( 'calculated-field', array( 'name' => 'calc', 'calc_formula' => '2 * ' . self::MARKER ) )
		);

		$this->assertStringContainsString( 'ATTR-MARKER-EXECUTED', $this->attr( $xpath, '//*[@data-formula]', 'data-formula' ) );
	}
}
