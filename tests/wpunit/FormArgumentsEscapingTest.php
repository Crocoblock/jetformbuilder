<?php

namespace JFB_Tests\Wpunit;

/**
 * Elementor and Bricks widgets pass their settings
 * to jet_fb_render_form(). A widget can be configured by anyone who may edit
 * the page, which is not the same as being allowed to edit forms, so every
 * form-level argument must be escaped or allow-listed.
 */
class FormArgumentsEscapingTest extends \Codeception\TestCase\WPTestCase {

	const MARKER = 'jfbq" data-jfbx="1"><img src=x onerror=jfbMarker()>';

	private function violations( string $html ): array {
		$found    = array();
		$dom      = new \DOMDocument();
		$previous = libxml_use_internal_errors( true );
		$dom->loadHTML( '<?xml encoding="utf-8"?><body>' . $html . '</body>' );
		libxml_clear_errors();
		libxml_use_internal_errors( $previous );

		foreach ( $dom->getElementsByTagName( '*' ) as $element ) {
			if ( $element->hasAttribute( 'data-jfbx' ) ) {
				$found[] = "left its attribute (<{$element->tagName}>)";
			}
			foreach ( $element->attributes as $attribute ) {
				if ( 0 === stripos( $attribute->name, 'on' ) ) {
					$found[] = "live {$attribute->name} (<{$element->tagName}>)";
				}
			}
		}

		return $found;
	}

	public function argumentProvider(): array {
		$cases = array();

		foreach (
			array(
				'className', 'anchor', 'submit_type', 'required_mark', 'fields_layout',
				'fields_label_tag', 'markup_type', 'load_nonce', 'validation_type',
				'enable_progress', 'clear', 'use_csrf',
			) as $arg
		) {
			$cases[ $arg ] = array( $arg );
		}

		return $cases;
	}

	/**
	 * @dataProvider argumentProvider
	 */
	public function testFormArgumentIsEscaped( string $arg ): void {
		$admin = self::factory()->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $admin );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Form args',
				'post_content' => wp_slash(
					'<!-- wp:jet-forms/text-field {"name":"f","label":"Name","required":true} /-->'
				),
			)
		);

		wp_set_current_user( 0 );

		$html = (string) jet_fb_render_form( array( 'form_id' => $form_id, $arg => self::MARKER ) );

		$this->assertStringContainsString( 'jet-form-builder', $html, 'form was not rendered' );
		// Free-text arguments must actually reach the output (not a vacuous
		// check); the others are allow-listed values and are simply dropped.
		if ( in_array( $arg, array( 'className', 'anchor', 'required_mark' ), true ) ) {
			$this->assertStringContainsString( 'jfbq', $html, "$arg did not reach the output" );
		}

		$this->assertSame( array(), $this->violations( $html ), $arg );
	}
}
