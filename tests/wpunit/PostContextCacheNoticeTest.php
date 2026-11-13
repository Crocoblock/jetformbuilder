<?php

namespace JFB_Tests\Wpunit;

use JFB_Modules\Security\Post_Context_Cache_Notice;

/**
 * After the update administrators are told to clear the page cache: pages
 * cached before it have no signed post context. The notice does not scan
 * forms and JetFormBuilder does not clear caches itself.
 */
class PostContextCacheNoticeTest extends \Codeception\TestCase\WPTestCase {

	private $notice;
	private $admin;

	protected function setUp(): void {
		parent::setUp();

		$this->notice = new Post_Context_Cache_Notice();
		$this->admin  = self::factory()->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $this->admin );
	}

	protected function tearDown(): void {
		wp_set_current_user( 0 );

		parent::tearDown();
	}

	private function render(): string {
		ob_start();
		$this->notice->render_notice();

		return (string) ob_get_clean();
	}

	public function testAdministratorIsAskedToClearTheCache(): void {
		$html = $this->render();

		$this->assertStringContainsString( 'Clear the page cache', $html );
		$this->assertStringContainsString( Post_Context_Cache_Notice::NOTICE_QUERY_ARG, $html );
	}

	public function testHiddenAfterDismissAndFromNonAdministrators(): void {
		update_user_meta( $this->admin, Post_Context_Cache_Notice::DISMISS_META_KEY, Post_Context_Cache_Notice::VERSION );
		$this->assertSame( '', $this->render() );

		wp_set_current_user( self::factory()->user->create( array( 'role' => 'editor' ) ) );
		$this->assertSame( '', $this->render() );
	}

	/**
	 * Rendering the notice does not scan forms, write options or touch caches.
	 */
	public function testNoticeDoesNotScanFormsOrClearCaches(): void {
		global $wpdb;

		$purged = 0;
		$count  = static function () use ( &$purged ) {
			++$purged;
		};
		add_action( 'litespeed_purge', $count );
		add_action( 'litespeed_purge_all', $count );

		$options = (int) $wpdb->get_var( "SELECT COUNT(*) FROM {$wpdb->options}" );
		$queries = $wpdb->num_queries;

		$this->render();

		remove_action( 'litespeed_purge', $count );
		remove_action( 'litespeed_purge_all', $count );

		$this->assertSame( 0, $purged );
		$this->assertSame( $options, (int) $wpdb->get_var( "SELECT COUNT(*) FROM {$wpdb->options}" ) );
		$this->assertLessThanOrEqual( 3, $wpdb->num_queries - $queries, 'No form scan on render.' );
	}
}
