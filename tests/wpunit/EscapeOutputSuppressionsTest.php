<?php

namespace JFB_Tests\Wpunit;

/**
 * Suppressions of the WordPress.Security.EscapeOutput
 * sniff hide exactly the places where XSS usually appears. Rules:
 *
 * - a single-line `phpcs:ignore ...OutputNotEscaped` must say why the output
 *   is safe (` -- reason`);
 * - block-level `phpcs:disable ...OutputNotEscaped` may not grow beyond the
 *   reviewed budget (the field templates covered by FieldRenderEscapingTest);
 *   lower the budget when a block is removed.
 */
class EscapeOutputSuppressionsTest extends \Codeception\TestCase\WPTestCase {

	const DISABLE_BLOCK_BUDGET = 23;

	private function lines(): \Generator {
		$root = dirname( __DIR__, 2 );

		foreach ( array( 'includes', 'modules', 'components', 'compatibility', 'templates' ) as $dir ) {
			$iterator = new \RecursiveIteratorIterator(
				new \RecursiveDirectoryIterator( $root . '/' . $dir, \FilesystemIterator::SKIP_DOTS )
			);

			foreach ( $iterator as $file ) {
				$path = $file->getPathname();

				// The vendored Crocoblock framework is excluded from phpcs (phpcs.xml).
				if ( 'php' !== $file->getExtension() || false !== strpos( $path, '/modules/framework/' ) ) {
					continue;
				}

				foreach ( file( $path ) as $number => $line ) {
					yield str_replace( $root . '/', '', $path ) . ':' . ( $number + 1 ) => $line;
				}
			}
		}
	}

	public function testOutputIgnoresExplainWhyTheOutputIsSafe(): void {
		$missing = array();

		foreach ( $this->lines() as $where => $line ) {
			if (
				preg_match( '/phpcs:ignore\b.*WordPress\.Security\.EscapeOutput\.OutputNotEscaped/', $line ) &&
				false === strpos( $line, ' -- ' )
			) {
				$missing[] = $where;
			}
		}

		$this->assertSame( array(), $missing, "Add ' -- reason' to:\n" . implode( "\n", $missing ) );
	}

	public function testOutputDisableBlocksDoNotGrow(): void {
		$blocks = array();

		foreach ( $this->lines() as $where => $line ) {
			if ( preg_match( '/phpcs:disable\b.*WordPress\.Security\.EscapeOutput\.OutputNotEscaped/', $line ) ) {
				$blocks[] = $where;
			}
		}

		$this->assertLessThanOrEqual( self::DISABLE_BLOCK_BUDGET, count( $blocks ), implode( "\n", $blocks ) );
	}
}
