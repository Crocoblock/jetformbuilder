<?php

namespace JFB_Tests\Wpunit;

/**
 * Min/max of Number, Range, Date, Datetime and Time fields are run as
 * calculated formulas in the browser. When min/max is set to a dynamic
 * preset, its result is data from the preset source (post meta, query
 * var...), which visitors can write: a value with "%" (a formula macro)
 * is not printed. Numbers, dates, times and the author's own formulas
 * keep working.
 */
class FieldLimitPresetTest extends \Codeception\TestCase\WPTestCase {

	const PAYLOAD = '(window.jfbLimitMarker=1,%this%)';

	private $admin_id;

	protected function setUp(): void {
		parent::setUp();

		$this->admin_id = self::factory()->user->create( array( 'role' => 'administrator' ) );
	}

	protected function tearDown(): void {
		$_GET = array();
		wp_set_current_user( 0 );

		parent::tearDown();
	}

	private function preset( string $query_var ): string {
		return wp_json_encode(
			array(
				'jet_preset'        => 1,
				'from'              => 'query_var',
				'current_field_key' => $query_var,
				'query_var'         => $query_var,
			)
		);
	}

	/**
	 * Renders one field block and returns the attributes of its input.
	 */
	private function input_attrs( string $block, array $attrs ): array {
		wp_set_current_user( $this->admin_id );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Field limits',
				'post_content' => wp_slash(
					'<!-- wp:jet-forms/' . $block . ' ' . wp_json_encode(
						array_merge( array( 'name' => 'limited' ), $attrs )
					) . ' /-->'
				),
			)
		);

		wp_set_current_user( 0 );

		$html = (string) jet_fb_render_form( array( 'form_id' => $form_id ) );

		$dom = new \DOMDocument();
		libxml_use_internal_errors( true );
		$dom->loadHTML( '<?xml encoding="utf-8"?>' . $html );
		libxml_clear_errors();

		$node = ( new \DOMXPath( $dom ) )->query( '//input[@data-field-name="limited"]' )->item( 0 );

		$this->assertNotNull( $node, 'no input rendered for ' . $block );

		$result = array();

		foreach ( $node->attributes as $attr ) {
			$result[ $attr->name ] = $attr->value;
		}

		return $result;
	}

	public function blocksProvider(): array {
		return array(
			'number'   => array( 'number-field', '5', '10' ),
			'range'    => array( 'range-field', '5', '10' ),
			'date'     => array( 'date-field', '2026-01-01', '2026-12-31' ),
			'datetime' => array( 'datetime-field', '2026-01-01T09:00', '2026-12-31T18:00' ),
			'time'     => array( 'time-field', '09:00', '18:00' ),
		);
	}

	/**
	 * @dataProvider blocksProvider
	 */
	public function testPresetFormulaIsNotPrintedAsLimit( string $block ): void {
		$_GET['mn'] = wp_slash( self::PAYLOAD );
		$_GET['mx'] = wp_slash( self::PAYLOAD );

		$attrs = $this->input_attrs(
			$block,
			array(
				'min' => $this->preset( 'mn' ),
				'max' => $this->preset( 'mx' ),
			)
		);

		foreach ( array( 'min', 'max', 'data-min', 'data-max' ) as $name ) {
			$this->assertStringNotContainsString(
				'jfbLimitMarker',
				$attrs[ $name ] ?? '',
				$block . ' ' . $name
			);
		}
	}

	/**
	 * Backward compatibility: a number, date or time from a preset is kept.
	 *
	 * @dataProvider blocksProvider
	 */
	public function testPresetValueIsKept( string $block, string $min, string $max ): void {
		$_GET['mn'] = $min;
		$_GET['mx'] = $max;

		$attrs = $this->input_attrs(
			$block,
			array(
				'min' => $this->preset( 'mn' ),
				'max' => $this->preset( 'mx' ),
			)
		);

		$this->assertSame( $min, $attrs['min'] ?? null );
		$this->assertSame( $max, $attrs['max'] ?? null );
	}

	/**
	 * Backward compatibility: limits typed by the form author are kept.
	 *
	 * @dataProvider blocksProvider
	 */
	public function testAuthorLimitsAreKept( string $block, string $min, string $max ): void {
		$attrs = $this->input_attrs(
			$block,
			array(
				'min' => $min,
				'max' => $max,
			)
		);

		$this->assertSame( $min, $attrs['min'] ?? null );
		$this->assertSame( $max, $attrs['max'] ?? null );
	}

	/**
	 * Backward compatibility: a formula typed by the form author in Number
	 * min/max is still printed and calculated in the browser.
	 */
	public function testAuthorFormulaInNumberLimitIsKept(): void {
		$attrs = $this->input_attrs(
			'number-field',
			array(
				'min' => '%this% - 1',
				'max' => '%this% + 1',
			)
		);

		$this->assertSame( '%this% - 1', $attrs['min'] ?? null );
		$this->assertSame( '%this% + 1', $attrs['max'] ?? null );
	}
}
