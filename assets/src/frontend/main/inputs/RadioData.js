import InputData from './InputData';
import { isRadio } from '../supports';
import ReactiveHook from '../reactive/ReactiveHook';

function RadioData() {
	InputData.call( this );

	this.isSupported    = function ( node ) {
		return isRadio( node );
	};
	this.addListeners   = function () {
		this.enterKey = new ReactiveHook();

		for ( const nodeElement of this.nodes ) {
			nodeElement.addEventListener( 'change', () => this.setValue() );
			nodeElement.addEventListener(
				'keydown',
				this.handleEnterKey.bind( this ),
			);

			/**
			 * @since 3.0.1
			 */
			jQuery( nodeElement ).on( 'change', () => this.setValue() );
		}
	};
	this.setValue       = function () {
		this.value.current = this.getActiveValue();
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