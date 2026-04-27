const breakpoints = {
	__desktop: {
		minWidth: 992,
	},
	__tablet: {
		maxWidth: 991,
	},
	__mobile: {
		maxWidth: 478,
	},
}

export const getBreakpoints = () => {
	return breakpoints;
}

export const getBreakpointsHierarchy = () => {
	return Object.keys( breakpoints );
}

export const withMediaQuery = ( css, device ) => {

	const mediaQuery = breakpoints[ device ];

	if ( ! mediaQuery ) {
		return css;
	}

	let mediaQueryString = '';

	if ( mediaQuery.minWidth ) {
		mediaQueryString += `(min-width: ${ mediaQuery.minWidth }px)`;
	}

	if ( mediaQuery.maxWidth ) {
		if ( mediaQueryString ) {
			mediaQueryString += ' and ';
		}
		mediaQueryString += `(max-width: ${ mediaQuery.maxWidth }px)`;
	}

	if ( ! mediaQueryString ) {
		return css;
	}

	return `@media ${ mediaQueryString } { ${ css } }`;
}
