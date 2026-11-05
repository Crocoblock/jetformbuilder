<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Migrations\Profilers\Base_Migration_Profiler;
use Jet_Form_Builder\Migrations\Versions\Base_Migration;

class BaseMigrationTimingTest extends \Codeception\TestCase\WPTestCase {

	private $original_locale;

	public function setUp(): void {
		parent::setUp();

		$this->original_locale = $GLOBALS['wp_locale'];
		$GLOBALS['wp_locale']  = clone $this->original_locale;
	}

	public function tearDown(): void {
		$GLOBALS['wp_locale'] = $this->original_locale;

		parent::tearDown();
	}

	public static function numberFormats(): array {
		return array(
			'decimal point' => array( '.', ',' ),
			'decimal comma' => array( ',', '.' ),
		);
	}

	/**
	 * @dataProvider numberFormats
	 */
	public function testRunUpStoresMillisecondsIndependentlyOfLocale( string $decimal_point, string $thousands_sep ): void {
		$this->setNumberFormat( $decimal_point, $thousands_sep );

		$profiled_time = null;
		$profiler      = $this->createMock( Base_Migration_Profiler::class );
		$migration     = $this->makeMigration( $profiler );

		$profiler->expects( $this->once() )
			->method( 'on_up_end' )
			->with(
				$this->identicalTo( $migration ),
				$this->callback(
					function ( $time ) use ( &$profiled_time ) {
						$profiled_time = $time;
						return is_string( $time );
					}
				)
			);

		$migration->runUp();

		$this->assertIsInt( $migration->saved_time );
		$this->assertGreaterThanOrEqual( 40, $migration->saved_time, 'The 50 ms migration must be recorded in milliseconds.' );
		$this->assertSame( number_format_i18n( $migration->saved_time / 1000, 3 ), $profiled_time );
	}

	/**
	 * @dataProvider numberFormats
	 */
	public function testRunDownPreservesLocalizedProfilerOutput( string $decimal_point, string $thousands_sep ): void {
		$this->setNumberFormat( $decimal_point, $thousands_sep );

		$profiler  = $this->createMock( Base_Migration_Profiler::class );
		$migration = $this->makeMigration( $profiler );

		$profiler->expects( $this->once() )
			->method( 'on_down_end' )
			->with(
				$this->identicalTo( $migration ),
				$this->matchesRegularExpression( '/^\d+' . preg_quote( $decimal_point, '/' ) . '\d{3}$/' )
			);

		$migration->run_down();

		$this->assertTrue( $migration->deleted );
		$this->assertNull( $migration->saved_time );
	}

	private function setNumberFormat( string $decimal_point, string $thousands_sep ): void {
		$GLOBALS['wp_locale']->number_format['decimal_point'] = $decimal_point;
		$GLOBALS['wp_locale']->number_format['thousands_sep'] = $thousands_sep;

		$this->assertSame( '0' . $decimal_point . '050', number_format_i18n( 0.05, 3 ) );
	}

	private function makeMigration( Base_Migration_Profiler $profiler ): Base_Migration {
		return new class( $profiler ) extends Base_Migration {
			public $saved_time;
			public $deleted = false;

			public function up( \wpdb $wpdb ) {
				usleep( 50000 );
			}

			public function down( \wpdb $wpdb ) {
				usleep( 50000 );
			}

			public function runUp(): void {
				$this->run_up();
			}

			public function save( int $time ) {
				$this->saved_time = $time;
			}

			public function delete() {
				$this->deleted = true;
			}
		};
	}
}
