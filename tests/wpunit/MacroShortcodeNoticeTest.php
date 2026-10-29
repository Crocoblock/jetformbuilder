<?php

namespace JFB_Tests\Wpunit;

use JFB_Modules\Post_Type\Module as Post_Type_Module;
use JFB_Modules\Rich_Content\Macro_Shortcode_Notice;

/**
 * Regression coverage for issues-tracker #20703's one-time admin notice
 * (JFB_Modules\Rich_Content\Macro_Shortcode_Notice), which explains how
 * shortcode syntax in submitted values is handled now.
 */
class MacroShortcodeNoticeTest extends \Codeception\TestCase\WPTestCase {

	public function testNoticeIsShownToAdminOnSiteWithForms(): void {
		self::factory()->post->create( array( 'post_type' => Post_Type_Module::SLUG ) );
		wp_set_current_user( self::factory()->user->create( array( 'role' => 'administrator' ) ) );

		$output = $this->render_notice();

		$this->assertStringContainsString( 'shortcodes typed into form fields are no longer executed', $output );
		$this->assertStringContainsString( Macro_Shortcode_Notice::NOTICE_QUERY_ARG, $output );
	}

	public function testNoticeIsHiddenOnSiteWithoutForms(): void {
		wp_set_current_user( self::factory()->user->create( array( 'role' => 'administrator' ) ) );

		$this->assertSame( '', $this->render_notice() );
	}

	public function testNoticeIsHiddenFromNonAdmins(): void {
		self::factory()->post->create( array( 'post_type' => Post_Type_Module::SLUG ) );
		wp_set_current_user( self::factory()->user->create( array( 'role' => 'editor' ) ) );

		$this->assertSame( '', $this->render_notice() );
	}

	public function testNoticeIsHiddenOnlyForAdminWhoDismissedIt(): void {
		self::factory()->post->create( array( 'post_type' => Post_Type_Module::SLUG ) );

		$dismissed_by = self::factory()->user->create( array( 'role' => 'administrator' ) );
		$other_admin  = self::factory()->user->create( array( 'role' => 'administrator' ) );

		update_user_meta( $dismissed_by, Macro_Shortcode_Notice::DISMISS_META_KEY, Macro_Shortcode_Notice::NOTICE_VERSION );

		wp_set_current_user( $dismissed_by );
		$this->assertSame( '', $this->render_notice() );

		wp_set_current_user( $other_admin );
		$this->assertNotSame( '', $this->render_notice() );
	}

	public function testOlderDismissalDoesNotHideNewNoticeVersion(): void {
		self::factory()->post->create( array( 'post_type' => Post_Type_Module::SLUG ) );

		$user_id = self::factory()->user->create( array( 'role' => 'administrator' ) );

		update_user_meta( $user_id, Macro_Shortcode_Notice::DISMISS_META_KEY, 'older-version' );
		wp_set_current_user( $user_id );

		$this->assertNotSame( '', $this->render_notice() );
	}

	private function render_notice(): string {
		ob_start();
		( new Macro_Shortcode_Notice() )->render_notice();

		return (string) ob_get_clean();
	}
}
