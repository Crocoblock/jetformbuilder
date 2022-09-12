import MultiStepState from './MultiStepState';

function createMultiStep( rootOrBlock ) {
	const multistep = new MultiStepState();
	multistep.setScope( rootOrBlock );
	multistep.setPages();

	return multistep;
}

export { createMultiStep };