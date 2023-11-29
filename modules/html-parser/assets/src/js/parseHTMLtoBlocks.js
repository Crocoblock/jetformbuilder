import inputParser from './node-parsers/inputParser';
import selectParser from './node-parsers/selectParser';
import textAreaParser from './node-parsers/textAreaParser';
import buttonParser from './node-parsers/buttonParser';

const {
	      applyFilters,
      } = JetPlugins.hooks;

const nodeParsers = {
	INPUT: inputParser,
	SELECT: selectParser,
	TEXTAREA: textAreaParser,
	BUTTON: buttonParser,
};

function parseHTMLtoBlocks( content ) {
	const element     = document.createElement( 'div' );
	element.innerHTML = content;

	const blocks = [];

	// input, textarea, select - for fields, and maybe submit button
	// button - for submit button
	/**
	 * @type {Node[]}
	 */
	const fields = element.querySelectorAll(
		'input, textarea, select, button',
	);

	for ( const field of fields ) {
		// for third-party parsers
		const preBlocks = applyFilters( 'jet.fb.parse.node', false, field );

		// should be array of blocks
		if ( Array.isArray( preBlocks ) ) {
			blocks.push( ...preBlocks );

			continue;
		}

		const generator = nodeParsers[ field.nodeName ];

		blocks.push( ...Array.from( generator( field ) ) );
	}

	return blocks;
}



export default parseHTMLtoBlocks;