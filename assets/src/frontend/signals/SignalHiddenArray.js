import BaseSignal from './BaseSignal';

class SignalHiddenArray extends BaseSignal {

	isSupported( inputData ) {
		const [ node ] = inputData.nodes;

		return 'hidden' === node.type && inputData.isArray();
	}

	runSignal( inputData ) {
		if ( ! inputData.value.current.length ) {
			for ( const node of inputData.nodes ) {
				node.remove();
			}

			inputData.nodes.splice( 0, inputData.nodes.length );
			return;
		}

		const saveNodes = [];

		for ( const value of inputData.value.current ) {
			const hasNodeWithSameValue = inputData.nodes.some( ( node, index ) => {
				if ( node.value !== value ) {
					return false;
				}
				saveNodes.push( index );
				return true;
			} );

			if ( hasNodeWithSameValue ) {
				continue;
			}

			const newElement = document.createElement( 'input' );
			newElement.type = 'hidden';
			newElement.value = value;
			newElement.name = inputData.rawName;

			inputData.nodes.push( newElement );
			saveNodes.push( inputData.nodes.length - 1 );

			inputData.comment.parentElement.insertBefore( newElement, inputData.comment.nextElementSibling );
		}

		inputData.nodes = inputData.nodes.filter( ( node, index ) => {
			if ( saveNodes.includes( index ) ) {
				return true;
			}
			node.remove();
			return false;
		} );
	}
}

export default SignalHiddenArray;