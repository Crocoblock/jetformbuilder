const {
	      CalculatedFormula,
      } = JetFormBuilderAbstract;

const {
	      addAction,
      } = JetPlugins.hooks;

const OBSERVER_FLAG = '__JFB_OPTION_FIELD_DEFAULT_VALUE_OBSERVER__';

function stripWrappingQuotes( value ) {
	if ( 'string' !== typeof value || value.length < 2 ) {
		return value;
	}

	const first = value.charAt( 0 );
	const last  = value.charAt( value.length - 1 );

	if (
		( '\'' === first && '\'' === last ) ||
		( '"' === first && '"' === last )
	) {
		return value.slice( 1, -1 );
	}

	return value;
}

function parseDefaultValue( value ) {
	if ( 'string' !== typeof value ) {
		return value;
	}

	const normalized = value.trim();

	try {
		const parsed = JSON.parse( normalized );

		return Array.isArray( parsed ) ? parsed : normalized;
	}
	catch ( error ) {
		if (
			normalized.startsWith( '[' ) &&
			normalized.endsWith( ']' ) &&
			normalized.includes( '\'' )
		) {
			try {
				const normalizedJson = normalized.replace(
					/'((?:\\'|[^'])*)'/g,
					( match, current ) => `"${ current.replace( /"/g, '\\"' ) }"`,
				);
				const parsed = JSON.parse( normalizedJson );

				return Array.isArray( parsed ) ? parsed : normalized;
			}
			catch ( fallbackError ) {
				return normalized;
			}
		}

		return normalized;
	}
}

function parseArrayLikeValue( value ) {
	if ( 'string' !== typeof value ) {
		return value;
	}

	const normalized = value.trim();

	try {
		const parsed = JSON.parse( normalized );

		return Array.isArray( parsed ) ? parsed : value;
	}
	catch ( error ) {
		if (
			normalized.startsWith( '[' ) &&
			normalized.endsWith( ']' ) &&
			normalized.includes( '\'' )
		) {
			try {
				const normalizedJson = normalized.replace(
					/'((?:\\'|[^'])*)'/g,
					( match, current ) => `"${ current.replace( /"/g, '\\"' ) }"`,
				);
				const parsed = JSON.parse( normalizedJson );

				return Array.isArray( parsed ) ? parsed : value;
			}
			catch ( fallbackError ) {
				return value;
			}
		}

		return value;
	}
}

function hasMacroValue( value ) {
	if ( Array.isArray( value ) ) {
		return value.some( hasMacroValue );
	}

	return 'string' === typeof value && value.includes( '%' );
}

function shouldHandleDefaultValue( rawValue, parsedValue ) {
	if ( Array.isArray( parsedValue ) ) {
		return parsedValue.length > 0;
	}

	if ( 'string' !== typeof rawValue ) {
		return hasMacroValue( parsedValue );
	}

	const normalized = rawValue.trim();

	return (
		hasMacroValue( parsedValue ) ||
		(
			normalized.startsWith( '[' ) &&
			normalized.endsWith( ']' )
		)
	);
}

function isQuotedString( value ) {
	if ( 'string' !== typeof value || value.length < 2 ) {
		return false;
	}

	const first = value.charAt( 0 );
	const last  = value.charAt( value.length - 1 );

	return (
		( '\'' === first && '\'' === last ) ||
		( '"' === first && '"' === last )
	);
}

function prepareFormulaValue( value ) {
	if ( 'string' !== typeof value ) {
		return value;
	}

	const normalized = value.trim();

	if ( !hasMacroValue( normalized ) || isQuotedString( normalized ) ) {
		return normalized;
	}

	// Exact-match option defaults should resolve to string values, not bare JS identifiers.
	return `'${
		normalized.replace( /'/g, '\\\'' )
	}'`;
}

function isResolved( value ) {
	return !(
		'' === value ||
		null === value ||
		(
			Array.isArray( value ) &&
			!value.length
		)
	);
}

function canOverrideAutoSelectedSingleSelect( input ) {
	if ( input.isArray() || 'select' !== input.inputType ) {
		return false;
	}

	const [ node ] = input.nodes;

	if (
		!node ||
		'select-one' !== node.type ||
		node.multiple ||
		!node.options?.length
	) {
		return false;
	}

	const options = Array.from( node.options );
	const [ firstOption ] = options;

	if ( !firstOption ) {
		return false;
	}

	if ( options.some( option => '' === option.value ) ) {
		return false;
	}

	if ( options.some( option => option.defaultSelected ) ) {
		return false;
	}

	return (
		0 === node.selectedIndex &&
		node.value === firstOption.value
	);
}

function applyResolvedValue( input, value ) {
	if ( Array.isArray( value ) ) {
		input.value.setIfEmpty(
			value.map(
				current => stripWrappingQuotes( '' + current ),
			),
		);

		return;
	}

	const normalized = stripWrappingQuotes( '' + value );

	if ( !input.isArray() ) {
		if ( canOverrideAutoSelectedSingleSelect( input ) ) {
			input.value.current = normalized;

			return;
		}

		input.value.setIfEmpty( normalized );

		return;
	}

	const nextValue = parseArrayLikeValue( normalized );

	input.value.setIfEmpty(
		Array.isArray( nextValue )
			? nextValue.map( current => stripWrappingQuotes( '' + current ) )
			: [ normalized ],
	);
}

function observeDefaultValue( input, defaultValue ) {
	const values   = Array.isArray( defaultValue ) ? defaultValue : [ defaultValue ];
	const formulas = [];
	const results  = new Array( values.length );

	const maybeApply = () => {
		if (
			Object.keys( results ).length !== values.length ||
			!results.every( isResolved )
		) {
			return;
		}

		applyResolvedValue(
			input,
			Array.isArray( defaultValue ) ? results : results[ 0 ],
		);

		formulas.forEach( current => current.clearWatchers() );
	};

	values.forEach( ( currentValue, index ) => {
		const formula = new CalculatedFormula( input );

		formula.observe( prepareFormulaValue( currentValue ) );
		formula.setResult = () => {
			const result = formula.calculate();

			if ( !isResolved( result ) ) {
				return;
			}

			results[ index ] = result;
			maybeApply();
		};

		formula.setResult();
		formulas.push( formula );
	} );
}

function applyOptionFieldDefault( input ) {
	const [ node ] = input.nodes;
	const fieldWrapper = input.wrapper ?? node;
	const rawDefault = (
		fieldWrapper?.dataset?.defaultVal ??
		node?.dataset?.defaultVal ??
		''
	);
	const defaultValue = parseDefaultValue( rawDefault );

	if ( !shouldHandleDefaultValue( rawDefault, defaultValue ) ) {
		return;
	}

	observeDefaultValue( input, defaultValue );
}

if ( !window[ OBSERVER_FLAG ] ) {
	window[ OBSERVER_FLAG ] = true;

	addAction(
		'jet.fb.observe.after',
		'jet-form-builder/option-field-default-value',
		function ( observable ) {
			for ( const input of observable.getInputs() ) {
				const [ node ] = input.nodes;

				if (
					!node ||
					![
						'select',
						'radio',
						'checkbox',
					].includes( input.inputType )
				) {
					continue;
				}

				applyOptionFieldDefault( input );
			}
		},
	);
}
