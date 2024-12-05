import getCustomCheckboxInput from './getCustomCheckboxInput';
import processOption from './processOption';

const {
	      isEmpty,
      } = JetFormBuilderFunctions;

/**
 * @param value {Array}
 * @param input {CheckboxData}
 */
function sanitizeCheckbox( value, input ) {
	input.calcValue = 0;
	const copyValue = input.isArray() ? [ ...value ] : value;

	for ( const node of input.nodes ) {
		(
			!node.dataset.custom
		) && processOption( node, copyValue, input );
	}

	if ( !input.addNewButton ) {
		return value;
	}

	const customNodes = input.getCustomNodes();

	/**
	 * Return if custom options don't exist
	 * And if values list is empty.
	 *
	 * @see processOption
	 */
	if ( customNodes.length && !copyValue.length ) {
		const limit = Math.max( customNodes.length, copyValue.length );

		for ( let i = limit - 1; i >= 0; i-- ) {
			if ( customNodes[ i ] ) {
				let currentNode    = customNodes[ i ];
				const currentValue = copyValue[ i ];

				// value has been removed
				if ( undefined === currentValue ) {
					currentNode.closest( '.custom-option' ).remove();
				}
			}
		}

		return;
	}

	const limit = Math.max( customNodes.length, copyValue.length );

	for ( let i = limit - 1; i >= 0; i-- ) {
		let currentNode    = customNodes[ i ];
		const currentValue = copyValue[ i ];

		// value has been removed
		if ( null === currentValue || undefined === currentValue ) {
			if ( currentNode ) {
				currentNode.closest( '.custom-option' ).remove();
			}

			continue;
		}

		// add row element in dom
		if ( 'undefined' === typeof currentNode ) {
			// it can't be disabled, something went wrong
			if ( false === currentValue ) {
				continue;
			}
			input.addCustomOption();

			currentNode = input.nodes[ input.nodes.length - 1 ];
		}

		const inputNode    = getCustomCheckboxInput( currentNode );
		inputNode.disabled = false === currentValue;

		// add 1 if custom option not deselected, not with empty value
		// and hasn't just added
		if ( !inputNode.disabled &&
			!isEmpty( currentValue ) &&
			true !== currentValue
		) {
			input.calcValue += 1;
		}

		if ( inputNode.value === currentValue ||
			'boolean' === typeof currentValue
		) {
			continue;
		}

		inputNode.value = currentValue;
	}

	return value.filter( val => null !== val );
}

export default sanitizeCheckbox;