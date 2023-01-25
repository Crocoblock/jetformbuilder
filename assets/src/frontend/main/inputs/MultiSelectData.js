import InputData from './InputData';
import { isMultiSelect } from '../supports';
import ReactiveHook from '../reactive/ReactiveHook';

function MultiSelectData() {
	InputData.call( this );

	this.isSupported    = function ( node ) {
		return isMultiSelect( node );
	};
	this.addListeners   = function () {
		this.sanitize( value => Array.isArray( value ) ? value : [ value ] );

		const [ node ] = this.nodes;

		node.addEventListener( 'change', () => this.setValue() );
		node.addEventListener( 'blur', () => this.reportOnBlur() );

		this.enterKey = new ReactiveHook();
		node.addEventListener( 'keydown', this.handleEnterKey.bind( this ) );
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
	this.onClear        = function () {
		this.silenceSet( [] );
	};
}

MultiSelectData.prototype = Object.create( InputData.prototype );

export default MultiSelectData;