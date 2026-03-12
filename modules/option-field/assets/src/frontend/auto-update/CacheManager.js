/**
 * Cache Manager for Auto-Update Feature.
 *
 * Manages in-memory caching of generated options with configurable timeout.
 * Implements Map-based storage with timestamp tracking for TTL (Time To Live).
 *
 * @package JetFormBuilder
 */

class CacheManager {
	constructor() {
		/** @type {Map<string, {options: Array, timestamp: number}>} */
		this.cache = new Map();

		/** @type {number} default TTL in seconds; 0 = disabled */
		this.defaultTimeout = 60;
	}

	/**
	 * Generate cache key from generator ID, field name, and context.
	 *
	 * Field name is included so that two different fields using the same
	 * generator and the same context don't share cached responses
	 * (they may have different block_attrs, e.g. custom_item_template).
	 *
	 * @param {string} generatorId Generator identifier.
	 * @param {Object} context     Context object with field values.
	 * @param {string} fieldName   Target field name.
	 *
	 * @return {string} Cache key.
	 */
	generateKey( generatorId, context, fieldName = '' ) {
		const sortedContext = Object.keys( context ).sort().reduce( ( acc, key ) => {
			acc[ key ] = context[ key ];
			return acc;
		}, {} );

		return `${ generatorId }:${ fieldName }:${ JSON.stringify( sortedContext ) }`;
	}

	/**
	 * Check if cached data exists and is still valid.
	 *
	 * @param {string} generatorId  Generator identifier.
	 * @param {Object} context      Context object with field values.
	 * @param {number} cacheTimeout Cache timeout in seconds (0=disabled, -1=permanent, N=seconds).
	 * @param {string} fieldName    Target field name.
	 *
	 * @return {boolean} True if valid cache exists.
	 */
	has( generatorId, context, cacheTimeout = this.defaultTimeout, fieldName = '' ) {
		// Cache disabled
		if ( cacheTimeout === 0 ) {
			return false;
		}

		const key    = this.generateKey( generatorId, context, fieldName );
		const cached = this.cache.get( key );

		if ( ! cached ) {
			return false;
		}

		const age = ( Date.now() - cached.timestamp ) / 1000;

		if ( age > cacheTimeout ) {
			this.cache.delete( key );
			return false;
		}

		return true;
	}

	/**
	 * Get cached options.
	 *
	 * @param {string} generatorId  Generator identifier.
	 * @param {Object} context      Context object with field values.
	 * @param {number} cacheTimeout Cache timeout in seconds.
	 * @param {string} fieldName    Target field name.
	 *
	 * @return {Array|null} Cached options or null if not found/expired.
	 */
	get( generatorId, context, cacheTimeout = this.defaultTimeout, fieldName = '' ) {
		if ( ! this.has( generatorId, context, cacheTimeout, fieldName ) ) {
			return null;
		}

		const key = this.generateKey( generatorId, context, fieldName );
		const cached = this.cache.get( key );

		return cached ? cached.options : null;
	}

	/**
	 * Store options in cache.
	 *
	 * @param {string} generatorId Generator identifier.
	 * @param {Object} context     Context object with field values.
	 * @param {Array}  options     Generated options to cache.
	 * @param {string} fieldName   Target field name.
	 */
	set( generatorId, context, options, fieldName = '' ) {
		const key = this.generateKey( generatorId, context, fieldName );

		this.cache.set( key, {
			options,
			timestamp: Date.now(),
		} );
	}

	/**
	 * Clear cache for specific generator and context.
	 *
	 * @param {string} generatorId Generator identifier.
	 * @param {Object} context     Context object with field values.
	 * @param {string} fieldName   Target field name.
	 */
	clear( generatorId, context, fieldName = '' ) {
		const key = this.generateKey( generatorId, context, fieldName );
		this.cache.delete( key );
	}

	/**
	 * Clear all cache entries for a specific field name.
	 * Used when the field should show no options (e.g. requireAllFilled not met).
	 *
	 * @param {string} fieldName Target field name.
	 */
	clearByField( fieldName ) {
		const prefix = `:${ fieldName }:`;
		this.cache.forEach( ( _value, key ) => {
			if ( key.includes( prefix ) ) {
				this.cache.delete( key );
			}
		} );
	}

	/**
	 * Clear all cache entries.
	 */
	clearAll() {
		this.cache.clear();
	}

	/**
	 * Get cache statistics.
	 *
	 * @return {Object} Statistics object with size and keys.
	 */
	getStats() {
		return {
			size: this.cache.size,
			keys: Array.from( this.cache.keys() ),
		};
	}

	/**
	 * Clean expired cache entries.
	 * Useful for periodic cleanup of stale data.
	 *
	 * @param {number} maxAge Maximum age in seconds (default: 3600 = 1 hour).
	 */
	cleanExpired( maxAge = 3600 ) {
		const now          = Date.now();
		const keysToDelete = [];

		this.cache.forEach( ( value, key ) => {
			if ( ( now - value.timestamp ) / 1000 > maxAge ) {
				keysToDelete.push( key );
			}
		} );

		keysToDelete.forEach( ( key ) => this.cache.delete( key ) );

		return keysToDelete.length;
	}
}

export default CacheManager;
