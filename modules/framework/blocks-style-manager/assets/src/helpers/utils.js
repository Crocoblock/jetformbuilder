/**
 * Get all block controls for given block
 *
 * @param {string} blockName
 * @returns {object} blockControls
 */
export const getBlockControls = ( blockName ) => {

	const blockControls = window.crocoBlockStyleEditor.getBlockControls( blockName );

	if ( ! blockControls ) {
		return {};
	}

	return blockControls;
}

/**
 * Check if given stack has children
 *
 * @param {object} stack
 * @returns {boolean}
 */
export const hasChildren = ( stack ) => {
	if ( ! stack.children ) {
		return false;
	}

	if ( Array.isArray( stack.children ) && stack.children.length > 0 ) {
		return true;
	}

	// Otherwise, return false
	return false;
}

/**
 * Check if given variable is an object
 *
 * @param {any} variable
 * @returns {boolean}
 */
export const isObject = ( variable ) => {
	return typeof variable === 'object' && variable !== null && !Array.isArray(variable);
}

export const isEmpty = ( variable ) => {

	if ( variable === null || variable === undefined ) {
		return true;
	}

	if ( typeof variable === 'string' && variable.trim() === '' ) {
		return true;
	}

	if ( Array.isArray( variable ) && variable.length === 0 ) {
		return true;
	}

	if ( isObject( variable ) && Object.keys( variable ).length === 0 ) {
		return true;
	}

	return false;
}

export const valueIsEmpty = ( value ) => {

	if ( isEmpty( value ) ) {
		return true;
	}

	if ( isObject( value ) && Object.keys( value ).length > 0 ) {
		if ( Object.values( value ).every( ( v ) => isEmpty( v ) ) ) {
			return true;
		}
	}

	return false;
}
