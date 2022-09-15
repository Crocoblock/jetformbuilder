import createValues from './createValues';
import DynamicStaticValue from './DynamicStaticValue';

function parseInput( input ) {
	const [ node ] = input.nodes;
	const wrapper  = node.closest( '.jet-form-builder-row' );

	if ( wrapper && wrapper.dataset.hasOwnProperty( 'value' ) ) {
		createValues( wrapper.dataset.value, input );

		return;
	}

	if ( node.dataset.hasOwnProperty( 'value' ) ) {
		new DynamicStaticValue( node.dataset.value, input );
	}
}

export default parseInput;