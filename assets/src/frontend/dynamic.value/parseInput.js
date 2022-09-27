import createValues from './createValues';
import getProperties from './getProperties';

function parseInput( input ) {
	const [ node ] = input.nodes;
	const wrapper  = node.closest( '.jet-form-builder-row' );

	if ( wrapper && wrapper.dataset.hasOwnProperty( 'value' ) ) {
		createValues( wrapper.dataset.value, input );

		return;
	}

	for ( const property of getProperties( input ) ) {
		property.runObserve( input );
	}

}

export default parseInput;