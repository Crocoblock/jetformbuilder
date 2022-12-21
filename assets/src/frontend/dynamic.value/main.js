import { parseInput } from './functions';

const { addAction } = JetPlugins.hooks;

addAction(
	'jet.fb.observe.after',
	'jet-form-builder/dynamic-value',
	/**
	 * @param observable {Observable}
	 */
	function ( observable ) {
		for ( const dataInput of observable.getInputs() ) {
			parseInput( dataInput );
		}
	}
);
