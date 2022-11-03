import InputData from './InputData';
import { isMultiSelect } from '../supports';

function MultiSelectData() {
	InputData.call( this );

	this.isSupported    = function ( node ) {
		return isMultiSelect( node );
	};
	this.addListeners   = function () {
		const [ node ] = this.nodes;

		node.addEventListener( 'change', () => this.setValue() );
		node.addEventListener( 'blur', () => this.reportOnBlur() );
	};
	this.setValue       = function () {
		this.value.current = this.getActiveValue();
	};
	this.getActiveValue = function () {
		const [ node ] = this.nodes;

		return Array.from( node.options ).
			filter( item => item.selected ).
			map( item => item.value );
	};
	this.valueType      = function () {
		return Array;
	};
}

MultiSelectData.prototype = Object.create( InputData.prototype );

export default MultiSelectData;