const semverGt  = require( 'semver/functions/gt' );
const semverLt  = require( 'semver/functions/lt' );
const semverGte = require( 'semver/functions/gte' );
const semverLte = require( 'semver/functions/lte' );

const { __ }           = wp.i18n;
const { applyFilters } = wp.hooks;

class Tools {

	static withPlaceholder( source, label = '--', value = '' ) {
		return [
			{ label, value },
			...source,
		];
	}

	static isEmptyObject( object ) {
		return 'object' === typeof object && Object.keys( object ).length === 0;
	}

	static getRandomID() {
		return Math.floor( Math.random() * 8999 ) + 1000;
	};
}

export const event = name => {
	const initializeCallbacksEvent = new Event( name );
	return () => document.dispatchEvent( initializeCallbacksEvent );
};

export const listen = ( name, func ) => {
	document.addEventListener( name, func );
};

function getSemVerFunc( operator ) {
	switch ( operator ) {
		case '>':
			return semverGt;
		case '>=':
			return semverGte;
		case '<':
			return semverLt;
		case '<=':
			return semverLte;
	}

	return () => false;
}

export function versionCompare( version1, version2, operator ) {
	try {
		return getSemVerFunc( operator )( version1, version2 );
	}
	catch ( te ) {
		return false;
	}
}

export function column( listArr, name ) {
	if ( !listArr?.length ) {
		return [];
	}

	return listArr.map( current => {
		return 'object' === typeof current ? current[ name ] : current;
	} );
}

const convertSymbols = applyFilters( 'jet.fb.tools.convertSymbols', {
	checkCyrRegex: /[а-яёїєґі]/i,
	cyrRegex: /[а-яёїєґі]/gi,
	charsMap: {
		'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
		'е': 'e', 'ё': 'io', 'ж': 'zh', 'з': 'z', 'и': 'i',
		'й': 'i', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
		'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
		'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
		'ш': 'sh', 'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'iu',
		'я': 'ia', 'ї': 'i', 'є': 'ie', 'ґ': 'g', 'і': 'i',
	},
} );

export function maybeCyrToLatin( str ) {
	if ( convertSymbols.checkCyrRegex.test( str ) ) {
		str = str.replace( convertSymbols.cyrRegex, function ( match ) {

			if ( undefined === convertSymbols.charsMap[ match ] ) {
				return '';
			}

			return convertSymbols.charsMap[ match ];
		} );
	}

	return str;
}

export function getConvertedName( valueToChange ) {
	var regex = /\s+/g,
	    slug  = valueToChange.toLowerCase().replace( regex, '_' );

	// Replace accents
	slug = slug.normalize( 'NFD' ).replace( /[\u0300-\u036f]/g, '' );

	// Replace cyrillic
	slug = maybeCyrToLatin( slug );

	if ( 20 < slug.length ) {
		// 34 - Lionel Messi's age when he left Barcelona
		slug = slug.substr( 0, 34 );

		if ( '-' === slug.slice( -1 ) ) {
			slug = slug.slice( 0, -1 );
		}
	}

	return slug;
}

export function classnames( ...additional ) {
	const result = [];

	const parseValues = source => {
		source.forEach( itemClass => {
			if ( !itemClass ) {
				return;
			}
			if ( Array.isArray( itemClass ) ) {
				parseValues( itemClass );
			}
			if ( 'string' === typeof itemClass ) {
				result.push( itemClass.trim() );
			}
			if ( 'object' === typeof itemClass ) {
				for ( const itemClassKey in itemClass ) {
					if ( itemClass[ itemClassKey ] ) {
						result.push( (
							itemClassKey + ''
						).trim() );
					}
				}
			}
		} );
	};

	parseValues( additional );

	return result.join( ' ' );
}

export function convertObjectToOptionsList( entries = [], {
	usePlaceholder = true,
	label = '--',
	value = '',
}                                                   = {} ) {
	const placeholder = { label, value };

	if ( !entries ) {
		return usePlaceholder ? [ placeholder ] : [];
	}

	const options = Object.entries( entries ).map( ( [ value, label ] ) => {
		return { value, label };
	} );

	return usePlaceholder ? [ placeholder, ...options ] : options;
}

export default Tools;