import MultiStepState from './MultiStepState';

function createMultiStep( rootOrBlock ) {
	const multistep = new MultiStepState();
	multistep.setScope( rootOrBlock );

	const pages = [];

	for ( const child of multistep.getScopeNode().childNodes ) {
		if ( !child?.classList?.contains( 'jet-form-builder-page' ) ) {
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

function getScrollParent( node ) {
	if ( node == null ) {
		return null;
	}

	if ( node === document ) {
		return window;
	}

	if ( node.scrollHeight > node.clientHeight ) {
		return node;
	}
	else {
		return getScrollParent( node.parentNode );
	}
}

export { createMultiStep, getScrollParent };