<?php

namespace JFB_Tests\Wpunit;

/**
 * Option labels generated from site data (post meta via the
 * "Get values list from database" generator, post titles, term names) can be
 * written by visitors, e.g. through an Insert Post action. Core
 * do_shortcode() runs over the rendered page, so such labels must not be
 * expanded as shortcodes. Labels typed by the form author keep working.
 */
class GeneratedOptionLabelShortcodeTest extends \Codeception\TestCase\WPTestCase {

	const MARKER_TAG    = 'jfb_test_marker';
	const MARKER_OUTPUT = 'JFB_TEST_MARKER_EXPANDED';
	const META_KEY      = 'jfb_test_option_meta';

	protected function setUp(): void {
		parent::setUp();

		add_shortcode(
			self::MARKER_TAG,
			function () {
				return self::MARKER_OUTPUT;
			}
		);

		$value   = 'Item [' . self::MARKER_TAG . ']';
		$post_id = wp_insert_post(
			array(
				'post_title'  => wp_slash( $value ),
				'post_status' => 'publish',
				'post_type'   => 'post',
			)
		);
		add_post_meta( $post_id, self::META_KEY, wp_slash( $value ) );
		wp_insert_term( $value, 'category' );
	}

	protected function tearDown(): void {
		remove_shortcode( self::MARKER_TAG );

		parent::tearDown();
	}

	private function render( string $block, array $attrs ): string {
		$attrs['name'] = 'o';

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Generated options',
				'post_content' => wp_slash( '<!-- wp:jet-forms/' . $block . ' ' . wp_json_encode( $attrs ) . ' /-->' ),
			)
		);

		return apply_filters(
			'the_content',
			'<!-- wp:jet-forms/form-block ' . wp_json_encode( array( 'form_id' => $form_id ) ) . ' /-->'
		);
	}

	public function sourceProvider(): array {
		$sources = array(
			'db generator' => array(
				'field_options_from' => 'generate',
				'generator_function' => 'get_from_db',
				'generator_field'    => self::META_KEY,
				'generator_args'     => array( 'meta_key' => self::META_KEY ),
			),
			'posts'        => array(
				'field_options_from'      => 'posts',
				'field_options_post_type' => 'post',
			),
			'terms'        => array(
				'field_options_from' => 'terms',
				'field_options_tax'  => 'category',
			),
		);

		$cases = array();

		foreach ( array( 'select-field', 'radio-field', 'checkbox-field' ) as $block ) {
			foreach ( $sources as $name => $attrs ) {
				$cases[ "$block / $name" ] = array( $block, $attrs );
			}
		}

		return $cases;
	}

	/**
	 * @dataProvider sourceProvider
	 */
	public function testGeneratedLabelIsNotExpanded( string $block, array $attrs ): void {
		$html = $this->render( $block, $attrs );

		$this->assertStringNotContainsString( self::MARKER_OUTPUT, $html );
		$this->assertStringContainsString( 'Item &#x5B;' . self::MARKER_TAG . '&#x5D;', $html );
	}

	public function blockProvider(): array {
		return array(
			'select'   => array( 'select-field' ),
			'radio'    => array( 'radio-field' ),
			'checkbox' => array( 'checkbox-field' ),
		);
	}

	/**
	 * Backward compatibility: a shortcode in a label the author typed in
	 * (Manual Input) is still expanded, as before.
	 *
	 * @dataProvider blockProvider
	 */
	public function testManualLabelShortcodeStillWorks( string $block ): void {
		$html = $this->render(
			$block,
			array(
				'field_options_from' => 'manual_input',
				'field_options'      => array(
					array(
						'value' => 'x',
						'label' => 'Manual [' . self::MARKER_TAG . ']',
					),
				),
			)
		);

		$this->assertStringContainsString( 'Manual ' . self::MARKER_OUTPUT, $html );
	}

	/**
	 * Backward compatibility: generated labels without brackets are unchanged.
	 */
	public function testPlainGeneratedLabelIsUnchanged(): void {
		wp_insert_post(
			array(
				'post_title'  => 'Plain title',
				'post_status' => 'publish',
				'post_type'   => 'post',
			)
		);

		$html = $this->render(
			'select-field',
			array(
				'field_options_from'      => 'posts',
				'field_options_post_type' => 'post',
			)
		);

		$this->assertStringContainsString( '>Plain title</option>', $html );
	}
}
