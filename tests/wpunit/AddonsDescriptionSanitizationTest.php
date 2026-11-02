<?php

namespace JFB_Tests\Wpunit;


/**
 * Add-on descriptions come from the remote add-ons
 * API (cached in a site transient) and are printed with v-html on the
 * Add-ons page. Formatting and links stay, active markup does not.
 */
class AddonsDescriptionSanitizationTest extends \Codeception\TestCase\WPTestCase {

	protected function tearDown(): void {
		delete_site_transient( 'jfb_remote_addons_list' );
		$this->reset_manager_cache();

		parent::tearDown();
	}

	/**
	 * The manager keeps the list in memory for the request; tests need a
	 * fresh read of the transient each time.
	 */
	private function reset_manager_cache(): void {
		$property = new \ReflectionProperty( get_class( jet_form_builder()->addons_manager ), 'addons_info' );
		$property->setAccessible( true );
		$property->setValue( jet_form_builder()->addons_manager, null );
	}

	private function description_for( string $desc ): string {
		$this->reset_manager_cache();

		set_site_transient(
			'jfb_remote_addons_list',
			array(
				array(
					'slug'    => 'jfb-test-addon/jfb-test-addon.php',
					'name'    => 'Test add-on',
					'version' => '1.0.0',
					'desc'    => $desc,
				),
			),
			HOUR_IN_SECONDS
		);

		$list = jet_form_builder()->addons_manager->get_plugin_data_list();

		return $list['jfb-test-addon/jfb-test-addon.php']['desc'];
	}

	public function testActiveMarkupIsRemoved(): void {
		$desc = $this->description_for( 'Text<script>jfbMarker()</script><img src="x" onerror="jfbMarker()">' );

		$this->assertStringNotContainsString( '<script', $desc );
		$this->assertStringNotContainsString( 'onerror', $desc );
		$this->assertStringStartsWith( 'Text', $desc );
	}

	/**
	 * Backward compatibility: descriptions with formatting and links render
	 * exactly as before.
	 */
	public function testFormattingAndLinksAreKept(): void {
		$desc = 'Adds <b>PDF</b> export. <a href="https://jetformbuilder.com/addons/pdf/">Learn more</a>';

		$this->assertSame( $desc, $this->description_for( $desc ) );
	}
}
