/**
 * Cache Manager for Auto-Update Feature.
 *
 * Manages in-memory caching of generated options with configurable timeout.
 * Implements Map-based storage with timestamp tracking for TTL (Time To Live).
 *
 * @package JetFormBuilder
 */

/**
 * Cache Manager Class.
 *
 * Stores generated options with keys based on generator ID and context values.
 * Supports cache timeout configuration per field.
 */
class CacheManager {
	constructor() {
		/**
		 * Cache storage.
		 * Key format: "generatorId:contextHash"
		 * Value: { options: Array, timestamp: Number }
		 *
		 * @type {Map<string, Object>}
		 */
		this.cache = new Map();

		/**
		 * Default cache timeout in seconds.
		 * 0 = disabled, -1 = permanent, N = seconds
		 *
		 * @type {number}
		 */
		this.defaultTimeout = 60;
	}

	/**
	 * Generate cache key from generator ID and context.
	 *
	 * @param {string} generatorId Generator identifier.
	 * @param {Object} context     Context object with field values.
	 *
	 * @return {string} Cache key.
	 */
	generateKey( generatorId, context ) {
		// Sort context keys for consistent hashing
		const sortedContext = Object.keys( context )
			.sort()
			.reduce( ( acc, key ) => {
				acc[ key ] = context[ key ];
				return acc;
			}, {} );

		const contextString = JSON.stringify( sortedContext );
		return `${ generatorId }:${ contextString }`;
	}

	/**
	 * Check if cached data exists and is still valid.
	 *
	 * @param {string} generatorId  Generator identifier.
	 * @param {Object} context      Context object with field values.
	 * @param {number} cacheTimeout Cache timeout in seconds (0=disabled, -1=permanent, N=seconds).
	 *
	 * @return {boolean} True if valid cache exists.
	 */
	has( generatorId, context, cacheTimeout = this.defaultTimeout ) {
		// Cache disabled
		if ( cacheTimeout === 0 ) {
			return false;
		}

		const key = this.generateKey( generatorId, context );
		const cached = this.cache.get( key );

		if ( ! cached ) {
			return false;
		}

		// Permanent cache
		if ( cacheTimeout === -1 ) {
			return true;
		}

		// Check if cache is expired
		const now = Date.now();
		const age = ( now - cached.timestamp ) / 1000; // Convert to seconds

		if ( age > cacheTimeout ) {
			// Cache expired, remove it
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
	 *
	 * @return {Array|null} Cached options or null if not found/expired.
	 */
	get( generatorId, context, cacheTimeout = this.defaultTimeout ) {
		if ( ! this.has( generatorId, context, cacheTimeout ) ) {
			return null;
		}

		const key = this.generateKey( generatorId, context );
		const cached = this.cache.get( key );

		return cached ? cached.options : null;
	}

	/**
	 * Store options in cache.
	 *
	 * @param {string} generatorId Generator identifier.
	 * @param {Object} context     Context object with field values.
	 * @param {Array}  options     Generated options to cache.
	 */
	set( generatorId, context, options ) {
		const key = this.generateKey( generatorId, context );

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
	 */
	clear( generatorId, context ) {
		const key = this.generateKey( generatorId, context );
		this.cache.delete( key );
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
		const now = Date.now();
		const keysToDelete = [];

		this.cache.forEach( ( value, key ) => {
			const age = ( now - value.timestamp ) / 1000;
			if ( age > maxAge ) {
				keysToDelete.push( key );
			}
		} );

		keysToDelete.forEach( ( key ) => {
			this.cache.delete( key );
		} );

		return keysToDelete.length;
	}
}

export default CacheManager;
