<?php

use Jet_Form_Builder\Request\Parser_Context;

class ParserContextTest extends \Codeception\TestCase\WPTestCase {
	/**
	 * @var \WpunitTester
	 */
	protected $tester;

	/** @var Parser_Context */
	protected $context;

	public function setUp(): void {
		// Before...
		parent::setUp();

		$file_path = jet_form_builder()->plugin_dir( 'tests/_data/parser-context-test-form.html' );
		$html_form = file_get_contents( $file_path );

		$blocks = parse_blocks( $html_form );

		$this->context = new Parser_Context();
	}

	public function tearDown(): void {
		// Your tear down methods here.

		// Then...
		parent::tearDown();
	}

	// Tests
	public function test_it_works() {
		$post = static::factory()->post->create_and_get();

		$this->assertInstanceOf( \WP_Post::class, $post );
	}
}
