import MultiStepState from './MultiStepState';

function createMultiStep( rootOrBlock ) {
	const multistep = new MultiStepState();
	multistep.setScope( rootOrBlock );

	const pages = [];
	const scopeNode = multistep.getScopeNode();

	for ( const page of scopeNode.querySelectorAll( '.jet-form-builder-page' ) ) {
		if ( !isPageBelongScope( page, scopeNode ) ) {
			continue;
		}
		pages.push( page );
	}

	if ( !pages.length ) {
		return multistep;
	}

	multistep.setProgress();
	multistep.setPages( pages );

	return multistep;
}

function isPageBelongScope( page, scopeNode ) {
	const parentConditional = page.parentElement.closest(
		'.jet-form-builder__conditional',
	);

	if ( scopeNode.classList.contains( 'jet-form-builder__conditional' ) ) {
		return scopeNode.isEqualNode( parentConditional );
	}

	return null === parentConditional;
}

export { createMultiStep };
