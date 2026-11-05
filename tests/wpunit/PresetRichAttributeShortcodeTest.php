<?php

namespace JFB_Tests\Wpunit;

use JFB_Modules\Rich_Content\Module as Rich_Content_Module;

/**
 * Block attributes such as Label and Description
 * accept a dynamic preset. Its result is visitor data (here a query var), so
 * it must not be expanded as a shortcode - neither by the rich-content pass
 * itself nor by core do_shortcode() over the page. Shortcodes written by the
 * form author keep working, and non-HTML consumers (redirect URL, e-mail)
 * keep receiving plain brackets.
 */
class PresetRichAttributeShortcodeTest extends \Codeception\TestCase\WPTestCase {

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

	private function create_form( array $attrs ): int {
		$attrs['name'] = 'x';

		return (int) wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Rich attribute preset',
				'post_content' => wp_slash( '<!-- wp:jet-forms/text-field ' . wp_json_encode( $attrs ) . ' /-->' ),
			)
		);
	}

	private function render_paths( int $form_id ): array {
		return array(
			'direct'      => jet_fb_render_form( array( 'form_id' => $form_id ) ),
			'the_content' => apply_filters(
				'the_content',
				'<!-- wp:jet-forms/form-block ' . wp_json_encode( array( 'form_id' => $form_id ) ) . ' /-->'
			),
		);
	}

	public function attributeProvider(): array {
		return array(
			'label'       => array( 'label' ),
			'description' => array( 'desc' ),
		);
	}

	/**
	 * @dataProvider attributeProvider
	 */
	public function testPresetResultIsNotExpanded( string $attribute ): void {
		$form_id   = $this->create_form( array( $attribute => $this->preset() ) );
		$_GET['f'] = wp_slash( 'Hello [' . self::MARKER_TAG . ']' );

		foreach ( $this->render_paths( $form_id ) as $path => $html ) {
			$this->assertStringNotContainsString( self::MARKER_OUTPUT, $html, $path );
			$this->assertStringContainsString( 'Hello &#x5B;' . self::MARKER_TAG . '&#x5D;', $html, $path );
		}
	}

	/**
	 * Decimal bracket entities in the preset value: do_shortcode() turns
	 * "&#91;" back into "[" on its way out, so a later pass must still not
	 * expand them. (Here kses also pads them to "&#091;", which the core does
	 * not unescape; this test guards the result, the raw path is covered by
	 * PresetShortcodeNeutralizationTest.)
	 *
	 * @dataProvider attributeProvider
	 */
	public function testDecimalBracketEntitiesSurviveRepeatedPasses( string $attribute ): void {
		$form_id   = $this->create_form( array( $attribute => $this->preset() ) );
		$_GET['f'] = wp_slash( 'Hello &#91;' . self::MARKER_TAG . '&#93;' );

		foreach ( $this->render_paths( $form_id ) as $path => $html ) {
			$this->assertStringNotContainsString( self::MARKER_OUTPUT, do_shortcode( do_shortcode( $html ) ), $path );
		}
	}

	public function testNeutralizeShortcodesConvertsDecimalEntities(): void {
		$this->assertSame(
			'&#x5B;a&#x5D; &#x5B;b&#x5D;',
			\Jet_Form_Builder\Classes\Tools::neutralize_shortcodes( '[a] &#91;b&#93;' )
		);
	}

	/**
	 * Backward compatibility: a preset result without brackets is unchanged.
	 */
	public function testPresetResultWithoutBracketsIsUnchanged(): void {
		$form_id   = $this->create_form( array( 'label' => $this->preset() ) );
		$_GET['f'] = wp_slash( 'Hello, Anna' );

		$this->assertStringContainsString(
			'>Hello, Anna</',
			jet_fb_render_form( array( 'form_id' => $form_id ) )
		);
	}

	/**
	 * Backward compatibility: a shortcode the author typed into the label is
	 * not preset data and is still expanded.
	 */
	public function testAuthorShortcodeInLabelStillWorks(): void {
		$form_id = $this->create_form( array( 'label' => 'Name [' . self::MARKER_TAG . ']' ) );

		$this->assertStringContainsString(
			'Name ' . self::MARKER_OUTPUT,
			jet_fb_render_form( array( 'form_id' => $form_id ) )
		);
	}

	/**
	 * Scope: rich() keeps serving redirect URLs and e-mail fields, where HTML
	 * entities would change the value, so its preset results are not encoded.
	 */
	public function testNonHtmlRichKeepsPlainBrackets(): void {
		$_GET['f'] = wp_slash( 'https://example.com/?ids[]=1' );

		$this->assertSame( 'https://example.com/?ids[]=1', Rich_Content_Module::rich( $this->preset() ) );
	}
}
