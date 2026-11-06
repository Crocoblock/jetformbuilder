<?php

namespace JFB_Tests\Wpunit;

/**
 * A preset value (here a query var, the most exposed source)
 * is rendered by every field type through the real page path (the_content,
 * which runs core do_shortcode() after the blocks). For every type the value
 * must stay data: it may not leave its attribute and may not be expanded as
 * a shortcode. A private marker shortcode is used, nothing real executes.
 */
class PresetRenderMatrixTest extends \Codeception\TestCase\WPTestCase {

	const MARKER_TAG    = 'jfb_test_marker';
	const MARKER_OUTPUT = 'JFB_TEST_MARKER_EXPANDED';
	const PREFIX        = 'jfbq';

	/**
	 * Calls of the marker shortcode. Core runs a shortcode found in an
	 * <input> attribute but drops its output, so the calls are counted, not
	 * only the output.
	 *
	 * @var int
	 */
	private static $hits = 0;

	protected function setUp(): void {
		parent::setUp();

		self::$hits = 0;
		add_shortcode(
			self::MARKER_TAG,
			static function () {
				++self::$hits;

				return self::MARKER_OUTPUT;
			}
		);
	}

	protected function tearDown(): void {
		$_GET = array();
		remove_shortcode( self::MARKER_TAG );

		parent::tearDown();
	}

	private function value(): string {
		return self::PREFIX . '"a\'b [' . self::MARKER_TAG . '] c';
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

	public function fieldProvider(): array {
		$options = array(
			array( 'value' => 'a', 'label' => 'A' ),
			array( 'value' => 'b', 'label' => 'B' ),
		);

		return array(
			'text'           => array( 'text-field', array() ),
			'textarea'       => array( 'textarea-field', array() ),
			'wysiwyg'        => array( 'wysiwyg-field', array() ),
			'number'         => array( 'number-field', array() ),
			'range'          => array( 'range-field', array() ),
			'date'           => array( 'date-field', array() ),
			'datetime'       => array( 'datetime-field', array() ),
			'time'           => array( 'time-field', array() ),
			'color picker'   => array( 'color-picker-field', array() ),
			'phone'          => array( 'phone-field', array() ),
			'calculated'     => array( 'calculated-field', array( 'calc_formula' => '1' ) ),
			'media'          => array( 'media-field', array() ),
			'select'         => array( 'select-field', array( 'field_options' => $options ) ),
			'radio custom'   => array( 'radio-field', array( 'field_options' => $options, 'custom_option' => array( 'allow' => true ) ) ),
			'checkbox custom' => array( 'checkbox-field', array( 'field_options' => $options, 'custom_option' => array( 'allow' => true ) ) ),
			'switcher'       => array( 'switcher', array() ),
			'hidden preset'  => array( 'hidden-field', array() ),
			'hidden query var' => array( 'hidden-field', array( 'field_value' => 'query_var', 'query_var_key' => 'f' ), false ),
		);
	}

	private function render( string $block, array $attrs, bool $use_preset = true ): string {
		$attrs['name'] = 'f';

		if ( $use_preset ) {
			$attrs['default'] = $this->preset();
		}

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Preset matrix ' . $block,
				'post_content' => wp_slash( '<!-- wp:jet-forms/' . $block . ' ' . wp_json_encode( $attrs ) . ' /-->' ),
			)
		);

		$_GET['f'] = wp_slash( $this->value() );

		return apply_filters(
			'the_content',
			'<!-- wp:jet-forms/form-block ' . wp_json_encode( array( 'form_id' => $form_id ) ) . ' /-->'
		);
	}

	/**
	 * @dataProvider fieldProvider
	 */
	public function testPresetValueStaysData( string $block, array $attrs, bool $use_preset = true ): void {
		$html = $this->render( $block, $attrs, $use_preset );

		$this->assertSame( 0, self::$hits, 'preset shortcode callback was executed' );
		$this->assertStringNotContainsString( self::MARKER_OUTPUT, $html, 'expanded as shortcode' );
		$this->assertStringNotContainsString( self::PREFIX . '"', $html, 'left its attribute' );
	}

	/**
	 * Backward compatibility: the encoded preview attributes decode back to
	 * the exact original value, which is what the frontend reads via dataset.
	 */
	public function testMediaPreviewAttributesDecodeToOriginalValue(): void {
		$html = $this->render( 'media-field', array() );

		// The first data-file belongs to the <template> placeholder, skip it.
		preg_match_all( '/data-file="([^"]*)"/', $html, $matches );
		$rendered = array_values( array_diff( $matches[1], array( '%file_url%' ) ) );

		$this->assertNotEmpty( $rendered );
		$this->assertSame(
			$this->value(),
			html_entity_decode( $rendered[0], ENT_QUOTES | ENT_HTML5, 'UTF-8' )
		);
	}

	/**
	 * Backward compatibility: a regular file URL keeps the preview image.
	 */
	public function testMediaPreviewImageUrlIsUnchanged(): void {
		$_GET = array();

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Media url',
				'post_content' => wp_slash(
					'<!-- wp:jet-forms/media-field ' . wp_json_encode( array( 'name' => 'f', 'default' => $this->preset() ) ) . ' /-->'
				),
			)
		);

		$_GET['f'] = 'https://example.com/uploads/photo.jpg';

		$html = apply_filters(
			'the_content',
			'<!-- wp:jet-forms/form-block ' . wp_json_encode( array( 'form_id' => $form_id ) ) . ' /-->'
		);

		// Core may add attributes such as decoding="async" to the image.
		$this->assertMatchesRegularExpression( '/<img[^>]*\\ssrc="https:\\/\\/example\\.com\\/uploads\\/photo\\.jpg"/', $html );
		$this->assertStringContainsString( 'data-file="https://example.com/uploads/photo.jpg"', $html );
	}
}
