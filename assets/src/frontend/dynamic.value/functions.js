import ValueItem from './ValueItem';
import MultipleValueItem from './MultipleValueItem';
import ReactiveValue from './ReactiveValue';

const { applyFilters } = JetPlugins.hooks;

const getValues = () => applyFilters(
	'jet.fb.dynamic.value.types',
	[
		MultipleValueItem,
		ValueItem,
	],
);
/**
 * @type {ValueItem[]}
 */
let values      = [];

/**
 * @param input
 * @returns {ValueItem}
 */
const getValue = ( input ) => {
	if ( !values.length ) {
		values = getValues();
	}

	for ( const value of values ) {
		const current = new value();

		if ( !current.isSupported( input ) ) {
			continue;
		}
		return current;
	}
};

function createValues( json, input ) {
	let groups = [];

	try {
		groups = JSON.parse( json );
	}
	catch ( error ) {
		console.error( error );
		return;
	}

	for ( const group of groups ) {
		const value = getValue( input );

		value.observe( group, input );
	}
}

function parseInput( input ) {
	const [ node ] = input.nodes;
	const wrapper  = node.closest( '.jet-form-builder-row' );

	if ( wrapper && wrapper.dataset.hasOwnProperty( 'value' ) ) {
		createValues( wrapper.dataset.value, input );
	}
	// for hidden-field case
	else if ( node.dataset.hasOwnProperty( 'dynamicValue' ) ) {
		createValues( node.dataset.dynamicValue, input );
	}

	for ( const property of getProperties( input ) ) {
		property.runObserve( input );
	}

}

import BaseReactiveProperty from './BaseReactiveProperty';

/**
 * @type {BaseReactiveProperty[]}
 */
const reactProperties = [
	new BaseReactiveProperty( 'min' ),
	new BaseReactiveProperty( 'max' ),
	new ReactiveValue(),
];

/**
 * @param input {InputData}
 * @return {Generator<BaseReactiveProperty>}
 */
function* getProperties( input ) {
	for ( const reactProperty of reactProperties ) {
		if (
			reactProperty.isSupported( input )
		) {
			yield reactProperty;
		}
	}

}

export { parseInput, getProperties };