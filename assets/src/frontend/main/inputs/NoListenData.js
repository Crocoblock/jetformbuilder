import InputData from './InputData';
import { isHidden } from '../supports';

function NoListenData() {
	InputData.call( this );
	/**
	 * @type {Node}
	 */
	this.comment = null;

	this.isSupported  = function ( node ) {
		return isHidden( node );
	};
	this.addListeners = function () {
		// silence is golden
	};
	this.onObserve    = function () {
		InputData.prototype.onObserve.call( this );

		if ( !this.isArray() ) {
			return;
		}

		this.setComment();
	};
	this.setComment   = function () {
		this.comment   = document.createComment( this.name );
		const [ node ] = this.nodes;

		node.parentElement.insertBefore( this.comment, node );
	};

	this.merge = function ( input ) {
		this.nodes.push( ...input.getNode() );
	};
}

NoListenData.prototype = Object.create( InputData.prototype );

export default NoListenData;