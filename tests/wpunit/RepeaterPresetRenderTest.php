<?php

namespace JFB_Tests\Wpunit;

/**
 * A preset can fill a Repeater with rows (here from
 * a query var, the most exposed source). Each inner field gets its value
 * from the row, so the same rules as for top-level fields apply: the value
 * may not leave its attribute and may not be expanded as a shortcode when
 * core runs do_shortcode() over the page.
 */
class RepeaterPresetRenderTest extends \Codeception\TestCase\WPTestCase {

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

	private function block( string $name, array $attrs, ?string $inner = null ): string {
		$open = '<!-- wp:' . $name . ' ' . wp_json_encode( (object) $attrs ) . ' ';

		return null === $inner
			? $open . '/-->'
			: $open . '-->' . $inner . '<!-- /wp:' . $name . ' -->';
	}

	private function render( string $value ): string {
		$admin = self::factory()->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $admin );

		$preset = wp_json_encode(
			array(
				'jet_preset'        => 1,
				'from'              => 'query_var',
				'current_field_key' => 'rows',
				'query_var'         => 'rows',
			)
		);

		$inner = $this->block( 'jet-forms/text-field', array( 'name' => 'title' ) )
			. $this->block( 'jet-forms/textarea-field', array( 'name' => 'note' ) );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Repeater preset',
				'post_content' => wp_slash(
					$this->block( 'jet-forms/repeater-field', array( 'name' => 'rows', 'default' => $preset ), $inner )
				),
			)
		);

		wp_set_current_user( 0 );

		$_GET['rows'] = wp_slash(
			array(
				array( 'title' => $value, 'note' => $value ),
				array( 'title' => 'second', 'note' => 'second' ),
			)
		);

		return apply_filters(
			'the_content',
			$this->block( 'jet-forms/form-block', array( 'form_id' => $form_id ) )
		);
	}

	public function testRowValuesStayData(): void {
		$value = 'jfbq" data-jfbx="1" [' . self::MARKER_TAG . ']';
		$html  = $this->render( $value );

		$this->assertStringContainsString( 'jfbq', $html, 'row value was not rendered' );
		$this->assertStringNotContainsString( self::MARKER_OUTPUT, $html, 'expanded as shortcode' );

		$dom      = new \DOMDocument();
		$previous = libxml_use_internal_errors( true );
		$dom->loadHTML( '<?xml encoding="utf-8"?><body>' . $html . '</body>' );
		libxml_clear_errors();
		libxml_use_internal_errors( $previous );

		foreach ( $dom->getElementsByTagName( '*' ) as $element ) {
			$this->assertFalse( $element->hasAttribute( 'data-jfbx' ), "left its attribute in <{$element->tagName}>" );
		}
	}

	/**
	 * Backward compatibility: ordinary row values are rendered unchanged.
	 */
	public function testOrdinaryRowValuesAreUnchanged(): void {
		$html = $this->render( 'First row' );

		$this->assertStringContainsString( 'value="First row"', $html );
		$this->assertStringContainsString( '>First row</textarea>', $html );
		$this->assertStringContainsString( 'value="second"', $html );
	}
}
