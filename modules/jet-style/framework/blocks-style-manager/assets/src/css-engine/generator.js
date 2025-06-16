import * as Fields from './fields';
import { getBreakpoints, withMediaQuery } from '../helpers/breakpoints';

export class Generator {

	constructor( blockName, attributes ) {

		this.blockName = blockName;
		this.attributes = attributes;
		this.uniqueClassName = attributes._uniqueClassName || false;
		this.css = '';
		this.cssVariables = {};
		this.responsiveCSS = {};

		this.controlHandlers = {
			[ Fields.Color.getType() ]: Fields.Color,
			[ Fields.Typography.getType() ]: Fields.Typography,
			[ Fields.Border.getType() ]: Fields.Border,
			[ Fields.Dimensions.getType() ]: Fields.Dimensions,
			[ Fields.Range.getType() ]: Fields.Range,
		};
	}

	getControlHandler( control ) {

		const controlType = control.type || false;
		if ( ! controlType ) {
			return false;
		}

		return this.controlHandlers[ controlType ] || false;
	}

	getCSS() {

		// Ensure we reset CSS on block re-render
		this.css = '';

		const { blockName } = this;

		if ( ! window.crocoBlockStyleEditor.blocks[ blockName ] ) {
			return this.css;
		}

		for ( const control of window.crocoBlockStyleEditor.blocks[ blockName ] ) {
			this.generateControlStyles( control );
		}

		for ( const device in this.responsiveCSS ) {

			if ( ! this.responsiveCSS[ device ] ) {
				continue;
			}

			const mediaQueryCSS = withMediaQuery( this.responsiveCSS[ device ], device );

			if ( mediaQueryCSS ) {
				this.css += mediaQueryCSS;
			}
		}

		return {
			styles: this.css,
			variables: this.cssVariables,
		}
	}

	generateResponsiveStyles( controlID, cssSelectors, ControlHandler ) {
		for ( const device in getBreakpoints() ) {
			if ( ! this.attributes?.[ device ]?.[ controlID ] ) {
				continue;
			}

			const controlInstance = new ControlHandler(
				this.uniqueClassName,
				this.attributes[ device ][ controlID ]
			);

			for ( const selector in cssSelectors ) {
				const selectorStyles = controlInstance.parseSelector(
					selector,
					cssSelectors[ selector ]
				);

				if ( ! this.responsiveCSS[ device ] ) {
					this.responsiveCSS[ device ] = '';
				}

				this.responsiveCSS[ device ] += selectorStyles;
			}
		}
	}

	generateResponsiveVariables( controlID, cssVar, ControlHandler ) {

		for ( const device in getBreakpoints() ) {

			cssVar.suffix = '';

			if ( ! this.attributes?.[ device ]?.[ controlID ] ) {
				continue;
			}

			cssVar.suffix = device;

			const controlInstance = new ControlHandler(
				this.uniqueClassName,
				this.attributes[ device ][ controlID ]
			);

			this.cssVariables = {
				...this.cssVariables,
				...controlInstance.parseVariable( cssVar ),
			};
		}
	}

	generateControlStyles( control ) {

		const ControlHandler = this.getControlHandler( control );
		const controlID = control.id || false;
		const { attributes } = this;

		if ( ControlHandler && controlID && attributes[ controlID ] ) {

			const controlInstance = new ControlHandler(
				this.uniqueClassName,
				this.attributes[ controlID ]
			);

			if ( control.css_selector ) {
				for ( const selector in control.css_selector ) {
					this.css += controlInstance.parseSelector(
						selector,
						control.css_selector[ selector ]
					);
				}

				this.generateResponsiveStyles( controlID, control.css_selector, ControlHandler );
			}

			if ( control.css_var ) {

				this.cssVariables = {
					...this.cssVariables,
					...controlInstance.parseVariable( control.css_var ),
				};

				this.generateResponsiveVariables( controlID, control.css_var, ControlHandler );
			}
		}

		if ( control.children ) {
			for ( const childControl of control.children ) {
				this.generateControlStyles( childControl );
			}
		}
	}
}