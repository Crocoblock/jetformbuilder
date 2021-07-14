const { __ } = wp.i18n;
const { applyFilters } = wp.hooks;

class Tools {

	static getLabel( meta, attrs ) {
		const label = {};
		label.name = attrs.label;
		if ( attrs.required ) {
			label.mark = JSON.parse( meta._jf_args ).required_mark || '';
		}
		return label;
	}

	static withPlaceholder( source, label = '--', value = '' ) {
		return [
			{ label, value },
			...source,
		];
	}

	static isEmptyObject( object ) {
		return 'object' === typeof object && Object.keys( object ).length === 0;
	}

	static getFuncCondition( nameFunction ) {
		return new Function( `return window.JetFormBuilderConditions[ '${ nameFunction }' ]` );
	}

	static addConditionForCondType( name, callable ) {
		window.JetFormBuilderConditions = window.JetFormBuilderConditions || {};
		window.JetFormBuilderConditions[ name ] = callable;
	}

	static parseConditionsFunc( source ) {
		const types = [];

		source.forEach( type => {
			if ( type.condition ) {
				if ( Tools.getFuncCondition( type.condition )()( type.value ) ) {
					types.push( type );
				}
			} else {
				types.push( type );
			}
		} );

		return types;

	}
}

export const event = name => {
	const initializeCallbacksEvent = new Event( name );
	return () => document.dispatchEvent( initializeCallbacksEvent );
};

export const listen = ( name, func ) => {
	document.addEventListener( name, func );
}

export function versionCompare( version1, version2, operator ) {
	if ( 'string' === typeof version1 ) {
		version1 = +( version1.split( '.' ).join( '' ) );
	}
	if ( 'string' === typeof version2 ) {
		version2 = +( version2.split( '.' ).join( '' ) );
	}
	if ( 0 >= version1 || 0 >= version2 ) {
		throw new Error( 'Invalid arguments: version1 or version2' );
	}

	if ( [ '>', '<', '===', '==', '>=', '<=' ].includes( operator ) ) {
		return new Function( `return ${ version1 } ${ operator } ${ version2 }` )();
	}
	throw new Error( 'Invalid arguments: operator' );
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
		str = str.replace( convertSymbols.cyrRegex, function( match ) {

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
		slug  = valueToChange.toLowerCase().replace( regex, '-' );

	// Replace accents
	slug = slug.normalize( 'NFD' ).replace( /[\u0300-\u036f]/g, "" );

	// Replace cyrillic
	slug = maybeCyrToLatin( slug );

	if ( 20 < slug.length ) {
		slug = slug.substr( 0, 20 );

		if ( '-' === slug.slice( -1 ) ) {
			slug = slug.slice( 0, -1 );
		}
	}

	return slug;
}

export default Tools;