<?php


namespace JFB_Components\Export\Csv;

class Service {

	private $file;

	protected function headers( string $filename ) {
		if ( false === strpos( ini_get( 'disable_functions' ), 'set_time_limit' ) ) {
			set_time_limit( 0 );
		}

		// phpcs:disable WordPress.PHP
		@session_write_close();
		@ini_set( 'zlib.output_compression', 'Off' );

		if ( function_exists( 'apache_setenv' ) ) {
			$variable = 'no-gzip';
			$value    = 1;
			@apache_setenv( $variable, $value );
		}
		nocache_headers();

		header( 'Robots: none' );
		header( 'Content-Type: text/csv; charset=utf-8' );
		header( 'Content-Description: File Transfer' );
		header( 'Content-Disposition: attachment; filename="' . $filename . '";' );
		header( 'Content-Transfer-Encoding: binary' );

		// phpcs:enable WordPress.PHP
	}

	protected function get_file() {
		if ( ! is_null( $this->file ) ) {
			return $this->file;
		}

		$this->file = fopen( 'php://output', 'w' );
		/**
		 * Add BOM to fix UTF-8 in Excel
		 *
		 * @see https://www.skoumal.com/en/making-utf-8-csv-excel/
		 */
		$bom = ( chr( 0xEF ) . chr( 0xBB ) . chr( 0xBF ) );

		// phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_operations_fputs
		fputs( $this->file, $bom );

		return $this->file;
	}

}
