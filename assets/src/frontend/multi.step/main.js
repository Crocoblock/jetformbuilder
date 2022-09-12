import { createMultiStep } from './functions';

const { addAction } = wp.hooks;

addAction(
	'jet.fb.observe.after',
	'jet-form-builder/multi-step',
	function ( observable ) {
		const multistep = createMultiStep( observable );

		if ( !multistep.getPages()?.length ) {
			return;
		}

		observable.multistep = multistep;
	},
);

addAction(
	'jet.fb.conditional.init',
	'jet-form-builder/multi-step',
	function ( block ) {
		const multistep = createMultiStep( block );

		if ( !multistep.getPages()?.length ) {
			return;
		}

		block.multistep = multistep;
	},
);