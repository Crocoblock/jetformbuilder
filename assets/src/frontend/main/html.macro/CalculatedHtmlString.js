import CalculatedFormula from '../calc.module/CalculatedFormula';
import getFilters from '../calc.module/getFilters';
import applyValueFilters from '../calc.module/applyFilters';
import { SafeHtml } from './escapeHtml';
import sanitizeHtml from './sanitizeHtml';

const { applyFilters } = JetPlugins.hooks;

const MACRO_FORMAT_OPTION_LABEL = 'option-label';

function getInputOptionLabel(node) {

	if (!node) {
		return '';
	}
	if (node.tagName === 'SELECT') {
		const selectedOptions = Array.from(node.selectedOptions || []);
		return selectedOptions
			.map((option) => String(
				option.label || option.textContent || option.value || ''
			).trim())
			.filter(Boolean)
			.join(', ');
	}
	if (
		(node.type === 'checkbox' || node.type === 'radio') &&
		!node.checked
	) {
		return '';
	}
	if (node.type === 'checkbox' || node.type === 'radio') {
		const label = node.closest('label');
		if (!label) {
			return '';
		}
		const textNode = label.querySelector('span');
		return String(
			textNode?.textContent || label.textContent || node.value || ''
		).trim();
	}
	return '';

}

function getInputOptionLabels(input) {

	const nodes = Array.from(input.nodes || []);
	return nodes
		.map(getInputOptionLabel)
		.filter(Boolean)
		.join(', ');

}

function unwrapSafeHtml( value ) {
	return value instanceof SafeHtml ? value.toString() : value;
}

function CalculatedHtmlString(
	root,
	{ 
		withPrefix = true, 
		macroHost = false, 
		macroFormat = '',
		...options 
	} = {},
) {
	CalculatedFormula.call( this, root, options );

	if ( withPrefix ) {
		this.regexp = /JFB_FIELD::(.+)/gi;
	}

	this.macroHost = macroHost || false;
	this.macroFormat = macroFormat || '';

	this.relatedCallback = function ( input ) {
		const $fieldNode = jQuery( input.nodes[ 0 ] );
		const $macroHost = this.macroHost ? jQuery( this.macroHost ) : false;

		let fieldValue = applyFilters(
			'jet.fb.macro.field.value',
			false,
			$fieldNode,
			$macroHost,
			this.macroFormat,
		);

		fieldValue = wp?.hooks?.applyFilters
			? wp.hooks.applyFilters(
				'jet.fb.macro.field.value',
				fieldValue,
				$fieldNode,
				$macroHost,
				this.macroFormat,
			)
			: fieldValue;

		if (false !== fieldValue) {
			return new SafeHtml( fieldValue );
		}

		if (MACRO_FORMAT_OPTION_LABEL === this.macroFormat) {
			return getInputOptionLabels(input) || input.value.current;
		}

		return input.value.current;
	}.bind( this );

	this.onMissingPart = function () {};
}

CalculatedHtmlString.prototype = Object.create( CalculatedFormula.prototype );

CalculatedHtmlString.prototype.observeMacro = function ( current ) {
	if ( null === this.formula ) {
		this.formula = current;
	}

	const [ name, ...filters ] = current.split( '|' );
	const parsedName           = name.match( /[\w\-:]+/g );

	if ( ! parsedName ) {
		return false;
	}

	const [ fieldName, ...params ] = parsedName;
	const existNode                = this.isFieldNodeExists( fieldName );

	if ( undefined === existNode ) {
		return false;
	}

	const relatedInput = fieldName !== 'this'
		? this.root.getInput( fieldName )
		: this.input;

	if ( ! relatedInput && ! fieldName.includes( '::' ) ) {
		return false;
	}

	const filtersList = getFilters( filters );

	if ( fieldName.includes( '::' ) ) {
		return CalculatedFormula.prototype.observeMacro.call( this, current );
	}

	if ( ! this.related.includes( relatedInput.name ) ) {
		this.related.push( relatedInput.name );
		this.watchers.push(
			relatedInput.watch( () => this.setResult() ),
		);
	}

	if ( ! params?.length ) {
		return () => {
			if ( 'repeater' === relatedInput.inputType && filtersList?.length ) {
				// Preserve repeater macro side effects like inner input change binding.
				const relatedValue = unwrapSafeHtml( this.relatedCallback( relatedInput ) );
				relatedInput.reQueryValue?.();

				return applyValueFilters(
					relatedValue,
					filtersList,
					{ rawRepeaterValue: relatedInput.value.current },
				);
			}

			const value = this.relatedCallback( relatedInput );

			if ( value instanceof SafeHtml && ! filtersList?.length ) {
				return value;
			}

			// filters get the original value type (null, false, array...), only the
			// SafeHtml marker is dropped
			return applyValueFilters( unwrapSafeHtml( value ), filtersList );
		};
	}

	const [ attrName ] = params;

	if ( ! relatedInput.attrs.hasOwnProperty( attrName ) ) {
		return false;
	}

	const htmlAttr = relatedInput.attrs[ attrName ];

	if ( ! this.relatedAttrs.includes( relatedInput.name + attrName ) ) {
		this.relatedAttrs.push( relatedInput.name + attrName );
		this.watchers.push(
			htmlAttr.value.watch( () => this.setResult() ),
		);
	}

	return () => applyValueFilters( htmlAttr.value.current, filtersList );
};

CalculatedHtmlString.prototype.mapParts = function ( mapValue ) {
	if ( ! this.parts.length ) {
		return this.formula;
	}

	return this.parts
		.map( ( current ) => {
			if ( 'function' !== typeof current ) {
				return current;
			}

			const result = current();

			if ( null === result || undefined === result || '' === result ) {
				return '';
			}

			return mapValue( result );
		} )
		.join( '' );
};

/**
 * Plain string, for assigning to element properties (href, value, title...),
 * where nothing is parsed as HTML.
 */
CalculatedHtmlString.prototype.calculateString = function () {
	return this.mapParts( ( result ) => String( result ) );
};

/**
 * For `innerHTML` sinks.
 *
 * - Field values are user-controlled (typed text, query_var presets, ...),
 *   so each value is sanitized on its own.
 * - The template text around the macros is sanitized too: it is read from a
 *   data-jfb-macro attribute or an HTML comment, and such an element can
 *   come from site data printed inside the form (e.g. an option label
 *   generated from post meta), not only from the form author. The browser
 *   has already decoded entities in the attribute, so "&lt;img onerror&gt;"
 *   there would otherwise become a live element. The whole string is
 *   sanitized at once, so tags opened and closed around a macro stay intact.
 * - Markup built by trusted macro handlers (SafeHtml) is kept as is: it is
 *   swapped for a random placeholder while the rest is sanitized.
 */
CalculatedHtmlString.prototype.calculateHtml = function () {
	const trusted = [];
	const marker  = 'jfbsafe' + Math.random().toString( 36 ).slice( 2 ) + 'x';

	const html = this.mapParts( ( result ) => {
		if ( result instanceof SafeHtml ) {
			trusted.push( result.toString() );

			return marker + ( trusted.length - 1 ) + marker;
		}

		return sanitizeHtml( result );
	} );

	const clean = sanitizeHtml( html );

	if ( ! trusted.length ) {
		return clean;
	}

	return clean.replace(
		new RegExp( marker + '(\\d+)' + marker, 'g' ),
		( match, index ) => trusted[ Number( index ) ] ?? '',
	);
};

export default CalculatedHtmlString;
