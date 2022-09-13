import DynamicStaticValue from './DynamicStaticValue';
import createValues from './createValues';

const { addAction } = wp.hooks;

addAction(
	'jet.fb.input.onObserve',
	'jet-form-builder/dynamic-value',
	/**
	 * @param input {InputData}
	 */
	function ( input ) {
		const [ node ] = input.nodes;
		const wrapper  = node.closest( '.jet-form-builder-row' );

		if ( wrapper && wrapper.dataset.hasOwnProperty( 'value' ) ) {
			createValues( wrapper.dataset.value, input );

			return;
		}

		if ( node.dataset.hasOwnProperty( 'value' ) ) {
			new DynamicStaticValue( node.dataset.value, input );
		}
	},
);
