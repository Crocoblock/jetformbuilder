export function getWrapper( input ) {
	return input.wrapper ?? input.nodes[ 0 ];
}

export function getLimits( input ) {
	const wrapper = getWrapper( input );
	return {
		min: Number( input.attrs.min_selections?.value.current ?? wrapper?.dataset.jfbMinSelections ) || 0,
		max: Number( input.attrs.max_selections?.value.current ?? wrapper?.dataset.jfbMaxSelections ) || 0,
	};
}

export function getOptions( input ) {
	const wrapper = getWrapper( input );
	return wrapper.matches( 'select' ) ? Array.from( wrapper.options ) : Array.from( input.nodes );
}

export function isSelected( node ) {
	return node.matches( 'option' ) ? node.selected && node.value !== '' : node.checked;
}

export function countSelected( input, bound = 'max' ) {
	return getOptions( input ).filter( node => {
		if ( !isSelected( node ) ) {
			return false;
		}
		if ( bound === 'min' && node.dataset.custom ) {
			return !!node.nextElementSibling?.querySelector( 'input.text-field' )?.value;
		}
		return bound !== 'min' || node.value !== '';
	} ).length;
}

export function getDefaultMessage( input, bound ) {
	const wrapper = getWrapper( input );
	return bound === 'min' ? wrapper.dataset.jfbMinSelectionsMessage : wrapper.dataset.jfbMaxSelectionsMessage;
}

export function showSelectionError( message ) {
	return getWrapper( this )?.jfbSelectionLimit?.showError( message ) ?? false;
}

export function clearSelectionError() {
	getWrapper( this )?.jfbSelectionLimit?.clearError();
}

