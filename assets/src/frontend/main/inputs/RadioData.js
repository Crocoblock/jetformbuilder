import InputData from './InputData';
import { isRadio } from '../supports';

function RadioData() {
	InputData.call( this );

	this.isSupported    = function ( node ) {
		return isRadio( node );
	};
	this.addListeners   = function () {
		for ( const nodeElement of this.nodes ) {
			nodeElement.addEventListener( 'change', event => {
				this.setValue();
			} );
		}
	};
	this.setValue       = function () {
		this.value.current = this.getActiveValue();
		this.callable.run();
	};
	this.getActiveValue = function () {
		for ( const node of this.nodes ) {
			if ( node.checked ) {
				return node.value;
			}
		}

		return '';
	};

	this.merge = function ( inputData ) {
		this.nodes.push( ...inputData.getNode() );
	};
}

RadioData.prototype = Object.create( InputData.prototype );

export default RadioData;