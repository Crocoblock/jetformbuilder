export function oneOf ( value, validList ) {

	for ( let i = 0; i < validList.length; i++ ) {
		if ( value == validList[ i ] ) {
			return true;
		}
	}

	return false;

}

export function arraysEqual( arr1, arr2 ) {

	if ( arr1.length !== arr2.length ) {
		return false;
	}

	for ( var i = arr1.length; i--; ) {
		if ( arr1[i] !== arr2[i] ) {
			return false;
		}
	}

	return true;

}