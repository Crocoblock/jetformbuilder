import BaseSignal from './BaseSignal';
import { isHidden } from '../supports';

function SignalHiddenArray() {
	BaseSignal.call( this );
}

SignalHiddenArray.prototype = Object.create( BaseSignal.prototype );

SignalHiddenArray.prototype.isSupported = function ( node, inputData ) {
	return isHidden( node ) && inputData.isArray();
};
SignalHiddenArray.prototype.runSignal   = function () {
	const { current } = this.input.value;

	if ( !current?.length ) {
		for ( const node of this.input.nodes ) {
			node.remove();
		}

		this.input.nodes.splice( 0, this.input.nodes.length );
		return;
	}

	const saveNodes = [];

	for ( const value of current ) {
		const hasNodeWithSameValue = this.input.nodes.some(
			( node, index ) => {
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
		newElement.type  = 'hidden';
		newElement.value = value;
		newElement.name  = this.input.rawName;

		this.input.nodes.push( newElement );
		saveNodes.push( this.input.nodes.length - 1 );

		this.input.comment.parentElement.insertBefore(
			newElement,
			this.input.comment.nextElementSibling,
		);
	}

	this.input.nodes = this.input.nodes.filter( ( node, index ) => {
		if ( saveNodes.includes( index ) ) {
			return true;
		}
		node.remove();
		return false;
	} );
};

export default SignalHiddenArray;