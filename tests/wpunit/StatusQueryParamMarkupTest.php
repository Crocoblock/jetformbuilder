<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Form_Messages\Builder;
use Jet_Form_Builder\Form_Messages\Manager;

/**
 * The form status message is read from `?status=` on every
 * page with a form. Through that real request path (not set_form_status())
 * no markup may reach the page. Plain text of dynamic statuses is a
 * documented reload-mode feature and must keep working.
 */
class StatusQueryParamMarkupTest extends \Codeception\TestCase\WPTestCase {

	protected function tearDown(): void {
		$_GET = array();

		parent::tearDown();
	}

	private function render_from_query( string $status ): string {
		// WordPress adds slashes to $_GET before plugins see it.
		$_GET['status'] = wp_slash( $status );

		$builder = new Status_Query_Test_Builder( new Manager() );

		return $builder->get_rendered_messages();
	}

	public function statusProvider(): array {
		return array(
			'unknown status'  => array( '' ),
			'dynamic success' => array( 'dsuccess|' ),
			'dynamic error'   => array( 'derror|' ),
		);
	}

	/**
	 * @dataProvider statusProvider
	 */
	public function testTagsCannotBeInjected( string $prefix ): void {
		$html = $this->render_from_query(
			$prefix . 'Hi <a href="https://example.com">link</a><img src="x" onerror="jfbMarker()">'
		);

		$this->assertStringNotContainsString( '<a ', $html );
		$this->assertStringNotContainsString( '<img', $html );
		$this->assertStringNotContainsString( 'onerror', $html );
	}

	/**
	 * @dataProvider statusProvider
	 */
	public function testEncodedTagsStayText( string $prefix ): void {
		$html = $this->render_from_query( $prefix . '&lt;b&gt;bold&lt;/b&gt;' );

		$this->assertStringNotContainsString( '<b>', $html );
	}

	/**
	 * Backward compatibility: dynamic messages sent by actions in reload mode.
	 */
	public function testDynamicPlainTextMessageIsShown(): void {
		$html = $this->render_from_query( 'dsuccess|Thank you, your order #42 is saved' );

		$this->assertStringContainsString( 'Thank you, your order #42 is saved', $html );
		$this->assertStringContainsString( 'jet-form-builder-message--success', $html );
	}
}

class Status_Query_Test_Builder extends Builder {

	/**
	 * @var Manager
	 */
	private $test_manager;

	public function __construct( Manager $manager ) {
		$this->test_manager = $manager;
	}

	public function get_manager( $data = array() ) {
		return $this->test_manager;
	}
}
