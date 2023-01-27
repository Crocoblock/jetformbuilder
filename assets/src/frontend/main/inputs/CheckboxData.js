import InputData from './InputData';
import { isCheckbox } from '../supports';
import ReactiveHook from '../reactive/ReactiveHook';

function CheckboxData() {
	InputData.call( this );

	this.isSupported  = function ( node ) {
		return isCheckbox( node );
	};
	this.addListeners = function () {
		this.sanitize( value => Array.isArray( value ) ? value : [ value ] );
		this.enterKey = new ReactiveHook();

		for ( const node of this.nodes ) {
			node.addEventListener( 'change', () => this.setValue() );
			node.addEventListener(
				'keydown',
				this.handleEnterKey.bind( this ),
			);
		}
	};
	this.setValue     = function () {
		this.value.current = this.getActiveValue();
	};

	this.merge = function ( inputData ) {
		this.nodes.push( ...inputData.getNode() );
	};

	this.getActiveValue = function () {
		return Array.from( this.nodes ).
			filter( item => item.checked ).
			map( item => item.value );
	};
	this.valueType      = function () {
		return Array;
	};
}

CheckboxData.prototype = Object.create( InputData.prototype );

export default CheckboxData;