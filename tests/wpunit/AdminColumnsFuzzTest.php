<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Admin\Table_Views\Column_Base;

/**
 * Every admin table column of the plugin is
 * discovered automatically and fed a record where every field is a marker
 * with a tag carrying an event handler. Columns of type `string` are
 * inserted with v-html (EntryColumnsTable.vue / EntryColumnList.vue), so
 * their value must not contain a live handler. New columns are covered
 * without changing this test.
 */
class AdminColumnsFuzzTest extends \Codeception\TestCase\WPTestCase {

	const MARKER = 'jfbq<img src=x onerror=jfbMarker()>';

	/**
	 * @return string[] Fully qualified names of concrete column classes.
	 */
	private function column_classes(): array {
		$root    = dirname( __DIR__, 2 );
		$classes = array();
		$files   = array();

		foreach ( array( 'includes', 'modules', 'components', 'compatibility' ) as $dir ) {
			$iterator = new \RecursiveIteratorIterator(
				new \RecursiveDirectoryIterator( $root . '/' . $dir, \FilesystemIterator::SKIP_DOTS )
			);

			foreach ( $iterator as $file ) {
				$files[] = $file;
			}
		}

		foreach ( $files as $file ) {
			$path = $file->getPathname();

			if (
				'php' !== $file->getExtension() ||
				false === strpos( basename( $path ), 'column' ) ||
				preg_match( '#/(vendor|node_modules|tests)/#', $path )
			) {
				continue;
			}

			$code = (string) file_get_contents( $path );

			if (
				! preg_match( '/^namespace\s+([^;]+);/m', $code, $ns ) ||
				! preg_match( '/^(?:final\s+)?class\s+(\w+)/m', $code, $class )
			) {
				continue;
			}

			$fqcn = $ns[1] . '\\' . $class[1];

			if ( ! class_exists( $fqcn ) ) {
				continue;
			}

			$reflection = new \ReflectionClass( $fqcn );

			if ( $reflection->isAbstract() || ! $reflection->isSubclassOf( Column_Base::class ) ) {
				continue;
			}

			$classes[] = $fqcn;
		}

		return array_unique( $classes );
	}

	private function record(): array {
		$m      = self::MARKER;
		$record = array();

		foreach (
			array(
				'id', 'form_id', 'user_id', 'status', 'referrer', 'user_agent', 'ip_address',
				'field_name', 'field_type', 'field_value', 'field_attrs', 'name', 'message',
				'file', 'line', 'action_slug', 'action_id', 'on_event', 'email', 'first_name',
				'last_name', 'full_name', 'address_line_1', 'address_line_2', 'admin_area_1',
				'admin_area_2', 'postal_code', 'country_code', 'amount_code', 'transaction_id',
				'gateway_id', 'journey_url', 'journey_query', 'created_at', 'updated_at',
			) as $key
		) {
			$record[ $key ] = $m;
		}

		$record['payer'] = array( 'first_name' => $m, 'last_name' => $m, 'email' => $m );
		$record['ship']  = array( 'full_name' => $m );

		return $record;
	}

	private function has_live_handler( string $html ): bool {
		$dom      = new \DOMDocument();
		$previous = libxml_use_internal_errors( true );
		$dom->loadHTML( '<?xml encoding="utf-8"?><body>' . $html . '</body>' );
		libxml_clear_errors();
		libxml_use_internal_errors( $previous );

		foreach ( $dom->getElementsByTagName( '*' ) as $element ) {
			foreach ( $element->attributes as $attribute ) {
				if ( 0 === stripos( $attribute->name, 'on' ) ) {
					return true;
				}
			}
		}

		return false;
	}

	public function testStringColumnsNeverCarryLiveMarkup(): void {
		$classes    = $this->column_classes();
		$violations = array();
		$strings    = 0;

		$this->assertGreaterThan( 40, count( $classes ), 'column discovery found too few classes' );

		foreach ( $classes as $class ) {
			try {
				$column = ( new $class() )->get_column( $this->record() );
			} catch ( \Throwable $error ) {
				// Columns that need real related objects (forms, users...).
				continue;
			}

			if ( 'string' !== ( $column['type'] ?? '' ) ) {
				continue;
			}

			++$strings;

			if ( is_string( $column['value'] ) && $this->has_live_handler( $column['value'] ) ) {
				$violations[] = $class;
			}
		}

		$this->assertGreaterThan( 15, $strings, 'too few string columns were exercised' );
		$this->assertSame( array(), $violations, implode( "\n", $violations ) );
	}
}
