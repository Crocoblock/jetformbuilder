import InputData from './InputData';
import { isMultiSelect } from '../supports';

function MultiSelectData() {
	InputData.call( this );

	this.isSupported  = function ( node ) {
		return isMultiSelect( node );
	};
	this.addListeners = function () {
		const [ node ] = this.nodes;

		node.addEventListener( 'change', event => {
			const values = [];

			for ( const option of event.target.options ) {
				if ( !option.selected ) {
					continue;
				}
				values.push( option.value );
			}

			this.value.current = values;
		} );
	};
	this.valueType    = function () {
		return Array;
	};
}

MultiSelectData.prototype = Object.create( InputData.prototype );

export default MultiSelectData;