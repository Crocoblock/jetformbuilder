<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Blocks\Types\Media_Field;
use Jet_Form_Builder\Blocks\Render\Media_Field_Render;

/**
 * Regression test for #20390 — unescaped output in the Media field preview
 * renderer (Media_Field_Render::render_previews()).
 *
 * The preset value of a media field is interpolated into the preview HTML at
 * three sinks (data-file, data-file-name, <img src>). A quote/angle-bracket
 * payload must not be able to break out of the attribute / tag it lands in.
 */
class MediaFieldPreviewEscapingTest extends \Codeception\TestCase\WPTestCase {

	/**
	 * @var \WpunitTester
	 */
	protected $tester;

	/**
	 * Render the preset preview for a given "default" file value and return the
	 * produced HTML. Mirrors what Base::set_preset() feeds into the renderer.
	 *
	 * @param array $default value of block_attrs['default'] (array of files).
	 */
	private function render_previews_for( array $default ): string {
		$block_type = new Media_Field();

		// render_previews() reads block_attrs['default']; get_field_name() (used
		// by the preset hidden input template) reads block_attrs['max_files'].
		$block_type->block_attrs = array(
			'default'   => $default,
			'max_files' => 1,
			'name'      => 'mf',
		);

		$render = new Media_Field_Render( $block_type );

		$method = new \ReflectionMethod( Media_Field_Render::class, 'render_previews' );
		$method->setAccessible( true );

		return (string) $method->invoke( $render );
	}

	public function testDataFileAttributePayloadIsEscaped() {
		// Reflected arm, sink #1: quote-only payload aimed at data-file="%file_url%".
		$payload = '" onmouseover=alert(document.domain) x="';

		$html = $this->render_previews_for( array( array( 'url' => $payload ) ) );

		$this->assertStringContainsString(
			'data-file="' . esc_attr( $payload ) . '"',
			$html,
			'The complete payload should remain inside the data-file attribute.'
		);
		$this->assertStringNotContainsString(
			'data-file="" onmouseover=alert(document.domain)',
			$html,
			'The payload must not break out into a live onmouseover attribute.'
		);
	}

	public function testImgSrcPayloadIsEscaped() {
		// Reflected arm, sink #3: the <img src="%s"> path is only reached when the
		// "url" ends with an image extension, so the payload keeps a .jpg tail.
		$payload = '"><img src=x onerror=alert(document.domain)>.jpg';

		$html = $this->render_previews_for( array( array( 'url' => $payload ) ) );

		$this->assertStringContainsString(
			'<img src="' . esc_url( $payload ) . '"',
			$html,
			'The preview image URL should be escaped for the src context.'
		);
		$this->assertStringNotContainsString(
			'<img src=x onerror=alert(document.domain)>',
			$html,
			'An injected <img onerror> element must not be emitted verbatim.'
		);
		$this->assertSame(
			1,
			substr_count( $html, '<img ' ),
			'Only the intended preview image element should be rendered.'
		);
	}

	public function testFileNameAttributePayloadIsEscaped() {
		// sink #2: data-file-name="%file_name%" is the basename of the url.
		$payload = '/path/" onmouseover=alert(1) x=".png';

		$html = $this->render_previews_for( array( array( 'url' => $payload ) ) );
		$file_name = '" onmouseover=alert(1) x=".png';

		$this->assertStringContainsString(
			'data-file-name="' . esc_attr( $file_name ) . '"',
			$html,
			'The complete basename should remain inside data-file-name.'
		);
		$this->assertStringNotContainsString(
			'data-file-name="" onmouseover=alert(1)',
			$html,
			'The basename must not break out into a live onmouseover attribute.'
		);
	}

	public function testLegitimateImageUrlStillRenders() {
		// A normal attachment URL must pass through unbroken (no false positives).
		$url  = 'https://example.com/wp-content/uploads/2026/08/photo.jpg';
		$html = $this->render_previews_for( array( array( 'url' => $url ) ) );

		$this->assertStringContainsString( 'data-file="' . esc_attr( $url ) . '"', $html );
		$this->assertStringContainsString( '<img src="' . esc_url( $url ) . '"', $html );
	}

	public function testEmptyDefaultRendersNothing() {
		$this->assertSame( '', $this->render_previews_for( array() ) );
	}
}
