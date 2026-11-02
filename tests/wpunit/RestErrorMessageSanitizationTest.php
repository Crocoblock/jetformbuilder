<?php

namespace JFB_Tests\Wpunit;

/**
 * REST error messages are shown in admin notices
 * with v-html (cx-vui notice component). Exception texts can carry data that
 * is not plugin text: database errors include parts of the SQL query with
 * stored values, and API errors come from Mailchimp, ActiveCampaign,
 * GetResponse or the AI service.
 *
 * Guard test: no REST response may pass an exception or WP_Error message
 * through unsanitized. Covers endpoints added later as well.
 */
class RestErrorMessageSanitizationTest extends \Codeception\TestCase\WPTestCase {

	/**
	 * Reviewed exceptions: file => reason.
	 */
	const ALLOWED = array(
		// Dev-mode logger entry: sent as JSON and printed to the browser
		// console (AjaxSubmit), never inserted into the DOM.
		'includes/exceptions/handler-exception.php' => 'dev logger',
	);

	public function testExceptionMessagesAreNeverReturnedRaw(): void {
		$root       = dirname( __DIR__, 2 );
		$violations = array();

		foreach ( array( 'includes', 'modules', 'components', 'compatibility' ) as $dir ) {
			$iterator = new \RecursiveIteratorIterator(
				new \RecursiveDirectoryIterator( $root . '/' . $dir, \FilesystemIterator::SKIP_DOTS )
			);

			foreach ( $iterator as $file ) {
				if ( 'php' !== $file->getExtension() ) {
					continue;
				}

				$lines = file( $file->getPathname() );

				foreach ( $lines as $number => $line ) {
					if ( ! preg_match( "/'message'\s*=>\s*\\\$[a-z_]+->(getMessage|get_error_message)\(\)/i", $line ) ) {
						continue;
					}

					$relative = str_replace( $root . '/', '', $file->getPathname() );

					if ( isset( self::ALLOWED[ $relative ] ) ) {
						continue;
					}

					$violations[] = $relative . ':' . ( $number + 1 );
				}
			}
		}

		$this->assertSame( array(), $violations, "Raw exception message in a response:\n" . implode( "\n", $violations ) );
	}

	/**
	 * Backward compatibility: sanitizing keeps plain error texts and links.
	 */
	public function testSanitizedMessagesKeepTextAndLinks(): void {
		foreach (
			array(
				'Invalid API key',
				"Can't connect to server",
				'See <a href="https://example.com/docs">docs</a>',
				'Unknown column in WHERE id < 5',
			) as $message
		) {
			$this->assertSame(
				html_entity_decode( $message ),
				html_entity_decode( wp_kses_post( $message ) ),
				$message
			);
		}
	}
}
