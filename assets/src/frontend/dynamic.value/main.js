import parseInput from './parseInput';

const { addAction } = wp.hooks;

addAction(
	'jet.fb.observe.after',
	'jet-form-builder/dynamic-value',
	/**
	 * @param observable {Observable}
	 */
	function ( observable ) {
		for ( const input of observable.generateInputs() ) {
			parseInput( input );
		}
	}
);
