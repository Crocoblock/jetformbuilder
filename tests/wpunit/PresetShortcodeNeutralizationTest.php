<?php

namespace JFB_Tests\Wpunit;

/**
 * WordPress runs do_shortcode() over the whole rendered page after the form
 * block is rendered (the_content priority 11, the [jet_fb_form] shortcode,
 * Bricks). A preset value printed as element text (textarea, WYSIWYG) must
 * therefore not be expanded as a shortcode, while the visible and submitted
 * value stays the same and the author's own defaults keep working.
 *
 * A private marker shortcode is used so the test never executes real
 * shortcodes.
 */
class PresetShortcodeNeutralizationTest extends \Codeception\TestCase\WPTestCase {

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

	private function query_var_preset( string $var ): string {
		return wp_json_encode(
			array(
				'jet_preset'        => 1,
				'from'              => 'query_var',
				'current_field_key' => $var,
				'query_var'         => $var,
			)
		);
	}

	private function create_form( string $blocks ): int {
		return (int) wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Preset shortcode test',
				'post_content' => wp_slash( $blocks ),
			)
		);
	}

	private function block( string $name, array $attrs ): string {
		return '<!-- wp:jet-forms/' . $name . ' ' . wp_json_encode( $attrs ) . ' /-->';
	}

	private function render_paths( int $form_id ): array {
		return array(
			'the_content' => apply_filters(
				'the_content',
				$this->block( 'form-block', array( 'form_id' => $form_id ) )
			),
			'shortcode'   => do_shortcode( '[jet_fb_form form_id="' . $form_id . '"]' ),
		);
	}

	public function testTextareaPresetIsNotExpandedAsShortcode(): void {
		$form_id = $this->create_form(
			$this->block(
				'textarea-field',
				array(
					'name'    => 'note',
					'default' => $this->query_var_preset( 'note' ),
				)
			)
		);

		$_GET['note'] = '[' . self::MARKER_TAG . ']';

		foreach ( $this->render_paths( $form_id ) as $path => $html ) {
			$this->assertStringNotContainsString( self::MARKER_OUTPUT, $html, $path );
			$this->assertStringContainsString( '&#x5B;' . self::MARKER_TAG . '&#x5D;', $html, $path );
		}
	}

	/**
	 * do_shortcode() turns decimal bracket entities back into brackets on its
	 * way out, so the protection must survive a second pass (theme or page
	 * builder running do_shortcode() over already processed content).
	 */
	public function testTextareaPresetSurvivesRepeatedShortcodePasses(): void {
		$form_id = $this->create_form(
			$this->block(
				'textarea-field',
				array(
					'name'    => 'note',
					'default' => $this->query_var_preset( 'note' ),
				)
			)
		);

		$_GET['note'] = '[' . self::MARKER_TAG . ']';

		$html = do_shortcode( do_shortcode( do_shortcode( '[jet_fb_form form_id="' . $form_id . '"]' ) ) );

		$this->assertStringNotContainsString( self::MARKER_OUTPUT, $html );
	}

	public function testWysiwygPresetIsNotExpandedAsShortcode(): void {
		$form_id = $this->create_form(
			$this->block(
				'wysiwyg-field',
				array(
					'name'    => 'body',
					'default' => $this->query_var_preset( 'body' ),
				)
			)
		);

		$_GET['body'] = 'Hello [' . self::MARKER_TAG . ']';

		foreach ( $this->render_paths( $form_id ) as $path => $html ) {
			$this->assertStringNotContainsString( self::MARKER_OUTPUT, $html, $path );
		}
	}

	/**
	 * Core shortcodes with attributes chosen by the visitor through the
	 * form-level Preset Settings (source: URL Query Variable): the value is
	 * shown as text in the field and nothing is expanded, both when the form
	 * is embedded as a block and through the [jet_fb_form] shortcode.
	 */
	public function coreShortcodeProvider(): array {
		return array(
			'caption' => array( 'A[caption]CAP[/caption]', 'textarea-field' ),
			'audio'   => array( 'B[audio src=http://example.test/a.mp3]', 'textarea-field' ),
			'gallery' => array( 'C[gallery include=1,2,3 link=file]', 'textarea-field' ),
			'wysiwyg' => array( 'D[caption]CAP[/caption]', 'wysiwyg-field' ),
		);
	}

	/**
	 * @dataProvider coreShortcodeProvider
	 */
	public function testFormPresetFromQueryVarIsNotExpanded( string $value, string $field ): void {
		$form_id = $this->create_form( $this->block( $field, array( 'name' => 'msg' ) ) );

		update_post_meta(
			$form_id,
			'_jf_preset',
			wp_json_encode(
				array(
					'enabled'    => true,
					'from'       => 'query_var',
					'fields_map' => array( 'msg' => array( 'key' => 'm' ) ),
				)
			)
		);

		$_GET['m'] = $value;

		foreach ( $this->render_paths( $form_id ) as $path => $html ) {
			$this->assertStringNotContainsString( 'wp-audio-shortcode', $html, $path );
			$this->assertStringNotContainsString( 'gallery-item', $html, $path );
			$this->assertStringNotContainsString( 'wp-caption', $html, $path );

			$dom = new \DOMDocument();
			libxml_use_internal_errors( true );
			$dom->loadHTML( '<?xml encoding="utf-8"?>' . $html );
			libxml_clear_errors();

			$textarea = $dom->getElementsByTagName( 'textarea' )->item( 0 );

			$this->assertNotNull( $textarea, $path );
			$this->assertSame( $value, trim( $textarea->textContent ), $path );
		}
	}

	public function richEditProvider(): array {
		return array(
			'visual editor'  => array( true ),
			'plain textarea' => array( false ),
		);
	}

	/**
	 * The editor's textarea gets the preset value exactly: brackets are
	 * encoded only in the HTML, after WordPress escaped the content for the
	 * editor, so the browser decodes them back to "[" and "]". Submitting
	 * the textarea as is (text mode, no TinyMCE) keeps the value.
	 *
	 * @dataProvider richEditProvider
	 */
	public function testWysiwygPresetKeepsBracketsInEditorValue( bool $rich_edit ): void {
		$form_id = $this->create_form(
			$this->block(
				'wysiwyg-field',
				array(
					'name'    => 'body',
					'default' => $this->query_var_preset( 'body' ),
				)
			)
		);

		$value        = 'Hello [' . self::MARKER_TAG . '] [example] a & b';
		$_GET['body'] = $value;

		add_filter( 'user_can_richedit', $rich_edit ? '__return_true' : '__return_false' );

		try {
			$html = do_shortcode( '[jet_fb_form form_id="' . $form_id . '"]' );
		} finally {
			remove_filter( 'user_can_richedit', $rich_edit ? '__return_true' : '__return_false' );
		}

		$this->assertStringNotContainsString( self::MARKER_OUTPUT, $html );
		$this->assertStringNotContainsString( '[example]', $html );

		$dom = new \DOMDocument();
		libxml_use_internal_errors( true );
		$dom->loadHTML( '<?xml encoding="utf-8"?>' . $html );
		libxml_clear_errors();

		$textareas = $dom->getElementsByTagName( 'textarea' );

		$this->assertSame( 1, $textareas->length );
		$this->assertSame( $value, $textareas->item( 0 )->textContent );
	}

	/**
	 * Backward compatibility: brackets that are plain text in a preset value
	 * still reach the field (as entities the browser decodes back).
	 */
	public function testPlainBracketsInPresetSurviveAsText(): void {
		$form_id = $this->create_form(
			$this->block(
				'textarea-field',
				array(
					'name'    => 'note',
					'default' => $this->query_var_preset( 'note' ),
				)
			)
		);

		$_GET['note'] = 'Order [A-12] ok';

		$html = do_shortcode( '[jet_fb_form form_id="' . $form_id . '"]' );

		$this->assertStringContainsString( 'Order &#x5B;A-12&#x5D; ok', $html );
		$this->assertSame(
			'Order [A-12] ok',
			html_entity_decode( 'Order &#x5B;A-12&#x5D; ok', ENT_QUOTES | ENT_HTML5 )
		);
	}

	/**
	 * Backward compatibility: a shortcode the form author typed into the
	 * textarea's own Default Value is not a preset and behaves as before.
	 */
	public function testAuthorDefaultValueIsUnchanged(): void {
		$form_id = $this->create_form(
			$this->block(
				'textarea-field',
				array(
					'name'    => 'note',
					'default' => '[' . self::MARKER_TAG . ']',
				)
			)
		);

		$html = apply_filters( 'the_content', $this->block( 'form-block', array( 'form_id' => $form_id ) ) );

		$this->assertStringContainsString( self::MARKER_OUTPUT, $html );
	}
}
