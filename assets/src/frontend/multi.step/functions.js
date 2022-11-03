import MultiStepState from './MultiStepState';

function createMultiStep( rootOrBlock ) {
	const multistep = new MultiStepState();
	multistep.setScope( rootOrBlock );

	const pages = Array.from(
		multistep.getScopeNode().querySelectorAll(
			'.jet-form-builder-page',
		),
	);

	if ( !pages.length ) {
		return multistep;
	}

	multistep.setPages( pages );

	return multistep;
}

export { createMultiStep };