import MultiStepState from './MultiStepState';

function createMultiStep( rootOrBlock ) {
	const multistep = new MultiStepState();
	multistep.setScope( rootOrBlock );

	const pages = [];

	for ( const child of multistep.getScopeNode().children ) {
		if ( !child.classList.contains( 'jet-form-builder-page' ) ) {
			continue;
		}
		pages.push( child );
	}

	if ( !pages.length ) {
		return multistep;
	}

	multistep.setPages( pages );

	return multistep;
}

export { createMultiStep };