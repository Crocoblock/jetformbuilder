<?php


namespace Jet_Form_Builder\Db_Queries;

use Jet_Form_Builder\Db_Queries\Views\View_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method Query_Cache_Builder set_view( View_Base $view )
 *
 * Class Query_Builder
 * @package Jet_Form_Builder\Db_Queries
 */
class Query_Cache_Builder extends Query_Builder {

	const CACHE_GROUP = 'jfb_queries';
	protected $hash;

	/**
	 * @param string $prefix
	 *
	 * @return string
	 */
	public function get_hash( $prefix = '' ) {
		if ( ! empty( $this->hash ) ) {
			return $this->hash;
		}
		$this->hash = $prefix . md5( $this->sql() );

		return $this->hash;
	}

	/**
	 * @param string $prefix
	 *
	 * @return false|mixed
	 */
	public function get_cached( $prefix = '' ) {
		return wp_cache_get( $this->get_hash( $prefix ), self::CACHE_GROUP );
	}

	public function query_all(): array {
		$cached = $this->get_cached( 'query_all_' );

		if ( $cached !== false ) {
			return $cached;
		}

		$results = parent::query_all();

		wp_cache_set( $this->get_hash(), $results, self::CACHE_GROUP );

		return $results;
	}

	public function query_one(): array {
		$cached = $this->get_cached( 'query_one_' );

		if ( $cached !== false ) {
			return $cached;
		}

		$results = parent::query_one();

		wp_cache_set( $this->get_hash(), $results, self::CACHE_GROUP );

		return $results;
	}

	public function query_var( $column_offset = 0, $row_offset = 0 ) {
		$cached = $this->get_cached( "query_var_{$column_offset}_{$row_offset}_" );

		if ( $cached !== false ) {
			return $cached;
		}

		$results = parent::query_var();

		wp_cache_set( $this->get_hash(), $results, self::CACHE_GROUP );

		return $results;
	}

	public function query_col( $index = 0 ) {
		$cached = $this->get_cached( "query_col_{$index}_" );

		if ( $cached !== false ) {
			return $cached;
		}

		$results = parent::query_col( $index );

		wp_cache_set( $this->get_hash(), $results, self::CACHE_GROUP );

		return $results;
	}

}
