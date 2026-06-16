import CalculatedFormula from '../calc.module/CalculatedFormula';

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
			return fieldValue;
		}

		if (MACRO_FORMAT_OPTION_LABEL === this.macroFormat) {
			return getInputOptionLabels(input) || input.value.current;
		}

		return input.value.current;
	}.bind( this );

	this.onMissingPart = function () {};
}

CalculatedHtmlString.prototype = Object.create( CalculatedFormula.prototype );

CalculatedHtmlString.prototype.calculateString = function () {
	if ( !this.parts.length ) {
		return this.formula;
	}

	return this.parts
		.map( ( current ) => {
			if ( 'function' !== typeof current ) {
				return current;
			}

			const result = current();

			return ( null === result || '' === result ) ? '' : result;
		} )
		.join( '' );
};

export default CalculatedHtmlString;
